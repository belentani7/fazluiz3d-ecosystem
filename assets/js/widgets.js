/*
 * FAZLUIZ3D · Local widgets
 * Copyright (c) 2026 Belentani.
 * SPDX-License-Identifier: MIT
 */
(function () {
  'use strict';
  var calculator = document.getElementById('quoteCalculator');
  var form = document.getElementById('leadForm');
  var amount = document.getElementById('quoteAmount');
  var summary = document.getElementById('quoteSummary');
  var exportButton = document.getElementById('exportLocalData');
  var dbStatus = document.getElementById('localDbStatus');

  function euro(value) {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
  }
  function calculate() {
    if (!calculator || !amount) return null;
    var material = calculator.elements.material.value;
    var size = Number(calculator.elements.size.value || 1);
    var urgency = calculator.elements.urgency.value;
    var finish = calculator.elements.finish.value;
    var materialFactor = { asa: 1.1, pa12: 1.35, petgcf: 1.25, resin: 1.45 }[material] || 1;
    var urgencyFactor = { standard: 1, rush: 1.35, express: 1.7 }[urgency] || 1;
    var finishCost = { raw: 0, qc: 18, premium: 42 }[finish] || 0;
    var base = 28 + size * 16;
    var estimate = Math.round((base * materialFactor * urgencyFactor + finishCost) / 5) * 5;
    var label = material.toUpperCase() + ' · ' + size + ' cm³ · ' + urgency;
    amount.textContent = euro(estimate);
    if (summary) summary.textContent = label + ' · estimación orientativa';
    return { material: material, volume: size, urgency: urgency, finish: finish, estimate: estimate };
  }
  if (calculator) {
    Array.prototype.forEach.call(calculator.querySelectorAll('select,input'), function (field) {
      field.addEventListener('input', calculate);
      field.addEventListener('change', calculate);
    });
    calculator.addEventListener('submit', function (event) {
      event.preventDefault();
      var quote = calculate();
      if (window.FazluizDB && quote) {
        window.FazluizDB.addQuote(quote).then(function () {
          if (window.toast) window.toast('success', 'Presupuesto guardado', 'Queda guardado localmente en este dispositivo.');
        });
      }
    });
    calculate();
  }
  if (exportButton) exportButton.addEventListener('click', function () {
    if (window.FazluizDB) window.FazluizDB.downloadExport().then(function () {
      if (window.toast) window.toast('success', 'Exportación lista', 'Se descargó el registro local en JSON.');
    });
  });
  if (dbStatus && window.FazluizDB) {
    window.FazluizDB.stats().then(function (stats) {
      dbStatus.textContent = 'DB LOCAL · ' + stats.storage.toUpperCase();
      dbStatus.title = stats.leads + ' leads · ' + stats.quotes + ' presupuestos';
    });
  }
})();
