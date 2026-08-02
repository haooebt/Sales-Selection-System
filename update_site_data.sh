#!/usr/bin/env bash
# ============================================================
# 一键更新网站数据（不自动推送）
#
# 用法：
#   bash update_site_data.sh           # 重建数据 + 检查差异（不推送）
#   bash update_site_data.sh --push    # 重建数据 + 提交并推送（立即上线）
#
# 说明：
#   - 修改产品卡/Excel/竞品表等数据源后运行此脚本
#   - 默认只重建 JSON 并展示差异，由你确认后手动提交
#   - 加 --push 才自动 commit + push（触发 Vercel 重新部署）
# ============================================================
set -e
cd "$(dirname "$0")"
echo "==> 工作目录: $(pwd)"

# 1. 检查是否有未提交改动（避免把半成品数据一起提交）
if [ "$1" != "--push" ]; then
  MOD=$(git status --porcelain | grep -v '^??' || true)
  if [ -n "$MOD" ]; then
    echo "!! 有未提交的改动（非本次数据更新）："
    echo "$MOD" | head -20
    echo "!! 请先处理这些改动再更新数据，或改用 --push 自行确认。"
    exit 1
  fi
fi

# 2. 重建数据
echo "==> 运行 build_data.py 重建数据..."
if ! py -3 site/scripts/build_data.py 2>&1 | tee /tmp/build_data.log; then
  echo "!! 构建失败，见上方日志"
  exit 1
fi

# 3. 检查 meta.json 数据量
py -3 -c "
import json
try:
    m = json.load(open('site/data/meta.json', encoding='utf-8'))
    print('==> meta.json: 产品 {} 个, 竞品 {} 条'.format(
        m.get('product_count', '?'), m.get('competitor_count', '?')))
    if m.get('gaps'): print('    gaps: {}'.format(len(m['gaps'])))
    if m.get('conflicts'): print('    conflicts: {}'.format(len(m['conflicts'])))
except Exception as e:
    print('==> meta.json 读取失败:', e)
"

# 4. 展示数据差异
echo "==> site/data 差异："
git status --short site/data/
echo "--- diffstat ---"
git diff --stat site/data/ | tail -10

# 5. 提交（仅 --push）
if [ "$1" == "--push" ]; then
  echo "==> 提交并推送..."
  git add site/data/
  git commit -m "Update product data via build_data.py" || echo "!! 无可提交改动"
  git push origin main
  echo "==> 已推送，Vercel 将自动重新部署"
else
  echo ""
  echo "======================================================"
  echo "数据已重建。确认无误后可提交并推送："
  echo "  git add site/data/"
  echo "  git commit -m \"Update product data\""
  echo "  git push origin main"
  echo "（或直接运行 bash update_site_data.sh --push 一步完成）"
  echo "======================================================"
fi
