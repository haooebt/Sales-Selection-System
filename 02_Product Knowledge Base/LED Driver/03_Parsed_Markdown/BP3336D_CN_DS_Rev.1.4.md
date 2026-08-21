## 概述

BP3336D 是一款单级 APFC 的高精度原边反馈 LED恒流驱动器,内置 650V 高压 MOSFET，适用于90Vac-277Vac 全范围输入电压。

BP3336D 芯片采用固定导通时间的控制机制，能够实现高功率因数。内置 THD 优化模块可以进一步降低了THD，针对全电压输入，可以实现THD<15%。开关工作在临界导通模式，降低开关损耗及 EMI。

BP3336D内置高压启动，搭配快速启动控制，可以在全电压输入下实现小于500ms以内的启动时间。

BP3336D内置输入电压和负载补偿线路，可以实现 极佳的线性调整率和负载调整率。

BP3336D 可以支持单绕组浮地 Buck-boost 或者两绕组/三绕组的隔离Flyback 拓扑。

BP3336D 采用 SOP-8 封装。

## 特点

◼ 输入 90-277Vac

◼ 高 PF 低 THD(PF>0.9，THD<15%)

◼ 支持双绕组Flyback拓扑，无需辅助绕组

◼ 内置高压启动，启动时间<500ms

◼ 高精度电流参考(+/-3%)

◼ 优异的线性、负载调整率

◼ 临界导通模式

◼ 低工作电流

◼ VCC 欠压锁定

◼ 逐周期限流

◼ 输出开路/短路保护

◼ 过温降电流

◼ 支持 SOP-8 封装

## 应用

LED 内置/外置电源

◼ 灯管驱动

## 典型应用

![](images/983dc27820d9dc2546f07666e8fcd11f38dee2427dbd4899e4068cb78a6a78da.jpg)  
图 1 BP3336D 浮地双绕组典型应用图

![](images/48adb987d833413499c04f59f81a31b3ec04bf1aa3e9bcca474ca315ed3bb4fa.jpg)  
图 2 BP3336D实地三绕组典型应用图

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>温度范围</td><td>包装形式</td><td>打印</td></tr><tr><td>BP3336D</td><td>SOP-8</td><td>-40 °C到105 °C</td><td>4000pcs/盘</td><td>BP3336D12345CXH1XXWWX</td></tr></table>

## 管脚封装

![](images/6a85607d0f5c4cc3252f6810ed9b6e210a70df49c000e83a7f4d6534f194f0ee.jpg)

12345：lot codeC：供应商WW：周号X：补位

图3 管脚封装图

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>COMP</td><td>环路补偿脚</td></tr><tr><td>2</td><td>FB</td><td>反馈信号采样脚</td></tr><tr><td>3</td><td>NC</td><td>悬空</td></tr><tr><td>4</td><td>CS</td><td>原边电流采样脚,接采样电阻到地</td></tr><tr><td>5</td><td>DRAIN</td><td>内置 MOSFET 漏极</td></tr><tr><td>6</td><td>NC</td><td>悬空</td></tr><tr><td>7</td><td>VCC</td><td>芯片供电脚</td></tr><tr><td>8</td><td>GND</td><td>芯片地</td></tr></table>

极限参数(注 1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td> $I_{VCC\_MAX}$ </td><td>VCC引脚最大电流</td><td>10</td><td>mA</td></tr><tr><td> $V_{BR\_DSS}$ </td><td>MOSFET漏源极击穿电压</td><td>-0.3-650</td><td>V</td></tr><tr><td> $V_{IO}$ </td><td>CS/FB/COMP 等引脚电压范围</td><td>-0.3~6</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注 2)</td><td>0.45</td><td>W</td></tr><tr><td> $θ_{JA}$ </td><td>PN 结到环境的热阻</td><td>150</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40 to 150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55 to 150</td><td>°C</td></tr></table>

注 1：最大极限值是指超出该工作范围，芯片有可能损坏。推荐工作范围是指在该范围内，器件功能正常，但并不完全保证满足个别性能指标。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。注 2：温度升高最大功耗一定会减小，这也是由 T<sub>JMAX</sub>, θ<sub>JA</sub>,和环境温度 T<sub>A</sub>所决定的。最大允许功耗为 $\mathrm { { P _ { D M A X } } \ = \ \left( T _ { J M A X } \ - \ \bar { \ T } _ { A } \right) / }$ θ 或是极限范围给出的数字中比较低的那个值。

