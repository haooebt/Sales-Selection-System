# LKS07x 产品卡

## 一句话定位

96 MHz、64/128 KB Flash、12 KB RAM 的中端电机控制 MCU，QEP 覆盖完整，部分型号支持 CAN 和内置 gate driver。

## 关键资源

| 项目 | 范围 |
|---|---|
| 型号数 | 14 |
| 主频 | 96 MHz |
| Flash | 64/128 KB |
| RAM | 12 KB |
| ADC 通道 | 4-14 |
| DAC | 12bitx2 |
| COMP | 2-3 |
| OPA | 1-4 |
| 通讯 | SPI 1、IIC 1、UART 2 |
| CAN | 部分型号支持 |
| QEP | 全部支持 |
| Gate driver | 6N / 3P3N / 无 |
| 封装 | LQFP64、TQFP48、QFN40、QFN32、LQFP32、QFN20、QFN52、SSOP24 |

## 初步适合场景

- 带编码器/位置反馈的电机控制项目。
- 需要 CAN 的中端电机控制项目。
- 需要 64/128 KB Flash 和 12 KB RAM 余量的项目。
- 有集成 gate driver 需求的中端方案。

## 初步不适合场景

- 需要 192 MHz 或 256 KB Flash 的高性能项目，可转 LKS45x。
- 极低成本、小封装简单控制，可转 LKS03x/LKS05x。

## 特别注意

- 目录中有 `LKS32MC07x-MCU上电时刻IO电压异常抬升问题说明.pdf`，涉及上电时刻 IO 电压异常抬升，推荐前应阅读并确认应用风险。

