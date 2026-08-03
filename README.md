# 技术销售选型工作系统

面向技术销售的选型知识库 + 在线选型网站。内部使用，由销售/FAE 协作维护。

**本仓库包含两部分：**

1. **知识库**（`00_` ~ `99_` 目录）：沉淀产品资料、竞品替代、应用方案、客户案件的原始资料库。
2. **选型网站**（`site/`）：把知识库数据编译成静态网站，供查询选型、参数筛选、竞品替代、AI 对话。

---

## 一、项目概述

### 核心目标

- 客户给竞品规格书 → 快速做替代选型。
- 客户给参数需求 → 快速筛出候选型号。
- 客户只给终端项目情况 → 从行业方案推导初步选型。
- 每次客户沟通沉淀为可复用知识。

### 网站能力（线上：https://sales-selection-system.vercel.app）

| 功能 | 说明 |
|---|---|
| 产品库 | 按产品线 → 系列 → 型号三级浏览，含参数详情 |
| 参数筛选 | 按主频/Flash/封装/内置外设等实时过滤型号，各产品线独立参数列 |
| 竞品替代 | 输入竞品型号，查推荐替代、等级、Pin 兼容、软件难度 |
| 应用场景 | 按终端场景查看 MCU + 驱动 + 电源组合方案 |
| AI 选型助手 | 自然语言对话，基于本库数据推荐型号 / 竞品替代（需 Vercel 后端） |

---

## 二、架构

```
知识库数据源（产品卡/Excel/竞品表/方案卡）
        │  build_data.py（Python，解析+归一化）
        ▼
site/data/*.json（编译产物，网站实际数据源）
        │
        ├── 静态页面 site/*.html / js/ / css/   →  GitHub Pages / Vercel 静态托管
        └── /api/chat  (Vercel 无服务器函数)  →  DeepSeek API（AI 对话）
```

**关键点**：

- 网站显示的是 `site/data/*.json`，由 `build_data.py` 从知识库编译生成。
- **修改知识库源文件不会自动反映到网站**，需运行更新脚本重新编译（见下文）。
- AI 对话的 `/api/chat` 是 Vercel 函数，密钥存 Vercel 环境变量 `DEEPSEEK_API_KEY`，前端不接触密钥。

---

## 三、目录结构

### 知识库（根目录 `00_` ~ `99_`）

| 目录 | 用途 |
|---|---|
| `00_Workbench` | 临时工作台，待处理资料/未归档需求 |
| `01_Customer Cases` | 客户选型案件（含敏感信息，**不进网站**） |
| `02_Product Knowledge Base` | 产品资料库，按产品线/系列管理 |
| `03_Solutions and Applications` | 解决方案和行业应用场景库 |
| `04_Competitor and Replacement` | 竞品资料和替代表 |
| `05_Selection Rules and Tools` | 选型规则、评分方法、工作流 |
| `06_Output Templates` | 客户输出模板 |
| `07_Case Reviews` | 项目复盘（含敏感信息，**不进网站**） |
| `99_Archive` | 不再活跃的旧资料 |

### 选型网站（`site/`）

| 路径 | 用途 |
|---|---|
| `index.html` | 入口页 |
| `css/style.css` | 全站样式 |
| `js/app.js` | 路由 + 首页 + 全局搜索 |
| `js/products.js` | 产品库视图 |
| `js/selection.js` | 参数筛选视图 |
| `js/competitors.js` | 竞品替代视图 |
| `js/applications.js` | 应用场景视图 |
| `js/chat.js` | AI 对话视图 |
| `js/data.js` | 数据加载 + 工具函数 |
| `data/*.json` | 编译产物（**不要手改**，用脚本重建） |
| `scripts/build_data.py` | 主数据管道 |
| `scripts/table_extract.py` | MD/HTML 表解析 |
| `scripts/field_map.py` | 字段别名/单位归一化 |
| `api/chat.js` | Vercel 无服务器函数（AI 对话代理） |
| `vercel.json` | Vercel 配置 |
| `site/README.md` | 网站目录说明 |

---

## 四、本地运行

### 1. 数据管道（重建 JSON）

需要 Python 3.9+（本项目用 `py -3`，注意 `python` 是 WindowsApps 占位符不要用），需安装 `openpyxl`：

```bash
pip install openpyxl
py -3 site/scripts/build_data.py
```

产出 `site/data/*.json`（products 177 / series 13 / product_lines 12 / competitors 8 / applications 19 / locator / meta）。

### 2. 本地预览网站

```bash
py -3 -m http.server 8000 -d site
# 访问 http://127.0.0.1:8000/（file:// 有 CORS 限制）
```

> AI 对话在本地无法工作（`/api/chat` 需要 Vercel 后端），其余功能均可预览。

### 3. 一键更新数据（推荐）

```bash
bash update_site_data.sh            # 重建 + 看差异（不推送）
bash update_site_data.sh --push     # 重建 + 提交 + 推送（触发 Vercel 重新部署）
```

日常改完数据源后跑这个脚本即可，Windows 下用 Git Bash 运行。

> **安全红线**：本脚本只会提交 `site/data/`，**绝不提交** `01_Customer Cases/`、`07_Case Reviews/`、`00_Workbench/`、`99_Archive/` 及任何含客户名单/报价/内部备注的 Excel 或复盘文档。检测到敏感目录有改动时 `--push` 会中止，防止客户数据泄露到公开仓库。

---

## 五、数据更新流程

### 网站数据如何更新

