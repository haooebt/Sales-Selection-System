## 集成高效率反激式PSR开关电源驱动芯片

## 概述

BP86226P 是一款集成超低待机功耗准谐振原边控制器，并集成650V高雪崩能力功率MOSFET，用于高性能、外围元器件精简的内置电源。适用于全电压范围85\~265VAC输入的反激式变换器应用。

BP86226P 为原边反馈工作模式，可省略光耦和 TL431，支持CCM 和 DCM 两种工作模式。内置高压启动，稳态时由辅助绕组供电，可实现芯片空载损耗（230VAC）小于 100mW。采用准谐振、多模式技术与 PWM 频率切换技术共同提高效率并消除音频噪声，频率技术可实现较好的 EMI特性。

BP86226P 提供了较为全面的智能保护功能，包含逐周期过流保护、FB 开短路保护、FB 过欠压保护、Die 过温保护、CS开/短路保护、VCC 过欠压保护、VCC 短路保护等。

BP86226P采用DIP-8封装，具备较好的散热性能，同时满足爬电距离的要求，使得芯片能够应用于较复杂的工作环境。

![](images/c41982cd6f336a74698835afbf68857586ad6df123448fa784e194010d0ca654.jpg)

## 特点

 内部集成 650V 高压 MOSFET

 集成高压启动和自供电电路

 低待机功耗

 峰值电流补偿功能

 内置软启动功能

 改善 EMI抖频功能

 高低压脚之间爬电距离>3mm

##  保护功能

 输入欠压保护(Brown-in)

 输出短路保护(SCP)

 输出过压保护(Output OVP)

输出过载保护(OLP)

 反馈开路保护

 逐周期限流(Cycle-by-Cycle)

Y 迟滞过温保护(OTP)

## 应用领域

 加湿器等家电辅助电源

## 典型应用

DIP-8 封装  
![](images/eb1c5d377e9d5947ad1f1cce6caee09f32015676cde82ce58ff27f2fae55da2e.jpg)  
图 1. BP86226P 典型反激应用电路

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP86226P</td><td>DIP-8</td><td>管装50颗/管</td><td>BP86226XXXXYZXYYYWWP</td></tr></table>

## 管脚封装

![](images/06201182eb93e8aae3544cd078e21f602f932987a550181220f862e9b57d97e9.jpg)  
图 2. DIP-8 管脚封装图

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>CS</td><td>电流采样端</td></tr><tr><td>2</td><td>FB</td><td>输出反馈端</td></tr><tr><td>3</td><td>GND</td><td>芯片地</td></tr><tr><td>4</td><td>VCC</td><td>电源供电端</td></tr><tr><td>5、6、7、8</td><td>DRAIN</td><td>功率 MOSFET 漏极</td></tr></table>

## 输出功率推荐表

<table><tr><td colspan="5">输出功率表</td></tr><tr><td rowspan="2">型号</td><td colspan="2">230VAC ±15%</td><td colspan="2">85~265VAC</td></tr><tr><td>适配器(注 1)</td><td>开放式(注 2)</td><td>适配器(注 1)</td><td>开放式(注 2)</td></tr><tr><td>BP86226P</td><td>24W</td><td>28W</td><td>18W</td><td>22W</td></tr></table>

注 1： 最小连续输出功率，测试条件为封闭式塑料外壳，环境温度为50℃。  
注 2： 最小连续输出功率，测试条件为开放式环境，环境温度为50℃。

极限参数(注 3)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td> $V_{DRAIN}$ </td><td>高压 MOSFET 漏极到源极电压</td><td>-0.3~650</td><td>V</td></tr><tr><td> $I_D$ </td><td>漏极连续电流</td><td>5</td><td>A</td></tr><tr><td> $I_{DM}$ </td><td>漏极脉冲电流(注 4)</td><td>15</td><td>A</td></tr><tr><td> $V_{CC}$ </td><td> $V_{CC}$  电压</td><td>-0.3~40</td><td>V</td></tr><tr><td> $I_{CC\_MAX}$ </td><td> $V_{CC}$  引脚最大电流</td><td>50</td><td>mA</td></tr><tr><td> $V_{FB}$ </td><td>输出电压反馈端电压</td><td>-0.3~7</td><td>V</td></tr><tr><td> $V_{CS}$ </td><td>电流采样端电压</td><td>-0.3~7</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注 5)</td><td>1.56</td><td>W</td></tr><tr><td> $θ_{JA}$ </td><td>结到环境的热阻(注 6)</td><td>80</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40 to 150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55 to 150</td><td>°C</td></tr><tr><td>ESD</td><td>人体模型 ESD(注 7)</td><td>2.5</td><td>kV</td></tr></table>

注 3：极限参数是指超出该工作范围，芯片有可能损坏。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。  
注 4：MOSFET 漏极脉冲电流的宽度受限于其可承受的最大结温。  
注 5：温度升高最大功耗一定会减小，这也是由 T , θ ,和环境温度T 所决定的。最大允许功耗为 $P _ { D M A X } = ( T _ { J M A X } - T _ { A } ) / \theta _ { J A }$ 或是极限范围给出的数字中比较低的那个值。  
注 6：1 平方英寸双层PCB 板，按照JEDEC标准测试。  
注 7：按照 JEDEC 标准测试, 100pF 电容通过 1.5kΩ 电阻放电。

