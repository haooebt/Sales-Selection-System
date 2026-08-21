## BP8521C超高集成度开关电源驱动芯片

## 概述

BP8521C 是一款高性能、高集成度、低待机功耗的开关电源驱动芯片，适用于全电压 85\~265VAC 输入的 Buck、Buck-Boost 拓扑应用。

BP8521C 芯片内部集成 550V 高压 MOSFET、高压启动和自供电电路、电流采样电路、电压反馈电路以及续流二极管，无需外部VCC电容和环路补偿即可实现优异的恒压输出特性，极大地减少外围器件数量，节省系统成本和体积，同时提高可靠性。

BP8521C 提供丰富的保护功能，使系统更加安全可靠。

BP8521C 采用 SOP-8 封装。

![](images/9d0eecda6ca74f24b03071da9796c3c05c71961534dbbaf5d8df0d729c573a8d.jpg)  
SOP-8 封装

## 特点

 无 VCC 电容

 低待机功耗 ＜50mW

 固定 3.3V 输出电压

 内部集成 550V 功率管

 集成高压启动和供电电路

 减小音频噪声的降幅调制技术

 改善 EMI 的抖频技术

 保护功能

 输出过载保护(OLP)

 短路保护

逐周期限流

迟滞过温保护(OTP)

## 应用领域

辅助电源

## 典型应用

![](images/adfa0cf405b9860f39ad8838798d58e1850b9d9d0aef5904f2e1520ba9139ad6.jpg)  
图 1. BP8521C 典型 Buck 应用电路

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP8521C</td><td>SOP-8</td><td>卷盘4,000只/盘</td><td>BP8521XXXXXYZZZZWWC</td></tr></table>

## 管脚封装

![](images/f0aa219a4de141398abae7edf626bf76a769857e67e1882621be43fb42ccaba4.jpg)  
图 2. 管脚封装图

BP8521: 产品型号XXXXXYX: 批次号ZZZZ: 标示WW: 周号C: 封装代码

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>VOUT</td><td>输出电压端,内置反馈二极管阳极</td></tr><tr><td>2</td><td>GND</td><td>输出电压参考地,内置续流二极管阳极</td></tr><tr><td>3、6、7</td><td>NC</td><td>无连接</td></tr><tr><td>4</td><td>DRAIN</td><td>内置 MOSFET 漏极,此引脚也向芯片内部提供自供电电流</td></tr><tr><td>5</td><td>IC-GND</td><td>芯片地,内置 MOSFET 源极,内置续流二极管阴极</td></tr><tr><td>8</td><td>VFB</td><td>反馈电压采样端,内置反馈二极管阴极,外部无需连接</td></tr></table>

## 输出规格表(注 1)

<table><tr><td rowspan="2">型号</td><td colspan="2">输出规格</td></tr><tr><td>输出电压(V)</td><td>最大连续输出电流(mA)</td></tr><tr><td>BP8521C</td><td>3.3</td><td>60</td></tr></table>

注 1：表中的推荐最大输出电流是在充分散热的条件下，外围参数设计合理，非隔离 Buck 或者 Buck-Boost电路应用。

极限参数(注 2) （无特别说明情况下， ${ \sf T } _ { \sf A } = 2 5 ^ { \circ } { \sf C } )$

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td> $V_{DRAIN}$ </td><td>内部高压 MOSFET 漏极到源极电压</td><td>-0.3~550</td><td>V</td></tr><tr><td> $V_{FB}$ </td><td>VFB 引脚电压(以 IC-GND 引脚为参考)</td><td>-0.3~7</td><td>V</td></tr><tr><td> $V_{GND}$ </td><td>GND 到 IC-GND 引脚电压</td><td>-550~0.3</td><td>V</td></tr><tr><td> $V_{OUT}$ </td><td>VOUT 引脚电压(以 GND 引脚为参考)</td><td>-0.3~7</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注 3)</td><td>0.45</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>结到环境的热阻(注 4)</td><td>145</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40 to 150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55 to 150</td><td>°C</td></tr><tr><td>ESD</td><td>人体模型 ESD(注 5)</td><td>2</td><td>kV</td></tr></table>

