## 概述

S713XB系列芯片是一款高性能恒压恒流原边反馈控制器，适用于各种低功耗AC/DC充电器和适配器应用场合。该控制器采用原边反馈控制机制，无需光耦和TL431即可以实现高精度的电压输出。

在恒流控制模式中，可以通过改变与CS管脚连接的电阻 $R_{CS}$ 阻值来调节输出电流大小。在恒压控制模式下，S713XB使用了多种工作模式以得到高转换效率和小的音频异响。S713XB内置输出线损补偿，并可以通过修改反馈电阻阻值调整补偿比例，以达到适应各种不同输出导线线损要求，可以有效的补偿输出电流在输出线上引起的线损压降。在恒流模式和重负载下，S713XB工作于PFM，而在轻载和中度负载下同时减小Ipeak和工作频率，以优化转换效率，避免音频异响。

S713XB具有多重的保护功能，包括输出开路、短路保护，VCC过压保护，过温保护等。

S713XB采用SOP-7封装。

![](./素材/images/S713XB_CN_DS_Rev_1.0/2af7693eec97d6f24315830cc19e061bac91bdb9602a942b4ed818fb5bbeca0c.jpg)  
SOP-7 封装

## 典型应用

## 特点

$\leqslant$ 75mW 待机功耗，满足六级能效要求  
■ 准谐振工作机制，提高系统效率  
■ 峰值电流渐变抖动改善 EMI  
内置功率三极管  
■ 恒压、恒流精度高  
- 输出线损补偿可调  
内置输入线电压补偿  
- 输出过压、短路保护  
■ VCC 电压过压保护  
■ 过温保护

## 应用范围

■ 手机、无绳电话、PDA、MP3 和其它便携式设备等的适配器、充电器  
LED驱动电源  
线性电压和 RCC 开关电源升级换代  
■ PC、TV 等设备使用的辅助电源

![](./素材/images/S713XB_CN_DS_Rev_1.0/e1c4ab614e0a4c64e591474890c67402aba38a867347fb2b490a740226a93091.jpg)

图 1 S713XB 典型应用图

定购信息

<table><tr><td>定购型号</td><td>封装</td><td>温度范围</td><td>包装形式</td><td>打印</td></tr><tr><td>S7132B</td><td>SOP7</td><td>-40°C to 105°C</td><td>卷盘4000颗/盘</td><td>S7132BXXXXXXXXXXXXXXXXX</td></tr><tr><td>S7133B</td><td>SOP7</td><td>-40°C to 105°C</td><td>卷盘4000颗/盘</td><td>S7133BXXXXXXXXXXXXXXXXX</td></tr><tr><td>S7134B</td><td>SOP7</td><td>-40°C to 105°C</td><td>卷盘4000颗/盘</td><td>S7134BXXXXXXXXXXXXXXXXX</td></tr></table>

管脚封装  
![](./素材/images/S713XB_CN_DS_Rev_1.0/84fb3c20ae5c2303c867a4d0fed7e37d15d2190344660d497565bee3ab87756c.jpg)

![](./素材/images/S713XB_CN_DS_Rev_1.0/19235d846ea0a93f0dfb35339132b2f827c79bf82c7ae486baf3ef943c6b1af4.jpg)

![](./素材/images/S713XB_CN_DS_Rev_1.0/0990ab8213092426dfc7539c2bcb9f24d8fa234952e5d73fc39665ca7831a99e.jpg)

图 2 封装管脚图  
管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>FB</td><td>反馈电压输入端</td></tr><tr><td>2</td><td>CS</td><td>电流检测管脚</td></tr><tr><td>3</td><td>VCC</td><td>芯片供电脚</td></tr><tr><td>4</td><td>E</td><td>内置三极管发射极</td></tr><tr><td>5、6</td><td>C</td><td>内置三极管集电极</td></tr><tr><td>7</td><td>GND</td><td>芯片地</td></tr></table>

