## BP3332EB 支持高效率的低 PF 反激原边恒流驱动器

## 概述

BP3332EB 是一款支持高效率设计的低 PF 原边反馈 LED 恒流驱动器。BP3332EB 内置 700V MOSFET，适合搭配前级 APFC 升压电路，实现两级隔离无频闪应用。

BP3332EB 的 CS 引脚支持通过拨码开关选择不同电阻进行输出电流设置。既可避免拨码开关流经大电流，延长使用寿命，也可避免功率回路走线过长，提高恒流精度。

BP3332EB 内置精确的导通时间限制和过流保护功能，在输入电压下降的时候可以有效限制电感电流上升，防止电感饱和，提升系统可靠性。

BP3332EB 工作在电感电流临界连续模式，降低开关损耗及EMI，提升变压器的利用率。

BP3332EB 提供完善的保护功能，包括输出开路保护、输出短路保护、逐周期限流保护、过温保护等。

BP3332EB 采用 BPSOP-10D 封装。

## 特点

■ 内置 700V MOSFET，支持高效率应用

■ 支持高频率小型化应用

■ 支持深度拨码应用

■ 内置高压启动，启动速度快

■ 高精度电流参考(+/-3%)

■ 优秀的负载调整率

■ 临界导通模式，EMC 优化

■ 低工作电流

■ 拨码开关调电流不影响OVP

■ VCC 欠压锁定(UVLO)

■ 保护功能

逐周期限流 (OCP)

输出短路保护（SCP）

输出开路保护（OVP）

过温保护（OTP）

## 应用领域

LED筒灯

■ LED 面板灯

## 典型应用

![](images/09701b21a51932f4d786df4ca01d88540d87740cccd86a375e52a5cc0852b3ed.jpg)  
注：该线路及参数仅供参考，实际应用电路和参数请通过试验充分验证。  
图 1. BP3332EB 典型应用电路

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP3332EB</td><td>BPSOP-10D</td><td>卷盘4,000PCS/盘</td><td>BP3332XXXXXYEXYYYWWB</td></tr></table>

## 管脚封装

![](images/6d20cd815e201651eaf0985018515920722e46f4ca9e8b00919bcc557eb88f7f.jpg)  
BP3332EB：产品型号
XXXXXY: 批次号
XYYY: 内部标示
WW: 周号  
图 2. BPSOP-10D 管脚封装图

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>VCC</td><td>芯片供电脚</td></tr><tr><td>2</td><td>COMP</td><td>环路补偿脚</td></tr><tr><td>3</td><td>FB</td><td>反馈信号采样脚</td></tr><tr><td>4</td><td>CS</td><td>原边电流采样脚,采样电阻接在 CS 和 GND 之间</td></tr><tr><td>5</td><td>SOURCE</td><td>内置 MOS 管源极</td></tr><tr><td>6、7</td><td>DRAIN</td><td>内置 MOS 管漏极</td></tr><tr><td>8</td><td>HV</td><td>高压启动脚</td></tr><tr><td>9</td><td>NC</td><td>无连接。NC 引脚应用时请勿连接其它节点,包括 HV 和 DRAIN。</td></tr><tr><td>10</td><td>GND</td><td>芯片地</td></tr></table>

## 极限参数(注1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td> $V_{SW}$ </td><td>内部高压功率管耐压</td><td>-0.3~700</td><td>V</td></tr><tr><td> $V_{HV}$ </td><td>HV引脚电压</td><td>-0.3~700</td><td>V</td></tr><tr><td> $I_{VCC\_MAX}$ </td><td>VCC引脚最大电流</td><td>10</td><td>mA</td></tr><tr><td> $V_{CS}$ </td><td>CS引脚电压</td><td>-0.3~6</td><td>V</td></tr><tr><td> $V_{FB}$ </td><td>FB引脚电压</td><td>-0.3~6</td><td>V</td></tr><tr><td> $V_{COMP}$ </td><td>COMP引脚电压</td><td>-0.3~6</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注2)</td><td>0.9</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>结到环境的热阻(注3)</td><td>110</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40~150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55~150</td><td>°C</td></tr><tr><td rowspan="2">ESD</td><td>除HV引脚外(注4)</td><td>2</td><td>kV</td></tr><tr><td>HV引脚</td><td>1</td><td>kV</td></tr></table>

