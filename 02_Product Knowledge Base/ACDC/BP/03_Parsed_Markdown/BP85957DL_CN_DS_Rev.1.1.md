## BP85957DL高集成度开关电源驱动芯片

## 概述

BP85957DL 是一款高性能、高集成度、低待机功耗的开关电源驱动芯片，适用于全电压 85\~265VAC 输入的 Buck、BuckBoost等变换器拓扑应用。

BP85957DL 内部集成了 500V高压 MOSFET、高压启动和自供电电路、电流采样电路以及电压反馈电路，采用先进的控制技术，无需环路补偿即可实现优异的恒压输出特性，极大地减少了外围器件数量，节省了系统成本和体积，同时提高了可靠性。

BP85957DL 芯片采用多模式控制技术，能有效降低系统待机功耗，提高效率和改善动态性能，并减小系统工作在轻载时的音频噪声。

BP85957DL 提供了丰富的保护功能，包括输出过压保护、输出过载保护、逐周期限流、过温保护等，使系统更加安全可靠。

BP85957DL 采用 SOP8 封装。

![](images/4509f2ed8849aff484cae91ecff2a8263421900229c4bfed10eaf17954bb6f5c.jpg)  
SOP-8 封装

## 特点

 内部集成 500V 高压 MOSFET

 集成高压启动和自供电电路

 集成输出电压采样

 低待机功耗

 固定 12V 输出

 优异的动态响应速度，输出电压纹波小

 无需外部补偿电路

 自适应开关频率，最高 48kHz

 内置软启动功能

 保护功能

输出过压保护(OVP)

输出过载保护(OLP)

逐周期限流(Cycle-by-Cycle)

过温保护(OTP)

## 应用领域

 小家电辅助电源

 电机驱动辅助电源

■ IOT/智能家居/智能照明

## 典型应用

![](images/a648acb30c1651be127e223f58843c5edb8154636fddffa432976c6527d491db.jpg)  
图 1. BP85957DL 典型 BUCK 应用电路

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP85957DL</td><td>SOP-8</td><td>卷盘4,000 只/盘</td><td>BP85957XXXXYLZZZZWWD</td></tr></table>

## 管脚封装

![](images/e2fd21b8c8e99fea16904bfbf237b1d15e9a129caee899ba2f5d544f412dcc23.jpg)  
D：封装代码（D 代表SOP）

图 2. 管脚封装图

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>FB</td><td>输出电压反馈引脚</td></tr><tr><td>2</td><td>GND</td><td>芯片地,内部 MOSFET 源极</td></tr><tr><td>3、4</td><td>NC</td><td>无连接,悬空</td></tr><tr><td>5、6、7、8</td><td>DRAIN</td><td>芯片内部高压 MOSFET 漏极,此引脚也向芯片内部提供自供电电流</td></tr></table>

## 输出规格表

<table><tr><td>型号</td><td>输入电压</td><td>稳态功率(注1)</td><td>峰值功率(注2)</td></tr><tr><td rowspan="2">BP85957DL</td><td>150~265Vac</td><td>4.8W(12V/400mA)</td><td>6.6W(12V/550mA)</td></tr><tr><td>85~265Vac</td><td>4.2W(12V/350mA)</td><td>6W(12V/500mA)</td></tr></table>

注 1：稳态功率在半封闭式 75°C 环境下测试(Buck/Buck-boost 应用)，持续时间大于2小时。  
注 2：峰值功率在半封闭式 75°C 环境下测试(Buck/Buck-boost 应用)，持续时间大于 1 分钟。

极限参数(注 3) （无特别说明情况下， ${ \sf T } _ { \sf A } = 2 5 ^ { \circ } { \sf C } )$

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td> $V_{DRAIN}$ </td><td>内部高压 MOSFET 漏极到源极电压</td><td>-0.3~500</td><td>V</td></tr><tr><td> $V_{FB}$ </td><td>FB 引脚电压</td><td>-0.3~30</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注 4)</td><td>0.86</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>结到环境的热阻(注 5)</td><td>145</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40 to 150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55 to 150</td><td>°C</td></tr><tr><td>ESD</td><td>人体模型 ESD(注 6)</td><td>3</td><td>kV</td></tr></table>

