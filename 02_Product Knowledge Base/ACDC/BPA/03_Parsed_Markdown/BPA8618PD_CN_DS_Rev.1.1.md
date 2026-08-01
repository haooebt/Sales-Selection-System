## BPA8618PD集成高效率反激式开关电源驱动芯片

## 概述

BPA8618PD 是一款高性能、高集成度、低待机功耗的开关电源驱动芯片，适用于全电压范围 85\~265VAC 输入的反激式变换器应用。

BPA8618PD 芯片内部集成了 750V 高压 MOSFET、高压启动和自供电电路、电流采样电路。采用简单的脉冲数控制，无需外部环路补偿电路，具有较高的环路带宽和快速的动态响应。采用 132kHz 的开关频率，能够有效地减小变压器体积，采用了频率调制技术以实现优异的 EMI 性能。高集成度和优化的控制技术极大地减少了外围器件数量，节省了系统成本和体积，同时提高了可靠性。

BPA8618PD 提供了丰富的保护功能，包括输出短路保护、输出过压保护、输出过载保护、反馈开路保护、逐周期限流、过温保护等。另外增加了输入过压和欠压保护，能有效保护功率MOSFET，使系统更加安全可靠。

BPA8618PD 采用 DIP-7 封装，增加了 MOSFET 漏极到其它低压管脚的爬电距离，使得芯片能够应用于较复杂的工作环境。影响 EMI 性能。

![](images/cdc43fbbc7121488bc2f4d2ed59da86cc4f7723347738e2ab9ebac1fcd39c101.jpg)

## 特点

 内部集成 750V 高压 MOSFET

 集成高压启动和自供电电路

低待机功耗，<50mW@230VAC 辅助绕组供电，<150mW@230VAC 高压自供电

 优异的动态响应速度，无输出过冲

 内置软启动功能

 改善 EMI 性能的频率调制技术

 高低压脚之间爬电距离>3mm

 通过 MOSFET 源极 PCB 散热，不影响 EMI

 保护功能

输入欠压保护(Brown-in)

输入过压保护(Input OVP)

输出短路保护(SCP)

输出过压保护(Output OVP)

 输出过载保护(OLP)

 反馈开路保护

 逐周期限流(Cycle-by-Cycle)

 迟滞过温保护(OTP)

## 应用领域

 家用电器辅助电源

 PC 待机电源

 通信、工业控制辅助电源

 适配器、充电器

## 典型应用

![](images/a6feaeb599add79bde8cb534483b41de9d68523e56a1ea16fdb22d48545813a5.jpg)  
图 1. BPA8618PD 典型反激应用电路

定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BPA8618PD</td><td>DIP-7</td><td>管装50颗/管</td><td>BPA8618XXXXYDZZWWP</td></tr></table>

## 管脚封装

![](images/e97026cbf32a3d661903fd1060bafa241babe46941c8fcf99709721ec456eb5b.jpg)  
图 2. DIP-7 管脚封装图

BPA8618：产品型号

XXXXXYD：批次号

ZZ：标示

WW：周号

P：封装代码（P 代表 DIP）

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>FB</td><td>输出反馈控制端,连接到光耦集电极。光耦发射极连接到芯片地</td></tr><tr><td>2</td><td>VCC</td><td>芯片电源端,连接一个0.1μF~1μF的陶瓷电容到芯片地做旁路电容</td></tr><tr><td>4</td><td>DRAIN</td><td>芯片内部高压MOSFET漏极,此引脚也向芯片内部提供自供电电流</td></tr><tr><td>5、6、7、8</td><td>GND</td><td>芯片地,内部MOSFET源极</td></tr></table>

输出功率推荐表

<table><tr><td colspan="5">输出功率表</td></tr><tr><td rowspan="2">型号</td><td colspan="2">230VAC ±15%</td><td colspan="2">85~265VAC</td></tr><tr><td>适配器(注 1)</td><td>开放式(注 2)</td><td>适配器(注 1)</td><td>开放式(注 2)</td></tr><tr><td>BPA8618PD</td><td>16W</td><td>24W</td><td>10W</td><td>18W</td></tr></table>

注 1： 最小连续输出功率，测试条件为封闭式塑料外壳，环境温度为 40℃。  
注 2： 最小连续输出功率，测试条件为开放式环境，环境温度为 50℃。

极限参数(注 3) (无特别说明情况下， ${ \sf T } _ { \sf A } = 2 5 ^ { \circ } { \sf C } )$

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td> $V_{DRAIN}$ </td><td>内部高压 MOSFET 漏极到源极电压</td><td>-0.3~750</td><td>V</td></tr><tr><td> $I_{DS\_MAX}$ </td><td>内部高压 MOSFET 最大漏极电流(注 4)</td><td>1290 (2430)</td><td>mA</td></tr><tr><td> $V_{CC}$ </td><td> $V_{CC}$  电压</td><td>-0.3~9</td><td>V</td></tr><tr><td> $I_{CC\_MAX}$ </td><td> $V_{CC}$  引脚最大电流</td><td>20</td><td>mA</td></tr><tr><td> $V_{FB}$ </td><td>输出电压反馈端电压</td><td>-0.3~9</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注 5)</td><td>1.5</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>结到环境的热阻(注 6)</td><td>80</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40 to 150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55 to 150</td><td>°C</td></tr><tr><td>ESD</td><td>人体模型 ESD(注 7)</td><td>2</td><td>kV</td></tr></table>

注 3：极限参数是指超出该工作范围，芯片有可能损坏。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。  
注 4：当漏极电压低于 400V 时，可允许更高的最大漏极电流。  
注 5：温度升高最大功耗一定会减小，这也是由 T<sub>JMAX</sub>, θ<sub>JA</sub>,和环境温度 T<sub>A</sub>所决定的。最大允许功耗为 $P _ { \tt D M A X } = \left( \mathbb { T } _ { \tt J M A X } - \mathbb { T } _ { \tt A } \right) / \theta _ { \tt J A }$ 或是极限范围给出的数字中比较低的那个值。  
注 6：1 平方英寸双层 PCB 板，按照 JEDEC 标准测试。  
注 7：按照 JEDEC 标准测试, 100pF 电容通过 1.5kΩ 电阻放电。

