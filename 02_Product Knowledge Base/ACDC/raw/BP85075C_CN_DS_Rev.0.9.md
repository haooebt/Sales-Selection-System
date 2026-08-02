## 概述

BP85075C 内部集成了一颗非隔离 ACDC 降压型开关电源控制器和一颗 DCDC 高效智能降压型转换器。ACDC 降压型开关电源控制器输出 18V，作为 DCDC 高效智能降压型转换器的输入，DCDC 高效智能降压型转换器输出 5V。

## 内置开关电源控制器

BP85075C 内置一款高性能、高集成度、低待机功耗的开关电源驱动芯片，适用于全电压 85\~265VAC 输入的 Buck、Buck-Boost 变换器拓扑应用。内部集成了 650V 高压 MOSFET、高压启动和自供电电路、电流采样电路、输出电压采样电阻，极大地减少外围器件数量，节省系统成本和体积，同时提高可靠性。提供了丰富的保护功能，包括输出短路保护、输出过载保护、输出过压保护、反馈开路保护、逐周期限流、过温保护等。

## 内置高效智能降压转换器

BP85075C 内置一款高效智能降压型 DCDC 转换器。固定输出电压 5V，最大输出电流 150mA。
BP85075C 采用 BPSOP10 封装。

![](./素材/images/BP85075C_CN_DS_Rev.0.9/fda38bc085eed40af5d0136ef151fae177165173253167f479313789c2405764.jpg)  
BPSOP10 封装

## 典型应用

## 特点

■ 集成开关电源控制器  
■ 高效智能降压转换器  
■ 固定 18V 输出和 5V 输出  
■ 保护功能

输出短路保护(SCP)  
输出过压保护(OVP)  
输出过载保护(OLP)  
反馈开路保护  
逐周期限流(Cycle-by-Cycle)  
迟滞过温保护(OTP)

## 应用领域

小家电辅助电源  
■ 电机驱动辅助电源  
IOT/智能家居/智能照明

![](./素材/images/BP85075C_CN_DS_Rev.0.9/3f325283bf75c20284379bfb286f71acbb00fc280e10716428a08ace391ffa14.jpg)

图 1. BP85075C 典型 Buck 应用电路

定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP85075C</td><td>BPSOP10</td><td>卷盘4,000只/盘</td><td>BP85075XXXXYYZZWWC</td></tr></table>

管脚封装

![](./素材/images/BP85075C_CN_DS_Rev.0.9/e95369b3c3f6ca56dd579a30e4ff432e631d79ee01c88acb85c87a195f611fbb.jpg)

BP85075: 产品型号  
XXXXYYY: 批次号  
ZZ: 标示  
WW: 周号  
C: 封装代码

图 2. 管脚封装图  
管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>CP</td><td>智能降压转换器 Fly 电容正端</td></tr><tr><td>2</td><td>CN</td><td>智能降压转换器 Fly 电容负端</td></tr><tr><td>3</td><td>NC</td><td>无连接</td></tr><tr><td>4</td><td>D</td><td>开关电源控制器内置 MOSFET 漏极</td></tr><tr><td>5</td><td>FB</td><td>开关电源控制器输出电压反馈端</td></tr><tr><td>6,7</td><td>ICG</td><td>开关电源控制器地端,内置 MOSFET 源极</td></tr><tr><td>8</td><td>Vo</td><td>智能降压转换器输出端</td></tr><tr><td>9</td><td>GND</td><td>智能降压转换器地端</td></tr><tr><td>10</td><td>Vin</td><td>智能降压转换器输入端</td></tr></table>

输出规格表

<table><tr><td>型号</td><td>开关电源输出规格</td><td>智能降压转换器输出规格</td></tr><tr><td rowspan="2">BP85075C</td><td>18V 250mA</td><td>5V 150mA</td></tr><tr><td>18V 300mA</td><td>5V 100mA</td></tr></table>

注1：输出规格是在充分散热的条件下，具体输出规格需根据实际温升表现确定。