极限参数(注1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td>VCC</td><td>芯片供电脚电压范围</td><td>-0.3~22</td><td>V</td></tr><tr><td>CS</td><td>电流检测脚电压范围</td><td>-0.3~7</td><td>V</td></tr><tr><td>FB</td><td>输入反馈脚电压范围</td><td>-0.3~7</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注2)</td><td>0.45</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>PN结到环境的热阻</td><td>145</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40~150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-40~150</td><td>°C</td></tr></table>

注1：最大极限值是指超出该工作范围，芯片有可能损坏。推荐工作范围是指在该范围内，器件功能正常，但并不完全保证满足个别性能指标。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。  
注2：温度升高最大功耗一定会减小，这也是由 $T_{JMAX}$ 、 $\theta_{JA}$ 和环境温度 $T_A$ 所决定的。最大允许功耗为 $P_{DMAX} = (T_{JMAX} - T_A)/\theta_{JA}$ 或是极限范围给出的数字中比较低的那个值。

推荐输出功率范围

<table><tr><td>产品</td><td>输出功率(85~264Vac)</td></tr><tr><td>S7132B</td><td>5V1A</td></tr><tr><td>S7133B</td><td>5V2A</td></tr><tr><td>S7134B</td><td>5V2.4A</td></tr></table>

电气参数(注3,4)（无特别说明情况下， $V_{CC}=9V,T_{A}=25^{\circ}C$ ）

<table><tr><td>描述</td><td colspan="2">符号</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="8">电源部分</td></tr><tr><td>VCC启动电压</td><td colspan="2">VCC_ON</td><td></td><td></td><td>16</td><td></td><td>V</td></tr><tr><td>VCC欠压保护</td><td colspan="2">VCC_OFF</td><td></td><td>3.9</td><td>4.5</td><td>5.1</td><td>V</td></tr><tr><td>VCC启动电流</td><td colspan="2">ISTART</td><td>VCC_ON-1V</td><td></td><td>2</td><td>5</td><td>uA</td></tr><tr><td>静态电流</td><td colspan="2">ISTANDBY</td><td></td><td></td><td>0.5</td><td></td><td>mA</td></tr><tr><td>VCC过压保护阈值</td><td colspan="2">VCC_OVP</td><td></td><td>18</td><td>20</td><td>22</td><td>V</td></tr><tr><td colspan="8">电流采样部分</td></tr><tr><td>电流检测最大阈值</td><td colspan="2">VREF</td><td></td><td>485</td><td>500</td><td>515</td><td>mV</td></tr><tr><td>前沿消隐时间</td><td colspan="2">TLEB</td><td></td><td></td><td>500</td><td></td><td>ns</td></tr><tr><td colspan="8">FB反馈部分</td></tr><tr><td>FB反馈基准电压</td><td colspan="2">VFB_REF</td><td></td><td>1.98</td><td>2</td><td>2.02</td><td>V</td></tr><tr><td>最大线损补偿电流</td><td colspan="2">ICABLE_max</td><td></td><td></td><td>60</td><td></td><td>uA</td></tr><tr><td>退磁比较电压阈值</td><td colspan="2">VFB_DEM</td><td></td><td></td><td>25</td><td></td><td>mV</td></tr><tr><td>输出短路去抖动时间</td><td colspan="2">TFB_short</td><td></td><td></td><td>70</td><td></td><td>ms</td></tr><tr><td colspan="8">保护功能部分</td></tr><tr><td>FB过压保护电压</td><td colspan="2">VFB_OVP</td><td></td><td></td><td>2.8</td><td></td><td>V</td></tr><tr><td>FB短路保护电压</td><td colspan="2">VFB_SCP</td><td></td><td></td><td>1.2</td><td></td><td>V</td></tr><tr><td>过热保护温度</td><td colspan="2">TSD</td><td></td><td></td><td>150</td><td></td><td>°C</td></tr><tr><td colspan="8">功率管三极管部分</td></tr><tr><td rowspan="3">集电极-基极击穿电压</td><td rowspan="3">VCBO</td><td>S7132B</td><td></td><td>850</td><td></td><td></td><td>V</td></tr><tr><td>S7133B</td><td></td><td>750</td><td></td><td></td><td>V</td></tr><tr><td>S7134B</td><td></td><td>750</td><td></td><td></td><td>V</td></tr><tr><td rowspan="3">最大峰值电流</td><td rowspan="3">IC_max</td><td>S7132B</td><td></td><td></td><td>350</td><td></td><td>mA</td></tr><tr><td>S7133B</td><td></td><td></td><td>650</td><td></td><td>mA</td></tr><tr><td>S7134B</td><td></td><td></td><td>800</td><td></td><td>mA</td></tr></table>

