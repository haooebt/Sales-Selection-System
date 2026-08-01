SOP-8 封装

## BP85928D高集成度开关电源驱动芯片

## 概述

BP85928D是一款高性能、高集成度、低待机功耗的开关电源驱动芯片，适用于全电压85\~265VAC 输入的 Buck、Buck-Boost 等变换器拓扑应用。

BP85928D 内部集成了 650V高压MOSFET、高压启动和自供电电路、电流采样电路以及电压反馈电路，采用先进的控制技术，无需环路补偿即可实现优异的恒压输出特性，极大地减少了外围器件数量，节省了系统成本和体积，同时提高了可靠性。

BP85928D 芯片采用多模式控制技术，能有效降低系统待机功耗，提高效率和改善动态性能，并减小系统工作在轻载时的音频噪声。

BP85928D提供了丰富的保护功能，包括输出短路保护、过压保护、输出过载保护、逐周期限流、过温保护等，使系统更加安全可靠。

BP85928D 采用 SOP-8 封装。

![](images/b39438103efe610f0c8bbc9054e5170288e78f2fa09c8ecd5ad6d6bd04526fee.jpg)

## 特点

内部集成 650V 高压 MOSFET

集成高压启动和自供电电路

集成输出电压采样

固定 5V输出

优异的动态响应速度，输出电压纹波小

降低音频噪声的降幅调制技术

自适应开关频率，最高38kHz

改善 EMI 性能的频率调制技术

内置软启动功能

保护功能

输出短路保护 (SCP)

输出过压保护(OVP)

输出过载保护(OLP)

逐周期限流(Cycle-by-Cycle

过温保护(OTP)

## 应用领域

小家电辅助电源

电机驱动辅助电源

IOT/智能家居/智能照明

## 典型应用

![](images/7deda4d404e6331c5fce4983e80988083c9221b0a7762e08dac70a53a719d0b2.jpg)  
图 1. BP85928D 典型 Buck 应用电路

![](images/d760a1e692e7817a9da85581aadd14efc08d447bfcc2e69821f5cc3dd8d83cc1.jpg)  
图 3. 管脚封装图

![](images/d52a40753694fe66db70f89dac7cf08da4563da6a873945d054e6c76b3e5c809.jpg)  
图 2. BP85928D 典型 Buck-boost 应用电路

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP85928D</td><td>SOP-8</td><td>卷盘4,000只/盘</td><td>BP85928XXXXYYZZZZWWD</td></tr></table>

## 管脚封装

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1、4</td><td>NC</td><td>无连接,悬空</td></tr><tr><td>2</td><td>GND</td><td>芯片地,内部 MOSFET 源极</td></tr><tr><td>3</td><td>FB</td><td>输出电压反馈端</td></tr><tr><td>5、6、7、8</td><td>DRAIN</td><td>芯片内部高压 MOSFET 漏极,此引脚也向芯片内部提供自供电电流</td></tr></table>

## 输出规格表

<table><tr><td>型号</td><td>输入电压</td><td>稳态功率(注1)</td><td>峰值功率(注2)</td></tr><tr><td rowspan="2">BP85928D</td><td>175~265Vac</td><td>2.5W(5V/500mA)</td><td>3.5W(5V/700mA)</td></tr><tr><td>85~265Vac</td><td>2.25W(5V/450mA)</td><td>3W(5V/600mA)</td></tr></table>

注1：稳态功率在半封闭式75℃环境下测试(Buck/Buck-boost应用)，持续时间大于2小时。  
注2：峰值功率在半封闭式75℃环境下测试(Buck/Buck-boost应用)，持续时间大于1分钟。

## 极限参数(注3)（无特别说明情况下， ${ \sf T } _ { \sf A } { = } 2 5 ^ { \circ } { \sf C } )$

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td> $V_{DRAIN}$ </td><td>内部高压 MOSFET 漏极到源极电压</td><td>-0.3~650</td><td>V</td></tr><tr><td> $I_{DS\_MAX}$ </td><td>内部高压 MOSFET 最大漏极电流</td><td>TBD</td><td>mA</td></tr><tr><td> $V_{FB}$ </td><td>FB 引脚电压</td><td>-0.3~30</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注 4)</td><td>0.97</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>结到环境的热阻(注 5)</td><td>145</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40 to 150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55 to 150</td><td>°C</td></tr><tr><td>ESD</td><td>人体模型 ESD(注 6)</td><td>2</td><td>kV</td></tr></table>