极限参数(注2)（无特别说明情况下， $T_{A}=25^{\circ}C$ ）

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td> $V_{DS}$ </td><td>D引脚电压(参考ICG引脚)</td><td>-0.3~650</td><td>V</td></tr><tr><td> $I_{DS\_MAX}$ </td><td>内部高压MOSFET最大漏极电流(注3)</td><td>910(1710)</td><td>mA</td></tr><tr><td> $V_{FB}$ </td><td>FB引脚电压(参考ICG引脚)</td><td>-0.3~30</td><td>V</td></tr><tr><td> $V_{Vin}$ </td><td>Vin引脚电压</td><td>-0.3~30</td><td>V</td></tr><tr><td> $V_{CP}$ </td><td>CP引脚电压</td><td>-0.3~12</td><td>V</td></tr><tr><td> $V_{CN}$ </td><td>CN引脚电压</td><td>-0.3~6</td><td>V</td></tr><tr><td> $V_{OUT}$ </td><td>VOUT引脚电压</td><td>-0.3~6</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注4)</td><td>1.1</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>结到环境的热阻(注5)</td><td>110</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40 to 150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55 to 150</td><td>°C</td></tr><tr><td>ESD</td><td>人体模型ESD(注6)</td><td>TBD</td><td>kV</td></tr></table>

注2：极限参数是指超出该工作范围，芯片有可能损坏。除非特殊说明，电压值均参考 GND。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。  
注3：当漏极电压低于400V时，可允许更高的最大漏极电流。  
注4：温度升高最大功耗一定会减小，这也是由 $T_{\mathrm{JMAX}}$ ， $\theta_{\mathrm{JA}}$ 和环境温度 $T_{\mathrm{A}}$ 所决定的。最大允许功耗为 $P_{DMAX} = (T_{JMAX} - T_A) / \theta_{JA}$ 或是极限范围给出的数字中比较低的那个值。  
注5：1平方英寸双层PCB板，按照JEDEC标准测试。  
注 6：按照 JEDEC 标准测试, 100pF 电容通过 1.5kΩ 电阻放电。

电气参数(注7)（无特别说明情况下， $T_{A}=25^{\circ}C$ ）

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">自供电</td></tr><tr><td> $V_{DS\_SUP}$ </td><td>最小漏极启动电压</td><td></td><td></td><td>40</td><td></td><td>V</td></tr><tr><td> $I_{CC}$ </td><td>芯片工作电流</td><td> $V_{DRAIN}=40V$ </td><td></td><td>10</td><td></td><td>μA</td></tr><tr><td> $I_Q$ </td><td>芯片静态电流</td><td> $V_{DRAIN}=11V$ </td><td></td><td>80</td><td></td><td>μA</td></tr><tr><td colspan="7">输出电压反馈</td></tr><tr><td> $V_{FB}$ </td><td> $V_{FB}$ 引脚调制电压</td><td></td><td></td><td>18.35</td><td></td><td>V</td></tr><tr><td> $V_{FB\_OLP}$ </td><td> $V_{FB}$ 引脚过载保护电压</td><td></td><td></td><td>9.24</td><td></td><td>V</td></tr><tr><td> $t_{OLP}$ </td><td>输出过载屏蔽时间</td><td></td><td></td><td>1024</td><td></td><td>cycles</td></tr><tr><td> $V_{FB\_SC}$ </td><td> $V_{FB}$ 引脚短路保护电压</td><td></td><td></td><td>3.32</td><td></td><td>V</td></tr><tr><td> $t_{SC}$ </td><td>输出短路屏蔽时间</td><td></td><td></td><td>256</td><td></td><td>cycles</td></tr><tr><td> $V_{FB\_OVP}$ </td><td> $V_{FB}$ 引脚过压保护电压</td><td></td><td></td><td>22.75</td><td></td><td>V</td></tr><tr><td> $t_{AR\_OFF}$ </td><td>自动重启间隔时间</td><td></td><td></td><td>0.5</td><td></td><td>s</td></tr><tr><td colspan="7">振荡器</td></tr><tr><td> $f_{S\_MAX}$ </td><td>最大开关频率</td><td></td><td></td><td>45</td><td></td><td>kHz</td></tr><tr><td> $f_{S\_MIN}$ </td><td>最小开关频率</td><td></td><td></td><td>0.5</td><td></td><td>kHz</td></tr><tr><td> $t_{ON\_MAX}$ </td><td>最大开通时间</td><td></td><td>8</td><td></td><td></td><td>μs</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $I_{LIMIT\_MAX}$ </td><td>最大电流限值(注8)</td><td></td><td></td><td>620</td><td></td><td>mA</td></tr><tr><td> $I_{LIMIT\_MIN}$ </td><td>最小电流限值</td><td></td><td></td><td>180</td><td></td><td>mA</td></tr><tr><td> $t_{LEB}$ </td><td>前沿消隐时间</td><td></td><td></td><td>240</td><td></td><td>ns</td></tr><tr><td colspan="7">功率管</td></tr><tr><td> $R_{DS\_ON}$ </td><td>功率管导通阻抗</td><td> $I_{DS}=50A$ </td><td></td><td>11</td><td></td><td>Ω</td></tr><tr><td> $I_{DSS1}$ </td><td>功率管关断漏电流</td><td> $V_{DS}=500V$ </td><td></td><td></td><td>30</td><td>μA</td></tr><tr><td> $I_{DSS2}$ </td><td>DRAIN引脚关断漏电流</td><td> $V_{DS}=650V, V_{FB}=25$ </td><td></td><td>110</td><td></td><td>μA</td></tr><tr><td> $BV_{DSS}$ </td><td>功率管的击穿电压</td><td></td><td>650</td><td></td><td></td><td>V</td></tr><tr><td colspan="7">智能降压转换器</td></tr><tr><td rowspan="2"> $V_{in}$ </td><td rowspan="2">输入电压</td><td> $I_{out}=110mA$ </td><td>12</td><td></td><td>30</td><td>V</td></tr><tr><td> $I_{out}=150mA$ </td><td>13</td><td></td><td>30</td><td>V</td></tr><tr><td> $V_o$ </td><td>输出电压</td><td></td><td>4.75</td><td>5</td><td>5.25</td><td>V</td></tr><tr><td> $I_Q$ </td><td>静态工作电流</td><td> $I_{out}=0, Vin=30V$ </td><td></td><td></td><td>250</td><td>μA</td></tr><tr><td> $F_{sw}$ </td><td>开关频率</td><td></td><td></td><td>400</td><td></td><td>kHz</td></tr><tr><td colspan="7">过热保护</td></tr><tr><td> $T_{OTP}$ </td><td>过温保护阈值</td><td></td><td></td><td>145</td><td></td><td>°C</td></tr><tr><td> $T_{HYST}$ </td><td>过温保护迟滞</td><td></td><td></td><td>40</td><td></td><td>°C</td></tr></table>

