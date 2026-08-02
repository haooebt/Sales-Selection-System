// data.js — 加载所有 JSON 数据并暴露到全局
window.VaultData = {};

async function loadAllData() {
  const files = {
    products: 'data/products.json',
    series: 'data/series.json',
    product_lines: 'data/product_lines.json',
    competitors: 'data/competitors.json',
    applications: 'data/applications.json',
    locator: 'data/locator.json',
    meta: 'data/meta.json',
  };
  const entries = await Promise.all(
    Object.entries(files).map(async ([key, path]) => {
      try {
        const resp = await fetch(path);
        if (!resp.ok) throw new Error(`${path} -> ${resp.status}`);
        return [key, await resp.json()];
      } catch (err) {
        console.error('加载失败:', path, err);
        return [key, []];
      }
    })
  );
  for (const [key, val] of entries) window.VaultData[key] = val;
  return window.VaultData;
}

// 工具函数
function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[c]);
}

function chips(arr, cls) {
  if (!arr || !arr.length) return '';
  return arr.map(x => `<span class="chip ${cls || ''}">${esc(x)}</span>`).join('');
}

function numFmt(v) {
  if (v == null) return '—';
  if (typeof v === 'object' && 'min' in v) return `${v.min}–${v.max}`;
  return String(v);
}

// 产品线显示名
const LINE_LABELS = {
  'MCU': 'MCU 电机控制',
  'ACDC-BP': 'ACDC BP 电源驱动',
  'ACDC-BPA': 'ACDC BPA 高压电源',
  'Gate Driver': 'Gate Driver 门极驱动',
  'IPM': 'IPM 智能功率模块',
  'DC-DC': 'DC-DC 电源',
  'LED Driver': 'LED Driver 驱动',
  'Power Device': 'Power Device 功率器件',
};
function lineLabel(line) {
  return LINE_LABELS[line] || line;
}
