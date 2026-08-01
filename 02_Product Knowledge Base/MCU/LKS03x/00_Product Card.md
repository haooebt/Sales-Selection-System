# LKS03x 产品卡

## 一句话定位

48 MHz、32 KB Flash、4 KB RAM 的入门级电机控制 MCU，覆盖大量小封装，部分型号内置 6N 或 3P3N gate driver。

## 关键资源

| 项目 | 范围 |
|---|---|
| 型号数 | 27 |
| 主频 | 48 MHz |
| Flash | 32 KB |
| RAM | 4 KB |
| ADC 通道 | 5-10 |
| DAC | 8BITx1 |
| COMP | 2 |
| OPA | 1-3 |
| 通讯 | SPI/IIC/UART 各 1 |
| CAN/QEP | 无 |
| Gate driver | 6N / 3P3N / 无 |
| 封装 | LQFP48L、DFN48L、QFN40L、QFN32L、SOP16L、SSOP24L、QFN24L、TSSOP20L 等 |

## 初步适合场景

- 低成本三相电机控制。
- 小封装、外围器件少、需要内置 gate driver 的项目。
- 简单 Hall/无传感电机控制。

## 初步不适合场景

- 需要 CAN/QEP 的项目。
- 代码量或算法复杂度较高的项目。
- 需要较大 RAM/Flash 余量的项目。

## 后续待补

- 内置 gate driver 型号的电流/供电范围需要核对 datasheet。
- 小封装 pinout 和 ADC/OPA/COMP 可用性需要按型号细分。

