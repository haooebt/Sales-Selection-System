> **状态更新 (2026-07-28):** 通过 MinerU API 已全部解析。BP系列24个→22个Markdown，BPA系列28个→26个Markdown。
> 原始PDF已移至各系列目录下的 `01_Raw_Materials/datasheet/`。
> 解析结果位于 `03_Parsed_Markdown/`。
# ACDC 资料入库笔记

当前 ACDC 资料主要按 `BP` 和 `BPA` 两个目录存放，文件以中文 datasheet PDF 为主，并包含少量 BP1808 方案包 rar。

## 1. 当前资料分布

| 子目录 | 资料数量/类型 | 初步说明 |
|---|---|---|
| BP | 约 27 个 PDF + 3 个 BP1808 rar 方案包 | BP 系列 ACDC/电源相关产品资料 |
| BPA | 约 28 个 PDF | BPA 系列 ACDC/电源相关产品资料 |

## 2. 已识别的典型资料

BP 目录包含：

- BP1371
- BP1638CJ
- BP1808A
- BP2306XK
- BP2522X
- BP2571X
- BP5116DJC / BP5116DJ
- BP5712E
- BP5936D
- BP85221AL / BP85223AL / BP85226D / BP8522D / BP85256D
- BP85928D / BP85956D
- BP86213D / BP86220D
- BPS1418PD

BPA 目录包含：

- BPA8504D / BPA8505D / BPA8506D
- BPA85906D / BPA85963DH / BPA85963DM / BPA85968D
- BPA86015G / BPA8604D / BPA8604P
- BPA8615D / BPA8616P/PD / BPA8618D/G/P/PD / BPA8619P
- BPA8620P/PD
- BPA86525PC / BPA86526PC / BPA86528D
- BPS1418PD

## 3. 后续结构化建议

ACDC 资料不宜只按型号堆放，建议后续建立 `ACDC Parameter Matrix.xlsx`，字段至少包括：

| 字段 | 用途 |
|---|---|
| Device | 型号 |
| Family | BP/BPA/BPS |
| Topology | Buck/Boost/Buck-Boost/Flyback/其他 |
| Input Voltage | 输入电压范围 |
| Output Voltage/Current | 输出能力 |
| Integrated MOS | 是否内置 MOS |
| Package | 封装 |
| Typical Application | 典型应用 |
| Key Features | 核心特性 |
| Protection | 保护功能 |
| Source File | 资料来源 |

## 4. 待处理

- 逐份 PDF 提取首页特性和应用场景。
- 解压并整理 BP1808 方案包，确认属于应用方案还是参考设计。
- 建立 BP/BPA 系列差异卡。

## 5. 家电方案资料补充摘要

资料来源：`03_Solutions and Applications/Home Appliance/大家电产品介绍-Q2Y26.pptx`、`晶丰明源roadmap-26Q1 .pptx`、`凌鸥创芯产品介绍(大家电应用)-Mar V2.3.pdf`。

### BPA 家电辅助电源定位

| 类别 | 代表型号 | 初步定位 |
|---|---|---|
| Buck/Buck-Boost | BPA8504D、BPA8505D/P、BPA8506D、BPA85906D、BPA85963DH/M、BPA85968D/P、BPA86015G | 家电电控、变频板、电机辅助电源；重点看输出电流、固定/可调输出、是否 700V/800V |
| 隔离 SSR | BPA8616D/PD、BPA8618D/PD、BPA8619P、BPA8620PD | 12W-25W，家电、工控、仪器仪表辅助电源 |
| 800V 工业级反激 | BPA86525PC、BPA86526P/PC、BPA86528D | 空调、冰箱、洗衣机、微波炉、洗碗机、热水器等中高功率辅助电源 |
| 微波炉电源 | BPA8604P/PE/D、BPA86533G、BPA86536GW | LNK/TNY 系列 P2P 替代线索 |

### 关键型号线索