电气参数 (注 8)（无特别说明情况下， ${ \bar { \mathsf { T } } } _ { \mathsf { A } } = 2 5 ^ { \circ } { \mathsf { C } } )$

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">VCC供电部分</td></tr><tr><td> $V_{CC\_OVP}$ </td><td> $V_{CC}$ 过压保护阈值</td><td></td><td></td><td>32</td><td></td><td>V</td></tr><tr><td> $V_{CC\_ON}$ </td><td> $V_{CC}$ 启动电压</td><td> $V_{CC}$ 上升</td><td></td><td>14.5</td><td></td><td>V</td></tr><tr><td> $V_{CC\_UVLO}$ </td><td> $V_{CC}$ 欠压保护阈值</td><td> $V_{CC}$ 下降</td><td></td><td>7</td><td></td><td>V</td></tr><tr><td> $V_{CC\_DRAIN\_CH}$ </td><td> $V_{CC}$ 高压供电阈值</td><td> $V_{CC}$ 下降</td><td></td><td>8</td><td></td><td>V</td></tr><tr><td> $I_{CH1}$ </td><td> $V_{CC}$ 充电电流1</td><td> $V_{CC}<1V$ </td><td></td><td>0.2</td><td></td><td>mA</td></tr><tr><td> $I_{CH2}$ </td><td> $V_{CC}$ 充电电流2</td><td> $V_{CC}>1V$ </td><td></td><td>2</td><td></td><td>mA</td></tr><tr><td> $I_{OP}$ </td><td> $V_{CC}$ 工作电流</td><td></td><td></td><td>1</td><td></td><td>mA</td></tr><tr><td> $I_Q$ </td><td> $V_{CC}$ 静态电流</td><td></td><td></td><td>400</td><td></td><td>μA</td></tr><tr><td colspan="7">CS电流检测部分</td></tr><tr><td> $T_{LEB1}$ </td><td>前沿消隐时间1</td><td></td><td></td><td>500</td><td></td><td>ns</td></tr><tr><td> $T_{LEB2}$ </td><td>前沿消隐时间2</td><td></td><td></td><td>150</td><td></td><td>ns</td></tr><tr><td> $V_{LIMIT\_MAX}$ </td><td>最大过流检测阈值电压</td><td></td><td></td><td>0.65</td><td></td><td>V</td></tr><tr><td> $V_{LIMIT\_MIN}$ </td><td>最小过流检测阈值电压</td><td></td><td></td><td>0.15</td><td></td><td>V</td></tr><tr><td> $V_{LIMIT\_SR\_SHORT}$ </td><td>SR短路时过流检测电压</td><td></td><td></td><td>0.65*2</td><td></td><td>V</td></tr><tr><td colspan="7">FB反馈部分</td></tr><tr><td> $V_{REF\_CV}$ </td><td>内部误差放大器基准</td><td></td><td></td><td>2.5</td><td></td><td>V</td></tr><tr><td> $V_{FB\_OVP}$ </td><td>FB过压保护阈值</td><td></td><td></td><td>3</td><td></td><td>V</td></tr><tr><td> $V_{FB\_UVP}$ </td><td>FB欠压保护阈值</td><td></td><td></td><td>1.2</td><td></td><td>V</td></tr><tr><td> $I_{CABLE}$ </td><td>最大线电阻补偿电流</td><td></td><td></td><td>59</td><td></td><td>μA</td></tr><tr><td> $I_{BROWN\_IN}$ </td><td>Brown_in阈值</td><td></td><td></td><td>250</td><td></td><td>μA</td></tr><tr><td> $T_{BROWN\_IN}$ </td><td>Brown_in时间阈值</td><td></td><td></td><td>2</td><td></td><td>cycle</td></tr><tr><td> $I_{BROWN\_OUT}$ </td><td>Brown_out电流阈值</td><td></td><td></td><td>225</td><td></td><td>μA</td></tr><tr><td> $T_{BROWN\_OUT}$ </td><td>Brown_out时间阈值</td><td></td><td></td><td>35</td><td></td><td>ms</td></tr><tr><td> $T_{FAULT}$ </td><td>FAULT持续时间</td><td></td><td></td><td>2</td><td></td><td>s</td></tr><tr><td colspan="7">振荡器部分</td></tr><tr><td> $F_{MIN}$ </td><td>最低开关频率</td><td></td><td></td><td>0.3</td><td></td><td>kHz</td></tr><tr><td> $T_{SAMPLE}$ </td><td>输出电压采样时间</td><td>根据lpk变化</td><td></td><td>1.8~4</td><td></td><td>μs</td></tr><tr><td> $D_{MAX}$ </td><td>最大占空比</td><td></td><td></td><td>67</td><td></td><td>%</td></tr><tr><td> $T_{UVP}$ </td><td>输出欠压保护屏蔽时间</td><td></td><td></td><td>60</td><td></td><td>ms</td></tr><tr><td> $T_{ON\_MAX}$ </td><td>最大开通时间</td><td></td><td></td><td>20</td><td></td><td>μs</td></tr><tr><td colspan="7">功率管MOSFET</td></tr><tr><td> $R_{DS\_ON}$ </td><td>功率管导通阻抗</td><td></td><td></td><td>2</td><td>2.5</td><td>Ω</td></tr><tr><td> $I_{DSS}$ </td><td>功率管关断漏电流</td><td> $V_{DS}=650V,T_j=25°C$ </td><td></td><td></td><td>50</td><td>μA</td></tr><tr><td> $BV_{DSS}$ </td><td>功率管的击穿电压</td><td> $T_j=25°C$ </td><td>650</td><td></td><td></td><td>V</td></tr><tr><td> $T_{OTP}$ </td><td>过热保护温度</td><td></td><td></td><td>145</td><td></td><td>°C</td></tr><tr><td> $T_{HYST}$ </td><td>过热保护迟滞</td><td></td><td></td><td>40</td><td></td><td>°C</td></tr></table>

