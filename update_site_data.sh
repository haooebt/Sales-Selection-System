#!/usr/bin/env bash
# ============================================================
# 一键更新网站数据（安全版：绝不提交敏感目录）
#
# 用法：
#   bash update_site_data.sh           # 重建数据 + 检查差异（不推送）
#   bash update_site_data.sh --push    # 重建数据 + 提交并推送（立即上线）
#
# 安全红线（本脚本绝不 add/commit 以下内容）：
#   01_Customer Cases/  07_Case Reviews/  00_Workbench/  99_Archive/
#   以及任何含客户名单/报价/内部备注的 Excel、复盘文档
# ============================================================
set -e
cd "$(dirname "$0")"
echo "==> 工作目录: $(pwd)"

# 敏感目录（隐私红线，绝不提交）
SENSITIVE_DIRS=("01_Customer Cases" "07_Case Reviews" "00_Workbench" "99_Archive")

# 1. 敏感目录安全检查
echo "==> 检查敏感目录是否有改动..."
SENS_MOD=$(git status --porcelain "${SENSITIVE_DIRS[@]}" 2>/dev/null || true)
if [ -n "$SENS_MOD" ]; then
  echo "!! 检测到敏感目录有改动（含客户数据，不会提交）："
  echo "$SENS_MOD" | head -10
  echo ""
  if [ "$1" == "--push" ]; then
    echo "!! 有敏感内容，已中止 --push。请先处理（如移到 vault 本地，不 push）。"
    exit 1
  fi
  echo "（提示：这些敏感改动将保持本地，不会进入公开仓库）"
  echo ""
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

# 5. 提交（仅 --push，只 add site/data/ + site/functions/，绝不碰敏感目录）
#    注：site/functions/ 是 EdgeOne Pages 边缘函数（AI 代理），改动需随仓库推送，否则 EdgeOne 不会更新函数
if [ "$1" == "--push" ]; then
  echo "==> 提交并推送 site/data/ 与 site/functions/ ..."
  git add site/data/ site/functions/
  git commit -m "Update site data & functions" || echo "!! 无可提交改动"
  git push origin main
  echo "==> 已推送，EdgeOne / Vercel 将自动重新部署"
else
  echo ""
  echo "======================================================"
  echo "数据已重建。确认无误后可提交并推送："
  echo "  git add site/data/ site/functions/"
  echo "  git commit -m \"Update site data & functions\""
  echo "  git push origin main"
  echo "（或直接运行 bash update_site_data.sh --push 一步完成）"
  echo "======================================================"
fi
