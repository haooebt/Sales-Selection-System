## 概述

BPA86528D 是一款高性能、高集成度、低待机功耗的开关电源驱动芯片，适用于全电压范围 85\~265VAC 输入的反激式变换器应用。

BPA86528D 内部集成了 800V 高压 MOSFET、高压启动恒流源等。芯片有多种控制模式：在重载时，工作在 PFM 模式；在额定满载/中载时，可能工作在 PFM 或 PWM 模式；在轻载时，进入 Burst mode，降低待机功耗。芯片具有抖频功能以实现优异的EMI性能。内置峰值电流补偿电路，可以使不同交流电压输入时的极限输出功率一致。内置软启动功能可以在上电过程中减小电流尖峰，防止变压器饱和，提高系统可靠性。

BPA86528D 提供了丰富的保护功能，包括输出过压保护、输出短路保护、输出过载保护、反馈开路保护、逐周期限流、过温保护等。另外，BR 脚集成了 Burst mode 深度调节功能，可根据需要灵活调节。通过 BR 脚也可以检测输入过压和欠压，能有效保护功率MOSFET，使系统更加安全可靠。

BPA86528D 采用 ESOP-10 封装，具备较好的散热性能，同时满足爬电距离的要求，使得芯片能够应用于较复杂的工作环境。

![](./素材/images/BPA86528D_CN_DS_Rev1.1/a27823c3e6af01462a26aa1dc8b927624f72b0eeb115ada8ef3100ed47633321.jpg)  
ESOP-10 封装

## 特点

内部集成 800V 高压 MOSFET  
集成高压启动  
通过 BR 脚可调节 Burst mode 深度  
低待机功耗  
峰值电流补偿功能  
内置软启动功能  
改善EMI抖频功能  
保护功能  
 输入欠压保护(Brown-in/out)  
 输入过压保护(Bus OVP)  
输出短路保护(SCP)  
输出过压保护(Output OVP)  
 输出过载保护(OLP)  
 反馈开路保护  
逐周期限流(Cycle-by-Cycle)  
 迟滞过温保护(OTP)

## 应用领域

家用电器辅助电源  
PC待机电源  
通信、工业控制辅助电源  
适配器、充电器

## 典型应用

![](./素材/images/BPA86528D_CN_DS_Rev1.1/8b2d5fd366a7e9d8a99917d4c1a6e96c4a1177bd7e712f34745017ee1908e1d6.jpg)

图 1. BPA86528D 典型反激应用电路

定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BPA86528D</td><td>ESOP-10</td><td>卷盘2500颗/盘</td><td>BPA86528XXXXYYZZZZWWD</td></tr></table>

管脚封装

![](./素材/images/BPA86528D_CN_DS_Rev1.1/8806833c7ff374079e6bbb3bb5386e9df180f27ea93c8a8c02e2f4077d5e842d.jpg)

图 2. ESOP-10 管脚封装图

管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>CS</td><td>电流采样端</td></tr><tr><td>2</td><td>BR</td><td>Burst mode调节端,输入电压检测端,如果接地则disable此引脚功能</td></tr><tr><td>3、4</td><td>GND</td><td>芯片地</td></tr><tr><td>5</td><td>FB</td><td>输出反馈端</td></tr><tr><td>6、7</td><td>NC</td><td>无连接</td></tr><tr><td>8</td><td>VCC</td><td>电源供电端</td></tr><tr><td>9、10、底部 pad</td><td>DRAIN</td><td>功率 MOSFET 漏极</td></tr><tr><td>11</td><td>NC</td><td>无连接</td></tr></table>

输出功率推荐表

<table><tr><td colspan="5">输出功率表</td></tr><tr><td rowspan="2">型号</td><td colspan="2">230VAC ±15%</td><td colspan="2">85~265VAC</td></tr><tr><td>适配器(注 1)</td><td>开放式(注 2)</td><td>适配器(注 1)</td><td>开放式(注 2)</td></tr><tr><td>BPA86528D</td><td>50W</td><td>65W</td><td>40W</td><td>52W</td></tr></table>

注 1： 最小连续输出功率，测试条件为封闭式塑料外壳，环境温度为 50℃。  
注 2： 最小连续输出功率，测试条件为开放式环境，环境温度为 50℃。

极限参数(注 3)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td> $V_{DRAIN}$ </td><td>高压 MOSFET 漏极到源极电压</td><td>-0.3~800</td><td>V</td></tr><tr><td> $I_D$ </td><td>漏极连续电流</td><td>5</td><td>A</td></tr><tr><td> $I_{DM}$ </td><td>漏极脉冲电流(注 4)</td><td>15</td><td>A</td></tr><tr><td> $V_{CC}$ </td><td> $V_{CC}$  电压</td><td>-0.3~50</td><td>V</td></tr><tr><td> $I_{CC\_MAX}$ </td><td> $V_{CC}$  引脚最大电流</td><td>20</td><td>mA</td></tr><tr><td> $V_{FB}$ </td><td>输出电压反馈端电压</td><td>-0.3~7</td><td>V</td></tr><tr><td> $V_{BR}$ </td><td>Burst mode 调节端电压</td><td>-0.3~7</td><td>V</td></tr><tr><td> $V_{CS}$ </td><td>电流采用端电压</td><td>-0.3~7</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注 5)</td><td>1.47</td><td>W</td></tr><tr><td> $θ_{JA}$ </td><td>结到环境的热阻(注 6)</td><td>80</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40 to 150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55 to 150</td><td>°C</td></tr><tr><td>ESD</td><td>人体模型 ESD(注 7)</td><td>6</td><td>kV</td></tr></table>