注 2：极限参数是指超出该工作范围，芯片有可能损坏。除非特殊说明，电压值均参考 IC-GND。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。  
注 3：温度升高最大功耗一定会减小，这也是由 T<sub>JMAX</sub>, θ<sub>JA</sub>,和环境温度 T<sub>A</sub>所决定的。最大允许功耗为 $\mathsf { P } _ { \mathsf { D M A X } } = ( \mathsf { T } _ { \mathsf { J M A X } } - \mathsf { T } _ { \mathsf { A } } ) /$ θ 或是极限范围给出的数字中比较低的那个值。  
注 4：1平方英寸双层 PCB板，按照JEDEC 标准测试。

注 5：按照 JEDEC 标准测试, 100pF 电容通过 1.5kΩ 电阻放电。

电气参数(注 6) （无特别说明情况下， ${ \sf T } _ { \sf A } = 2 5 ^ { \circ } { \sf C } )$

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">电源电压</td></tr><tr><td> $V_{DRAIN_ON}$ </td><td> $V_{DRAIN}$ 开启电压</td><td>Rising</td><td>12</td><td>15</td><td>18</td><td>V</td></tr><tr><td> $I_Q$ </td><td> $V_{DRAIN}$ 静态电流</td><td> $V_{DRAIN}=11V$ </td><td></td><td>70</td><td>150</td><td>μA</td></tr><tr><td colspan="7">采样电压</td></tr><tr><td> $V_{FB}$ </td><td> $V_{FB}$ 引脚采样电压</td><td></td><td>3.69</td><td>3.8</td><td>3.91</td><td>V</td></tr><tr><td> $V_{FB\_OLP}$ </td><td> $V_{FB}$ 引脚过载保护电压</td><td>续流状态</td><td></td><td>1.8</td><td></td><td>V</td></tr><tr><td colspan="7">振荡器</td></tr><tr><td> $F_{OSC\_MAX}$ </td><td>最大开关频率</td><td></td><td>25</td><td>30</td><td>35</td><td>kHz</td></tr><tr><td> $t_{ON\_MAX}$ </td><td>最大开通时间</td><td></td><td></td><td>3</td><td></td><td>μs</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $I_{LIMIT\_MAX}$ </td><td>最大电流限值(注7)</td><td> $V_{FB}=3.2V$ </td><td>165</td><td>190</td><td>215</td><td>mA</td></tr><tr><td> $t_{LEB}$ </td><td>前沿消隐时间</td><td></td><td></td><td>260</td><td></td><td>ns</td></tr><tr><td> $t_{ILD}$ </td><td>电流限流延迟</td><td></td><td></td><td>50</td><td></td><td>ns</td></tr><tr><td colspan="7">功率管</td></tr><tr><td> $R_{DS_ON}$ </td><td>功率管导通阻抗</td><td> $V_{FB}=3.2V, I_{DS}=100mA$ </td><td></td><td>30</td><td></td><td>Ω</td></tr><tr><td> $I_D$ </td><td>漏极最大直流电流(注8)</td><td></td><td></td><td>0.42</td><td></td><td>A</td></tr><tr><td> $I_{DSS}$ </td><td>功率管关断漏极漏电流</td><td> $V_{DS}=550V$ </td><td></td><td></td><td>30</td><td>μA</td></tr><tr><td> $BV_{DSS}$ </td><td>功率管击穿电压</td><td> $V_{GS}=0V, I_{DS}=250μA$ </td><td>550</td><td></td><td></td><td>V</td></tr><tr><td colspan="7">续流二极管</td></tr><tr><td> $V_{BR1}$ </td><td>二极管击穿电压</td><td> $I_R=5μA$ </td><td>600</td><td></td><td></td><td>V</td></tr><tr><td> $V_{F1}$ </td><td>二极管导通压降</td><td> $I_F=200mA$ </td><td></td><td></td><td>1.6</td><td>V</td></tr><tr><td> $I_{FAV1}$ </td><td>最大平均导通电流</td><td></td><td>300</td><td></td><td></td><td>mA</td></tr><tr><td> $t_{RR1}$ </td><td>反向恢复时间</td><td> $I_F=500mA, I_R=1A, I_{RR}=250mA$ </td><td></td><td></td><td>35</td><td>ns</td></tr><tr><td colspan="7">FB采样二极管</td></tr><tr><td> $V_{BR2}$ </td><td>二极管击穿电压</td><td> $I_R=5μA$ </td><td>600</td><td></td><td></td><td>V</td></tr><tr><td> $V_{F2}$ </td><td>二极管导通压降</td><td> $I_F=1mA$ </td><td></td><td></td><td>0.9</td><td>V</td></tr><tr><td colspan="7">过热保护</td></tr><tr><td> $T_{SD}$ </td><td>过热调节温度</td><td></td><td></td><td>150</td><td></td><td>°C</td></tr><tr><td> $T_{SD\_HYS}$ </td><td>过温保护温度迟滞</td><td></td><td></td><td>40</td><td></td><td>°C</td></tr></table>