注7：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。除非特殊说明，开关电源控制器相关参数参考ICG；智能降压转换器相关参数参考GND。  
注8：电气参数 $I_{LIMIT\_MAX}$ 是FT用DC方式测试，无关断延时。实际系统由于关断延时， $I_{LIMIT\_MAX}$ 会比设计值高一点，高压更明显。此偏差受到输入电压，电感量影响

## 内部结构框图

![](./素材/images/BP85075C_CN_DS_Rev.0.9/2b79c3987a3881e4908926292e45aaebd43f862aae9ca71e387958b25f7bc130.jpg)

图 3. BP85075C 内部框图

## 功能描述

## 开关电源控制器部分

BP85075C 内置一款高压输入具有 18V 恒压输出特性的驱动芯片。无需外部 VCC 电容，内部集成 650V 功率开关、高压自供电电路、电流采样电路、输出电压采样电阻，以及丰富的保护功能，只需要极少的外围器件即可实现优异的恒压输出特性。开关频率根据电感和负载自适应调整，使电源设计更加灵活。同时，具有较低的待机功耗、良好的输出电压调整率、较低的输出电压纹波和低音频噪声，特别适合于非隔离辅助电源应用。

（注9：以下描述到的参数均为电气参数列表中的典型值，除非特别说明是最大或最小值）

## 高压启动供电

BP85075C 内部集成了高压启动与自供电电路，无需外部 VCC 电容。系统上电后，母线电压上升，内部高压启动电路通过 D 端对内部 VCC 电容充电。当内置 VCC 电容电压达到芯片启动阈值 11V 时，芯片内部控制电路开始工作。当 VCC 电容电压降低到欠压保护阈值 5V 时，芯片关断内部 MOSFET。芯片正常工作时，在 MOSFET 关断期间自供电电路通过 D 端对内置 VCC 电容供电。

![](./素材/images/BP85075C_CN_DS_Rev.0.9/8278a45a674101634496a29144046cc0b83efc0aafcdc6c6a85390dcd6edfb27.jpg)

图 4. 高压启动与 VCC 欠压保护时序

## 软启动