规格参数(注 3,4)：

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">电源电压(VCC)</td></tr><tr><td> $V_{CC\_CLAMP}$ </td><td> $V_{CC}$ 钳位电压</td><td>1mA</td><td></td><td>17</td><td>19</td><td>V</td></tr><tr><td> $V_{CC\_ON}$ </td><td> $V_{CC}$ 启动电压</td><td> $V_{CC}$ 上升</td><td>13.5</td><td>15</td><td>16.5</td><td>V</td></tr><tr><td> $V_{CC\_UVLO}$ </td><td> $V_{CC}$ 欠压保护阈值</td><td> $V_{CC}$ 下降</td><td></td><td>7.5</td><td></td><td>V</td></tr><tr><td> $I_{QUIESCENT}$ </td><td> $V_{CC}$ 静态工作电流</td><td>无开关动作</td><td></td><td></td><td>0.27</td><td>mA</td></tr><tr><td colspan="7">误差放大器(COMP)</td></tr><tr><td> $G_m$ </td><td>误差放大器跨导</td><td></td><td></td><td>60</td><td></td><td>uA/V</td></tr><tr><td> $V_{COMP}$ </td><td>COMP线性工作范围</td><td></td><td>1.5</td><td></td><td>4.5</td><td>V</td></tr><tr><td> $V_{REF}$ </td><td>内部基准电压</td><td></td><td>194</td><td>200</td><td>206</td><td>mV</td></tr><tr><td colspan="7">电流采样(CS)</td></tr><tr><td> $V_{CS\_TH}$ </td><td>逐周期限流阈值</td><td></td><td></td><td>1</td><td></td><td>V</td></tr><tr><td> $T_{LEB}$ </td><td>前沿消隐时间</td><td></td><td></td><td>300</td><td></td><td>ns</td></tr><tr><td> $T_{DELAY}$ </td><td>芯片关断延迟</td><td></td><td></td><td>200</td><td></td><td>ns</td></tr><tr><td colspan="7">零电流检测及输出开路保护(FB)</td></tr><tr><td> $V_{FB\_FALL}$ </td><td>FB下降阈值电压</td><td>FB下降</td><td></td><td>0.1</td><td></td><td>V</td></tr><tr><td> $V_{FB\_HYS}$ </td><td>FB迟滞电压</td><td>FB上升</td><td></td><td>0.1</td><td></td><td>V</td></tr><tr><td> $V_{FB\_OVP}$ </td><td>FB过压保护阈值</td><td></td><td>1.4</td><td>1.5</td><td>1.6</td><td>V</td></tr><tr><td colspan="7">内部时间控制</td></tr><tr><td> $T_{ON\_MAX}$ </td><td>最大开通时间</td><td></td><td></td><td>20</td><td></td><td>us</td></tr><tr><td> $T_{OFF\_MIN}$ </td><td>最小关断时间</td><td></td><td></td><td>4.5</td><td></td><td>us</td></tr><tr><td> $T_{OFF\_MAX}$ </td><td>最大关断时间</td><td></td><td></td><td>130</td><td></td><td>us</td></tr><tr><td colspan="7">内置MOS漏极(DRAIN)</td></tr><tr><td> $V_{BR\_DSS}$ </td><td>MOSFET漏源极击穿电压</td><td></td><td>650</td><td></td><td></td><td>V</td></tr><tr><td> $R_{DS\_ON}$ </td><td>MOSFET导通阻抗</td><td></td><td></td><td>2.15</td><td></td><td>Ω</td></tr><tr><td colspan="7">过热调节部分</td></tr><tr><td> $T_{REG}$ </td><td>过热调节温度</td><td></td><td></td><td>150</td><td></td><td>°C</td></tr></table>

注 3：典型参数值为 25˚C 下测得的参数标准。

注 4：规格书的最小、最大规范范围

## 内部结构框图

![](images/57945af6351f8e79cc10b440bc599aa406b9628aafb03582d4e4104f88a418a3.jpg)

## 应用信息

BP3336D 是一款单级APFC 的高精度原边反馈LED 恒流控制芯片，适用于 90Vac-277Vac 全范围输入电压，支持隔离/非隔离应用。

## 1 启动

系统上电以后，母线电压通过芯片内部JFET对VCC 电容充电，当VCC电压达到芯片开启阈值时，芯片内部控制电路开始工作，COMP电压被快速上拉到 1.7V左右。然后BP3336D开始输出脉冲信号，系统刚开始以6us的恒定 ton工作。当FB 引脚检测到正向电平大于 0.4V以后，BP3336D转为闭环工作，内部跨导放大器对 COMP电容进行缓慢充电，实现软启动。

## 2 恒流控制，输出电流设置

BP3336D 采用了专有的电流采样机制，工作于原边反馈模式，无需次级反馈电路，即可实现高精度输出恒流控制。

LED 输出电流计算方法：

$$
I _ {o u t} \approx \frac {V _ {R E F}}{2 \times R _ {c s}} \times \frac {N _ {P}}{N _ {S}}
$$

其中，

V<sub>REF</sub>是内部基准电压

Np 是变压器主级绕组的匝数

Ns 是变压器次级绕组的匝数

Rcs 是电流采样电阻的值

## 3 反馈网络

BP3336D 通过 FB引脚检测输出电流过零的状态，FB 的下降阈值电压设置在0.1V，迟滞电压为

0.1V。FB引脚还用来探测输入电压，并根据输入电压大小延长开关的开通时间。