注 3：极限参数是指超出该工作范围，芯片有可能损坏。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。  
注 4：MOSFET 漏极脉冲电流的宽度受限于其可承受的最大结温。  
注 5：温度升高最大功耗一定会减小，这也是由 TJMAX, θJA,和环境温度 TA所决定的。最大允许功耗为 $P _ { D M A X } = ( T _ { J M A X } - T _ { A } ) / \theta _ { J \beta }$ A或是极限范围给出的数字中比较低的那个值。  
注 6：1平方英寸双层PCB板，按照JEDEC 标准测试。  
注 7：按照 JEDEC 标准测试, 100pF 电容通过 1.5kΩ 电阻放电。

电气参数 (注 8)（无特别说明情况下， ${ \sf T } _ { \sf A } = 2 5 ^ { \circ } { \sf C } )$

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">VCC供电部分</td></tr><tr><td> $V_{CC\_ON}$ </td><td>VCC启动电压</td><td></td><td>13</td><td>15</td><td>16</td><td>V</td></tr><tr><td> $V_{CC\_OFF}$ </td><td>VCC关断电压</td><td></td><td></td><td>8</td><td></td><td></td></tr><tr><td> $V_{CC\_HYS}$ </td><td>VCC电压迟滞</td><td></td><td></td><td>7</td><td></td><td>V</td></tr><tr><td> $I_{S1}$ </td><td>VCC待机电流</td><td> $V_{FB}=0V$ </td><td></td><td>1.15</td><td></td><td>mA</td></tr><tr><td> $I_{S2}$ </td><td>VCC工作电流</td><td> $V_{FB}=4.2V$ </td><td></td><td>1.99</td><td></td><td>mA</td></tr><tr><td> $V_{CC\_HOLD}$ </td><td>VCC维持电压</td><td></td><td></td><td>9.6</td><td></td><td>V</td></tr><tr><td> $V_{CC\_OVP}$ </td><td>VCC过压保护点</td><td></td><td></td><td>38.5</td><td></td><td>V</td></tr><tr><td colspan="7">振荡器</td></tr><tr><td> $f_{OSC}$ </td><td>振荡器频率</td><td>平均值</td><td>90</td><td>100</td><td>110</td><td>kHz</td></tr><tr><td> $\Delta f_{OSC\_JITTER}$ </td><td>抖频范围</td><td></td><td></td><td>16</td><td></td><td>kHz</td></tr><tr><td> $f_M$ </td><td>调制频率</td><td></td><td></td><td>256</td><td></td><td>Hz</td></tr><tr><td> $f_{OSC\_MIN}$ </td><td>降频后的振荡频率</td><td></td><td></td><td>26</td><td></td><td>kHz</td></tr><tr><td> $D_{MAX}$ </td><td>最大占空比</td><td></td><td>70</td><td>78</td><td>85</td><td>%</td></tr><tr><td colspan="7">输出反馈部分</td></tr><tr><td> $ZFB_{IN}$ </td><td>FB输入阻抗</td><td></td><td>20</td><td>27</td><td>35</td><td>kΩ</td></tr><tr><td> $IFB_{SHORT}$ </td><td>FB短路电流</td><td> $V_{FB}=0V$ </td><td>-120</td><td>-210</td><td>-300</td><td>μA</td></tr><tr><td> $VFB_{OPEN}$ </td><td>FB开环电压</td><td>FB端悬空</td><td></td><td>5.7</td><td></td><td>V</td></tr><tr><td> $VFB_{OLP}$ </td><td>输出过载保护点</td><td></td><td></td><td>5.2</td><td></td><td>V</td></tr><tr><td> $TD_{FBOLP}$ </td><td>输出过载保护检测延时</td><td></td><td></td><td>75</td><td></td><td>ms</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $VCS_{LIMIT}$ </td><td>CS LIMIT电压</td><td> $T_j=25°C$ </td><td>0.88</td><td>0.97</td><td>1.2</td><td>V</td></tr><tr><td> $T_{LEB}$ </td><td>前沿消隐时间</td><td> $T_j=25°C$ </td><td></td><td>400</td><td></td><td>ns</td></tr><tr><td> $T_{ILD}$ </td><td>电流限流延迟时间</td><td> $T_j=25°C$ </td><td></td><td>100</td><td></td><td>ns</td></tr><tr><td> $VCS_{D\_SHORT}$ </td><td>输出二极管短路保护点</td><td> $T_j=25°C$ </td><td></td><td>1.5</td><td></td><td>V</td></tr><tr><td colspan="7">功率管MOSFET</td></tr><tr><td>RDS_ON</td><td>功率管导通阻抗</td><td> $I_D=400mA, T_j=25°C$ </td><td></td><td>0.85</td><td>1</td><td>Ω</td></tr><tr><td>IDSS</td><td>功率管关断漏电流</td><td> $V_{DS}=560V, T_j=25°C$ </td><td></td><td></td><td>50</td><td>μA</td></tr><tr><td> $BV_{DSS}$ </td><td>功率管的击穿电压</td><td> $T_j=25°C$ </td><td>800</td><td></td><td></td><td>V</td></tr><tr><td> $V_{SUP}$ </td><td>漏极供电启动电压</td><td> $T_j=25°C$ </td><td></td><td>50</td><td></td><td>V</td></tr><tr><td colspan="7">BR脚功能</td></tr><tr><td> $V_{BR(IN)}$ </td><td>输入开启电压</td><td> $T_j=25°C$ </td><td>0.73</td><td>0.9</td><td>1.07</td><td>V</td></tr><tr><td> $V_{BR(OUT)}$ </td><td>输入欠压点</td><td> $T_j=25°C$ </td><td>0.63</td><td>0.8</td><td>0.97</td><td>V</td></tr><tr><td> $V_{BR(CLAMP)}$ </td><td>BR钳位电压</td><td> $I_{BR}=100μA$ </td><td></td><td>5.5</td><td></td><td>V</td></tr><tr><td> $V_{BR(DIS)}$ </td><td>输入检测屏蔽电压</td><td> $T_j=25°C$ </td><td></td><td>0.2</td><td></td><td>V</td></tr><tr><td> $V_{BR(OVP)}$ </td><td>输入过压点</td><td></td><td>3.8</td><td>4</td><td>4.2</td><td>V</td></tr><tr><td colspan="7">过温保护</td></tr><tr><td> $T_{OTP}$ </td><td>过热保护阈值</td><td></td><td></td><td>150</td><td></td><td>°C</td></tr><tr><td> $T_{HYST}$ </td><td>过热保护迟滞</td><td></td><td></td><td>40</td><td></td><td>°C</td></tr></table>