电气参数 (注 8)（无特别说明情况下， $\mathsf { V } _ { \mathsf { C C } } = 5 . 8 \mathsf { V } , \mathsf { T } _ { \mathsf { A } } = 2 5 ^ { \circ } \mathsf { C } )$

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">VCC供电部分</td></tr><tr><td> $V_{CC\_ON}$ </td><td>VCC启动阈值电压</td><td></td><td>5.3</td><td>5.8</td><td>6.3</td><td>V</td></tr><tr><td> $V_{CC\_HYS}$ </td><td>VCC电压迟滞</td><td></td><td>0.7</td><td>0.9</td><td>1.3</td><td>V</td></tr><tr><td> $V_{CC\_SHUNT}$ </td><td>VCC分流电压</td><td></td><td>5.9</td><td>6.3</td><td>6.7</td><td>V</td></tr><tr><td> $I_{CC\_STANDBY}$ </td><td>VCC待机电流</td><td>FB电流&gt; $I_{FB\_DIS}$ (MOSFET无开关动作)</td><td></td><td>310</td><td></td><td>μA</td></tr><tr><td> $I_{CC}$ </td><td>VCC最大工作电流</td><td>FB开路(MOSFET工作于开关频率)</td><td></td><td>515</td><td></td><td>μA</td></tr><tr><td> $I_{CH1}$ </td><td rowspan="2">内部高压电流源提供给VCC电容充电电流</td><td> $V_{CC}=0V,T_J=25°C$ </td><td></td><td>-6.3</td><td></td><td>mA</td></tr><tr><td> $I_{CH2}$ </td><td> $V_{CC}=4V,T_J=25°C$ </td><td></td><td>-4.1</td><td></td><td>mA</td></tr><tr><td> $I_{SD}$ </td><td>VCC引脚关机阈值电流</td><td></td><td>6.2</td><td>6.9</td><td>8.1</td><td>mA</td></tr><tr><td colspan="7">控制功能</td></tr><tr><td rowspan="2"> $V_{FB}$ </td><td rowspan="2">FB引脚电压</td><td> $I_{FB}=25μA$ </td><td>2.3</td><td>2.8</td><td>3.1</td><td>V</td></tr><tr><td> $I_{FB}=-25μA$ </td><td>0.8</td><td>1.4</td><td>1.6</td><td>V</td></tr><tr><td> $I_{FB\_DIS}$ </td><td>使MOSFET驱动脉冲关闭的FB引脚阈值电流</td><td></td><td>-150</td><td>-115</td><td>-90</td><td>μA</td></tr><tr><td> $t_{OLP}$ </td><td>过载保护延迟时间</td><td></td><td></td><td>45</td><td></td><td>ms</td></tr><tr><td> $t_{AR}$ </td><td>自动重启导通时间/故障检测时间</td><td></td><td></td><td>8192</td><td></td><td>cycles</td></tr><tr><td> $t_{AR\_OFF1}$ </td><td>自动重启等待时间1</td><td></td><td></td><td>1.8</td><td></td><td>s</td></tr><tr><td> $t_{AR\_OFF2}$ </td><td>自动重启等待时间2</td><td></td><td></td><td>200</td><td></td><td>ms</td></tr><tr><td> $t_{SS}$ </td><td>软启动时间</td><td></td><td></td><td>192</td><td></td><td>cycles</td></tr><tr><td> $D_{AR}$ </td><td>自动重启占空比</td><td></td><td></td><td>3.3</td><td></td><td>%</td></tr><tr><td colspan="7">振荡器</td></tr><tr><td rowspan="2"> $f_{OSC}$ </td><td rowspan="2">振荡器频率</td><td>平均值</td><td>124</td><td>132</td><td>140</td><td>kHz</td></tr><tr><td>峰-峰值</td><td></td><td>8</td><td></td><td>kHz</td></tr><tr><td> $f_{M}$ </td><td>调制频率</td><td></td><td></td><td>1</td><td></td><td>kHz</td></tr><tr><td> $D_{MAX}$ </td><td>最大占空比</td><td></td><td></td><td>65</td><td></td><td>%</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $I_{LIMIT\_MAX}$ </td><td>最大电流限值(注9)</td><td> $T_J=25°C$ </td><td>508</td><td>550</td><td>590</td><td>mA</td></tr><tr><td> $I_{LIMIT\_MIN}$ </td><td>最小电流限值</td><td> $T_J=25°C$ </td><td></td><td> $0.4*I_{LIMIT\_MAX}$ </td><td></td><td>mA</td></tr><tr><td> $I^{2}f$ </td><td>功率系数</td><td> $T_J=25°C$ </td><td>0.9×</td><td> $I^{2}f$ </td><td>1.18×</td><td> $A^{2}Hz$ </td></tr><tr><td> $t_{LEB}$ </td><td>前沿消隐时间</td><td> $T_J=25°C$ </td><td></td><td>300</td><td></td><td>ns</td></tr><tr><td> $t_{OFF\_DELAY}$ </td><td>MOSFET关断延时</td><td> $T_J=25°C$ </td><td></td><td>100</td><td></td><td>ns</td></tr><tr><td colspan="7">功率管</td></tr><tr><td> $R_{DS\_ON}$ </td><td>功率管导通阻抗</td><td> $I_{DS}=55mA,T_J=25°C$ </td><td></td><td>4.5</td><td>5.2</td><td>Ω</td></tr><tr><td> $I_{DSS}$ </td><td>功率管关断漏电流</td><td> $V_{DS}=600V,T_J=25°C$ </td><td></td><td></td><td>110</td><td>μA</td></tr><tr><td> $BV_{DSS}$ </td><td>功率管的击穿电压</td><td> $V_{CC}=6.2V,V_{FB}=0V,T_J=25°C$ </td><td>750</td><td></td><td></td><td>V</td></tr><tr><td> $V_{DS\_SUP}$ </td><td>最小漏极启动电压</td><td></td><td></td><td>50</td><td></td><td>V</td></tr><tr><td colspan="7">过/欠压保护</td></tr><tr><td> $V_{DRAIN\_OV}$ </td><td>MOSFET 漏极过压保护的电压阈值</td><td>保护逻辑如图 11 所示</td><td>570</td><td>600</td><td>630</td><td>V</td></tr><tr><td> $t_{OV\_BLANK}$ </td><td>漏极过压检测屏蔽时间</td><td></td><td></td><td>1.2</td><td></td><td>μs</td></tr><tr><td> $t_{OV\_DELAY}$ </td><td>漏极过压检测持续时间</td><td></td><td></td><td>1</td><td></td><td>μs</td></tr><tr><td> $V_{HYS\_OV}$ </td><td>漏极过压保护迟滞</td><td></td><td></td><td>150</td><td></td><td>V</td></tr><tr><td> $t_{REC\_OV}$ </td><td>退出过压保护持续检测时间</td><td></td><td></td><td>30</td><td></td><td>μs</td></tr><tr><td> $V_{IN\_BR}$ </td><td>Brown-in 电压</td><td></td><td>77</td><td>85</td><td>93</td><td>V</td></tr><tr><td> $t_{BR}$ </td><td>Brown-in 持续检测时间</td><td></td><td></td><td>30</td><td></td><td>μs</td></tr><tr><td colspan="7">过温保护</td></tr><tr><td> $T_{OTP}$ </td><td>过温保护阈值</td><td></td><td></td><td>145</td><td></td><td>°C</td></tr><tr><td> $T_{HYST}$ </td><td>过温保护迟滞</td><td></td><td></td><td>70</td><td></td><td>°C</td></tr></table>

注 8：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。  
注 9：电气参数 I<sub>LIMIT\_MAX</sub>是 FT 用 DC 方式测试，无关断延时。实际系统由于关断延时，I<sub>LIMIT\_MAX</sub>会比设计值高一点，高压更明显。此偏差受到输入电压和电感量影响。

## 内部结构框图

![](images/6d6bd381d36b20fa4270aa6782e7f72abf2e1c86d7c7dc2c92af2d273b6bb86d.jpg)  
图 3. BPA8618PD 内部框图