注8：漏极最大直流电流基于抽测 IC测试所得，不同批次 IC 存在一定差异。

## 内部结构框图

![](images/2283a0dc7cd974131246ae3870e6737792b1bd4ba4d74e6c87a2fff6a1ca2ec4.jpg)  
图 3. BP8521C 内部框图

## 功能描述

BP8521C 是一款高压输入具有恒压输出特性的驱动芯片，无需外部补偿电路。芯片无需外部 VCC 电容，内部集成 550V 功率开关、续流二极管、高压自供电电路、电流采样电路、电压反馈电路，以及丰富的保护功能，只需要少量的外围器件就可以实现恒压输出。此外，BP8521C 具有较低的待机功耗、良好的输出电压调整率和较低的输出电压纹波。（注 9：以下描述到的参数均为电气参数列表中的典型值，除非特别说明是最大或最小值）

## 高压启动供电

BP8521C 集成了高压启动与自供电电路，无需外部 VCC 电容。系统上电后，母线电压上升，内部高压启动电路通过 DRAIN端对内置 VCC 电容充电。当内置 VCC 电容电压达到芯片启动阈值时，芯片内部控制电路开始工作。当内置VCC电容电压降低到欠压保护阈值时，芯片关断内部 MOSFET。芯片正常工作时，在 MOSFET 关断期间自供电电路通过 DRAIN 端对内置VCC 电容供电。

## 软启动

BP8521C 具有软启动功能，在软启动过程中，MOSFET 峰值电流（限流点）保持不变，开关频率随着输出电压的升高而逐渐升高。

![](images/1f07ff91b10fcc021ec10a542cfed0118a1744c15d92ec3ce28180ecb2f9fe1e.jpg)  
图 4. 软启动过程

## 输出电压采样

BP8521C 通过 VOUT 引脚采样输出电压，经过内置反馈二极管到达 FB引脚，FB电压经内部电阻分压后与内部基准电压进行运算实现恒压控制。输出电压采样仅在续流状态 3μs 时进行，电感设计时建议保证续流时间大于 $7 \mu \mathsf { s }$ ，以防止无法正确采样输出电压导致工作异常。

![](images/d062818ee4ce1e4d2fed0868badddd4e43cfb470ab698214956475dc28945f4f.jpg)  
图 5. 输出电压采样示意图

## 多模式控制

BP8521C 采用频率自适应控制技术，如图 6 所示。

![](images/53bfcea9ac8a6187a1f9bf00e2f3800322f21a67130b4d0dceeb8185f394846d.jpg)

图 6. 控制模式  
![](images/6de69a86c95b797f36ceab51a3080e4dbb086165a42e9a5d0c146d1489cc68f8.jpg)

## 电流检测