注 3：极限参数是指超出该工作范围，芯片有可能损坏。除非特殊说明，电压值均参考芯片 GND。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。

注 4：温度升高最大功耗一定会减小，这也是由 T<sub>JMAX</sub>, θ<sub>JA</sub>,和环境温度T<sub>A</sub>所决定的。最大允许功耗为P<sub>DMAX</sub> = (T<sub>JMAX</sub> - T<sub>A</sub>)/ θ<sub>JA</sub>或是极限范围给出的数字中比较低的那个值。

注 5：1平方英寸双层 PCB板，按照JEDEC 标准测试。

注 6：按照 JEDEC 标准测试, 100pF 电容通过 1.5kΩ电阻放电。

电气参数(注 7) （无特别说明情况下，T<sub>A</sub> =25℃）

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">自供电</td></tr><tr><td> $V_{DS\_SUP}$ </td><td>最小漏极启动电压</td><td></td><td></td><td>40</td><td></td><td>V</td></tr><tr><td> $I_{CC}$ </td><td>芯片工作电流</td><td> $V_{FB}=13V$ </td><td></td><td>350</td><td>450</td><td>μA</td></tr><tr><td> $I_Q$ </td><td>芯片静态电流</td><td> $V_{FB}=8V$ </td><td></td><td>180</td><td>250</td><td>μA</td></tr><tr><td> $V_{CC\_ON}$ </td><td>VCC启动阈值电压</td><td>VCC电压上升至IC开启</td><td>8.5</td><td>11.5</td><td>15</td><td>V</td></tr><tr><td colspan="7">输出电压反馈</td></tr><tr><td> $V_{FB\_REF}$ </td><td>FB引脚调制电压</td><td></td><td>12.12</td><td>12.58</td><td>12.96</td><td>V</td></tr><tr><td> $V_{FB\_OLP}$ </td><td>FB引脚OLP电压</td><td></td><td></td><td>8.6</td><td></td><td>V</td></tr><tr><td> $t_{OLP}$ </td><td>输出过载屏蔽时间</td><td></td><td></td><td>2048</td><td></td><td>Cycles</td></tr><tr><td> $V_{FB\_OVP}$ </td><td>FB引脚OVP电压</td><td></td><td></td><td>13.7</td><td></td><td>V</td></tr><tr><td> $t_{OVP}$ </td><td>输出过压屏蔽时间</td><td></td><td></td><td>4</td><td></td><td>Cycles</td></tr><tr><td> $t_{AR\_OFF}$ </td><td>自动重启停止时间</td><td></td><td></td><td>500</td><td></td><td>ms</td></tr><tr><td colspan="7">振荡器</td></tr><tr><td> $f_{S\_MAX}$ </td><td>最大开关频率</td><td></td><td>43</td><td>48</td><td>53</td><td>kHz</td></tr><tr><td> $f_{S\_MIN}$ </td><td>最小开关频率</td><td></td><td>0.6</td><td>1</td><td>1.4</td><td>kHz</td></tr><tr><td> $t_{ON\_MAX}$ </td><td>最大开通时间</td><td></td><td>8</td><td></td><td></td><td>μs</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $I_{LIMIT\_MAX}$ </td><td>最大电流限值(注8)</td><td></td><td>900</td><td>1000</td><td>1100</td><td>mA</td></tr><tr><td> $I_{LIMIT\_MIN}$ </td><td>最小电流限值</td><td></td><td></td><td>200</td><td></td><td>mA</td></tr><tr><td> $t_{LEB}$ </td><td>前沿消隐时间</td><td></td><td></td><td>350</td><td></td><td>ns</td></tr><tr><td colspan="7">功率管</td></tr><tr><td> $R_{DS\_ON}$ </td><td>功率管导通阻抗</td><td></td><td></td><td>6.4</td><td>8.4</td><td>Ω</td></tr><tr><td> $I_{DSS}$ </td><td>功率管关断漏电流</td><td></td><td></td><td>10</td><td></td><td>μA</td></tr><tr><td> $BV_{DSS}$ </td><td>功率管的击穿电压</td><td></td><td>500</td><td></td><td></td><td>V</td></tr><tr><td colspan="7">过热保护</td></tr><tr><td> $T_{OTP}$ </td><td>过温保护阈值</td><td></td><td></td><td>145</td><td></td><td>°C</td></tr><tr><td> $T_{HYST}$ </td><td>过温保护迟滞</td><td></td><td></td><td>40</td><td></td><td>°C</td></tr></table>

