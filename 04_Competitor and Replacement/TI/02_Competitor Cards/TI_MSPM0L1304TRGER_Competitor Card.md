# TI MSPM0L1304TRGER 竞品参数卡

资料来源：`TI-MSPM0L1304.pdf`，TI `MSPM0L130x` 中文 datasheet, Rev. D, January 2024。

## 1. 型号识别

| 项目 | 参数 |
|---|---|
| 完整型号 | `MSPM0L1304TRGER` |
| 厂商 | Texas Instruments |
| 产品系列 | MSPM0L130x |
| MCU 平台 | Arm 32-bit Cortex-M0+ |
| 主频 | up to 32 MHz |
| 子系列含义 | `130` = ADC + 2x OPA + COMP |
| 存储位 | `4` = 16 KB Flash + 2 KB SRAM |
| 温度位 | `T` = -40°C 至 105°C |
| 封装位 | `RGE` = VQFN 24 引脚 |
| 配送形式 | `R` = 大卷带 |
| 状态 | ACTIVE |

## 2. 核心资源

| 项目             | MSPM0L1304TRGER       |
| -------------- | --------------------- |
| CPU            | Arm Cortex-M0+        |
| 主频             | 32 MHz                |
| Flash          | 16 KB                 |
| SRAM           | 2 KB                  |
| DMA            | 3 通道                  |
| CRC            | CRC-16 / CRC-32       |
| GPIO           | 20 个                  |
| 5V tolerant IO | 2 个 5V 容限开漏 IO        |
| 调试             | 2-pin SWD             |
| BSL            | UART 或 I2C bootloader |

## 3. 模拟资源

| 项目              | 参数                             |
| --------------- | ------------------------------ |
| ADC             | 1 个 12-bit ADC                 |
| ADC 速率          | 1.68 Msps                      |
| RGE24 外部 ADC 通道 | 9 个                            |
| VREF            | 内部 1.4 V 或 2.5 V ADC reference |
| OPA             | 2 个零漂移、零交叉斩波 OPA               |
| OPA PGA         | 集成可编程增益级 1-32x                 |
| GPAMP           | 1 个通用放大器                       |
| COMP            | 1 个高速比较器                       |
| COMP DAC        | 8-bit reference DAC            |
| 温度传感器           | 集成                             |

## 4. 数字外设

| 项目 | 参数 |
|---|---|
| Timer | 4 个 16-bit general-purpose timers |
| PWM | 总计 8 个 PWM 通道 |
| Watchdog | Windowed watchdog timer |
| UART | 2 个，UART0 支持 LIN/IrDA/DALI/Smart Card/Manchester 等 |
| I2C | 2 个，其中一个支持 FM+ 1 Mbit/s，支持 SMBus/PMBus |
| SPI | 1 个，最高 16 Mb/s |
| CAN | 无 |
| USB | 无 |

## 5. 电源与温度

| 项目 | 参数 |
|---|---|
| VDD | 1.62 V 至 3.6 V |
| T 版本环境温度 | -40°C 至 105°C |
| S 版本环境温度 | -40°C 至 125°C |
| 当前型号 | `T` 版本，即 -40°C 至 105°C |
| 最大结温，T 版本 | 125°C |
| RGE24 RθJA | 44.7°C/W |

## 6. 封装与 pinout

| 项目 | 参数 |
|---|---|
| 封装 | VQFN |
| Package code | RGE |
| Pin count | 24 |
| 标称尺寸 | 4 mm x 4 mm |
| Max height | 1 mm |
| 外露焊盘 | 有，datasheet 建议连接至 VSS |
| 包装数量 | 3000 pcs / reel |
| MSL | Level-1-260C-UNLIM |

RGE24 顶视图主要引脚：

| Pin | Signal |
|---:|---|
| 1 | PA1 / NRST |
| 2 | NRST |
| 3 | VDD |
| 4 | VSS |
| 5 | PA2 / ROSC |
| 6 | PA3 |
| 7 | PA4 |
| 8 | PA9 |
| 9 | PA10 |
| 10 | PA11 |
| 11 | PA15 / A9 |
| 12 | PA16 / A8 |
| 13 | PA17 |
| 14 | PA18 / A7 |
| 15 | PA19 / SWDIO |
| 16 | PA20 / A6 / SWCLK |
| 17 | PA21 / A5 / VREF- |
| 18 | PA22 / A4 |
| 19 | PA23 / VREF+ |
| 20 | PA24 / A3 |
| 21 | PA25 / A2 |
| 22 | PA26 / A1 |
| 23 | VCORE |
| 24 | PA0 |

## 7. 初步定位

`MSPM0L1304TRGER` 是一颗低成本、低功耗、通用混合信号 MCU，优势集中在低功耗、2x OPA、GPAMP、比较器、2x UART、2x I2C、小封装和 TI MSPM0 软件生态。

它不是电机控制专用 MCU，也没有 CAN、USB、QEP 或内置 gate driver。

