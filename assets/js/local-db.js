/*
 * FAZLUIZ3D · Local Data Layer
 * Copyright (c) 2026 Belentani.
 * SPDX-License-Identifier: MIT
 *
 * Local-first persistence: IndexedDB with a safe localStorage fallback.
 * No Manus, cloud database, API key, or external account is required.
 */
(function (global) {
  'use strict';

  var DB_NAME = 'fazluiz-local';
  var DB_VERSION = 1;
  var STORES = ['leads', 'quotes', 'events'];
  var memory = {};
  STORES.forEach(function (name) { memory[name] = []; });
  var openPromise;

  function fallbackKey(store) { return DB_NAME + ':' + store; }
  function fallbackRead(store) {
    try { return JSON.parse(localStorage.getItem(fallbackKey(store)) || '[]'); }
    catch (_) { return memory[store].slice(); }
  }
  function fallbackWrite(store, value) {
    memory[store] = value.slice();
    try { localStorage.setItem(fallbackKey(store), JSON.stringify(value)); } catch (_) {}
    return Promise.resolve(value);
  }
  function open() {
    if (openPromise) return openPromise;
    if (!('indexedDB' in global)) return Promise.resolve(null);
    openPromise = new Promise(function (resolve) {
      var request;
      try { request = global.indexedDB.open(DB_NAME, DB_VERSION); }
      catch (_) { resolve(null); return; }
      request.onupgradeneeded = function () {
        var db = request.result;
        STORES.forEach(function (store) {
          if (!db.objectStoreNames.contains(store)) db.createObjectStore(store, { keyPath: 'id' });
        });
      };
      request.onsuccess = function () { resolve(request.result); };
      request.onerror = function () { resolve(null); };
    });
    return openPromise;
  }
  function put(store, value) {
    return open().then(function (db) {
      if (!db) return fallbackWrite(store, fallbackRead(store).concat([value]));
      return new Promise(function (resolve) {
        var tx = db.transaction(store, 'readwrite');
        tx.objectStore(store).put(value);
        tx.oncomplete = function () { resolve(value); };
        tx.onerror = function () { resolve(fallbackWrite(store, fallbackRead(store).concat([value]))); };
      });
    });
  }
  function list(store) {
    return open().then(function (db) {
      if (!db) return fallbackRead(store);
      return new Promise(function (resolve) {
        var req = db.transaction(store, 'readonly').objectStore(store).getAll();
        req.onsuccess = function () { resolve(req.result || []); };
        req.onerror = function () { resolve(fallbackRead(store)); };
      });
    });
  }
  function makeId(prefix) { return prefix + '_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8); }
  function now() { return new Date().toISOString(); }
  function addLead(payload) {
    var item = Object.assign({ id: makeId('lead'), createdAt: now(), status: 'new', source: 'fazluiz-local' }, payload || {});
    return put('leads', item).then(function () { return item; });
  }
  function addQuote(payload) {
    var item = Object.assign({ id: makeId('quote'), createdAt: now(), currency: 'EUR' }, payload || {});
    return put('quotes', item).then(function () { return item; });
  }
  function log(event, payload) {
    return put('events', { id: makeId('evt'), createdAt: now(), event: event, payload: payload || {} });
  }
  function stats() {
    return Promise.all([list('leads'), list('quotes')]).then(function (values) {
      return { leads: values[0].length, quotes: values[1].length, storage: ('indexedDB' in global ? 'IndexedDB' : 'localStorage') };
    });
  }
  function exportData() {
    return Promise.all(STORES.map(function (store) { return list(store); })).then(function (values) {
      return { exportedAt: now(), author: 'Belentani', database: DB_NAME, leads: values[0], quotes: values[1], events: values[2] };
    });
  }
  function downloadExport() {
    return exportData().then(function (data) {
      var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = url; link.download = 'fazluiz-local-export.json'; link.click();
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      return data;
    });
  }

  global.FazluizDB = {
    addLead: addLead,
    addQuote: addQuote,
    list: list,
    log: log,
    stats: stats,
    exportData: exportData,
    downloadExport: downloadExport,
    version: DB_VERSION,
    author: 'Belentani'
  };
})(window);
