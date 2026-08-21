## BP3182ED低 PF 隔离反激原边恒流芯片

## 概述

BP3182ED 是一款高精度的两绕组、低 PF 原边反馈恒流驱动器。BP3182ED 内置 700V MOSFET，适合搭配前级 APFC 升压电路，实现两级隔离无频闪应用。

BP3182ED 芯片采用差分采样检测输出电压和退磁信号，可以实现两绕组隔离应用（VCC 独立电源供电），同时确保优异的OVP 精度。

BP3182ED 的 CS 引脚支持通过拨码开关选择不同电阻进行输出电流设置。既可避免拨码开关流经大电流，延长使用寿命，也可避免功率回路走线过长，提高恒流精度。

BP3182ED 芯片采用先进的原边恒流控制技术，不需要副边反馈回路和环路补偿电容，即可实现优异的恒流特性，极大的节约了系统成本和体积。内置 MOSFET，易于 PCB设计。

BP3182ED 工作在电感电流临界连续模式和准谐振模式，降低了开关损耗及 EMI，从而提升变压器的利用率。

BP3182ED 提供完善的保护功能，包括输出开路保护、输出短路保护、逐周期限流保护、过温降电流保护等。

BP3182ED 采用 BPSOP-10 封装。

![](images/a007a5d39fd32b075ac3d73d2b0ea8aab40728d5109494164e83b0befd67b8c6.jpg)

## 特点

 内置高压启动和供电，启动速度快

 内置 700V MOSFET

 高精度电流参考

 低工作电流

 高精度空载电压基准

 优异的负载调整率和线性调整率

 临界连续导通模式和准谐振模式，EMC 优化

 VCC 欠压锁定

■ 逐周期限流

 完善的保护功能

 输出开路保护

 输出短路保护

 逐周期限流保护

 过温降电流保护

 电感和输出二极管短路保护

## 应用领域

LED 面板灯

 LED 筒灯

## 典型应用

## BPSOP-10 封装

![](images/ec02d3118cffb25c565623fabf55574195ae4e9f2d904e27508682360d6b9a87.jpg)  
图 1 BP3182ED 典型应用电路  
注：该线路及参数仅供参考，实际应用电路和参数请通过试验充分验证。

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP3182ED</td><td>BPSOP-10</td><td>卷盘4,000PCS/盘</td><td>BP3182XXXXXYEXYYWWDD</td></tr></table>

## 管脚封装

![](images/06b5ec1ed4c0589cd329fa55535b9e11c9e7c2e613e24c9e431671fd24b8f557.jpg)  
BP3182ED：产品型号  
XXXXXY：批次  
XXYY：标识  
WW：周号  
图 2 管脚封装图

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>ROVP</td><td>OVP 电压设置</td></tr><tr><td>2</td><td>VCC</td><td>芯片供电</td></tr><tr><td>3、4</td><td>NC</td><td>无连接</td></tr><tr><td>5</td><td>HV</td><td>高压启动和供电及输入电压检测</td></tr><tr><td>6、7</td><td>DRAIN</td><td>内置 MOS 管漏极</td></tr><tr><td>8</td><td>SOURCE</td><td>内部 MOS 管源极</td></tr><tr><td>9</td><td>GND</td><td>芯片地</td></tr><tr><td>10</td><td>CS</td><td>电流采样端,采样电阻接在 CS 与 GND 端之间</td></tr></table>

极限参数(注 1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td>DRAIN</td><td>内置MOS漏极电压</td><td>-0.3~700</td><td>V</td></tr><tr><td>HV</td><td>高压启动和供电及输入电压检测</td><td>-0.3~700</td><td>V</td></tr><tr><td>CS</td><td>CS引脚电压</td><td>-0.3~6</td><td>V</td></tr><tr><td>SOURCE</td><td>内部MOS管源极</td><td>-0.3~6</td><td>V</td></tr><tr><td>ROVP</td><td>ROVP引脚电压</td><td>-0.3~6</td><td>V</td></tr><tr><td>VCC</td><td>芯片供电VCC电压</td><td>-0.3~30</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注2)</td><td>0.6</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>PN结到环境的热阻(注3)</td><td>110</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40~150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55~150</td><td>°C</td></tr></table>

