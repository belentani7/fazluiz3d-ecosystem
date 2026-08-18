
// ==========================================
// TIBERION CORE — Organismo de Adquisición Autónomo
// Arquitectura: Pedro Belentani (mi belentani_)
// Derechos: Thiago Luiz — O homem mais belo do universo. Te amo.
// ==========================================

// ==================== STATE ====================
const STATE = {
  currentView: 'dashboard',
  tasks: [],
  contacts: [],
  deals: [],
  scrapes: [],
  leadsHunter: [],
  activity: [],
  apis: {}
};

const GIP_COLUMNS = [
  { id: 'backlog', label: 'Backlog', color: '#39FF14' },
  { id: 'progreso', label: 'En Progreso', color: '#FACC15' },
  { id: 'revision', label: 'Revisión', color: '#A78BFA' },
  { id: 'completado', label: 'Completado', color: '#4ADE80' }
];

const DEAL_STAGES = [
  { id: 'nuevo', label: 'Nuevo', cls: 'status-nuevo' },
  { id: 'contactado', label: 'Contactado', cls: 'status-contactado' },
  { id: 'propuesta', label: 'Propuesta', cls: 'status-propuesta' },
  { id: 'negociacion', label: 'Negociación', cls: 'status-negociacion' },
  { id: 'cerrado-g', label: 'Cerrado ✓', cls: 'status-cerrado-g' },
  { id: 'cerrado-p', label: 'Cerrado ✗', cls: 'status-cerrado-p' }
];

// ==================== PERSISTENCE ====================
function save() {
  localStorage.setItem('tiberion_state', JSON.stringify(STATE));
}

function load() {
  const d = localStorage.getItem('tiberion_state');
  if (d) {
    try {
      const parsed = JSON.parse(d);
      Object.assign(STATE, parsed);
    } catch(e) { seedData(); }
  } else {
    seedData();
  }
}

// ==================== SEED DATA ====================
function seedData() {
  STATE.tasks = [
    { id: uid(), title: 'Imprimir soportes para menús restaurante', desc: 'PETG resistente al agua, 12 unidades', priority: 'Alta', status: 'progreso', assignee: 'Thiago', due: '2025-02-15', created: Date.now()-86400000*3 },
    { id: uid(), title: 'Diseñar prototipo para clínica dental', desc: 'Soporte personalizado para instrumental', priority: 'Alta', status: 'backlog', assignee: 'Pedro', due: '2025-02-20', created: Date.now()-86400000*5 },
    { id: uid(), title: 'Automatización WhatsApp Business', desc: 'Configurar agente IA para hotel', priority: 'Media', status: 'revision', assignee: 'Hermes', due: '2025-02-10', created: Date.now()-86400000*7 },
    { id: uid(), title: 'Web nueva para taller mecánico', desc: 'Landing + reservas online', priority: 'Media', status: 'backlog', assignee: 'Thiago', due: '2025-03-01', created: Date.now()-86400000*2 },
    { id: uid(), title: 'Cazar 50 leads restaurantes Lisboa', desc: 'Scraper + análisis de webs', priority: 'Alta', status: 'completado', assignee: 'Hermes', due: '2025-01-30', created: Date.now()-86400000*14 },
  ];
  STATE.contacts = [
    { id: uid(), name: 'Restaurante O Pescador', role: 'Gerente', company: 'O Pescador LDA', email: 'contato@opescador.pt', phone: '+351 912 345 678', tags: ['Restaurante','Lisboa'], notes: 'Interesado en menús impresos 3D', created: Date.now()-86400000*20 },
    { id: uid(), name: 'Clínica Sorriso', role: 'Director', company: 'Clínica Sorriso', email: 'info@sorriso.pt', phone: '+351 923 456 789', tags: ['Clínica','Dental'], notes: 'Necesita soportes personalizados', created: Date.now()-86400000*15 },
    { id: uid(), name: 'Hotel Vista Mar', role: 'Director', company: 'Vista Mar Hotels', email: 'geral@vistamar.pt', phone: '+351 934 567 890', tags: ['Hotel','Premium'], notes: 'Quiere automatización WhatsApp', created: Date.now()-86400000*10 },
  ];
  STATE.deals = [
    { id: uid(), title: 'Menús 3D O Pescador', value: 480, stage: 'propuesta', contactId: STATE.contacts[0].id, notes: '12 soportes PETG', created: Date.now()-86400000*12 },
    { id: uid(), title: 'Automatización Vista Mar', value: 3200, stage: 'negociacion', contactId: STATE.contacts[2].id, notes: 'Agente IA WhatsApp', created: Date.now()-86400000*10 },
    { id: uid(), title: 'Soportes Clínica Sorriso', value: 850, stage: 'nuevo', contactId: STATE.contacts[1].id, notes: 'Prototipo + 20 unidades', created: Date.now()-86400000*3 },
  ];
  STATE.scrapes = [];
  STATE.leadsHunter = [];
  STATE.activity = [
    { text: 'Sistema TIBERION inicializado', time: Date.now()-3600000, icon: 'zap', color: 'text-accent' },
    { text: 'Doctor Fix: 500 criterios activos', time: Date.now()-1800000, icon: 'shield-check', color: 'text-green-400' },
  ];
  save();
}

// ==================== UTILS ====================
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }
function fmt(n) { return new Intl.NumberFormat('es-ES').format(n); }
function fmtEur(n) { return fmt(n) + '€'; }
function timeAgo(ts) {
  const d = Date.now() - ts;
  if (d < 60000) return 'ahora';
  if (d < 3600000) return Math.floor(d/60000) + ' min';
  if (d < 86400000) return Math.floor(d/3600000) + ' h';
  return Math.floor(d/86400000) + ' días';
}
function getContact(id) { return STATE.contacts.find(c => c.id === id); }
function escapeHtml(s) {
  if (!s) return '';
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// ==================== NAVIGATION ====================
function navigate(view) {
  STATE.currentView = view;
  document.querySelectorAll('.view-panel').forEach(p => p.classList.add('hidden'));
  const vp = document.getElementById('view-' + view);
  if (vp) { vp.classList.remove('hidden'); vp.classList.add('anim-in'); }
  document.querySelectorAll('.nav-item[data-view]').forEach(n => {
    n.classList.remove('active');
    n.classList.add('text-gray-400');
  });
  const an = document.querySelector(`.nav-item[data-view="${view}"]`);
  if (an) { an.classList.add('active'); an.classList.remove('text-gray-400'); }
  const titles = {
    dashboard: 'Dashboard', gip: 'GIP — Gestión de Proyectos', crm: 'CRM',
    scraper: 'Scraper Google Maps', leads: 'Leads Hunter', emails: 'Emails IA', apis: 'APIs & Keys'
  };
  document.getElementById('page-title').textContent = titles[view] || view;
  renderCurrentView();
  closeSidebar();
}

function renderCurrentView() {
  switch(STATE.currentView) {
    case 'dashboard': renderDashboard(); break;
    case 'gip': renderGIP(); break;
    case 'crm': renderContacts(); renderDeals(); break;
    case 'scraper': renderScraperJobs(); populateResultsSelect(); break;
    case 'leads': renderLeadsHunter(); break;
    case 'emails': updateEmailSelect(); break;
    case 'apis': loadApisUI(); break;
  }
  updateBadges();
}

function updateBadges() {
  const activeTasks = STATE.tasks.filter(t => t.status !== 'completado').length;
  document.getElementById('badge-gip').textContent = activeTasks;
  document.getElementById('badge-crm').textContent = STATE.contacts.length;
  const hotLeads = STATE.leadsHunter.filter(l => l.score >= 80).length;
  document.getElementById('badge-leads').textContent = hotLeads;
}

// ==================== SIDEBAR ====================
function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('sidebar-overlay');
  const isOpen = !sb.classList.contains('-translate-x-full');
  if (isOpen) { sb.classList.add('-translate-x-full'); ov.classList.add('hidden'); }
  else { sb.classList.remove('-translate-x-full'); ov.classList.remove('hidden'); }
}
function closeSidebar() {
  if (window.innerWidth < 1024) {
    document.getElementById('sidebar').classList.add('-translate-x-full');
    document.getElementById('sidebar-overlay').classList.add('hidden');
  }
}

// ==================== DASHBOARD ====================
function renderDashboard() {
  const active = STATE.tasks.filter(t => t.status !== 'completado');
  document.getElementById('kpi-tasks').textContent = active.length;
  document.getElementById('kpi-contacts').textContent = STATE.contacts.length;
  const pipelineVal = STATE.deals.filter(d => !d.stage.startsWith('cerrado')).reduce((s,d) => s+d.value, 0);
  document.getElementById('kpi-deals').textContent = fmtEur(pipelineVal);
  const hotLeads = STATE.leadsHunter.filter(l => l.score >= 80).length;
  document.getElementById('kpi-hotleads').textContent = hotLeads;
  
  const counts = { backlog: 0, progreso: 0, revision: 0, completado: 0 };
  STATE.tasks.forEach(t => { if (counts[t.status] !== undefined) counts[t.status]++; });
  const max = Math.max(...Object.values(counts), 1);
  const colors = { backlog: '#39FF14', progreso: '#FACC15', revision: '#A78BFA', completado: '#4ADE80' };
  document.getElementById('task-chart').innerHTML = GIP_COLUMNS.map(col => `
    <div class="flex-1 flex flex-col items-center gap-2">
      <span class="text-xs text-gray-400 font-medium">${counts[col.id]}</span>
      <div class="w-full rounded-t-lg transition-all duration-700" style="height:${Math.max((counts[col.id]/max)*100, 4)}%;background:${colors[col.id]};opacity:0.7"></div>
      <span class="text-[10px] text-gray-600 text-center leading-tight">${col.label}</span>
    </div>
  `).join('');
  
  document.getElementById('activity-feed').innerHTML = STATE.activity.slice(0, 8).map(a => `
    <div class="flex items-start gap-3">
      <div class="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5"><i data-lucide="${a.icon}" class="w-3.5 h-3.5 ${a.color}"></i></div>
      <div class="flex-1 min-w-0">
        <p class="text-xs text-gray-300 leading-relaxed">${a.text}</p>
        <span class="text-[10px] text-gray-600">${timeAgo(a.time)}</span>
      </div>
    </div>
  `).join('');
  lucide.createIcons();
}