## 功能描述

BPA8618PD 芯片在一个器件上集成了 750V 高压功率 MOSFET、高压启动和自供电电路、电流采样电路、以及振荡器、逻辑控制、前沿消隐、频率调制等控制电路和一系列保护电路（图 3所示）。与传统的 PWM(脉宽调制)控制器不同，它使用简单的脉冲数控制方式来调整输出电压，具有较高的环路带宽和快的动态响应，并且无需外部环路补偿电路。增加了集成的输入过压保护功能，无需外接采样电阻，当输入电压偏高时控制器停止工作，能有效保护功率 MOSFET，使系统更加安全可靠。同时，增加的软启动功能可以减小启动时功率器件的电压电流尖峰。高集成度和经过优化的控制技术极大地减少了外围器件数量，节省了系统成本和体积，使得 BPA8618PD 特别适合于隔离反激辅助电源应用。 10：以下描述到的参数均为电气参数列表中的典型值，除非特别说明是最大或最小值）

## 振荡器

内部振荡器产生的平均时钟频率为 132kHz。振荡器电路生成最大占空比(DC<sub>MAX</sub>)信号及每个开关周期开始的时钟信号。对开关频率进行一定的调制可以降低 EMI 的平均和准峰值，BPA8618PD 芯片在 132kHz 基础上设置 8kHz 峰峰值用来降低EMI，频率调制速率为 1kHz。频率调制功能可以通过示波器观察到，测试时应把示波器触发设定在漏极电压波形的下降沿来测量。

## 高压启动与 VCC 供电

系统上电后，当母线电压达到芯片最小漏极启动电压 $V _ {mathsf { D S } } \mathsf { \Omega } _ { \mathsf { S U P } }$ 时，内部高压启动电路通过 DRAIN 端对 VCC 电容充电。当 VCC 电压达到 4.9V 时，芯片检测 MOSFET 漏极电压是否达到 Brown-in 电压阈值 $V _ { \Delta N \_ B R }$ （85V）。如果没有达到 $\mathsf { V } _ { \mathsf { I N \_ B R } } ,$ ，则维持 VCC电压在 4.9V 直到输入电压升高到使上述条件满足。VCC 电压继续升高达到芯片启动阈值电压 V<sub>CC\_ON</sub>（5.8V）时，芯片内部控制电路开始工作（图 4 所示）。

![](images/ba2ac3ac2ea7cc7baa4a5a73d8d4b08846749c99e3016abd21c4aa0c574c8d95.jpg)  
图 4. 高压启动时序

芯片正常工作时，在 MOSFET 关断期间，自供电电路通过DRAIN 脚对 VCC 电容充电并稳压到 5.8V。由于芯片需要的VCC 电流极低，无需辅助绕组供电，0.1μF 的 VCC 电容就可以满足 MOSFET 导通期间芯片的供电需求，节省了变压器成本。

这种情况下，空载功耗小于 150mW@230VC。高压自供电VCC 电压不受输出电压的影响，非常适合应用在需要恒流到0V 的充电器或适配器中。由于高压供电属于线性稳压，尽管芯片的工作电流小，空载功耗的大部分损耗还是来自于高压供电电路。通常需要关闭高压供电，使用辅助绕组给 VCC 供电，以实现超低的空载功耗。当辅助绕组电压通过电阻向 VCC 供电电流超过芯片所需电流时，VCC 电压高于 5.8V，高压供电电路关闭。BPA8618PD 在 VCC 端内置了分流电路，分流电路将VCC 电压钳位到 $\mathsf { V } _ { \mathsf { C C } _ { - } \mathsf { S H U N T } } ( 6 . 3 \mathsf { V } )$ ，通过优化供电电阻值，可以使空载功耗降低到 50mW 以下。

## VCC 欠压保护

VCC 引脚具有欠压保护功能。工作过程中，由于异常导致 VCC电压下降到低于 V<sub>CC\_ON</sub>-V<sub>CC\_HYS</sub>（4.9V）时，欠压保护电路使芯片关断功率 MOSFET，停止开关动作。VCC 电压需要回升到$V _ { C C \_ O N }$ （5.8V）才能重新开启功率 MOSFET，并且会进入软启动过程（图 5 所示）。

![](images/f0eb7e0c610de7c55d40cc491b580fb82e713087f193d6d576986330a2060570.jpg)  
图 5. VCC 欠压保护时序

## VCC 引脚实现输出过压保护

VCC 引脚同时可用来实现输出过压保护功能，外部电压通过电阻连接到 VCC 时，内部的分流电路会将 VCC 电压钳位在V<sub>CC\_SHUNT</sub> 。当流入 VCC 引脚的电流超过阈值电流 I<sub>SD</sub>（6.9mA）时，触发芯片保护，停止 MOSFET 开关，关闭输出，内部的自动重启电路等待 t （1.8s）后重新启动系统，恢复工作，如果启动后故障没有消除，则重新触发相应的保护电路工作。实现输出过压保护的方式是在辅助绕组供电端到 VCC之间串联一个稳压二极管（图 6 所示）。当辅助绕组产生的电压高于稳压管和 VCC 钳位电压之和时，电流将通过稳压管流入VCC 引脚，当此电流超过阈值电流 $1 _ { \mathsf { S D } }$ 时，即触发芯片保护。

VCC 电容除起到内部滤波的作用，还作为外部滤波器，避免噪音信号引起保护电路误触发。为使电容达到有效的高频滤波，应将电容尽量靠近 VCC 引脚。

![](images/ac5b72aaf06f77649a6686c328f57f90a261fbd68ef3ffede46d222e83408e93.jpg)  
图 6. VCC 引脚实现输出电压保护

## 软启动

芯片具有软启动功能，在软启动过程中，MOSFET 峰值电流(限流点)逐渐增加。由于启动时输出电压一般较低，MOSFET关断期间输出电压对变压器的去磁较少，容易进入深度连续模式(CCM) 使得次级整流二极管的反向恢复电流较大而导致很高的反向电压尖峰；同时由于去磁较少，原边电流在前沿消隐时间内逐渐累积，可能超过 MOSFET 安全工作区而导致失效。软启动电路通过控制启动过程中 MOSFET 峰值电流逐渐增加，可以避免原边累积过大的电流，从而降低 MOSFET 电流应力和降低次级二极管的电压尖峰。软启动过程如图 7 所示，

![](images/dae015f536fa4a514ac659f09ddb8ed35c4262fe74a197667b97e954de4e3519.jpg)  
图 7. BPA8618PD 软启动过程

起始限流值为 $4 0 \% ^ { \star } \vert _ { \mathsf { L I M I T \_ M A X } }$ ，192 个开关周期后变为最大限流点 I<sub>LIMIT\_MAX</sub>。由保护电路触发产生的自动重启也会经历一次软启动过程。

## 脉冲数控制

