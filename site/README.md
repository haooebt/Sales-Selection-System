# 技术销售选型系统 — 静态网站

将「技术销售选型工作系统」封装为静态网站，供客户/同事在线选型。

## 功能

- **产品库**：按产品线 → 系列 → 型号浏览，查看参数详情
- **参数筛选**：按主频/Flash/RAM/封装等参数实时筛出候选型号
- **竞品替代**：输入竞品型号，查看推荐替代与风险等级
- **应用场景**：按终端场景查看 MCU + 驱动 + 电源组合
- **AI 选型助手**：自然语言对话，基于本库数据推荐型号/竞品替代（需 Vercel 后端）

## 技术栈

- 原生 HTML/CSS/JS，零框架零 CDN，自包含
- 数据由 Python 脚本从选型系统数据源生成 JSON
- AI 对话：Vercel 无服务器函数 `api/chat.js` 代理 DeepSeek API（密钥存 Vercel 环境变量）

## 目录结构

```
site/
├── index.html            # 入口页
├── css/style.css         # 样式
├── js/                   # 前端脚本（5 视图 + AI 对话）
├── api/chat.js           # Vercel 无服务器函数（AI 代理）
├── data/*.json           # 构建产物（提交，便于离线/回退）
├── scripts/              # 数据构建脚本（Python）
└── vercel.json           # Vercel 配置
```

## 重新生成数据

选型系统数据更新后，重新构建网站 JSON：

```bash
# 在选型系统仓库根目录
py -3 site/scripts/build_data.py
```

产物写入 `site/data/*.json`。检查 `site/data/meta.json` 的数据质量报告（各线型号数、gaps/conflicts）。

## 本地预览

```bash
# file:// 打开有 CORS 限制，必须用 http server
py -3 -m http.server 8000 -d site
```

浏览器访问 http://127.0.0.1:8000/

## 发布（Vercel 主站 / GitHub Pages 备份）

**Vercel（主站，含 AI 对话）**：
1. [vercel.com](https://vercel.com) 导入本仓库。
2. Root Directory 设 `site`。
3. 环境变量加 `DEEPSEEK_API_KEY`（DeepSeek API key）。
4. push 到 `main` 自动重新部署。

访问：https://sales-selection-system.vercel.app

**GitHub Pages（备份，无 AI）**：
1. 在选型系统仓库：`git add site/ .github/` → commit → push origin main
2. GitHub 仓库 Settings → Pages → Source 设为 **GitHub Actions**
3. `.github/workflows/pages.yml` 会自动构建并发布

访问：https://haooebt.github.io/Sales-Selection-System/

> GitHub Pages 纯静态无法运行 `api/chat.js`，AI 对话只在 Vercel 版可用。

## 隐私保护

以下目录含客户/内部敏感信息，**绝不进入网站数据**：

- `01_Customer Cases/`、`07_Case Reviews/`、`99_Archive/`、`00_Workbench/`

`build_data.py` 在开头断言不读取这些目录。

## 数据源

| 数据 | 来源（只读） |
| --- | --- |
| 产品型号 | 产品卡 `00_Product Card.md` + Excel 选型表 + 解析 datasheet |
| 系列定位 | 各系列产品卡 |
| 竞品替代 | `04_Competitor and Replacement/Replacement Tables/` |
| 应用场景 | `03_Solutions and Applications/Home Appliance/Home Appliance Solution Map.md` |
| 竞品/场景定位 | `02_Product Knowledge Base/Product Quick Locator.md` |