注1：极限参数是指超出该范围，有可能导致器件永久性损坏。极限参数为器件应力的额定值，长期工作在极限参数条件可能会影响器件的可靠性。  
注2：温度升高最大功耗一定会减小，这也是由 $T_{JMAX}, \theta_{JA}$ 和环境温度 $T_A$ 所决定的。最大允许功耗为 $P_{DMAX} = (T_{JMAX} - T_A) / \theta_{JA}$ 或是极限范围给出的数字中比较低的那个值。  
注 3：1 平方英寸双层 PCB 板，按照 JEDEC 标准测试。  
注 4：人体模型，100pF 电容通过 1.5kΩ 电阻放电。

## 输出功率

<table><tr><td>型号</td><td>工作特点</td><td>输出功率(400 VDC)</td></tr><tr><td>BP3332EB</td><td>恒流输出</td><td>36V/1A</td></tr></table>

电气参数(注5)

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">VCC供电</td></tr><tr><td> $V_{CC\_CLAMP}$ </td><td>VCC钳位电压</td><td>1mA</td><td>15</td><td>17</td><td>19</td><td>V</td></tr><tr><td> $V_{CC\_ON}$ </td><td>VCC启动阈值电压</td><td>VCC上升至IC开启</td><td>13.5</td><td>15</td><td>16.5</td><td>V</td></tr><tr><td> $V_{CC\_UVLO}$ </td><td>VCC欠压保护开启电压</td><td>VCC下降至IC关闭</td><td>6.7</td><td>7.5</td><td>8.3</td><td>V</td></tr><tr><td> $I_{QUIESCENT}$ </td><td>VCC静态工作电流</td><td>无开关动作</td><td>0.1</td><td>0.18</td><td>0.27</td><td>mA</td></tr><tr><td colspan="7">误差放大器</td></tr><tr><td> $G_m$ </td><td>误差放大器跨导</td><td> $T_J=25°C$ </td><td></td><td>60</td><td></td><td>μA/V</td></tr><tr><td> $V_{COMP}$ </td><td>COMP线性工作范围</td><td> $T_J=25°C$ </td><td>1.5</td><td></td><td>4.5</td><td>V</td></tr><tr><td> $V_{REF}$ </td><td>内部基准电压</td><td> $T_J=25°C$ </td><td>194</td><td>200</td><td>206</td><td>mV</td></tr><tr><td colspan="7">控制功能</td></tr><tr><td> $T_{ON\_MAX}$ </td><td>功率管最大导通时间</td><td> $T_J=25°C$ </td><td>7</td><td>9.5</td><td>12</td><td>μs</td></tr><tr><td> $T_{OFF\_MIN}$ </td><td>功率管最小关断时间</td><td> $T_J=25°C$ </td><td></td><td>4.5</td><td></td><td>μs</td></tr><tr><td> $T_{OFF\_MAX}$ </td><td>功率管最大关断时间</td><td> $T_J=25°C$ </td><td></td><td>130</td><td></td><td>μs</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $V_{CS\_TH1}$ </td><td>逐周期限流阈值1</td><td> $T_J=25°C, FB≤0.4V$ </td><td></td><td>200</td><td></td><td>mV</td></tr><tr><td> $V_{CS\_TH2}$ </td><td>逐周期限流阈值2</td><td> $T_J=25°C, FB>0.4V$ </td><td>250</td><td>300</td><td>350</td><td>mV</td></tr><tr><td> $T_{DELAY}$ </td><td>芯片关断延迟时间</td><td> $T_J=25°C$ </td><td></td><td>200</td><td></td><td>ns</td></tr><tr><td> $T_{LEB}$ </td><td>前沿消隐时间</td><td> $T_J=25°C$ </td><td></td><td>300</td><td></td><td>ns</td></tr><tr><td colspan="7">保护功能</td></tr><tr><td> $V_{FB\_FALL}$ </td><td>FB下降阈值电压</td><td> $T_J=25°C, FB下降$ </td><td></td><td>0.1</td><td></td><td>V</td></tr><tr><td> $V_{CS\_OLP}$ </td><td>FB迟滞电压</td><td> $T_J=25°C, FB上升$ </td><td></td><td>0.1</td><td></td><td>V</td></tr><tr><td> $V_{FB\_OVP}$ </td><td>FB过压保护阈值</td><td> $T_J=25°C$ </td><td>1.4</td><td>1.5</td><td>1.6</td><td>V</td></tr><tr><td> $T_{OTP+}$ </td><td>过温保护阈值</td><td></td><td></td><td>150</td><td></td><td>°C</td></tr><tr><td colspan="7">功率管</td></tr><tr><td> $R_{DS\_ON}$ </td><td>功率管导通阻抗</td><td> $I_D=0.5A, V_{GS}=10V$ </td><td></td><td>1.9</td><td>2.4</td><td>Ω</td></tr><tr><td> $BV_{DSS}$ </td><td>功率管击穿电压</td><td> $I_D=250μA, V_{GS}=0V$ </td><td>700</td><td></td><td></td><td>V</td></tr></table>

