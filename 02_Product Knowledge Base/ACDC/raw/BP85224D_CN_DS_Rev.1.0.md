## 概述

BP85224D 是一款高性能、高集成度、低待机功耗的开关电源驱动芯片，适用于全电压 85\~265VAC 输入的 Buck、Buck-Boost 变换器拓扑应用。

BP85224D 芯片内部集成 650V 高压 MOSFET、高压启动和自供电电路、电流采样电路、电压反馈电路以及续流二极管，采用先进的控制技术，无需外部 VCC 电容和环路补偿即可实现优异的恒压输出特性，极大地减少外围器件数量，降低系统成本和体积，提高可靠性。

BP85224D 芯片采用多模式控制技术，降低系统待机功耗，提高效率和动态性能，减小系统工作在轻载时的噪声。

BP85224D 提供了丰富的保护功能，包括输出短路保护、输出过载保护、输出过压保护、反馈开路保护、逐周期限流、过温保护等，使系统更加安全可靠。

BP85224D 采用 SOP-7 封装。

![](./素材/images/BP85224D_CN_DS_Rev.1.0/6edb510106acf9e7607ebd85c642a5371c1f7eb5b2b12c4b622c0fe992f726ad.jpg)  
SOP-7 封装

## 特点

■ 集成 VCC 电容、续流二极管和反馈二极管  
■ 内部集成 650V 高压 MOSFET  
■ 集成高压启动和自供电电路  
■ 低待机功耗 50mW@230Vac  
■ 固定 5V 输出  
■ 优异的动态响应速度，输出电压纹波小  
■ 优异的负载调整率和线性调整率  
■ 降低音频噪声的降幅调制技术  
■ 自适应开关频率  
■ 改善 EMI 性能的频率调制技术  
内置软启动功能  
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

典型应用  
![](./素材/images/BP85224D_CN_DS_Rev.1.0/cbf8831d3d57c64bae3921ddbe949cf653684482491dc8ddf565818dbdea63c4.jpg)

图 1. BP85224D 典型 Buck 应用电路

![](./素材/images/BP85224D_CN_DS_Rev.1.0/45e00fcd822c5c5ca039c7220a7002197ea91f8a9035a9e0e9adc46594385eb1.jpg)

图 2. BP85224D 典型 Buck-Boost 应用电路

定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP85224D</td><td>SOP-7</td><td>卷盘4,000只/盘</td><td>BP85224XXXXYYZZWWD</td></tr></table>

## 管脚封装

![](./素材/images/BP85224D_CN_DS_Rev.1.0/3e5c224c832c1d752eacd4cce4e3bb83b02ed08768c1596828f430ca8d4314cf.jpg)

图 3. 管脚封装图

管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>VOUT</td><td>输出电压端,芯片内部反馈二极管阳极</td></tr><tr><td>2</td><td>GND</td><td>输出电压参考地,内部续流二极管阳极</td></tr><tr><td>3</td><td>NC</td><td>无连接</td></tr><tr><td>4</td><td>DRAIN</td><td>芯片内部高压 MOSFET 漏极,此引脚也向芯片内部提供自供电电流</td></tr><tr><td>5、6</td><td>IC-GND</td><td>芯片地,内部 MOSFET 源极</td></tr><tr><td>8</td><td>FB</td><td>芯片电压采样端,内部反馈二极管阴极,外部无需连接</td></tr></table>

输出规格表

<table><tr><td rowspan="2">型号</td><td colspan="2">输出规格</td></tr><tr><td>输入电压</td><td>最大连续输出电流(mA)</td></tr><tr><td>BP85224D</td><td>85~265Vac</td><td>5V/200mA</td></tr></table>

注1：表中的推荐最大输出电流是在充分散热的条件下，非隔离Buck或者Buck-Boost电路应用。