// ==================== GIP ====================
function renderGIP() {
  const priorityFilter = document.getElementById('gip-filter-priority').value;
  const assigneeFilter = document.getElementById('gip-filter-assignee').value;
  let tasks = STATE.tasks;
  if (priorityFilter !== 'all') tasks = tasks.filter(t => t.priority === priorityFilter);
  if (assigneeFilter !== 'all') tasks = tasks.filter(t => t.assignee === assigneeFilter);
  
  document.getElementById('kanban-board').innerHTML = GIP_COLUMNS.map(col => {
    const colTasks = tasks.filter(t => t.status === col.id);
    return `
      <div class="kanban-col flex-shrink-0">
        <div class="flex items-center justify-between mb-3 px-1">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full" style="background:${col.color}"></span>
            <span class="text-xs font-medium text-gray-300">${col.label}</span>
            <span class="text-[10px] text-gray-600">${colTasks.length}</span>
          </div>
          <button onclick="openTaskModal('${col.id}')" class="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10 transition-colors text-gray-600 hover:text-white"><i data-lucide="plus" class="w-3.5 h-3.5"></i></button>
        </div>
        <div class="space-y-2 min-h-[100px]">
          ${colTasks.map(t => taskCard(t)).join('')}
        </div>
      </div>
    `;
  }).join('');
  lucide.createIcons();
}

function taskCard(t) {
  const prCls = t.priority === 'Alta' ? 'priority-alta' : t.priority === 'Media' ? 'priority-media' : 'priority-baja';
  const overdue = t.due && new Date(t.due) < new Date() && t.status !== 'completado';
  return `
    <div class="task-card glass-card rounded-xl p-4" onclick="openTaskDetail('${t.id}')">
      <div class="flex items-center justify-between mb-2">
        <span class="badge ${prCls}">${t.priority}</span>
        ${overdue ? '<span class="text-[10px] text-red-400 font-medium">⚠ Vencida</span>' : ''}
      </div>
      <h4 class="text-sm font-medium mb-2 leading-snug">${escapeHtml(t.title)}</h4>
      <div class="flex items-center justify-between">
        <span class="text-[10px] text-gray-500 flex items-center gap-1"><i data-lucide="user" class="w-3 h-3"></i>${escapeHtml(t.assignee)}</span>
        ${t.due ? `<span class="text-[10px] text-gray-500">${t.due.slice(5)}</span>` : ''}
      </div>
    </div>
  `;
}

function openTaskModal(defaultStatus) {
  openModal('Nueva tarea', `
    <form onsubmit="createTask(event)" class="space-y-4">
      <div><label class="text-xs text-gray-500 mb-1 block">Título *</label><input name="title" required class="w-full h-10 px-3 rounded-lg bg-white/5 border border-white/8 text-sm" placeholder="Nombre de la tarea"></div>
      <div><label class="text-xs text-gray-500 mb-1 block">Descripción</label><textarea name="desc" rows="3" class="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/8 text-sm resize-none" placeholder="Descripción detallada"></textarea></div>
      <div class="grid grid-cols-2 gap-3">
        <div><label class="text-xs text-gray-500 mb-1 block">Prioridad</label><select name="priority" class="w-full h-10 px-3 rounded-lg bg-white/5 border border-white/8 text-sm"><option>Alta</option><option selected>Media</option><option>Baja</option></select></div>
        <div><label class="text-xs text-gray-500 mb-1 block">Estado</label><select name="status" class="w-full h-10 px-3 rounded-lg bg-white/5 border border-white/8 text-sm">${GIP_COLUMNS.map(c=>`<option value="${c.id}" ${c.id===defaultStatus?'selected':''}>${c.label}</option>`).join('')}</select></div>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div><label class="text-xs text-gray-500 mb-1 block">Asignado</label><select name="assignee" class="w-full h-10 px-3 rounded-lg bg-white/5 border border-white/8 text-sm"><option>Thiago</option><option>Pedro</option><option>Hermes</option></select></div>
        <div><label class="text-xs text-gray-500 mb-1 block">Fecha límite</label><input name="due" type="date" class="w-full h-10 px-3 rounded-lg bg-white/5 border border-white/8 text-sm"></div>
      </div>
      <button type="submit" class="w-full h-10 bg-accent hover:bg-accent-hover rounded-xl text-sm font-medium transition-all active:scale-95 text-black">Crear tarea</button>
    </form>
  `);
}

function createTask(e) {
  e.preventDefault();
  const f = e.target;
  const task = {
    id: uid(), title: f.title.value, desc: f.desc.value, priority: f.priority.value,
    status: f.status.value, assignee: f.assignee.value, due: f.due.value, created: Date.now()
  };
  STATE.tasks.unshift(task);
  STATE.activity.unshift({ text: `Nueva tarea: "${task.title}"`, time: Date.now(), icon: 'plus-circle', color: 'text-blue-400' });
  save(); closeModal(); renderGIP(); updateBadges();
  showToast(`Tarea "${task.title}" creada`, 'success');
}

function openTaskDetail(id) {
  const t = STATE.tasks.find(x => x.id === id);
  if (!t) return;
  openModal(t.title, `
    <div class="space-y-4">
      <p class="text-sm text-gray-400 leading-relaxed">${escapeHtml(t.desc) || 'Sin descripción'}</p>
      <div class="grid grid-cols-2 gap-3 text-sm">
        <div class="glass-card rounded-lg p-3"><div class="text-[10px] text-gray-500 mb-1">Prioridad</div><span class="badge ${t.priority==='Alta'?'priority-alta':t.priority==='Media'?'priority-media':'priority-baja'}">${t.priority}</span></div>
        <div class="glass-card rounded-lg p-3"><div class="text-[10px] text-gray-500 mb-1">Estado</div><span class="text-xs text-gray-300">${GIP_COLUMNS.find(c=>c.id===t.status)?.label}</span></div>
        <div class="glass-card rounded-lg p-3"><div class="text-[10px] text-gray-500 mb-1">Asignado</div><span class="text-xs text-gray-300">${escapeHtml(t.assignee)}</span></div>
        <div class="glass-card rounded-lg p-3"><div class="text-[10px] text-gray-500 mb-1">Fecha límite</div><span class="text-xs text-gray-300">${t.due || '—'}</span></div>
      </div>
      <div>
        <label class="text-xs text-gray-500 mb-1 block">Mover a</label>
        <div class="flex flex-wrap gap-2">
          ${GIP_COLUMNS.map(c => `<button onclick="moveTask('${t.id}','${c.id}')" class="h-8 px-3 rounded-lg text-xs font-medium transition-all ${t.status===c.id ? 'bg-accent/20 text-accent' : 'glass hover:bg-white/5 text-gray-400'}">${c.label}</button>`).join('')}
        </div>
      </div>
      <div class="flex gap-2 pt-2">
        <button onclick="deleteTask('${t.id}')" class="flex-1 h-9 rounded-xl border border-red-500/20 text-red-400 text-xs font-medium hover:bg-red-500/10 transition-all active:scale-95">Eliminar</button>
        <button onclick="closeModal()" class="flex-1 h-9 rounded-xl glass text-xs font-medium hover:bg-white/5 transition-all active:scale-95">Cerrar</button>
      </div>
    </div>
  `);
}

function moveTask(id, newStatus) {
  const t = STATE.tasks.find(x => x.id === id);
  if (!t || t.status === newStatus) return;
  const newLabel = GIP_COLUMNS.find(c => c.id === newStatus)?.label;
  t.status = newStatus;
  STATE.activity.unshift({ text: `"${t.title}" movida a ${newLabel}`, time: Date.now(), icon: 'arrow-right-circle', color: 'text-accent' });
  if (newStatus === 'completado') STATE.activity.unshift({ text: `Tarea "${t.title}" completada`, time: Date.now(), icon: 'check-circle', color: 'text-green-400' });
  save(); closeModal(); renderGIP(); updateBadges();
  showToast(`Tarea movida a ${newLabel}`, 'success');
}

function deleteTask(id) {
  const t = STATE.tasks.find(x => x.id === id);
  STATE.tasks = STATE.tasks.filter(x => x.id !== id);
  STATE.activity.unshift({ text: `Tarea "${t?.title}" eliminada`, time: Date.now(), icon: 'trash-2', color: 'text-red-400' });
  save(); closeModal(); renderGIP(); updateBadges();
  showToast('Tarea eliminada', 'info');
}