## 内部结构框图

![](images/79d026f6729ac42c68c81d9c56d7d2885346e68c7c0aff28250eb6810f7526e1.jpg)

图 3. BP3332EB 内部框图

## 功能描述

BP3332EB 是一款支持高效率设计的低 PF 原边反馈 LED 恒流驱动器。BP3332EB 内置 700V MOSFET，适合搭配前级 APFC 升压电路，实现两级隔离无频闪应用。

## 启动

系统上电以后，母线电压通过芯片 HV 端对 VCC 电容充电，当 VCC 电压达到芯片开启阈值时，芯片内部控制电路开始工作，COMP 电压被快速上拉到 1.7V 左右。然后 BP3332EB 开始输出脉冲信号，系统刚开始工作在 7kHz。当 FB 引脚检测到正向电平大于 0.4V 以后，BP3332EB 转为闭环工作。

## 恒流控制，输出电流设置

BP3332EB 采用了特有的电流采样机制，工作于原边反馈模式，无需次级反馈电路，即可实现高精度输出恒流控制。

LED 输出电流计算方法:

$$
I _ {o u t} \approx \frac {V _ {R E F}}{2 \times R _ {c s}} \times \frac {N _ {P}}{N _ {S}}
$$

其中：

$V_{REF}$ 是内部基准电压

$N_{P}$ 是变压器主级绕组的匝数

$N_{s}$ 是变压器次级绕组的匝数

$R_{cs}$ 是电流采样电阻的值

## 反馈网络

BP3332EB 通过 FB 引脚检测输出电流过零的状态，FB 的下降阈值电压设置在 0.1V，迟滞电压为 0.1V。FB 引脚也可以用来探测输出过压保护（OVP），阈值为 1.5V。FB 的上下分压电阻比例可以设置为：

$$
\frac {R _ {F B L}}{R _ {F B L} + R _ {F B H}} \approx \frac {1 . 5 V}{V _ {O V P}} \times \frac {N _ {S}}{N _ {A}}
$$

## 其中：

$R_{FBL}$ 是反馈网络的下分压电阻 $R_{FBH}$ 是反馈网络的上分压电阻 $V_{OVP}$ 是输出电压过压保护设定值 $N_{S}$ 是变压器次级绕组的匝数 $N_{A}$ 是变压器辅助绕组的匝数

## 过温调节功能