注 8：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。

## 内部结构框图

![](images/276b05e3ad59288fa468f805d75ad41c9ccb74e487dcdd099d226007b9f8dd75.jpg)  
图 3. BP86226P 内部框图

## 功能描述

BP86226P 是一款集成超低待机功耗准谐振原边控制器，并集成 650V 高雪崩能力功率 MOSFET，用于高性能、外围元器件精简的内置电源。适用于全电压范围 85\~265VAC 输入的反激式变换器应用。

## 高压启动供电与 VCC 供电

系统上电后，当母线电压通过芯片漏极供电达到启动电压时，内部高压启动电路通过 DRAIN 端对 VCC 电容充电。当 VCC电压小于 1V 时，充电电流为 0.2 mA，当 VCC 电压高于 1V时，充电电流为2mA。当VCC电压达到芯片开启阈值 $V _ { C C , O N }$ 时，高压供电模块关闭，芯片内部控制电路开始工作。当VCC电压下降至 $V _ { C C \_ D R A I N \_ C H }$ 时，高压供电模块会再次开启，当 VCC 电压再次达到芯片开启阈值 $V _ { C C , O N }$ 时，高压供电模块再次关闭。芯片稳态工作后，辅助绕组给 VCC 供电。

## VCC 欠压保护

VCC 引脚具有欠压保护功能。工作过程中，由于异常导致VCC 电压下降到低于 $\mathsf { V } _ { \mathsf { C C } \_ \mathsf { U V L O } } \mathrm { ~ ( t y p = 7 V ) ~ }$ 时，欠压保护电路使芯片关断功率 MOSFET，停止开关动作。VCC 电压需要回升到 $V _ { C C , O N }$ 才能重新开启功率 MOSFET，并且会进入软启动过程（图 4 所示）。

![](images/c9ca88c202a3578499878fefbb2cf760dccd4bd2086a4176a3a9249bb56b5068.jpg)  
图 4. VCC 欠压保护时序

## VCC 引脚实现输出过压保护

VCC 引脚同时可用来实现输出过压保护功能，辅助绕组电压连接到 VCC，当 VCC 引脚的电压超过 OVP 阈值电压 $\mathsf { V } _ { \mathsf { C C } } \mathsf { o v p }$ （32V）时，则触发 $\mathsf { V } _ { \mathsf { C C } , \mathsf { O V P } }$ 保护。OVP 保护期间，IC 关闭MOSFET，停一个 T ，输出电压下降，VCC 电压下降，直到降至关断电压点9V，高压启动恒流源重新对VCC电容充电，电压达到 $V _ { C C , O N }$ 时芯片重新启动，进入下一个 VCC 电压检测周期，如果故障一直存在则保持自动重启。VCC 电容除起到内部滤波的作用，还作为外部滤波器，避免噪音信号引起保护电路误触发。为使电容达到有效的高频滤波，应将电容尽量靠近 VCC 引脚（如图 5所示）。

![](images/f8651bf26bcdf4ecdb9552d8dee8e7c08e163845d2d30bf218c0b548b797e0c3.jpg)  
图 5. VCC 引脚实现输出过压保护

## 软起动

BP86226P 具有软启动功能，在启动过程中，原边开关频率从 13kHz 逐渐增加，V<sub>LIMIT</sub> 从 V<sub>LIMIT\_MIN</sub> 逐渐增大，避免了电流积累增加 MOSFET 应力。每一次重启都会经历软启动的过程。软起动的时间约为 10ms。

## 工作模式

BP86226P在CV工作状态下，使用脉冲信号采样VFB电压，并保持到下一个采样点。将采样到的电压和V<sub>REF\_CV</sub>基准比较，并放大误差，这个误差值代表负载的情况，通过控制开关信号，调整输出电压，输出电压 V<sub>O</sub>和 V<sub>REF\_CV</sub>的关系为：

$$
V _ {O} = \left(V _ {R E F \_ C V} \frac {R _ {1} + R _ {2}}{R _ {2}}\right) \frac {N _ {S}}{N _ {A U X}} - V _ {F}
$$

其中， ${ \sf N } _ { \sf S }$ 和 $\mathsf { N } _ { \mathsf { A U X } }$ 分别为次级绕组和辅助绕组的圈数； $\mathsf { R } _ { 1 }$ 是FB 上拉电阻， ${ \sf R } _ { 2 }$ 是 FB 下拉电阻, $V _ { \mathsf { F } }$ 是续流二极管压降。

## 控制曲线

BP86226P 是一款出色的集成式多模（见图 6）PWM 控制器，针对中功率 AC/DC 应用进行了优化。它在连续导通模式（CCM）和准谐振模式（QR）下工作，提供了高效率的原边检测和调节，从而为高能效电源提供经济高效的解决方案。满载时，IC 在低输入电压下以固定频率 65kHz 工作在 CCM模式，在高输入电压下以谷底检测 QR 模式工作在 DCM模式。因此可实现通用输入范围内的高效率应用。在正常负载条件下，IC 会判断 COMP 电压在 PWM 和 PFM 模式间切换工作模式。当负载很小时，IC 开关频率可以降低到 0.3kHz，以较小待机功率损耗工作。因此，IC 可在整个负载范围内实现高转换效率。