极限参数(注2)（无特别说明情况下， $T_{A}=25^{\circ}C$ ）

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td> $V_{DRAIN}$ </td><td>内部高压 MOSFET 漏极到源极电压</td><td>-0.3~650</td><td>V</td></tr><tr><td> $V_{FB}$ </td><td>FB 引脚电压(以 IC-GND 引脚为参考)</td><td>-0.3~30</td><td>V</td></tr><tr><td> $V_{GND}$ </td><td>GND 到 IC-GND 引脚电压</td><td>-600~0.3</td><td>V</td></tr><tr><td> $V_{OUT}$ </td><td>VOUT 引脚电压(以 IC-GND 引脚为参考)</td><td>-600~30</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注 3)</td><td>0.86</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>结到环境的热阻(注 4)</td><td>145</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40 to 150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55 to 150</td><td>°C</td></tr><tr><td>ESD</td><td>人体模型 ESD(注 5)</td><td>2</td><td>kV</td></tr></table>

注2：极限参数是指超出该工作范围，芯片有可能损坏。除非特殊说明，电压值均参考IC-GND。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。  
注3：温度升高最大功耗一定会减小，这也是由 $T_{\mathrm{JMAX}}$ ， $\theta_{\mathrm{JA}}$ 和环境温度 $T_{\mathrm{A}}$ 所决定的。最大允许功耗为 $P_{\mathrm{DMAX}} = (T_{\mathrm{JMAX}} - T_{\mathrm{A}}) / \theta_{\mathrm{JA}}$ 或是极限范围给出的数字中比较低的那个值。  
注4：1平方英寸双层PCB板，按照JEDEC标准测试。  
注5：按照JEDEC标准测试，100pF电容通过 $1.5\mathrm{K}\Omega$ 电阻放电。

电气参数(注6)（无特别说明情况下， $T_{A}=25^{\circ}C$ ）

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">电源电压</td></tr><tr><td> $V_{DRAIN_ON}$ </td><td> $V_{DRAIN}$ 开启电压</td><td>Rising</td><td>12</td><td>15</td><td>18</td><td>V</td></tr><tr><td> $I_{CC}$ </td><td>芯片工作电流</td><td> $V_{DRAIN}=40V$ </td><td></td><td>80</td><td></td><td>μA</td></tr><tr><td> $I_Q$ </td><td>芯片静态电流</td><td> $V_{DRAIN}=10V$ </td><td></td><td>90</td><td></td><td>μA</td></tr><tr><td colspan="7">输出电压反馈</td></tr><tr><td> $V_{FB}$ </td><td>FB引脚调制电压</td><td></td><td>5.42</td><td>5.55</td><td>5.68</td><td>V</td></tr><tr><td> $V_{FB_OLP}$ </td><td>FB引脚过载保护电压</td><td></td><td></td><td>2.75</td><td></td><td>V</td></tr><tr><td> $t_{OLP}$ </td><td>输出过载屏蔽时间</td><td></td><td></td><td>4096</td><td></td><td>cycles</td></tr><tr><td> $V_{FB_SCP}$ </td><td>FB引脚短路保护电压</td><td></td><td></td><td>1.5</td><td></td><td>V</td></tr><tr><td> $t_{SC}$ </td><td>输出短路屏蔽时间</td><td></td><td></td><td>1024</td><td></td><td>cycles</td></tr><tr><td> $V_{FB_OVP}$ </td><td>FB引脚过压保护电压</td><td></td><td></td><td>6.9</td><td></td><td>V</td></tr><tr><td> $t_{AR_OFF}$ </td><td>自动重启间隔时间</td><td></td><td></td><td>0.5</td><td></td><td>s</td></tr><tr><td colspan="7">振荡器</td></tr><tr><td> $f_{S_MAX}$ </td><td>最大开关频率</td><td></td><td>31</td><td>35</td><td>39</td><td>kHz</td></tr><tr><td> $f_{S_MIN}$ </td><td>最小开关频率</td><td></td><td></td><td>0.6</td><td></td><td>kHz</td></tr><tr><td> $t_{ON_MAX}$ </td><td>最大开通时间</td><td></td><td>7</td><td></td><td></td><td>μs</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $I_{LIMIT_MAX}$ </td><td>最大电流限值(注7)</td><td></td><td>355</td><td>390</td><td>425</td><td>mA</td></tr><tr><td> $I_{LIMIT_MIN}$ </td><td>最小电流限值</td><td></td><td></td><td>130</td><td></td><td>mA</td></tr><tr><td> $t_{LEB}$ </td><td>前沿消隐时间</td><td></td><td></td><td>220</td><td></td><td>ns</td></tr><tr><td> $t_{ILD}$ </td><td>电流限流延迟</td><td></td><td></td><td>100</td><td></td><td>ns</td></tr><tr><td colspan="7">功率管</td></tr><tr><td> $R_{DS_ON}$ </td><td>功率管导通阻抗</td><td> $I_{DS}=200mA$ </td><td></td><td>22</td><td></td><td>Ω</td></tr><tr><td> $I_{DSS}$ </td><td>功率管关断漏电流</td><td> $V_{DS}=500V$ </td><td></td><td></td><td>30</td><td>μA</td></tr><tr><td> $BV_{DSS}$ </td><td>功率管击穿电压</td><td> $V_{GS}=0V, I_{DS}=250μA$ </td><td>650</td><td></td><td></td><td>V</td></tr><tr><td colspan="7">续流二极管</td></tr><tr><td> $V_{RRM1}$ </td><td>二极管反向击穿电压</td><td> $I_R=5μA$ </td><td>600</td><td></td><td></td><td>V</td></tr><tr><td> $V_{F1}$ </td><td>二极管正向导通压降</td><td> $I_F=200mA$ </td><td></td><td>1.15</td><td></td><td>V</td></tr><tr><td> $I_{FAV1}$ </td><td>最大平均正向导通电流</td><td></td><td>300</td><td></td><td></td><td>mA</td></tr><tr><td> $T_{RR1}$ </td><td>反向恢复时间</td><td> $I_F=500mA, I_R=1.0A, I_{RR}=250mA$ </td><td></td><td></td><td>35</td><td>ns</td></tr><tr><td colspan="7">过热保护</td></tr><tr><td>TOTP</td><td>过温保护阈值</td><td></td><td></td><td>150</td><td></td><td>°C</td></tr><tr><td>THYST</td><td>过温保护迟滞</td><td></td><td></td><td>40</td><td></td><td>°C</td></tr></table>

