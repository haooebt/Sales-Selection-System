// products.js — 产品库视图（产品线 → 系列 → 型号三级 + 详情）
window.ProductsView = {
  // ---------- 产品线总览 ----------
  renderList() {
    const { products } = window.VaultData;
    const lines = {};
    for (const p of products) {
      (lines[p.line] = lines[p.line] || []).push(p);
    }
    let html = `<div class="light-zone">
      <h2 class="view-title">产品库</h2>
      <div class="view-sub">按产品线浏览晶丰明源全产品系列与型号参数</div>
      <div class="searchbar">
        <input type="text" id="prod-search" placeholder="搜索型号，如 LKS32MC031、BP85…">
      </div>
      <div class="line-grid">`;
    for (const [line, prods] of Object.entries(lines)) {
      html += `<a class="line-tile" href="#/products/${encodeURIComponent(line)}">
        <div class="accent"></div>
        <h3>${esc(lineLabel(line))}</h3>
        <div class="count">${prods.length} 条记录</div>
      </a>`;
    }
    html += `</div></div>`;
    return html;
  },

  afterRenderList() {
    const input = document.getElementById('prod-search');
    if (!input) return;
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if (q.length < 2) return;
      const hits = (window.VaultData.products || [])
        .filter(p => p.device && p.device.toLowerCase().includes(q))
        .slice(0, 8);
      if (!hits.length) return;
      const targets = hits.map(p =>
        `#/products-detail/${encodeURIComponent(p.line)}/${encodeURIComponent(p.device)}`);
      const modal = document.createElement('div');
      modal.className = 'search-pop';
      modal.innerHTML = hits.map((p, i) =>
        `<div class="sr-item" data-href="${esc(targets[i])}">
          <strong>${esc(p.device)}</strong> <small>${esc(lineLabel(p.line))}</small>
        </div>`).join('');
      const wrap = input.parentElement;
      wrap.appendChild(modal);
      modal.querySelectorAll('.sr-item').forEach(el =>
        el.addEventListener('click', () => {
          location.hash = el.dataset.href;
          input.value = '';
          modal.remove();
        }));
      document.addEventListener('click', function off(e) {
        if (!wrap.contains(e.target)) { modal.remove(); document.removeEventListener('click', off); }
      });
    });
  },

  // ---------- 产品线 → 系列/型号 ----------
  renderLine(line) {
    const { products, series } = window.VaultData;
    const prods = products.filter(p => p.line === line);
    const families = prods.filter(p => p.pending_param);
    const real = prods.filter(p => !p.pending_param);
    let html = `<div class="light-zone">
      <a href="#/products" class="back-link">← 产品库</a>
      <h2 class="view-title">${esc(lineLabel(line))}</h2>
      <div class="view-sub">${prods.length} 条记录${families.length ? `（含 ${families.length} 个产品族，型号级参数待补充）` : ''}</div>`;

    // 族级记录：族卡片展示代表型号
    if (families.length) {
      for (const p of families) {
        const card = p.representative_models || [];
        html += `<div class="card family-card rowlink" data-nav="product-detail" data-line="${esc(p.line)}" data-device="${esc(p.device)}">
          <div class="family-head">
            <h3>${esc(p.device)}</h3>
            ${p.positioning ? `<span class="muted">${esc(p.positioning)}</span>` : ''}
          </div>
          ${card.length ? `<div class="family-models"><label>代表型号</label>${chips(card, 'light-chip')}</div>` : ''}
          ${p.first_filters ? `<div class="muted" style="margin-top:6px">第一轮筛选：${esc(p.first_filters)}</div>` : ''}
        </div>`;
      }
    }

    // 型号级记录：按系列分组表格
    if (real.length) {
      const seriesMap = {};
      for (const p of real) {
        (seriesMap[p.series] = seriesMap[p.series] || []).push(p);
      }
      for (const [sname, sprods] of Object.entries(seriesMap)) {
        const sm = (series || []).find(x => x.series === sname && x.line === line);
        html += `<div class="card">
          <h3>${esc(sname)}</h3>
          ${sm && sm.positioning ? `<div class="muted" style="margin-bottom:8px">${esc(sm.positioning)}</div>` : ''}
          <table><thead><tr>
            <th>型号</th><th>封装</th><th>主频</th><th>Flash</th><th>RAM</th><th>关键参数</th>
          </tr></thead><tbody>`;
        for (const p of sprods) {
          html += `<tr class="rowlink" data-nav="product-detail" data-line="${esc(p.line)}" data-device="${esc(p.device)}">
            <td><strong>${esc(p.device)}</strong></td>
            <td>${esc(p.package || p.positioning || '')}</td>
            <td class="num">${numFmt(p.freq_mhz)}</td>
            <td class="num">${numFmt(p.flash_kb)}</td>
            <td class="num">${numFmt(p.ram_kb)}</td>
            <td>${esc(summarize(p))}</td>
          </tr>`;
        }
        html += `</tbody></table></div>`;
      }
    }
    if (!prods.length) {
      html += `<div class="empty">该产品线暂无型号数据</div>`;
    }
    html += `</div>`;
    return html;
  },

  // ---------- 型号详情 ----------
  renderDetail(line, device) {
    const { products } = window.VaultData;
    const p = products.find(x => x.line === line && x.device === device);
    if (!p) return `<div class="empty">未找到型号 ${esc(device)}</div>`;
    const isFamily = p.pending_param;

    let html = `<div class="light-zone">
      <a href="#/products/${encodeURIComponent(p.line)}" class="back-link">← ${esc(lineLabel(p.line))}</a>`;

    if (p.data_quality && p.data_quality.conflicts && p.data_quality.conflicts.length) {
      html += `<div class="banner-warn">⚠️ 数据源存在冲突，以最新 datasheet 为准。</div>`;
    }
    if (isFamily) {
      html += `<div class="banner-warn">产品族级记录：型号级参数待补充，以下为代表型号清单。</div>`;
    }

    html += `<h2 class="view-title">${esc(p.device)}</h2>
      <div class="view-sub">${esc(lineLabel(p.line))} · ${esc(p.series)}</div>`;

    if (p.positioning) {
      html += `<div class="card"><h3>一句话定位</h3><p>${esc(p.positioning)}</p></div>`;
    }

    // 代表型号（族级）
    if (p.representative_models && p.representative_models.length) {
      html += `<div class="card"><h3>代表型号</h3>${chips(p.representative_models, 'light-chip')}</div>`;
    }
    if (p.first_filters) {
      html += `<div class="card"><h3>第一轮筛选参数</h3><p class="muted">${esc(p.first_filters)}</p></div>`;
    }

    html += `<div class="detail-grid">
      <div class="card"><h3>核心参数</h3><dl class="kv">`;
    const params = [
      ['主频', p.freq_mhz], ['Flash', p.flash_kb], ['RAM', p.ram_kb],
      ['ADC 通道', p.adc_channels], ['DAC', p.dac], ['Comp', p.comp], ['OPA', p.opa],
      ['SPI', p.spi], ['I2C', p.i2c], ['UART', p.uart], ['CAN', p.can],
      ['Gate Driver', p.gate_driver], ['耐压', p.voltage], ['电流', p.current],
      ['导通电阻', p.rdson], ['供电', p.supply], ['封装', p.package],
      ['工作温度', p.temperature],
    ];
    const raw = (p.raw && typeof p.raw === 'object') ? p.raw : {};
    const seen = new Set();
    const rawPairs = Object.entries(raw).filter(([k, v]) => !['型号', '解析结果', '字符数'].includes(k) && v != null && v !== '');
    let shown = 0;
    for (const [k, v] of params) {
      if (v != null && v !== '') {
        html += `<dt>${k}</dt><dd>${esc(numFmt(v))}</dd>`;
        seen.add(k); shown++;
      }
    }
    for (const [k, v] of rawPairs) {
      if (shown >= 20) break;
      if (seen.has(k)) continue;
      seen.add(k);
      html += `<dt>${esc(k)}</dt><dd>${esc(numFmt(v))}</dd>`;
      shown++;
    }
    if (!shown) html += `<dt>—</dt><dd>暂无详细参数</dd>`;
    html += `</dl></div>`;

    html += `<div class="card"><h3>适合场景</h3>${chips(p.suitable, 'light-chip') || '<p class="muted">暂无</p>'}</div>`;
    html += `<div class="card"><h3>已量产应用</h3>${chips(p.applications, 'light-chip') || '<p class="muted">暂无</p>'}</div>`;
    html += `<div class="card"><h3>不适合场景</h3>${chips(p.unsuitable, 'light-chip') || '<p class="muted">暂无</p>'}</div>`;
    html += `</div>`;

    if (p.overview) {
      html += `<div class="card"><h3>产品概述</h3><p class="muted">${esc(p.overview)}</p></div>`;
    }
    if (p.source) {
      html += `<div class="card"><h3>数据来源</h3><p class="muted">${esc(p.source)}</p></div>`;
    }
    html += `</div>`;
    return html;
  },
};

function summarize(p) {
  const parts = [];
  if (p.gate_driver) parts.push(`GD:${p.gate_driver}`);
  if (p.package) parts.push(p.package);
  if (p.current) parts.push(p.current);
  if (p.applications && p.applications.length) parts.push(`应用:${p.applications[0]}`);
  if (p.positioning) parts.push(p.positioning.slice(0, 24));
  return parts.slice(0, 3).join(' · ') || '—';
}