注 8：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。

## 内部结构框图

![](./素材/images/BPA86528D_CN_DS_Rev1.1/a0e1ddc4c2daa8d780b8abae8a0812b487217ba1880b3d229fa312af3c302451.jpg)

图 3. BPA86528D 内部框图

## 功能描述

BPA86528D 内部集成了 800V 高压 MOSFET、高压启动恒流源、斜坡补偿电路等（如图3所示）。芯片有多种控制模式：在重载时，工作在 PFM 模式；在额定满载/中载时，工作在PFM 或 PWM 模式；在轻载时，进入 Burst mode，降低待机功耗。芯片具有抖频功能以实现优异的 EMI 性能。内置峰值电流补偿电路，可以使不同交流电压输入时极限输出功率一致。内置软启动功能可以在上电过程中减小电流尖峰，防止变压器饱和，提高系统可靠性。

BPA86528D 提供了丰富的保护功能，包括输出过压保护、输出短路保护、输出过载保护、反馈开路保护、逐周期限流、过温保护等。另外，BR 脚集成了 Burst mode 深度调节功能，可根据需要灵活调节。通过 BR 脚也可以检测输入过压和欠压，能有效保护功率MOSFET，使系统更加安全可靠。（注9：以下描述到的参数均为电气参数列表中的典型值，除非特别说明是最大或最小值）

## 高压启动供电与 VCC 供电

系统上电后，当⺟线电压达到芯片漏极供电启动电压 VSUP 时，内部高压启动电路通过DRAIN端对VCC电容充电。当VCC电压达到芯片启动阈值电压 $V _ { C C \_ O N }$ （15V）时，芯片内部控制电路开始工作。

## VCC 欠压保护

VCC 引脚具有欠压保护功能。工作过程中，由于异常导致VCC 电压下降到低于 $V _ { C C \_ 0 \tt N } - V _ { C C \_ H Y S }$ （8.5V）时，欠压保护电路使芯片关断功率 MOSFET，停止开关动作。VCC 电压需要回升到 $V _ { C C \_ O N }$ （15V）才能重新开启功率 MOSFET，并且会进入软启动过程（图4所示）。

![](./素材/images/BPA86528D_CN_DS_Rev1.1/584b4db1bb51dddc566f48504872f1a75fce3340a98c376aeedcc87b3c8dd025.jpg)

图4. VCC欠压保护时序

## VCC 引脚实现输出过压保护

VCC 引脚同时可用来实现输出过压保护功能，辅助绕组电压连接到 VCC，当 VCC 引脚的电压超过 OVP 阈值电压 $\mathsf { V c c \_ o v p }$ （38.5V）时，则触发 VCC OVP 保护。OVP 保护期间，IC 关闭 MOSFET，输出电压下降，VCC 电压下降，直到降至关断电压点 8V，高压启动恒流源重新对 VCC 电容充电，电压达到VCC\_ON (15V)时芯片重新启动，进入下一个 VCC 电压检测周期，如果故障一直存在则保持自动重启。VCC 电容除起到内部滤波的作用，还作为外部滤波器，避免噪⾳信号引起保护电路误触发。为使电容达到有效的高频滤波，应将电容尽量靠近VCC引脚（如图5所示）。

![](./素材/images/BPA86528D_CN_DS_Rev1.1/4a5f49657c1093e6bc9eb4ebe3315bfc22b2f4492d129f6357e88c3e074d196a.jpg)

图5. VCC引脚实现输出电压保护

## 软起动

