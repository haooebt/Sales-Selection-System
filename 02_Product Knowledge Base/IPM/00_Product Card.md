
## 已解析datasheet（MinerU）

通过MinerU API解析的datasheet结构文本位于 `03_Parsed_Markdown/`，共7个型号，可用于补全和验证产品卡中的电参数。

| 型号 | 解析结果 | 字符数 |
|---|---:|---:|
| LKS1D3007D | `03_Parsed_Markdown/LKS1D3007D_CN_DS_Rev.1.1.md` | ~18K |
| LKS1M23007 | `03_Parsed_Markdown/LKS1M23007_CN_DS_Rev.0.9.md` | ~24K |
| LKS1M25005 | `03_Parsed_Markdown/LKS1M25005_CN_DS_Rev.1.0.md` | ~24K |
| LKS1M25007 | `03_Parsed_Markdown/LKS1M25007_CN_DS_Rev.0.1.md` | ~24K |
| LKS1M36003 | `03_Parsed_Markdown/LKS1M36003_CN_DS_Rev.0.1.md` | ~23K |
| LKS1M36003产品介绍 | `03_Parsed_Markdown/LKS1M36003产品介绍.md` | ~9K |
| LKS1S57008 | `03_Parsed_Markdown/LKS1S57008_CN_DS_Rev.0.11.md` | ~28K |

# IPM 产品卡

资料来源：`IPM.xlsx` 和当前 IPM 目录 PDF。

## 1. 一句话定位

IPM 产品线面向电机驱动功率级集成，当前资料覆盖 300 V 和 500 V、3 A 至 7 A 等级，全部表内状态为“主推”。

## 2. 型号矩阵

| 型号 | 耐压 | 电流能力 | 导通电阻 | 封装 | 集成自举 | 温度检测 | 保护功能 | 状态 |
|---|---|---|---|---|---|---|---|---|
| LKS1D3007D | 300V | 7A | 0.75Ω | ESOP13 | YES | NO | 无 | 主推 |
| LKS1D5003D | 500V | 3A | 3.3Ω | ESOP13 | YES | NO | 无 | 主推 |
| LKS1D5004D | 500V | 4A | 2.4Ω | ESOP13 | YES | NO | 无 | 主推 |
| LKS1D5005D | 500V | 5A | 1.4Ω | ESOP13 | YES | NO | 无 | 主推 |
| LKS1D5005DT | 500V | 5A | 1.4Ω | ESOP13 | YES | YES | VTS | 主推 |
| LKS1D5007DT | 500V | 7A | 1.0Ω | ESOP13 | YES | YES | VTS | 主推 |
| LKS1M23006 | 300V | 6A | 1.2Ω | EHSOP12 | YES | YES | OCP,UVLO,OTP,VTS,FO,VBUS | 主推 |
| LKS1M23007 | 300V | 7A | 0.7Ω | EHSOP12 | YES | YES | OCP,UVLO,OTP,VTS,FO,VBUS | 主推 |
| LKS1M25003L | 500V | 3A | 3.4Ω | EHSOP12 | YES | YES | OCP,UVLO,OTP,VTS,FO,VBUS | 主推 |
| LKS1M25003 | 500V | 3A | 3.1Ω | EHSOP12 | YES | YES | OCP,UVLO,OTP,VTS,FO,VBUS | 主推 |
| LKS1M25004 | 500V | 4A | 2.6Ω | EHSOP12 | YES | YES | OCP,UVLO,OTP,VTS,FO,VBUS | 主推 |
| LKS1M25005 | 500V | 5A | 1.4Ω | EHSOP12 | YES | YES | OCP,UVLO,OTP,VTS,FO,VBUS | 主推 |

## 3. 初步选型理解

- `LKS1D` 系列：ESOP13，功能相对简化，部分型号不带温度检测和保护功能。
- `LKS1M` 系列：EHSOP12，保护更完整，适合需要 OCP/UVLO/OTP/VTS/FO/VBUS 的项目。
- 300 V 档：当前覆盖 6 A/7 A。
- 500 V 档：当前覆盖 3 A/4 A/5 A/7 A。

