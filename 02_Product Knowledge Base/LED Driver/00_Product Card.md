# LED Driver 产品卡

资料来源：`../2025Q4晶丰明源选型手册EN (1).pdf`。

## 一句话定位

LED Driver 产品线覆盖非调光、调光、CCT、线性驱动、Ripple Remover、Buck/Flyback/Boost CC/CV、智能面板和两线无零火等照明应用。

## 产品族快速索引

| 产品族 | 代表型号 | 第一轮筛选参数 | 初步定位 |
|---|---|---|---|
| AC/DC Non-isolated Low PF | BP2863X/XJ/XK、BP2861X/XJ、BP2821XK、BP2866XJ、BP2868FN、BP2826FK、BP2867XJ、BP2862XS、BP2872XS/XD、BP2870AS/D | 封装、Rds-on、Vds、OTP、OVP、Iout/Pout | 非隔离低 PF LED 驱动 |
| AC/DC Non-isolated Low PF with integrated MOSFET | BP3166XS/XH、BP3167XH、BP3336DBL、BP3186CB/DB、BP3187DB/ED/EB、BP3332EB、BP3182EB/ED、BP3337DB/EB、BP3189B | MOS、Vds、Flicker free、OVP、Pout | 集成 MOS 非隔离 LED 驱动 |
| AC/DC Non-isolated High PF | BP2364DN、BP2366DN/EN、BP2367EN、BP2329AJ、BP2362BH/CH/EH/GH/JHL、BP2373B/CR | No VCC/No COMP、Rds-on、Vds、CS、Iout | 高 PF 非隔离方案 |
| AC/DC Isolated High PF | BP3336B、BP3336D、BP3339 | Rds-on、Vds、Flyback/Buck-boost、保护、Pout | 隔离高 PF LED 驱动 |
| Linear Driver | BP5356HA/HB、BP5336HC/HD/H、BP5358H、BP5218AS/E/EC/FCL/ECL、BP5212AS、BP5228DS/FE、BP5151DK/DH、BP5131JA/HC、BP5116AJ/DL、BP5118GH、BP5133HC、BP5138XJ | 分段数、耐压、过温调节、单颗功率、最大电流 | 线性恒流/分段线性驱动 |
| Current Rippler Remover | BP5659B、BP5628C、BP5659A | OVP、Flick-Free、电流能力 | 去纹波/低频闪控制 |
| Buck/Flyback CC/CV | BP2506B/D/F、BP2509、BP2513DP、BP2516FP、BP2519、BP3519、BP3526GB、BP3529B、BP3527E、BP3537E、BP3536D/G、BP3539、BP3599、BP3619 | PF、Max Current、Max Power、MOS、Topology | LED/电源 CC/CV |
| BOOST CC/CV | BP2636B/CL/CGL/CN/C/CG/D/DG、BP2639A、BP2630G、BP2628/A/D、BP2638、BP2616B/C/CL/E、BP2618 | Pout、MOS、CC/CV | Boost 恒压/恒流 |
| Standby Power Supply | BP6526B、BP2571BC/DC、BP8521C、BP8522D、BP8501CH、BP2525AHL/B/CH/D/F、BP2522B/D/F、BP2523B/CH、BP8519C、BP8516F、BP2506 系列 | PF、拓扑、输出、电流、MOS、低待机 | 低待机辅助电源 |
| Non-isolated PWM Dimming | BP2881B/D、BP2886B/D/F、BP2887F/G、BP2878K、BP2956XS、BP2958XE/X、BP2316CK、BP2306CK/HK、BP2308 | PF、拓扑、功率、MOS、PWM/Analog | 非隔离 PWM 调光 |
| Linear PWM Dimming | BP5712E、BP5711EJ/FJ、BP5772D、BP5778EK/EJ、BP1638CJ、BP1658CJ、BP5758D、BP5768D | 通道数、MOS BV、DIM Mode、I2C/PWM/Analog | 线性 PWM/CCT/RGB 调光 |
| DC-DC PWM Dimming | BP1618、BP1386、BP1389、BP1808A、BP1808、BP1371、BP1360、BP1362 | 输入、输出、拓扑、Analog/PWM | DC/DC LED 调光 |
| 0-10V/DALI Dimming | BP3378AD、BP3176BF、BP3177DG、BP3179E/D、BP2879DB/E、BP5011、BP5001、BP5001D、BP5016 | 调光协议、拓扑、功率、MOS | 工程照明调光 |
| TRIAC Dimming | BP5176GB+GC、BP5177GB+GC、BP5188GC/GCL/GL/GSN、BP5178GC/GCL/GS/BC/BCH/BCL、BP5132HC、BP3276/3278/3296/3286/3287/3288 系列 | 拓扑、PF、MOS、Pout、过温 | 可控硅调光 |
| CCT / Smart Panel / Two-wire | S4422B、S4525S、S4523B/RB、BP5828CJ/CH、S4120MB、S4225MB、S4226MB、S4512MB、S4165M、S4723MB、S4223MD、BP5926A/D、BP5936D、BP5929、BP2535C、BP8005、BP8009 | CCT 逻辑、记忆、无零火、待机、负载 | 色温控制、智能开关、两线无零火 |

## 选型抓手

- 先判断应用：普通照明、电源 CC/CV、工程调光、CCT、智能面板、两线无零火。
- 再判断拓扑：Buck、Boost、Buck-Boost、Flyback、Linear、TRIAC。
- 再提取硬参数：输入范围、输出功率/电流、MOS BV/Rds-on、封装、调光接口、PF、频闪要求、保护功能。
- 对客户替代需求，必须核对调光兼容性、EMI、PF/THD、频闪、温升、封装和外围 BOM。

## 待补充

- 按照“非调光/调光/CCT/智能面板”拆分更详细产品卡。
- 建立 LED Driver Parameter Matrix。
- 将常见竞品品牌和替代表补入 `04_Competitor and Replacement`。