注6：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。除非特殊说明，电压值均参考IC-GND。  
注7：电气参数 $I_{LIMIT\_MAX}$ 是 FT 用 DC 方式测试，无关断延时。实际系统由于关断延时， $I_{LIMIT\_MAX}$ 会比设计值略高，高压输入时更明显。此偏差受到输入电压，电感量影响。

## 内部结构框图

![](./素材/images/BP85224D_CN_DS_Rev.1.0/f316698c8259ee4a3ba2d37f060f43f60839f89c720d83c3b1ad599fb4c68064.jpg)

图 4. BP85224D 内部框图

## 功能描述

BP85224D 是一款高压输入具有 5V 恒压输出特性的驱动芯片，采用多模式控制和环路补偿技术，无需外部补偿电路。芯片无需外部 VCC 电容，内部集成 650V 功率开关、续流二极管、高压自供电电路、电流采样电路、电压反馈电路，以及丰富的保护功能，只需要极少的外围器件就可以达到优异的恒压输出特性。开关频率根据电感和负载自适应调整，使电源设计更加灵活。同时，具有较低的待机功耗、良好的输出电压调整率、较低的输出电压纹波和低音频噪声使得 BP85224D 特别适合于非隔离辅助电源应用。（注 8：以下描述到的参数均为电气参数列表中的典型值，除非特别说明是最大或最小值）

## 高压启动供电

BP85224D 集成了高压启动与自供电电路，无需外部 VCC 电容。系统上电后，母线电压上升，内部高压启动电路通过 DRAIN 端对内置 VCC 电容充电。当内置 VCC 电容电压达到芯片启动阈值 11V 时，芯片内部控制电路开始工作。当内置 VCC 电容电压降低到欠压保护阈值 5V 时，芯片关断内部 MOSFET。芯片正常工作时，在 MOSFET 关断期间自供电电路通过 DRAIN 端对内置 VCC 电容供电。