芯片具有软启动功能，在软启动过程中，MOSFET 峰值电流(限流点)逐渐增加。由于启动时输出电压一般较低，MOSFET关断期间输出电压对变压器的去磁较少，容易进入深度连续模式(CCM) 使得次级整流⼆极管的反向恢复电流较大而导致很高的反向电压尖峰；同时由于去磁较少，原边电流在前沿消隐时间内逐渐累积，可能超过 MOSFET 安全工作区而导致失效。软启动电路通过控制启动过程中 MOSFET 峰值电流逐渐增加，可以避免原边累积过大的电流，从而降低 MOSFET电流应⼒和降低次级⼆极管的电压尖峰。（软启动过程如图 6所示），起始限流值为 40%\*ILIMIT\_MAX，软启动时间为 8.4ms。如果输出电压在 8.4ms 内达到预设值，则结束软启动。由保护电路触发产⽣的自动重启也会经历一次软启动过程。

![](./素材/images/BPA86528D_CN_DS_Rev1.1/c36aab608e7c9654391e83d5997845d40856e2047f55a2a30fe03a5e1482ca75.jpg)

图6. 软启动过程

## 多模式控制

BPA86528D 具有 PFM/PWM 多种控制模式。在不同负载条件下，通过检测 FB 管脚的电压来改变工作模式。在重载时$( \mathsf { V } _ { \mathsf { F B } } { > } 3 . 8 \mathsf { V } )$ ，工作在 PWM 模式，开关频率为 100kHz。在中轻载时 $( \lor _ { \mathsf { F B 3 } } { < } \lor _ { \mathsf { F B } } { < } 3 . 8 \lor )$ 进入 PFM 模式，开关频率从 100kHz 降到 25kHz，以提高转换效率。在空载或负载较轻时 $( V _ { F B } < V _ { F B 2 } )$ 进入Burst模式。不同芯片控制曲线阈值会有偏差。曲线如图7所示。

![](./素材/images/BPA86528D_CN_DS_Rev1.1/b39d5da454212add44d7f067386a3107e1545498d72fb1a84dbbdf330220df81.jpg)

图7. 控制模式

## 电流检测与限制

BPA86528D芯片内部集成电流检测电路，对MOSFET电流逐周期限制，通过外部电流采样电阻，以实现电流模式控制。当电流超过设定的限流点阈值(ILIMIT)时，在该周期剩余阶段会关断功率 MOSFET，直到下一个开关周期开始。内置前沿消隐(Leading Edge Blanking)时间 tLEB 可以避免由于外部电路的容性或次级⼆极管的反向恢复导致 MOSFET 在开通瞬间出现的电流尖峰误触发MOSFET关断。

## 短路/过载/开路保护

BPA86528D 通过 FB 引脚检测输出短路、过载、反馈开路故障。当上述故障发⽣时，则检测到 FB 电压上升达到 5.2V 以上且持续时间75ms，则触发保护，系统进入自动重启模式。

## BR 脚集成功能

BR 脚集成 Brown-in/out、Bus OVP、Burst mode 调节功能。不同的 RC 组合，可以调节内部振荡器停止工作时的 FB 电压。如果BR脚接地，则disable 以上所述功能。

## 输入欠压保护（Brown-in/out）

BPA86528D 芯片在启动前通过 BR 引脚检测⺟线电压实现输入欠压保护。Brown-in：当 VBR 高于 0.9V 且 VCC 达到 $V _ { C C \_ O N }$ 则芯片启动。在V <0.9V时VCC在ON和OFF电压点不断充放电。Brown-out：当 VBR 低于 0.8V 且持续 $T D _ { F B O L P } = 7 5 m s$ ，则触发 Brown-out 保护，关闭 MOSFET。

## 输入过压保护

BPA86528D 芯片通过 BR 脚检测输入电压，实现 Bus OVP 功能。当 $V _ { \mathsf { B R } }$ 高于 4V 则触发 Bus OVP 保护，然后关闭芯片MOSFET。输出电压下降，VCC 电压下降，直到降至 VCC 关断阈值电压 ${ \mathsf { V } } _ { \mathsf { C C } } \mathsf { \Gamma } _ { \mathsf { O F F } } ( 8 \mathsf { V } )$ ，高压启动电路重新对 VCC 电容充电，达到启动电压点 $\mathsf { V } _ { \mathsf { C C } _ { - } \mathsf { O N } } ( 1 5 \mathsf { V } )$ 时芯片重新启动。如果过压状态一直存在，则电路维持 MOSFET OFF 状态。当过压状态不存在，则电路恢复正常工作。

## Burst mode 调节

通过 BR 脚设置不同 RC 参数，可以调节进入 Burst mode 的FB 电压，即可调节Burst mode时的功率点。

R 典型值取 39kΩ，选取不同的电容 C（1nF、4.7nF、22nF），可实现不同FB 电压点的调节。

## 峰值电流补偿

BPA86528D 芯片具有峰值电流补偿功能，使高低压输入下有接近的极限输出功率能⼒。

## 抖频

BPA86528D 芯片具有抖频功能，可以改善 EMI 性能，减小滤波器尺寸，使系统的EMI设计更简单。

## 过温保护

BPA86528D 芯片内置了过温保护电路，当结温达到过温保护阈值 TOTP (150℃)时，芯片会停止工作，直到结温下降到 TOTP-THYST 时，芯片重新启动。THYST (40℃)为温度迟滞，较大的温度迟滞有利于把系统温度控制在一个较低的水平（如图 8 所示）。

![](./素材/images/BPA86528D_CN_DS_Rev1.1/0bdcb655e67f33eee51bfcd7161ab782e913d1be4bd03a94429fcd5029defef7.jpg)