![](images/b6f58ada2d64f8ea0ac5747670fa1723769fe2afe17992bd42977c0966566120.jpg)  
图 6. 工作模式控制曲线

## 补偿功能

为实现恒压阶段良好的负载调整率和输入电压调整率，芯片集成 CV 曲线补偿功能。

## 电流检测与前沿消隐

BP86226P 芯片内部集成电流检测电路，芯片通过 CS 引脚的电阻检测功率管电流，设置最大输出功率通过调整外部 CS 电阻实现对 MOSFET 电流逐周期限制。当电流超过设定的限流点阈值 V<sub>LIMIT\_MAX</sub> 时，在该周期剩余阶段会关断功率MOSFET，直到下一个开关周期开始。

BP86226P 内置前沿消隐(Leading Edge Blanking)时间 t<sub>LEB</sub>可以避免由于外部电路的容性或次级二极管的反向恢复导致MOSFET 在开通瞬间出现的电流尖峰误触发 MOSFET 关断而不需要额外的 RC 滤波电路。

## 负温度补偿

BP86226P 基准 $V _ { R E F \_ C V }$ 采用负温度补偿技术，常温下，$V _ { R E F \_ C V }$ 电压基准为 2.5V。芯片温度上升时， $V _ { R E F \_ C V }$ 电压基准随着温度上升而变小，可以使得输出 Vo 在全温度范围内恒定，提高恒压输出精度。

## 准谐振模式

BP86226P 包含准谐振开关电路，在工作状态下，这个电路检测每一个谐振周期的谷底位置，让芯片每个开关周期都在谷底导通，该电路可以减少系统的开关损耗。同时可以让芯片的开关频率在不同的开关周期之间轻微的变化，提高 EMI的裕量。

## 保护功能

BP86226P 包含丰富的保护功能，包括：逐周期过流保护、FB 过欠压保护、CS 开短路保护、VCC 过欠压保护、VCC 短路保护、Die 过温保护等保护。

## FB 欠压保护

连续 T<sub>UVP</sub>检测到 FB 引脚电压低于 V<sub>FB\_UVP</sub>，关断功率管，2s后系统重启，再次检测故障是否消除，否则保护继续循环。

## FB 过压保护

当 FB 电压过屏蔽时间 2μs 后，若连续两个周期大于 $V _ { F B \_ O V P }$ 则触发输出过压保护，关断功率管，2s 后系统重启，再次检测故障是否消除，否则保护继续循环。

## CS 开路保护

V<sub>CS</sub>电压建立成功或系统自动重启之后，使能功率管工作之前，使能 CS 引脚处的上拉电流源，检测 CS 引脚电压是否存在开路故障，T<sub>LEB2</sub> 时间后，当检测到 $\mathsf { V } _ { \mathsf { C S } } > 2 \mathsf { V } _ { \mathsf { L I M I T \_ M A X } }$ ，则判定为CS引脚开路，2s后系统重启，再次检测故障是否消除，否则保护继续循环。

## FB 开路/短路保护

FB 开路保护：连续四个开关周期，MOS 导通时，检测 FB 引脚流出的电流小于 50μA，则认为 FB 引脚处有故障，2s 后系统重启，再次检测故障是否消除，否则保护继续循环。

FB 短路保护：VCC 建立后，MOS 导通之前，FB 引脚source 100μA 电流，检测 FB引脚的阻抗是否大于100mV，如果低于 100mV 则认为 FB 对地短路，2s 后系统重启，再次检测故障是否消除，否则保护继续循环。

## 输入欠压保护（Brown-in）

BP86226P 芯片在启动前 FB 引脚通过变压器辅助绕组检测母线电压实现输入欠压保护。

芯片 VCC 电压到 $V _ { C C , O N }$ 后，强制打两个开关周期，如任何一开关周期检测到 MOS 导通时流出 FB 引脚的电流大于 $2 5 0 \mu$ A ，则认为输入电压正常。

## 抖频

BP86226P 芯片具有抖频功能，可以改善 EMI 性能，减小滤波器尺寸，使系统的 EMI设计更简单。

## 过温保护

BP86226P 芯片内置了过温保护电路，当结温达到过温保护阈值 T<sub>OTP</sub> (145℃)时，芯片会停止工作，直到结温下降到T<sub>OTP-</sub>T<sub>HYST</sub> 时，芯片重新启动。 $\mathsf { T } _ { \mathsf { H Y S T } } ( 4 0 ^ { \circ } \mathsf { C } )$ 为温度迟滞，较大的温度迟滞有利于把系统温度控制在一个较低的水平（如图 7所示）。

![](images/e59a08b61d5489ef2f5bca12f8dbd215fe48f14401577b319b22303a998a6c40.jpg)  
图 7. 过温保护过程

## 应用指南

芯片适用范围

首先根据下表BP86226P的适用功率范围，判断实际的应用需求是否满足：

<table><tr><td colspan="5">输出功率表</td></tr><tr><td rowspan="2">型号</td><td colspan="2">230VAC</td><td colspan="2">85~265VAC</td></tr><tr><td>适配器</td><td>开放式</td><td>适配器</td><td>开放式</td></tr><tr><td>BP86226P</td><td>24W</td><td>28W</td><td>18W</td><td>22W</td></tr></table>

表1. 输出功率表