## 内部结构框图

![](images/d6d7dde2f96e49d415701308fb4d941004806447fa535702ee163c2df5e0ddc1.jpg)  
图 3. BP85957DL 内部框图

## 功能描述

BP85957DL 是一款高压输入具有恒压输出特性的驱动芯片采用了先进的多模式控制和环路补偿技术，无需外部补偿电路。芯片内部集成 500V 功率开关、高压自供电电路 电流采样电路、电压反馈电路，以及丰富的保护功能，只需要极少的外围器件就可以达到优异的恒压输出特性。开关频率根据电感和负载自适应调整，使电源设计更加灵活。同时，具有较低的待机功耗、良好的输出电压调整率、较低的输出电压纹波和低音频噪声使得 BP85957DL 特别适合于非隔离辅助电源应用。（注 9：以下描述到的参数均为电气参数列表中的典型值，除非特别说明是最大或最小值）

BP85957DL 集成了高压启动与自供电电路。系统上电后，母线电压上升，当母线电压达到最小漏极启动电压 V<sub>DS\_SUP</sub>(40V)时，内部高压启动电路通过DRAIN端对外部FB电容充电。当 FB 电容电压达到芯片启动阈值 11V 时，芯片内部控制电路开始工作。当 FB电容电压降低到欠压保护阈值 5V 时，芯片关断内部MOSFET。芯片正常工作时，在MOSFET关断期间，当FB电容低于6.6V时，自供电电路通过DRAIN端对外部 FB电容供电。

![](images/80675397fff9db3533745ca47be0a5ca6f58e8e22ba55cf977bf8265033c58e2.jpg)  
图 4. 高压启动与 FB欠压保护时序

## 高压供电

## 软启动

BP85957DL 具有软启动功能，在软启动过程中，MOSFET峰值电流(限流点)逐渐增加。由于启动时输出电压一般较低，MOSFET 关断期间输出电压对电感的去磁较少，电感电流进入深度连续模式(CCM)，使得续流二极管的反向恢复电流较大。续流二极管反向恢复电流会通过MOSFET并产生损耗，过大的电流尖峰还可能会导致MOSFET损坏。软启动电路通过控制启动过程中MOSFET峰值电流逐渐增加，可以有效降低二极管的反向恢复电流，从而降低MOSFET电流应力。 由保护电路触发产生的重启动也会经历一次软启动过程，以避免输出电压过冲。软启动过程如图5所示，起始限流值为50%最大限流值，32 个开关周期(T )后增加到 75%最大限流值，再持续 32 个开关周期后结束软启动，限流值变为最大值。

![](images/30031380b3496636402caba77018d47b9f41a832ea4e1934f006681cd19057a6.jpg)  
图 5. 软启动过程

## 电流检测

BP85957DL 内部集成电流采样电路，对 MOSFET 电流逐周期限制，当一个开关周期开始时，控制电路开通 MOSFET，漏极电流上升，当电流上升达到内部限制值时，控制电路关断 MOSFET，直到下一个开关周期开始。内置前沿消隐(Leading Edge Blanking)时间，t 可以避免由于外部电路的容性或二极管的反向恢复导致MOSFET在开通瞬间出现的电流尖峰误触发 MOSFET关断。

## 多模式控制