图 8. 过温保护过程

## 应用指南

## 芯片适用范围

首先根据下表BPA86528D的适用功率范围，判断实际的应用需求是否满足：

<table><tr><td colspan="5">输出功率表</td></tr><tr><td rowspan="2">型号</td><td colspan="2">230VAC</td><td colspan="2">85~265VAC</td></tr><tr><td>适配器</td><td>开放式</td><td>适配器</td><td>开放式</td></tr><tr><td>BPA86528D</td><td>50W</td><td>65W</td><td>40W</td><td>52W</td></tr></table>

表1. 输出功率表

表1列出的最小连续输出功率，是基于合理的散热设计，将其温度控制到 110°C 或以下。开放式设计的测试环境温度为50°C，密闭式适配器的测试环境温度为50°C。

## 输入电容选择

输入滤波电容对工频电压纹波、传导EMI、以及电源抵抗Surge的能⼒都起到关键的作用。为了优化变压器的设计，电容量的选取要保证直流⺟线电压不能过低（通常低压输入时不低于80VDC，高压输入时不低于220VDC），因此电容量取决于输出功率和电源效率。 BPA86528D的应用场合一般功率相对较大，需要用全波整流，根据输出功率可以对输入电容进⾏初步估计(如表2所示)，全电压或低压输入时，一般取2\~3μF/W；高压输入时，一般取1μF/W。

<table><tr><td>输入</td><td>电压范围(VAC)</td><td>输入电容(μF/W)</td><td>推荐最低母线电压(V)</td></tr><tr><td>全电压</td><td>85~265</td><td>2~3</td><td>≥80V</td></tr><tr><td>低压</td><td>85~132</td><td>2~3</td><td>≥80V</td></tr><tr><td>高压</td><td>185~265</td><td>1</td><td>≥220V</td></tr></table>

表2. 推荐输⼊电容值和最低⺟线电压

根据选定的输入电容计算最低⺟线电压的精确值需要求解一个复杂的方程，为简便起⻅，通常使用以下公式得到一个相对精确的结果：

$$
V _ {D C \_ M I N} = \sqrt {2 * V _ {A C M I N} ^ {2} - \frac {P _ {O} * (1 - 2 * f _ {L} * t _ {C})}{\eta * C _ {I N} * f _ {L}}}
$$

其中，整流桥的导通时间tC一般取3ms，可以假设效率初始值为80%，fL为输⼊交流电压频率，VACMIN为最低输⼊交流电压有效值， $\mathsf { P o }$ 为额定输出功率，CIN为输⼊电容容量。最⾼⺟线电压可以通过计算得到：

$$
V _ {D C \_ M A X} = \sqrt {2} * V _ {A C M A X}
$$

## 变压器计算

当BPA86528D最高限流点和开关频率已被设定，最大输出功率取决于变压器的电感量。电感量越大，最大输出功率越大，变压器体积也越大。因此，为了尽可能减小变压器体积，在满足额定输出规格的前提下，尽可能选取较小的电感量。一般建议在 $V _ { D C , M I N }$ 条件下设计变压器，以保证所有输入电压范围内均满足额定输出规格。变压器的计算按照以下步骤：

## 1) 选取次级反射到初级的电压 $( \mathsf { V } _ { \mathsf { O R } } )$ ）：

选取反射电压时，需要同时考虑最高输入电压下初级MOSFET和次级整流⼆极管的最高耐压值并留一定的裕量。MOSFET最高漏极电压为：

$$
V _ {D R A I N \_ M A X} = V _ {D C \_ M A X} + V _ {O R} + V _ {L K}
$$

其中，VLK为漏感产⽣的电压尖峰，VOR为次级反射到初级的电压。漏极电压波形如图9所示，通常建议漏极最高电压不超过90%的功率管击穿电压（BVDSS）。次级⼆极管的最高反向电压为：

$$
V _ {R} = \frac {V _ {D C \_ M A X} * (V _ {O U T} + V _ {D})}{V _ {O R}} + V _ {O U T}
$$

VD为次级⼆极管的正向导通压降，VOUT为输出电压。通常预估VLK=60V， $V _ { 0 R } = 8 0 { \sim } 1 0 0 V$ 作为起始值开始变压器计算，然后反复迭代计算以达到优化设计的目的。

![](./素材/images/BPA86528D_CN_DS_Rev1.1/4b51ce88ba72c8dacef1a53216db6a2e51f743e75a90af1cc3270de1639f0978.jpg)

图9. MOSFET漏极电压波形

变压器匝比可以通过以下表达式得到：

$$
N = \frac {N _ {P}}{N _ {S}} = \frac {V _ {O R}}{V _ {O U T} + V _ {D}}
$$

其中， $\mathsf { N } _ { \mathsf { P } }$ 和 ${ \sf N } _ { \sf S }$ 分别为变压器初级和次级匝数。反射电压越高，初次级匝比越大，初级漏感越大，会增加初级MOSFET电压应⼒和漏感产⽣的损耗。较高的反射电压虽然可以降低次级⼆极管的反向电压应⼒，从而可以使用较低电压的⼆极管，但是会增加次级的峰值和有效值电流，增加次级绕组和⼆极管导通损耗。同时，过高的反射电压还会引起传导EMI问题，这是由于非连续模式下初级电感和漏极寄⽣电容的自由振荡导致的。因此，建议VOR不要超过135V。相反，过小的反射电压会降低连续模式下（低压输入时）的占空比，增加初级电流有效值，降低效率，同时次级⼆极管的电压应⼒增加。