注3：极限参数是指超出该工作范围，芯片有可能损坏。除非特殊说明，电压值均参考芯片GND。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。  
注4：温度升高最大功耗一定会减小，这也是由TJMAX，θJA,和环境温度TA所决定的。最大允许功耗为 $P _ { D M A X } = ( T _ { J M A X } - T _ { A } ) / \theta _ { J A }$ 或是极限范围给出的数字中比较低的那个值。

注 5：1 平方英寸双层 PCB 板，按照 JEDEC 标准测试。

注6：按照JEDEC标准测试，100pF 电容通过1.5KQ电阻放电。

电气参数(注7)（无特别说明情况下，TA=25°C）

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">自供电</td></tr><tr><td> $V_{DS\_SUP}$ </td><td>最小漏极启动电压</td><td></td><td></td><td>40</td><td></td><td>V</td></tr><tr><td> $I_{CC}$ </td><td>芯片工作电流</td><td></td><td></td><td>80</td><td></td><td>uA</td></tr><tr><td> $I_Q$ </td><td>芯片静态电流</td><td></td><td></td><td>50</td><td></td><td>uA</td></tr><tr><td> $V_{CC\_ON}$ </td><td>VCC启动阈值电压</td><td>VCC电压上升至IC开启</td><td></td><td>11.5</td><td></td><td>V</td></tr><tr><td> $V_{CC\_UVLO}$ </td><td>VCC欠压保护开启电压</td><td>VCC电压下降至IC关闭</td><td></td><td>5</td><td></td><td>V</td></tr><tr><td colspan="7">输出电压反馈</td></tr><tr><td> $V_{FB\_REF}$ </td><td>FB引脚调制电压</td><td></td><td></td><td>5.4</td><td></td><td>V</td></tr><tr><td> $V_{FB\_OLP}$ </td><td>FB引脚过载保护电压</td><td></td><td></td><td>3.5</td><td></td><td>V</td></tr><tr><td> $t_{OLP}$ </td><td>输出过载屏蔽时间</td><td></td><td></td><td>2048</td><td></td><td>Cycles</td></tr><tr><td> $V_{FB\_SCP}$ </td><td>FB引脚短路保护电压</td><td></td><td></td><td>1.4</td><td></td><td>V</td></tr><tr><td> $t_{SCP}$ </td><td>输出短路屏蔽时间</td><td></td><td></td><td>512</td><td></td><td>cycles</td></tr><tr><td> $V_{FB\_OVP}$ </td><td>FB引脚OVP电压</td><td></td><td></td><td>6.2</td><td></td><td>V</td></tr><tr><td> $t_{OVP}$ </td><td>输出过压屏蔽时间</td><td></td><td></td><td>4</td><td></td><td>Cycles</td></tr><tr><td> $t_{AR\_OFF}$ </td><td>自动重启停止时间</td><td></td><td></td><td>500</td><td></td><td>ms</td></tr><tr><td colspan="7">振荡器</td></tr><tr><td> $f_{S\_MAX}$ </td><td>最大开关频率</td><td></td><td></td><td>38</td><td></td><td>kHz</td></tr><tr><td> $f_{S\_MIN}$ </td><td>最小开关频率</td><td></td><td></td><td>1</td><td></td><td>kHz</td></tr><tr><td> $t_{ON\_MAX}$ </td><td>最大开通时间</td><td></td><td></td><td>5</td><td></td><td>us</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $I_{LIMIT\_MAX}$ </td><td>最大电流限值</td><td></td><td></td><td>1050</td><td></td><td>mA</td></tr><tr><td> $I_{LIMIT\_MIN}$ </td><td>最小电流限值</td><td></td><td></td><td>350</td><td></td><td>mA</td></tr><tr><td> $t_{LEB}$ </td><td>前沿消隐时间</td><td></td><td></td><td>400</td><td></td><td>nS</td></tr><tr><td colspan="7">功率管</td></tr><tr><td> $R_{DS\_ON}$ </td><td>功率管导通阻抗</td><td></td><td></td><td>10</td><td></td><td>Ω</td></tr><tr><td> $I_{DSS}$ </td><td>功率管关断漏电流</td><td></td><td></td><td>200</td><td></td><td>uA</td></tr><tr><td> $BV_{DSS}$ </td><td>功率管的击穿电压</td><td></td><td>650</td><td></td><td></td><td>V</td></tr><tr><td colspan="7">过热保护</td></tr><tr><td> $T_{OTP}$ </td><td>过温保护阈值</td><td></td><td></td><td>145</td><td></td><td>°C</td></tr><tr><td> $T_{HYST}$ </td><td>过温保护迟滞</td><td></td><td></td><td>40</td><td></td><td>°C</td></tr></table>