## 4. 待确认

- 从 datasheet 提取工作电压、逻辑输入、保护阈值、热阻、推荐 PCB layout。
- 与具体应用场景如风机、水泵、压缩机建立推荐组合。

## 5. 家电方案资料补充

资料来源：`03_Solutions and Applications/Home Appliance/大家电产品介绍-Q2Y26.pptx`、`晶丰明源roadmap-26Q1 .pptx`。

### 白电 IPM 快速选型

| 型号 | 关键定位 | 典型应用/备注 |
|---|---|---|
| LKS1M36003 | 600V/3A，ESOP13，工业级，自身硬保护 | 空调外机、冰箱压缩机、高压风机等 3A 级应用 |
| LKS1M56002H | 600V/2A，EHSOP12，自供电，OCP/FO/SD | 空调内风机等较低电流应用 |
| LKS1M56003H | 600V/3A，EHSOP12，自供电，OCP/FO/SD | 空调内风机，资料强调自供电和母线检测 |
| LKS1S57008 | 700V/0.75Ω SiC，EHSOP12，自供电，OCP/FO/SD | 新一代 SiC 自供电 IPM，样品状态 |
| LKS1S57009 | 700V/0.5Ω SiC，EHSOP12，自供电，OCP/FO/SD | 更低 Rds-on，高压风机/更高功率余量方向 |
| LKS1S57004 | 700V/1.8Ω SiC，EHSOP12，自供电，OCP/FO/SD | SiC IPM 规划/研发线索 |
| LKS1S67008 / LKS1S67009 | 700V SiC，集成自举二极管，3mm 爬电距离 | 更强调安规间距和外围简化 |

### 选型提醒

- 白电 IPM 竞品替代不能只看电流和耐压，还要核对封装、爬电距离、自供电/自举、OCP/FO/SD、母线检测、输入逻辑和散热。
- `CPS3M36003S/F` 在资料中标注 P2P BM6248，但同时有暂停推广提示；推荐前必须确认当前策略。
- 家电场景应用组合见 `03_Solutions and Applications/Home Appliance/Home Appliance Solution Map.md`。

## 6. 2025Q4 英文选型手册补充

资料来源：`../2025Q4晶丰明源选型手册EN (1).pdf`。

2025Q4 手册中的 IPM 表补充/确认以下型号：

| 型号 | 封装 | Bootstrap Diode | 温度采样 | MOSFET BV | Rds-on Typ | OTP/DESAT/BUS/FO-SD |
|---|---|---|---|---|---|---|
| LKS1D5007DT | ESOP13 | Yes | Yes | 500V | 1.1Ω | 无 |
| LKS1D5005DT | ESOP13 | Yes | Yes | 500V | 1.4Ω | 无 |
| LKS1D5005D | ESOP13 | Yes | No | 500V | 1.4Ω | 无 |
| LKS1D5005C | ESOP13 | Yes | No | 500V | 1.5Ω | 无 |
| LKS1D5004D | ESOP13 | Yes | No | 500V | 2.4Ω | 无 |
| LKS1D5003D | ESOP13 | Yes | No | 500V | 3.3Ω | 无 |
| LKS1D3007D | ESOP13 | Yes | No | 300V | 0.75Ω | 无 |
| LKS1M25003L | EHSOP12 | Self-powered | Yes | 500V | 3.3Ω | Yes |
| LKS1M25003U | EHSOP12 | Self-powered | Yes | 500V | 3Ω | Yes |
| LKS1M25004U | EHSOP12 | Self-powered | Yes | 500V | 2.4Ω | Yes |
| LKS1M25005 | EHSOP12 | Self-powered | Yes | 500V | 1.95Ω | Yes |
| LKS1M23007 | EHSOP12 | Self-powered | Yes | 300V | 0.75Ω | Yes |

注意：本表与早期 `IPM.xlsx` 的型号/参数存在命名和数值差异，正式推荐前以最新 datasheet 和内部策略为准。
