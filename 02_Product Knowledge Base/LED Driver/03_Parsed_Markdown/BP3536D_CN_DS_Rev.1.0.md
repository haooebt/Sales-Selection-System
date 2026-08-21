## BP3536D低功耗 SSR 隔离恒压恒流控制芯片

## 概述

BP3536D 是一款低功耗恒压恒流控制芯片。重载状态下芯片工作在电感电流临界连续模式，中载状态下芯片工作在电感电流断续模式，轻载状态下芯片工作在间歇模式。

BP3536D 芯片集成⾼压启动和供电电路，启动后从辅助绕组给VCC供电，全程谷底开通，能有效降低系统待机功耗，提⾼效率和动态性能，并减小系统工作在轻载时的噪声。

BP3536D 具有良好的动态响应速度，启动时输出电压上升快，负载快速切换输出电压过冲或跌落少。

BP3536D 具有多重保护功能，包括输出开路/短路保护、芯片供电欠压/过压保护、CS 开路保护、副边⼆极管短路保护、逐周期限流、过温保护等。

BP3536D 采用 EHSOP-12 封装。

![](images/094bd49ad3553e06da018e7b04e090d971a176c37de42a38c3f421ff6f3447ed.jpg)  
EHSOP-12 封装

## 特点

 低待机功耗

 接灯带负载斩波调光无闪烁、低噪声

 原边电流关机过冲小

 集成⾼压启动和供电电路

 集成 700V 功率管

 准谐振多模式控制

 ±5%输出电流精度

 启动后输出电压上升时间短

 保护功能

 过温保护

 DEM 开路保护

 输出短路保护

芯片供电欠压/过压保护

CS 开路保护

副边绕组和副边⼆极管短路保护

## 应用领域

适配器电源

LED 驱动电源

## 典型应用

![](images/1135856e1c073834737dcc86e3c948c796db189011e4e83c37839f84fdc118c9.jpg)  
图 1. BP3536D 典型应用电路  
注：该线路及参数仅供参考，实际应用电路和参数请通过试验充分验证。

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP3536D</td><td>EHSOP-12</td><td>卷盘2500颗/盘</td><td>BP3536XXXXXYZXYYWWD</td></tr></table>

## 管脚封装

![](images/d4331ce98fc3faf5d637061ecb7cc1f78022067020f2b6011872686dc7201b0f.jpg)  
图 2. EHSOP-12 管脚封装图

BP3536D：产品型号

XXXXXY: 批次号

XXYY: 内部标识

WW：周号

Z：预留

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>VCC</td><td>芯片电源,必须就近接旁路电容</td></tr><tr><td>2</td><td>FB</td><td>副边光耦反馈输入端</td></tr><tr><td>3</td><td>DEM</td><td>退磁检测脚</td></tr><tr><td>4,5</td><td>GND</td><td>芯片地</td></tr><tr><td>6,7,8,11</td><td>NC</td><td>悬空</td></tr><tr><td>9</td><td>CS</td><td>电流采样输入端,电流采样电阻接 CS 引脚和地之间</td></tr><tr><td>10,13</td><td>DRAIN</td><td>内置 MOS 管漏极</td></tr><tr><td>12,14</td><td>HV</td><td>高压输入端</td></tr></table>

## 极限参数(注 1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td> $V_{DRAIN}$ </td><td>内置 MOS 管漏极</td><td>-0.3~700</td><td>V</td></tr><tr><td> $V_{HV}$ </td><td>HV 端口电压范围</td><td>-0.3~750</td><td>V</td></tr><tr><td> $V_{CC}$ </td><td>VCC 电压</td><td>-0.3~30</td><td>V</td></tr><tr><td> $V_{DEM}$ </td><td>退磁检测引脚电压</td><td>-0.3~6</td><td>V</td></tr><tr><td> $V_{FB}$ </td><td>反馈输入引脚电压</td><td>-0.3~6</td><td>V</td></tr><tr><td> $V_{CS}$ </td><td>电流采样端电压</td><td>-0.3-6</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注 2)</td><td>1.6</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>PN 结到环境的热阻(注 3)</td><td>85</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40~150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55~150</td><td>°C</td></tr></table>