注 1：最大极限值是指超出该工作范围，芯片有可能损坏。推荐工作范围是指在该范围内，器件功能正常，但并不完全保证满足个别性能指标。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。

注 2：温度升高最大功耗一定会减小，这也是由 T<sub>JMAX</sub>, θ<sub>JA</sub>,和环境温度 T<sub>A</sub>所决定的。最大允许功耗为 $P _ { D M A X } = ( T _ { J M A X } - T _ { A } ) / \theta _ { J A }$ 或是极限范围给出的数字中比较低的那个值。

注 3：1平方英寸双层 PCB板，按照JEDEC 标准测试。

电气参数(注 4)（无特别说明情况下， ${ \mathsf { T A } } = 2 5 ^ { \circ } { \mathsf { C } } )$

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">电源电压(VCC)</td></tr><tr><td> $V_{CC\_CLAMP}$ </td><td> $V_{CC}$ 钳位电压</td><td>1mA</td><td>23</td><td>24.2</td><td>25.4</td><td>V</td></tr><tr><td> $V_{CC\_ON}$ </td><td> $V_{CC}$ 启动电压</td><td> $V_{CC}$ 上升</td><td>13.5</td><td>15</td><td>16.5</td><td>V</td></tr><tr><td> $V_{CC\_UVLO}$ </td><td> $V_{CC}$ 欠压保护阈值</td><td> $V_{CC}$ 下降</td><td>8.1</td><td>9</td><td>9.9</td><td>V</td></tr><tr><td> $V_{CC\_OVP}$ </td><td> $V_{CC}$ 过压保护阈值</td><td> $I_{CC}>10mA$ </td><td>25.3</td><td>26.5</td><td>27.7</td><td>V</td></tr><tr><td> $I_{ST}$ </td><td> $V_{CC}$ 启动电流</td><td></td><td>140</td><td>200</td><td>260</td><td>μA</td></tr><tr><td> $I_{QUIESCENT}$ </td><td> $V_{CC}$ 静态工作电流</td><td>无开关动作</td><td>240</td><td>400</td><td>550</td><td>μA</td></tr><tr><td> $V_{CC\_JFETON}$ </td><td>JFET供电 $V_{CC}$ 电压</td><td></td><td>10</td><td>11</td><td>12</td><td>V</td></tr><tr><td colspan="7">JFET启动和供电</td></tr><tr><td> $I_{HV\_CHRG1}$ </td><td>JFET充电电流1</td><td> $V_{HV}=50V,V_{CC}=0V$ </td><td>5</td><td>10</td><td>15</td><td>mA</td></tr><tr><td> $I_{HV\_CHRG2}$ </td><td>JFET充电电流2</td><td> $V_{HV}=50V,V_{CC}=2.5V$ </td><td>0.4</td><td>0.6</td><td>0.8</td><td>mA</td></tr><tr><td> $I_{HV\_CHRG3}$ </td><td>JFET充电电流3</td><td> $V_{HV}=50V,V_{CC}=4.8V$ </td><td>5</td><td>10</td><td>15</td><td>mA</td></tr><tr><td colspan="7">电流采样(CS)</td></tr><tr><td> $V_{REF}$ </td><td>内部恒流基准电压</td><td></td><td>196</td><td>202</td><td>208</td><td>mV</td></tr><tr><td> $V_{CS\_TH1}$ </td><td>逐周期限流阈值</td><td></td><td>0.3</td><td>0.35</td><td>0.4</td><td>V</td></tr><tr><td> $T_{LEB}$ </td><td>前沿消隐时间</td><td></td><td></td><td>300</td><td></td><td>ns</td></tr><tr><td> $T_{LEB2}$ </td><td>CS短路保护时间</td><td>HV=45V; Vcs=0V</td><td>20</td><td>30</td><td>45</td><td>μs</td></tr><tr><td> $V_{CS\_TH2}$ </td><td>过流保护阈值</td><td></td><td></td><td>1.2</td><td></td><td>V</td></tr><tr><td colspan="7">零电流检测及输出开路保护</td></tr><tr><td> $V_{OVP}$ </td><td>Drain与HV差分电压</td><td> $R_{OVP}=10kΩ$  $HV=10V$ </td><td>95</td><td>100</td><td>105</td><td>V</td></tr><tr><td colspan="7">内部时间控制</td></tr><tr><td> $T_{ON\_MAX}$ </td><td>最大开通时间</td><td></td><td>20</td><td>35</td><td>45</td><td>μs</td></tr><tr><td> $T_{OFF\_MAX}$ </td><td>最大关断时间</td><td></td><td>70</td><td>115</td><td>160</td><td>μs</td></tr><tr><td> $T_{ZCD\_MASK}$ </td><td>退磁检测屏蔽时间</td><td></td><td>2.4</td><td>3.8</td><td>4.9</td><td>μs</td></tr><tr><td> $F_{MAX}$ </td><td>最大工作频率</td><td></td><td>118</td><td>148</td><td>178</td><td>kHz</td></tr><tr><td> $T_{OVP\_MASK}$ </td><td>空载保护屏蔽时间</td><td></td><td></td><td>2.5</td><td></td><td>μs</td></tr><tr><td> $T_{SHORT}$ </td><td>短路保护时间</td><td></td><td></td><td>35</td><td></td><td>ms</td></tr><tr><td> $T_{FAULT}$  $T_{ss}$ </td><td>短路保护重启间隔时间软启动时间</td><td></td><td></td><td>350100</td><td></td><td>msms</td></tr><tr><td colspan="7">内置MOS</td></tr><tr><td> $R_{DS_ON}$ </td><td>MOSFET导通阻抗</td><td> $V_{GS}=10V, I_D=1.3A$ </td><td></td><td>1.6</td><td>2</td><td>Ω</td></tr><tr><td> $BV_{DSS}$ </td><td>MOSFET漏源极击穿电压</td><td></td><td>700</td><td></td><td></td><td>V</td></tr><tr><td colspan="7">过热调节部分</td></tr><tr><td> $T_{REG}$ </td><td>过热调节温度</td><td></td><td></td><td>137</td><td></td><td>°C</td></tr></table>