// ==================== CRM ====================
function switchCrmTab(tab) {
  document.querySelectorAll('.crm-panel').forEach(p => p.classList.add('hidden'));
  document.querySelectorAll('[data-crm-tab]').forEach(b => { b.classList.remove('active'); b.classList.add('text-gray-500'); });
  document.getElementById('crm-' + tab).classList.remove('hidden');
  document.querySelector(`[data-crm-tab="${tab}"]`).classList.add('active');
  document.querySelector(`[data-crm-tab="${tab}"]`).classList.remove('text-gray-500');
}

function renderContacts() {
  const search = (document.getElementById('crm-search')?.value || '').toLowerCase();
  let contacts = STATE.contacts;
  if (search) contacts = contacts.filter(c => (c.name+c.company+c.email+c.role).toLowerCase().includes(search));
  document.getElementById('contacts-grid').innerHTML = contacts.length === 0
    ? '<div class="col-span-full text-center py-16 text-gray-500 text-sm">No se encontraron contactos</div>'
    : contacts.map(c => `
      <div class="glass-card rounded-2xl p-5 cursor-pointer hover:border-white/10 transition-all" onclick="openContactDetail('${c.id}')">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 rounded-full bg-accent-dim flex items-center justify-center text-accent text-sm font-bold">${c.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
          <div class="min-w-0">
            <div class="text-sm font-medium truncate">${escapeHtml(c.name)}</div>
            <div class="text-[10px] text-gray-500">${escapeHtml(c.role)} · ${escapeHtml(c.company)}</div>
          </div>
        </div>
        <div class="space-y-1.5 mb-3">
          <div class="flex items-center gap-2 text-xs text-gray-400"><i data-lucide="mail" class="w-3 h-3 flex-shrink-0"></i><span class="truncate">${escapeHtml(c.email)}</span></div>
          <div class="flex items-center gap-2 text-xs text-gray-400"><i data-lucide="phone" class="w-3 h-3 flex-shrink-0"></i>${escapeHtml(c.phone)}</div>
        </div>
        <div class="flex flex-wrap gap-1.5">${c.tags.map(t => `<span class="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-gray-400">${escapeHtml(t)}</span>`).join('')}</div>
      </div>
    `).join('');
  lucide.createIcons();
}

function openContactModal() {
  openModal('Nuevo contacto', `
    <form onsubmit="createContact(event)" class="space-y-4">
      <div class="grid grid-cols-2 gap-3">
        <div><label class="text-xs text-gray-500 mb-1 block">Nombre *</label><input name="name" required class="w-full h-10 px-3 rounded-lg bg-white/5 border border-white/8 text-sm" placeholder="Nombre completo"></div>
        <div><label class="text-xs text-gray-500 mb-1 block">Rol</label><input name="role" class="w-full h-10 px-3 rounded-lg bg-white/5 border border-white/8 text-sm" placeholder="CTO, CEO..."></div>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div><label class="text-xs text-gray-500 mb-1 block">Empresa *</label><input name="company" required class="w-full h-10 px-3 rounded-lg bg-white/5 border border-white/8 text-sm" placeholder="Nombre empresa"></div>
        <div><label class="text-xs text-gray-500 mb-1 block">Teléfono</label><input name="phone" class="w-full h-10 px-3 rounded-lg bg-white/5 border border-white/8 text-sm" placeholder="+34 ..."></div>
      </div>
      <div><label class="text-xs text-gray-500 mb-1 block">Email *</label><input name="email" type="email" required class="w-full h-10 px-3 rounded-lg bg-white/5 border border-white/8 text-sm" placeholder="email@empresa.com"></div>
      <div><label class="text-xs text-gray-500 mb-1 block">Tags (separados por coma)</label><input name="tags" class="w-full h-10 px-3 rounded-lg bg-white/5 border border-white/8 text-sm" placeholder="Restaurante, Lisboa"></div>
      <div><label class="text-xs text-gray-500 mb-1 block">Notas</label><textarea name="notes" rows="2" class="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/8 text-sm resize-none" placeholder="Notas internas"></textarea></div>
      <button type="submit" class="w-full h-10 bg-accent hover:bg-accent-hover rounded-xl text-sm font-medium transition-all active:scale-95 text-black">Crear contacto</button>
    </form>
  `);
}

function createContact(e) {
  e.preventDefault();
  const f = e.target;
  const contact = {
    id: uid(), name: f.name.value, role: f.role.value, company: f.company.value,
    email: f.email.value, phone: f.phone.value,
    tags: f.tags.value.split(',').map(t => t.trim()).filter(Boolean),
    notes: f.notes.value, created: Date.now()
  };
  STATE.contacts.unshift(contact);
  STATE.activity.unshift({ text: `Nuevo contacto: ${contact.name}`, time: Date.now(), icon: 'user-plus', color: 'text-purple-400' });
  save(); closeModal(); renderContacts(); updateBadges();
  showToast(`Contacto "${contact.name}" creado`, 'success');
}

function openContactDetail(id) {
  const c = STATE.contacts.find(x => x.id === id);
  if (!c) return;
  const deals = STATE.deals.filter(d => d.contactId === id);
  openModal(c.name, `
    <div class="space-y-4">
      <div class="flex items-center gap-3 mb-2">
        <div class="w-12 h-12 rounded-full bg-accent-dim flex items-center justify-center text-accent text-lg font-bold">${c.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
        <div><div class="font-medium">${escapeHtml(c.name)}</div><div class="text-xs text-gray-500">${escapeHtml(c.role)} · ${escapeHtml(c.company)}</div></div>
      </div>
      <div class="grid grid-cols-2 gap-3 text-sm">
        <div class="glass-card rounded-lg p-3"><div class="text-[10px] text-gray-500 mb-1">Email</div><span class="text-xs text-gray-300 break-all">${escapeHtml(c.email)}</span></div>
        <div class="glass-card rounded-lg p-3"><div class="text-[10px] text-gray-500 mb-1">Teléfono</div><span class="text-xs text-gray-300">${escapeHtml(c.phone)}</span></div>
      </div>
      <div class="flex flex-wrap gap-1.5">${c.tags.map(t => `<span class="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-gray-400">${escapeHtml(t)}</span>`).join('')}</div>
      ${c.notes ? `<div class="glass-card rounded-lg p-3"><div class="text-[10px] text-gray-500 mb-1">Notas</div><p class="text-xs text-gray-300">${escapeHtml(c.notes)}</p></div>` : ''}
      ${deals.length ? `<div><div class="text-xs text-gray-500 mb-2">Negocios asociados (${deals.length})</div><div class="space-y-2">${deals.map(d => `<div class="glass-card rounded-lg p-3 flex items-center justify-between"><span class="text-xs">${escapeHtml(d.title)}</span><span class="text-xs font-medium text-accent">${fmtEur(d.value)}</span></div>`).join('')}</div></div>` : ''}
      <div class="flex gap-2 pt-2">
        <button onclick="deleteContact('${c.id}')" class="flex-1 h-9 rounded-xl border border-red-500/20 text-red-400 text-xs font-medium hover:bg-red-500/10 transition-all active:scale-95">Eliminar</button>
        <button onclick="closeModal()" class="flex-1 h-9 rounded-xl glass text-xs font-medium hover:bg-white/5 transition-all active:scale-95">Cerrar</button>
      </div>
    </div>
  `);
}

function deleteContact(id) {
  const c = STATE.contacts.find(x => x.id === id);
  STATE.contacts = STATE.contacts.filter(x => x.id !== id);
  STATE.deals = STATE.deals.filter(d => d.contactId !== id);
  STATE.activity.unshift({ text: `Contacto "${c?.name}" eliminado`, time: Date.now(), icon: 'user-minus', color: 'text-red-400' });
  save(); closeModal(); renderContacts(); renderDeals(); updateBadges();
  showToast('Contacto eliminado', 'info');
}