表1列出的最小连续输出功率，是基于合理的散热设计，将其温度控制到 $1 1 0 ^ { \circ } \mathsf { C }$ 或以下。开放式设计和密闭式适配器的测试环境温度均为 $5 0 ^ { \circ } \mathsf { C }$

## 输入电容选择

输入滤波电容对工频电压纹波、传导EMI、以及电源抵抗Surge的能力都起到关键的作用。为了优化变压器的设计，电容量的选取要保证直流母线电压不能过低（通常低压输入时不低于80VDC，高压输入时不低于220VDC），因此电容量取决于输出功率和电源效率。 BP86226P的应用场合一般功率相对较大，需要用全波整流，根据输出功率可以对输入电容进行初步估计(如表2所示)，全电压或低压输入时，一般取$2 \sim 3 \mu \mathsf { F } / \mathsf { W } ;$ 高压输入时，一般取1μF/W。

<table><tr><td>输入</td><td>电压范围(VAC)</td><td>输入电容(μF/W)</td><td>推荐最低母线电压(V)</td></tr><tr><td>全电压</td><td>85~265</td><td>2~3</td><td>≥80V</td></tr><tr><td>低压</td><td>85~132</td><td>2~3</td><td>≥80V</td></tr><tr><td>高压</td><td>185~265</td><td>1</td><td>≥220V</td></tr></table>

表2. 推荐输入电容值和最低母线电压

根据选定的输入电容计算最低母线电压的精确值需要求解一个复杂的方程，为简便起见，通常使用以下公式得到一个相对精确的结果：

$$
V _ {D C \_ M I N} = \sqrt {2 * V _ {A C M I N} ^ {2} - \frac {P _ {O} * (1 - 2 * f _ {L} * t _ {C})}{\eta * C _ {I N} * f _ {L}}}
$$

其中，整流桥的导通时间t 一般取3ms，可以假设效率初始值为80%，f 为输入交流电压频率， $V _ { \mathsf { A C M N } }$ 为最低输入交流电压有效值， $\mathsf { P o }$ 为额定输出功率， $C _ { \mathsf { I N } }$ 为输入电容容量。最高母线电压可以通过计算得到：

$$
V _ {D C \_ M A X} = \sqrt {2} * V _ {A C M A X}
$$

## 变压器计算

当BP86226P最高限流点和开关频率已被设定，最大输出功率取决于变压器的电感量。电感量越大，最大输出功率越大，变压器体积也越大。因此，为了尽可能减小变压器体积，在满足额定输出规格的前提下，尽可能选取较小的电感量。一般建议在 $: V _ { D C , M I N }$ 条件下设计变压器，以保证所有输入电压范围内均满足额定输出规格。变压器的计算按照以下步骤：

## 1) 选取次级反射到初级的电压 $( \mathsf { V } _ { \mathsf { O R } } )$

选取反射电压时，需要同时考虑最高输入电压下初级MOSFET和次级整流二极管的最高耐压值并留一定的裕量。MOSFET最高漏极电压为：

$$
V _ {D R A I N \_ M A X} = V _ {D C \_ M A X} + V _ {O R} + V _ {L K}
$$

其中， $\mathsf { V } _ { \mathsf { L K } }$ 为漏感产生的电压尖峰， $\mathsf { V } _ { \mathsf { O R } }$ 为次级反射到初级的电压。漏极电压波形如图8所示，通常建议漏极最高电压不超过90%的功率管击穿电压 $( \mathsf { B V } _ { \mathsf { D S S } } )$ 。次级二极管的最高反向电压为：

$$
V _ {R} = \frac {V _ {D C \_ M A X} * (V _ {O U T} + V _ {D})}{V _ {O R}} + V _ {O U T}
$$

$v _ { \mathsf { D } }$ 为次级二极管的正向导通压降， $\mathsf { V o u r }$ 为输出电压。通常预估 $\mathsf { V } _ { \mathsf { L K } } { = } 6 0 \mathsf { V }$ $V _ { \mathsf { O R } } { = } 8 0 { \sim } 1 0 0 \mathsf { V }$ 作为起始值开始变压器计算，然后反复迭代计算以达到优化设计的目的。

![](images/ba9bf6aa000efe2ba75375fa197b935341c16d1a469624e2d12867e6a7e2b90c.jpg)  
图8. MOSFET漏极电压波形

变压器匝比可以通过以下表达式得到：

$$
N = \frac {N _ {P}}{N _ {S}} = \frac {V _ {O R}}{V _ {O U T} + V _ {D}}
$$

其中， $N _ { P } \mp \Pi N _ { S } \hbar$ 别为变压器初级和次级匝数。反射电压越高，初次级匝比越大，初级漏感越大，会增加初级MOSFET电压应力和漏感产生的损耗。较高的反射电压虽然可以降低次级二极管的反向电压应力，从而可以使用较低电压的二极管，但是会增加次级的峰值和有效值电流，增加次级绕组和二极管导通损耗。同时，过高的反射电压还会引起传导EMI问题，这是由于非连续模式下初级电感和漏极寄生电容的自由振荡导致的。因此，建议 $\mathsf { V o } \mathsf { R } ^ { \mathsf { \bar { \alpha } } }$ 不要超过135V。相反，过小的反射电压会降低连续模式下（低压输入时）的占空比，增加初级电流有效值，降低效率，同时次级二极管的电压应力增加。

## 2) 确定初级最大峰值电流：

纹波系数，K<sub>P</sub>的定义如下，