## 2) 确定初级最大峰值电流：

纹波系数，KP的定义如下，

$$
K _ {P} = \frac {I _ {R}}{I _ {L I M I T \_ M A X}}
$$

![](./素材/images/BPA86528D_CN_DS_Rev1.1/5d745c0bb02727d5f8b7b5b0e170d1382cdd3da0313b5c8ec2a543d22add6cd4.jpg)

图10. 连续模式下初级电流波形

当系统工作在CCM时KP<1；当系统工作在BCM或DCM时KP=1。根据工作模式选定KP并计算初级最大峰值电流ILIMIT\_MAX：

$$
I _ {L I M I T \_ M A X} = \frac {2 * I o}{(1 - D) * N} (B C M)
$$

$$
I _ {L I M I T \_ M A X} = \frac {2 * I o}{(1 - D) * N * (2 - K _ {P})} (C C M)
$$

$$
D = \frac {(V _ {O U T} + V _ {D}) * N}{V _ {D C \_ M I N} + (V _ {O U T} + V _ {D}) * N}
$$

$$
N = \frac {N _ {P}}{N _ {S}}
$$

根据ILIMIT\_MAX计算电流采样电阻Rcs：

$$
R _ {C S} = \frac {V C S _ {L I M I T}}{I _ {L I M I T \_ M A X}}
$$

VCSLIMIT是CS引脚采样电压阈值，建议取电气参数表中的下限值，以保证足够的输出能⼒。

## 3) CCM模式下初级电感量计算：

$$
L _ {P} = \frac {2 * 0 . 9 * P _ {O} * [ Z * (1 - \eta) + \eta ]}{K _ {P} * (2 - K _ {P}) * I _ {L I M I T \_ M A X} ^ {2} * f _ {S} * \eta}
$$

其中，fS为开关频率(取电气参数表的下限值)，ILIMIT\_MAX为初级最高峰值电流由步骤2确定，Z为损耗分配因子，即次级损耗占总损耗的比例，没有具体计算数据的情况下可以取0.5。初次计算时，可以假设效率 为80%，后期可根据测试结果进⾏迭代。

## 4) DCM模式下初级电感量计算：

$$
L _ {P} = \frac {2 * 0 . 9 * P _ {O} * [ Z * (1 - \eta) + \eta ]}{I _ {L I M I T \_ M A X} ^ {2} * f _ {S} * \eta}
$$

## 5) 确定最终电感量：

以上计算出来的都是输出额定电流所需的最小电感量，设计中需要考虑制造商的精度，通常变压器的电感量精度是±10%。因此，为了保证批量⽣产时能满足最低电感量的要求，需要在计算值的基础上增加10%。

## 6) 计算初次级匝数：

为了抑制反激变压器工作时产⽣的⾳频噪声，一般需要控制最大磁通密度BMAX不超过3000高斯，在噪声要求很高的应用中，甚至需要低于2500高斯。变压器的匝数越多，磁通密度越小，变压器体积越大，导线损耗也越大。初级匝数计算如下：

$$
N _ {P} = \frac {L _ {P} * I _ {L I M I T \_ M A X}}{B _ {M A X} * A _ {E}}
$$

其中，初级电流峰值ILIMIT\_MAX建议取电气参数表中VCSLIMIT的上限值与Rcs的比值，BMAX为设定的最大磁通密度，AE为磁芯的有效截面积。然后通过匝比计算次级匝数NS，并对计算结果进⾏取整，最后代入上式进⾏验证，直到BMAX满足要求为止。

## 7) 初次级电流有效值计算：

CCM模式下，初级绕组有效值电流为：

$$
I _ {P \_ R M S} = I _ {L I M I T \_ M A X} * \sqrt {\left(1 - K _ {P} + \frac {K _ {P} {} ^ {2}}{3}\right) * D _ {M A X}}
$$

次级绕组电流有效值为：

$$
I _ {S \_ R M S} = I _ {L I M I T \_ M A X} * \frac {N _ {P}}{N _ {S}} * \sqrt {\left(1 - K _ {P} + \frac {K _ {P} {} ^ {2}}{3}\right) * (1 - D _ {M A X})}
$$

DCM模式下，需要根据最终的初级电感重新计算最大占空比DMAX\_DCM：

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

一般根据散热条件选择电流密度，通常无⻛密闭的环境电流密度4\~6A/mm2，散热条件较好的情况下选择6\~10A/mm2。然后根据步骤7计算的绕组电流有效值计算所需的线径。

## 输出电容的选择

输出电容的作用是滤除次级绕组电流中的交流成分，提供稳定的直流电压给负载，一般根据输出电压纹波要求来选取合适的电容。当输出电流恒定时，输出电压纹波主要由输出电容的ESR以及容量决定。

$$
\Delta V _ {O U T} = \Delta V _ {E S R} + \Delta V _ {C}
$$

实际应用中，为了得到较小的 ESR，电容量相对比较大，因此由容量产⽣的输出电压纹波很小，⼏乎可以忽略，电压纹波主要由电容的ESR产⽣：

$$
\Delta V _ {O U T} \cong \Delta V _ {E S R} = I _ {L I M I T \_ M A X} * \frac {N _ {P}}{N _ {S}} * E S R
$$

