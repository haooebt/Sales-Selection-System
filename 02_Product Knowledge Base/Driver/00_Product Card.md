# Gate Driver 产品卡

资料来源：`Gate Driver.xlsx` 和当前 Driver 目录 PDF。

## 1. 一句话定位

用于电机控制和半桥/三相驱动的门极驱动器产品线，可与 MCU/IPM/电机控制方案联动选型。

## 2. 型号矩阵

| 型号 | 封装 | IO+ | IO- | Floating Voltage | 控制逻辑 | UVLO | Turn-on/off Delay | Dead Time | 温度 | 供电 | 输入电平 |
|---|---|---:|---:|---|---|---|---|---|---|---|---|
| LKS570 | SOP8 | 1.2 A | 1.5 A | 250 V max | HIN & LIN* | 7 V | 100/100 ns | 100 ns | -40~150 degC | 8~20 V | 3.3V/5V/15V |
| LKS563 | SOP20 | 1.2 A | 1.5 A | 300 V max | HIN & LIN | 4.9 V | 600/270 ns | 200 ns | -40~150 degC | 10~25 V | 3.3V/5V/15V |
| LKS523 | SOP8 | 0.8 A | 1.2 A | 600 V max | HIN & LIN | 7.6 V | 250/160 ns | 100 ns | -40~150 degC | 10~20 V | 3.3V/5V/15V |
| LKS520 | SOP8 | 0.45 A | 1 A | 600 V max | HIN & LIN* | 7.6 V | 270/180 ns | 100 ns | -40~105 degC | 10~20 V | 3.3V/5V/15V |
| LKS513 | ESOP16 | 0.05 A | 0.3 A | 40 V | 3P3N | 6 V | 80/30 ns | 100 ns | -40~105 degC | 6~40 V | 3.3V/5V/15V |
| BP6901A | SOP8 | 0.21A | 0.32A | 600V max | HIN & LIN | 8.0V | 250/150ns | 100ns | -40~105℃ | 10~20V | 3.3/5/15V |
| BP6903A | SOP8 | 0.21A | 0.32A | 600V max | HIN & LIN* | 8.0V | 250/150ns | 100ns | -40~105℃ | 10~20V | 3.3/5/15V |
| BP6904A | SOP8 | 0.21A | 0.32A | 600V max | IN & SDb | 8.0V | 250/150ns | 100ns | -40~105℃ | 10~20V | 3.3/5/15V |
| BP6911 | SOP8 | 0.45A | 1A | 600V max | HIN & LIN | 7.6V | 270/160ns | 100ns | -40~105℃ | 10~20V | 3.3/5/15V |
| BP6914 | SOP8 | 0.45A | 1A | 600V max | IN & EN | 7.6V | 270/160ns | 100ns | -40~105℃ | 10~20V | 3.3/5/15V |
| LKS571 | SOP8 | 1.2A | 1.5A | 200V max | HIN & LIN | 7V | 100/100ns | 250ns | -40~150℃ | 10~20V | 3.3/5/15V |

## 3. 初步选型理解

- 高压半桥方向：优先看 `LKS523` / `LKS520`，floating voltage 600 V。
- 更高输出驱动能力：优先看 `LKS570` / `LKS563`，IO+ 1.2 A、IO- 1.5 A。
- 低压三相 3P3N：优先看 `LKS513`。

## 4. 待确认

- `HIN & LIN*` 中星号含义需要从 datasheet 确认。
- 各型号保护功能、输入兼容、bootstrap 应用条件需从 PDF 深挖。
- 需要建立与 MCU 内置 gate driver 型号的边界对比。


## 已解析datasheet（MinerU）

通过MinerU API解析的datasheet结构文本位于 `03_Parsed_Markdown/`，包含完整电气参数表，可补全产品卡中待确认的参数（如HIN& LIN\*含义、各型号保护功能等）。

| 型号 | 解析结果 | 字符数 |
|---|---:|---:|
| BP6901A | `03_Parsed_Markdown/BP6901A_CN_DS_Rev.1.0.md` | ~15K |
| BP6911 | `03_Parsed_Markdown/BP6911_CN_DS_Rev.1.0.md` | ~14K |
| LKS563 | `03_Parsed_Markdown/LKS563(Q)_CN_DS_Rev.1.54.md` | ~24K |

## 5. 家电方案资料补充

资料来源：`03_Solutions and Applications/Home Appliance/凌鸥创芯产品介绍(大家电应用)-Mar V2.3.pdf`。

| 应用 | Driver 线索 | 组合 |
|---|---|---|
| 家用/商用空调 PFC 预驱 | LKS561 | LKS32MC453RCT8 + LKS561 + BPA8618PD/BPA86526P |
| 家用冰箱压缩机 | BP6901A | LKS32MC037M/LKS32MC077M + BP6901A + BPA8505 |
| 商用冰箱压缩机 | BP6901 | LKS32MC072/LKS32MC057 + BP6901 + BPA8505 |
| 燃热强排风机/水泵分立方案 | LKS563 | LKS32MC037L + LKS563 |
| 燃热强排主变一体 | LKS563 | LKS32MC070RBT8 + LKS563 |

注意：LKS561、BP6901/BP6901A 在当前 Gate Driver 矩阵中尚未参数化；正式推荐前需补 datasheet 或选型表。

## 6. 2025Q4 英文选型手册补充

资料来源：`../2025Q4晶丰明源选型手册EN (1).pdf`。

| 型号 | 封装 | IO+ | IO- | Floating Voltage | 控制逻辑 | UVLO | 延迟/死区 | 温度 | 供电 | 输入电平 |
|---|---|---:|---:|---|---|---|---|---|---|---|
| LKS571 | SOP8 | 1.2A | 1.5A | 200V max | HIN & LIN | 7V | 100/100ns, dead time 250ns | -40~150℃ | 10~20V | 3.3/5/15V |
| BP6901A | SOP8 | 0.21A | 0.32A | 600V max | HIN & LIN | 8.0V | 250/150ns, dead time 100ns | -40~105℃ | 10~20V | 3.3/5/15V |
| BP6903A | SOP8 | 0.21A | 0.32A | 600V max | HIN & LIN* | 8.0V | 250/150ns, dead time 100ns | -40~105℃ | 10~20V | 3.3/5/15V |
| BP6904A | SOP8 | 0.21A | 0.32A | 600V max | IN & SDb | 8.0V | 250/150ns, dead time 100ns | -40~105℃ | 10~20V | 3.3/5/15V |
| BP6911 | SOP8 | 0.45A | 1A | 600V max | HIN & LIN | 7.6V | 270/160ns, dead time 100ns | -40~105℃ | 10~20V | 3.3/5/15V |
| BP6914 | SOP8 | 0.45A | 1A | 600V max | IN & EN | 7.6V | 270/160ns, dead time 100ns | -40~105℃ | 10~20V | 3.3/5/15V |

注意：`HIN & LIN*` 的星号含义仍需查 datasheet。