BP85075C 内部具有软启动功能，在软启动过程中，MOSFET 峰值电流(限流点)逐渐增加。由于启动时输出电压一般较低，MOSFET 关断期间输出电压对电感的去磁较少，电感电流进入深度连续模式(CCM)，使得续流二极管的反向恢复电流较大。续流二极管反向恢复电流会通过 MOSFET 并产生损耗，过大的电流尖峰还可能会导致 MOSFET 损坏。软启动电路通过控制启动过程中 MOSFET 峰值电流逐渐增加，可以有效降低二极管的反向恢复电流，降低 MOSFET 电流应力。由保护电路触发的重启也会经历一次软启动过程。软启动过程如图 5 所示，起始限流值为 50% 最大限流值，32 个开关周期(Ts)后增加到 75% 最大限流值，再持续 32 个开关周期后结束软启动，限流值变为最大值。

![](./素材/images/BP85075C_CN_DS_Rev.0.9/2ed9b4cceafa9fe515d77d42adbf1a19fc67c05d24603c5ce07b9aaf6b0789bc.jpg)

图 5. 软启动过程

## 输出电压采样

BP85075C 内部通过 FB 引脚采样输出电压，经过反馈二极管到达 FB 引脚，FB 电压经内部电阻分压后与内部基准电压进行运算实现恒压控制。输出电压采样仅在续流状态 3μs 时进行，电感设计时建议保证续流时间大于 7μs，以防止无法正确采样输出电压导致工作异常。

![](./素材/images/BP85075C_CN_DS_Rev.0.9/0cb3ab806a190f60fb5ce96cec5fc9a7f4a0be7b0427f06700c660082609f10f.jpg)

图 6. 输出电压采样示意图

## 多模式控制

BP85075C 采用 PWM/PFM 多模式控制技术，有效降低系统待机功耗，提高平均效率，并减小系统工作在轻载时的噪声。电感峰值电流控制模式，具有较快的动态响应速度。如图 7 所示，重载条件下，芯片工作在 PFM 模式，MOSFET 限流点（电感峰值电流）保持最大值 $I_{LIMIT\_MAX}$ 不变，开关频率随负载增加而升高，最高为 $f_{S\_MAX}(45kHz)$ 。随着负载减小，开关频率降低，达到 22kHz 后芯片进入 PWM 工作模式。PWM 模式下开关频率保持 22kHz 不变，MOSFET 限流点随负载减小而降低，直到最低限流点 $I_{LIMIT\_MIN}$ 。轻载条件下再次进入 PFM 模式，MOSFET 限流点保持 $I_{LIMIT\_MIN}$ 不变，开关频率随负载减小继续降低，直到空载条件下，开关频率降低到最小值 $f_{S\_MIN}(0.5kHz)$ 。轻载和空载条件下，较小的电感峰值电流在磁芯中产生的磁通密度也相应减小，因此能有效抑制音频噪声。

![](./素材/images/BP85075C_CN_DS_Rev.0.9/b5cb665746741df5ca0b33ee1550d7d0aec847063065ec82adf3565ff97a3867.jpg)

图 7. 控制模式

## 电流检测

BP85075C 内部集成电流采样电路，无需外置电流采样电阻，对 MOSFET 电流逐周期限制。当一个开关周期开始时，控制电路开通 MOSFET，漏极电流上升，当电流上升达到内部限制值时，控制电路关断 MOSFET，直到下一个开关周期开始。内置前沿消隐(Leading Edge Blanking)时间， $t_{LEB}$ 可以避免由于外部电路的容性或二极管的反向恢复导致 MOSFET 在开通瞬间出现的电流尖峰误触发 MOSFET 关断。

## 自动重启

当外部故障（输出短路、过压、过载）触发相应的保护，控制电路关断 MOSFET，系统停止工作。内部的自动重启电路等待$t_{AR\_OFF}$ (0.5s)时间后重新启动系统，如果启动后故障没有消除，则重新触发相应的保护。每次重启都会经历软启动过程。

## 短路保护/过载保护(SCP/OLP)

BP85075C 内部控制电路通过 FB 引脚检测输出短路或过载故障。如图 8 所示，当 FB 电压低于 $V_{FB\_SC}$ (3.32V) 且保持 256 个开关周期，则触发短路保护(SCP)并进入自动重启程序。将 FB 引脚短路到 GND 或悬空也可以触发该保护。如果芯片检测到 FB 电压低于 $V_{FB\_OLP}$ (9.24V) 且持续 1024 个开关周期，则触发过载保护(OLP)并进入自动重启程序。

![](./素材/images/BP85075C_CN_DS_Rev.0.9/e48b26a076a443be97680c8ccc7c255bf279991fd8094f1b8d7a921029f3320a.jpg)

