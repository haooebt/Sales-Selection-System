# LKS45x 产品卡

## 一句话定位

192 MHz、256 KB Flash、40 KB RAM 的高资源电机控制 MCU，面向较复杂电机控制、高 ADC/COMP/OPA 资源和竞品替代需求。

## 关键资源

| 项目 | 范围 |
|---|---|
| 型号数 | 10 |
| 主频 | 192 MHz |
| Flash | 256 KB |
| RAM | 40 KB |
| ADC 通道 | 15-27 |
| DAC | 12bitx2 |
| COMP | 6 |
| COMP Ch. | 15-24 |
| OPA | 2-6 |
| Hall | 3Phasex2 |
| 通讯 | SPI 2、IIC 2、UART 3 |
| CAN | 除 `LKS32MC454CCT8` 外，其余表内型号支持 |
| QEP | 4 |
| Gate driver | `LKS32MC452FPCT8` 内置 6N，其余表内型号无 |
| 封装 | LQFP100、LQFP80、LQFP64、TQFP48、QFN52 |

## 初步适合场景

- 高性能电机控制。
- 双三相或高模拟资源需求项目。
- 需要 CAN/QEP、较多 ADC/COMP/OPA 的项目。
- 竞品替代中需要较高资源余量时优先考虑。

## 初步不适合场景

- 极低成本项目。
- 小 Flash/RAM 足够的简单电机控制。
- 需要内置 gate driver 且封装/资源不匹配时，需要改看 LKS03x/LKS05x/LKS07x/LKS08x 或外置 driver。

## 初步替代关系

- 同封装普通版和 `L/5V Supply` 版可作为优先互看对象，例如 `LKS32MC455RCT8` 与 `LKS32MC455LRCT8`。
- LQFP64 内部型号之间不能仅凭封装互替，需要逐项核对 ADC/COMP Ch./OPA 和是否 5V Supply。

## 相关资料

- `LKS45系列.xlsx`
- `LKS32MC45x_DS_v1.58.pdf`
- `LKS32MC45x_UM_v1.72.pdf`
- `LKS32MC45x_ER_v1.1.pdf`
- `LKS32MC45x_6N_DS_v1.04.pdf`