BP85957DL 采用 PWM/PFM 多模式控制技术，能有效降低系统待机功耗，提高平均效率，并减小系统工作在轻载时的噪声。电感峰值电流控制模式，具有较快的动态响应速度。如图6所示，重载条件下，芯片工作在PFM和PWM混合模式，MOSFET 限流点（电感峰值电流）和开关频率随负载增加而升高，最高分别为I<sub>LIMIT\_MAX</sub>和f<sub>S\_MAX</sub> 。随着负载减小，开关频率降低，达到22kHz后芯片进入PWM工作模式。PWM模式下开关频率保持22kHz不变，MOSFET限流点随负载减小而降低，随着负载的继续减小， 芯片进入 PFM 工作模式。MOSFET 限流点保持 I 不变，开关频率降低，直到空载条件下，开关频率降低到最小值 f 。轻载和空载条件下，较小的电感峰值电流在磁芯中产生的磁通密度也相应减小，因此能有效抑制音频噪声。

![](images/34385e4727578a36cf83c088cf374576d5e20b49592983671fa62bd0ec4d5b7e.jpg)  
图 6. 控制模式

## 自动重启

当外部故障（如过压、过载）触发相应的保护，控制电路关断 MOSFET，系统停止工作。BP85957DL 内部的自动重启电路等待 t<sub>AR\_OFF</sub> (500ms)时间后重新启动系统，如果启动后故障没有消除，则重新触发相应的保护。每次重启都会经历

## 过载保护/输出过压保护

P85957DL 内部控制电路通过 FB 引脚检测输过载故障和输出过压故障。如图 7 所示，系统上电启动后，如果 FB 电压<sub>P</sub> (8.6V)且保持 2048 个开关周期，则触发过载保护(OLP)并进入自动重启程序。当 FB电压连续4 个开关周期高于 V (13.7V)时，触发输出过压保护，芯片进入自动重启程序。

![](images/ac57b9f8254570a1745ac63fecba55b63e47586cdd6e635beaed0d76045fdc59.jpg)  
图 7 过载保护、输出过压保护工作模式

## 过温保护

BP85957DL 内置了过温保护电路。当结温达到过温保护阈值 ${ \mathsf { T } } _ { \mathsf { O T P } } ( 1 4 5 ^ { \circ } { \mathsf { C } } )$ 时，芯片会停止工作，MOSFET关断，直到结温下降到 T -T 时，芯片重新启动。T (40℃)为过温保护迟滞，较大的温度迟滞有利于把系统整体温度控制在较低水平。

## 应用指南

输出电感计算（Buck拓扑）

BP85957DL 可工作于 CCM 和 DCM 工作模式，取决于额定输出电流和输出电感感量。当 Buck 变换器输出电流$\mathsf { l o u r } { > } 0 . 5 ^ { \star } \mathsf { l } _ { \mathsf { L I M I T \_ M A X } }$ 时，电感需要工作于 CCM 才能满足负载电流要求；当 $\mathsf { l o u r } { < } 0 . 5 ^ { \star } | _ { \mathsf { L I M I T \_ M A X } }$ 时，DCM 和 CCM 都可以满足输出负载电流要求，工作模式取决于电感的感量大小。电感感量越大，带载能力越强，因为需要更多圈数，体积也会更大，成本相对高，动态响应较慢，CCM 下开关损耗大。小感量电感可以减小尺寸、降低价格以及改善系统动态响应，DCM下开关损耗小，但同时会增大电感的峰值电流和输出纹波电压，峰值带载能力也较小。通常，在满足最大输出电流的前提下，尽量选取小电感量。实际选择电感时，通常根据输入输出规格，计算出能满足输出电流的最小电感值，然后从电感供应商的选型手册中选取大一档的标准值电感。因此，$\mathsf { l o u r \ t } > 0 . 5 ^ { \star } | _ { \mathsf { L I M I T \_ M A X } }$ 时 按 照 CCM 计 算 电 感 量 ， I<sub>OUT</sub>$< 0 . 5 ^ { \star } \vert _ { \mathsf { L I M I T \_ M A X } }$ 时按照 DCM计算电感量。

CCM模式下，如图8所示，根据输入输出电压、系统开关频率、满载输出电流以及芯片最大限流值计算最小电感值：