图 8. 短路保护、过载保护工作模式

## 输出过压保护（OVP）

BP85075C 内部内部控制电路通过 FB 引脚检测输出过压故障。当 FB 电压连续 2 个开关周期高于 $V_{FB\_OVP}(22.75V)$ 时，触发输出过压保护，芯片进入自动重启程序。

## 过温保护（OTP）

BP85075C 内部内置过温保护电路。当结温达到过温保护阈值 $T_{OTP}$ 时，芯片会停止工作，MOSFET 关断，直到结温下降到 $T_{OTP}-T_{HYST}$ 时，芯片重新启动。 $T_{HYST}$ 为温度迟滞，较大的温度迟滞有利于把系统整体温度控制在较低水平。

## 智能降压换器部分

## 控制模式

BP85075C 控制模式为固定频率（约 400kHz），固定占空比（约 50%）的 On-Off 控制。

## 输出短路保护

BP85075C 通过检测输出电压判断输出短路故障。当 Vo<1.2V 且持续 5ms 后，进入短路保护状态，芯片停止开关并保持约 500ms 后，自动重置检测输出电压，如果输出短路状态移除，芯片自行恢复到正常工作状态。

## 输出过载保护

BP85075C 通过检测输出电压判断输出过载故障。当 Vo<2.5V 且持续 25ms 后，进入过载保护状态，停止开关并保持约 500ms 后，自动重置检测输出电压，如果输出过载状态移除，芯片自行恢复到正常工作状态。

## 输出过压保护

BP85075C 通过检测输出电压判断输出过压故障。当 Vo>5.5V 且持续 10μs 后，进入过压保护状态，停止开关并保持约 500ms 后，自动重置检测输出电压，如果输出过压状态移除，芯片自行恢复到正常工作状态。

## 应用指南

## 输出电感计算（Buck 拓扑）

BP85075C 可工作于 CCM 和 DCM 工作模式，取决于额定输出电流和输出电感感量。当 Buck 变换器输出电流

$I_{OUT}>0.5*I_{LIMIT\_MAX}$ 时，电感需要工作于CCM才能满足负载电流要求；当 $I_{OUT}<0.5*I_{LIMIT\_MAX}$ 时，DCM和CCM都可以满足输出负载电流要求，工作模式取决于电感的感量大小。电感感量越大，带载能力越强，因为需要更多圈数，体积也会更大，成本相对高，动态响应较慢，CCM下开关损耗大。小感量电感可以减小尺寸、降低价格以及改善系统动态响应，CCM下开关损耗小，但同时会增大电感的峰值电流和输出纹波电压，峰值带载能力也较小。通常，在满足最大输出电流的前提下，尽量选取小电感量。实际选择电感时，通常根据输入输出规格，计算出能满足输出电流的最小电感值，然后从电感供应商的选型手册中选取大一档的标准值电感。因此， $I_{OUT}>0.5*I_{LIMIT\_MAX}$ 时按照CCM计算电感量， $I_{OUT}<0.5*I_{LIMIT\_MAX}$ 时按照DCM计算电感量。

CCM 模式下，如图 9 所示，根据输入输出电压、系统开关频率、满载输出电流以及芯片最大限流值计算最小电感值：

$$
L _ {M I N} = \frac {(V _ {O U T} + V _ {D i o d e}) * (V _ {I N} - V _ {D S} - V _ {O U T})}{(V _ {I N} - V _ {D S} + V _ {D i o d e}) * f _ {S} * \Delta I _ {L}}
$$

其中， $V_{IN}$ 输入直流母线电压

$V_{OUT}$ 输出电压

$I_{OUT}$ 输出电流

$V_{Diode}$ 续流二极管压降

$V_{DS}$ 开关管 $t_{ON}$ 时间内平均压降

$f_{s}$ 开关频率

$t_{ON}$ 开关管开通时间

$t_{OFF}$ 开关管关断时间

$I_{LIMIT\_MAX}$ 芯片最大限流值

$$
\Delta I _ {L} = 2 * (I _ {L I M I T \_ M A X} - I _ {O U T})
$$

$$
V _ {D S} = I _ {O U T} * R _ {d s (O N)}
$$

![](./素材/images/BP85075C_CN_DS_Rev.0.9/d4ae58bedd07dfb0588f75b375d05fd473a1b42b1164b8453c71a156aca38c59.jpg)

图 9. CCM 模式下的电感电流

