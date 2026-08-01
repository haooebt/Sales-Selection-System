# Product Quick Locator

本文件是后续处理竞品替代、参数选型和方案推荐时的快速定位入口。

目标不是替代 datasheet，而是帮助 agent 在收到竞品规格书后，快速判断应该进入哪个产品线、读取哪些结构化资料、用哪些关键参数做第一轮筛选。

## 使用顺序

1. 先判断竞品类别：ACDC、MCU、IPM、Gate Driver、其他。
2. 读取本文件中对应产品线的“首选入口”。
3. 按“第一轮筛选参数”缩小候选范围。
4. 再读取具体产品卡、参数矩阵、datasheet 或方案资料。
5. 输出替代建议时，必须标注替代等级和风险点。

如果竞品来自大家电/家居应用，同步读取：

- `03_Solutions and Applications/Home Appliance/Home Appliance Solution Map.md`

## 产品线快速入口

| 竞品类别 | 我司产品线 | 首选入口 | 辅助入口 | 第一轮筛选参数 |
|---|---|---|---|---|
| MCU | MCU | `MCU/MCU Family Overview.md` | `Product Line Index.md` | 内核/主频、Flash/RAM、封装、ADC、PWM/Timer、OPA/COMP、通讯接口、工作电压、温度 |
| IPM | IPM | `IPM/00_Product Card.md` | `IPM/IPM.xlsx` | 耐压、电流、封装、桥臂结构、驱动方式、保护功能、应用功率段 |
| Gate Driver | Driver | `Driver/00_Product Card.md` | `Driver/Gate Driver.xlsx` | 通道数、驱动电流、耐压、隔离/非隔离、自举、保护功能、封装 |
| ACDC | ACDC | `ACDC/00_Intake Notes.md` | 具体 datasheet | 拓扑、功率段、集成 MOS/外置 MOS、启动方式、保护功能、封装、待机功耗 |
| DC/DC | DC/DC | `DC-DC/00_Product Card.md` | `2025Q4 Product Catalog Digest.md` | 输入/输出电压、电流/相数、拓扑、频率、接口、封装、保护 |
| LED Driver | LED Driver | `LED Driver/00_Product Card.md` | `2025Q4 Product Catalog Digest.md` | 拓扑、功率、电流精度、调光方式、PF/THD、频闪、封装 |
| Power Device | Power / Power Device | `Power Device/00_Product Card.md` | `2025Q4 Product Catalog Digest.md` | MOS/IGBT/Power、耐压、Rds-on/Vce(sat)、输出电流、封装 |

## 应用场景快速入口

| 应用场景 | 优先读取 | 典型产品线 |
|---|---|---|
| 家电辅助电源 | `03_Solutions and Applications/Home Appliance/Home Appliance Solution Map.md` | BPA ACDC |
| 空调外机/商用空调 | `03_Solutions and Applications/Home Appliance/Home Appliance Solution Map.md` | LKS32MC45x、LKS32MC07x、LKS561、BPA8618PD/BPA86526P、IPM |
| 洗衣机/干衣机 | `03_Solutions and Applications/Home Appliance/Home Appliance Solution Map.md` | LKS32MC08x/07x/45x、BPA861x/BPA8620/BPA8652x/BPA86015G |
| 冰箱压缩机 | `03_Solutions and Applications/Home Appliance/Home Appliance Solution Map.md` | LKS32MC03x/07x/08x、BP6901A、BPA8505、IPM |
| 油烟机/洗碗机/强排风机/水泵 | `03_Solutions and Applications/Home Appliance/Home Appliance Solution Map.md` | LKS32MC03x/07x、LKS563、LKS1D5007D、BPA8504D/BP86213 |

## 类别判断线索

### ACDC

常见关键词：

- AC/DC、offline、flyback、buck、buck-boost
- PWM controller、primary side regulation、secondary side regulation
- integrated MOSFET、HV startup、VCC、FB、CS、DRV
- OVP、OCP、OTP、SCP、brown-in、brown-out

优先关注：

- 输入电压范围
- 输出功率和拓扑
- 是否集成高压 MOS
- 封装和散热
- 保护功能
- 待机功耗和能效要求

家电 BPA 资料中的常见替代入口：

- Buck/Buck-Boost：BPA8504D、BPA8505D/P、BPA8506D、BPA85906D、BPA85963DH/M、BPA85968D/P、BPA86015G。
- 隔离 SSR：BPA8616D/PD、BPA8618D/PD、BPA8619P、BPA8620PD、BPA86526P、BPA86528D。
- 微波炉电源：BPA8604P/PE/D、BPA86533G、BPA86536GW。
- 具体功率和 P2P 线索见 `Home Appliance/Home Appliance Solution Map.md`。

### MCU

常见关键词：

- Cortex-M0/M3/M4/M33、RISC-V、8051
- Flash、SRAM、ADC、PWM、Timer、UART、SPI、I2C、CAN、USB
- OPA、COMP、DAC、QEP、PGA
- LQFP、QFN、TSSOP、SOP

