// selection.js — 参数筛选选型视图
window.SelectionView = {
  state: { line: '', filters: {} },

  render() {
    const { products } = window.VaultData;
    const lines = [...new Set(products.map(p => p.line))];
    let html = `<h2 class="view-title">参数筛选选型</h2>
      <div class="view-sub">先选产品线，再按参数过滤候选型号</div>
      <div class="filter-panel">
        <div class="filter-row">
          <label>产品线</label>
          <select id="sel-line">
            <option value="">— 请选择产品线 —</option>
            ${lines.map(l => `<option value="${esc(l)}">${esc(lineLabel(l))}</option>`).join('')}
          </select>
        </div>
        <div id="sel-widgets"></div>
      </div>
      <div id="sel-results"></div>`;
    return html;
  },

  afterRender() {
    const lineSel = document.getElementById('sel-line');
    lineSel.addEventListener('change', () => {
      this.state.line = lineSel.value;
      this.state.filters = {};
      this.renderWidgets();
      this.renderResults();
    });
    // 恢复状态
    if (this.state.line) {
      lineSel.value = this.state.line;
      this.renderWidgets();
      this.renderResults();
    }
  },

  getWidgetDefs(line) {
    const defs = {
      'MCU': [
        ['freq_mhz', '主频 (≥MHz)', 'num', 'min'],
        ['flash_kb', 'Flash (≥KB)', 'num', 'min'],
        ['ram_kb', 'RAM (≥KB)', 'num', 'min'],
        ['adc_channels', 'ADC 通道 (≥)', 'num', 'min'],
        ['gate_driver', '内置 Gate Driver', 'select', ['', '6N', '3P3N']],
        ['package', '封装', 'select', []],
      ],
      'IPM': [
        ['voltage', '耐压', 'select', []],
        ['current', '电流', 'num', 'min'],
        ['package', '封装', 'select', []],
      ],
      'ACDC-BP': [
        ['package', '封装', 'select', []],
      ],
      'ACDC-BPA': [
        ['package', '封装', 'select', []],
      ],
      'Gate Driver': [
        ['supply', '供电', 'select', []],
        ['package', '封装', 'select', []],
      ],
      'DC-DC': [],
      'LED Driver': [],
      'Power Device': [],
    };
    return defs[line] || [];
  },

  renderWidgets() {
    const box = document.getElementById('sel-widgets');
    if (!box) return;
    const defs = this.getWidgetDefs(this.state.line);
    if (!defs.length) {
      box.innerHTML = `<div class="muted">该产品线为族级数据，暂无可筛选参数。</div>`;
      return;
    }
    const { products } = window.VaultData;
    const prods = products.filter(p => p.line === this.state.line);

    let html = '';
    for (const [field, label, type, opt] of defs) {
      let control = '';
      if (type === 'num') {
        control = `<input type="number" min="0" data-f="${field}" data-mode="${opt}" placeholder="不限">
          <span class="muted">${opt === 'min' ? '以上' : ''}</span>`;
      } else if (type === 'select') {
        let options = opt;
        if (Array.isArray(opt) && opt.length === 0) {
          options = [...new Set(prods.map(p => p[field]).filter(Boolean))];
        }
        control = `<select data-f="${field}">
          <option value="">不限</option>
          ${options.map(o => `<option value="${esc(o)}">${esc(o)}</option>`).join('')}
        </select>`;
      }
      html += `<div class="filter-row"><label>${esc(label)}</label>${control}</div>`;
    }
    box.innerHTML = html;

    box.querySelectorAll('[data-f]').forEach(el => {
      const field = el.dataset.f;
      el.value = this.state.filters[field] || '';
      el.addEventListener('input', () => {
        this.state.filters[field] = el.value;
        this.renderResults();
      });
    });
  },

  applyFilters(prods) {
    const { filters } = this.state;
    return prods.filter(p => {
      for (const [field, val] of Object.entries(filters)) {
        if (val === '') continue;
        const pv = p[field];
        const numeric = !isNaN(parseFloat(val)) && isFinite(val);
        if (numeric) {
          const threshold = parseFloat(val);
          const actual = (typeof pv === 'object' && pv !== null && 'min' in pv) ? pv.min : parseFloat(pv);
          if (isNaN(actual) || actual < threshold) return false;
        } else {
          if (String(pv || '') !== val) return false;
        }
      }
      return true;
    });
  },

  renderResults() {
    const box = document.getElementById('sel-results');
    if (!box) return;
    if (!this.state.line) { box.innerHTML = ''; return; }
    const { products } = window.VaultData;
    const prods = products.filter(p => p.line === this.state.line);
    const filtered = this.applyFilters(prods);

    let html = `<div class="result-count">${filtered.length} / ${prods.length} 个型号</div>
      <table><thead><tr>
        <th>型号</th><th>系列</th><th>主频</th><th>Flash</th><th>RAM</th><th>ADC</th><th>封装</th><th>Gate Driver</th>
      </tr></thead><tbody>`;
    for (const p of filtered) {
      html += `<tr class="rowlink" data-nav="product-detail" data-line="${esc(p.line)}" data-device="${esc(p.device)}">
        <td><strong>${esc(p.device)}</strong></td>
        <td>${esc(p.series)}</td>
        <td class="num">${numFmt(p.freq_mhz)}</td>
        <td class="num">${numFmt(p.flash_kb)}</td>
        <td class="num">${numFmt(p.ram_kb)}</td>
        <td class="num">${numFmt(p.adc_channels)}</td>
        <td>${esc(p.package || '')}</td>
        <td>${esc(p.gate_driver || '')}</td>
      </tr>`;
    }
    html += `</tbody></table>`;
    if (!filtered.length) html = `<div class="empty">无匹配型号，请放宽筛选条件</div>`;
    box.innerHTML = html;
  },
};