注3：典型参数值为 $25^{\circ} \mathrm{C}$ 下测得的参数标准。  
注4：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。

特性参数温度曲线  
![](./素材/images/S713XB_CN_DS_Rev_1.0/741f7910379f69b3203b6d78a66ee96a87a6315a51a0a7af3d360b62a0f4c12e.jpg)

![](./素材/images/S713XB_CN_DS_Rev_1.0/db661d3184d59cf5ebdae77caa55aeb8b8926cff6c6e94368cf5e9cd1c1439f3.jpg)

![](./素材/images/S713XB_CN_DS_Rev_1.0/f46c65f8c093e534c24ae9f15e5b8dc8e1f98c4430e2e8dcdf8e91c2738d43ed.jpg)

![](./素材/images/S713XB_CN_DS_Rev_1.0/28c0d0132ad5ea03d7fe94bf23814afa226bd440559676064019c6e488f599a9.jpg)

## 内部结构框图

![](./素材/images/S713XB_CN_DS_Rev_1.0/91d7409e373cd416b1f8be97cbb89bb8ebb04b841eb3c2a69b9aa8f4f4eeea24.jpg)

图 3 S713XB 内部结构图

## 功能描述

S713XB 是一款恒压恒流的原边反馈控制芯片，系统工作于断续模式，无需光耦和 TL431 即可以实现高精度的电压输出，适用于充电器和适配器以及其它辅助类电源。S713XB 在恒流模式和重负载下 S713XB 工作于 PFM，而在轻载和中度负载下同时减小峰值电流和工作频率，以优化转换效率，避免音频异响。

## 1、启动

芯片启动电流仅为 2uA，使得系统能使用较大的启动电阻以减小启动电阻的损耗。系统上电后通过启动电阻对VCC的电容进行充电，当VCC电压达到芯片的启动电压，芯片内部控制电路开始工作。输出电压开始上升，当输出电压上升到足够高后，VCC由辅助绕组通过二极管进行供电，在芯片开始工作到辅助绕组开始供电期间，芯片所需电流均由VCC电容直接提供，VCC电压会下降。设计时需要考虑使用足够大的VCC的电容以免在辅助绕组开始供电以前，VCC电压下降到芯片关断电压以下，造成启动失败。

## 2、输出恒流设置

芯片内部采用逐周期检测电感峰值电流，CS 端连接到内部的峰值电流比较器输入端，与内部基准电压进行比较，从而控制功率管开关。可以改变连接 CS 到地的电流检测电阻 $R_{CS}$ 的阻值大小来限定峰值电流并最终调节系统最大输出电流。芯片内置输入线电压补偿功能，使得输出电流基本不随输入电压变化。恒流模式下，电感峰值电流 $I_{pk}$ 为由下式决定：

$$
I _ {p k} = \frac {V _ {R E F}}{R _ {C S}} = \frac {0 . 5}{R _ {C S}}
$$

$R_{CS}$ 为 CS 脚电阻，输出电流由下式决定:

$$
I _ {O} = 0. 2 8 * I _ {p k} * \frac {N _ {P}}{N _ {S}}
$$