电感电流有效值为：

$$
I _ {R M S} = \sqrt {I _ {L I M I T \_ M A X} ^ {2} - I _ {L I M I T _ {M A X}} * \Delta I _ {L} + \frac {\Delta I _ {L} ^ {2}}{3}}
$$

DCM 模式下(如图 10 所示)，根据输入/输出电压、系统开关频率、满载输出电流以及芯片最大限流值计算最小电感值：

$$
L _ {M I N} = \frac {2 * I _ {O U T} * (V _ {O U T} + V _ {D i o d e}) * (V _ {I N} - V _ {D S} - V _ {O U T})}{(V _ {I N} - V _ {D S} + V _ {D i o d e}) * f _ {S} * I _ {L I M I T \_ M A X} ^ {2}}
$$

其中，

$$
V _ {D S} = \frac {1}{2} * I _ {L I M I T \_ M A X} * R _ {d s (O N)}
$$

电感电流有效值为：

$$
I _ {R M S} = I _ {L I M I T \_ M A X} * \sqrt {\frac {t _ {O N} + t _ {O F F}}{3} * f _ {S}}
$$

![](./素材/images/BP85075C_CN_DS_Rev.0.9/538caee7600396556a59a2c2352f4ad4aeab128bc3f2a6ef6f97fd5888112f83.jpg)

图 10. DCM 模式下的电感电流

一般来说， $V_{IN}$ 是一个范围，通常选择最大输入直流母线电压代入计算公式，或者也可以分别计算最高和最低母线电压对应的电感量，最后取两者中较大者。上述两个电感表达式计算出来的都是输出额定电流所需的最小电感量，设计中需要考虑实际电感的精度，通常取计算值的 1.1 倍以保证批量生产时能满足最低电感量的要求。表达式中 $I_{LIMIT\_MAX}$ 应该取芯片最大限流值的下限。

为了降低待机功耗，减小输出端需要的假负载，BP85075C 通过多模式控制降低了空载下的限流点和开关频率。为了使空载时电感电流可控，电感量需要足够大以至于在 MOSFET 最小导通时间内电流峰值不超过芯片最低限流值。即

$$
L \geq \frac {t _ {L E B} * (V _ {I N \_ M A X} - V _ {O U T})}{I _ {L I M I T \_ M I N}}
$$

其中， $t_{LEB}$ 为前沿消隐时间， $I_{LIMIT\_MIN}$ 为芯片的最低限流值。如图 11 所示，电感量小于临界值会导致 $t_{LEB}$ 时刻电感峰值电流大于芯片控制的限流点，平均输出电流过大，需要较大的假负载给电感电流提供通路，从而稳定输出电压。

![](./素材/images/BP85075C_CN_DS_Rev.0.9/145cb25c79e1bd201054294f71374e048142f83dbf704436fc56d8749a485449.jpg)

图 11. 空载下的电感电流

此外，所选择的电感需要保证芯片工作在最低限流点时的续流时间大于 $7 \mu s$ ，以保证芯片可以正常反馈采样，即

$$
L \geq \frac {V _ {O U T} * 7 \mu s}{I _ {L I M I T \_ M I N}}
$$

因此，通常最终的电感值需要同时满足以上三个条件。待机要求不高的应用只需要满足额定输出电流的最小电感即可。确定电感值后需要确认电感的有效值电流是否满足上述计算值，同时还需要保证电感磁芯在芯片最大限流值 $I_{LIMIT\_MAX}$ 不饱和，供应商的选型手册中一般会给出电感的有效值电流和饱和电流。

## 输入电容的选择

输入滤波电容对工频电压纹波、传导 EMI、以及电源抵抗 Surge 的能力都起到关键的作用。电容量的选择要保证直流母线电压不能过低(通常不要低于 70V)，因此电容量取决于输出功率和电源效率。全电压 85\~265VAC 输入时，如果使用全波整流，一般取≥3μF/W；对于半波整流，电容量一般取≥6μF/W。单高压 176\~265VAC 输入时，在满足 EMI 和 Surge 的前提下容量可以减半。

## 输出电容的选择

输出电容的作用是滤除电感电流中的交流成分，提供稳定的直流电压给负载，一般根据输出电压纹波要求来选取合适的电容。当输出电流恒定时，输出纹波主要由输出电容的 ESR 以及容量决定。

$$
\Delta V _ {O U T} = \Delta V _ {E S R} + \Delta V _ {C}
$$

