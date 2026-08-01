# 产品资料首轮内化分析

更新日期：2026-07-09

## 1. 已入库资料概况

当前已放入 `02_Product Knowledge Base` 的资料主要覆盖四类：

| 产品类别 | 目录 | 当前资料形态 | 首轮判断 |
|---|---|---|---|
| MCU | `MCU/LKS03x`、`LKS05x`、`LKS06x`、`LKS07x`、`LKS08x`、`LKS45x` | Excel 选型表 + datasheet/user manual/errata PDF | 结构化程度最高，可优先形成产品矩阵和系列卡 |
| Gate Driver | `Driver` | Gate Driver Excel + PDF | 可形成驱动器选型表，适合和 MCU 电机控制方案联动 |
| IPM | `IPM` | IPM Excel + datasheet/产品介绍 PDF | 已有清晰电压/电流/封装/保护功能矩阵 |
| ACDC | `ACDC/BP`、`ACDC/BPA` | 大量 datasheet PDF + 少量 rar 方案包 | 需要后续按拓扑/功率/封装/应用场景再结构化 |

文件数量快照：

| 类型 | 数量 |
|---|---:|
| PDF | 79 |
| Excel | 8 |
| RAR 方案包 | 3 |

## 2. 首轮产品线理解

### MCU

MCU 产品明显围绕电机控制场景展开，多个系列都包含：

- ADC 通道
- DAC
- 比较器
- OPA
- Hall 输入
- SPI/IIC/UART
- 可选 CAN/QEP
- 可选内置 Gate driver

初步梯度：

| 系列 | 初步定位 |
|---|---|
| LKS03x | 48 MHz、32 KB Flash、低资源/小封装/可带内置 gate driver 的入门电机控制 MCU |
| LKS05x | 96 MHz、32 KB Flash、低成本 12-bit ADC 电机控制 MCU，部分型号内置 6N/3P3N gate driver |
| LKS06x | 96 MHz、32 KB Flash、4 KB RAM，外设资源比 LKS05x 略增强，当前型号少 |
| LKS07x | 96 MHz、64/128 KB Flash、12 KB RAM，支持 QEP，部分型号支持 CAN 和内置 gate driver |
| LKS08x | 96 MHz、32/64 KB Flash、8 KB RAM，覆盖 LQFP64/TQFP48/QFN/SSOP，小中资源电机控制 |
| LKS45x | 192 MHz、256 KB Flash、40 KB RAM，高资源电机控制 MCU，双三相/多 ADC/多 COMP/OPA，适合较高性能项目 |

### Gate Driver

当前 Gate Driver 表包含 `LKS570`、`LKS563`、`LKS523`、`LKS520`、`LKS513`。

初步分层：

- `LKS523/LKS520`: 600 V floating voltage，SOP8，适合高压半桥驱动方向。
- `LKS570/LKS563`: 250/300 V floating voltage，输出电流较强，工作温度可到 150 degC。
- `LKS513`: 40 V、3P3N、ESOP16，更偏低压三相驱动。

### IPM

IPM Excel 当前 12 个型号，全部状态为“主推”。初步分层：

- `LKS1D` 系列：ESOP13，300 V/500 V，集成自举，部分带温度检测/VTS。
- `LKS1M` 系列：EHSOP12，300 V/500 V，保护功能更完整，包含 OCP/UVLO/OTP/VTS/FO/VBUS。

### ACDC

ACDC 当前资料量最大，主要分为：

- `BP`: BP 系列 datasheet 与少量 BP1808 方案包。
- `BPA`: BPA 系列 datasheet。

现阶段只完成资料入库识别，暂未建立参数矩阵。后续建议按以下维度结构化：

- 拓扑：Buck / Buck-Boost / Boost / Flyback / 非隔离等
- 输入电压范围
- 输出功率/电流
- 是否内置 MOS
- 封装
- 典型应用：照明、电源、充电器、小家电等

## 3. 数据清洗注意点

首轮读取 Excel 时发现以下字段需要后续核对原表显示：

- MCU 部分 `Gate driver current(A)` 出现负小数，例如 `-0.8`、`-0.1667`，可能表示拉/灌电流方向，也可能是源表格式导致。
- `LKS06系列.xlsx` 中 `Gate driver supply (V)` 有一处读取为 `45955`，疑似 Excel 日期/格式转换问题。
- 部分表中 `HaLL` 写法、`IIC/I2C` 命名不统一，后续参数矩阵应统一字段名。
- `ACDC` 目录目前没有统一 Excel 矩阵，需要从 PDF 或后续资料包提取。

## 4. 推荐下一步

优先级建议：

1. 先把 MCU 六个系列整理成统一参数矩阵。
2. 为 LKS45x、LKS07x、LKS08x 建立销售视角产品卡，因为这些更容易用于客户替代和中高资源选型。
3. Driver 和 IPM 建立产品组合逻辑，和电机控制方案卡联动。
4. ACDC 先做文件索引，再按常见应用和拓扑抽取参数。