![](./素材/images/BP85224D_CN_DS_Rev.1.0/3b158760bae4f6efd6630439948206f03c9eaf823443ad5c49da3a1336007b98.jpg)

图 5. 高压启动与 VCC 欠压保护时序

## 软启动

BP85224D 具有软启动功能，在软启动过程中，MOSFET 峰值电流(限流点)逐渐增加，可以降低二极管的反向恢复电流，从而降低 MOSFET 电流应力。软启动过程如图 6 所示，起始限流值为 70% 最大限流值，512 个开关周期(Ts)后增加到 100% 最大限流值。

![](./素材/images/BP85224D_CN_DS_Rev.1.0/64c212fdd3feaf62b94515f261c95cbe9520625395f7e1512c24359377c8ce0f.jpg)

图 6. 软启动过程

## 输出电压采样

BP85224D 通过 VOUT 引脚采样输出电压，经过内置反馈二极管、内部电阻分压后与基准电压运算实现恒压控制。输出电压采样仅在续流阶段 3μs 时进行，电感设计时建议保证续流时间大于 7μs，以防止无法正确采样输出电压导致工作异常。BP85224D 引入负载补偿技术优化负载调整率。

![](./素材/images/BP85224D_CN_DS_Rev.1.0/87ad6220e506763c2f4178e77b0b71c814aff20180a2c594803b6cfb1a7ed7e9.jpg)

图 7. 输出电压采样示意图

## 多模式控制

BP85224D 采用 PWM/PFM 多模式控制技术，能有效降低系统待机功耗，提高平均效率，并减小系统工作在轻载时的噪声。BP85224D 引入抖频技术来优化 EMI 表现。

![](./素材/images/BP85224D_CN_DS_Rev.1.0/89e5a21565f8705838f6e3a459c7e0a3df316c8536baf54b508e7067de31956a.jpg)

图 8. 控制模式

## 电流检测

BP85224D 内部集成电流采样电路，对 MOSFET 电流逐周期限制，无需外置电流采样电阻。当一个开关周期开始时，控制电路开通 MOSFET，漏极电流上升，当电流上升达到内部限制值时，控制电路关断 MOSFET，直到下一个开关周期开始。内置前沿消隐(Leading Edge Blanking)时间， $t_{LEB}$ 可以避免由于外部电路的容性或二极管的反向恢复导致 MOSFET 在开通瞬间出现的电流尖峰误触发 MOSFET 关断。

## 自动重启

当外部故障（输出过载）触发相应的保护，控制电路关断MOSFET，系统停止工作。BP85224D内部的自动重启电路计时 $t_{AR\_OFF}$ (0.5s)后重新启动系统，如果启动后故障没有消除，则重新触发相应的保护。每次重启都会经历软启动过程。

## 短路保护/过载保护（SCP/OLP）

BP85224D 内部控制电路通过 FB 引脚检测输出短路或过载故障。如图 9 所示，当 FB 电压低于 $V_{FB\_SC}(1.5V)$ 且保持 1024 个开关周期，则触发短路保护(SCP)并进入自动重启程序。将 FB 引脚短路到 IC-GND 或 VOUT 引脚悬空也可以触发该保护。如果芯片检测到 FB 电压低于 $V_{FB\_OLP}(2.75V)$ 且持续 4096 个开关周期，则触发过载保护(OLP)并进入自动重启程序。

![](./素材/images/BP85224D_CN_DS_Rev.1.0/886c2dc62620e7422b8c11dfb9e04f8ff279340817dd2a2b78c0fb3f2540394e.jpg)

图 9. 过载保护工作模式

## 输出过压保护（OVP）

BP85224D 内部控制电路通过 FB 引脚检测输出过压故障。当 FB 电压连续 2 个开关周期高于 $V_{FB\_OVP}(6.5V)$ 时，触发输出过压保护，芯片进入自动重启程序。