$$
L _ {M I N} = \frac {(V _ {O U T} + V _ {D i o d e}) * (V _ {I N} - V _ {D S} - V _ {O U T})}{(V _ {I N} - V _ {D S} + V _ {D i o d e}) * f _ {S} * \Delta I _ {L}}
$$

其中， $V _ { \parallel N }$ 输入直流母线电压

$\mathsf { V } _ { \mathsf { O U T } }$ 输出电压

$\mathsf { I o u r }$ 输出电流

$V _ { \sf D i o d e }$ 续流二极管压降

$\mathsf { V } _ { \mathsf { D S } }$ 开关管 t<sub>ON</sub>时间内平均压降

$\mathsf { f } _ { \mathsf { S } }$ 开关频率

t<sub>ON</sub> 开关管开通时间

t<sub>OFF</sub> 开关管关断时间

$\mathsf { I } _ { \mathsf { L I M I T \_ M A X } }$ 芯片最大限流值

$$
\begin{array}{c} \Delta I _ {L} = 2 * (I _ {L I M I T \_ M A X} - I _ {O U T}) \\ V _ {D S} = I _ {O U T} * R _ {d s (O N)} \end{array}
$$

![](images/9156f81ca474acb95bf5e348d1614140e33e6c95facf14391e68c41e1639d851.jpg)  
图 8. CCM 模式下的电感电流

电感电流有效值为：

$$
I _ {R M S} = \sqrt {I _ {L I M I T \_ M A X} ^ {2} - I _ {L I M I T _ {M A X}} * \Delta I _ {L} + \frac {\Delta I _ {L} ^ {2}}{3}}
$$

DCM模式下(如图9所示)，根据输入/输出电压、系统开关频率、满载输出电流以及芯片最大限流值计算最小电感值：

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

![](images/5fe24d45aa6894d240c05eb8dd3588311ae707170eaad703f0a7ec6fd9bf96da.jpg)  
图 9. DCM 模式下的电感电流

一般来说， $V _ { \mathsf { I N } }$ 是一个范围，通常选择最大输入直流母线电压代入计算公式，或者也可以分别计算最高和最低母线电压对应的电感量，最后取两者中较大者。上述两个电感表达式计算出来的都是输出额定电流所需的最小电感量，设计中需要考虑实际电感的精度，通常取计算值的 1.1 倍以保证批量生产时能满足最低电感量的要求。表达式中 $\mathsf { I } _ { \mathsf { L I M I T } } \mathsf { \_ m A X }$ 应该取芯片最大限流值的下限。

为了降低待机功耗，减小输出端需要的假负载，BP85957DL通过多模式控制降低了空载下的限流点和开关频率。为了使空载时电感电流可控，电感量需要足够大以至于在 MOSFET最小导通时间内电流峰值不超过芯片最低限流值。即

$$
L \geq \frac {t _ {L E B} * (V _ {I N \_ M A X} - V _ {O U T})}{I _ {L I M I T \_ M I N}}
$$

其中，t<sub>LEB</sub> 为前沿消隐时间， I<sub>LIMIT\_MIN</sub>为芯片的最低限流值。如图10所示，电感量小于临界值会导致t<sub>LEB</sub>时刻电感峰值电流大于芯片控制的限流点，平均输出电流过大，需要较大的假负载给电感电流提供通路，从而稳定输出电压。

![](images/39508e9da1df533fbe04f04c5d1ae6e9e85bf2ffc1b99aff95db8ec46a4ad767.jpg)  
图 10. 空载下的电感电流

因此，通常最终的电感值需要同时满足以上条件。待机要求不高的应用只需要满足额定输出电流的最小电感即可。确定电感值后需要确认电感的有效值电流是否满足上述计算值，同时还需要保证电感磁芯在芯片最大限流值 I<sub>LIMIT\_MAX</sub> 不饱和，供应商的选型手册中一般会给出电感的有效值电流和饱和电流。

## 输入电容的选择

