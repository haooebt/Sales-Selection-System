# 2025Q4 Product Catalog Digest

资料来源：`2025Q4晶丰明源选型手册EN (1).pdf`。

本文件用于快速理解 2025Q4 英文选型手册的产品线结构。它不是完整参数矩阵，后续具体替代仍需回到 PDF 或 datasheet 核对。

## 手册结构

| 页码 | 产品大类 | 主要内容 |
|---|---|---|
| 1-3 | 公司介绍与目录 | BPS 产品覆盖 LED Lighting、AC/DC、DC/DC、Motor Control / MCU |
| 4-6 | AC/DC Power Management | 家电非隔离电源、SSR、磁耦反馈、同步整流、PSR/待机电源 |
| 7-9 | DC/DC Power Management | Controller、DrMOS、eFuse/Hotswap、Converter |
| 10-16 | LED Lighting Driver | 非调光、线性、Ripple Remover、Buck/Flyback、Boost、待机电源、PWM/0-10V/DALI/TRIAC/CCT |
| 17-22 | Motor Control and Drive | Industrial MCU、Auto Grade MCU、Gate Driver、Power Device、Power、IPM |

## 产品线入口更新

| 产品线 | 结构化入口 | 备注 |
|---|---|---|
| AC/DC | `ACDC/00_Intake Notes.md` | 手册补充了 BP/BPA/BP86xxx/BP87xxx 等 AC/DC 选型范围 |
| DC/DC | `DC-DC/00_Product Card.md` | 新增入口，覆盖 Controller、DrMOS、eFuse/Hotswap、Converter |
| LED Driver | `LED Driver/00_Product Card.md` | 新增入口，覆盖非调光、调光、CCT、TRIAC、待机电源等 |
| MCU | `MCU/MCU Family Overview.md` | 手册确认 03/05/08/07/09/45 工业级系列与 Auto Grade MCU |
| Gate Driver | `Driver/00_Product Card.md` | 手册补充 BP6901A/BP6903A/BP6904A/BP6911/BP6914 |
| IPM | `IPM/00_Product Card.md` | 手册补充 LKS1D500x、LKS1M2500x、LKS1M23007 |
| Power / Power Device | `Power Device/00_Product Card.md` | 手册出现 LKS0405CG、LKSI65015A、LKS610/611/620/621/660、LKS663xx/LKS6670X/LKS63724 |

## 竞品替代使用方式

当竞品来自该手册覆盖范围时：

1. 先按大类判断：AC/DC、DC/DC、LED Driver、MCU、Gate Driver、IPM、Power Device。
2. 读取 `Product Quick Locator.md` 中对应入口。
3. 若大类是 DC/DC 或 LED Driver，优先读取新增产品卡。
4. 若是 MCU/Gate Driver/IPM，先读已有产品卡，再回到本 digest 和 PDF 确认新增型号。
5. 输出结论时标注“资料来源：2025Q4 Product Catalog”，并对未核对 datasheet 的参数标注“待确认”。

## 待补充

- 将 PDF 中的表格转成可筛选 Excel/CSV 参数矩阵。
- 继续补充 Power / Power Device 的 datasheet、pinout 和应用边界。
- 对 LED Driver 按照“非调光/调光/CCT/智能面板/两线无零火”继续拆分。
- 对 DC/DC 按照“服务器/CPU 多相控制器、DrMOS、eFuse、Buck Converter”继续拆分。
