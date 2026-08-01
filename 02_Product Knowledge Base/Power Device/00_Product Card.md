# Power / Power Device 产品卡

资料来源：`../2025Q4晶丰明源选型手册EN (1).pdf`。

## 一句话定位

2025Q4 手册中 `Power Device` 和 `Power` 信息与 Gate Driver/IPM 同页出现，当前适合作为器件级快速定位入口，后续需要按 datasheet 继续参数化。

## Power Device

| 型号 | 封装 | 关键参数 | 初步定位 |
|---|---|---|---|
| LKS0405CG | SOP8 | MOSFET 40/-40V，Rds-on Typ 22/58mΩ | 低压功率 MOS 线索，需补 datasheet |
| LKSI65015A | TO263 | 650V，Vce(sat)=1.79V | IGBT/功率器件线索，需补 datasheet |

## Power

| 型号 | 封装 | 类型 | 输入 | 输出 | 限流/频率 | 温度 | 精度 |
|---|---|---|---|---|---|---|---|
| LKS610 | SOP8 | DC/DC | DC20~200V | 15V / 300mA | 650kHz | -40~140℃ | 2% |
| LKS611 | SOP7 | DC/DC | DC15~150V | 12V / 300mA | 650kHz | -40~140℃ | 2% |
| LKS620 | SOP8 | AC/DC | DC20~AC265V | 15V / 350mA | 750kHz | -40~150℃ | ±5% |
| LKS660 | SOT33-5A | AC/DC | AC85~265V | 12V / 350mA | 650kHz | -40~140℃ | 2% |
| LKS621 | SOP8 | DC/DC | DC20~200V | 15V / 240mA | 800kHz | -40~140℃ | ±5% |
| LKS66324 | TSOT23-6 | DC/DC | DC4.5~30V | Adjustable / 2000mA | COT 140kHz | -40~125℃ | ±2% |
| LKS66334 | TSOT23-6 | DC/DC | DC4.5~30V | Adjustable / 3000mA | COT 140kHz | -40~125℃ | ±2% |
| LKS6670X | DFN3*3 / ESOP-8 | DC/DC | DC4.5~100V | Adjustable / 600mA | 800kHz | -40~125℃ | ±1% |
| LKS63724 | SOT23-6 | DC/DC | DC5.5~100V | Adjustable / 300mA | 1800kHz | -40~150℃ | ±2% |

## 选型提醒

- 当前信息来自目录表，不足以直接对外承诺替代。
- DC/DC 类 Power 器件需要核对输入浪涌、输出精度、开关频率、外围电感/二极管/MOS、热设计和封装 pinout。
- AC/DC 类 Power 器件需要核对安规、爬电距离、待机功耗、保护策略和 EMI。

## 待补充

- 补充 datasheet。
- 区分 Power Device、辅助电源芯片、DC/DC Converter 与 ACDC 的边界。
- 建立与家电辅助电源、工业控制辅助电源的应用映射。