注7：电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。最小值和最大值由测试保证，典型值由设计、测试或统计分析保证。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能

## 内部结构框图

![](images/1bb11687089de72dd35770f2ac1d2bab5f19822a5d42da5a4cec93bcf69d5a3a.jpg)  
图 4. BP85928D 内部框图

## 功能描述

BP85928D 是一款高压输入具有多个恒压输出特性的驱动芯片，采用了先进的多模式控制和环路补偿技术，无需外部补偿电路。芯片内部集成650V功率开关、高压自供电电路、电流采样电路、电压反馈电路，以及丰富的保护功能，只需要极少的外围器件就可以达到优异的恒压输出特性。开关频率根据电感和负载自适应调整，使电源设计更加灵活。同时，具有较低的待机功耗、良好的输出电压调整率、较低的输出电压纹波和低音频噪声使得BP85928D特别适合于非隔离辅助电源应用。(注8：以下描述到的参数均为电气参数列表中的典型值，除非特别说明是最大或最小值

## 高压供电

BP85928D集成了高压启动与自供电电路。系统上电后，母线电压上升，当母线电压达到最小漏极启动电压Vps\_SUp(40V)时，内部高压启动电路通过DRAIN端对内部VCC电容充电。当内置VCC电容电压达到芯片启动阈值11.5V时，芯片内部控制电路开始工作。当VCC 电容电压降低到欠压保护阈值5V时，芯片关断内部MOSFFT。芯片正常工作时，在MOSFET 关断期间，自供电电路通过 DRAIN 端对内置 VCC电容供电。

![](images/62ad1d23257d0d4b0edfa8e3a4b16b613bebf21adf24936dfcfddafca4ceb91b.jpg)  
图 5. 高压启动与 VCC 欠压保护时序

## 软启动

BP85928D 具有软启动功能，在软启动过程中，MOSFET峰值电流(限流点)逐渐增加。由于启动时输出电压一般较低MOSEET 关断期间输出电压对电感的去磁较少，电感电流进入深度连续模式(CCM)，使得续流二极管的反向恢复电流较大。续流二极管反向恢复电流会通过MOSFET并产生损耗，过大的电流尖峰还可能会导致MOSFET损坏。软启动电路通过控制启动过程中MOSEET峰值电流逐渐增加，可以有效降低二极管的反向恢复电流，从而降低MOSFET电流应力。由保护电路触发产生的重启动也会经历一次软启动过程，以避免输出电压过冲。软启动过程如图6所示，起始限流值为50%最大限流值，32个开关周期(Ts)后增加到75%最大限流值，再持续32个开关周期后结束软启动，限流值变为最大值。

![](images/f4bac6351b6af8ff231fb8c0c628a5bc7b80f50a94ebdae1eeea8bdb56deb679.jpg)  
图 6. 软启动过程

## 输出电压采样

BP85928D 通过 FB 引脚采样输出电压，如图7所示，FB 电压经内部电阻分压后与内部基准电压进行运算实现恒压控制。输出电压采样仅在续流状态3us时进行，电感设计时建议留足余量，以防止无法正确采样输出电压导致工作异常。

![](images/2d59cc9a1846525ddcd95cca3f2a7a90dfe24ecbc4491b2400eb4e7c5669d529.jpg)  
图 7. 输出电压采样示意图

## 多模式控制

BP85928D 采用 PWM/PEM多模式控制技术，能有效降低系统待机功耗，提高平均效率，并减小系统工作在轻载时的噪声。电感峰值电流控制模式， 具有较快的动态响应速度。如图8所示，重载条件下，芯片工作在PFM模式，MOSFET限流点（电感峰值电流）保持最大值ILIMIT\_MAX不变，开关频率随负载增加而升高，最高为fs\_MAx(38kHz)。随着负载减小，开关频率降低，达到 22kHz 后芯片进入 PWM 工作模式。PWM 模式下开关频率保持 22kHz 不变，MOSEET 限流点随负载减小而降低，随着负载的继续减小，芯片进入PEM工作模式。MOSFET 限流点保持 ILIMIT MIN 不变，开关频率降低，直到空载条件下，开关频率降低到最小值fs MIN(1kHz)。轻载和空载条件下，较小的电感峰值电流在磁芯中产生的磁通密度也相应减小，因此能有效抑制音频噪声。

![](images/6dd3b790f13b7685e17ea57aa478f70b3d1dd88dc61006477062604f5eed2b43.jpg)  
图 8. 控制模式

## 电流检测

BP85928D 内部集成电流采样电路，无需外置电流采样电阻，对 MOSFET电流逐周期限制。当-电路开通 MOSFET，漏极电流上升，当电流上升达到内部限制值时，控制电路关断MOSFET，直到下一个开关周期开始。内置前沿消隐(Leading Edge Blanking)时间，tLEB 可以避免由于外部电路的容性或二极管的反向恢复导致MOSFET在开通瞬间出现的电流尖峰误触发MOSFET关断。

## 自动重启

当外部故障（如过压、过载）触发相应的保护，控制电路关断 MOSFET，系统停止工作。BP85928D 内部的自动重启电路等待tAR\_0FF(500mS)时间后重新启动系统，如果启动后故障没有消除，则重新触发相应的保护。每次重启都会经历软启动过程。

## 短路保护/过载保护(SCP/OLP)

BP85928D 内部控制电路通过 FB 引脚检测输过载故障和输出过压故障。如图9所示，系统上电启动后，如果FB电压低于 VFB Sc(1.4V)且保持 512 个开关周期，则触发短路保护(SCP)并进入自动重启程序。如果芯片检测到FB 电压低于VFB\_OLP (3.5V)且持续2048个开关周期，则触发过载保护(OLP)并进入自动重启程序。

![](images/61b07874e2a6aa8f1fe4eb6d9e875acec0f6fb2ac423b973e6d8b84fd2fb9731.jpg)  
图9短路保护、过载保护工作模式

## 输出过压保护

BP85928D内部控制电路通过FB引脚检测输出过压故障。当FB 电压连续4 个开关周期高于VFB ovp(6.2V)时，触发输出过压保护，芯片进入自动重启程序。

## 过温保护

BP85928D内置了过温保护电路。当结温达到过温保护阈值ToTP(145C)时，芯片会停止工作，MOSFET关断，直到结温下降到ToTP-THYST时，芯片重新启动。THysT(40C)为过温保护迟滞，较大的温度迟滞有利于把系统整体温度控制在较低水平。

## 应用指南

输出电感计算（Buck 拓扑）

BP85928D 可工作于 CCM 和 DCM 工作模式，取决干额定输出电流和输出电感感量。当Buck变换器输出电流$\mathsf { l o u r } { > } 0 . 5 ^ { \star } \mathsf { l } _ { \mathsf { L I M I T \_ M A X } }$ 时，电感需要工作于CCM才能满足负载电流要求；当 $\mathsf { l } _ { 0 \mathsf { U T } } { < } 0 . 5 ^ { \star } \mathsf { l } _ { \mathsf { L I M I T \_ M A X } }$ 时，DCM 和 CCM 都可以满足输出负载电流要求，工作模式取决于电感的感量大小。电感感量越大，带载能力越强，因为需要更多圈数，体积也会更大，成本相对高，动态响应较慢，CCM下开关损耗大。小感量电感可以减小尺寸、降低价格以及改善系统动态响应，CCM下开关损耗小，但同时会增大电感的峰值电流和输出纹波电压，峰值带载能力也较小。通常，在满足最大输出电流的前提下，尽量选取小电感量。实际选择电感时，通常根据输入输出规格，计算出能满足输出电流的最小电感值，然后从电感供应商的选型手册中选取大一档的标准值电感。因此，$1 _ { \mathsf { O U T } } > 0 . 5 ^ { \star } | _ { \mathsf { L I M } \mid \mathsf { T } \_ { \mathsf { M A X } } }$ 时按照CCM计算电感量，IouT<0.5\*ILIMIT MAx时按照 DCM 计算电感量。

CCM模式下，如图 10所示，根据输入输出电压、系统开关频率、满载输出电流以及芯片最大限流值计算最小电感值

$$
L _ {M I N} = \frac {(V _ {O U T} + V _ {D i o d e}) * (V _ {I N} - V _ {D S} - V _ {O U T})}{(V _ {I N} - V _ {D S} + V _ {D i o d e}) * f _ {S} * \Delta I _ {L}}
$$

其中， $\mathsf { V } _ { \mathsf { I N } }$ 输入直流母线电压

$\mathsf { V o u r }$ 输出电压

louT输出电流

$V _ { \mathrm { D i o d e } }$ 续流二极管压降

$\mathsf { V } _ { \mathsf { D S } }$ 开关管 ton 时间内平均压降

fs 开关频率

ton开关管开通时间

toFF开关管关断时间

$\mathsf { I } _ { \mathsf { L I M I T } } \mathsf { \Gamma } _ { \mathrm { \mathfrak { M A X } } }$ 芯片最大限流值

$$
\begin{array}{c} \Delta I _ {L} = 2 * (I _ {L I M I T \_ M A X} - I _ {O U T}) \\ V _ {D S} = I _ {O U T} * R _ {d s (O N)} \end{array}
$$

![](images/a2dec0d385bcc90bc59e3b2af399830437adf79dd9812112e5950f4e9a3e2ace.jpg)  
图 10.CCM 模式下的电感电流

电感电流有效值为：

$$
I _ {R M S} = \sqrt {I _ {L I M I T \_ M A X} ^ {2} - I _ {L I M I T _ {M A X}} * \Delta I _ {L} + \frac {\Delta I _ {L} ^ {2}}{3}}
$$

DCM 模式下(如图 11 所示)，根据输入/输出电压、系统开关频率、满载输出电流以及芯片最大限流值计算最小电感值：

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

![](images/c2a1460499fb7a846bdf7ea6016f32b8ecd9396e059d13fa6e852645b26e732c.jpg)  
图11.DCM 模式下的电感电流

一般来说， $V _ { \mathsf { I N } }$ 是一个范围，通常选择最大输入直流母线电压代入计算公式，或者也可以分别计算最高和最低母线电压对应的电感量，最后取两者中较大者。上述两个电感表达式计算出来的都是输出额定电流所需的最小电感量，设计中需要考虑实际电感的精度，通常取计算值的1.1 倍以保证批量生产时能满足最低电感量的要求。表达式中JuMIT MAx 应该取芯片最大限流值的下限。

为了降低待机功耗，减小输出端需要的假负载，BP85928D通过多模式控制降低了空载下的限流点和开关频率。为了使空载时电感电流可控，电感量需要足够大以至于在MOSFET最小导通时间内电流峰值不超过芯片最低限流值。即

$$
L \geq \frac {t _ {L E B} * (V _ {I N \_ M A X} - V _ {O U T})}{I _ {L I M I T \_ M I N}}
$$

其中，tLEB为前沿消隐时间，ILIMITMIN为芯片的最低限流值。如图12所示，电感量小于临界值会导致tLEB时刻电感峰值电流大于芯片控制的限流点，平均输出电流过大，需要较大的假负载给电感电流提供通路，从而稳定输出电压。

![](images/4e8c4607552184e36e2979cb2a8fbb5c15a843c549eee9bcf0c87e0badd50b7d.jpg)  
图 12. 空载下的电感电流

此外，所选择的电感需要保证芯片工作在最低限流点时的续流时间大于7us，以保证芯片可以正常反馈采样，即

$$
L \geq \frac {V _ {O U T} * 7 u s}{I _ {L I M I T \_ M I N}}
$$

因此，通常最终的电感值需要同时满足以上三个条件。待机要求不高的应用只需要满足额定输出电流的最小电感即可。确定电感值后需要确认电感的有效值电流是否满足上述计算值，同时还需要保证电感磁芯在芯片最大限流值ILIMIT\_MAX不饱和，供应商的选型手册中一般会给出电感的有效值电流和饱和电流。

## 输入电容的选择

输入滤波电容对工频电压纹波、传导EMI、以及电源抵抗Surge的能力都起到关键的作用。电容量的选择要保证直流母线电压不能过低(通常不要低于 70V)，因此电容量取决于输出功率和电源效率。全电压85\~265VAC 输入时，如果使用全波整流，一般取≥3uF/W；对于半波整流，电容量一般取≥6uF/W。单高压176\~265VAC 输入时，在满足 EMI 和Surge的前提下容量可以减半。

## 输出电容的选择

输出电容的作用是滤除电感电流中的交流成分，提供稳定的直流电压给负载，一般根据输出电压纹波要求来选取合适的电容。当输出电流恒定时，输出纹波主要由输出电容的ESR以及容量决定。

$$
\Delta V _ {O U T} = \Delta V _ {E S R} + \Delta V _ {C}
$$

CCM模式下，由容性产生的纹波电压为：

$$
\Delta V _ {C} = \frac {\Delta I _ {L}}{8 * C _ {O U T} * f _ {S}}
$$

DCM模式下，由容性产生的纹波电压为：

$$
\Delta V _ {C} = \frac {I _ {O U T} * (I _ {L I M I T \_ M A X} - I _ {O U T}) ^ {2}}{C _ {O U T} * f _ {S} * I _ {L I M I T \_ M A X} ^ {2}}
$$

实际应用中，为了得到较小的ESR，电容量相对比较大，由容量产生的输出电压纹波很小，几乎可以忽略，因此电压纹波主要由电容的 ESR产生：

$$
\begin{array}{c} \Delta V _ {E S R} = \Delta I _ {L} * E S R (\text {CCM}) \\ \Delta V _ {E S R} = I _ {L I M I T \_ M A X} * E S R (\text {DCM}) \end{array}
$$

## 假负载计算

为了维持较好的动态响应，芯片的最低开关频率设置为1.2kHz。当输出空载时，需要一个假负载为电感电流提供回路，从而稳定输出电压，电感的平均电流即为假负载的电流。

$$
I _ {A V G} = \frac {1}{2} * I _ {L} * (T _ {O N} + T _ {O F F}) * f _ {S \_ M I N}
$$

其中，为空载时电感峰值电流：

$$
I _ {L} = \frac {V _ {I N \_ M A X}}{L} * t _ {D e l a y} + I _ {L I M I T \_ M I N}
$$

ILMIT MIN为芯片的最低限流值， $\mathsf { f } _ { \mathsf { S \_ M I N } }$ 为芯片最低频率，ToN、$\mathsf { T } _ { \mathsf { O F F } }$ 分别为空载时MOSFET开通和关断时间：

$$
\begin{array}{r} T _ {O N} = \frac {L * I _ {L}}{V _ {I N \_ M A X}} \\ T _ {O F F} = \frac {L * I _ {L}}{V _ {O U T} + V _ {D i o d e}} \\ R _ {L} = \frac {V _ {O U T}}{I _ {A V G}} \end{array}
$$

以上计算未考虑芯片自供电电流通过假负载，实际应用的假负载需要在计算值的基础上适当增加。

## Buck-Boost 应用设计

BP85928D 也可以应用于Buck-Boost 拓扑中，实现负电压输出，应用电路如图 2 所示，芯片的基本功能与 Buck拓扎类似。由于电感只在MOSFET关断期间对输出端提供能量，相同的输出功率需要较大感量的电感。

CCM模式下，通过以下表达式计算最小电感值：

$$
L _ {M I N} = \frac {0 . 5 * V _ {O U T} ^ {\prime} * V _ {I N} ^ {\prime 2} * \frac {1}{f _ {S}}}{(V _ {I N} ^ {\prime} + V _ {O U T} ^ {\prime}) * [ V _ {I N} ^ {\prime} * I _ {L I M I T \_ M A X} - (V _ {I N} ^ {\prime} + V _ {O U T} ^ {\prime}) * I _ {O U T} ]}
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

$\mathsf { V } _ { \mathsf { I N } }$ 输入直流母线电压

$\mathsf { V o u r }$ 输出电压

$\mathsf { I } _ { \mathrm { { O U T } } }$ 输出电流

$V _ { \mathrm { D i o d e } }$ 续流二极管压降

$\mathsf { V } _ { \mathsf { D S } }$ 开关管 $\tan$ 时间内平均压降

$\mathsf { I } _ { \mathsf { L I M I T } } \mathsf { \Gamma } _ { \mathsf { M A X } }$ 芯片最大限流值

电感电流有效值为

$$
I _ {R M S} = \sqrt {I _ {L I M I T \_ M A X} ^ {2} - I _ {L I M I T _ {M A X}} * \Delta I _ {L} + \frac {\Delta I _ {L} ^ {2}}{3}}
$$

其中

$$
\Delta I _ {L} = 2 * (I _ {L I M I T _ {M A X}} - \frac {I _ {O U T}}{V _ {I N}} ^ {\prime} * (V _ {I N} ^ {\prime} + V _ {O U T} ^ {\prime}))
$$

DCM模式下，通过以下表达式计算最小电感值：

$$
L _ {M I N} = \frac {2 * (V _ {O U T} + V _ {D i o d e}) * I _ {O U T}}{I _ {L I M I T \_ M A X} ^ {2} * f _ {S}}
$$

电感电流有效值为：

$$
I _ {R M S} = I _ {L I M I T \_ M A X} * \sqrt {\frac {t _ {O N} + t _ {O F F}}{3} * f _ {S}}
$$

空载条件和保证正常采样对最小感量的限制与 Buck拓扑基本一致。

由于电感只在MOSFET关断期间对输出端提供能量，因此输出滤波电容纹波电流比Buck拓扑大，电压纹波主要由电容的ESR产生：

$$
\Delta V _ {E S R} = I _ {L I M I T \_ M A X} * E S R (\text {适应于DCM / CCM})
$$

## PCB Layout 指南

在设计 BP85928D应用 PCB 时，需要遵循以下建议

1)为了减小动点的面积，反馈二极管应尽量靠近芯片。

