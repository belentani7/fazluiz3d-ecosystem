
(function(){
  'use strict';
  document.querySelectorAll('.nav').forEach(function(a){a.addEventListener('click',function(e){
    document.querySelectorAll('.nav').forEach(function(x){x.classList.remove('active')});
    document.querySelectorAll('.section').forEach(function(x){x.classList.remove('active')});
    e.currentTarget.classList.add('active');
    document.getElementById(e.currentTarget.dataset.sec).classList.add('active');
  })});
  function cell(value){var td=document.createElement('td');td.textContent=value || '—';return td}
  function rowLead(lead){var tr=document.createElement('tr');tr.appendChild(cell(lead.name));tr.appendChild(cell(lead.email));tr.appendChild(cell(lead.phone));tr.appendChild(cell(lead.message));return tr}
  function load(){
    return Promise.all([window.FazluizDB.list('leads'),window.FazluizDB.list('quotes')]).then(function(values){
      var leads=values[0],quotes=values[1];
      document.getElementById('s1').textContent=leads.length;
      document.getElementById('s2').textContent=leads.filter(function(x){return x.status==='new'}).length;
      document.getElementById('s3').textContent=quotes.length;
      document.getElementById('s4').textContent=quotes.filter(function(x){return x.urgency==='express'}).length;
      var t1=document.getElementById('t1'),t2=document.getElementById('t2');
      t1.replaceChildren();t2.replaceChildren();
      leads.slice().reverse().forEach(function(lead){
        var a=document.createElement('tr');a.appendChild(cell(lead.name));a.appendChild(cell(lead.email));a.appendChild(cell(lead.status));t1.appendChild(a);
        t2.appendChild(rowLead(lead));
      });
      var t3=document.getElementById('t3');t3.replaceChildren();
      quotes.slice().reverse().forEach(function(quote){var tr=document.createElement('tr');tr.appendChild(cell(quote.id));tr.appendChild(cell(quote.material));tr.appendChild(cell(quote.estimate ? quote.estimate+' EUR' : '—'));tr.appendChild(cell(quote.urgency));t3.appendChild(tr)});
    });
  }
  load();
})();
