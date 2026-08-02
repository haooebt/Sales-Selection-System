// app.js — hash 路由 + 全局搜索 + 首页渲染
(function () {
  const app = document.getElementById('app');

  // ---------- 首页 ----------
  function renderHome() {
    const { product_lines } = window.VaultData;
    const counts = countByLine();
    const html = `
      <div class="hero">
        <h1>晶丰明源 技术销售选型系统</h1>
        <p>面向客户与同事的在线选型工具：按产品线浏览、按参数筛选、查竞品替代、按应用场景找方案。</p>
      </div>
      <div class="grid-cards">
        <a class="entry-card" href="#/products">
          <h3>📦 产品库</h3>
          <div class="desc">按产品线浏览全系列型号与参数详情</div>
        </a>
        <a class="entry-card" href="#/selection">
          <h3>🔍 参数筛选</h3>
          <div class="desc">按主频/Flash/封装等参数实时筛出候选型号</div>
        </a>
        <a class="entry-card" href="#/competitors">
          <h3>🔄 竞品替代</h3>
          <div class="desc">输入竞品型号，查推荐替代与风险等级</div>
        </a>
        <a class="entry-card" href="#/applications">
          <h3>🏭 应用场景</h3>
          <div class="desc">按终端场景查看 MCU + 驱动 + 电源组合</div>
        </a>
      </div>
      <h3 style="margin:28px 0 12px">产品线总览（${Object.keys(counts).length} 条）</h3>
      <div class="line-grid">
        ${Object.entries(counts).map(([line, n]) => `
          <a class="line-tile" href="#/products/${encodeURIComponent(line)}">
            <h3>${esc(lineLabel(line))}</h3>
            <div class="count">${n} 个型号</div>
          </a>`).join('')}
      </div>`;
    return html;
  }

  function countByLine() {
    const counts = {};
    for (const p of window.VaultData.products || []) {
      counts[p.line] = (counts[p.line] || 0) + 1;
    }
    return counts;
  }

  // ---------- 路由 ----------
  function parseHash() {
    const h = location.hash.replace(/^#\/?/, '');
    if (!h) return { view: 'home' };
    const parts = h.split('/').map(decodeURIComponent);
    if (parts[0] === 'products') {
      if (parts[1]) return { view: 'products-line', line: parts[1] };
      return { view: 'products' };
    }
    if (parts[0] === 'products-detail' && parts[1] && parts[2]) {
      return { view: 'product-detail', line: parts[1], device: parts[2] };
    }
    if (parts[0] === 'selection') return { view: 'selection' };
    if (parts[0] === 'competitors') return { view: 'competitors' };
    if (parts[0] === 'applications') {
      if (parts[1]) return { view: 'application-detail', app: parts[1] };
      return { view: 'applications' };
    }
    return { view: 'home' };
  }

  function render() {
    const route = parseHash();
    setNavActive(route.view);
    let html;
    switch (route.view) {
      case 'home': html = renderHome(); break;
      case 'products': html = window.ProductsView.renderList(); break;
      case 'products-line': html = window.ProductsView.renderLine(route.line); break;
      case 'product-detail': html = window.ProductsView.renderDetail(route.line, route.device); break;
      case 'selection': html = window.SelectionView.render(); break;
      case 'competitors': html = window.CompetitorsView.render(); break;
      case 'applications': html = window.ApplicationsView.render(); break;
      case 'application-detail': html = window.ApplicationsView.renderDetail(route.app); break;
      default: html = renderHome();
    }
    app.innerHTML = html;
    scrollTo(0, 0);
    // 视图渲染后的额外绑定
    if (route.view === 'selection') window.SelectionView.afterRender();
    if (route.view === 'competitors') window.CompetitorsView.afterRender();
    bindRowLinks();
  }

  function setNavActive(view) {
    document.querySelectorAll('.nav a').forEach(a => {
      const map = { home: '#/', products: '#/products', selection: '#/selection',
                    competitors: '#/competitors', applications: '#/applications',
                    'products-line': '#/products', 'product-detail': '#/products',
                    'application-detail': '#/applications' };
      a.classList.toggle('active', a.getAttribute('href') === map[view]);
    });
  }

  // 表格行点击 → 型号详情
  function bindRowLinks() {
    document.querySelectorAll('tr.rowlink').forEach(tr => {
      tr.addEventListener('click', () => {
        const line = tr.dataset.line;
        const device = tr.dataset.device;
        location.hash = `#/products-detail/${encodeURIComponent(line)}/${encodeURIComponent(device)}`;
      });
    });
  }

  // ---------- 全局搜索 ----------
  function setupSearch() {
    const input = document.getElementById('global-search');
    const wrap = input.closest('.search-box');
    let dropdown = document.createElement('div');
    dropdown.className = 'search-results';
    wrap.appendChild(dropdown);

    let timer = null;
    input.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const q = input.value.trim().toLowerCase();
        if (q.length < 2) { dropdown.classList.remove('show'); dropdown.innerHTML = ''; return; }
        const hits = [];
        for (const p of window.VaultData.products || []) {
          if (p.device && p.device.toLowerCase().includes(q)) {
            hits.push({ type: 'product', device: p.device, line: p.line, sub: lineLabel(p.line) });
          }
          if (hits.length >= 10) break;
        }
        for (const c of window.VaultData.competitors || []) {
          if (c.model && c.model.toLowerCase().includes(q)) {
            hits.push({ type: 'competitor', device: c.model, line: c.brand, sub: `替代: ${c.replacement}` });
          }
          if (hits.length >= 15) break;
        }
        if (!hits.length) {
          dropdown.innerHTML = `<div class="sr-item">无匹配结果</div>`;
        } else {
          dropdown.innerHTML = hits.map(h => {
            const href = h.type === 'product'
              ? `#/products-detail/${encodeURIComponent(h.line)}/${encodeURIComponent(h.device)}`
              : `#/competitors`;
            return `<div class="sr-item" data-href="${href}">
              <strong>${esc(h.device)}</strong> <small>${esc(h.sub)}</small>
            </div>`;
          }).join('');
        }
        dropdown.classList.add('show');
      }, 200);
    });

    wrap.addEventListener('click', e => {
      const item = e.target.closest('.sr-item');
      if (item && item.dataset.href) {
        location.hash = item.dataset.href;
        dropdown.classList.remove('show');
        input.value = '';
      }
    });
    document.addEventListener('click', e => {
      if (!wrap.contains(e.target)) dropdown.classList.remove('show');
    });
  }

  // ---------- 启动 ----------
  function init() {
    setupSearch();
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
