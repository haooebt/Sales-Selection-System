# ACDC BP 系列产品卡

资料来源：03_Parsed_Markdown/ 解析结果 + 原始PDF

## 1. 一句话定位

BP系列是晶丰明源的ACDC电源驱动芯片产品线，覆盖LED恒流驱动、开关电源驱动、非隔离降压恒压等应用场景，
包含多款内置高压MOSFET的集成电源方案。

## 2. 产品子类

### 2.1 开关电源驱动芯片（PSR/Buck）

| 型号 | 封装 | MOSFET耐压 | 输出能力 | 拓扑 | 待机功耗 | 特色功能 |
|---|---|---|---:|---|---|---|
| BP85221AL | SOP-7 | - | 150mA(5V) | Buck/Buck-Boost | - | 兼容0510色环电感/CD43贴片电感 |
| BP85223AL | SOP-7 | 550V | 150mA(5V) | Buck/Buck-Boost | - | 集成1600V整流二极管 |
| BP85226DF | SOP-7 | 650V | 300mA(5V) | Buck/Buck-Boost | - | 集成VCC电容、续流管、反馈管 |
| BP85226D | SOP-7 | 650V | 1.75W(5V) | Buck/Buck-Boost | - | 3.5kV ESD |
| BP8522D | SOP-7 | 550V | 150mA(5V) | Buck/Buck-Boost | 50mW | 低待机功耗 |
| BP85256D | SOP-7 | 650V | 350mA(12V) | Buck/Buck-Boost | - | 集成VCC电容 |
| BP85928D | SOP-8 | - | - | Buck/Buck-Boost | - | 集成VCC电容 |
| BP85956D | SOP-8 | 650V | 350mA(12V) | Buck/Buck-Boost | - | - |
| BP86213D | SOP-8 | - | 15W(隔离) | 反激(隔离) | <75mW | PSR隔离CC/CV控制 |
| BP86220D | SOP-7 | 650V | - | 反激 | - | 超低待机功耗，准谐振 |
| BPS1418PD | DIP-7 | 750V | 24W | 反激 | <50mW | 高压自供电 |

### 2.2 LED 恒流驱动芯片

| 型号 | 封装 | 耐压 | 输出电流 | 调光 | 应用 |
|---|---|---|---:|---|---|---|
| BP1371 | SOT89-5 | 40V | - | PWM/模拟 | MR16、舞台灯、太阳能灯 |
| BP1638CJ | ESOP8 | 40V | 200mA×3 | PWM(3路) | RGB调光 |
| BP1808A | SOP8-EP | 80V | 300mA | PWM/模拟 | MR16、智能调光LED |
| BP5116DJC | ESOP8 | 500V | 80mA(单段) | - | 高压LED灯串 |
| BP5116DJ | ESOP8 | 500V | 80mA(单段) | - | 高压LED灯串 |
| BP5712E | ESOP8 | 500V | 80mA | PWM | 智能灯丝灯/球泡灯 |
| BP5936D | SOP8 | 250V×2 | 200mA×2 | PWM/模拟 | 双路调色调光 |
| BP2306XK | SOP-8 | - | - | PWM/模拟 | 高PF BUCK LED |

### 2.3 非隔离降压恒压芯片

| 型号 | 封装 | MOSFET | 输出 | 待机功耗 | 特色 |
|---|---|---|---|---|---|
| BP2522X | SOT33-5A | - | 12V/24V 固定 | <20mW | 超低待机 |
| BP2571X | SOP-8 | - | 500mA/750mA(峰值) | - | 直接采样输出电压 |

## 3. 关键参数特征

- **高压集成**: BP852xx/BPS系列集成550-750V高压MOSFET
- **低待机**: BP2522X <20mW, BPS1418PD/BPA系列 <50mW
- **多种拓扑**: Buck/Buck-Boost/Flyback全覆盖
- **封装**: SOP-7/SOP-8/DIP-7/SOT89-5/ESOP8 多种选择

## 4. 选型方向

| 场景 | 推荐 | 理由 |
|---|---|---|
| 小家电辅助电源 5V/150mA | BP85221AL | 兼容色环电感，成本低 |
| 电机驱动辅助电源 12V/300mA | BP85256D | 650V耐压，输出能力充足 |
| IoT智能家居 5V/300mA | BP85226DF | 650V + 高集成度 |
| 隔离电源 ≤15W | BP86213D | PSR隔离，<75mW待机 |
| 隔离电源 ≤24W | BPS1418PD | 750V MOSFET + 50mW待机 |
| 高压LED灯串 | BP5116DJC/BP5116DJ | 500V单段线性恒流 |
| 智能调光LED | BP5712E | 满足ERP/IEC谐波标准 |
| 非隔离恒压 12V/24V | BP2522X | <20mW 待机 |

## 5. 资料索引

- 原始PDF: `01_Raw_Materials/datasheet/`
- 解析Markdown: `03_Parsed_Markdown/`
- 共 **24个PDF → 22个解析Markdown**（2个版本重复）