其中， $N_{P}$ 时变压器原边绕组匝数， $N_{S}$ 为变压器输出绕组匝数， $I_{pk}$ 为原边电感的峰值电流。

## 3、输出恒压设置

芯片通过采样辅助绕组平台电压，经分压电阻分压后与内部基准比较形成闭环，以调整输出电压。在输出续流管导通期间，副边绕组可以看作是励磁绕组，辅助绕组看作是磁化绕组，辅助绕组电压 $V_{AUX}$ 可以由下述公式获得

$$
V _ {\mathrm{AUX}} = \frac {N _ {\mathrm{AUX}}}{N _ {S}} (V _ {o} + V _ {d})
$$

其中， $V_{O}$ 是输出电压， $V_{a}$ 是续流二极管导通压降， $N_{S}$ 和 $N_{AUX}$ 分别是变压器副边绕组和辅助绕组的匝数。

续流二极管导通压降 $V_{d}$ 大小取决于通过二极管的电流，如果副边的平台电压都是在相同副边电流时刻检测，副边电压和输出电压的差值 $V_{d}$ 是固定值。

![](./素材/images/S713XB_CN_DS_Rev_1.0/e9ec407bf929dadbb76df291f6dabc9d42e1abc4995b13f8d667ee6ca478f63c.jpg)

图 4 辅助绕组电压波形

图 4 为辅助绕组电压波形，通过连接在辅助绕组和 FB 脚之间的分压电阻，系统检测 2/3 Tons（续流二极管导通时间）时间点处的电压，并将此电压和内部 VFB\_REF（典型值 2V）比较，差值通过误差比较器放大，误差放大器输出反映负载情况，控制关断时间，调节输出电压，从而达到恒定的输出电压。输出电压计算公式如下：

$$
V o = \frac {V F B _ {\_ R E F} \times (R _ {F B L} + R _ {F B H})}{R _ {F B L}} \times \frac {N _ {S}}{N _ {A U X}} - V d
$$

其中， $R_{FBL}$ 是 FB 下拉电阻， $R_{FBH}$ 是 FB 上拉电阻。

## 4、电感计算

本芯片开关频率随工作模式和负载情况改变,对于一个工作于 DCM 的 Flyback 系统,其最大工作频率由下式决定:

$$
F _ {m a x} = \frac {2 \times P _ {O \_ M A X}}{\eta \times L _ {P} \times I _ {p k} ^ {2}}
$$

其中： $P_{O\_MAX}$ 是系统最大输出功率；

$\eta$ 为系统转换效率；

$L_{P}$ 为原边电感;

Ipk 为原边电感的峰值电流。

工作频率建议设定在 40\~55kHz 范围，在确定好系统的工作频率 Fmax 之后，即可确定电感的计算公式为：

$$
L _ {P} = \frac {2 \times P _ {O \_ M A X}}{\eta \times F _ {m a x} \times I _ {p k} ^ {2}}
$$

## 5、输出导线线损补偿

为了得到好的负载调整率，S713XB 内置输出导线线损补偿功能。一路与负载电流成反比的电流 ICABLE 由芯片内部产生并从 FB 脚流出，在 FB 分压电阻上产生一个与负载电流成反比的偏置电压用于补偿输出电流在输出线上引起的线损压降。最大补偿比例由下式决定

$$
\frac {\Delta V}{V _ {o u t}} \approx \frac {I _ {c a b l e \_ m a x} \times (R _ {F B L} | | R _ {F B H})}{V _ {F B \_ R E F}} \times 100 \%
$$

例如， $R_{FBL}=2K\Omega$ ， $R_{FBH}=10K\Omega$ ，补偿比例为

$$
\frac {\Delta V}{V _ {o u t}} \approx \frac {60 u A \times (2 K | | 1 0 K)}{2 V} \times 100 \% \approx 5 \%
$$

