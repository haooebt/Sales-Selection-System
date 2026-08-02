// applications.js — 应用场景入口视图
window.ApplicationsView = {
  render() {
    const { applications, locator } = window.VaultData;
    let html = `<h2 class="view-title">应用场景入口</h2>
      <div class="view-sub">按终端应用场景查看产品组合方案</div>`;

    // 场景卡片网格
    html += `<div class="line-grid">`;
    for (const a of applications) {
      const mcu = a.mcu || '';
      const ipm = a.driver_ipm || '';
      const power = a.power || '';
      html += `<a class="line-tile" href="#/applications/${encodeURIComponent(a.app)}">
        <h3>${esc(a.app)}</h3>
        <div class="muted" style="margin-top:6px">
          ${mcu ? `<div>MCU: ${esc(mcu)}</div>` : ''}
          ${ipm ? `<div>IPM/驱动: ${esc(ipm)}</div>` : ''}
          ${power ? `<div>电源: ${esc(power)}</div>` : ''}
        </div>
      </a>`;
    }
    html += `</div>`;

    // 场景→产品线快速映射
    if (locator && locator.applications && locator.applications.length) {
      html += `<h3 style="margin:28px 0 12px">场景 → 产品线速查</h3>
        <table><thead><tr><th>应用场景</th><th>优先读取</th><th>典型产品线</th></tr></thead><tbody>`;
      for (const row of locator.applications) {
        html += `<tr><td>${esc(row.app)}</td><td class="muted">${esc(row.products || '')}</td><td>${esc(row.lines || '')}</td></tr>`;
      }
      html += `</tbody></table>`;
    }
    return html;
  },

  renderDetail(app) {
    const { applications, locator } = window.VaultData;
    const a = applications.find(x => x.app === app);
    if (!a) return `<div class="empty">未找到场景 ${esc(app)}</div>`;
    let html = `<a href="#/applications" class="back-link">← 应用场景</a>
      <h2 class="view-title">${esc(a.app)}</h2>
      <div class="detail-grid">
        <div class="card"><h3>MCU</h3><p>${esc(a.mcu || '—')}</p></div>
        <div class="card"><h3>Driver / IPM</h3><p>${esc(a.driver_ipm || '—')}</p></div>
        <div class="card"><h3>辅助电源</h3><p>${esc(a.power || '—')}</p></div>
        <div class="card"><h3>备注</h3><p class="muted">${esc(a.note || '—')}</p></div>
      </div>`;

    // 关联竞品类别（通过 locator）
    if (locator && locator.categories && locator.categories.length) {
      html += `<h3 style="margin:24px 0 10px">相关竞品类别</h3><table><thead><tr>
        <th>竞品类别</th><th>我司产品线</th><th>首选入口</th><th>第一轮筛选参数</th></tr></thead><tbody>`;
      for (const row of locator.categories) {
        html += `<tr><td>${esc(row.category)}</td><td>${esc(row.line)}</td><td class="muted">${esc(row.primary || '')}</td><td class="muted">${esc(row.filters || '')}</td></tr>`;
      }
      html += `</tbody></table>`;
    }
    return html;
  },
};
