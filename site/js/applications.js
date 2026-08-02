// applications.js — 应用方案套料视图（场景 → MCU + 驱动 + 电源组合）
window.ApplicationsView = {
  state: { q: '', role: '' },

  render() {
    const roles = [
      { key: '', label: '全部方案' },
      { key: 'mcu', label: 'MCU 控制' },
      { key: 'driver', label: '驱动 / IPM' },
      { key: 'power', label: '电源' },
    ];
    return `<div class="light-zone">
      <h2 class="view-title">应用方案套料</h2>
      <div class="view-sub">按应用场景查看 MCU + 驱动 + 电源 整机方案，点型号直达产品详情</div>
      <div class="app-filter">
        <input type="text" id="app-search" placeholder="搜索应用场景，如 空调、洗衣机、冰箱…">
        <select id="app-role">
          ${roles.map(r => `<option value="${esc(r.key)}">${esc(r.label)}</option>`).join('')}
        </select>
      </div>
      <div id="app-boms"></div>
    </div>`;
  },

  afterRender() {
    const input = document.getElementById('app-search');
    const select = document.getElementById('app-role');
    const apply = () => {
      this.state.q = input.value.trim().toLowerCase();
      this.state.role = select.value;
      this.renderBoms();
    };
    input.addEventListener('input', apply);
    select.addEventListener('change', apply);
    this.renderBoms();
  },

  renderBoms() {
    const box = document.getElementById('app-boms');
    if (!box) return;
    const { applications } = window.VaultData;
    const q = this.state.q;
    const role = this.state.role;

    const list = applications.filter(a => {
      if (role && !this.hasRole(a, role)) return false;
      if (q && !a.app.toLowerCase().includes(q)) return false;
      return true;
    });

    if (!list.length) {
      box.innerHTML = `<div class="empty">无匹配方案，请调整搜索条件</div>`;
      return;
    }

    // 数据源提示：部分场景 MCU 组合未录入
    const missingMcu = applications.filter(a => !a.mcu).length;
    let banner = '';
    if (missingMcu > 0) {
      banner = `<div class="banner-warn" style="margin-bottom:16px">
        ⚠️ 数据源中 ${missingMcu} 个应用场景的 MCU 型号尚未录入，当前仅展示 驱动/IPM 与 电源 组合；MCU 部分待补充。
      </div>`;
    }

    box.innerHTML = banner + `<div class="result-count">${list.length} 个应用场景方案</div>` +
      list.map(a => this.bomCard(a)).join('');
  },

  hasRole(a, role) {
    return !!(a[role] && String(a[role]).trim());
  },

  bomCard(a) {
    const rows = [
      { key: 'mcu', tag: 'MCU', label: 'MCU 控制' },
      { key: 'driver_ipm', tag: 'driver', label: '驱动 / IPM' },
      { key: 'power', tag: 'power', label: '电源' },
    ];
    const body = rows.map(r => {
      const val = a[r.key] || '';
      if (!val.trim()) return '';
      return `<div class="bom-role">
        <span class="role-tag ${r.tag}">${r.label}</span>
        <span class="chips-row">${this.toChips(val, r.tag)}</span>
      </div>`;
    }).join('');

    return `<div class="bom-card">
      <div class="bom-head">
        <h3>${esc(a.app)}</h3>
        ${a.note ? `<span class="muted">${esc(a.note)}</span>` : ''}
      </div>
      ${body || `<div class="muted">暂未录入组合</div>`}
    </div>`;
  },

  // 将 "BPA8504D / BPA85963D" 之类字符串拆成芯片，可跳详情则加链接
  toChips(str, tag) {
    const products = window.VaultData.products || [];
    const parts = String(str).split(/[\/,、\n]+/).map(s => s.trim()).filter(Boolean);
    return parts.map(chip => {
      const hit = this.resolveProduct(chip, products);
      if (hit) {
        const href = `#/products-detail/${encodeURIComponent(hit.line)}/${encodeURIComponent(hit.device)}`;
        return `<a class="bom-chip" href="${href}">${esc(chip)}</a>`;
      }
      return `<span class="bom-chip" title="库中暂无该型号详情">${esc(chip)}</span>`;
    }).join('');
  },

  resolveProduct(chip, products) {
    const c = chip.toLowerCase();
    // 优先精确匹配 device
    let hit = products.find(p => p.device && p.device.toLowerCase() === c);
    if (hit) return hit;
    // 其次前缀匹配（如 LKS561 → LKS561xxx）
    hit = products.find(p => p.device && p.device.toLowerCase().startsWith(c));
    return hit || null;
  },
};