## 6、输出过压保护及短路保护

当 FB 检测到平台电压达到内部设定的开路保护阈值 2.8V 时，系统进入开路保护。

$$
V _ {O V P} = \frac {2 . 8 \times (R _ {F B L} + R _ {F B H})}{R _ {F B L}} \times \frac {N _ {S}}{N _ {a u x}}
$$

其中， $V_{OVP}$ 是过压保护电压阈值

$$
V _ {S C P} = \frac {1 . 2 \times (R _ {F B L} + R _ {F B H})}{R _ {F B L}} \times \frac {N _ {S}}{N _ {a u x}}
$$

当 FB 检测到平台电压持续 70ms 低于内部设定的短路保护阈值 1.2V 时，系统进入短路保护。

## 7、保护功能

S713XB 内置多种保护功能，包括输出开路/短路保护，VCC 欠压、过压保护，过温保护等。

## 8、PCB 设计

在设计 PCB 时，需要遵循以下原则：

1）VCC 旁路电容尽量靠近芯片 VCC 和 GND 脚。  
2）接到FB的分压电阻必须靠近FB引脚，且节点要远离变压器原边绕组的动点。  
3) 电流采样电阻的功率地线尽可能短,且要和芯片的地线及其它小信号的地线分头接到母线电容的地端。  
4) 减小功率环路的面积，如变压器主级、功率管、母线电容的环路面积，以及变压器副边绕组、整流二极管、输出电容的环路面积，可以减小 EMI 辐射。  
5) 增加 C 引脚的铺铜面积可以提高芯片散热。

## SOP-7 封装框图

SOP7 PACKAGE OUTLINE DIMENSIONS  
![](./素材/images/S713XB_CN_DS_Rev_1.0/e63a3475935e964413482b5364e5ad5179cf8eac95dde67b8a49dbc99d912d4f.jpg)

![](./素材/images/S713XB_CN_DS_Rev_1.0/85f7ac055a395edd92ebe729daceb282199a04c1f1bdc0abe7a2b0da7ae1b661.jpg)

![](./素材/images/S713XB_CN_DS_Rev_1.0/326d17e3cb45c0ddf16a198a95c0dcfcfca43ed84e5066ef3dc0aa364508ca3f.jpg)

<table><tr><td rowspan="2">Symbol</td><td colspan="2">Dimensions in Millimeters</td><td colspan="2">Dimensions in Inches</td></tr><tr><td>Min.</td><td>Max.</td><td>Min.</td><td>Max.</td></tr><tr><td>A</td><td>1.350</td><td>1.750</td><td>0.053</td><td>0.069</td></tr><tr><td>A1</td><td>0.100</td><td>0.250</td><td>0.004</td><td>0.010</td></tr><tr><td>A2</td><td>1.250</td><td>1.650</td><td>0.049</td><td>0.065</td></tr><tr><td>b</td><td>0.33</td><td>0.51</td><td>0.013</td><td>0.020</td></tr><tr><td>c</td><td>0.17</td><td>0.25</td><td>0.007</td><td>0.010</td></tr><tr><td>D</td><td>4.700</td><td>5.100</td><td>0.185</td><td>0.201</td></tr><tr><td>E</td><td>5.800</td><td>6.200</td><td>0.228</td><td>0.244</td></tr><tr><td>E1</td><td>3.700</td><td>4.100</td><td>0.146</td><td>0.161</td></tr><tr><td>e</td><td colspan="2">1.270 (BSC)</td><td colspan="2">0.050 (BSC)</td></tr><tr><td>L</td><td>0.400</td><td>0.800</td><td>0.016</td><td>0.038</td></tr><tr><td>θ</td><td> $0^{\circ}$ </td><td> $8^{\circ}$ </td><td> $0^{\circ}$ </td><td> $8^{\circ}$ </td></tr></table>

版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev. 1.0</td><td>2020/11</td><td>首次发行</td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。