BP3332EB 具有过热调节功能，在驱动电源过热时逐渐减小输出电流，从而控制输出功率和温升，使电源温度保持在设定值，以提高系统的可靠性。芯片内部设定过热调节温度点为 $150^{\circ}$ C。

## 保护功能

BP3332EB 内置多重保护功能，保证了系统可靠性。

当LED开路时，输出电压逐渐上升，FB检测到的电压也会跟随上升。当FB检测到的电压升高到1.5V OVP阈值时，会触发保护逻辑并停止开关工作，芯片进入故障保护状态。

当 LED 短路时，FB 检测不到退磁信号，系统工作在 7 kHz 低频。若经过 100 个连续的开关周期后仍未解除输出短路故障状态，芯片进入故障保护状态。

![](images/03e4ef289623ab8e7ad0837992fc6b3860d043b1ffd4558a871d0b1586f4a0eb.jpg)

系统进入故障保护状态后，芯片以约 $42\mu A$ 左右的电流对 VCC 电压放电，当 VCC 到达欠压保护阈值时，系统将重启。同时系统不断的检测系统状态，如果故障解除，系统会重新开始正常工作。

当输出短路或者变压器饱和时，CS 峰值电压将会比较高。当 CS 电压上升到内部限制值时，该开关周期马上停止。此逐周期限流功能可以保护功率 MOS 管、变压器和输出续流二极管。

## PCB Layout 指南

PCB 设计在设计 BP3332EBPCB 板时，需要注意以下事项：

1) VCC 的旁路电容需要紧靠芯片 VCC 和 GND 引脚。

2) 电流采样电阻的功率地线尽可能粗，且要离芯片的地尽量近，以保证电流采样的准确性，否则可能会影响输出电流的调整率。线电压补偿用的电阻必须尽量靠近芯片CS引脚。另外，信号地需要单独连接到芯片的地引脚。

3) 减小大电流环路的面积，如变压器主级、功率管及吸收网络的环路面积，以及变压器次级、次级二极管、输出电容的环路面积，以减小EMI辐射。

4) 接到 FB 的分压电阻必须靠近 FB 引脚，且节点要远离变压器的动点，否则系统噪声容易误触发 FB OVP 保护功能。

![](images/90713d77f8c13e3323044a08f82ce113f10e879342fc6780d6e80a2d8a152282.jpg)

## 封装信息

BPSOP-10D 封装外形尺寸

SIDE VIEW
侧视图

<table><tr><td colspan="4">MILLIMETER</td></tr><tr><td>SYMBOL</td><td>MIN</td><td>NOMINAL</td><td>MAX</td></tr><tr><td>A</td><td>-</td><td>-</td><td>1.75</td></tr><tr><td>A1</td><td>0.10</td><td>-</td><td>0.25</td></tr><tr><td>A2</td><td>1.35</td><td>1.45</td><td>1.55</td></tr><tr><td>A3</td><td>0.60</td><td>0.65</td><td>0.70</td></tr><tr><td>b</td><td>0.35</td><td>-</td><td>0.50</td></tr><tr><td>b2</td><td>1.60</td><td>-</td><td>1.75</td></tr><tr><td>c</td><td>0.19</td><td>-</td><td>0.25</td></tr><tr><td>D</td><td>8.50</td><td>8.60</td><td>8.70</td></tr><tr><td>E</td><td>3.80</td><td>3.90</td><td>4.00</td></tr><tr><td>E1</td><td>5.80</td><td>6.00</td><td>6.20</td></tr><tr><td>e</td><td colspan="3">1.27 BSC</td></tr><tr><td>e1</td><td colspan="3">3.175 BSC</td></tr><tr><td>e2</td><td colspan="3">3.81 BSC</td></tr><tr><td>e3</td><td colspan="3">1.905 BSC</td></tr><tr><td>L</td><td>0.40</td><td>-</td><td>0.80</td></tr></table>

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>

![](images/9f7acc58e0751d803682fe29af2278d40b9b5ef435adafa0a9fcec15d728d981.jpg)

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。