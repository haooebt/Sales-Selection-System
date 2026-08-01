# STM32H523RE MCU 参数整理

资料来源：ST `DS14540 Rev 1`, `STM32H523xx` datasheet, April 2024。本文针对 `STM32H523RE` 这个料号位整理。

## 1. 型号含义

`STM32H523RE` 是 STM32H523xx 系列中的 64 引脚、512 KB Flash 版本。完整订购料号通常还需要补上封装和温度后缀，例如：

| 位段 | 含义 |
|---|---|
| `STM32` | Arm 32-bit MCU |
| `H` | High performance 系列 |
| `523` | STM32H523xx 子系列 |
| `R` | 64 pins |
| `E` | 512 Kbytes Flash |
| `T` | LQFP 封装 |
| `6` | -40 至 +85 degC |
| `7` | -40 至 +105 degC, 低功耗条件可到 +125 degC, 结温 +130 degC |

常见完整形式：`STM32H523RET6` 或 `STM32H523RET7`。

## 2. 核心与存储资源

| 项目 | STM32H523RE 参数 |
|---|---|
| CPU | Arm Cortex-M33, TrustZone, FPU, DSP, MPU |
| 最高主频 | 250 MHz |
| 性能 | 375 DMIPS, 1023 CoreMark |
| Flash | 512 Kbytes, dual-bank, ECC, read-while-write |
| 高循环 Flash 区 | 每 bank 最高 48 Kbytes, 100 K cycles, 可作 data flash |
| OTP | 2 Kbytes |
| SRAM 总量 | 272 Kbytes |
| SRAM1 | 128 Kbytes |
| SRAM2 | 80 Kbytes, ECC |
| SRAM3 | 64 Kbytes |
| Backup SRAM | 2 Kbytes, ECC, 可在低功耗/VBAT 下保持 |
| Cache | 8 KB instruction cache, 4 KB data cache for external memories |
| Unique ID | 96-bit |

## 3. 主要外设资源, 按 STM32H523RE/LQFP64

| 类别 | 资源 |
|---|---|
| GPIO | 49 个 GPIO |
| 低电压独立供电脚 | LQFP64 不支持 1.08 V I/O 组 |
| Wakeup pins | 6 |
| Tamper pins | 5 |
| Active tamper | 4 |
| ADC | 2 个 12-bit ADC, LQFP64 外部通道数 16 |
| DAC | 1 个 12-bit DAC 控制器, 2 通道 |
| 高级定时器 | 2 个 16-bit |
| 通用定时器 | 2 个 32-bit + 4 个 16-bit |
| 基本定时器 | 2 个 16-bit |
| 低功耗定时器 | 2 个 16-bit |
| SysTick | 2 个 24-bit |
| Watchdog | Independent watchdog + window watchdog |
| SPI/I2S | 4 个 SPI, 其中 3 个复用 full-duplex I2S |
| I2C | 3 个 |
| I3C | 2 个 |
| USART | 4 个 |
| UART | 2 个 |
| LPUART | 1 个 |
| FDCAN | 2 个 |
| USB | USB 2.0 Full-Speed host/device, crystal-less |
| USB-C/UCPD | 支持, LQFP64 有 UCPD 相关脚 |
| SDMMC | 支持 |
| DCMI/PSSI | 支持 |
| HDMI-CEC | 支持 |
| OCTOSPI | 支持 |
| FMC 外部存储控制器 | STM32H523RE/LQFP64 不支持。数据手册说明 FMC 面向 100 pins 及以上封装 |
| RTC | 支持, VBAT 域, 32 个 32-bit backup registers |
| 安全外设 | TrustZone, HASH SHA-512, TRNG, PKA 用于 ECDSA signature verification, secure debug/authentication, SFI |

注意：LQFP64 封装没有独立 `VREF+` pad。数据手册脚注说明，当封装没有 `VREF+` pad 时，内部 voltage reference buffer 不可用并应保持 disabled。

## 4. 电源与工作条件