输入滤波电容对工频电压纹波、传导 EMI、以及电源抵抗Surge 的能力都起到关键的作用。电容量的选择要保证直流母线电压不能过低(通常不要低于 70V)，因此电容量取决于输出功率和电源效率。 全电压 85\~265VAC 输入时，如果使用全波整流，一般取≥3μF/W；对于半波整流，电容量一般取 ${ \geqslant } 6 \mu \mathsf { F } / W _ { \circ }$ 。 单高压 176\~265VAC 输入时，在满足 EMI 和Surge 的前提下容量可以减半。

## 续流二极管的选择

续流二极管建议使用t ≤35ns的超快恢复二极管，不能使用普通快恢复二极管或者慢管。续流二极管需要能承受雷击条件下的输入电压，因此一般选取 600V 或以上的耐压，额定电流一般选取输出电流的 3\~4倍。建议选择 ES2J。

## 反馈二极管的选择

在 MOSFET 关断时，反馈二极管导通向 FB 引脚反馈输出电压信息。在 MOSFET 导通时，反馈二极管截止防止电流从

GND 引脚流入芯片。反馈二极管建议使用 600V 或以上耐压的超快恢复二极管，例如 ES1J等。

## 输出电容的选择

输出电容的作用是滤除电感电流中的交流成分，提供稳定的直流电压给负载，一般根据输出电压纹波要求来选取合适的电容。当输出电流恒定时，输出纹波主要由输出电容的 ESR以及容量决定。

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
\begin{array}{c} \Delta V _ {E S R} = \Delta I _ {L} * E S R (\text {CCM}) \\ \Delta V _ {E S R} = I _ {L I M I T \_ M A X} * E S R (\text {DCM}) \end{array}
$$

## 假负载计算

为了维持较好的动态响应，芯片的最低开关频率设置为1kHz。当输出空载时，需要一个假负载为电感电流提供回路，从而稳定输出电压，电感的平均电流即为假负载的电流。

$$
I _ {A V G} = \frac {1}{2} * I _ {L} * (T _ {O N} + T _ {O F F}) * f _ {S \_ M I N}
$$

其中， $\mathsf { I } _ { \mathsf { L } }$ 为空载时电感峰值电流：

$$
I _ {L} = \frac {V _ {I N \_ M A X}}{L} * t _ {D e l a y} + I _ {L I M I T \_ M I N}
$$

I<sub>LIMIT\_MIN</sub>为芯片的最低限流值，f<sub>S\_MIN</sub>为芯片最低频率，T<sub>ON</sub>、${ \sf T } _ { \sf 0 F F }$ 分别为空载时 MOSFET开通和关断时间：

$$
\begin{array}{r} T _ {O N} = \frac {L * I _ {L}}{V _ {I N \_ M A X}} \\ T _ {O F F} = \frac {L * I _ {L}}{V _ {O U T} + V _ {D i o d e}} \\ R _ {L} = \frac {V _ {O U T}}{I _ {A V G}} \end{array}
$$

以上计算未考虑芯片自供电电流通过假负载，实际应用的假负载需要在计算值的基础上适当增加。

Buck-Boost 应用设计

BP85957DL 也可以应用于 Buck-Boost 拓扑中，实现负电压输出，芯片的基本功能与 Buck 拓扑类似。由于电感只在MOSFET 关断期间对输出端提供能量，相同的输出功率需要较大感量的电感。

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

$V _ { \parallel N }$ 输入直流母线电压

$\mathsf { V } _ { \mathsf { O U T } }$ 输出电压

I<sub>OUT</sub> 输出电流

V<sub>Diode</sub> 续流二极管压降

$\mathsf { V } _ { \mathsf { D S } }$ 开关管 $\tan$ 时间内平均压降

I<sub>LIMIT\_MAX</sub> 芯片最大限流值

电感电流有效值为：

$$
I _ {R M S} = \sqrt {I _ {L I M I T \_ M A X} ^ {2} - I _ {L I M I T _ {M A X}} * \Delta I _ {L} + \frac {\Delta I _ {L} ^ {2}}{3}}
$$

其中