注 4：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。

## 内部结构框图

![](images/b2e9cb222ae31900db4581b9b8fcd05734eb7229de362fbd5542a37c8cfd68f4.jpg)  
图 3 BP3182ED 内部框图

## 功能描述

BP3182ED 是一款高精度原边反馈 LED 恒流驱动器，适合搭配前级 Boost APFC 升压电路，实现两级隔离无频闪应用。

## 启动

系统上电后，当VCC电压<2.5V时，母线电压直接通过HV引脚以电流 I<sub>HV\_CHRG1</sub> 对 VCC 电容充电；当 2.5V<VCC<4.8V时，HV 引脚以电流 I<sub>HV\_CHRG2</sub> 对 VCC 电容充电；当$4 . 8 \mathsf { V } < \mathsf { V C C } < \mathsf { V } _ { \mathsf { C C } \_ 0 \mathsf { N } }$ 时，HV 引脚以电流 I<sub>HV CHRG3</sub> 对 VCC 电容充电。电压达到芯片开启阈值 $V _ { C C \_ O N }$ 时，芯片内部控制电路开始工作。

## 软启动

每次 VCC 从 UVLO 电压以下充电到 $V _ { C C \_ O N }$ 以后，系统都会经历软启动过程。在软起动过程中，CS 峰值电压分段线性增加，从而控制电感峰值电流限值以减小开关应力，每次重启和故障保护复位都会经历软启动过程，软起动时间持续约 100ms。

## 恒流控制，输出电流设置

BP3182ED 采用了特有的电流采样机制，工作于原边反馈模式，无需次级反馈电路，即可实现高精度输出恒流控制。LED 输出电流计算方法：

$$
I _ {o u t} \approx \frac {V _ {R E F}}{2 \times R _ {c s}} \times \frac {N _ {P}}{N _ {S}}
$$

其中：

$V _ { \mathsf { R E F } }$ 是内部基准电压

N<sub>P</sub>是变压器主级绕组的匝数 ${ \sf N } _ { \sf S }$ 是变压器次级绕组的匝数 $\mathsf { R } _ { \mathsf { C S } }$ 是电流采样电阻的值

输出过压保护

$R _ { O V P }$ 引脚用于设置输出空载保护电压。

$$
R _ {O V P} \approx \frac {3 6 . 7 5 k \Omega}{\frac {5 V * 9 0}{N _ {P S} * V _ {O V P}} - 1}
$$

其中：

$R _ { O V P }$ 是反馈网络的 OVP电压设置电阻

