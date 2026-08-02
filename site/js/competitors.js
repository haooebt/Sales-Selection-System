// competitors.js — 竞品替代查询视图
window.CompetitorsView = {
  render() {
    const { competitors } = window.VaultData;
    const brands = [...new Set(competitors.map(c => c.brand))];
    let html = `<h2 class="view-title">竞品替代查询</h2>
      <div class="view-sub">输入竞品品牌或型号，查看晶丰明源推荐替代方案</div>
      <div class="filter-panel">
        <div class="filter-row">
          <label>竞品品牌</label>
          <select id="comp-brand">
            <option value="">全部品牌</option>
            ${brands.map(b => `<option value="${esc(b)}">${esc(b)}</option>`).join('')}
          </select>
        </div>
        <div class="filter-row">
          <label>竞品型号</label>
          <input type="text" id="comp-search" placeholder="如 MSPM0L1304TRGER、CY8C4147...">
        </div>
      </div>
      <div id="comp-results"></div>`;
    return html;
  },

  afterRender() {
    const brandSel = document.getElementById('comp-brand');
    const search = document.getElementById('comp-search');
    const doFilter = () => {
      const { competitors } = window.VaultData;
      const b = brandSel.value;
      const q = search.value.trim().toLowerCase();
      const list = competitors.filter(c => {
        if (b && c.brand !== b) return false;
        if (q && !c.model.toLowerCase().includes(q)) return false;
        return true;
      });
      this.renderResults(list);
    };
    brandSel.addEventListener('change', doFilter);
    search.addEventListener('input', doFilter);
    this.renderResults(window.VaultData.competitors);
  },

  renderResults(list) {
    const box = document.getElementById('comp-results');
    if (!box) return;
    if (!list.length) { box.innerHTML = `<div class="empty">未找到匹配的竞品替代记录</div>`; return; }
    let html = `<div class="result-count">${list.length} 条替代记录</div>
      <table><thead><tr>
        <th>竞品品牌</th><th>竞品型号</th><th>推荐替代</th><th>等级</th>
        <th>Pin 兼容</th><th>软件难度</th><th>风险点</th>
      </tr></thead><tbody>`;
    for (const c of list) {
      const grade = (c.grade || '').toUpperCase();
      html += `<tr>
        <td>${esc(c.brand)}</td>
        <td><strong>${esc(c.model)}</strong></td>
        <td>${esc(c.replacement)}</td>
        <td><span class="chip grade-${grade.charAt(0)}">${esc(c.grade || '')}</span></td>
        <td>${esc(c.pin_compatible || '')}</td>
        <td>${esc(c.sw_effort || '')}</td>
        <td class="muted">${esc(c.risk || '')}</td>
      </tr>`;
    }
    html += `</tbody></table>`;
    box.innerHTML = html;
  },
};