$$
\Delta I _ {L} = 2 * (I _ {L I M I T _ {M A X}} - \frac {I _ {O U T}}{V _ {I N}} ^ {\prime} * (V _ {I N} ^ {\prime} + V _ {O U T} ^ {\prime}))
$$

DCM 模式下，通过以下表达式计算最小电感值：

$$
L _ {M I N} = \frac {2 * (V _ {O U T} + V _ {D i o d e}) * I _ {O U T}}{I _ {L I M I T \_ M A X} ^ {2} * f _ {S}}
$$

电感电流有效值为：

$$
I _ {R M S} = I _ {L I M I T \_ M A X} * \sqrt {\frac {t _ {O N} + t _ {O F F}}{3} * f _ {S}}
$$

空载条件和保证正常采样对最小感量的限制与 Buck 拓扑基本一致。

由于电感只在MOSFET关断期间对输出端提供能量，因此输出滤波电容纹波电流比 Buck 拓扑大，电压纹波主要由电容的 ESR 产生：

$$
\Delta V _ {E S R} = I _ {L I M I T \_ M A X} * E S R (\text {适应于DCM / CCM})
$$

## PCB Layout 指南

在设计 BP85957DL 应用 PCB时，需要遵循以下建议：

1) 为了减小动点的面积，反馈二极管应尽量靠近芯片。

2) GND 能起到散热作用，可以在 PCB 上铺铜散热，但是GND 为电压动点（相对母线地），在满足散热的条件下铺铜面积应尽量小以减少噪声辐射。同时 IC 远离交流输入端，以避免容性耦合产生 EMI 问题。

3) DRAIN 是内部 MOSFET 的漏极，接输入直流母线，为电压静点，可以铺铜散热。同时建议 DRAIN 与其它引

脚的走线距离大于 2mm。

4) 尽量减小功率环路面积以避免EMI干扰并提高系统可靠性。以BUCK 为例，建议缩小输入电容、内置MOSFET、电感、输出电容组成的励磁回路，以及电感、输出电容、续流二极管组成的续流回路面积。反馈回路面积与走线长度也应减小以提高可靠性。

5) 为了使芯片和动点远离交流输入端，可以将输入电容放置在芯片和交流输入之间。

6) FB电容尽量靠近芯片。

## 封装信息

SOP-8 封装外形尺寸  
![](images/4ea110face94ad85757fbcd1a2d4c29fbb5fa9696c8b14bcb9ddb061a53a1ebf.jpg)

![](images/b4842e0f2459d5e24743971a9af471ec8b88fb529d0f0fddf1c0a8605f0ee56e.jpg)

![](images/cd45822c4cc19e85e03926326ddfd50f15233d35387dda48184d48dd6c2291c9.jpg)  
SECTION B-B

<table><tr><td rowspan="2">SYMBOL</td><td colspan="3">MILLIMETER</td></tr><tr><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A</td><td>1.30</td><td>—</td><td>1.80</td></tr><tr><td>A1</td><td>0.05</td><td>—</td><td>0.25</td></tr><tr><td>A2</td><td>1.25</td><td>1.40</td><td>1.65</td></tr><tr><td>b</td><td>0.33</td><td>—</td><td>0.51</td></tr><tr><td>c</td><td>0.17</td><td>—</td><td>0.25</td></tr><tr><td>D</td><td>4.70</td><td>4.90</td><td>5.10</td></tr><tr><td>E</td><td>5.80</td><td>6.00</td><td>6.30</td></tr><tr><td>E1</td><td>3.70</td><td>3.90</td><td>4.10</td></tr><tr><td>e</td><td colspan="3">1.27BSC</td></tr><tr><td>L</td><td>0.40</td><td>—</td><td>1.00</td></tr></table>

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev.1.0</td><td>2024/07</td><td>首次发布</td></tr><tr><td>Rev.1.1</td><td>2025/09</td><td>修改电气参数</td></tr></table>

![](images/9278d33c4a7e159dfdc8e0c5615fbcd5aeb19396adfc30ede466e6f6a13fce16.jpg)

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。

## 电子器件报废说明

该产品在生命周期结束后，由客户按照一般电子产品的报废流程进行处理。