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

  // 每个产品线的列定义：{ key, label, type, options }
  // key 用于取产品字段；type: 'num'(数值≥) | 'select'(下拉) | 'text'(显示列，不筛选)
  getColDefs(line) {
    const defs = {
      'MCU': [
        { key: 'freq_mhz', label: '主频 (MHz)', type: 'num' },
        { key: 'flash_kb', label: 'Flash (KB)', type: 'num' },
        { key: 'ram_kb', label: 'RAM (KB)', type: 'num' },
        { key: 'adc_channels', label: 'ADC 通道', type: 'num' },
        { key: 'gate_driver', label: '内置 Gate Driver', type: 'select' },
        { key: 'package', label: '封装', type: 'select' },
      ],
      'ACDC-BP': [
        { key: '封装', label: '封装', type: 'select', raw: true },
        { key: 'MOSFET耐压', label: 'MOSFET 耐压', type: 'select', raw: true },
        { key: '输出能力', label: '输出能力', type: 'select', raw: true },
        { key: '拓扑', label: '拓扑', type: 'select', raw: true },
        { key: '待机功耗', label: '待机功耗', type: 'select', raw: true },
        { key: '特色功能', label: '特色功能', type: 'text', raw: true },
      ],
      'ACDC-BPA': [
        { key: '封装', label: '封装', type: 'select', raw: true },
        { key: 'MOSFET耐压', label: 'MOSFET 耐压', type: 'select', raw: true },
        { key: '输出能力', label: '输出能力', type: 'select', raw: true },
        { key: '拓扑', label: '拓扑', type: 'select', raw: true },
        { key: '特色功能', label: '特色功能', type: 'text', raw: true },
      ],
      'Gate Driver': [
        { key: '封装', label: '封装', type: 'select', raw: true },
        { key: 'IO+', label: 'IO+ (A)', type: 'select', raw: true },
        { key: 'IO-', label: 'IO- (A)', type: 'select', raw: true },
        { key: 'Floating Voltage', label: '浮空电压', type: 'select', raw: true },
        { key: '控制逻辑', label: '控制逻辑', type: 'select', raw: true },
        { key: 'UVLO', label: 'UVLO', type: 'select', raw: true },
        { key: '供电', label: '供电', type: 'select', raw: true },
        { key: '输入电平', label: '输入电平', type: 'select', raw: true },
        { key: 'Turn-on/off Delay', label: '开通/关断延时', type: 'text', raw: true },
        { key: 'Dead Time', label: '死区时间', type: 'text', raw: true },
      ],
      'IPM': [
        { key: '耐压', label: '耐压', type: 'select', raw: true },
        { key: '电流能力', label: '电流能力', type: 'select', raw: true },
        { key: '导通电阻', label: '导通电阻', type: 'select', raw: true },
        { key: '封装', label: '封装', type: 'select', raw: true },
        { key: '集成自举', label: '集成自举', type: 'select', raw: true },
        { key: '温度检测', label: '温度检测', type: 'select', raw: true },
        { key: '保护功能', label: '保护功能', type: 'text', raw: true },
      ],
      'DC-DC': [],
      'LED Driver': [],
      'Power Device': [],
    };
    return defs[line] || [];
  },

  // 取产品某字段值：顶层优先，其次 raw 字典
  getVal(p, col) {
    if (col.raw) {
      const raw = p.raw || {};
      if (col.key in raw) return raw[col.key];
    }
    const v = p[col.key];
    if (v != null && v !== '') return v;
    // 顶层没有再从 raw 兜底
    const raw = p.raw || {};
    return raw[col.key] ?? '';
  },

  renderWidgets() {
    const box = document.getElementById('sel-widgets');
    if (!box) return;
    const defs = this.getColDefs(this.state.line);
    if (!defs.length) {
      box.innerHTML = `<div class="muted">该产品线为族级数据，暂无可筛选参数。</div>`;
      return;
    }
    const { products } = window.VaultData;
    const prods = products.filter(p => p.line === this.state.line);

    let html = '';
    for (const col of defs) {
      let control = '';
      if (col.type === 'num') {
        control = `<input type="number" min="0" data-f="${col.key}" placeholder="不限" title="${esc(col.label)} ≥">
          <span class="muted">以上</span>`;
      } else if (col.type === 'select') {
        let options = col.options || [];
        if (!options.length) {
          options = [...new Set(prods.map(p => this.getVal(p, col)).filter(v => v !== '' && v != null))];
        }
        control = `<select data-f="${col.key}">
          <option value="">不限</option>
          ${options.map(o => `<option value="${esc(o)}">${esc(o)}</option>`).join('')}
        </select>`;
      } else {
        continue; // text 列不筛
      }
      html += `<div class="filter-row"><label>${esc(col.label)}</label>${control}</div>`;
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
    const defs = this.getColDefs(this.state.line);
    return prods.filter(p => {
      for (const [field, val] of Object.entries(filters)) {
        if (val === '') continue;
        const col = defs.find(d => d.key === field);
        const pv = this.getVal(p, col);
        if (col && col.type === 'num') {
          const threshold = parseFloat(val);
          let actual = (typeof pv === 'object' && pv !== null && 'min' in pv) ? pv.min : parseFloat(pv);
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
    const defs = this.getColDefs(this.state.line);

    // 族级数据：无参数列时显示定位/代表型号
    if (!defs.length) {
      let html = `<div class="result-count">${filtered.length} / ${prods.length} 条产品线记录</div>
        <table><thead><tr><th>产品线</th><th>代表型号</th><th>第一轮筛选参数</th><th>定位</th></tr></thead><tbody>`;
      for (const p of filtered) {
        html += `<tr class="rowlink" data-nav="product-detail" data-line="${esc(p.line)}" data-device="${esc(p.device)}">
          <td><strong>${esc(p.device)}</strong></td>
          <td>${esc((p.representative_models || []).join(', '))}</td>
          <td>${esc(p.first_filters || '')}</td>
          <td>${esc(p.positioning || '')}</td>
        </tr>`;
      }
      html += `</tbody></table>`;
      if (!filtered.length) html = `<div class="empty">无匹配记录，请放宽筛选条件</div>`;
      box.innerHTML = html;
      return;
    }

    // 有参数列：动态生成表头
    const headers = ['型号'].concat(defs.map(d => d.label));
    let html = `<div class="result-count">${filtered.length} / ${prods.length} 个型号</div>
      <table><thead><tr>${headers.map(h => `<th>${esc(h)}</th>`).join('')}
      </tr></thead><tbody>`;
    for (const p of filtered) {
      let cells = `<td><strong>${esc(p.device)}</strong></td>`;
      for (const col of defs) {
        cells += `<td>${esc(this.getVal(p, col))}</td>`;
      }
      html += `<tr class="rowlink" data-nav="product-detail" data-line="${esc(p.line)}" data-device="${esc(p.device)}">
        ${cells}</tr>`;
    }
    html += `</tbody></table>`;
    if (!filtered.length) html = `<div class="empty">无匹配型号，请放宽筛选条件</div>`;
    box.innerHTML = html;
  },
};