## 过温保护（OTP）

BP85224D 内置了过温保护电路。当结温达到过温保护阈值 $T_{OTP}(150^{\circ}\mathrm{C})$ 时，芯片会停止工作，MOSFET 关断，直到结温下降到 $T_{OTP}-T_{HYST}$ 时，芯片重新启动。 $T_{HYST}(40^{\circ}\mathrm{C})$ 为过温保护迟滞，较大的温度迟滞有利于把系统整体温度控制在较低水平。

## 应用指南

## 输出电感计算（Buck 拓扑）

BP85224D 系列可工作于 CCM 和 DCM 工作模式，取决于额定输出电流和输出电感感量。当 Buck 变换器输出电流 $I_{OUT} > 0.5 \times I_{LIMIT\_MAX}$ 时，电感需要工作于 CCM 才能满足负载电流要求；当 $I_{OUT} < 0.5 \times I_{LIMIT\_MAX}$ 时，DCM 和 CCM 都可以满足输出负载电流要求，工作模式取决于电感的感量大小。电感感量越大，带载能力越强，因为需要更多圈数，体积也会更大，成本相对高，动态响应较慢，CCM 下开关损耗大。小感量电感可以减小尺寸、降低价格以及改善系统动态响应，CCM 下开关损耗小，但同时会增大电感的峰值电流和输出纹波电压，峰值带载能力也较小。通常，在满足最大输出电流的前提下，尽量选取小电感量。实际选择电感时，通常根据输入输出规格，计算出能满足输出电流的最小电感值，然后从电感供应商的选型手册中选取大一档的标准值电感。因此， $I_{OUT} > 0.5 \times I_{LIMIT\_MAX}$ 时按照 CCM 计算电感量， $I_{OUT} < 0.5 \times I_{LIMIT\_MAX}$ 时按照 DCM 计算电感量。

CCM 模式下，如图 10 所示，根据输入/输出电压、系统开关频率、满载输出电流以及芯片最大限流值计算最小电感值：

$$
L _ {M I N} = \frac {(V _ {O U T} + V _ {D i o d e}) * (V _ {I N} - V _ {D S} - V _ {O U T})}{(V _ {I N} - V _ {D S} + V _ {D i o d e}) * f _ {S} * \Delta I _ {L}}
$$

其中， $V_{IN}$ 输入直流母线电压

$V_{OUT}$ 输出电压

IOUT 输出电流

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

![](./素材/images/BP85224D_CN_DS_Rev.1.0/48f6caed24242b3ebceeaa429853eb1ac040d91f3d48e7abb5eb2c29d253ab97.jpg)

图 10. CCM 模式下的电感电流

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

![](./素材/images/BP85224D_CN_DS_Rev.1.0/42fa778665b7ada2e295d75afd60612b49bd4168f12d6cd4f55c2879324068af.jpg)

图 11. DCM 模式下的电感电流

一般来说， $V_{IN}$ 是一个范围，通常选择最大输入直流母线电压代入计算公式，或者也可以分别计算最高和最低母线电压对应的电感量，最后取两者中较大者。上述两个电感表达式计算出来的都是输出额定电流所需的最小电感量，设计中需要考虑实际电感的精度，通常取计算值的 1.1 倍以保证批量生产时能满足最低电感量的要求。表达式中 $I_{LIMIT\_MAX}$ 应该取芯片最大限流值的下限。

为了降低待机功耗，减小输出端需要的假负载，BP85224D通过多模式控制降低了空载下的限流点和开关频率。为了使空载时电感电流可控，电感量需要足够大以至于在 MOSFET 最小导通时间内电流峰值不超过芯片最低限流值。即

$$
L \geq \frac {t _ {L E B} * (V _ {I N \_ M A X} - V _ {O U T})}{I _ {L I M I T \_ M I N}}
$$

其中， $t_{LEB}$ 为前沿消隐时间， $I_{LIMIT\_MIN}$ 为芯片的最低限流值。