2) GND 能起到散热作用，可以在 PCB 上铺铜散热，但是GND为电压动点（相对母线地)，在满足散热的条件下铺铜面积应尽量小以减少噪声辐射。同时IC 远离交流输入端，以避免容性耦合产生EMI问题。

3) DRAIN 是内部 MOSFET 的漏极，接输入直流母线，为电压静点，可以铺铜散热。同时建议 DRAIN与其它引脚的走线距离大于2mm。

4) 尽量减小功率环路面积以避免EMI干扰并提高系统可靠性。以BUCK为例，建议缩小输入电容、内置MOSFET、电感、输出电容组成的励磁回路，以及电感、输出电容、续流二极管组成的续流回路面积。反馈回路面积与走线长度也应减小以提高可靠性。

5) 为了使芯片和动点远离交流输入端，可以将输入电解放置在芯片和交流输入之间。

## 封装信息

![](images/15046c7ea4d01fdd778e0e8c841b05ac368f3d025935b53fbfa8a9c55e596415.jpg)  
SOP-8 封装外形尺寸

![](images/2647026b495d13314fdeed62250e2bca8b76d18860a674f5337af043edb3b4bc.jpg)

![](images/2c405e6f701e9e92337855bf78d8a32238736d68ad4b2224ae07cd3156d7ab9f.jpg)