BPA8618PD 芯片采用脉冲数控制技术，通过控制脉冲的个数实现输出电压的调整。在每个时钟周期上升沿，比较流出 FB脚的电流与阈值电流 ${ \mathsf { I } } _ { \mathsf { F B \_ D I S } } \ ( 1 1 5 \ \mu \mathsf { A } )$ ，当 FB 电流小于 $\mathsf { I } _ { \mathsf { F B \_ D } \mathsf { s } }$ 时，开通功率 MOSFET，反之 MOSFET 保持关闭跳过该周期。因此，当前周期是否开通 MOSFET 只取决于时钟上升沿时刻的FB 电流大小，一旦开关操作确定，该周期内的开关状态不再受 FB 电流影响（图 8 所示）。当漏极电流 $\mathsf { I } _ { \mathsf { D } \mathsf { S } }$ 达到限流点或者占空比达到最大占空比时，控制电路关断 MOSFET，直到下一个时钟信号到来。

![](images/b73e23daf9880ef5a0f97667e01c36efe995d83ee959ba5292a004b80562f32e.jpg)  
图 8. 脉冲数控制

在典型应用中，FB 脚连接到光耦的集电极，光耦发射极接地，光耦次级侧二极管通过串联 TL431 接到输出电压两端。当脉冲数过多时，输出电压会偏高，光耦电流增加，FB 脚电流也随之增加，使 MOSFET 不开通从而减小脉冲数形成闭环控制。也可以用稳压管替代 TL431，电路更简单，但会降低输出电压精度。与传统的 PWM 相比，脉冲数控制具有较高的环路带宽和快速的动态响应，因此开机时输出电压没有过冲。内部控制器通过监测脉冲序列中脉冲个数来判断负载的大小而设置合适限流点。输出负载跟脉冲数和限流点的平方成正比。在最大负载情况下，芯片将限流点设为最大值，同时几乎每个时钟周期都执行开关操作；在稍微降低一些负载的情况下，芯片将跳过一些时钟周期不执行开关操作来维持输出电压的恒定；在中等负载情况下，芯片将跳过更多时钟周期同时降低限流点；较轻负载情况下，芯片会将限流点进一步降低而避免过多的时钟周期不执行开关操作，使得有效的开关频率上升，从而避免进入音频频率范围；在空载或者极轻载情况下，限流点下降到最低，较小的峰值电流在磁芯中产生的磁通密度也相应减小，即使开关频率在音频范围也不会有明显的音频噪声。

## 电流检测与限制

BPA8618PD 芯片内部集成电流采样电路，对 MOSFET 电流逐周期限制，无需外加电流采样电阻，以实现电流模式控制。当电流超过内部限流点阈值(I<sub>LIMIT</sub>)时，在该周期剩余阶段会关断功率 MOSFET，直到下一个开关周期开始。内置前沿消隐(Leading Edge Blanking)时间 $\tan \angle C _ { \mathsf { L E B } }$ 可以避免由于外部电路的容性或次级二极管的反向恢复导致 MOSFET 在开通瞬间出现的电流尖峰误触发 MOSFET 关断。

## 短路/过载/开路保护

BPA8618PD 通过 FB 引脚检测输出短路、过载、反馈开路故障。当上述故障发生时，光耦不从 FB 脚拉电流，使 FB 电流小于阈值电流 $\mathsf { I } _ { \mathsf { F B \_ D } \mathsf { s } }$ 致使每个时钟周期都执行开关操作。上电启动或者自动重启后，如果 FB 电流在 t<sub>AR</sub> 时间内持续小于 I<sub>FB\_DIS</sub>，芯片会触发短路保护并进入自动重启时 $\mathtt { t } _ { \mathtt { A R \_ O F F 1 } } ( 1 . 8 5 )$ 后重新启动。正常工作过程中（或者 电流超出$\mathsf { I } _ { \mathsf { F B \_ D } \mathsf { s } }$ 使芯片丢过脉冲），当芯片检测到 FB 电流小于 I 并且持续时间超过 t入自动重启时序，芯 重新启动，如图9 所示。在自动重启等待时间内，如 出现输入电压欠压，那么需要等待输入电压恢复后才重新启动。

![](images/85dcd87aefb256a41aac15f7432f24d7aba8bde67ff8d8ad0e05c8ef067da48e.jpg)  
图 9. 故障保护与自动重启时序

## 输入欠压保护（Brown-in）

芯 片 没 有 开 始 工 作 时 ， 漏 极 电 压 等 于 母 线 电 压 。 因 此，BPA8618PD 芯片在启动前通过漏极引脚(DRAIN)检测母线电压 V 实现输入欠压保护。在初次上电时，如果漏极电压低于阈值电压 V (85Vdc)，则维持 VCC 电压在 4.9V，芯片不启动，直到漏极电压高于 $V _ { \mathsf { I N \_ B R } }$ 并持续 $\tan \left( 3 0 up upmu s \right)$ 时间，VCC 电压才继续升高达到芯片启动阈值电压 $\mathsf { V c c } _ { - } \mathsf { o n } \left( 5 . 8 \mathsf { V } \right)$ ，芯片开始工作。自动重启等待时间内，如果漏极电压下降到低于 $\mathsf { V } _ { \mathsf { I N \_ B R } } ,$ 停止计时并重启计时器，待漏极电压上升到 $V _ { \Delta N \_ B R }$ 以上并持续t 时间则故障排除。输入欠压故障排除后，芯片进入软启动过程。输入欠压保护可以避免关机后反复重启导致的输出电压闪烁问题。需要注意的是，这里的输入欠压保护只在芯片启动之前（初次上电或者自动重启）进行，当输入电压不满足条件时芯片不启动。一旦启动，芯片的输入欠压保护模块不再工作，直到下一次启动。

## 输入过压保护

BPA8618PD 芯片内置输入过压保护功能，不需要外接采样电阻即可实现。当检测到漏极电压过高时芯片停止开关工作，因此可以降低功率 MOSFET 漏极电压应力，避免 MOSFET 由于电压过高而损坏，提高系统可靠性同时不增加成本。初次上电时，当 VCC 电压达到 $V _ { C C \_ O N }$ 后，如果检测到漏极电压超过$\mathsf { V } _ { \mathsf { D R A I N \_ O V } } \left( 6 0 0 \mathsf { V } \right)$ ， 则 芯 片 不 启 动 ， 直 到 漏 极 电 压 下 降 到$\mathsf { V } _ { \mathsf { D R A I N \_ O V } } - \mathsf { V } _ { \mathsf { H Y S \_ O V } }$ (450V)以下并持续 $\mathsf { t } _ { \mathsf { R E C } _ { - } \mathsf { O V } } \left( 3 0 \mu \mathsf { s } \right)$ 后重新启动芯片，如图 10 所示。

![](images/7c17cf5e98b56b1772052c07b5ab41fccb32ddf0bfb237113226e0c646bf7df7.jpg)

![](images/79b81005f28990e7f95a2f9ae45f39ddfc1d3914619627346fd18db9c812b978.jpg)  
图 10. 开机时输入过压