| 项目 | 参数 |
|---|---|
| 主供电/I/O 供电 | 1.71 V 至 3.6 V |
| VBAT | 用于 RTC、backup registers、backup SRAM 保持 |
| VDDA/VSSA | ADC/DAC 模拟供电/地 |
| VDDUSB | USB 专用供电, LQFP64 未单独引出该脚 |
| VCAP | LQFP64 有 2 个 VCAP 脚, 需按参考设计接外部电容 |
| 温度等级 `6` | -40 至 +85 degC |
| 温度等级 `7` | -40 至 +105 degC, 低功耗条件可到 +125 degC |
| VOS0 | up to 250 MHz, Tj -40 至 +105 degC |
| VOS1 | up to 200 MHz, Tj -40 至 +130 degC |

## 5. LQFP64 封装信息

| 项目 | 参数 |
|---|---|
| 封装 | LQFP64, ST package code `5W` |
| Body size | 10 x 10 mm nominal |
| Overall size | 12 x 12 mm nominal |
| Pin pitch | 0.50 mm |
| 最大高度 A | 1.60 mm |
| A2 | 1.35/1.40/1.45 mm min/typ/max |
| Lead width b | 0.17/0.22/0.27 mm min/typ/max |
| Lead length L | 0.45/0.60/0.75 mm min/typ/max |
| 推荐 footprint 外形 | 12.70 x 12.70 mm, 焊盘布局示例见 datasheet Figure 66 |
| 俯视脚序 | Figure 7 标注为 package top view |

## 6. LQFP64 引脚清单

缩写说明：`S` 为电源脚，`I/O` 为输入输出脚，`I` 为输入脚。`FT` 表示 5 V tolerant I/O，`TT` 表示 3.6 V tolerant I/O。后缀如 `_a/_f/_h/_u/_c/_t` 分别表示模拟开关、Fm+、高速低压、USB、Type-C/PD、Tamper 等能力组合。