注 1：极限参数是指超出该范围，有可能导致器件永久性损坏。极限参数为器件应⼒的额定值，⻓期工作在极限参数条件可能会影响器件的可靠性。  
注 2：温度升⾼最大功耗一定会减小，这也是由 $T _ { \Delta M A X } , \theta _ { J A } ,$ 和环境温度 T<sub>A</sub>所决定的。最大允许功耗为 $\mathsf { P } _ { \mathsf { D M A X } } = ( \mathsf { T } _ { \mathsf { J M A X } } - \mathsf { T } _ { \mathsf { A } } ) /$ θ 或是极限范围给出的数字中比较低的那个值。  
注 3：1平方英寸双层 PCB板，按照JEDEC 标准测试。

## 推荐工作范围

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td> $P_{OUT}$ </td><td>输出功率(输入电压 400V)(注 4)</td><td>&lt;45</td><td>W</td></tr></table>

注 4：开放式条件下，50℃环境温度、芯片表面温升为60℃时对应的最大连续输出功率。若实际应用中散热条件更优，则允许的最大功率可以更大。

电气参数(注 5 6)

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">电源电压</td></tr><tr><td> $V_{CC\_OVP}$ </td><td> $V_{CC}$ 过压保护阈值</td><td></td><td>26</td><td>27</td><td>29.4</td><td>V</td></tr><tr><td> $V_{CC\_ON}$ </td><td> $V_{CC}$ 启动电压</td><td> $V_{CC}$ 上升</td><td>10.4</td><td>12</td><td>13.6</td><td>V</td></tr><tr><td> $V_{CC\_UVLO}$ </td><td> $V_{CC}$ 欠压保护阈值</td><td> $V_{CC}$ 下降</td><td>6.5</td><td>7.4</td><td>8.7</td><td>V</td></tr><tr><td> $V_{CC\_JEFTON}$ </td><td>JEFT开启电压</td><td></td><td>10</td><td>11</td><td>12</td><td>V</td></tr><tr><td> $I_{ch}$ </td><td> $V_{CC}$ 启动电流</td><td> $V_{CC}=0V$ </td><td>1.2</td><td>3.2</td><td>5.8</td><td>mA</td></tr><tr><td> $I_{OP}$ </td><td> $V_{CC}$ 工作电流</td><td> $V_{DEM}=1.9V, V_{CS}=1V$ </td><td>0.885</td><td>1</td><td>1.315</td><td>mA</td></tr><tr><td> $I_q$ </td><td> $V_{CC}$ 静态电流</td><td> $V_{DEM}=2.2V, V_{CS}=1V$ </td><td>625</td><td>860</td><td>925</td><td>μA</td></tr><tr><td colspan="7">退磁检测和电压采样(DEM)</td></tr><tr><td> $V_{DEM\_OVP}$ </td><td>DEM过压保护阈值</td><td></td><td>2.35</td><td>2.58</td><td>2.9</td><td>V</td></tr><tr><td> $V_{DEM\_ZCD\_H}$ </td><td>DEM过零检测高阈值</td><td> $V_{DEM}$ 上升</td><td></td><td>0.15</td><td></td><td>V</td></tr><tr><td> $V_{DEM\_ZCD\_L}$ </td><td>DEM过零检测低阈值</td><td></td><td></td><td>0.1</td><td></td><td>V</td></tr><tr><td> $V_{DEM\_SHORT}$ </td><td>输出短路阈值</td><td></td><td>1.1</td><td>1.24</td><td>1.35</td><td>V</td></tr><tr><td> $T_{SAMPLE\_BIG}$ </td><td>采样时间(BCM)(注7)</td><td> $T_{CS\_TH}=0.55V$ </td><td>2.79</td><td>3.72</td><td>4.65</td><td>μs</td></tr><tr><td> $T_{SAMPLE\_SMALL}$ </td><td>采样时间(DCM)(注7)</td><td> $T_{CS\_TH}=0.1V$ </td><td>1.4</td><td>1.86</td><td>2.33</td><td>μs</td></tr><tr><td> $T_{ZCD\_MASK\_H}$ </td><td>最大退磁屏蔽时间(注7)</td><td> $V_{CS}=0.55V$ </td><td>1.92</td><td>2.56</td><td>3.2</td><td>μs</td></tr><tr><td> $T_{ZCD\_MASK\_L}$ </td><td>最小退磁屏蔽时间(注7)</td><td> $V_{CS}=0.1V$ </td><td>0.53</td><td>0.7</td><td>0.875</td><td>μs</td></tr><tr><td colspan="7">内部时间控制</td></tr><tr><td> $T_{OFF\_MAX}$ </td><td>最大关断时间</td><td></td><td>143</td><td>202</td><td>257</td><td>μs</td></tr><tr><td> $T_{ON\_MAX}$ </td><td>最大开通时间</td><td></td><td>7</td><td>9</td><td>11</td><td>μs</td></tr><tr><td colspan="7">电流采样(CS)</td></tr><tr><td> $V_{REF\_CC}$ </td><td>恒流基准(BCM)</td><td></td><td>1.944</td><td>1.98</td><td>2.024</td><td>V</td></tr><tr><td> $T_{LEB}$ </td><td>前沿消隐时间</td><td></td><td>250</td><td>300</td><td>450</td><td>ns</td></tr><tr><td> $V_{OCP}$ </td><td>逐周期限流电压</td><td></td><td>0.52</td><td>0.55</td><td>0.58</td><td>mV</td></tr><tr><td colspan="7">JFET(HV)</td></tr><tr><td> $I_{DSS}$ </td><td>JFET的漏电流</td><td> $V_{CC}=14V/V_{DS}=750V$ </td><td></td><td></td><td>20</td><td>μA</td></tr><tr><td colspan="7">功率管(DRAIN)</td></tr><tr><td> $BV_{DSS}$ </td><td>功率管击穿电压</td><td> $V_{GS}=0V/ I_{DS}=250μA$ </td><td>700</td><td></td><td></td><td>V</td></tr><tr><td> $I_{DSS}$ </td><td>功率管漏电流</td><td> $V_{GS}=0V, V_{DS}=700V$ </td><td></td><td></td><td>1</td><td>μA</td></tr><tr><td colspan="7">光耦反馈(FB)</td></tr><tr><td> $R\_FB$ </td><td>FB上拉电阻</td><td></td><td>9.5</td><td>10.5</td><td>11.5</td><td>KΩ</td></tr><tr><td> $V_{FB\_OPEN}$ </td><td>FB开环电压</td><td></td><td>4.75</td><td>5</td><td>5.25</td><td>V</td></tr><tr><td> $V_{FB\_BURST}$ </td><td>进入Burst模式FB电压</td><td></td><td>0.85</td><td>0.95</td><td>1.05</td><td>V</td></tr><tr><td colspan="7">过温保护</td></tr><tr><td> $T_{OTP}$ </td><td>过热保护温度</td><td></td><td></td><td>135</td><td></td><td>°C</td></tr></table>