正常工作过程中，芯片在 MOSFET 关断期间检测漏极电压。MOSFET 关断后先屏蔽 $\mathsf { t o v \_ B l A N K } \left( 1 . 2 \mu \mathsf { s } \right) \mu \updownarrow$ 间，滤除由于漏感和寄生电容引起的振荡，然后开始检测漏极电压。如果漏极电压高于 $V _ { D R A I N \_ O V }$ 并且持续时间超过 $\mathsf { t o v \_ D E L A Y } \left( \mathsf { 1 } \mu \mathsf { s } \right)$ ，则判断为输入过压，芯片停止工作，等待漏极电压下降到 $V _ { \mathsf { D R A I N \_ O V } } - \mathsf { V _ { H Y S \_ O V } }$ 以下并持续 $\tan E C \_ O V$ 后重新启动芯片，如图 11 所示。

![](images/b08a1c9554ba05215cf1e8340cfc4cf235fd5cdaaa6f3398982fcbac82e10487.jpg)

![](images/8f8c5993f2c139f8901a9f74d86318617e744a8ea57515da9ad8525d9b3621e3.jpg)  
图 11. 工作过程中输入过压保护

自动重启等待时间内如果检测到漏极电压超过 $V _ { D R A I N \_ O V }$ ，则停止计时并重启计时器，直到漏极电压下降到 $V _ { \mathsf { D R A I N \_ O V } } - \mathsf { V _ { H Y S \_ O V } }$ 以下并持续 t<sub>REC\_OV</sub>时间则故障排除。输入过压故障排除后，芯片重新启动时也会先进入软启动过程。

## 过温保护

BPA8618PD 芯片内置了过温保护电路，当结温达到过温保护$( 1 4 5 ^ { \circ } \mathsf { C } )$ 时，芯片会停止工作，直到结温下降到 T<sub>OTP</sub>${ \sf T } _ { \sf H Y S T }$ 时，芯片重新启动。 ${ \sf T } _ { \sf H Y S T } \left( 7 0 ^ { \circ } { \sf C } \right)$ 为温度迟滞，较大的温度迟滞有利于把系统温度控制在一个较低的水平。

## 应用指南

输出功率选择

<table><tr><td colspan="5">输出功率表</td></tr><tr><td rowspan="2">型号</td><td colspan="2">230VAC</td><td colspan="2">85~265VAC</td></tr><tr><td>适配器</td><td>开放式</td><td>适配器</td><td>开放式</td></tr><tr><td>BPA8618PD</td><td>16W</td><td>24W</td><td>10W</td><td>18W</td></tr></table>

表1. 输出功率表

表1列出的最小连续输出功率，是基于合理的散热设计，通常在PCB上将GND引脚（内部MOSFET源极）铺铜皮或使用一个散热器，将其温度控制到 $\mathsf { I 1 0 ^ { \circ } C }$ 或以下。开放式设计的测试环境温度为 $1 5 0 ^ { \circ } \mathsf { C }$ ，密闭式适配器的测试环境温度为 $\mathsf { I } 4 0 ^ { \circ } \mathsf { C } _ { \mathsf { C } }$

## 输入电容选择

输入滤波电容对工频电压纹 波、传导EMI、以及电源抵 抗Surge的能力都起到关键的作用。为了优化变压器的设计，电容量的选取要保证直流母线电压不能过低（通常低压输入时不低于80VDC，高压输入时不低于220VDC），因此电容量取决于输出功率和电源效率。 BPA8618PD的应用场合一般功率相对较大，需要用全波整流，根据输出功率可以对输入电容进行初 步 估 计 ( 如 表 2 所 示 ) ， 全 电 压 或 低 压 输 入 时，2\~3μF/W；高压输入时，一般取1μF/W。

<table><tr><td>输入</td><td>电压范围(VAC)</td><td>输入电容(μF/W)</td><td>推荐最低母线电压(V)</td></tr><tr><td>全电压</td><td>85~265</td><td>2~3</td><td>≥80V</td></tr><tr><td>低压</td><td>85~132</td><td>2~3</td><td>≥80V</td></tr><tr><td>高压</td><td>185~265</td><td>1</td><td>≥220V</td></tr></table>

表2. 推荐输入电容值和最低母线电压

根据选定的输入电容计算最低母线电压的精确值需要求解一个复杂的方程，为简便起 $\textstyle \operatorname { \triangledown } \perp$ ，通常使用以下公式得到一个相对精确的结果：

$$
V _ {D C \_ M I N} = \sqrt {2 * V _ {A C M I N} ^ {2} - \frac {P _ {O} * (1 - 2 * f _ {L} * t _ {C})}{\eta * C _ {I N} * f _ {L}}}
$$

其中，整流桥的导通时间t 一般取3ms，可以假设效率初始值为80%，f 为输入交流电压频率， $V _ { \sf A C M I N }$ 为最低输入交流电压有效值， $\mathsf { P o }$ 为额定输出功率， $\mathsf { C } _ { \mathsf { I N } }$ 为输入电容容量。最高母线电压可以通过计算得到：

$$
V _ {D C \_ M A X} = \sqrt {2} * V _ {A C M A X}
$$

## 变压器计算

由于BPA8618PD最高限流点和开关频率固定不变，最大输出功率取决于变压器的电感量。电感量越大，最大输出功率越大，变压器体积也越大。因此，为了尽可能减小变压器体积，在满足额定输出功率要求的情况下，尽可能选取较小的电感量。变压器的计算按照以下步骤：

## 1) 选取次级反射到初级的电压 $\left( \mathsf { V } _ { 0 \mathsf { R } } \right)$

选取反射电压时，需要同时考虑最高输入电压下初级MOSFET和次级整流二极管的最高耐压值并留一定的裕量。MOSFET最高漏极电压为：

$$
V _ {D R A I N \_ M A X} = V _ {D C \_ M A X} + V _ {O R} + V _ {L K}
$$

其中， $V _ { \mathsf { L K } }$ 为漏感产生的电压尖峰， $\mathsf { V } _ { \mathsf { O R } } .$ 为次级反射到初级的电压。漏极电压波形如图12所示，通常建议漏极最高电压不超过90%的功率管击穿电压 $( \textsf { B V } _ { \sf D S S } )$ 。次级二极管的最高反向电压为：

$$
V _ {R} = \frac {V _ {D C \_ M A X} * (V _ {O U T} + V _ {D})}{V _ {O R}} + V _ {O U T}
$$

V<sub>D</sub>为次级二极管的正向导通压降， $\mathsf { V } _ { \mathsf { O U T } }$ 为输出电压。通常选取VOR=80\~100V作为起始值开始变压器计算，然后反复迭代计算以达到优化设计的目的。

![](images/9683387c511f49b8d7789059bcdd3623dbd79b3bf158e8db8161ea8d3f281111.jpg)  
图12. MOSFET漏极电压波形

变压器匝比可以通过以下表达式得到：

$$
\frac {N _ {S}}{N _ {P}} = \frac {V _ {O U T} + V _ {D}}{V _ {O R}}
$$

其中，N 和N 分别为变压器初级和次级匝数。反射电压越高，初次级匝比越大，初级漏感越大，会增加初级MOSFET电压应力和漏感产生的损耗。较高的反射电压虽然可以降低次级二极管的反向电压应力，从而可以使用较低电压的二极管，但是会增加次级的峰值和有效值电流，增加次级绕组和二极管导通损耗。同时，过高的反射电压还会引起传导EMI问题，这是由于非连续模式下初级电感和漏极寄生电容的自由振荡导致的。因此，建$\because V _ { 0 R }$ 不要超过135V。相反，过小的反射电压会降低连续模式下（低压输入时）的占空比，增加初级电流有效值，降低效率，同时次级二极管的电压应力增加。