BASE METAL

WITH PLATING

![](images/1ef61ff42ee8b1e2dbfd82b2db466487ec14d4717a17cef35fd1892052340433.jpg)

<table><tr><td rowspan="2">SYMBOL</td><td colspan="3">MILLIMETER</td></tr><tr><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A</td><td>1.30</td><td>—</td><td>1.80</td></tr><tr><td>A1</td><td>0.10</td><td>—</td><td>0.25</td></tr><tr><td>A2</td><td>1.25</td><td>1.40</td><td>1.65</td></tr><tr><td>b</td><td>0.33</td><td>—</td><td>0.51</td></tr><tr><td>c</td><td>0.17</td><td>—</td><td>0.25</td></tr><tr><td>D</td><td>4.70</td><td>4.90</td><td>5.10</td></tr><tr><td>E</td><td>5.80</td><td>6.00</td><td>6.20</td></tr><tr><td>E1</td><td>3.70</td><td>3.90</td><td>4.10</td></tr><tr><td>e</td><td colspan="3">1.27BSC</td></tr><tr><td>L</td><td>0.40</td><td>—</td><td>1.00</td></tr></table>

SECTION B-B

![](images/e1e0afd9cdddab91f5afd81978710f45c3a28822d3ad957acabfbe59a33a316f.jpg)

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev. 0.1</td><td>2023/02</td><td>Preliminary</td></tr><tr><td>Rev. 0.9</td><td>2023/04</td><td>1. 增加应用指南2. 更新典型应用图</td></tr></table>

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责 E。