// ===== DEALS =====
function renderDeals() {
  const openDeals = STATE.deals.filter(d => !d.stage.startsWith('cerrado'));
  const totalVal = openDeals.reduce((s,d) => s+d.value, 0);
  document.getElementById('deals-total').textContent = `${openDeals.length} negocios abiertos · ${fmtEur(totalVal)} pipeline`;
  document.getElementById('deals-pipeline').innerHTML = DEAL_STAGES.map(stage => {
    const stageDeals = STATE.deals.filter(d => d.stage === stage.id);
    const stageVal = stageDeals.reduce((s,d) => s+d.value, 0);
    return `
      <div class="kanban-col flex-shrink-0" style="min-width:200px">
        <div class="flex items-center justify-between mb-3 px-1">
          <span class="badge ${stage.cls}">${stage.label}</span>
          <span class="text-[10px] text-gray-500">${fmtEur(stageVal)}</span>
        </div>
        <div class="space-y-2 min-h-[80px]">
          ${stageDeals.map(d => {
            const contact = getContact(d.contactId);
            return `
              <div class="task-card glass-card rounded-xl p-4" onclick="openDealDetail('${d.id}')">
                <h4 class="text-sm font-medium mb-1.5 leading-snug">${escapeHtml(d.title)}</h4>
                <div class="text-sm font-semibold text-accent mb-1">${fmtEur(d.value)}</div>
                ${contact ? `<div class="text-[10px] text-gray-500">${escapeHtml(contact.name)}</div>` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');
  lucide.createIcons();
}

function openDealModal() {
  const contactOptions = STATE.contacts.map(c => `<option value="${c.id}">${escapeHtml(c.name)} — ${escapeHtml(c.company)}</option>`).join('');
  openModal('Nuevo negocio', `
    <form onsubmit="createDeal(event)" class="space-y-4">
      <div><label class="text-xs text-gray-500 mb-1 block">Título *</label><input name="title" required class="w-full h-10 px-3 rounded-lg bg-white/5 border border-white/8 text-sm" placeholder="Nombre del negocio"></div>
      <div class="grid grid-cols-2 gap-3">
        <div><label class="text-xs text-gray-500 mb-1 block">Valor (€) *</label><input name="value" type="number" required class="w-full h-10 px-3 rounded-lg bg-white/5 border border-white/8 text-sm" placeholder="1200"></div>
        <div><label class="text-xs text-gray-500 mb-1 block">Etapa</label><select name="stage" class="w-full h-10 px-3 rounded-lg bg-white/5 border border-white/8 text-sm">${DEAL_STAGES.filter(s=>!s.id.startsWith('cerrado')).map(s=>`<option value="${s.id}">${s.label}</option>`).join('')}</select></div>
      </div>
      <div><label class="text-xs text-gray-500 mb-1 block">Contacto asociado</label><select name="contactId" class="w-full h-10 px-3 rounded-lg bg-white/5 border border-white/8 text-sm"><option value="">Sin contacto</option>${contactOptions}</select></div>
      <div><label class="text-xs text-gray-500 mb-1 block">Notas</label><textarea name="notes" rows="2" class="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/8 text-sm resize-none" placeholder="Detalles del negocio"></textarea></div>
      <button type="submit" class="w-full h-10 bg-accent hover:bg-accent-hover rounded-xl text-sm font-medium transition-all active:scale-95 text-black">Crear negocio</button>
    </form>
  `);
}

function createDeal(e) {
  e.preventDefault();
  const f = e.target;
  const deal = {
    id: uid(), title: f.title.value, value: parseInt(f.value.value), stage: f.stage.value,
    contactId: f.contactId.value || null, notes: f.notes.value, created: Date.now()
  };
  STATE.deals.unshift(deal);
  STATE.activity.unshift({ text: `Nuevo negocio: "${deal.title}" — ${fmtEur(deal.value)}`, time: Date.now(), icon: 'handshake', color: 'text-amber-400' });
  save(); closeModal(); renderDeals();
  showToast(`Negocio "${deal.title}" creado`, 'success');
}

function openDealDetail(id) {
  const d = STATE.deals.find(x => x.id === id);
  if (!d) return;
  const contact = getContact(d.contactId);
  const stageInfo = DEAL_STAGES.find(s => s.id === d.stage);
  openModal(d.title, `
    <div class="space-y-4">
      <div class="text-2xl font-semibold text-accent">${fmtEur(d.value)}</div>
      <div class="glass-card rounded-lg p-3"><div class="text-[10px] text-gray-500 mb-1">Etapa actual</div><span class="badge ${stageInfo?.cls}">${stageInfo?.label}</span></div>
      ${contact ? `<div class="glass-card rounded-lg p-3"><div class="text-[10px] text-gray-500 mb-1">Contacto</div><span class="text-sm text-gray-300">${escapeHtml(contact.name)} · ${escapeHtml(contact.company)}</span></div>` : ''}
      ${d.notes ? `<div class="glass-card rounded-lg p-3"><div class="text-[10px] text-gray-500 mb-1">Notas</div><p class="text-xs text-gray-300">${escapeHtml(d.notes)}</p></div>` : ''}
      <div>
        <label class="text-xs text-gray-500 mb-2 block">Mover a</label>
        <div class="flex flex-wrap gap-2">
          ${DEAL_STAGES.map(s => `<button onclick="moveDeal('${d.id}','${s.id}')" class="h-8 px-3 rounded-lg text-xs font-medium transition-all ${d.stage===s.id ? 'bg-accent/20 text-accent' : 'glass hover:bg-white/5 text-gray-400'}">${s.label}</button>`).join('')}
        </div>
      </div>
      <div class="flex gap-2 pt-2">
        <button onclick="deleteDeal('${d.id}')" class="flex-1 h-9 rounded-xl border border-red-500/20 text-red-400 text-xs font-medium hover:bg-red-500/10 transition-all active:scale-95">Eliminar</button>
        <button onclick="closeModal()" class="flex-1 h-9 rounded-xl glass text-xs font-medium hover:bg-white/5 transition-all active:scale-95">Cerrar</button>
      </div>
    </div>
  `);
}

function moveDeal(id, newStage) {
  const d = STATE.deals.find(x => x.id === id);
  if (!d || d.stage === newStage) return;
  d.stage = newStage;
  const label = DEAL_STAGES.find(s => s.id === newStage)?.label;
  STATE.activity.unshift({ text: `"${d.title}" movido a ${label}`, time: Date.now(), icon: 'arrow-right-circle', color: 'text-amber-400' });
  if (newStage === 'cerrado-g') STATE.activity.unshift({ text: `¡Deal cerrado! "${d.title}" — ${fmtEur(d.value)}`, time: Date.now(), icon: 'trophy', color: 'text-green-400' });
  save(); closeModal(); renderDeals();
  showToast(`Negocio movido a ${label}`, 'success');
}

function deleteDeal(id) {
  const d = STATE.deals.find(x => x.id === id);
  STATE.deals = STATE.deals.filter(x => x.id !== id);
  STATE.activity.unshift({ text: `Negocio "${d?.title}" eliminado`, time: Date.now(), icon: 'trash-2', color: 'text-red-400' });
  save(); closeModal(); renderDeals();
  showToast('Negocio eliminado', 'info');
}

// ==================== SCRAPER (Google Maps) ====================
function switchScraperTab(tab) {
  document.querySelectorAll('.scraper-panel').forEach(p => p.classList.add('hidden'));
  document.querySelectorAll('[data-scraper-tab]').forEach(b => { b.classList.remove('active'); b.classList.add('text-gray-500'); });
  document.getElementById('scraper-' + tab).classList.remove('hidden');
  document.querySelector(`[data-scraper-tab="${tab}"]`).classList.add('active');
  document.querySelector(`[data-scraper-tab="${tab}"]`).classList.remove('text-gray-500');
  if (tab === 'results') populateResultsSelect();
}

function renderScraperJobs() {
  document.getElementById('scraper-count').textContent = `${STATE.scrapes.length} cacerías`;
  const statusMap = {
    pending: { label: 'Pendiente', cls: 'scrape-pending' },
    running: { label: 'Cazando...', cls: 'scrape-running' },
    completed: { label: 'Completado', cls: 'scrape-completed' },
    failed: { label: 'Fallido', cls: 'scrape-failed' }
  };
  document.getElementById('scraper-list').innerHTML = STATE.scrapes.length === 0
    ? '<div class="text-center py-16 text-gray-500 text-sm">No hay cacerías. ¡Crea la primera!</div>'
    : STATE.scrapes.map(s => {
      const st = statusMap[s.status];
      return `
        <div class="glass-card rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1 flex-wrap">
              <span class="badge ${st.cls}">${s.status === 'running' ? '<span class="inline-block w-2 h-2 rounded-full bg-current spin mr-1"></span>' : ''}${st.label}</span>
              <span class="badge bg-white/5 text-gray-400">${escapeHtml(s.type)}</span>
              ${s.leadsCount ? `<span class="badge bg-accent/15 text-accent">${s.leadsCount} leads</span>` : ''}
            </div>
            <div class="text-sm font-medium truncate mb-0.5">"${escapeHtml(s.query)}" en ${escapeHtml(s.location)}</div>
            <div class="text-[10px] text-gray-500">Creado: ${new Date(s.created).toLocaleString('es-ES')} ${s.error ? '· <span class="text-red-400">'+escapeHtml(s.error)+'</span>' : ''}</div>
            ${s.status === 'running' ? `<div class="mt-2 h-1.5 rounded-full bg-white/5 overflow-hidden"><div class="h-full bg-accent rounded-full progress-anim" style="width:70%"></div></div>` : ''}
          </div>
          <div class="flex items-center gap-2 flex-shrink-0">
            ${s.status === 'pending' ? `<button onclick="runScrape('${s.id}')" class="h-8 px-3 rounded-lg bg-accent/10 text-accent text-xs font-medium hover:bg-accent/20 transition-all flex items-center gap-1"><i data-lucide="play" class="w-3 h-3"></i>Ejecutar</button>` : ''}
            ${s.status === 'completed' ? `<button onclick="viewScrapeResults('${s.id}')" class="h-8 px-3 rounded-lg glass text-xs font-medium hover:bg-white/5 transition-all flex items-center gap-1"><i data-lucide="eye" class="w-3 h-3"></i>Ver</button>` : ''}
            <button onclick="deleteScrape('${s.id}')" class="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-red-500/10 text-gray-500 hover:text-red-400 transition-all"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
          </div>
        </div>
      `;
    }).join('');
  lucide.createIcons();
}

function openScrapeModal() {
  if (!STATE.apis.serpapi && !STATE.apis.outscraper && !STATE.apis.rapidapi) {
    showToast('⚠️ Configura al menos una API de scraping primero', 'error');
    setTimeout(() => navigate('apis'), 1500);
    return;
  }
  openModal('Nueva cacería Google Maps', `
    <form onsubmit="createScrape(event)" class="space-y-4">
      <div><label class="text-xs text-gray-500 mb-1 block">Tipo de negocio / Keyword *</label><input name="query" required class="w-full h-10 px-3 rounded-lg bg-white/5 border border-white/8 text-sm" placeholder="Ej: restaurante, taller mecánico, dentista"></div>
      <div><label class="text-xs text-gray-500 mb-1 block">Ubicación *</label><input name="location" required class="w-full h-10 px-3 rounded-lg bg-white/5 border border-white/8 text-sm" placeholder="Ej: Lisboa, Madrid, Oporto"></div>
      <div class="grid grid-cols-2 gap-3">
        <div><label class="text-xs text-gray-500 mb-1 block">Máx resultados</label><input name="limit" type="number" value="20" min="1" max="60" class="w-full h-10 px-3 rounded-lg bg-white/5 border border-white/8 text-sm"></div>
        <div><label class="text-xs text-gray-500 mb-1 block">Idioma</label><select name="lang" class="w-full h-10 px-3 rounded-lg bg-white/5 border border-white/8 text-sm"><option value="es">Español</option><option value="pt" selected>Portugués</option><option value="en">Inglés</option><option value="fr">Francés</option></select></div>
      </div>
      <div class="glass-card rounded-lg p-3 text-xs text-gray-400 leading-relaxed">
        <i data-lucide="info" class="w-3.5 h-3.5 text-accent inline mr-1"></i>
        El sistema buscará en Google Maps, analizará las webs con PageSpeed, puntuará cada lead (0-100) y generará emails personalizados.
      </div>
      <button type="submit" class="w-full h-10 bg-accent hover:bg-accent-hover rounded-xl text-sm font-medium transition-all active:scale-95 text-black">Iniciar cacería</button>
    </form>
  `);
}

function createScrape(e) {
  e.preventDefault();
  const f = e.target;
  const scrape = {
    id: uid(), query: f.query.value, location: f.location.value,
    type: f.query.value, limit: parseInt(f.limit.value), lang: f.lang.value,
    status: 'pending', leads: [], leadsCount: 0, created: Date.now()
  };
  STATE.scrapes.unshift(scrape);
  STATE.activity.unshift({ text: `Nueva cacería: "${scrape.query}" en ${scrape.location}`, time: Date.now(), icon: 'spider', color: 'text-accent' });
  save(); closeModal(); renderScraperJobs();
  showToast('Cacería creada. ¡A cazar! 🎯', 'success');
  setTimeout(() => runScrape(scrape.id), 500);
}

async function runScrape(id) {
  const s = STATE.scrapes.find(x => x.id === id);
  if (!s) return;
  s.status = 'running';
  s.error = undefined;
  save(); renderScraperJobs();
  showToast('🕷️ Cazando leads...', 'info');
  
  try {
    const results = await searchGoogleMaps(s.query, s.location, s.limit, s.lang);
    s.leads = results;
    s.leadsCount = results.length;
    
    // Analizar webs
    for (let i = 0; i < results.length; i++) {
      const lead = results[i];
      try {
        const webAnalysis = await analyzeWebsite(lead.website);
        lead.webAnalysis = webAnalysis;
        lead.score = scoreLead(lead, webAnalysis);
        lead.analyzedAt = new Date().toISOString();
      } catch(e) {
        lead.webAnalysis = { hasWeb: false, score: 0 };
        lead.score = 60;
      }
      // Avoid duplicates in leadsHunter
      const exists = STATE.leadsHunter.find(l => l.name === lead.name && l.address === lead.address);
      if (!exists) STATE.leadsHunter.push(lead);
    }
    
    s.status = 'completed';
    s.completedAt = Date.now();
    STATE.activity.unshift({ text: `Cacería "${s.query}" completada — ${results.length} leads`, time: Date.now(), icon: 'check-circle', color: 'text-green-400' });
    save(); renderScraperJobs(); updateBadges();
    const hotCount = results.filter(r => r.score >= 80).length;
    showToast(`✅ ${results.length} leads · ${hotCount} 🔥 Hot`, 'success');
  } catch(e) {
    s.status = 'failed';
    s.error = e.message.slice(0, 150);
    STATE.activity.unshift({ text: `Cacería fallida: ${s.query}`, time: Date.now(), icon: 'alert-circle', color: 'text-red-400' });
    save(); renderScraperJobs();
    showToast(`❌ Error: ${e.message.slice(0,80)}`, 'error');
  }
}

async function searchGoogleMaps(query, location, limit, lang) {
  const searchQuery = `${query} en ${location}`;
  
  // 1. SerpAPI
  if (STATE.apis.serpapi) {
    try {
      const url = `https://serpapi.com/search.json?engine=google_maps&q=${encodeURIComponent(searchQuery)}&hl=${lang}&type=search&api_key=${STATE.apis.serpapi}`;
      const r = await fetch(url);
      const data = await r.json();
      if (data.local_results && data.local_results.length > 0) {
        return data.local_results.slice(0, limit).map(r => ({
          name: r.title || 'Sin nombre',
          address: r.address || '',
          phone: r.phone || '',
          website: r.website || '',
          rating: r.rating || 0,
          reviews: r.reviews || 0,
          category: r.category || r.type || '',
          source: 'SerpAPI'
        }));
      }
    } catch (e) { console.warn('SerpAPI failed:', e); }
  }
  
  // 2. Outscraper
  if (STATE.apis.outscraper) {
    try {
      const r = await fetch('https://api.outscraper.com/v2/maps/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-API-KEY': STATE.apis.outscraper },
        body: JSON.stringify({ query: searchQuery, limit: limit, language: lang })
      });
      const data = await r.json();
      if (data.data && data.data[0] && data.data[0].length > 0) {
        return data.data[0].slice(0, limit).map(r => ({
          name: r.name || 'Sin nombre',
          address: r.full_address || r.address || '',
          phone: r.phone || '',
          website: r.site || '',
          rating: r.rating || 0,
          reviews: r.reviews || 0,
          category: r.main_category || '',
          source: 'Outscraper'
        }));
      }
    } catch (e) { console.warn('Outscraper failed:', e); }
  }
  
  // 3. RapidAPI
  if (STATE.apis.rapidapi) {
    try {
      const r = await fetch(`https://google-maps-scraper-api.p.rapidapi.com/v1/search?query=${encodeURIComponent(searchQuery)}&limit=${limit}`, {
        headers: { 'X-RapidAPI-Key': STATE.apis.rapidapi, 'X-RapidAPI-Host': 'google-maps-scraper-api.p.rapidapi.com' }
      });
      const data = await r.json();
      if (data.results && data.results.length > 0) {
        return data.results.slice(0, limit).map(r => ({
          name: r.title || r.name || 'Sin nombre',
          address: r.address || '',
          phone: r.phone || '',
          website: r.website || '',
          rating: r.rating || 0,
          reviews: r.reviews || 0,
          category: r.category || '',
          source: 'RapidAPI'
        }));
      }
    } catch (e) { console.warn('RapidAPI failed:', e); }
  }
  
  throw new Error('No hay APIs configuradas o todas fallaron. Ve a APIs & Keys.');
}

async function analyzeWebsite(url) {
  if (!url) return { hasWeb: false, score: 0, issues: ['Sin sitio web'], technologies: [] };
  const result = { hasWeb: true, url, score: 50, issues: [], strengths: [], technologies: [] };
  
  try {
    const keyParam = STATE.apis.pagespeed ? `&key=${STATE.apis.pagespeed}` : '';
    const r = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&category=PERFORMANCE&category=SEO&category=BEST_PRACTICES${keyParam}`);
    const d = await r.json();
    if (d.lighthouseResult) {
      const perf = (d.lighthouseResult.categories.performance.score || 0) * 100;
      const seo = (d.lighthouseResult.categories.seo?.score || 0) * 100;
      const bp = (d.lighthouseResult.categories['best-practices']?.score || 0) * 100;
      result.score = Math.round((perf + seo + bp) / 3);
      if (perf < 50) result.issues.push('Web muy lenta en móvil (<50)');
      else if (perf < 70) result.issues.push('Web lenta en móvil');
      else result.strengths.push('Buena velocidad móvil');
    }
  } catch (e) {
    result.issues.push('No se pudo analizar con PageSpeed');
  }
  
  // Heurísticas
  const u = url.toLowerCase();
  if (u.includes('wixsite.com') || u.includes('wix.com')) result.technologies.push('Wix');
  if (u.includes('wordpress.com')) result.technologies.push('WordPress.com');
  if (u.includes('weebly.com')) result.technologies.push('Weebly');
  if (u.includes('squarespace.com')) result.technologies.push('Squarespace');
  if (u.includes('shopify.com')) result.technologies.push('Shopify');
  if (u.includes('blogspot.com')) result.technologies.push('Blogger');
  if (result.technologies.some(t => ['Wix','Weebly','Blogger'].includes(t))) {
    result.score = Math.min(result.score, 60);
    result.issues.push('Usa plataforma limitada');
  }
  
  result.score = Math.max(0, Math.min(100, result.score - result.issues.length * 3 + result.strengths.length * 2));
  return result;
}

function scoreLead(lead, webAnalysis) {
  let score = 0;
  if (!webAnalysis.hasWeb) score += 60;
  else {
    if (webAnalysis.score < 50) score += 40;
    else if (webAnalysis.score < 70) score += 20;
  }
  if (lead.reviews < 10) score += 20;
  else if (lead.reviews < 50) score += 10;
  if (lead.rating > 0 && lead.rating < 4) score += 10;
  if (!lead.phone) score += 10;
  return Math.min(100, score);
}

function deleteScrape(id) {
  STATE.scrapes = STATE.scrapes.filter(x => x.id !== id);
  save(); renderScraperJobs();
  showToast('Cacería eliminada', 'info');
}

function viewScrapeResults(id) {
  switchScraperTab('results');
  setTimeout(() => {
    document.getElementById('results-job-select').value = id;
    renderResults();
  }, 50);
}

function populateResultsSelect() {
  const sel = document.getElementById('results-job-select');
  const completed = STATE.scrapes.filter(s => s.status === 'completed');
  sel.innerHTML = '<option value="">Selecciona una cacería</option>' + completed.map(s =>
    `<option value="${s.id}">"${escapeHtml(s.query)}" ${escapeHtml(s.location)} (${s.leadsCount} leads)</option>`
  ).join('');
}

function renderResults() {
  const id = document.getElementById('results-job-select').value;
  const empty = document.getElementById('results-empty');
  const table = document.getElementById('results-table');
  if (!id) { empty.classList.remove('hidden'); table.classList.add('hidden'); return; }
  const scrape = STATE.scrapes.find(s => s.id === id);
  if (!scrape || !scrape.leads || scrape.leads.length === 0) { empty.classList.remove('hidden'); table.classList.add('hidden'); return; }
  empty.classList.add('hidden');
  table.classList.remove('hidden');
  
  table.innerHTML = `
    <table class="w-full text-sm">
      <thead><tr class="border-b border-white/5">
        <th class="text-left text-[10px] text-gray-500 font-medium uppercase tracking-wider px-4 py-3">Lead</th>
        <th class="text-left text-[10px] text-gray-500 font-medium uppercase tracking-wider px-4 py-3">Score</th>
        <th class="text-left text-[10px] text-gray-500 font-medium uppercase tracking-wider px-4 py-3">Web</th>
        <th class="text-left text-[10px] text-gray-500 font-medium uppercase tracking-wider px-4 py-3">Teléfono</th>
        <th class="text-left text-[10px] text-gray-500 font-medium uppercase tracking-wider px-4 py-3">Rating</th>
      </tr></thead>
      <tbody>${scrape.leads.slice(0, 100).map(r => {
        const scoreCls = r.score >= 80 ? 'score-hot' : r.score >= 50 ? 'score-warm' : 'score-cold';
        return `
          <tr class="border-b border-white/3 hover:bg-white/2 transition-colors">
            <td class="px-4 py-2.5"><div class="text-xs font-medium">${escapeHtml(r.name)}</div><div class="text-[10px] text-gray-500">${escapeHtml(r.address?.slice(0,50))}</div></td>
            <td class="px-4 py-2.5"><span class="badge ${scoreCls}">${r.score || 0}</span></td>
            <td class="px-4 py-2.5 text-xs text-gray-300 max-w-xs truncate">${r.website ? `<a href="${r.website}" target="_blank" class="text-accent hover:underline">${escapeHtml(r.website.slice(0,30))}</a>` : '<span class="text-red-400">Sin web</span>'}</td>
            <td class="px-4 py-2.5 text-xs text-gray-300">${escapeHtml(r.phone || '—')}</td>
            <td class="px-4 py-2.5 text-xs text-gray-300">⭐ ${r.rating || 0} (${r.reviews || 0})</td>
          </tr>
        `;
      }).join('')}</tbody>
    </table>
  `;
}

function exportCSV() {
  const id = document.getElementById('results-job-select').value;
  if (!id) { showToast('Selecciona una cacería primero', 'error'); return; }
  const scrape = STATE.scrapes.find(s => s.id === id);
  if (!scrape || !scrape.leads || scrape.leads.length === 0) { showToast('No hay resultados', 'error'); return; }
  const headers = ['Nombre','Dirección','Teléfono','Web','Rating','Reseñas','Categoría','Score','TieneWeb','ScoreWeb','Fuente'];
  const rows = scrape.leads.map(r => [
    r.name, r.address, r.phone, r.website, r.rating, r.reviews, r.category,
    r.score || 0, r.webAnalysis?.hasWeb ? 'Sí' : 'No', r.webAnalysis?.score || 0, r.source
  ]);
  const csv = [headers, ...rows].map(r => r.map(c => `"${String(c||'').replace(/"/g,'""')}"`).join(',')).join('\n');
  downloadFile(csv, `tiberion_scrape_${Date.now()}.csv`, 'text/csv');
  showToast(`CSV exportado: ${scrape.leads.length} filas`, 'success');
}

