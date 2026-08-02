// app.js — 三大板块 hash 路由 + 启动
(function () {
  const app = document.getElementById('app');

  // ---------- 路由 ----------
  function parseHash() {
    const h = location.hash.replace(/^#\/?/, '');
    if (!h) return { view: 'chat' };            // 默认直入 AI 对话
    const parts = h.split('/').map(decodeURIComponent);
    if (parts[0] === 'products') {
      if (parts[1] === 'detail' && parts[2]) {
        return { view: 'product-detail', line: parts[2], device: parts[3] };
      }
      if (parts[1]) return { view: 'products-line', line: parts[1] };
      return { view: 'products' };
    }
    if (parts[0] === 'products-detail' && parts[1] && parts[2]) {
      return { view: 'product-detail', line: parts[1], device: parts[2] };
    }
    if (parts[0] === 'chat') return { view: 'chat' };
    if (parts[0] === 'applications') return { view: 'applications' };
    if (parts[0] === 'selection') return { view: 'chat' };       // 旧入口 → AI 对话
    if (parts[0] === 'competitors') return { view: 'chat' };     // 旧入口 → AI 对话
    return { view: 'chat' };
  }

  function render() {
    const route = parseHash();
    setNavActive(route.view);
    let html;
    switch (route.view) {
      case 'products': html = window.ProductsView.renderList(); break;
      case 'products-line': html = window.ProductsView.renderLine(route.line); break;
      case 'product-detail': html = window.ProductsView.renderDetail(route.line, route.device); break;
      case 'applications': html = window.ApplicationsView.render(); break;
      case 'chat':
      default: html = window.ChatView.render(); break;
    }
    app.innerHTML = html;
    scrollTo(0, 0);
    // 视图渲染后的额外绑定
    if (route.view === 'products') window.ProductsView.afterRenderList();
    if (route.view === 'applications') window.ApplicationsView.afterRender();
    if (route.view === 'chat') window.ChatView.afterRender();
    bindRowLinks();
  }

  function setNavActive(view) {
    const map = {
      chat: '#/chat',
      products: '#/products',
      'products-line': '#/products',
      'product-detail': '#/products',
      applications: '#/applications',
    };
    const active = map[view] || '#/chat';
    document.querySelectorAll('.nav a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === active);
    });
  }

  // 表格行点击 → 型号详情
  function bindRowLinks() {
    document.querySelectorAll('tr.rowlink, .family-card.rowlink').forEach(tr => {
      tr.addEventListener('click', () => {
        const line = tr.dataset.line;
        const device = tr.dataset.device;
        location.hash = `#/products-detail/${encodeURIComponent(line)}/${encodeURIComponent(device)}`;
      });
    });
  }

  // ---------- 启动 ----------
  function init() {
    render();
    const info = document.getElementById('build-info');
    const m = window.VaultData.meta;
    if (info && m) {
      info.textContent = `数据更新: ${m.product_count || 0} 个产品 · ${m.competitor_count || 0} 条竞品记录`;
    }
  }

  window.addEventListener('hashchange', render);
  document.addEventListener('DOMContentLoaded', async () => {
    await loadAllData();
    init();
  });
})();