## 内部结构框图

![](images/3b409e8560aabf19f8dda75d652afdccdf61690955d6e11d40a32e72c1a3efae.jpg)  
图 3. BP3536D 内部框图

## 功能描述

BP3536D 是一款低功耗恒压恒流控制芯片，重载状态下芯片工作在电感电流临界连续模式，中载状态下芯片工作在电感电流断续模式，轻载状态下芯片工作在间歇模式。BP3536D 采用特有的多模式准谐振控制，只需要极少的外围组件就可以达到优异的恒压恒流特性，特别适合于有恒压恒流需求的 LED 驱动器、中功率适配器。

## 启动

BP3536D 系统上电后，⺟线电压通过内部 HV 对 VCC 电容充电，当 $\mathsf { V } _ { \mathsf { C C } }$ 电压达到芯片开启阈值 $V _ { C C \_ O N }$ 时，芯片内部控制电路开始工作。系统正常后， $\mathsf { V } _ { \mathsf { C C } }$ 由辅助绕组通过⼆极管进⾏供电。

为了启动后输出电压快速建立，BP3536D 在开机后 20ms内短暂屏蔽原边恒流功能，原边电流只受 OCP 限制，从而缩短首次启动时输出电压的上升时间。

## 恒流控制，输出电流设置

BP3536D 芯片逐周期检测电感的峰值电流，CS 端连接到内部的峰值电流比较器的输入端，与内部阈值电压进⾏比较，当 CS 外部电压达到内部检测阈值时，功率管关断。

输出电流的表达式为：