CCM 模式下，由容性产生的纹波电压为：

$$
\Delta V _ {C} = \frac {\Delta I _ {L}}{8 * C _ {O U T} * f _ {S}}
$$

DCM 模式下，由容性产生的纹波电压为：

$$
\Delta V _ {C} = \frac {I _ {O U T} * (I _ {L I M I T \_ M A X} - I _ {O U T}) ^ {2}}{C _ {O U T} * f _ {S} * I _ {L I M I T \_ M A X} ^ {2}}
$$

实际应用中，为了得到较小的 ESR，电容量相对比较大，由容量产生的输出电压纹波很小，几乎可以忽略，因此电压纹波主要由电容的 ESR 产生：

$$
\Delta V _ {E S R} = \Delta I _ {L} * E S R (\text { CCM })
$$

$$
\Delta V _ {E S R} = I _ {L I M I T \_ M A X} * E S R \quad (\mathrm{DCM})
$$

## 假负载计算

为了维持较好的动态响应，芯片的最低开关频率设置为0.5kHz。当输出空载时，需要一个假负载为电感电流提供回路，从而稳定输出电压，电感的平均电流即为假负载的电流。

$$
I _ {A V G} = \frac {1}{2} * I _ {L} * (T _ {O N} + T _ {O F F}) * f _ {S \_ M I N}
$$

其中， $I_{L}$ 为空载时电感峰值电流：

$$
I _ {L} = \frac {V _ {I N \_ M A X}}{L} * t _ {D e l a y} + I _ {L I M I T \_ M I N}
$$

$I_{LIMIT\_MIN}$ 为芯片的最低限流值， $f_{S\_MIN}$ 为芯片最低频率， $T_{ON}$ 、 $T_{OFF}$ 分别为空载时 MOSFET 开通和关断时间：

$$
T _ {O N} = \frac {L * I _ {L}}{V _ {I N \_ M A X}}
$$

$$
T _ {O F F} = \frac {L * I _ {L}}{V _ {O U T} + V _ {D i o d e}}
$$

$$
R _ {L} = \frac {V _ {O U T}}{I _ {A V G}}
$$

以上计算未考虑芯片自供电电流通过假负载，实际需要的假负载电流稍大，一般为 1\~3mA 左右。

## Buck-Boost 应用设计

BP85075C 也可以应用于 Buck-Boost 拓扑中，实现负电压输出，芯片的基本功能与 Buck 拓扑类似。由于电感只在

MOSFET 关断期间对输出端提供能量，相同的输出功率需要较大感量的电感。

CCM 模式下，通过以下表达式计算最小电感值：

$$
L _ {M I N} = \frac {0 . 5 * V _ {O U T} ^ {\prime} * V _ {I N} ^ {\prime 2} * \frac {1}{f _ {S}}}{\left(V _ {I N} ^ {\prime} + V _ {O U T} ^ {\prime}\right) * \left[ V _ {I N} ^ {\prime} * I _ {L I M I T \_ M A X} - \left(V _ {I N} ^ {\prime} + V _ {O U T} ^ {\prime}\right) * I _ {O U T} \right]}
$$

其中

$$
V _ {I N} ^ {\prime} = V _ {I N} - V _ {D S}
$$

$$
V _ {O U T} ^ {\prime} = V _ {O U T} + V _ {D i o d e}
$$

$$
V _ {D S} = \frac {V _ {I N} ^ {\prime} + V _ {O U T} ^ {\prime}}{V _ {I N} ^ {\prime}} * I _ {O U T} * R _ {d s (O N)}
$$

$V_{IN}$ 输入直流母线电压

$V_{OUT}$ 输出电压

$I_{OUT}$ 输出电流

$V_{Diode}$ 续流二极管压降

$V_{DS}$ 开关管 $t_{ON}$ 时间内平均压降

$I_{LIMIT\_MAX}$ 芯片最大限流值

电感电流有效值为:

$$
I _ {R M S} = \sqrt {I _ {L I M I T \_ M A X} ^ {2} - I _ {L I M I T _ {M A X}} * \Delta I _ {L} + \frac {\Delta I _ {L} ^ {2}}{3}}
$$

其中

$$
\Delta I _ {L} = 2 * (I _ {L I M I T _ {M A X}} - \frac {I _ {O U T}}{V _ {I N} ^ {\prime}} * (V _ {I N} ^ {\prime} + V _ {O U T} ^ {\prime}))
$$