![](./素材/images/BP85224D_CN_DS_Rev.1.0/ab1795f61168d8cb4ebd6688905d596b4b525b397c6613563c64c827f03c1051.jpg)

图 12. 空载下的电感电流

如图 12 所示，电感量小于临界值会导致 $t_{LEB}$ 时刻电感峰值电流大于芯片控制的限流点，平均输出电流过大，需要较大的假负载给电感电流提供通路，从而稳定输出电压。

此外，所选择的电感需要保证芯片在最低限流点时的续流时间大于 $7 \mu s$ ，以保证芯片可以正常的反馈采样，即：

$$
L \geq \frac {7 u s * V _ {O U T}}{I _ {L I M I T \_ M I N}}
$$

因此，通常最终的电感值需要同时满足以上三个条件。待机要求不高的应用只需要满足额定输出电流对最小电感的要求就可以了。确定电感值后，还需要确认电感的有效值电流是否满足上述计算值，同时还需要保证电感磁芯在芯片最大限流值 $I_{LIMIT\_MAX}$ 不饱和，供应商的选型手册中一般会给出电感的有效值电流和饱和电流值。

## 输入电容选择

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

实际应用中，为了得到较小的 ESR，电容量相对比较大，因此由容量产生的输出电压纹波很小，几乎可以忽略，因此电压纹波主要由电容的 ESR 产生：

$$
\Delta V _ {E S R} = \Delta I _ {L} * E S R (\text { CCM })
$$

$$
\Delta V _ {E S R} = I _ {\text { LIMIT\_MAX }} * E S R \quad (\mathrm{DCM})
$$

ESR 不仅产生输出电压纹波，还会导致电容产生损耗而发热，缩短电解电容的寿命，特别是工作于 DCM 模式时。

## 假负载计算

为了维持较低的空载损耗，芯片的最低开关频率设置为0.6kHz。当输出空载时，需要一个假负载为电感电流提供回路，从而稳定输出电压，电感的平均电流即为假负载的电流。

$$
I _ {A V G} = \frac {1}{2} I _ {L} * (T _ {O N} + T _ {O F F}) * f _ {S \_ M I N}
$$

其中， $I_{L}$ 为空载时电感峰值电流：

$$
I _ {L} = \frac {V _ {I N \_ M A X}}{L} * t _ {D e l a y} + I _ {L I M I T \_ M I N}
$$

$I_{LIMIT\_MIN}$ 为芯片的最低限流值， $f_{S\_MIN}$ 为芯片最低频率， $T_{ON}$ ， $T_{OFF}$ 分别为空载时 MOSFET 开通和关断时间：

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

BP85224D 系列芯片也可以应用于 Buck-boost 拓扑中，实现负电压输出，芯片的基本功能与 Buck 拓扑类似。由于电感只在 MOSFET 关断期间对输出端提供能量，相同的输出功率需要较大感量的电感。

CCM 模式下，通过以下表达式计算最小电感值：

$$
L _ {M I N}
$$

$$
= \frac {0 . 5 * V _ {O U T} ^ {\prime} * V _ {I N} ^ {\prime 2} * \frac {1}{f _ {S}}}{(V _ {I N} ^ {\prime} + V _ {O U T} ^ {\prime}) * [ V _ {I N} ^ {\prime} * I _ {L I M I T \_ M A X} - (V _ {I N} ^ {\prime} + V _ {O U T} ^ {\prime}) * I _ {O U T} ]}
$$

其中 $V_{IN}^{\prime}=V_{IN}-V_{DS}$

$$
V _ {O U T} ^ {\prime} = V _ {O U T} + V _ {D i o d e}
$$

$$
V _ {D S} = \frac {V _ {I N} ^ {\prime} + V _ {O U T} ^ {\prime}}{V _ {I N} ^ {\prime}} * I _ {O U T} * R _ {d s (O N)}
$$

$V_{IN}$ 输入直流母线电压

$V_{OUT}$ 输出电压

IOUT 输出电流

$V_{Diode}$ 续流二极管压降