| Pin | Name | Type | I/O structure | 主要复用/附加功能 |
|---:|---|---|---|---|
| 1 | VBAT | S | - | backup/RTC 供电 |
| 2 | PC13 | I/O | FT_t | EVENTOUT, TAMP_IN1/TAMP_OUT2/TAMP_OUT3, RTC_OUT1/RTC_TS, WKUP4 |
| 3 | PC14-OSC32_IN | I/O | FT | EVENTOUT, OSC32_IN |
| 4 | PC15-OSC32_OUT | I/O | FT | EVENTOUT, OSC32_OUT |
| 5 | PH0-OSC_IN | I/O | FT | EVENTOUT, OSC_IN |
| 6 | PH1-OSC_OUT | I/O | FT | EVENTOUT, OSC_OUT |
| 7 | NRST | I/O | RST | Reset |
| 8 | PC0 | I/O | FT_a | SPI4_MISO, SPI2_RDY, OCTOSPI1_IO7, ADC12_INP10 |
| 9 | PC1 | I/O | FT_ah | TRACED0, SPI2_MOSI/I2S2_SDO, SPI4_MOSI, OCTOSPI1_IO4, ADC12_INP11/INN10, TAMP_IN3/TAMP_OUT5, WKUP6 |
| 10 | PC2 | I/O | FT_a | PWR_CSLEEP, TIM4_CH4, SPI2_MISO/I2S2_SDI, OCTOSPI1_IO5/IO2, ADC12_INP12/INN11 |
| 11 | PC3 | I/O | FT_a | PWR_CSTOP, LPUART1_TX, SPI2_MOSI/I2S2_SDO, OCTOSPI1_IO6/IO0, ADC12_INP13/INN12 |
| 12 | VSSA | S | - | Analog ground |
| 13 | VDDA | S | - | Analog supply |
| 14 | PA0 | I/O | FT_at | TIM2_CH1, TIM5_CH1, TIM8_ETR, TIM15_BKIN, SPI4_SCK, SPI3_RDY, USART2_CTS/NSS, UART4_TX, FDCAN2_RX, ADC12_INP0/INN1, TAMP_IN2/TAMP_OUT1, WKUP1 |
| 15 | PA1 | I/O | FT_aht | TIM2_CH2, TIM5_CH2, TIM15_CH1N, LPTIM1_IN1, OCTOSPI1_DQS/IO3, USART2_RTS, UART4_RX, USART6_CK, ADC12_INP1, TAMP_IN5/TAMP_OUT4 |
| 16 | PA2 | I/O | FT_at | TIM2_CH3, TIM5_CH3, LPUART1_TX, TIM15_CH1, LPTIM1_IN2, USART2_TX, ADC12_INP14, TAMP_IN4/TAMP_OUT3, WKUP2 |
| 17 | PA3 | I/O | FT_ah | TIM2_CH4, TIM5_CH4, OCTOSPI1_CLK, TIM15_CH2, SPI2_NSS/I2S2_WS, SPI3_MOSI/I2S3_SDO, USART2_RX, ADC12_INP15 |
| 18 | VSS | S | - | Digital ground |
| 19 | VDD | S | - | Digital supply |
| 20 | PA4 | I/O | TT_a | TIM5_ETR, LPTIM2_CH1, SPI3_MOSI/I2S3_SDO, SPI1_NSS/I2S1_WS, SPI3_NSS/I2S3_WS, USART2_CK, DCMI_HSYNC/PSSI_DE, ADC12_INP18, DAC1_OUT1 |
| 21 | PA5 | I/O | TT_ah | TIM2_CH1/ETR, TIM8_CH1N, SPI1_SCK/I2S1_CK, PSSI_D14, ADC12_INP19/INN18, DAC1_OUT2 |
| 22 | PA6 | I/O | FT_ah | TIM1_BKIN, TIM3_CH1, TIM8_BKIN, SPI1_MISO/I2S1_SDI, OCTOSPI1_IO3, DCMI_PIXCLK/PSSI_PDCK, ADC12_INP3 |
| 23 | PA7 | I/O | FT_ah | TIM1_CH1N, TIM3_CH2, TIM8_CH1N, SPI1_MOSI/I2S1_SDO, OCTOSPI1_IO2, FMC_NWE, ADC12_INP7/INN3 |
| 24 | PC4 | I/O | FT_a | TIM2_CH4, LPTIM2_ETR, I2S1_MCK, USART3_RX, ADC12_INP4 |
| 25 | PC5 | I/O | FT_ah | TIM1_CH4N, PSSI_D15, SPI4_SCK, OCTOSPI1_DQS, ADC12_INP8/INN4 |
| 26 | PB0 | I/O | FT_ah | TIM1_CH2N, TIM3_CH3, TIM8_CH2N, SPI3_MISO/I2S3_SDI, OCTOSPI1_IO1, USART2_TX, UART4_CTS, ADC12_INP9/INN5 |
| 27 | PB1 | I/O | FT_ah | TIM1_CH3N, TIM3_CH4, TIM8_CH3N, SPI3_SCK, SPI2_NSS/I2S2_WS, OCTOSPI1_IO0, USART3_RX, ADC12_INP5 |
| 28 | PB2 | I/O | FT_ah | RTC_OUT2, TIM8_CH4N, SPI1_RDY, LPTIM1_CH1, SPI2_SCK/I2S2_CK, SPI3_MOSI/I2S3_SDO, OCTOSPI1_CLK/DQS, SDMMC1_CMD, LSCO |
| 29 | PB10 | I/O | FT_f | TIM2_CH3, TIM8_CH1, LPTIM2_IN1, I2C2_SCL, SPI2_SCK/I2S2_CK, USART3_TX, OCTOSPI1_NCS |
| 30 | VCAP | S | - | Regulator capacitor |
| 31 | VSS | S | - | Digital ground |
| 32 | VDD | S | - | Digital supply |
| 33 | PB12 | I/O | FT_h | TIM1_BKIN, TIM8_CH3, OCTOSPI1_NCLK, I2C2_SDA, SPI2_NSS/I2S2_WS, UCPD1_FRSTX, USART3_CK, FDCAN2_RX, UART5_RX |
| 34 | PB13 | I/O | FT_c | TIM1_CH1N, TIM8_CH2, LPTIM2_CH1, I2C2_SMBA, SPI2_SCK/I2S2_CK, USART3_CTS/NSS, LPUART1_RX, FDCAN2_TX, SDMMC1_D0, UART5_TX, UCPD1_CC1 |
| 35 | PB14 | I/O | FT_c | TIM1_CH2N, TIM12_CH1, TIM8_CH2N, USART1_TX, SPI2_MISO/I2S2_SDI, USART3_RTS, UART4_RTS, UCPD1_CC2 |
| 36 | PB15 | I/O | FT_h | RTC_REFIN, TIM1_CH3N, TIM12_CH2, TIM8_CH3N, USART1_RX, SPI2_MOSI/I2S2_SDO, SPI1_MOSI/I2S1_SDO, UART4_CTS, OCTOSPI1_CLK, DCMI_D2/PSSI_D2, UART5_RX, PVD_IN |
| 37 | PC6 | I/O | FT_h | TIM3_CH1, TIM8_CH1, I2S2_MCK, USART6_TX, SDMMC1_D0DIR, FMC_NWAIT, I3C2_SCL, OCTOSPI1_IO5, SDMMC1_D6, DCMI_D0/PSSI_D0 |
| 38 | PC7 | I/O | FT_h | TRGIO, TIM3_CH2, TIM8_CH2, I2S3_MCK, USART6_RX, SDMMC1_D123DIR, FMC_NE1, I3C2_SDA, OCTOSPI1_IO6, SDMMC1_D7, DCMI_D1/PSSI_D1 |
| 39 | PC8 | I/O | FT_h | TRACED1, TIM3_CH3, TIM8_CH3, USART6_CK, UART5_RTS, FMC_NE2/FMC_NCE, FMC_INT, FMC_ALE, SDMMC1_D0, DCMI_D2/PSSI_D2 |
| 40 | PC9 | I/O | FT_fh | MCO2, TIM3_CH4, TIM8_CH4, I2C3_SDA, AUDIOCLK, UART5_CTS, OCTOSPI1_IO0, FMC_CLE, SDMMC1_D1, DCMI_D3/PSSI_D3, UCPD1_DB2 |
| 41 | PA8 | I/O | FT_fh | MCO1, TIM1_CH1, TIM8_BKIN2, I2C3_SCL, SPI1_RDY, SPI4_MOSI, USART1_CK, I3C2_SCL, USB_SOF, FMC_NOE, DCMI_D3/PSSI_D3 |
| 42 | PA9 | I/O | FT_h | TIM1_CH2, LPUART1_TX, I2C3_SMBA, SPI2_SCK/I2S2_CK, USART1_TX, FMC_NWE, DCMI_D0/PSSI_D0, UCPD1_DB1 |
| 43 | PA10 | I/O | FT_h | TIM1_CH3, LPUART1_RX, LPTIM2_IN2, UCPD1_FRSTX, USART1_RX, FDCAN2_TX, SDMMC1_D0, DCMI_D1/PSSI_D1 |
| 44 | PA11 | I/O | FT_u | TIM1_CH4, LPUART1_CTS, SPI2_NSS/I2S2_WS, UART4_RX, USART1_CTS/NSS, FDCAN1_RX, USB_DM |
| 45 | PA12 | I/O | FT_u | TIM1_ETR, LPUART1_RTS, SPI2_SCK/I2S2_CK, UART4_TX, USART1_RTS, FDCAN1_TX, USB_DP |
| 46 | PA13/JTMS/SWDIO | I/O | FT | JTMS/SWDIO |
| 47 | VSS | S | - | Digital ground |
| 48 | VDD | S | - | Digital supply |
| 49 | PA14/JTCK/SWCLK | I/O | FT | JTCK/SWCLK |
| 50 | PA15/JTDI | I/O | FT | JTDI, TIM2_CH1/ETR, HDMI_CEC, SPI1_NSS/I2S1_WS, SPI3_NSS/I2S3_WS, USART1_TX, UART4_RTS, OCTOSPI1_NCS, FMC_NBL1, DCMI_D11/PSSI_D11 |
| 51 | PC10 | I/O | FT_h | I3C2_SCL, SPI3_SCK/I2S3_CK, USART3_TX, UART4_TX, OCTOSPI1_IO1, SDMMC1_D2, DCMI_D8/PSSI_D8 |
| 52 | PC11 | I/O | FT_h | I3C2_SDA, SPI3_MISO/I2S3_SDI, USART3_RX, UART4_RX, OCTOSPI1_NCS, SDMMC1_D3, DCMI_D4/PSSI_D4 |
| 53 | PC12 | I/O | FT_h | TRACED3, TIM15_CH1, LPTIM2_CH2, SPI3_MOSI/I2S3_SDO, USART3_CK, UART5_TX, SDMMC1_CK, DCMI_D9/PSSI_D9 |
| 54 | PD2 | I/O | FT_h | TRACED2, TIM3_ETR, TIM15_BKIN, UART5_RX, SDMMC1_CMD, DCMI_D11/PSSI_D11, WKUP7 |
| 55 | PB3/JTDO/TRACESWO | I/O | FT_h | JTDO/TRACESWO, TIM2_CH2, I3C2_SCL, I2C2_SDA, SPI1_SCK/I2S1_CK, SPI3_SCK/I2S3_CK, LPUART1_TX, FDCAN2_TX, CRS_SYNC, UART5_TX |
| 56 | PB4/NJTRST | I/O | FT_h | NJTRST, TIM3_CH1, OCTOSPI1_CLK, LPTIM1_CH2, SPI1_MISO/I2S1_SDI, SPI3_MISO/I2S3_SDI, SPI2_NSS/I2S2_WS, I2C3_SDA, I3C2_SDA, DCMI_D7/PSSI_D7 |
| 57 | PB5 | I/O | FT_h | TIM3_CH2, OCTOSPI1_NCLK, I2C1_SMBA, SPI1_MOSI/I2S1_SDO, USART6_TX, SPI3_MOSI/I2S3_SDO, FDCAN2_RX, I3C2_SCL, DCMI_D10/PSSI_D10, UART5_RX |
| 58 | PB6 | I/O | FT_f | TIM4_CH1, I3C1_SCL, I2C1_SCL, HDMI_CEC, USART6_RX, USART1_TX, LPUART1_TX, FDCAN2_TX, OCTOSPI1_NCS, DCMI_D5/PSSI_D5, UART5_TX |
| 59 | PB7 | I/O | FT_fa | TIM4_CH2, I3C1_SDA, I2C1_SDA, SPI4_MISO, USART6_CTS/NSS, USART1_RX, LPUART1_RX, FDCAN1_TX, FMC_NL, DCMI_VSYNC/PSSI_RDY, WKUP5 |
| 60 | BOOT0 | I | B | Boot selection input |
| 61 | PB8 | I/O | FT_fsh | TIM4_CH3, I3C1_SCL, I2C1_SCL, SPI4_RDY, SPI3_NSS/I2S3_WS, SDMMC1_CKIN, UART4_RX, FDCAN1_RX, SDMMC1_D4, DCMI_D6/PSSI_D6 |
| 62 | VCAP | S | - | Regulator capacitor |
| 63 | VSS | S | - | Digital ground |
| 64 | VDD | S | - | Digital supply |

## 7. 设计注意点

- `PC13/PC14/PC15` 由 backup domain 相关电源开关供电，输出能力受限。数据手册提示作为 GPIO 输出时速度不应超过 2 MHz，负载最大 30 pF，不建议用作电流源驱动 LED。
- `PA13/PA14/PA15/PB3/PB4` 与 JTAG/SWD 调试相关；复用前要确认调试接口保留策略。
- `PA11/PA12` 是 USB FS 的 `USB_DM/USB_DP`。
- `PB13/PB14` 是 UCPD `CC1/CC2`。
- `BOOT0` 是独立输入脚，量产设计需按启动策略固定或可配置。
- `VCAP` 两个脚必须按 ST 参考设计接电容；不要作为普通供电脚使用。
- 虽然 pin definition 中部分脚列出了 FMC 相关复用名，但 STM32H523RE/LQFP64 的器件资源表不支持 FMC 外部存储控制器，使用外部并行存储时应选择 100 pins 及以上封装型号。