$$
K _ {P} = \frac {I _ {R}}{I _ {L I M I T \_ M A X}}
$$

![](images/09dfe71a373d76b3ae5cf3ef6aa513751960560eb9fe77bdf7635e9e8f3e4522.jpg)  
图9. 连续模式下初级电流波形

当系统工作在CCM时 $\mathsf { K } _ { \mathsf { P } } < 1$ ；当系统工作在BCM或DCM时 $\mathsf { K } _ { \mathsf { P } } = 1$ 。根据工作模式选定K 并计算初级最大峰值电流I $\mathsf { L I M I T \_ M A X }$

$$
I _ {L I M I T \_ M A X} = \frac {2 * I o}{(1 - D) * N}\tag{BCM}
$$

$$
I _ {L I M I T \_ M A X} = \frac {2 * I o}{(1 - D) * N * (2 - K _ {P})}\tag{CCM}
$$

$$
D = \frac {(V _ {O U T} + V _ {D}) * N}{V _ {D C \_ M I N} + (V _ {O U T} + V _ {D}) * N}
$$

$$
N = \frac {N _ {P}}{N _ {S}}
$$

根据I<sub>LIMIT\_MAX</sub>计算电流采样电阻Rcs：

$$
R _ {C S} = \frac {V _ {L I M I T \_ M A X}}{I _ {L I M I T \_ M A X}}
$$

$\mathsf { V } _ { \mathsf { I m i t \_ m a x } }$ 是CS引脚采样电压阈值，建议取电气参数表中的下限值，以保证足够的输出能力。

3) CCM模式下初级电感量计算：

$$
L _ {P} = \frac {2 * 0 . 9 * P _ {O} * [ Z * (1 - \eta) + \eta ]}{K _ {P} * (2 - K _ {P}) * I _ {L I M I T \_ M A X} ^ {2} * f _ {S} * \eta}
$$

其中，f<sub>S</sub>为开关频率(取电气参数表的下限值)，I<sub>LIMIT\_MAX</sub>为初级最高峰值电流由步骤2确定<sub>，</sub>Z为损耗分配因子，即次级损耗占总损耗的比例，没有具体计算数据的情况下可以取0.5。初次计算时，可以假设效率 $\dot { \boldsymbol \eta }$ 为80%，后期可根据测试结果进行迭代。

4) DCM模式下初级电感量计算：

$$
L _ {P} = \frac {2 * 0 . 9 * P _ {O} * [ Z * (1 - \eta) + \eta ]}{I _ {L I M I T \_ M A X} ^ {2} * f _ {S} * \eta}
$$

## 5) 确定最终电感量：

以上计算出来的都是输出额定电流所需的最小电感量，设计中需要考虑制造商的精度，通常变压器的电感量精度是±10%。因此，为了保证批量生产时能满足最低电感量的要求，需要在计算值的基础上增加10%。

## 6) 计算初次级匝数：

为了抑制反激变压器工作时产生的音频噪声，一般需要控制最大磁通密度 $\mathsf { B } _ { \mathsf { M A X } }$ 不超过3000高斯，在噪声要求很高的应用中，甚至需要低于2500高斯。变压器的匝数越多，磁通密度越小，变压器体积越大，导线损耗也越大。初级匝数计算如下：

$$
N _ {P} = \frac {L _ {P} * I _ {L I M I T \_ M A X}}{B _ {M A X} * A _ {E}}
$$

其中，初级电流峰值I 建议取电气参数表中${ \mathsf { V C S } } _ { \mathsf { L I M I } }$ 的上限值与Rcs的比值， $\mathsf { B } _ { \mathsf { M A X } }$ 为设定的最大磁通密度， $\mathsf { A } _ { \mathsf { E } }$ 为磁芯的有效截面积。然后通过匝比计算次级匝数N ，并对计算结果进行取整，最后代入上式进行验证，直到 $3 M A X$ 满足要求为止。

7) 初次级电流有效值计算：

CCM模式下，初级绕组有效值电流为：

$$
I _ {P \_ R M S} = I _ {L I M I T \_ M A X} * \sqrt {\left(1 - K _ {P} + \frac {K _ {P} {} ^ {2}}{3}\right) * D _ {M A X}}
$$

次级绕组电流有效值为：

$$
I _ {S \_ R M S} = I _ {L I M I T \_ M A X} * \frac {N _ {P}}{N _ {S}} * \sqrt {\left(1 - K _ {P} + \frac {K _ {P} ^ {2}}{3}\right) * (1 - D _ {M A X})}
$$

DCM模式下，需要根据最终的初级电感重新计算 $\frac { \sum \limits _ { i = 1 } ^ { n } } { \sum \limits _ { k } ^ { n } }$ 大占空比D<sub>MAX\_DCM</sub>：

$$
D _ {M A X \_ D C M} = \frac {2 * P _ {O}}{V _ {D C \_ M I N} * I _ {L I M I T \_ M A X} * \eta}
$$

初级绕组有效值电流为：

$$
I _ {P \_ R M S} = I _ {L I M I T \_ M A X} * \sqrt {\frac {D _ {M A X \_ D C M}}{3}}
$$

次级绕组电流有效值为：

$$
I _ {S \_ R M S} = I _ {L I M I T \_ M A X} * \frac {N _ {P}}{N _ {S}} * \sqrt {\frac {V _ {D C \_ M I N} * D _ {M A X \_ D C M}}{3 * V _ {O R}}}
$$