## 2) 计算最小电感量限制：

芯片通过检测MOSFET关断时的漏极电压实现输入过压保护。MOSFET关断后先屏蔽1.2μs，开始检测漏极电压，如果漏极电压高于 $V _ { D R A l N _ { \_ } }$ <sub>OV</sub>并且持续时间超过1μs，则判断为输入过压。如果要实现过压保护，变压器的去磁时间需要大于2.2 $\scriptstyle { \mathsf { A } } { \mathsf { S } } _ { \mathsf { o } }$ 。轻负载条件下，芯片设置的限流点低，变压器去磁时间短，此时为边界条件。最小电感量可以计算如下：

$$
L _ {P \_ M I N} = \frac {V _ {O R} * t _ {R E S E T} - (V _ {D R A I N \_ O V} - V _ {O R}) * t _ {O F F \_ D e l a y}}{I _ {L I M I T \_ M I N}}
$$

其中，t<sub>RESET</sub>为最小去磁时间(2.2μs)，I<sub>LIMIT\_MIN</sub>为芯片最低限 流 点 ， 计 算 时 取 对 应 电 气 参 数 表 中 的 下 限 值，$T _ { O F F \_ D E L A Y }$ 为内置MOS关断延迟时间， $V _ { \mathrm { D R A I N \_ 0 V } }$ 为输入过压保护的最小值（570V）。

3) 计算最低输入电压下的工作模式（CCM或DCM）根据变压器伏-秒平衡，稳态工作时最大占空比为：

$$
D _ {M A X} = \frac {V _ {O R}}{V _ {O R} + (V _ {D C \_ M I N} - V _ {D S})}
$$

其中 $\mathsf { N } _ { \mathsf { D } \mathsf { S } }$ 为MOSFET导通时的平均压降，通常取10V作为近似值。DCM工作模式下的最大输出功率为：

$$
P _ {M A X \_ D C M} = \frac {1}{2} * V _ {D C \_ M I N} * I _ {L I M I T \_ M A X} * D _ {M A X} * \eta
$$

$\mathsf { I } _ { \mathsf { L I M I T } } \mathsf { \Gamma } _ { \mathrm { \Gamma } _ { \mathrm { - } } \mathrm { M A X } }$ 为芯片最高限流点，计算时取对应电气参数表中的下限值。如果 $P _ { M A X \_ D C M } < P _ { 0 }$ ，则说明DCM模式不能满足额定输出功率，需要工作于CCM模式，直接跳到步骤5；如果P<sub>MAX\_DCM</sub>≥P<sub>O</sub>，则可以工作于DCM模式，进入步骤4。

## 4) DCM模式下初级电感量计算：

$$
L _ {P} = \frac {2 * 0 . 9 * P _ {O} * [ Z * (1 - \eta) + \eta ]}{I _ {L I M I T \_ M A X} ^ {2} * f _ {S} * \eta}
$$

其中，f 为开关频率(取振荡器频率的下限值)，Z为损耗分配因子，即次级损耗占总损耗的比例，没有具体计算数据的情况下可以取0.5。初次计算时，可以假设效率为80%，后期可根据测试结果进行迭代。如果 $L _ { P } < L _ { P \_ M I N }$ 4需要减小反射电压 $\mathsf { V } _ { \mathsf { O R } }$ ，重新回到步骤1，当VOR小于60V时，需要选一个低限流点的芯片；如果 $L _ { P } > L _ { P \_ M I N }$ ，则跳到步骤7。

## 5) CCM模式下电流纹波系数计算：

CCM模式下，初级电流的波形如图13所示，电流纹波系数定义为:

$$
K _ {P} = \frac {I _ {R}}{I _ {L I M I T \_ M A X}}
$$

可以计算出初级平均电流：

$$
{I _ {A V}} {= \left(1 - \frac {K _ {P}}{2}\right) * I _ {L I M I T \_ M A X} * D _ {M A X}}
$$

输出功率与初级平均电流的关系为：

$$
P _ {O} = V _ {D C \_ M I N} * I _ {A V G} * \eta
$$

根据上面的关系式可以计算出K<sub>P</sub>值：

![](images/28aa344bd705dbfd938005948f23ecc1a08c4cbcde8f440cc83ec0f5d67dfbf0.jpg)  
图13. 连续模式下初级电流波形

如果 $\mathsf { K } _ { \mathsf { P } } { < } 0 . 6$ ，则需要增大反射电压，重新回到步骤1，当$\mathsf { V } _ { \mathsf { O R } }$ 超过135V时，需要选一 个高限流点的芯片 ；如果$K _ { \mathrm { P } } { > } 0 . 6$ ，则进入步骤 $6 _ { \circ }$

6) CCM模式下初级电感量计算：

$$
L _ {P} = \frac {2 * 0 . 9 * P _ {O} * [ Z * (1 - \eta) + \eta ]}{K _ {P} * (2 - K _ {P}) * I _ {L I M I T \_ M A X} ^ {2} * f _ {S} * \eta}
$$

如果 $L _ { P } < L _ { P \_ M I N }$ ，需要减小反射电压 $\mathsf { V } _ { \mathsf { O R } }$ ，重新回到步骤1；如果 $J _ { \mathsf { - P } } { \mathsf { > L } } _ { \mathsf { P } _ { \mathsf { - } } \mathsf { M I N } }$ ，则进入步骤7。

## 7) 确定最终电感量：

以上计算出来的都是输出额定电流所需的最小电感量，设计中需要考虑制造商的精度，通常变压器的电感量精度 $\Xi \pm 1 0 \%$ 。因此，为了保证批量生产时能满足最低电感量的要求，需要在计算值的基础上增加10%。

## 8) 确定初次级匝比：

在确定反射电压VOR后，需要重新计算变压器初次级匝比：

$$
\frac {N _ {P}}{N _ {S}} = \frac {V _ {O R}}{V _ {O U T} + V _ {D}}
$$

## 9) 计算初次级匝数：

为了抑制反激变压器工作时产生的音频噪声，一般需要控制最大磁通密度 $\mathtt { B } _ { \mathsf { M A X } }$ 不超过3000高斯，在噪声要求很高的应用中，甚至需要低于2500高斯。变压器的匝数越多，磁通密度越小，变压器体积越大，导线损耗也越大。初级匝数计算如下：

$$
N _ {P} = \frac {L _ {P} * I _ {P}}{B _ {M A X} * A _ {E}}
$$

其中，I 为初级电流峰值，计算时取对应电气参数表中最高限流点 $l _ { L I M I T \_ M A } \times A$ 上限值， $\mathsf { B } _ { \mathsf { M A X } }$ 为设定的最大磁通密度，$\mathsf { A } _ { \mathsf { E } }$ 为磁芯的有效截面积。然后通过步骤8计算次级匝数 ${ \sf N } _ { \sf S }$ ，并对计算结果进行取整，最后代入上式进行验证，直到$\mathsf { B } _ { \mathsf { M A X } } .$ 满足要求为止。