ESR 不仅产⽣输出电压纹波，纹波电流在 ESR 中产⽣的损耗还会导致电容发热，缩短电解电容的寿命，因此电解电容一般都会有纹波电流限制。流进电解电容的纹波电流有效值为：

$$
I _ {R I P P L E} = \sqrt {I _ {S \_ R M S} ^ {2} - I _ {O} ^ {2}}
$$

电容厂家的手册中一般给出的是100℃环境温度下的额定纹波电流有效值，实际应用中的环境温度要低得多，计算电容的额定纹波电流有效值时需要乘以对应的温度因子。当一个电容的纹波电流不能满足时，可以使用多个电容并联。

## 输出⼆极管选择

在CCM模式下，初级MOSFET开通瞬间次级⼆极管反向恢复电流会通过变压器耦合到初级，流经 MOSFET 并产⽣损耗，同时也会产⽣ EMI 问题，过大的电流尖峰还可能会导致MOSFET 损坏。DCM 模式下，虽然正常工作没有反向恢复问题，但是开机和输出短路等条件下依然是 CCM。因此，次级整流输出⼆极管一般选择超快恢复⼆极管或者肖特基⼆极管。变压器匝比确定后，计算次级⼆极管反向电压为：

$$
V _ {R} = \frac {V _ {D C \_ M A X} * N _ {S}}{N _ {P}} + V _ {O U T}
$$

常用的肖特基⼆极管耐压一般小于 200V，更高耐压的应用需要选择超快恢复⼆极管。额定电流一般选取输出电流的3倍或以上。

## 降低空载功耗

BPA86528D 可通过高压启动电路通过 DRAIN 端对 VCC 电容充电。当 VCC 电压高于 15V，高压供电电路关闭，由辅助绕组通过一个电阻向VCC供电（如图11所示）。应选择合适的电阻和辅助绕组匝数，保证高压供电电路关闭，同时避免VCC 电压过高。过高的 VCC 可能导致功耗增加，VCC 高于38.5V 将触发 OVP 保护。

![](./素材/images/BPA86528D_CN_DS_Rev1.1/f2ca35f97a662964e7da14904be3fc96f5b75b56dc03da54ea86448c67983097.jpg)

图11. 辅助绕组供电电路

## 钳位电路计算

反激变换器中由于变压器漏感的存在，在开关管关断瞬间会产⽣很大的尖峰电压，使得开关管承受较高的电压应⼒。因此，为确保反激变换器安全可靠工作，必须引入钳位电路吸收漏感能量。其中RCD钳位电路因结构简单、成本低、性能可靠而被广泛应用，如图12所示。初级MOSFET关断时，漏感中的能量通过⼆极管D1，衰减电阻R2转移到钳位电容C1中，然后通过电阻R1消耗掉。R2的作用是衰减变压器漏感与钳位电容C1形成的高频振荡，一般取20\~100Ω之间，阻值太小起不到衰减作用，太大就会导致漏感能量不能进入钳位电容，使得钳位电路不起作用。钳位⼆极管D1在小功率应用(≤10W)中可以使用普通⼆极管，好处是较慢的反向恢复时间会使得钳位电容中的能量部分转移到次级，提高轻载效率，同时对高频振荡起到衰减的作用。功率较大时，普通⼆极管的反向恢复损耗会导致发热比较严重，因此需要使用快恢复⼆极管。

![](./素材/images/BPA86528D_CN_DS_Rev1.1/59a9409e6b3b2f0af76de685e9229c0d4ccaef2300abe44ac4103bb599c60ccb.jpg)

图12. RCD钳位电路

钳位电阻R1和钳位电容C1的计算过程如下，首先计算MOSFET关断瞬间漏感两端电压：

$$
V _ {L k} = V _ {C L A M P} - V _ {O R}
$$

其中，VCLAMP为钳位电容上的电压，流过漏感的电流斜率为：

$$
\frac {d i _ {L k}}{d t} = - \frac {V _ {C L A M P} - V _ {O R}}{L _ {K}}
$$

漏感电流从IPEAK下降到0的时间为:

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

根据经验值，ΔVCLAMP可取为2%\~5%\*VCLAMP，VCLAMP一般选为2\~2.5倍的VOR。

## 降低⾳频噪声

反激变换器的⾳频噪声来源主要是变压器、钳位电容和辅助供电电容。电容的噪声主要是因为瓷片电容的压电效应导致，钳位电容可以选择X7R材质，相比Z5U材质对⾳频噪声有较大改善，也可以使用没有压电效应的薄膜电容。辅助供电电容尽量使用电解电容，以避免轻载时由于较低的开关频率而产⽣噪声。变压器的噪声主要是因为线包和磁芯的震动，通过浸凡立水可以有效改善线包的震动。磁芯的震动可以通过降低最大磁通密度来改善，最大不要超过3000高斯，在噪声要求很高的应用中，甚至需要低于2500高斯。同时，在磁芯中柱点胶固定能进一步降低⾳频噪声。

## PCB Layout 指南

在设计 BPA86528D 的 PCB 时，需要遵循以下建议：