## 8) 电流密度和绕组线径：

一般根据散热条件选择电流密度，通常无风密闭的环境电流密度 $4 { \sim } 6 \mathsf { A } / \mathsf { m m } ^ { 2 }$ ，散热条件较好的情况下选择$6 { \sim } 1 0 \mathsf { A } / \mathsf { m m } ^ { 2 }$ 。然后根据步骤7计算的绕组电流有效值计算所需的线径。

## 输出电容的选择

输出电容的作用是滤除次级绕组电流中的交流成分，提供稳定的直流电压给负载，一般根据输出电压纹波要求来选取合适的电容。当输出电流恒定时，输出电压纹波主要由输出电容的 ESR以及容量决定。

$$
\Delta V _ {O U T} = \Delta V _ {E S R} + \Delta V _ {C}
$$

实际应用中，为了得到较小的 ESR，电容量相对比较大，因此由容量产生的输出电压纹波很小，几乎可以忽略，电压纹波主要由电容的 ESR产生：

$$
\Delta V _ {O U T} \cong \Delta V _ {E S R} = I _ {L I M I T \_ M A X} * \frac {N _ {P}}{N _ {S}} * E S R
$$

ESR 不仅产生输出电压纹波，纹波电流在 ESR 中产生的损耗还会导致电容发热，缩短电解电容的寿命，因此电解电容一般都会有纹波电流限制。流进电解电容的纹波电流有效值为：

$$
I _ {R I P P L E} = \sqrt {I _ {S _ {-} R M S} ^ {2} - I _ {O} ^ {2}}
$$

电容厂家的手册中一般给出的是 100℃环境温度下的额定纹波电流有效值，实际应用中的环境温度要低得多，计算电容的额定纹波电流有效值时需要乘以对应的温度因子。当一个电容的纹波电流不能满足时，可以使用多个电容并联。

## 输出二极管选择

在 CCM 模式下，初级 MOSFET 开通瞬间次级二极管反向恢复电流会通过变压器耦合到初级，流经 MOSFET 并产生损耗，同时也会产生 EMI 问题，过大的电流尖峰还可能会导致MOSFET损坏。DCM模式下，虽然正常工作没有反向恢复问题，但是开机和输出短路等条件下依然是 CCM。因此，次级整流输出二极管一般选择超快恢复二极管或者肖特基二极管。变压器匝比确定后，计算次级二极管反向电压为：

$$
V _ {R} = \frac {V _ {D C \_ M A X} * N _ {S}}{N _ {P}} + V _ {O U T}
$$

常用的肖特基二极管耐压一般小于 200V，更高耐压的应用需要选择超快恢复二极管。额定电流一般选取输出电流的3倍或以上。

## 降低空载功耗

BP86226P 可通过高压启动电路通过 DRAIN 端对 $\mathsf { V } _ { \mathsf { C C } }$ 电容充电，通常无需在变压器上使用辅助或偏置绕组。增加辅助绕组可以进一步降低空载功耗。当 $\mathsf { V } _ { \mathsf { C C } }$ 电压高于14.5V，高压供电电路关闭，由辅助绕组通过一个电阻向VCC供电（如图10所示）。应选择合适的电阻和辅助绕组匝数，保证高压供电电路关闭，同时避免 $\mathsf { V } _ { \mathsf { C C } }$ 电压过高。过高的 $\mathsf { V } _ { \mathsf { C C } }$ 可能导致功耗增加， $\mathsf { V } _ { \mathsf { C C } }$ 高于 32V 将触发 OVP 保护。

![](images/8df50ccc7c13c84b8d755d9d15caa4626973e9cb99b9e3885a7598128030ea21.jpg)  
图 10. 辅助绕组供电电路

## 钳位电路计算

反激变换器中由于变压器漏感的存在，在开关管关断瞬间会产生很大的尖峰电压，使得开关管承受较高的电压应力。因此，为确保反激变换器安全可靠工作，必须引入钳位电路吸收漏感能量。其中RCD钳位电路因结构简单、成本低、性能可靠而被广泛应用，如图11所示。初级MOSFET关断时，漏感中的能量通过二极管D1，衰减电阻R2转移到钳位电容C1中，然后通过电阻R1消耗掉。R2的作用是衰减变压器漏感与钳位电容C1形成的高频振荡，一般取20\~100Ω之间，阻值太小起不到衰减作用，太大就会导致漏感能量不能进入钳位电容，使得钳位电路不起作用。钳位二极管D1在小功率应用(≤10W)中可以使用普通二极管，好处是较慢的反向恢复时间会使得钳位电容中的能量部分转移到次级，提高轻载效率，同时对高频振荡起到衰减的作用。功率较大时，普通二极管的反向恢复损耗会导致发热比较严重，因此需要使用快恢复二极管。

![](images/d4eb449478ea2cbe8488ee0f93ddd668c05f6ffe892edc3c52e2f2623c240a9d.jpg)  
图11. RCD钳位电路

钳位电阻R1和钳位电容C1的计算过程如下，首先计算MOSFET关断瞬间漏感两端电压：

$$
V _ {L k} = V _ {C L A M P} - V _ {O R}
$$

其中， ${ \mathsf { V } } _ { \mathsf { C L A M P } }$ 为钳位电容上的电压，流过漏感的电流斜率为：

$$
\frac {d i _ {L k}}{d t} = - \frac {V _ {C L A M P} - V _ {O R}}{L _ {K}}
$$