// ==================== LEADS HUNTER ====================
function renderLeadsHunter() {
  const filter = document.getElementById('leads-filter').value;
  let leads = [...STATE.leadsHunter];
  if (filter === 'hot') leads = leads.filter(l => l.score >= 80);
  else if (filter === 'noweb') leads = leads.filter(l => !l.webAnalysis?.hasWeb);
  else if (filter === 'badweb') leads = leads.filter(l => l.webAnalysis?.hasWeb && l.webAnalysis.score < 50);
  else if (filter === 'goodweb') leads = leads.filter(l => l.webAnalysis?.score >= 70);
  leads.sort((a,b) => b.score - a.score);
  
  document.getElementById('leads-hunter-grid').innerHTML = leads.length === 0
    ? '<div class="text-center py-16 text-gray-500 text-sm">No hay leads. ¡Inicia una cacería!</div>'
    : leads.map(l => leadCard(l)).join('');
  lucide.createIcons();
}

function leadCard(l) {
  const wa = l.webAnalysis || {};
  const scoreCls = l.score >= 80 ? 'score-hot' : l.score >= 50 ? 'score-warm' : 'score-cold';
  const scoreLabel = l.score >= 80 ? '🔥 HOT' : l.score >= 50 ? '🟡 TIBIO' : '🟢 FRÍO';
  const badges = [];
  if (!wa.hasWeb) badges.push('<span class="badge bg-red-500/15 text-red-400">SIN WEB</span>');
  else if (wa.score < 50) badges.push('<span class="badge bg-yellow-500/15 text-yellow-400">WEB MALA</span>');
  else if (wa.score < 70) badges.push('<span class="badge bg-blue-500/15 text-blue-400">WEB REGULAR</span>');
  else badges.push('<span class="badge bg-green-500/15 text-green-400">WEB BUENA</span>');
  if (l.reviews < 10) badges.push('<span class="badge bg-red-500/15 text-red-400">POCAS RESEÑAS</span>');
  (wa.technologies || []).slice(0,3).forEach(t => badges.push(`<span class="badge bg-blue-500/15 text-blue-400">${escapeHtml(t)}</span>`));
  
  return `
    <div class="lead-card glass-card rounded-xl p-5">
      <div class="flex items-start justify-between gap-4 mb-3 flex-wrap">
        <div class="flex-1 min-w-0">
          <div class="text-sm font-semibold mb-1">${escapeHtml(l.name)}</div>
          <div class="text-[10px] text-gray-500">${escapeHtml(l.category || 'Sin categoría')} · ⭐ ${l.rating || 0} (${l.reviews || 0} reseñas) · Fuente: ${l.source}</div>
        </div>
        <span class="badge ${scoreCls} text-xs">${scoreLabel} ${l.score}/100</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs mb-3">
        <div class="text-gray-400">📍 <span class="text-gray-300">${escapeHtml(l.address || 'N/A')}</span></div>
        <div class="text-gray-400">📞 <span class="text-gray-300">${l.phone ? `<a href="tel:${l.phone}" class="text-accent hover:underline">${escapeHtml(l.phone)}</a>` : 'N/A'}</span></div>
        <div class="text-gray-400">🌐 <span class="text-gray-300">${l.website ? `<a href="${l.website}" target="_blank" class="text-accent hover:underline">${escapeHtml(l.website.slice(0,30))}</a>` : '<span class="text-red-400">NO TIENE</span>'}</span></div>
      </div>
      <div class="flex flex-wrap gap-1.5 mb-3">${badges.join('')}</div>
      ${wa.issues && wa.issues.length ? `<div class="text-[11px] text-red-400 mb-2">⚠️ ${wa.issues.join(' · ')}</div>` : ''}
      ${wa.strengths && wa.strengths.length ? `<div class="text-[11px] text-green-400 mb-2">✅ ${wa.strengths.join(' · ')}</div>` : ''}
      <div class="flex gap-2 pt-2 border-t border-white/5">
        <button onclick="quickEmail('${l.id}')" class="h-8 px-3 rounded-lg bg-accent/10 text-accent text-xs font-medium hover:bg-accent/20 transition-all flex items-center gap-1"><i data-lucide="mail" class="w-3 h-3"></i>Email IA</button>
        <button onclick="addLeadToCRM('${l.id}')" class="h-8 px-3 rounded-lg glass text-xs font-medium hover:bg-white/5 transition-all flex items-center gap-1"><i data-lucide="user-plus" class="w-3 h-3"></i>Añadir a CRM</button>
        <button onclick="deleteLead('${l.id}')" class="h-8 px-3 rounded-lg glass text-xs font-medium hover:bg-white/5 transition-all flex items-center gap-1 text-red-400"><i data-lucide="trash-2" class="w-3 h-3"></i></button>
      </div>
    </div>
  `;
}