## 10) 初次级电流有效值计算：

CCM模式下，初级绕组有效值电流为：

$$
I _ {P \_ R M S} = I _ {L I M I T \_ M A X} * \sqrt {\left(1 - K _ {P} + \frac {K _ {P} {} ^ {2}}{3}\right) * D _ {M A X}}
$$

次级绕组电流有效值为：

$$
I _ {S \_ R M S} = I _ {L I M I T \_ M A X} * \frac {N _ {P}}{N _ {S}} * \sqrt {\left(1 - K _ {P} + \frac {K _ {P} {} ^ {2}}{3}\right) * (1 - D _ {M A X})}
$$

DCM模式下，需要根据最终的初级电感重新计算最大占空比 $D _ { M A X \_ D C M }$

$$
D _ {M A X \_ D C M} = \frac {2 * P _ {o}}{V _ {D C \_ M I N} * I _ {L I M I T \_ M A X} * \eta}
$$

初级绕组有效值电流为：

$$
I _ {P \_ R M} = I _ {L I M I T \_ M A X} * \sqrt {\frac {D _ {M A X \_ D C M}}{3}}
$$

次级绕组电流有效值为：

$$
I _ {S \_ R M S} = I _ {L I M I T \_ M A X} * \frac {N _ {P}}{N _ {S}} * \sqrt {\frac {V _ {D C \_ M I N} * D _ {M A X \_ D C M}}{3 * V _ {O R}}}
$$

## 11) 电流密度和绕组线径

一般根据散热条件选择电流密度，通常无风密闭的环境电流密度 $4 { \sim } 6 \mathsf { A } / \mathsf { m m } ^ { 2 }$ ，散热条件较好的情况下选择 $6 { \sim } 1 0 \mathsf { A } / \mathsf { m m } ^ { 2 } .$ 。然后根据步骤10计算的绕组电流有效值计算所需的线径。

## 输出电容的选择

输出电容的作用是滤除次级绕组电流中的交流成分，提供稳定的直流电压给负载，一般根据输出电压纹波要求来选取合适的电容。当输出电流恒定时，输出电压纹波主要由输出电容的ESR 以及容量决定。

$$
\Delta V _ {O U T} = \Delta V _ {E S R} + \Delta V _ {C}
$$

实际应用中，为了得到较小的 ESR，电容量相对比较大，因此由容量产生的输出电压纹波很小，几乎可以忽略，电压纹波主要由电容的 ESR 产生：

$$
\Delta V _ {O U T} \cong \Delta V _ {E S R} = I _ {L I M I T \_ M A X} * \frac {N _ {P}}{N _ {S}} * E S R
$$

ESR 不仅产生输出电压纹波，纹波电流在 ESR 中产生的损耗还会导致电容发热，缩短电解电容的寿命，因此电解电容一般都会有纹波电流限制。流进电解电容的纹波电流有效值为：

$$
I _ {R I P P L E} = \sqrt {I _ {S \_ R M S} ^ {2} - I _ {O} ^ {2}}
$$

电容厂家的手册中一般给出的是 $1 0 0 ^ { \circ } \mathsf { C }$ 环境温度下的额定纹波电流有效值，实际应用中的环境温度要低得多，计算电容的额定纹波电流有效值时需要乘以对应的温度因子。当一个电容的纹波电流不能满足时，可以使用多个电容并联。

## 输出二极管选择

在 CCM 模式下，初级 MOSFET 开通瞬间次级二极管反向恢复电流会通过变压器耦合到初级，流经 MOSFET 并产生损耗，同时也会产生 EMI 问题，过大的电流尖峰还可能会导致 MOSFET损坏。DCM 模式下，虽然正常工作没有反向恢复问题，但是开机和输出短路等条件下依然是 ${ \mathsf { C C M } } _ { \circ }$ 因此，次级整流输出二极管一般选择超快恢复二极管或者肖特基二极管。变压器匝比确定后，重新计算次级二极管反向电压为：

$$
V _ {R} = \frac {V _ {D C \_ M A X} * N _ {S}}{N _ {P}} + V _ {O U T}
$$

常用的肖特基二极管耐压一般小于 200V，更高耐压的应用需要选择超快恢复二极管。额定电流一般选取输出电流的 3 倍或以上。

## 降低空载功耗

BPA8618PD 可通过高压启动电路通过 DRAIN 端对 VCC 电容充电，通常无需在变压器上使用辅助或偏置绕组。230 VAC 输入、自供电下的典型空载功耗<150 mW，增加辅助绕组可以进一步降低空载功耗到 50mW 以下。辅助电压通过一个电阻向 VCC 供电（如图 14 所示），当电流超过芯片所需电流时，VCC 电压高于 5.8V，高压供电电路关闭。VCC 端内置了分流电路，分流电路将 VCC 电压钳位到 6.3V。应选择合适的电阻使得空载时高压供电电路关闭，同时分流电路的电流尽可能小。实际调试时，在空载条件下，通过辅助绕组匝数设定辅助电压在 9\~10V 左右，计算一个电阻值使得电流为电气参数表中的VCC 待机电流上限值，然后再稍微减小电阻使得留有一定裕量，再次测试 VCC 电压是否为 6.3V 以确认达到分流电路钳位电压。

![](images/8b18058af54879e1b552edec155bb70cbefcae524a63179df8f250fb69c9c7a0.jpg)  
图14. 辅助绕组供电电路

## 钳位电路计算

反激变换器中由于变压器漏感的存在，在开关管关断瞬间会产生很大的尖峰电压，使得开关管承受较高的电压应力。因此，为确保反激变换器安全可靠工作，必须引入钳位电路吸收漏能量。其中RCD钳位电路因结构简单、成本低、性能可靠而被广泛应用，如图15所示。初级MOSFET关断时，漏感中的能量通过二极管D1，衰减电阻R2转移到钳位电容C1中，然后通过电阻R1消耗掉。R2的作用是衰减变压器漏感与钳位电容C1形成的高频振荡，一般取20\~100Ω之间，阻值太小起不到衰减作用，太大就会导致漏感能量不能进入钳位电容，使得钳位电路不起作用。钳位二极管D1在小功率应用(≤10W)中可以使用普通二极管，好处是较慢的反向恢复时间会使得钳位电容中的能量部分转移到次级，提高轻载效率，同时对高频振荡起到衰减的作用 普通二极管的反向恢复损耗会导致发热比较严重，因此需要使用快恢复二极管。

![](images/949c65206d8a53a4b87ab167fb0d9ff0e3466871223b4f1732952fc5b206ab9e.jpg)  
图 15. RCD 钳位电路

钳 位 电 阻 R1 和 钳 位 电 容 C1 的 计 算 过 程 如 下 ， 首 先 计 算MOSFET关断瞬间漏感两端电压：

$$
V _ {L k} = V _ {C L A M P} - V _ {O R}
$$

其中，V<sub>CLAMP</sub>为钳位电容上的电压，流过漏感的电流斜率为：

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