优先关注：

- 主频和内核
- Flash/RAM
- 封装和 pin 数
- ADC 精度、通道数、采样速度
- PWM/Timer 资源
- 电机控制相关外设：OPA、COMP、QEP、死区控制、刹车保护
- 通讯接口
- 软件迁移难度

家电应用快速判断：

- 高性能/PFC/多电机：优先看 LKS32MC45x。
- 中端主流家电电机：优先看 LKS32MC07x / MC09x。
- 滚筒洗衣机、冰箱等进阶方案：优先看 LKS32MC08x。
- 风机、水泵、油烟机、洗碗机、低成本压缩机：优先看 LKS32MC03x。

### IPM

常见关键词：

- Intelligent Power Module、IPM
- 3-phase inverter、P/N bridge、IGBT/MOSFET
- bootstrap、HVIC、LVIC、FO、VOT、VTS
- UVLO、OCP、OTP、short circuit protection

优先关注：

- 耐压
- 连续/峰值电流
- 封装和尺寸
- 散热方式
- 保护功能
- 是否适合目标应用功率段

白电 IPM 快速线索：

- 600V/3A 工业级：LKS1M36003。
- 600V/2A~3A 自供电空调内风机方向：LKS1M56002H、LKS1M56003H。
- 700V SiC 自供电：LKS1S57008、LKS1S57009、LKS1S57004。
- 集成自举二极管、3mm 爬电距离：LKS1S67008、LKS1S67009。

### Gate Driver

常见关键词：

- gate driver、half bridge driver、high-side low-side driver
- bootstrap、HO/LO、HIN/LIN、VBS、VS
- source/sink current、dead time、UVLO

优先关注：

- 半桥/三相/单通道
- 高低侧耐压
- 驱动峰值电流
- 输入逻辑
- 保护功能
- 封装兼容性

家电应用线索：

- 空调外机/商用空调 PFC 预驱：资料中出现 LKS561。
- 燃热强排风机/水泵分立方案：LKS563。
- 冰箱压缩机高压方案：BP6901A。

2025Q4 英文选型手册新增/确认：

- BP6901A、BP6903A、BP6904A：600V half-bridge gate driver，IO+ 0.21A / IO- 0.32A。
- BP6911、BP6914：600V half-bridge gate driver，IO+ 0.45A / IO- 1A。
- LKS571：200V half-bridge gate driver，IO+ 1.2A / IO- 1.5A。

### DC/DC

常见关键词：

- multiphase controller、DrMOS、eFuse、Hotswap、Buck Converter
- PMBUS、PWMVID、AVSBus、SVI3、HSVI
- IMON、TMON、DCR、LS Ron

优先关注：

- Controller：输出轨、相数、接口协议、电流采样方式、封装。
- DrMOS：Vin、Iout、PWM logic、IMON/TMON、热性能和封装。
- eFuse/Hotswap：VIN、Iout、Rdson、保护功能、I2C/PMBus。
- Converter：Vin/Vout、Iout、开关频率、Power Good、Soft Start、COT。

### LED Driver

常见关键词：

- LED driver、PWM dimming、0-10V、DALI、TRIAC、CCT、Linear、Ripple Remover
- Buck、Boost、Buck-Boost、Flyback、CC/CV、High PF、Low PF

优先关注：

- 应用类型：非调光、PWM/Analog 调光、0-10V/DALI、TRIAC、CCT、智能面板、两线无零火。
- 拓扑和功率：Buck、Boost、Buck-Boost、Flyback、Linear。
- 输出电流/功率、MOS BV/Rds-on、PF/THD、频闪、封装。
- 调光兼容性、EMI、温升、外围 BOM。

## 产品定位卡应包含的内容

每个产品线或产品系列都应尽量补齐以下内容：

| 模块 | 内容 |
|---|---|
| 基本定位 | 产品线、系列、目标应用、主打卖点 |
| 型号矩阵 | 型号、封装、关键资源、推荐应用、状态 |
| 关键参数 | 与竞品替代最相关的参数，而不是完整 datasheet 摘抄 |
| 选型规则 | 什么需求优先选哪个型号，什么情况不要选 |
| 竞品映射 | 常见竞品品牌/型号，以及可替代等级 |
| 风险点 | pinout、软件迁移、热设计、认证、供货状态、成本 |
| 销售话术 | 面向客户可以表达的优势、限制和待确认点 |
| 资料入口 | datasheet、选型表、产品介绍、方案卡链接 |

## 后续资料入库要求

当用户提供我司产品规格书、选型表或方案资料时，agent 应更新：

- 对应产品线的产品卡
- 本文件的产品线入口或类别判断规则
- `Product Line Index.md`
- 若包含型号参数矩阵，同步更新或新建参数矩阵说明
- 若包含应用场景，同步更新 `03_Solutions and Applications`
- 若包含竞品信息，同步更新 `04_Competitor and Replacement`
