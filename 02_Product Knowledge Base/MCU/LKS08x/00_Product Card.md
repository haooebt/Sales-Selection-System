# LKS08x 产品卡

## 一句话定位

96 MHz、32/64 KB Flash、8 KB RAM 的小中资源电机控制 MCU，封装覆盖广，部分型号支持 CAN/QEP 和内置 gate driver。

## 关键资源

| 项目 | 范围 |
|---|---|
| 型号数 | 14 |
| 主频 | 96 MHz |
| Flash | 32/64 KB |
| RAM | 8 KB |
| ADC 通道 | 5-13 |
| DAC | 12BITx1 |
| COMP | 2 |
| OPA | 2-4 |
| 通讯 | SPI 1、IIC 1、UART 1-2 |
| CAN | 部分型号支持 |
| QEP | 部分型号支持 |
| Gate driver | 6N / 3P3N / 无 |
| 封装 | LQFP64、TQFP48、QFN52、QFN43L、QFN40、QFN32、SSOP24 |

## 初步适合场景

- 需要比 LKS05x 更大 RAM，但不一定需要 LKS07x 128 KB Flash 的项目。
- 封装选择多、资源中等的电机控制项目。
- 需要部分 CAN/QEP 能力的小中型项目。

## 初步不适合场景

- 需要高 ADC/COMP/OPA 资源或 256 KB Flash 的项目。
- 需要确定全系列 QEP/CAN 覆盖的项目，需逐型号确认。

## 后续待补

- 建议和 LKS07x 做“同为 96 MHz 中端系列”的边界说明。