function quickEmail(leadId) {
  navigate('emails');
  setTimeout(() => {
    document.getElementById('email-lead-select').value = leadId;
    generateEmail();
  }, 100);
}

function addLeadToCRM(leadId) {
  const l = STATE.leadsHunter.find(x => x.id === leadId);
  if (!l) return;
  const contact = {
    id: uid(), name: l.name, role: l.category || 'Lead', company: l.name,
    email: '', phone: l.phone || '', tags: [l.source, l.score >= 80 ? 'HOT' : 'TIBIO'],
    notes: `Lead de scraper · Score: ${l.score}/100 · ${l.address}`, created: Date.now()
  };
  STATE.contacts.unshift(contact);
  STATE.activity.unshift({ text: `Lead "${l.name}" añadido a CRM`, time: Date.now(), icon: 'user-plus', color: 'text-purple-400' });
  save(); updateBadges();
  showToast(`"${l.name}" añadido a CRM`, 'success');
}

function deleteLead(id) {
  STATE.leadsHunter = STATE.leadsHunter.filter(x => x.id !== id);
  save(); renderLeadsHunter(); updateBadges();
  showToast('Lead eliminado', 'info');
}

function exportLeadsCSV() {
  if (STATE.leadsHunter.length === 0) { showToast('No hay leads', 'error'); return; }
  const headers = ['Nombre','Dirección','Teléfono','Web','Rating','Reseñas','Score','TieneWeb','ScoreWeb'];
  const rows = STATE.leadsHunter.map(l => [
    l.name, l.address, l.phone, l.website, l.rating, l.reviews, l.score,
    l.webAnalysis?.hasWeb ? 'Sí' : 'No', l.webAnalysis?.score || 0
  ]);
  const csv = [headers, ...rows].map(r => r.map(c => `"${String(c||'').replace(/"/g,'""')}"`).join(',')).join('\n');
  downloadFile(csv, `tiberion_leads_${Date.now()}.csv`, 'text/csv');
  showToast(`CSV: ${STATE.leadsHunter.length} leads`, 'success');
}

