# 产品线索引

本索引用于让后续 agent 快速定位已入库资料和已形成的结构化分析。

## 结构化入口

| 产品线 | 首选入口 | 原始资料目录 | 当前状态 |
|---|---|---|---|
| MCU | `MCU/MCU Family Overview.md` | `MCU/` | 已有 Excel 选型表，PDF datasheet 待后续解析 |
| Gate Driver | `Driver/00_Product Card.md` | `Driver/` | 已读取 Gate Driver Excel，已形成产品卡 |
| IPM | `IPM/00_Product Card.md` | `IPM/` | 已读取 IPM Excel，已形成产品卡 |
| ACDC (BP系列) | `ACDC/BP/03_Parsed_Markdown/` | `ACDC/BP/01_Raw_Materials/datasheet/` | **已全部解析** BP系列24个型号→22个结构化Markdown |
| ACDC (BPA系列) | `ACDC/BPA/03_Parsed_Markdown/` | `ACDC/BPA/01_Raw_Materials/datasheet/` | **已全部解析** BPA系列28个型号→26个结构化Markdown |
| DC/DC | `DC-DC/00_Product Card.md` | `DC-DC/` | 已从 2025Q4 Product Catalog 建立首轮产品卡 |
| LED Driver | `LED Driver/00_Product Card.md` | `LED Driver/` | 已从 2025Q4 Product Catalog 建立首轮产品卡 |
| Power / Power Device | `Power Device/00_Product Card.md` | `Power Device/` | 已从 2025Q4 Product Catalog 建立轻量产品卡，需继续补 datasheet |
| 2025Q4 Product Catalog | `2025Q4 Product Catalog Digest.md` | `2025Q4晶丰明源选型手册EN (1).pdf` | 全产品线英文选型手册，已建立 digest |
| Home Appliance Solutions | `../03_Solutions and Applications/Home Appliance/Home Appliance Solution Map.md` | `../03_Solutions and Applications/Home Appliance/` | 已内化 Q2Y26 大家电产品介绍、26Q1 Roadmap、凌鸥大家电方案介绍 |

## 快速定位入口

- 竞品替代或参数选型时，先读 `Product Quick Locator.md`。
- 已知产品线后，再读本文件对应的产品线入口。
- 需要输出客户报告时，再读 `06_Output Templates/_Customer Selection Report Template.md`。
- 若客户场景属于家电，补读 `../03_Solutions and Applications/Home Appliance/Home Appliance Solution Map.md`。
- 若需求来自 2025Q4 英文选型手册覆盖范围，先读 `2025Q4 Product Catalog Digest.md`。

## MCU 系列资料入口

| 系列 | 选型表 | 规格资料 | 初步定位 |
|---|---|---|---|
| LKS03x | `MCU/LKS03x/LKS03系列.xlsx` | DS/UM/Introduction PDF | 48 MHz 入门电机控制，部分内置 gate driver |
| LKS05x | `MCU/LKS05x/LKS05系列.xlsx` | DS PDF | 96 MHz 低成本电机控制，部分内置 gate driver |
| LKS06x | `MCU/LKS06x/LKS06系列.xlsx` | UM PDF | 96 MHz、32 KB Flash、4 KB RAM 小中资源系列 |
| LKS07x | `MCU/LKS07x/LKS07系列.xlsx` | DS/UM/问题说明 PDF | 96 MHz、64/128 KB，QEP/CAN/driver 覆盖较好 |
| LKS08x | `MCU/LKS08x/LKS08系列.xlsx` | DS PDF | 96 MHz、32/64 KB，多封装覆盖 |
| LKS45x | `MCU/LKS45x/LKS45系列.xlsx` | DS/UM/ER/6N DS PDF | 192 MHz、256 KB，高资源电机控制 |

## 使用建议

1. 客户问 MCU 选型，先读 `MCU/MCU Family Overview.md`。
2. 客户问驱动器，先读 `Driver/00_Product Card.md`。
3. 客户问 IPM，先读 `IPM/00_Product Card.md`。
4. 客户问 ACDC，先读 `ACDC/00_Intake Notes.md`，再按具体型号打开 PDF。
5. 客户问家电整机、白电项目或竞品来自家电场景，先读 `../03_Solutions and Applications/Home Appliance/Home Appliance Solution Map.md`。
6. 客户问 DC/DC，先读 `DC-DC/00_Product Card.md`。
7. 客户问 LED Driver，先读 `LED Driver/00_Product Card.md`。

### ACDC 新增产品卡

| 产品线 | 产品卡位置 | 覆盖范围 |
|---|---|---|
| ACDC BP系列 | ACDC/BP/00_Product Card.md | LED驱动、开关电源、非隔离恒压 |
| ACDC BPA系列 | ACDC/BPA/00_Product Card.md | 反激PSR电源芯片(含高压大功率) |
