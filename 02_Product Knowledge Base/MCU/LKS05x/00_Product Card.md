# LKS05x 产品卡

## 一句话定位

96 MHz、32 KB Flash 的低成本电机控制 MCU，具备 12-bit DAC，部分型号内置 6N 或 3P3N gate driver。

## 关键资源

| 项目 | 范围 |
|---|---|
| 型号数 | 9 |
| 主频 | 96 MHz |
| Flash | 32 KB |
| RAM | 2.5 KB |
| ADC 通道 | 4-12 |
| DAC | 12BITx1 |
| COMP | 2 |
| OPA | 1-2 |
| 通讯 | SPI 1、IIC 1、UART 2 |
| CAN/QEP | 无 |
| Gate driver | 6N / 3P3N / 无 |
| 封装 | TQFP48、QFN40、QFN32、SSOP24、SOP16L |

## 初步适合场景

- 需要 96 MHz 但资源需求不高的低成本电机控制。
- 小家电、风机、水泵等成本敏感项目。
- 需要 6N/3P3N 集成驱动的小型方案。

## 初步不适合场景

- RAM 需求较高的复杂控制。
- 需要 CAN/QEP 的项目。

## 后续待补

- 内置 gate driver 电流字段需要核对原始 Excel 显示和 datasheet。
- 与 LKS03x/LKS08x 的成本和性能边界需要补充。