BP8521C 内部集成电流采样电路，对 MOSFET 电流逐周期限制，无需外置电流采样电阻。当一个开关周期开始时，控制电路开通 MOSFET，漏极电流上升，当电流上升达到内部限制值时，控制电路关断 MOSFET，直到下一个开关周期开始。内置前沿消隐(Leading Edge Blanking)时间，tLEB 可以避免由于外部电路的容性或二极管的反向恢复导致MOSFET在开通瞬间出现的电流尖峰误触发 MOSFET关断。

## 输出电压过压/过载、短路保护

BP8521C 通过 VFB 引脚来实现输出电压的过载与短路保护，当 VFB 电压低于设定电压且保持 220ms，芯片即实现输出过载保护。保护后，功率管 MOS 关断，芯片振荡器工作在最低频率为 4KHz，保护发生后，芯片会定时 1s 重新检测 VFB 电压，如果过载、短路解除，则正常工作，如未解除，继续保护。

## 过温保护（OTP）

BP8521C 内置了过温保护电路。当结温达到过温调节温度${ \sf T } _ { \sf S D } ( 1 5 0 ^ { \circ } { \sf C } )$ 时，芯片会停止工作，MOSFET 关断，直到结温下$T _ { S D - H Y S }$ 时，芯片重新启动。T<sub>SD-HYS</sub>(40℃)为温度迟滞，较大的温度迟滞有利于把系统整体温度控制在较低水平。

## 应用指南

## 输出电感的选择

根据系统所需的电流输出能力，BP8521C 的输出电感可以选用 1mH。选型时请注意电感的最大饱和电流等参数，以避免电感持续工作在严重饱和状态。此外，所选择的电感需要保证芯片工作在最低限流点时的续流时间大于 $7 \mu \mathsf { s }$ ，以保证芯片可以正常反馈采样，即

$$
L \geq \frac {V _ {O U T} * 7 \mu s}{I _ {L I M I T \_ M I N}}
$$

## 输入电容的选择

输入滤波电容对工频电压纹波、传导 EMI、以及电源抵抗Surge 的能力都起到关键的作用。电容量的选择要保证直流母线电压不能过低(通常不要低于 70V)，因此电容量取决于输出功率和电源效率。 全电压 85\~265VAC 输入时，如果使用全波整流，一般取≥3μF/W；对于半波整流，电容量一般取≥6μF/W。 单高压 176\~265VAC 输入时，在满足 EMI 和 Surge 的前提下容量可以减半。

## 输出电容的选择

输出电容的作用是滤除电感电流中的交流成分，提供稳定的直流电压给负载，一般根据输出电压纹波要求来选取合适的电容。当输出电流恒定时，输出纹波主要由输出电容的ESR以及容量决定。

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

实际应用中，为了得到较小的 ESR，电容量相对比较大，由容量 $\sharp ^ { \sharp }$ 生的输出电压纹波很小，几乎可以忽略，因此电压纹波主要由电容的 ESR 产生：

$$
\Delta V _ {E S R} = \Delta I _ {L} * E S R (\mathsf {C C M})
$$

$$
\Delta V _ {E S R} = I _ {L I M I T \_ M A X} * E S R (\mathrm{DCM})
$$

过大的 ESR 不仅产生较大的输出电压纹波，还可能导致电容产生损耗而发热，缩短电解电容的寿命。

BP8521C 的输出电容值，建议选取 $1 0 0 \mu \mathsf { F } _ { \mathrm { c } }$

## 假负载计算

当输出空载时，需要一个假负载为电感电流提供回路，从而稳定输出电压，电感的平均电流即为假负载的电流。

$$
I _ {A V G} = \frac {1}{2} * I _ {L} * (T _ {O N} + T _ {O F F}) * f _ {S \_ M I N}
$$

其中，I<sub>L</sub>为空载时电感峰值电流：

$$
\frac {V _ {I N \_ M A X}}{L} * t _ {D e l a y} + I _ {L I M I T}
$$