$$
I _ {O U T} = \frac {1}{2} \times \frac {N _ {P}}{N _ {S}} \times 0. 1 7 5 \times \frac {V _ {\mathrm {RFF\_CC}}}{R _ {\mathrm{cs}}}
$$

其中，Np 变压器主级的匝数，Ns 是变压器次级的匝数，Iout 是恒流输出， $V _ { R E F \_ C C }$ 是恒流基准电压，Rcs 是电流检测电阻。CS 比较器的输出还包括一个 $T _ { \mathsf { L E B } }$ 前沿消隐时间。

## BCM/DCM/Burst 模式控制

BP3536D 芯片采用 BCM/DCM/Burst 模式控制技术，能有效降低系统待机功耗，提⾼效率，并减小系统工作在轻载时的噪声。

![](images/dffed325daa420b1516dd6b9c3a0ae0b6af3cb26e382655dd14917872c7087c2.jpg)  
其中，V<sub>OVP</sub>是需要设定的过压保护点

## 线电压补偿设置

BP3536D 芯片内部的关断延迟，导致不同线电压下，电感的峰值电流有差异。线电压越⾼，电感峰值电流偏差越大输出电流就越大，影响CC精度。线电压补偿的目的是使电感峰值电流在不同线电压下保持原来预期值。

功率管导通时DEMclamp电路将DEM电压钳位至接近0V，镜像 MOSFET 导通时的 I 得到 K\*I ，补偿电阻 RC 上，产生ΔVCS，叠加到 CS 电压上，用 VCS+ΔVCS 和参考电压进⾏比较，决定功率管关断。

通过调节DEM上拉电阻 $R _ { \mathrm { D E M } }$ 可以决定线电压补偿的深度，推荐其取值范围如下：

$$
\frac {K \times N _ {a u x} \times R _ {c} \times L}{N _ {p} \times \varDelta t \times R _ {c s}} \leq R _ {D E M} <   \frac {V _ {b u l k} \times N _ {a u x}}{N _ {p} \times 3 \times 1 0 ^ {- 4}}
$$

其中 $\mathsf { V } _ { \sf b u l k }$ 是⺟线电压，芯片内部关断延时∆t(约 100ns)，K 是固定系数约为 0.00625，Rc 为 2.8kΩ。L 为变压器原边励磁电感值。

## 过压保护电阻设置

当 DEM 检测到的平台电压达到内部设定的开路保护阈值V<sub>DEM\_OVP</sub>时，系统进入开路保护。

$$
V _ {O V P} = \frac {V _ {\mathrm {DEM\_ {O} VP}} * (R _ {D E M L} + R _ {D E M H})}{R _ {D E M L}} * \frac {N _ {S}}{N _ {a u x}} - V _ {f}
$$

## 保护功能

BP3536D 内置多种保护功能，包括输出开路/短路保护，V<sub>CC</sub>欠压/过压保护，CS开路保护、副边⼆极管/副边绕组短路保护、过温保护等。

## 输出短路保护

当输出短路时，DEM 检测到的电压低于 V<sub>DEM\_SHORT</sub> 时，系统进入短路保护。短路工 关断功率管，1.5s后系统重启。

## 输出开路保护

当 DEM 采样电压大于 V<sub>DEM\_OVP</sub>则触发输出过压保护，关断功率管，1.5s 后系统重启。

## VCC过压保护

当VCC电压大于 $\mathsf { V } _ { \mathsf { C C } } \mathsf { \Gamma } _ { \mathsf { O V P } } ,$ ，则触发VCC过压保护，关断功率管。

## CS 开路保护

当CS⾼于3.3V超过20μs，则关断功率管，1.5s后系统重启。

## 副边二极管/副边电感短路保护

当 MOS 导通时，若经过屏蔽时间后 CS 电压大于阈值 1.4V，则关断功率管，作为本周期的功率管关断信号。若连续两个周期检测均大于阈值电压 1.4V，则触发失效信号，关断功率管，1.5s 后系统重启。

## PCB Layout 指南

在设计 BP3536DPCB时，需要遵循以下指南：

1) VCC 的旁路电容需要紧靠芯片 VCC 和 GND 引脚。

2) 接到DEM的分压电阻必须靠近DEM引脚，且节点要远离功率电感的动点。

3) 电流采样电阻的功率地线尽可能短，且要和芯片的地线及其它小信号的地线分别接到⺟线电容的地端。