- `BPA8504D`: SOP7，外部连续可调，约 200mA，I_limit 280mA，Rds-on 16Ω。
- `BPA8505D/P`: SOP7/DIP7，外部连续可调，约 300mA，I_limit 440mA，Rds-on 8.5Ω。
- `BPA8506D`: SOP7，外部连续可调，约 400mA，I_limit 640/700mA，Rds-on 6Ω。
- `BPA85906D`: SOP8，700V/6Ω，空调外机电源；Buck 15V/400mA，抽头 Buck 15V/600mA。
- `BPA85963DH/M`: SOP7，800V/18Ω，固定 15V，约 200mA，冰箱压缩机板电源。
- `BPA85968D/P`: SOP8/DIP7，650V，固定 15V，约 400mA，电机辅助电源。
- `BPA86015G`: SMD-7，800V/4Ω，非隔离反激，15V/1.5A，约 22.5W，FB 直馈省光耦和 431。
- `BPA8616D/PD`: 12W，12V/0.7A 典型，对标 TNY276 类。
- `BPA8618D/PD`: 16W/18W，12V/1A 典型，对标 TNY278 类。
- `BPA8620PD`: 25W，12V/1.5A 典型，对标 TNY280 类。
- `BPA86526P`: DIP7，800V，P2P 替换 STR6A161X、STRA6061XX、SDH8655B、PN8733/PN6623H 方向。
- `BPA86528D`: ESOP10，800V，宽压开放式约 52W，适合空调柜机、空调内机、微波炉、洗碗机、热水器电源。

### 使用提醒

- 家电 ACDC 竞品替代时，必须核对拓扑、封装/pinout、MOS BV、Rds-on、限流点、保护方式、VCC/FB 耐压、待机功耗和 EMI。
- 资料中出现的 P2P 线索只能作为初筛，正式对外前需要回到 datasheet 和 pinout 逐项确认。
- 应用级组合见 `03_Solutions and Applications/Home Appliance/Home Appliance Solution Map.md`。

## 6. 2025Q4 英文选型手册补充

资料来源：`../2025Q4晶丰明源选型手册EN (1).pdf`。

### 手册中的 AC/DC 分类

| 分类 | 代表型号/系列 | 应用线索 |
|---|---|---|
| Non-isolated Power Supply | BPA8504D、BPA8505D/P、BPA8506D、BP85221AL、BP85223AL、BP85323AL、BP8523D、BP8522D、BP85224A/D、BP85226D、BP85928D、BP85256D、BP85956D/P、BP85957DL、BP85958DL/P/D、BPA85968D、BP85976P、BP85977D、BP85924DA、BP85221SL | 家电、待机、小功率 Buck/Buck-Boost |
| SSR Feedback by Opto-isolator | BPA8604D/P、BPA8616D/PD、BPA8618D/PD/G、BPA8619P、BPA8620PD、BPA86525PC/G、BPA86516P、BPA86526PC/P、BPA86528D | Home Appliances，6W-52W 级 |
| SSR - No Optocoupler | BPA86015G | Home Appliances，21W，800V/4Ω |
| SSR Feedback by Magnetic Coupling | BP87625、BP87526、BP87526H、BP433BD、BP62620/E、BP818 等 | PD/Charger/Adapter 和磁耦反馈 |
| SR Synchronous Rectifier | BP6211B/BS/C/CS/MS、BP62110/10S、S7302/7303/7304、BP6221F | PD/Charger/Adapter，同步整流 |
| PSR / Home Appliance Power | BP86113D、BP86213D、BP86226P/E、BP83223 | Home Appliance / 充电器适配器相关 |

### 使用提醒

- 2025Q4 手册适合作为型号范围和初筛来源，但参数表较密，竞品替代时仍需回到具体 datasheet。
- ACDC 竞品如果来自家电场景，应同时读取 `../03_Solutions and Applications/Home Appliance/Home Appliance Solution Map.md`。


---
### 产品卡索引

- [BP系列产品卡](BP/00_Product Card.md): 覆盖LED驱动、开关电源、非隔离恒压三大子类
- [BPA系列产品卡](BPA/00_Product Card.md): 覆盖反激PSR电源芯片全系列