漏感电流从I<sub>PEAK</sub>下降到0的时间为:

$$
t _ {S} = \frac {L _ {K} * I _ {P E A K}}{V _ {C L A M P} - V _ {O R}}
$$

钳位电路消耗的功率为：

$$
P _ {C L A M P} = \frac {1}{2} * f _ {S} * L _ {L K} * I _ {P E A K} ^ {2} * \frac {V _ {C L A M P}}{V _ {C L A M P} - V _ {O R}}
$$

钳位电阻计算：

$$
R _ {1} = \frac {V _ {C L A M P} ^ {2}}{P _ {C L A M P}} = \frac {2 * V _ {C L A M P} * (V _ {C L A M P} - V _ {O R})}{f _ {S} * L _ {L K} * I _ {P E A K} ^ {2}}
$$

钳位电容计算：

$$
C _ {1} = \frac {V _ {C L A M P}}{\Delta V _ {C L A M P} * R _ {1} * f _ {S}}
$$

根据经验值， $\Delta V _ { \mathsf { C L A M P } }$ 可取为2%\~5% $^ { \star } \mathsf { V } _ { \mathsf { C L A M P } }$ ，V<sub>CLAMP</sub>一般选为2\~2.5倍的 $N _ { { \mathsf { O R } } }$

## 降低音频噪声

反激变换器的音频噪声来源主要是变压器、钳位电容和辅助供电电容。电容的噪声主要是因为瓷片电容的压电效应导致，钳位电容可以选择X7R材质，相比Z5U材质对音频噪声有较大改善，也可以使用没有压电效应的薄膜电容。辅助供电电容尽量使用电解电容，以避免轻载时由于较低的开关频率而产生噪声。变压器的噪声主要是因为线包和磁芯的震动，通过浸凡立水可以有效改善线包的震动。磁芯的震动可以通过降低最大磁通密度来改善，最大不要超过3000高斯，在噪声要求很高的应用中，甚至需要低于2500高斯。同时，在磁芯中柱点胶固定能进一步降低音频噪声。

## PCB Layout 指南

在设计 BP86226P 的 PCB 时，需要遵循以下建议：

1) VCC电容必须直接靠近VCC和GND引脚放置，与电容的连接走线应尽量短。建议使用 X7R材质的陶瓷电容。

2) 芯片 GND 和辅助供电绕组的地应分别单独接到母线电容负端。

3) 为了降低辐射干扰，应减小高频功率环路面积。初级母线电容、变压器绕组和芯片组成的环路面积尽可能小；次级绕组、二极管和输出滤波电容组成的环路面积尽可能小；初级绕组和钳位电路组成的环路面积尽可能小。

4) DRAIN引脚（MOSFET漏极）是散热的主要途径，可以在DRAIN引脚覆铜来降低芯片温度，但过大覆铜可能导致 EMI 问题，需要按实际表现折中设计。可以在次级续流二极管两端覆铜增强散热，建议主要将铜皮铺在二极管阴极端。

5) 应将 Y 电容放置在初级输入滤波电容正端和次级滤波电容地之间，这样放置可以使高频共模浪涌电流远离芯片，从而避免芯片在雷击时受到干扰。如果在输入端使用了π 型 EMI 滤波器，那么滤波器内的电感应放置在输入滤波电容的负极之间。

6) ESD 放电针应直接连接在初级输入滤波电容正端和次级滤波电容地或者输出正端之间，并远离芯片控制电路。

## 封装信息

![](images/d5d74fcd1ae80820a0120d2ce9c99ca31ab41cfec3db87fa8dadb31945b2d9b1.jpg)  
DIP-8封装外形尺寸

![](images/f22d91d6c4112c1524f26c6ba8cc40877132345ab46eb6fa27d6ea9cf69faa89.jpg)

![](images/7786c434e36743ad1e98564c0b60845dcbc08644ebbc75bd661a90648aacae13.jpg)

![](images/cb755355bfabf9a38a1aefcb8761919fc1ed0ac5ca32ab046be5ba7763841c5b.jpg)  
SECTION B-B

COMMON DIMENSIONS (UNITS OF MEASURE=MILLIMETER)

<table><tr><td>SYMBOL</td><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A</td><td>-</td><td>-</td><td>4.80</td></tr><tr><td>A1</td><td>0.40</td><td>-</td><td>-</td></tr><tr><td>A2</td><td>3.10</td><td>-</td><td>3.50</td></tr><tr><td>b</td><td>0.355</td><td>-</td><td>0.559</td></tr><tr><td>B1</td><td colspan="3">1.52 REF</td></tr><tr><td>c</td><td>0.203</td><td>-</td><td>0.356</td></tr><tr><td>D</td><td>9.10</td><td>-</td><td>9.50</td></tr><tr><td>E1</td><td>6.25</td><td>-</td><td>6.70</td></tr><tr><td>e</td><td colspan="3">2.54 BSC</td></tr><tr><td>eB</td><td>7.62</td><td>-</td><td>9.30</td></tr><tr><td>L</td><td>2.92</td><td>-</td><td>3.81</td></tr></table>

NOTES:  
1. ALL DIMENSIONS MEET JEDEC STANDARD MS-O12F  
2. ALL DIMENSIONS DO NOT INCLUDE MOLD FLASH OR PROTRUSIONS

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td></td><td></td><td></td></tr></table>

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。

## 电子器件报废说明

该产品在生命周期结束后，由客户按照一般电子产品的报废流程进行处理。