I<sub>LIMIT</sub> 为空载工作时的限流值，f<sub>S\_MIN</sub> 为芯片最低频率， ${ \mathsf { T } } _ { { \mathsf { O N } } } .$ T<sub>OFF</sub>分别为空载时 MOSFET开通和关断时间：

$$
T _ {O N} = \frac {L * I _ {L}}{V _ {I N \_ M A X}}
$$

$$
T _ {O F F} = \frac {L * I _ {L}}{V _ {O U T} + V _ {D i o d e}}
$$

$$
R _ {L} = \frac {V _ {O U T}}{I _ {A V G}}
$$

以上计算未考虑芯片自供电电流通过假负载，实际需要的假负载电流稍大。BP8521C 的假负载电流建议 3.3mA 左右，即选取 1kΩ电阻。

## PCB Layout 指南

在设计 BP8521C 应用 PCB时，需要遵循以下建议：

1) VOUT 和 FB 引脚应避免铺铜，且远离母线电压、母线地和输出电感，以防止反馈信号受到干扰。

2) IC-GND引脚能很好地起到散热作用，可以在PCB上铺铜来降低芯片的温度，但是IC-GND为电压动点（相对母线地电压），在满足散热的条件下，铺铜面积应尽量小以减少噪声辐射。同时建议IC-GND引脚远离交流输入端，以避免耦合产生的 EMI 问题。

3) Buck 变换器中，DRAIN 引脚是芯片内部 MOSFET 的漏极，接输入电容正端，为电压静点。建议铺铜以提高芯片的散热能力。同时建议注意 DRAIN 脚与其他引脚的走线距离。

4) 为了达到较好的 EMI 表现，建议尽可能减小功率环路的面积。以 Buck 变换器为例，输入母线电容、芯片内部MOSFET、芯片内部续流二极管形成的环路容易产生辐射噪声，因此母线电容应尽量靠近芯片漏极以缩小此环路面积。芯片内部续流二极管、输出电感、输出电容形成的环路面积也应尽量减小。

5) 输出电感容易产生电磁干扰，建议远离芯片 FB 和 VOUT引脚，同时远离交流输入端以避免 EMI 问题。

WITH PLATING

## 封装信息

SOP-8 封装外形尺寸  
![](images/ad06bf55cfbd6527e2d5d9391539da235549dae4328304a1bba94a5d43db5daf.jpg)

![](images/62df2273b54e998447c1383b005706b46b6176aad8b83180fdcddffc7fefb397.jpg)

![](images/1651d158f55ffa9885e89adffdb730e244c58ad6287ab85a354054e7602ad682.jpg)  
SECTION B-B

<table><tr><td rowspan="2">SYMBOL</td><td colspan="3">MILLIMETER</td></tr><tr><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A</td><td>1.30</td><td>__</td><td>1.80</td></tr><tr><td>A1</td><td>0.05</td><td>__</td><td>0.25</td></tr><tr><td>A2</td><td>1.25</td><td>1.40</td><td>1.65</td></tr><tr><td>b</td><td>0.33</td><td>__</td><td>0.51</td></tr><tr><td>c</td><td>0.17</td><td>__</td><td>0.25</td></tr><tr><td>D</td><td>4.70</td><td>4.90</td><td>5.10</td></tr><tr><td>E</td><td>5.80</td><td>6.00</td><td>6.30</td></tr><tr><td>E1</td><td>3.70</td><td>3.90</td><td>4.10</td></tr><tr><td>e</td><td colspan="3">1.27BSC</td></tr><tr><td>L</td><td>0.40</td><td>__</td><td>1.00</td></tr></table>

![](images/a51a575193ff0b1935764cb882cc7ea0bda98ca492cdccabdfb65899c553bf6c.jpg)

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev.1.0</td><td>2021/08</td><td>首次发行</td></tr><tr><td>Rev.1.1</td><td>2025/12</td><td>改基本电气性能参数,增加 $I_D$ 参数</td></tr></table>

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。 。

## 电子器件报废说明

该产品在生命周期结束后，由客户按照一般电子产品的报废流程进行处理。