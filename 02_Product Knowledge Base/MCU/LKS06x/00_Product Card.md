# LKS06x 产品卡

## 一句话定位

96 MHz、32 KB Flash、4 KB RAM 的小中资源电机控制 MCU，目前表内型号较少，可作为 LKS05x 与 LKS08x 之间的补充。

## 关键资源

| 项目 | 范围 |
|---|---|
| 型号数 | 3 |
| 主频 | 96 MHz |
| Flash | 32 KB |
| RAM | 4 KB |
| ADC 通道 | 12 |
| DAC | 12BITx1 |
| COMP | 2 |
| OPA | 3-4 |
| 通讯 | SPI 1、IIC 1、UART 2 |
| CAN/QEP | 无 |
| 封装 | TQFP48、QFN32、QFN52L |

## 初步适合场景

- 需要 12 路 ADC、较多 OPA，但不需要 CAN/QEP 的项目。
- 对 RAM 比 LKS05x 略高要求的 96 MHz 电机控制项目。

## 初步不适合场景

- 需要 CAN/QEP 或更大 Flash 的项目。
- 资料不充分时，不建议作为首推，需先核对 datasheet。

## 数据注意点

- `LKS06系列.xlsx` 中有一个 `Gate driver supply (V)` 字段读取为 `45955`，疑似 Excel 格式问题，正式使用前需要核对原表。