根据经验值， $\Delta V _ { \mathsf { C L A M P } }$ 可取为 $2 \% \sim 5 \% ^ { \star } \mathsf { V } _ { \mathsf { C L A M P } }$ ${ \mathsf { V } } _ { \mathsf { C L A M P } } -$ 般选为2\~2.5倍的 $\mathcal { N } _ { \sf { O R c } }$ 。

## 降低音频噪声

反激变换器的音频噪声来源主要是变压器、钳位电容和辅助供电电容。电容的噪声主要是因为瓷片电容的压电效应导致，钳位电容可以选择X7R材质，相比Z5U材质对音频噪声有较大改善，也可以使用没有压电效应的薄膜电容。辅助供电电容尽量使用电解电容，以避免轻载时由于较低的开关频率而产生噪声。变压器的噪声主要是因为线包和磁芯的震动，通过浸凡立水可以有效改善线包的震动。磁芯的震动可以通过降低最大磁通密度来改善，最大不要超过3000高斯，在噪声要求很高的应用中，甚至需要低于2500高斯。同时，在磁芯中柱点胶固定能进一步降低音频噪声。

## PCB Layout指南

在设计 BPA8618PD PCB 时，参考图 16 所示，需要遵循以下建议：

1) VCC 电容必须直接靠近 VCC 和 GND 引脚放置，与电容的连接走线应尽量短。建议使用 X7R 材质的陶瓷电容做VCC 电容。

2) MOSFET 源极引脚（芯片 GND）和辅助供电绕组的地应分别单独接到母线电容负端，光耦的信号地应单点接地到芯片地。

3) 连接光耦的反馈信号线不要铺大铜皮，以避免容易受到干扰。走线尽可能短，并远离变压器、MOSFET 漏极、初级钳位电路、辅助绕组等强干扰源。当光耦离芯片较远时，反馈信号线和信号地线应并排走线，以减小环路面积。反馈信号线也应该远离母线电压，避免高电压在PCB 上产生的漏电流进入 FB 脚导致工作异常。

4) 为了降低辐射干扰，应减小高频功率环路面积。初级母线电容、变压器绕组和芯片组成的环路面积尽可能小；次级绕组、二极管和输出滤波电容的环路面积尽可能小；初级绕组和钳位电路组成的环路面积尽可能小。

5) 芯片地引脚（MOSFET 源极）能很好地起到散热作用，是器件散热的主要途径。由于芯片地连接到母线电容负极，属于 EMI 静点，因此可以在 PCB 上将 GND 引脚铺铜来降低芯片的温度而不影响 EMI 性能。通过在 PCB 上铺铜也可以给次级二极管散热，由于二极管阳极为动点，所以为了不影响 EMI，可以将铜皮主要铺在二极管阴极端。

6) 由于 MOSFET 漏极存在很大的 dv/dt，不宜大面积铺铜，以防止容性耦合产生 EMI 问题或者干扰其他器件正常工作。

7) 应将 Y 电容放置在初级输入滤波电容正端和次级滤波电容地之间，这样放置可以使高频共模浪涌电流远离芯片，从而避免芯片在雷击时受到干扰。如果在输入端使用了π型 EMI 滤波器，那么滤波器内的电感应放置在输入滤波电容的负极之间。

8) ESD 放电针应直接连接在初级输入滤波电容正端和次级滤波电容地或者输出正端之间，并远离芯片控制电路。

![](images/6259a32d6f70c654e2ee22cd1307a9a78f5e9a52c2fb7c6322f34863358b1e8c.jpg)

减小高频功率环路面积  
![](images/569eedf86c6975c125ef0ba19bae8c46f1cc5389f57c0decad4752237cbea210.jpg)  
图 16. PCB Layout 建议  
反馈回路器件及走线尽量远  
离变压器和功率回路

## 特性曲线

![](images/f22c8740a0a5bc5d8cf2b5c6bc8036ae2a892bf4ae64e1cc69ea08a1dcbb8dcd.jpg)  
图 17. BV<sub>DSS</sub> vs. Temperature

![](images/262c42956299e89e0ae450038c6025f7c423e467787ec0b0614a8caada5f40bd.jpg)  
图 18. R<sub>DS\_ON</sub> vs. Temperature

![](images/5f91d0029e9f1e8f9dbe1d831d39baad8bd4f5cc2b58f7f712cbc02e394a1fbd.jpg)  
图 19. I<sub>LIMIT\_MAX</sub> vs. Temperature

![](images/55fde8e73d3030faad27034524bffa57898c269a032e79efa5208797109157c8.jpg)  
图 20. f<sub>OSC</sub> vs. Temperature

![](images/6fd550a474c2c5d7d27e3ef7d1b4fc256da5f1997ee5a1f009398bb2651b6928.jpg)  
图 21. D<sub>MAX</sub> vs. Temperature

![](images/e15580942dae838b5040e9d4037d466f902aaf4baed91707edc57d0f2731e18a.jpg)  
图 22. I<sub>CH1</sub> vs. Temperature

COMMON DIMENSIONS

## 封装信息

![](images/cd064fad507e1a3e37f8d68644a8cb23d85225cb0f642b801af32accabf2e8d5.jpg)  
DIP-7 封装外形尺寸

![](images/13b4e2936a6b916faec1a72451caf951d22054097d82408cce747b1b1e699bce.jpg)

![](images/54cafb20e2ef44b89711acd00b42ae768df46f3f1171311b645e881f4a844fc9.jpg)  
BASE METAL

![](images/494b896549cc17cdbed76a7080e0b7e8adcfd0ebf3ca93bf97285367f20c9638.jpg)  
SECTION B-B  
WITH PLATING

(UNITS OF MEASURE=MILLIMETER)

<table><tr><td>SYMBOL</td><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A</td><td>-</td><td>-</td><td>4.80</td></tr><tr><td>A1</td><td>0.40</td><td>-</td><td>-</td></tr><tr><td>A2</td><td>3.10</td><td>-</td><td>3.50</td></tr><tr><td>b</td><td>0.355</td><td>-</td><td>0.559</td></tr><tr><td>B1</td><td colspan="3">1.52 REF</td></tr><tr><td>c</td><td>0.203</td><td>-</td><td>0.356</td></tr><tr><td>D</td><td>9.10</td><td>-</td><td>9.50</td></tr><tr><td>E1</td><td>6.25</td><td>-</td><td>6.70</td></tr><tr><td>e</td><td colspan="3">2.54 BSC</td></tr><tr><td>eB</td><td>7.62</td><td>-</td><td>9.30</td></tr><tr><td>L</td><td>2.92</td><td>-</td><td>3.81</td></tr></table>

NOTES:

1. ALL DIMENSIONS MEET JEDEC STANDARD MS-O12F

ALL DIMENSIONS DO NOT INCLUDE MOLD FLASH OR PROTRUSIONS

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev.1.0</td><td>2024/05</td><td>首次发布</td></tr><tr><td>Rev.1.1</td><td>2025/01</td><td>更新电气参数</td></tr></table>

![](images/12eb0a4fe259e14514bcba4075fca5f0a19cfb6916341ad3d13325576845150e.jpg)

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。

## 电子器件报废说明

该产品在生命周期结束后，由客户按照一般电子产品的报废流程进行处理。