DCM 模式下，通过以下表达式计算最小电感值：

$$
L _ {M I N} = \frac {2 * (V _ {O U T} + V _ {D i o d e}) * I _ {O U T}}{I _ {L I M I T \_ M A X} ^ {2} * f _ {S}}
$$

电感电流有效值为：

$$
I _ {R M S} = I _ {L I M I T \_ M A X} * \sqrt {\frac {t _ {O N} + t _ {O F F}}{3} * f _ {S}}
$$

空载条件对最小感量的限制与 Buck 拓扑基本一致。

由于电感只在 MOSFET 关断期间对输出端提供能量，因此输出滤波电容纹波电流比 Buck 拓扑大，电压纹波主要由电容的 ESR 产生：

$$
\Delta V _ {E S R} = I _ {\text { LIMIT\_MAX }} * E S R \quad (\text { 适应于   DCM / CCM })
$$

## PCB Layout 指南

在设计 BP85075C 应用 PCB 时，需要遵循以下建议：

1) FB 应避免铺铜，且远离母线电压、母线地和输出电感等高压或电压动点，以避免干扰。  
2) ICG 能起到散热作用，可以在 PCB 上铺铜散热，但是 ICG 为电压动点（相对母线地），在满足散热的条件下铺铜面积应尽量小以减少噪声辐射。  
3) D 内部 MOSFET 的漏极，接输入直流母线，为电压静点，可以铺铜散热。同时建议 D 与 FB、ICG 的走线距离大于 2mm。  
4) 尽量减小功率环路面积以避免 EMI 干扰并提高系统可靠

性。以 BUCK 为例，建议缩小输入电容、内置 MOSFET、电感、输出电容组成的励磁回路，以及电感、输出电容、续流二极管组成的续流回路面积。反馈回路面积与走线长度也应减小以提高可靠性。

5) 输出电感容易产生噪声，建议远离芯片 FB，同时远离交流输入端以避免 EMI 问题。  
6) 建议功率回路的走线宽而短, 以提高系统可靠性。例如母线到 ICG 引脚的走线, ICG 到输出电容的走线等。  
7) CP 与 CN 间的电容尽量靠近管脚，并远离与高压 D 管脚的走线。  
8) GND 是 5V 输出的参考地，可以起到散热作用，可以在 PCB 上铺铜散热。

## 封装信息

![](./素材/images/BP85075C_CN_DS_Rev.0.9/1dc609841619bb364a28a668ad402c24f37c06d7c1f7de5ad742412078b65d11.jpg)

![](./素材/images/BP85075C_CN_DS_Rev.0.9/ba44f306f1bc1de09b2a5f053710f7a363a44dcc0b3629837c3a7e1fcfc2564e.jpg)

侧视图  
![](./素材/images/BP85075C_CN_DS_Rev.0.9/e5b902f55e9235091b608c276cd8e80da49b3a2c07d7aa17454c65a5b2acc189.jpg)

COMMON DIMENSIONS
(UNITS OF MEASURE=MILLIMETER)

<table><tr><td>SYMBOL</td><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A1</td><td>0.02</td><td>0.10</td><td>0.25</td></tr><tr><td>A2</td><td>1.30</td><td>1.40</td><td>1.50</td></tr><tr><td>A3</td><td>0.60</td><td>0.65</td><td>0.70</td></tr><tr><td>b</td><td>0.35</td><td>0.40</td><td>0.45</td></tr><tr><td>b2</td><td>1.62</td><td>1.67</td><td>1.72</td></tr><tr><td>c</td><td>0.15</td><td>-</td><td>0.25</td></tr><tr><td>D</td><td>8.50</td><td>8.60</td><td>8.70</td></tr><tr><td>E</td><td>3.80</td><td>3.90</td><td>4.00</td></tr><tr><td>E1</td><td>5.80</td><td>6.00</td><td>6.20</td></tr><tr><td>e</td><td colspan="3">1.27 BSC</td></tr><tr><td>e1</td><td colspan="3">3.18 BCS</td></tr><tr><td>e2</td><td colspan="3">3.81 BSC</td></tr><tr><td>e3</td><td colspan="3">1.91 BSC</td></tr><tr><td>L</td><td>0.40</td><td>0.55</td><td>0.70</td></tr></table>

版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td></td><td></td><td></td></tr></table>

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。

## 电子器件报废说明

该产品在生命周期结束后，由客户按照一般电子产品的报废流程进行处理。