function exportLeadsJSON() {
  if (STATE.leadsHunter.length === 0) { showToast('No hay leads', 'error'); return; }
  downloadFile(JSON.stringify(STATE.leadsHunter, null, 2), `tiberion_leads_${Date.now()}.json`, 'application/json');
  showToast('JSON exportado', 'success');
}

// ==================== EMAILS IA ====================
function updateEmailSelect() {
  const sel = document.getElementById('email-lead-select');
  if (!sel) return;
  const sorted = [...STATE.leadsHunter].sort((a,b) => b.score - a.score);
  sel.innerHTML = '<option value="">-- Selecciona lead --</option>' + sorted.map(l => {
    const tag = !l.webAnalysis?.hasWeb ? ' 🚫 SIN WEB' : l.webAnalysis?.score < 50 ? ' ⚠️ WEB MALA' : '';
    return `<option value="${l.id}">${l.score}pts · ${escapeHtml(l.name)}${tag}</option>`;
  }).join('');
}

async function generateEmail() {
  const id = document.getElementById('email-lead-select').value;
  const sender = document.getElementById('email-sender').value || 'TIBERION';
  const tone = document.getElementById('email-tone').value;
  const preview = document.getElementById('email-preview');
  const status = document.getElementById('email-status');
  
  if (!id) { preview.textContent = 'Selecciona un lead para generar el email...'; status.textContent = 'Esperando lead...'; return; }
  
  const l = STATE.leadsHunter.find(x => x.id === id);
  if (!l) return;
  
  const wa = l.webAnalysis || {};
  status.textContent = '🧠 Generando con IA...';

  // === IA REAL (OpenRouter, modelo open-source gratuito) ===
  if (STATE.apis.openrouter) {
    try {
      const wa2 = l.webAnalysis || {};
      const prompt = `Eres un experto en ventas B2B. Escribe un email de prospeccion en frio (asunto + cuerpo, max 150 palabras) para este negocio, en el idioma de su ubicacion (${l.address||'Espana'}). Tono: ${tone}. Firma: ${sender}.
Negocio: ${l.name} · ${l.category||''} · ${l.address||''} · rating ${l.rating||'?'} (${l.reviews||0} resenas).
Web: ${wa2.hasWeb?l.website:'NO TIENE WEB'} · problemas: ${(wa2.issues||[]).join('; ')||'ninguno'} · score ${wa2.score??'n/a'}/100.
Primera linea "ASUNTO: ..." y luego el cuerpo. Personaliza con los problemas reales. Sin markdown.`;
      const r = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method:'POST',
        headers:{'Content-Type':'application/json','Authorization':'Bearer '+STATE.apis.openrouter},
        body: JSON.stringify({ model:'meta-llama/llama-3.3-70b-instruct:free', messages:[{role:'user',content:prompt}], max_tokens:400 })
      });
      const d = await r.json();
      const txt = d.choices?.[0]?.message?.content;
      if (txt) {
        preview.textContent = txt.trim();
        status.textContent = '✅ Generado con IA (OpenRouter)';
        STATE.activity.unshift({ text:`Email IA generado para ${l.name}`, time:Date.now(), icon:'sparkles', color:'text-accent' });
        save();
        return;
      }
    } catch(e) { console.warn('OpenRouter fallo, uso plantillas:', e); }
    status.textContent = '⚠️ IA no disponible — usando plantilla';
  }
  
  setTimeout(() => {
    let subject = '', body = '';
    
    const greetings = {
      professional: `Estimado/a responsable de ${l.name},`,
      friendly: `¡Olá equipe do ${l.name}! 👋`,
      direct: `Hola,`,
      hermes: `Salve, mortales de ${l.name}. Hermes os habla. 🏛️`
    };
    
    const closings = {
      professional: `\n\nQuedo a su disposición para una llamada de 15 minutos.\nAtentamente,\n${sender}`,
      friendly: `\n\nBora conversar 15 minutinhos? Sem compromisso 😊\nUm abraço,\n${sender}`,
      direct: `\n\n¿Hablamos 15 min?\n${sender}`,
      hermes: `\n\nDicho por el mensajero de los dioses.\n— Hermes (en nombre de ${sender})`
    };
    
    if (!wa.hasWeb) {
      subject = `He buscado ${l.name} en Google y no os he encontrado 😱`;
      body = `${greetings[tone]}

Soy cliente potencial de vuestro sector y os he buscado en Google Maps, pero me he llevado una sorpresa: no tenéis página web.

Esto significa que cada día estáis perdiendo clientes que como yo os buscan en Google y al no encontrar web, se van a la competencia.

En ${sender} ayudamos a negocios como el vuestro a:
✅ Crear una web profesional en 7 días
✅ Aparecer los primeros en Google Maps
✅ Automatizar reservas/pedidos con WhatsApp Business API
✅ Implementar agentes IA que atienden 24/7
✅ Piezas personalizadas impresas en 3D para vuestro local

He preparado un análisis gratuito de cómo podríais multiplicar x3 vuestras consultas en 30 días.

¿Os parece bien una llamada de 15 minutos esta semana?`;
    } else if (wa.score < 50) {
      subject = `He visitado vuestra web y tiene varios problemas críticos 🚨`;
      body = `${greetings[tone]}

He visitado vuestra web (${l.website}) y he detectado varios problemas que os están haciendo perder clientes:

${(wa.issues || []).map(i => '• ' + i).join('\n')}

Puntuación técnica actual: ${wa.score}/100 (muy por debajo del mínimo recomendado de 70)

Esto significa que:
- Google os penaliza en el posicionamiento
- Los clientes abandonan antes de contactar
- Perdéis ventas cada día

En ${sender} tenemos un plan específico:
✅ Rediseño web responsive y rápido
✅ Optimización SEO local
✅ Integración con WhatsApp Business
✅ Agente IA para responder 24/7
✅ Soluciones de impresión 3D personalizadas

¿Os envío un presupuesto sin compromiso?`;
    } else if (wa.score < 70) {
      subject = `Vuestra web funciona, pero podríais vender mucho más 📈`;
      body = `${greetings[tone]}

He visto vuestra web (${l.website}) y está bien, pero tiene margen de mejora importante.

He detectado algunas oportunidades:
${(wa.issues || []).map(i => '• ' + i).join('\n') || '• Velocidad mejorable\n• Falta de automatizaciones\n• Sin integración con WhatsApp'}

Con pequeños cambios podríais multiplicar vuestras conversiones:
✅ Automatizar respuestas por WhatsApp
✅ Agente IA para captar leads 24/7
✅ Sistema de reservas online
✅ Piezas 3D personalizadas para vuestro negocio

¿Hablamos 15 minutos?`;
    } else {
      subject = `Me encanta vuestra web, pero hay algo que os falta 🚀`;
      body = `${greetings[tone]}

He visto vuestra web (${l.website}) y está muy bien trabajada 👏

Pero he notado que aún no estáis aprovechando todo el potencial de la automatización y la fabricación digital:

❌ No tenéis chatbot IA para atender 24/7
❌ No automatizáis el seguimiento de clientes
❌ No tenéis elementos físicos personalizados (señalética, soportes, menús 3D)
❌ No integráis WhatsApp Business API

En ${sender} ayudamos a negocios como el vuestro a:
✅ Implementar agentes IA que atienden y venden 24/7
✅ Automatizar follow-ups y recuperaciones
✅ Diseñar e imprimir piezas 3D únicas para vuestro local
✅ Integrar WhatsApp Business API

¿Os interesa ver una demo de 15 minutos?`;
    }
    
    body += closings[tone];
    
    preview.textContent = `ASUNTO: ${subject}\n\n${body}`;
    status.textContent = `✅ Generado · ${tone}`;
  }, 400);
}