1) VCC 电容必须直接靠近 VCC 和 GND 引脚放置，与电容的连接⾛线应尽量短。建议使用X7R材质的陶瓷电容。  
芯片 GND 和辅助供电绕组的地应分别单独接到⺟线电容负端，光耦的信号地应单点接地到芯片地。  
3) 连接光耦的反馈信号线不要铺大铜⽪，以避免容易受到干扰。⾛线尽可能短，并远离变压器、MOSFET 漏极、初级钳位电路、辅助绕组等强干扰源。当光耦离芯片较远时，反馈信号线和信号地线应并排⾛线，以减小环路面积。反馈信号线也应该远离⺟线电压，避免高电压在PCB 上产⽣的漏电流进入FB 脚导致工作异常。  
4) 为了降低辐射干扰，应减小高频功率环路面积。初级⺟线电容、变压器绕组和芯片组成的环路面积尽可能小；

次级绕组、⼆极管和输出滤波电容组成的环路面积尽可能小；初级绕组和钳位电路组成的环路面积尽可能小。

5) DRAIN 引脚（MOSFET 漏极）是散热的主要途径，可以在 DRAIN 引脚铺铜来降低芯片温度，但过大铺铜可能导致 EMI 问题，需要按实际表现折中设计。可以在次级续流⼆极管两端铺铜增强散热，建议主要将铜⽪铺在⼆极管阴极端。  
6) 应将 Y 电容放置在初级输入滤波电容正端和次级滤波电容地之间，这样放置可以使高频共模浪涌电流远离芯片，从而避免芯片在雷击时受到干扰。如果在输入端使用了π 型 EMI 滤波器，那么滤波器内的电感应放置在输入滤波电容的负极之间。  
7) ESD 放电针应直接连接在初级输入滤波电容正端和次级滤波电容地或者输出正端之间，并远离芯片控制电路

![](./素材/images/BPA86528D_CN_DS_Rev1.1/3b9ce98b9be29b6cb5b9f411dcc4f0d27dd04987c0591927266141c73c61ab4f.jpg)

IC 和变压器必须远离 AC input

反馈器件必须远离变压器和功率环路  
VCC电容必须靠近IC  
![](./素材/images/BPA86528D_CN_DS_Rev1.1/174ca792a030077ecfc1cad8cf02f8a5e9fc78004456e357c179a7c5492e476e.jpg)

减小⾼频环路⾯积  
图 13. PCB 布局建议

## 封装信息

ESOP-10 封装外形尺寸  
![](./素材/images/BPA86528D_CN_DS_Rev1.1/627d51c491ed7bb1bee6b531a9fd8f90a106f25c322881c8b128b8f1eedc67af.jpg)  
COMMON DIMENSIONS (UNITS OF MEASURE=MILLIMETER)

<table><tr><td>SYMBOL</td><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A1</td><td>0.00</td><td>-</td><td>0.12</td></tr><tr><td>A2</td><td>1.30</td><td>1.40</td><td>1.50</td></tr><tr><td>A3</td><td>0.60</td><td>0.65</td><td>0.70</td></tr><tr><td>b</td><td>0.37</td><td>-</td><td>0.47</td></tr><tr><td>b1</td><td>0.35</td><td>-</td><td>0.45</td></tr><tr><td>c</td><td>0.17</td><td>-</td><td>0.27</td></tr><tr><td>c1</td><td>0.15</td><td>-</td><td>0.25</td></tr><tr><td>D</td><td>8.90</td><td>9.00</td><td>9.10</td></tr><tr><td>D1</td><td>6.77</td><td>-</td><td>6.97</td></tr><tr><td>E</td><td>7.40</td><td>7.50</td><td>7.60</td></tr><tr><td>E1</td><td>3.465</td><td>-</td><td>3.665</td></tr><tr><td>E2</td><td>3.365</td><td>-</td><td>3.565</td></tr><tr><td>E3</td><td>10.14</td><td>10.34</td><td>10.54</td></tr><tr><td>F</td><td>9.00</td><td>-</td><td>9.40</td></tr><tr><td>e</td><td colspan="3">1.00 BSC</td></tr><tr><td>e1</td><td colspan="3">1.98 BSC</td></tr><tr><td>e2</td><td>2.20</td><td>2.30</td><td>2.40</td></tr><tr><td>e3</td><td>2.295</td><td>2.395</td><td>2.495</td></tr><tr><td>e4</td><td colspan="3">0.40 BSC</td></tr><tr><td>L</td><td>0.62</td><td>0.72</td><td>0.82</td></tr><tr><td>L1</td><td>1.32</td><td>1.42</td><td>1.52</td></tr><tr><td>L2</td><td colspan="3">0.25 BSC</td></tr><tr><td>θ</td><td>0°</td><td>3°</td><td>6°</td></tr><tr><td>φ</td><td>0.90</td><td>1.00</td><td>1.10</td></tr><tr><td>x1</td><td>1.50</td><td>1.60</td><td>1.70</td></tr><tr><td>y1</td><td>1.70</td><td>1.80</td><td>1.90</td></tr><tr><td>M</td><td colspan="3">3.485 BSC</td></tr></table>

版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev.1.0</td><td>2025/01</td><td>首次发行</td></tr><tr><td>Rev.1.1</td><td>2025/03</td><td>更新极限参数 VCC 范围</td></tr></table>

## 免责声明

晶丰明源尽⼒确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本⾝及其使用有关的偶然或必然损失承担任何责任。

## 电子器件报废说明

该产品在⽣命周期结束后，由客⼾按照一般电子产品的报废流程进⾏处理。