4) 减小功率环路的面积，如功率电感、功率管、⺟线电容的环路面积，以及功率电感、续流⼆极管、输出电容的环路面积，以减小 EMI 辐射。

## 封装信息

![](images/82dd41c71b0e117a6a6a6c94926c1facdab080088d4aa7a1cc3eb9373eed3d67.jpg)  
TOP VIEW  
EHSOP-12 封装外形尺寸

![](images/c078987715f2cf166977923b31c9a4c30656f047d7bccccec00496618e925279.jpg)  
SIDE VIEW

![](images/e74af22abd2e800bdb453737343794a80ec6d9b9888b439d84170cee8554e799.jpg)  
BOTTOM VIEW

![](images/d6c1980da4b1eb7f74f260110714f0cb5f77327351dfef965b3a9e06e895b4f3.jpg)  
SIDE VIEW

![](images/d1ed0203ddebe47e3adb8c10fed03fc28161af392e590da01f8098ada1aa8ee2.jpg)  
WITH PLATING  
SECTION B-B

COMMON DIMENSIONS (UNITS OF MEASURE=MILLIMETER)  
![](images/75290ca1a95de3e7d781624b24deb8a947aa4f291d6062ba159320e7a9fc68db.jpg)

<table><tr><td>SYMBOL</td><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A1</td><td>0.05</td><td>0.10</td><td>0.15</td></tr><tr><td>A2</td><td>1.35</td><td>1.40</td><td>1.45</td></tr><tr><td>b</td><td>0.35</td><td>-</td><td>0.49</td></tr><tr><td>b1</td><td>0.80</td><td>0.85</td><td>0.90</td></tr><tr><td>c</td><td>0.17</td><td>-</td><td>0.25</td></tr><tr><td>D</td><td>9.20</td><td>9.30</td><td>9.40</td></tr><tr><td>D1</td><td>2.69</td><td>2.74</td><td>2.79</td></tr><tr><td>D2</td><td>1.43</td><td>1.48</td><td>1.53</td></tr><tr><td>D3</td><td>3.11</td><td>3.16</td><td>3.21</td></tr><tr><td>D4</td><td>2.69</td><td>2.74</td><td>2.79</td></tr><tr><td>D5</td><td>2.57</td><td>2.62</td><td>2.67</td></tr><tr><td>E</td><td>8.35</td><td>8.40</td><td>8.45</td></tr><tr><td>E1</td><td>6.20</td><td>6.30</td><td>6.40</td></tr><tr><td>E2</td><td>2.77</td><td>2.82</td><td>2.87</td></tr><tr><td>E3</td><td>2.16</td><td>2.21</td><td>2.26</td></tr><tr><td>E4</td><td>3.56</td><td>3.61</td><td>3.66</td></tr><tr><td>E5</td><td>0.86</td><td>0.91</td><td>0.96</td></tr><tr><td>E6</td><td>1.38</td><td>1.43</td><td>1.48</td></tr><tr><td>e</td><td colspan="3">1.00BSC</td></tr><tr><td>e1</td><td colspan="3">2.10BSC</td></tr><tr><td>e2</td><td colspan="3">0.40BSC</td></tr><tr><td>e3</td><td colspan="3">2.20BSC</td></tr><tr><td>e4</td><td colspan="3">1.40BSC</td></tr><tr><td>e5</td><td colspan="3">0.55BSC</td></tr><tr><td>e6</td><td colspan="3">0.45BSC</td></tr><tr><td>L</td><td>0.40</td><td>-</td><td>0.80</td></tr><tr><td>x1</td><td>1.18</td><td>1.28</td><td>1.38</td></tr><tr><td>y1</td><td>1.18</td><td>1.28</td><td>1.38</td></tr></table>

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev. 1.0</td><td>2026/05</td><td>首次发行</td></tr></table>

![](images/22f2df1796a6d55a583ee8409670351721e4fac986c5c286cee78128b80e2563.jpg)

## 免责声明

晶丰明源尽⼒确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明⽰或暗⽰的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三⼈知识产权做任何明⽰或暗⽰保证，晶丰明源也不就因本规格书本⾝及其使用有关的偶然或必然损失承担任何责任。

## 电子器件报废说明

该产品在生命周期结束后，由客⼾按照一般电子产品的报废流程进⾏处理。