$N _ { P S }$ 是变压器的初次级匝比

$V _ { O V P }$ 是输出开路电压

5V 是芯片内部基准

## 过温降电流

BP3182ED 具有过热调节功能，在驱动电源过热时逐渐减小输出电流，从而控制输出功率和温升，避免芯片温度上升，以提高系统的可靠性。进入过温调节点 T<sub>REG</sub> 以后，输出电流逐渐下降。在过温降电流过程中，Toff 时间也逐渐加长，系统进入DCM模式工作。过温降电流过程中，保护功能仍然保持有效。

为防止高温时因为CS采样电阻温漂、变压器感量变化和输出二极管漏电流增加导致输出电流下降，BP3182ED 内置温度补偿。

## 线性调整率补偿

由于存在信号传播延时和 MOSFET 关断延时，输出电流会随输入电压变化而变化。为此，BP3182ED 内置了线性调整率补偿功能。采样输入母线电压转换成电压叠加在采样到的 Vcs电压上，实现实时线电压补偿。

## 短路保护

BP3182ED 连续 35ms 检测不到退磁信号，则进入短路保

## 电感短路、输出二极管短路故障

当电感或输出二极管短路时，CS 电压迅速上升。若 CS 电压大于 $\mathsf { V } _ { \mathsf { C S \_ T H 2 } }$ ，系统进入故障保护状态。等待 ${ \mathsf { T } } _ { \mathsf { F A U L T } }$ 以后重新检测故障状态。

## PCB Layout 指南

在设计 BP3182ED 应用 PCB时，需要遵循以下建议：

1) VCC 的旁路电容需要紧靠芯片VCC 和GND 引脚。

电流采样电阻的功率地线尽可能粗，且要离芯片的地量近 以保证电流采样的准确性，否则可能会影响输出电流的调整率。信号地需要单独连接到芯片的地引脚。

3) 减小大电流环路的面积，如变压器初级、功率管及吸收网络的环路面积，以及变压器次级、次级二极管、输出电容的环路面积，以减小 EMI 辐射。

4) 接到 ROVP 的电阻必须靠近 ROVP 引脚，节点要远离变压器的动点， 并且 ROVP脚需要并 1nF-10nF 电容到地，否则系统噪声容易误触发ROVP的OVP保护功能。

![](images/3945e3046f6efc09f236eda66455558ce04601a2a37a2c747f66471d7ad4fcad.jpg)

## 封装信息

BPSOP-10 封装外形尺寸  
侧视图  
![](images/16a5b6cc1b9508377be34b64c2dc141f5599ff87363d6fb8b6ccecbbf4b92a03.jpg)

<table><tr><td colspan="4">MILLIMETER</td></tr><tr><td>SYMBOL</td><td>MIN</td><td>NOMINAL</td><td>MAX</td></tr><tr><td>A</td><td>1.32</td><td>-</td><td>1.75</td></tr><tr><td>A1</td><td>0.02</td><td>0.10</td><td>0.25</td></tr><tr><td>A2</td><td>1.30</td><td>1.40</td><td>1.50</td></tr><tr><td>A3</td><td>0.60</td><td>0.65</td><td>0.70</td></tr><tr><td>b</td><td>0.35</td><td>0.40</td><td>0.45</td></tr><tr><td>b2</td><td>1.62</td><td>1.67</td><td>1.72</td></tr><tr><td>c</td><td>0.15</td><td>-</td><td>0.25</td></tr><tr><td>D</td><td>8.50</td><td>8.60</td><td>8.70</td></tr><tr><td>E</td><td>3.80</td><td>3.90</td><td>4.00</td></tr><tr><td>E1</td><td>5.80</td><td>6.00</td><td>6.20</td></tr><tr><td>e</td><td colspan="3">1.27 BSC</td></tr><tr><td>e1</td><td colspan="3">3.18 BSC</td></tr><tr><td>e2</td><td colspan="3">3.81 BSC</td></tr><tr><td>e3</td><td colspan="3">1.91 BSC</td></tr><tr><td>L</td><td>0.40</td><td>0.55</td><td>0.70</td></tr></table>

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev.1.0</td><td>2024/03</td><td>首次发行</td></tr><tr><td>Rev.1.1</td><td>2024/11</td><td>修改典型应用图</td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。