FB 引脚也可以用来探测输出过压保护（OVP），阈值为 1.5V。FB的上下分压电阻比例可以设置为：

$$
\frac {R _ {F B L}}{R _ {F B L} + R _ {F B H}} \approx \frac {1 . 5 V}{V _ {O V P \_ F B}} \times \frac {N _ {S}}{N _ {A}}
$$

其中，

R<sub>FBL</sub>是反馈网络的下分压电阻

R<sub>FBH</sub>是反馈网络的上分压电阻

V<sub>OVP\_FB</sub>是输出电压过压保护设定点

Ns 是变压器次级绕组的匝数

NA 是变压器辅助绕组的匝数

## 4 线电压补偿

BP3336D 内置线电压补偿功能，对于宽电压输入的应用，由 CS引脚内部的电阻（2kΩ）进行线电压补偿。

## 5 过温调节功能

BP3336D 具有过热调节功能，在驱动电源过热时逐渐减小输出电流，从而控制输出功率和温升，使电源温度保持在设定值，以提高系统的可靠性。芯片内部设定过热调节温度点为 150℃。

## 6 保护功能

BP3336D 内置多重保护功能，保证了系统可靠性。

当 LED 开路时，输出电压逐渐上升，FB检测到的电压也会跟随上升。当 FB 检测到的电压升高到 1.5V OVP 阈值时，会触发保护逻辑并停止开关工作，芯片进入故障保护状态。

当 LED 短路时，FB检测不到退磁信号，系统工作在7 kHz 低频。若经过100个连续的开关周期后仍未解除输出短路故障状态，芯片进入故障保护状态。

系统进入故障保护状态后， 芯片以约 42uA 左右的电流对 VCC电压放电， 当 VCC到达欠压保护阈值时，系统将重启。同时系统不断的检测系统状态，如果故障解除，系统会重新开始正常工作。

当输出短路或者变压器饱和时，CS 峰值电压将会比较高。当 CS 电压上升到内部限制值（1V）时，该开关周期马上停止。此逐周期限流功能可以保护功率 MOS 管、变压器和输出续流二极管。 7

## 7 PCB 设计

在设计 BP3336D PCB 板时，需要注意以下事项： T

旁路电容

VCC 的旁路电容需要紧靠芯片 VCC和 GND 引脚。

## 地线

电流采样电阻的功率地线尽可能粗，且要离芯片的地(Pin8)尽量近，以保证电流采样的准确性，否则可能会影响输出电流的调整率。另外，信号地需要单独连接到芯片的地引脚。

## 功率环路的面积

减小大电流环路的面积，如变压器主级、功率管及吸收网络的环路面积，以及变压器次级、 次级二极管、输出电容的环路面积，以减小 EMI辐射。

## FB 引脚

接到 FB 的分压电阻必须靠近FB 引脚，且节点要远离变压器的动点，否则系统噪声容易误触发 FBOVP 保护功能。

## 封装信息

![](images/74588bf63248869f2c28ae8d491fb41e19910d33b3ad12e958df61de7dae736d.jpg)

<table><tr><td rowspan="2">Symbol</td><td colspan="2">Dimensions In Millimeters</td><td colspan="2">Dimensions In Inches</td></tr><tr><td>Min</td><td>Max</td><td>Min</td><td>Max</td></tr><tr><td>A</td><td>1.350</td><td>1.750</td><td>0.053</td><td>0.069</td></tr><tr><td>A1</td><td>0.100</td><td>0.250</td><td>0.004</td><td>0.010</td></tr><tr><td>A2</td><td>1.350</td><td>1.550</td><td>0.053</td><td>0.061</td></tr><tr><td>b</td><td>0.330</td><td>0.510</td><td>0.013</td><td>0.020</td></tr><tr><td>c</td><td>0.170</td><td>0.250</td><td>0.006</td><td>0.010</td></tr><tr><td>D</td><td>4.700</td><td>5.100</td><td>0.185</td><td>0.200</td></tr><tr><td>E</td><td>3.800</td><td>4.000</td><td>0.150</td><td>0.157</td></tr><tr><td>E1</td><td>5.800</td><td>6.200</td><td>0.228</td><td>0.244</td></tr><tr><td>e</td><td colspan="2">1.270 (BSC)</td><td colspan="2">0.050 (BSC)</td></tr><tr><td>L</td><td>0.400</td><td>1.270</td><td>0.016</td><td>0.050</td></tr><tr><td>θ</td><td> $0^{\circ}$ </td><td> $8^{\circ}$ </td><td> $0^{\circ}$ </td><td> $8^{\circ}$ </td></tr></table>

<table><tr><td>重要声明</td></tr><tr><td>晶丰明源尽力确保本产品规格书内容的准确和可靠,但是保留在没有通知的情况下,修改规格书内容的权利。</td></tr><tr><td>本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息,晶丰明源不做任何明示或暗示的保证,包括但不限于对规格书内容的准确性、商业上的适销性,特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证,晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。</td></tr></table>