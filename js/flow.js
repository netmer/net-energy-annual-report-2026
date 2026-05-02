// ========== INTERACTIVE FLOW DIAGRAM ==========
// Handles: node selection, side panel, fullscreen, mini cards

(function(){
  // Node-to-connection mapping (which paths/labels relate to each node)
  const NODE_RELATIONS = {
    docflow: ['path-doc-out', 'path-doc-in', 'lbl-doc'],
    netmer:  ['path-netmer', 'lbl-netmer'],
    chat:    ['path-chat-out', 'path-chat-in', 'lbl-chat'],
    cp:      ['path-cp', 'lbl-cp'],
    post:    ['path-post', 'lbl-post'],
    card:    ['path-card-in', 'path-card-out', 'lbl-card'],
    ai:      ['path-ai-out', 'path-ai-in', 'lbl-ai'],
    push:    ['path-push-out', 'path-push-in', 'lbl-push'],
  };

  let svg, sidePanel, miniCards, currentSelection = null;
  let canvas, stage;

  function init(){
    svg = document.getElementById('flow-svg');
    sidePanel = document.getElementById('flow-side');
    miniCards = document.querySelectorAll('.flow-mini .mc');
    canvas = document.getElementById('flow-canvas');
    stage = document.getElementById('flow-stage');
    if (!svg) return;

    // Bind node clicks
    svg.querySelectorAll('.node').forEach(n => {
      n.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = n.dataset.id;
        if (currentSelection === id) deselect();
        else selectNode(id);
      });
    });

    // Click on empty SVG → deselect
    svg.addEventListener('click', (e) => {
      if (e.target === svg || e.target.tagName === 'rect' && e.target.parentElement === svg) deselect();
    });

    // Mini card clicks
    miniCards.forEach(c => {
      c.addEventListener('click', () => {
        const id = c.dataset.id;
        if (currentSelection === id) deselect();
        else selectNode(id);
      });
    });

    // Toolbar
    const fsBtn = document.getElementById('flow-fs');
    if (fsBtn) fsBtn.addEventListener('click', toggleFullscreen);

    const togglePanel = document.getElementById('flow-toggle-panel');
    if (togglePanel) togglePanel.addEventListener('click', () => {
      canvas.classList.toggle('no-panel');
      togglePanel.classList.toggle('active', !canvas.classList.contains('no-panel'));
    });

    const resetBtn = document.getElementById('flow-reset');
    if (resetBtn) resetBtn.addEventListener('click', deselect);

    // ESC closes fullscreen
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && stage.classList.contains('fullscreen')) {
        toggleFullscreen();
      }
    });
  }

  function selectNode(id){
    currentSelection = id;
    svg.classList.add('has-selection');

    // Mark selected node
    svg.querySelectorAll('.node').forEach(n => {
      n.classList.toggle('selected', n.dataset.id === id);
    });

    // Mark related connections + labels
    const related = NODE_RELATIONS[id] || [];
    svg.querySelectorAll('.conn, .label, .anim-dot').forEach(el => {
      const isRelated = related.some(r => el.id === r || el.dataset.related === id);
      el.classList.toggle('related', isRelated);
    });

    // Update side panel
    renderPanel(id);

    // Highlight mini card
    miniCards.forEach(c => c.classList.toggle('active', c.dataset.id === id));
  }

  function deselect(){
    currentSelection = null;
    svg.classList.remove('has-selection');
    svg.querySelectorAll('.node, .conn, .label, .anim-dot').forEach(el => {
      el.classList.remove('selected', 'related');
    });
    miniCards.forEach(c => c.classList.remove('active'));
    renderEmptyPanel();
  }

  function renderEmptyPanel(){
    sidePanel.innerHTML = `
      <div class="empty">
        <div class="ico">👆</div>
        <div class="ttl">Select a System</div>
        <div>คลิกที่กล่องระบบในแผนภาพ<br/>หรือเลือกจากการ์ดด้านล่าง<br/>เพื่อดูรายละเอียดการเชื่อมต่อ</div>
      </div>
    `;
  }

  function renderPanel(id){
    const data = FLOW_NODES[id];
    if (!data) return;
    const badges = [];
    if (data.status === 'live') badges.push(`<span class="badge live">⚡ Live · Connected</span>`);
    if (data.status === 'plan') badges.push(`<span class="badge plan">📋 Planned Integration</span>`);
    if (data.dir) badges.push(`<span class="badge dir">${data.dir}</span>`);

    sidePanel.innerHTML = `
      <div class="head-card">
        <div class="ic" style="--accent:${data.accent};--accent2:${data.accent2}">${data.icon}</div>
        <div>
          <h4>${data.name}</h4>
          <div class="sub">${data.sub}</div>
        </div>
      </div>
      <div class="badge-row">${badges.join('')}</div>
      <div style="font-size:13px; color:var(--text-soft); line-height:1.6; margin-bottom:14px">
        ${data.desc}
      </div>
      ${data.rows.map(([lab,val]) => `
        <div class="row">
          <div class="lab">${lab}</div>
          <div class="val">${val}</div>
        </div>
      `).join('')}
    `;
  }

  function toggleFullscreen(){
    stage.classList.toggle('fullscreen');
    const btn = document.getElementById('flow-fs');
    if (btn) {
      btn.innerHTML = stage.classList.contains('fullscreen') ? '✕' : '⛶';
      btn.title = stage.classList.contains('fullscreen') ? 'ปิดเต็มจอ (Esc)' : 'เต็มจอ';
    }
  }

  // Init when DOM ready and slide is shown for the first time
  document.addEventListener('DOMContentLoaded', init);
  window.FlowDiagram = { init, deselect, selectNode, renderEmpty: renderEmptyPanel };
})();
