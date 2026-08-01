# DC/DC 产品卡

资料来源：`../2025Q4晶丰明源选型手册EN (1).pdf`。

## 一句话定位

DC/DC 产品线覆盖高性能多相控制器、DrMOS、eFuse/Hotswap 和集成 Buck Converter，偏服务器、个人电脑、基站、网通、计算电源和高电流 POL 场景。

## 产品族快速索引

| 产品族 | 代表型号 | 第一轮筛选参数 | 初步定位 |
|---|---|---|---|
| Controller | BPD93004E、BPD93010E、BPD92028/A、BPD92032/A、BPD95036A、BPD95025、BPD93136、BPD93204、BPD95028、BPD95032、BPD96028、BPD96032、BPD96058 | Output Rail、Phases、VCC、FSW、CS Mode、Interface、Package | 多相数字/模拟控制器，支持 PMBUS、PWMVID、AVSBus、SVI3、HSVI 等接口 |
| DrMOS | BPD80350E、BPD80370E、BPD80590、BPD80690E、BPD80750E | Vin、Iout、PWM Logic、IMON、TMON、Package | 50A/70A/90A 等大电流功率级 |
| eFuse/Hotswap | BPD20350A、BPD20550 | VDD、VIN、Iout、Rdson、Protection、PMBUS | 50A 级保护/热插拔，BPD20550 支持 I2C/PMBus |
| Converter | BPD60312/A、BPD60306/A、BPD60320/A、BPD50338 | Vin、Vout、Iout、FSW、Power Good、Soft Start、COT、Package | 集成 Buck Converter，3-16V 或 4.5-18V 输入，6A/12A/20A/3A 等档位 |

## 选型抓手

### Controller

优先提取：

- 输出轨数量：1 rail、2 rail、3 rail。
- 相数能力：4/8/10/12/16 相等。
- 接口：PMBUS、PWMVID、AVSBus、SVI3、HSVI。
- 电流采样方式：DCR、DrMOS IMON、LS Ron、IMON。
- 封装：TQFN/QFN/TLGA 及尺寸。

### DrMOS

优先提取：

- Vin operating range。
- 最大输出电流：50A、70A、90A。
- 是否有 IMON/TMON。
- PWM logic 3.3V/5V。
- 封装尺寸。

### eFuse/Hotswap

优先提取：

- VIN operating range。
- Iout max。
- Rdson。
- 保护功能：VIN OVLO、OCP、FOCP、OTP。
- 是否支持 I2C/PMBus。

### Converter

优先提取：

- Vin min/max。
- Vout 范围。
- Iout max。
- 开关频率档位。
- 是否有 Power Good、Soft Start、COT。
- 内部/外部 Bias。

## 竞品替代注意事项

- DC/DC 替代不能只看输出电流，还要核对控制接口、相数、采样模式、PMBus/VID 协议、保护策略和封装。
- 多相 Controller 替代需要确认客户平台 CPU/GPU/ASIC 的电源协议要求。
- DrMOS 替代需要核对 pinout、封装热阻、驱动逻辑、IMON/TMON 标定和开关频率。
- eFuse/Hotswap 替代需要核对故障响应方式、PMBus/I2C 需求和热插拔时序。

## 待补充

- 从 datasheet 提取各型号 pinout、热性能、保护阈值。
- 建立 DC/DC Parameter Matrix。
- 区分计算电源、服务器、PC、基站/网通等具体应用入口。