1. 修改知识库源文件（产品卡 `00_Product Card.md`、Excel 选型表 `.xlsx`、竞品替代表 `Replacement Tables/*.md`、Solution Map 等）。
2. 运行 `build_data.py` 或一键脚本重建 JSON。
3. 检查 `site/data/meta.json` 确认数据量（产品数、竞品数、gaps/conflicts）。
4. 提交推送 → Vercel 自动重新部署 → 网站更新。

### 新增产品

在 `02_Product Knowledge Base/` 对应产品线目录：
- 维护 `00_Product Card.md`（一句话定位、适合/不适合、型号矩阵）
- 维护选型表 `*.xlsx`（型号级参数：主频/Flash/封装等）

### 新增竞品替代

在 `04_Competitor and Replacement/Replacement Tables/` 新建：
`品牌_竞品型号_Replacement Summary.md`，包含替代等级（A/B/C/D）、Pin 兼容、软件难度、风险点。

### 新增应用场景

在 `03_Solutions and Applications/` 维护 Solution Map，场景→MCU/驱动/电源组合。

### 隐私红线（重要）

`build_data.py` 开头断言**不读取** `01_Customer Cases`、`07_Case Reviews`、`99_Archive`、`00_Workbench`——这些目录含客户敏感信息，**绝不会进入公开网站**。新增数据源时不要改变这个行为。

---

## 六、AI 选型助手

- 前端 `site/js/chat.js`：把 `site/data/*.json` 编译成紧凑摘要注入 system prompt，AI 基于真实数据回答。
- 后端 `site/api/chat.js`：Vercel 无服务器函数，转发到 DeepSeek API。
- **部署配置**（Vercel 项目）：
  - Root Directory：`site`
  - 环境变量：`DEEPSEEK_API_KEY`（在 https://platform.deepseek.com 获取）
- AI 输出为 markdown，前端已内置轻量渲染器（`mdToHtml`），支持表格/列表/代码块/粗体。

---

## 七、部署

### Vercel（主站，含 AI 功能）

1. [vercel.com](https://vercel.com) 导入本仓库。
2. Root Directory 设 `site`。
3. 环境变量加 `DEEPSEEK_API_KEY`。
4. 之后每次 push 到 `main` 自动重新部署。

### GitHub Pages（旧版备份，无 AI）

- 仓库 Settings → Pages → 用 GitHub Actions 部署 `site/` 目录（workflow 在 `.github/workflows/pages.yml`）。
- 线上：https://haooebt.github.io/Sales-Selection-System/

> GitHub Pages 是纯静态，无法运行 `/api/chat`，所以 AI 对话只在 Vercel 版可用。

---

## 八、协作规范

- 优先英文文件名，中文写内容（保留器件型号/封装等英文术语）。
- 原始资料（PDF/PPT/Excel/图片）与结构化资料（产品卡/参数矩阵/替代表）分开存放。
- 客户敏感信息只进 `01_Customer Cases` / `07_Case Reviews`，不进公共产品卡/方案卡。
- 改数据 → 跑 `update_site_data.sh` 验证 → 再提交推送。
- **每次提交推送前，先在本文件「十、更新日志」追加本次改动**，让协作者能看到什么时间改了什么。
- 提交信息用英文，简短说明改动内容。
- 不确定的信息标注「待确认」。

---

## 九、常见问题

**Q: 改了产品卡，网站怎么没变？**
A: 需运行 `bash update_site_data.sh --push` 重新编译并推送，Vercel 才会重新部署。

**Q: 为什么 AI 对话在某些环境打不开？**
A: vercel.app 域名大陆直连可能不稳定，需代理；或后续配置自定义域名/国内 CDN。

**Q: site/data/*.json 能手改吗？**
A: 不要手改，一律用 `build_data.py` 重建，否则下次构建会被覆盖。

---

## 十、更新日志

> 记录本仓库的主要改动，方便协作同事了解进展。最新在上。

### 2026-08-03（协作规则）

- **提交前更新日志规则**：协作规范新增要求——每次提交推送前，先在本文件更新日志追加本次改动，让协作者能看到什么时间改了什么。

### 2026-08-02（选型网站开发 + 部署上线）

- **UI 重构：红白主题**：白色画布为主，品牌红用于强调（导航激活态、发送按钮、标题、表格强调色），全站风格统一。
- **UI 重构：AI 优先布局**：默认直入 AI 对话；重构为三大板块——AI 对话（主打）+ 产品库 + 应用方案套料；移除参数筛选/竞品替代独立页（数据保留，供 AI 对话调用）。
- **EdgeOne Pages 边缘函数**：新增 `site/functions/api/chat.js`，准备迁移到腾讯云 EdgeOne Pages 作国内主站。
- **已量产应用数据上线**：43 个产品带脱敏成交案例，提升选型参考价值。
- **AI 数据全字段注入**：把外设/场景/概述全量注入 system prompt，提升选型精度。
- **一键更新脚本加固**：`update_site_data.sh` 设敏感目录防线，检测到客户数据改动时中止 `--push`。
- **一键更新脚本**：`bash update_site_data.sh [--push]` 一步完成重建数据 + 提交推送。
- **AI 选型助手上线**：DeepSeek 代理 + markdown 渲染（表格/列表/代码块），基于本库数据推荐。
- **参数筛选列修复**：各产品线独立参数列，按产品线动态生成。
- **族级记录显示修复**：族级型号改为卡片展示代表型号。
- **静态网站 + GitHub Pages**：数据管道编译 177 产品 / 13 系列 / 8 竞品 / 19 场景；5 视图 + 首页 + 搜索。
- **README 重写**：面向协作者补充架构、数据管道、部署、AI 对话说明。

### 2026-08-01（项目初始化）

- **初始提交**：技术销售选型工作系统知识库结构建立（产品知识库、竞品替代、应用方案、选型规则等）。