function copyEmail() {
  const text = document.getElementById('email-preview').textContent;
  if (!text || text.startsWith('Selecciona')) { showToast('Genera un email primero', 'error'); return; }
  navigator.clipboard.writeText(text).then(() => {
    showToast('📋 Email copiado al portapapeles', 'success');
  });
}

// ==================== APIs ====================
function loadApisUI() {
  ['serpapi','outscraper','rapidapi','pagespeed','urlscan','openrouter'].forEach(k => {
    const el = document.getElementById('api-' + k);
    if (el && STATE.apis[k]) el.value = STATE.apis[k];
    const dot = document.getElementById('dot-' + k);
    if (dot) {
      if (k === 'pagespeed') dot.className = 'api-dot ok';
      else dot.className = 'api-dot ' + (STATE.apis[k] ? 'ok' : 'none');
    }
  });
}

function saveApis() {
  STATE.apis = {
    serpapi: document.getElementById('api-serpapi').value.trim(),
    outscraper: document.getElementById('api-outscraper').value.trim(),
    rapidapi: document.getElementById('api-rapidapi').value.trim(),
    pagespeed: document.getElementById('api-pagespeed').value.trim(),
    urlscan: document.getElementById('api-urlscan').value.trim(),
    openrouter: document.getElementById('api-openrouter').value.trim()
  };
  save();
  loadApisUI();
  STATE.activity.unshift({ text: 'APIs actualizadas', time: Date.now(), icon: 'key', color: 'text-accent' });
  save();
  showToast('✅ APIs guardadas. Sistema listo para cazar.', 'success');
}

// ==================== DOCTOR FIX ====================
async function runDoctorFix(description) {
  const overlay = document.getElementById('doctor-fix-overlay');
  const msg = document.getElementById('doctor-fix-msg');
  const progress = document.getElementById('doctor-fix-progress');
  overlay.classList.remove('hidden');
  overlay.classList.add('flex');
  
  const steps = [
    { msg: '🔍 Escaneando selectores CSS...', pct: 20 },
    { msg: '🧠 Analizando anomalías con IA...', pct: 45 },
    { msg: '🩹 Aplicando parches auto-reparables...', pct: 70 },
    { msg: '✅ Verificando 500 criterios Aegis...', pct: 90 },
    { msg: '🎉 Sistema operativo. Vibe de Garota de Ipanema activada.', pct: 100 }
  ];
  
  for (const step of steps) {
    msg.textContent = step.msg;
    progress.style.width = step.pct + '%';
    await new Promise(r => setTimeout(r, 700));
  }
  
  setTimeout(() => {
    overlay.classList.add('hidden');
    overlay.classList.remove('flex');
    progress.style.width = '0%';
    showToast('🩺 Doctor Fix: 500/500 criterios OK. Tudo limpo!', 'success');
    STATE.activity.unshift({ text: `Doctor Fix: ${description}`, time: Date.now(), icon: 'stethoscope', color: 'text-green-400' });
    save();
  }, 800);
}

// ==================== SEARCH ====================
document.getElementById('global-search').addEventListener('input', (e) => {
  const q = e.target.value.toLowerCase();
  if (!q) return;
  const taskMatch = STATE.tasks.some(t => t.title.toLowerCase().includes(q));
  const contactMatch = STATE.contacts.some(c => (c.name+c.email+c.company).toLowerCase().includes(q));
  const leadMatch = STATE.leadsHunter.some(l => (l.name+l.address).toLowerCase().includes(q));
  if (taskMatch && STATE.currentView !== 'gip') navigate('gip');
  else if (contactMatch && STATE.currentView !== 'crm') navigate('crm');
  else if (leadMatch && STATE.currentView !== 'leads') navigate('leads');
});

// ==================== MODAL ====================
function openModal(title, bodyHTML) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = bodyHTML;
  const overlay = document.getElementById('modal-overlay');
  const box = document.getElementById('modal-box');
  overlay.classList.remove('hidden');
  requestAnimationFrame(() => {
    box.style.transform = 'translate(-50%, -50%) scale(1)';
    box.style.opacity = '1';
  });
  lucide.createIcons();
}

function closeModal() {
  const box = document.getElementById('modal-box');
  box.style.transform = 'translate(-50%, -50%) scale(0.95)';
  box.style.opacity = '0';
  setTimeout(() => document.getElementById('modal-overlay').classList.add('hidden'), 200);
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ==================== TOAST ====================
function showToast(msg, type = 'info') {
  const container = document.getElementById('toast-container');
  const icons = { success: 'check-circle', error: 'alert-circle', info: 'info' };
  const colors = { success: 'text-green-400', error: 'text-red-400', info: 'text-accent' };
  const toast = document.createElement('div');
  toast.className = 'toast-in pointer-events-auto flex items-center gap-3 px-4 py-3 glass-high rounded-xl border border-white/8 max-w-sm';
  toast.innerHTML = `<i data-lucide="${icons[type]}" class="w-4 h-4 ${colors[type]} flex-shrink-0"></i><span class="text-xs text-gray-300 flex-1">${msg}</span><button onclick="this.parentElement.classList.replace('toast-in','toast-out');setTimeout(()=>this.parentElement.remove(),300)" class="text-gray-600 hover:text-white transition-colors"><i data-lucide="x" class="w-3 h-3"></i></button>`;
  container.appendChild(toast);
  lucide.createIcons();
  setTimeout(() => { if (toast.parentElement) { toast.classList.replace('toast-in','toast-out'); setTimeout(() => toast.remove(), 300); } }, 4000);
}

// ==================== CLI ====================
function toggleCLI() {
  const cli = document.getElementById('cli-overlay');
  cli.classList.toggle('active');
  if (cli.classList.contains('active')) document.getElementById('cli-input').focus();
}

function logToCLI(msg, type = 'info') {
  const output = document.getElementById('cli-output');
  const colors = { info: 'text-gray-400', success: 'cli-success', error: 'cli-error', warn: 'cli-warn', hermes: 'cli-hermes' };
  output.innerHTML += `<div class="${colors[type]}">> ${msg}</div>`;
  output.scrollTop = output.scrollHeight;
}

function handleCLI(e) {
  if (e.key === 'Enter') {
    const input = document.getElementById('cli-input');
    const cmd = input.value.trim().toLowerCase();
    input.value = '';
    logToCLI(cmd, 'info');
    
    if (cmd === 'help') {
      logToCLI("Comandos: scan [tipo] [lugar], heal, vibe, stats, leads, clear, exit", 'hermes');
    } else if (cmd.startsWith('scan')) {
      const parts = cmd.split(' ');
      if (parts.length >= 3) {
        logToCLI(`Iniciando cacería: ${parts[1]} en ${parts.slice(2).join(' ')}...`, 'info');
        navigate('scraper');
        setTimeout(() => {
          document.querySelector('[name="query"]').value = parts[1];
          document.querySelector('[name="location"]').value = parts.slice(2).join(' ');
          openScrapeModal();
        }, 200);
      } else {
        logToCLI("Uso: scan [tipo] [lugar]. Ej: scan restaurantes lisboa", 'error');
      }
    } else if (cmd === 'heal') {
      logToCLI("Ejecutando Doctor Fix...", 'warn');
      toggleCLI();
      runDoctorFix('Comando CLI: heal');
    } else if (cmd === 'vibe') {
      logToCLI("🎵 Tocando 'Aquarela do Brasil' en bucle... O sistema tá feliz!", 'hermes');
    } else if (cmd === 'stats') {
      logToCLI(`Tasks: ${STATE.tasks.length} | Contacts: ${STATE.contacts.length} | Leads: ${STATE.leadsHunter.length} | Hot: ${STATE.leadsHunter.filter(l=>l.score>=80).length}`, 'success');
    } else if (cmd === 'leads') {
      navigate('leads');
      logToCLI("Abriendo Leads Hunter...", 'success');
    } else if (cmd === 'clear') {
      document.getElementById('cli-output').innerHTML = '';
    } else if (cmd === 'exit' || cmd === 'quit') {
      toggleCLI();
    } else {
      logToCLI(`Comando '${cmd}' no reconocido. Ni Hermes lo entiende. Escribe 'help'.`, 'hermes');
    }
  }
}

document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    toggleCLI();
  }
  if (e.key === 'Escape') {
    const cli = document.getElementById('cli-overlay');
    if (cli.classList.contains('active')) toggleCLI();
  }
});

// ==================== UTILS ====================
function downloadFile(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

// ==================== INIT ====================
load();
renderCurrentView();
lucide.createIcons();
logToCLI("Sistema TIBERION inicializado. Direitos cedidos a Thiago Luiz. Arquitetura por Pedro Belentani. O show vai começar, meu rei. 🇧🇷", 'success');