$V_{DS}$ 开关管 $t_{ON}$ 时间内平均压降

$I_{LIMIT\_MAX}$ 芯片最大限流值

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

空载条件对最小感量的限制跟 BUCK 拓扑基本一致。

由于电感只在 MOSFET 关断期间对输出端提供能量，因此输出滤波电容纹波电流比 BUCK 拓扑大，电压纹波主要由电容的 ESR 产生：

$$
\Delta V _ {E S R} = I _ {L I M I T \_ M A X} * E S R (\text {适应于DCM / CCM})
$$

## PCB Layout 指南

在设计 BP85224D 应用 PCB 时，需要遵循以下建议：

1) VOUT 和 FB 脚应避免铺铜，且远离母线电压、母线地和输出电感，以防止反馈信号收到干扰。  
2) IC-GND 引脚能很好地起到散热作用，可以在 PCB 上铺铜来降低芯片的温度，但是 IC-GND 引脚为电压动点（相对母线地电压），在满足散热的条件下铺铜面积应尽量小。同时，IC-GND 引脚要远离输入交流端，以避免耦合产生的 EMI 问题。  
3) BUCK 变换器中，DRAIN 引脚是芯片内部 MOSFET 的漏极，接输入电容正端，为电压静点，可以铺铜皮提高芯片的散热能力。同时建议注意 DRAIN 脚与其他引脚的走线距离。  
4) 为了达到较好的 EMI 表现，提高系统可靠性，建议尽可能减小功率环路的面积和走线长度。以 Buck-Boost 为例：建议将母线电容放置在 DRAIN 引脚附近，电感放置在 IC-GND 附近，母线电容、内置 MOSFET、电感形成的励磁回路面积和走线长度尽量减小。电感、内置续流二极管、输出电容组成的续流回路面积和走线长度也建议尽量缩小。  
5) 大部分输出电感为工字形电感，开放式磁路容易产生干扰，需要远离芯片 FB 脚，同时需要远离输入端以避免 EMI 问题。

## 封装信息

SOP-7 封装外形尺寸  
Unit: mm  
![](./素材/images/BP85224D_CN_DS_Rev.1.0/91582ea369c7a670c8bd61cddc0cfddadb385db60e387d82b397ce08420fc4fa.jpg)

![](./素材/images/BP85224D_CN_DS_Rev.1.0/84d3eda2d57ca8d5f13b372c41d05a8e0001c02345ffc508df2c2a8f8a79bab9.jpg)

![](./素材/images/BP85224D_CN_DS_Rev.1.0/270d34d392de744bcd6487c9a6be2d5f7fa0afb95d8872bb41c953ce759e8200.jpg)

![](./素材/images/BP85224D_CN_DS_Rev.1.0/e884faf110db2c2d582428a540d670272b4c99bb10f8d2d66bef516cd13f851b.jpg)

<table><tr><td rowspan="2">SYMBOL</td><td colspan="3">MILLIMETER</td></tr><tr><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A</td><td>1.30</td><td>—</td><td>1.80</td></tr><tr><td>A1</td><td>0.05</td><td>—</td><td>0.25</td></tr><tr><td>A2</td><td>1.25</td><td>—</td><td>1.65</td></tr><tr><td>b</td><td>0.33</td><td>—</td><td>0.51</td></tr><tr><td>c</td><td>0.10</td><td>—</td><td>0.25</td></tr><tr><td>D</td><td>4.70</td><td>4.90</td><td>5.10</td></tr><tr><td>E</td><td>5.80</td><td>6.00</td><td>6.24</td></tr><tr><td>E1</td><td>3.70</td><td>3.90</td><td>4.10</td></tr><tr><td>e</td><td colspan="3">1.27BSC</td></tr><tr><td>L</td><td>0.40</td><td>—</td><td>1.00</td></tr></table>

版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev.1.0</td><td>2025/03</td><td>首次发布</td></tr></table>

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。

## 电子器件报废说明

该产品在生命周期结束后，由客户按照一般电子产品的报废流程进行处理。
