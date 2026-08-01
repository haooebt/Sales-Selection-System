# Infineon CY8C4147AZQ-T495 竞品参数卡

资料来源：`Infineon-infineon-psoc-4100t-plus-datasheet-datasheet-en.pdf`，Infineon `PSOC™ 4100T Plus` Datasheet，Rev. *F，2025-05-08。

## 1. 型号识别

| 项目 | 参数 |
|---|---|
| 完整型号 | `CY8C4147AZQ-T495` |
| 厂商 | Infineon |
| 产品系列 | PSOC™ 4100T Plus |
| MCU 平台 | Arm Cortex-M0+ |
| 主频 | 48 MHz |
| Flash | 128 KB |
| SRAM | 32 KB |
| 温度等级 | Extended industrial，-40°C 至 105°C |
| 封装 | 64-TQFP，10 mm × 10 mm，0.5 mm pitch |
| GPIO | 53 |

## 2. 核心与存储资源

| 项目 | 参数 |
|---|---|
| CPU | Arm Cortex-M0+，single-cycle multiply |
| 主频 | 48 MHz |
| Flash | 128 KB |
| SRAM | 32 KB |
| SROM | 8 KB |
| DMA | 8 通道 DataWire/DMA |
| 调试 | 2-wire SWD |
| 时钟 | 24-48 MHz IMO，±1%；40 kHz ILO；32 kHz WCO |

## 3. 数字与模拟资源

| 项目 | 参数 |
|---|---|
| ADC | 1 × 12-bit SAR ADC，1 Msps，8-channel sequencer |
| TCPWM | 6 × 16-bit TCPWM |
| PWM 能力 | 支持 edge/center aligned、互补输出、dead-band、kill、quadrature decoder |
| UART | 3 个专用 UART |
| SCB | 2 个：1 个可配置为 SPI/I2C/UART，另 1 个为 I2C master/slave |
| CAPSENSE™ | 1 个第五代 CAPSENSE™ 模块 |
| Multi-Sense | 支持，包含 CAPSENSE™、inductive sensing、liquid sensing |
| Smart I/O | 8 |
| GPIO | 53 |
| CAN/USB | 无 |
| OPA/COMP/DAC | 订购表与框图未列出独立 OPA、COMP、DAC |

## 4. 电源与低功耗

| 项目 | 参数 |
|---|---|
| 工作电压 | 1.71 V 至 5.5 V，具体按 1.8 V 外部稳压或 2.0-5.5 V 内部稳压模式使用 |
| 工作温度 | -40°C 至 105°C |
| 低功耗特性 | Deep Sleep 下支持 Always-On touch sensing |
| Always-On touch 电流 | 8 µA |
| Active touch detection 平均电流 | 300 µA |

## 5. 初步定位

`CY8C4147AZQ-T495` 是面向触控 HMI、白电、小家电和低功耗 IoT 的混合信号 MCU。其关键价值不仅是 128 KB Flash、32 KB SRAM 和 64-pin 封装，更包括第五代 CAPSENSE™/Multi-Sense、53 GPIO、3 UART + 2 SCB，以及低功耗触摸唤醒。

替代分析必须先确认客户是否实际使用 CAPSENSE™、Multi-Sense、Smart I/O、32 KB SRAM、3 UART 或 2 路 I2C；这些资源决定能否从通用 MCU 或电机控制 MCU 进行方案替代。

