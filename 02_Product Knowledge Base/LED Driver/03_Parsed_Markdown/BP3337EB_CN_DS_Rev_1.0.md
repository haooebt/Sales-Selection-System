## 概述

BP3337EB 是一款高精度的低 PF 原边反馈 LED 恒流控制芯片，适合搭配前级 APFC 升压电路，实现两级隔离无频闪应用。

BP3337EB 内置精确的导通时间限制和过流保护功能，在输入电压下降的时候可以有效限制电感电流上升，防止电感饱和，提升系统可靠性。

BP3337EB 工作在电感电流临界连续模式，降低开关损耗及 EMI，提升变压器的利用率。

BP3337EB 提供完善的保护功能，包括输出开路保护、输出短路保护、逐周期限流保护、过温保护等。

BP3337EB 采用 DIP-7 封装。

![](images/cd17f069412617aad6a82449d8144b57e547729f9887af759525392e876ae249.jpg)

## 特点

■ 内置高压启动，启动速度快

■ 高精度电流参考(+/-3%)

■ 优异的负载调整率

■ 临界导通模式

■ 低工作电流

■ VCC 欠压锁定

逐周期限流

■ 输出开路/短路保护

■ 过温降电流

■ 支持 DIP-7 封装

## 应用领域

■ LED 面板灯

■ LED 筒灯

## 典型应用

DIP-7 封装  
![](images/1f799c39b67e716474e60db519a7d1b38b7aa91802a360e41a9d983a28093ccf.jpg)  
图 1 BP3337EB 典型应用电路

Z: 预留

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP3337EB</td><td>DIP-7</td><td>管装50颗/管</td><td>BP3337EXXXXXYZXXYYWWB</td></tr></table>

## 管脚封装

BP3337EB: 产品型号

![](images/e2fe53459555d77ab4db59dce5323a170b1a434e2c607d8058d456c599a006ea.jpg)  
XXXXXY: 批次  
XXYY: 标识  
WW: 周号

图 2 DIP-7 管脚封装图

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>GND</td><td>芯片地</td></tr><tr><td>2</td><td>COMP</td><td>环路补偿脚</td></tr><tr><td>3</td><td>FB</td><td>反馈信号采样脚</td></tr><tr><td>4</td><td>CS</td><td>原边电流采样脚,接采样电阻到地</td></tr><tr><td>5</td><td>DRAIN</td><td>内置 MOS 管漏极</td></tr><tr><td>6</td><td>DRAIN</td><td>内置 MOS 管漏极</td></tr><tr><td>7</td><td>VCC</td><td>芯片供电脚</td></tr></table>

## 极限参数(注1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td> $I_{CC\_MAX}$ </td><td>VCC 引脚最大电流</td><td>10</td><td>mA</td></tr><tr><td> $V_{DRAIN}$ </td><td>内置MOS管漏极</td><td>-0.3~650</td><td>V</td></tr><tr><td> $V_{IO}$ </td><td>CS/FB/COMP等引脚电压范围</td><td>-0.3~6</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注 2)</td><td>0.9</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>结到环境的热阻(注 3)</td><td>80</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40~150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55~150</td><td>°C</td></tr></table>

注1：最大极限值是指超出该工作范围，芯片有可能损坏。推荐工作范围是指在该范围内，器件功能正常，但并不完全保证满足个别性能指标。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。

注2：温度升高最大功耗一定会减小，这也是由 $T_{JMAX}, \theta_{JA}$ 和环境温度 $T_A$ 所决定的。最大允许功耗为 $P_{DMAX} = (T_{JMAX} - T_A) / \theta_{JA}$ 或是极限范围给出的数字中比较低的那个值。

注 3：1 平方英寸双层 PCB 板，按照 JEDEC 标准测试。

## 电气参数(注4)（无特别说明情况下， $T_{A}=25^{\circ}C$ ）

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">电源电压(VCC)</td></tr><tr><td> $V_{CC\_CLAMP}$ </td><td> $V_{CC}$ 钳位电压</td><td> $I_{CC}=1mA$ </td><td>15</td><td>17</td><td>19</td><td>V</td></tr><tr><td> $V_{CC\_ON}$ </td><td> $V_{CC}$ 启动电压</td><td> $V_{CC}$ 上升</td><td>13.5</td><td>15</td><td>16.5</td><td>V</td></tr><tr><td> $V_{CC\_UVLO}$ </td><td> $V_{CC}$ 欠压保护阈值</td><td> $V_{CC}$ 下降</td><td>6.7</td><td>7.5</td><td>8.3</td><td>V</td></tr><tr><td> $I_{QUIESCENT}$ </td><td> $V_{CC}$ 静态工作电流</td><td>无开关动作</td><td>0.1</td><td>0.18</td><td>0.27</td><td>mA</td></tr><tr><td colspan="7">误差放大器(COMP)</td></tr><tr><td> $G_m$ </td><td>误差放大器跨导</td><td></td><td></td><td>60</td><td></td><td>μA/V</td></tr><tr><td> $V_{COMP}$ </td><td>COMP线性工作范围</td><td></td><td>1.5</td><td></td><td>4.5</td><td>V</td></tr><tr><td> $V_{REF}$ </td><td>内部基准电压</td><td></td><td>194</td><td>200</td><td>206</td><td>mV</td></tr><tr><td colspan="7">电流采样(CS)</td></tr><tr><td> $V_{CS\_TH1}$ </td><td>逐周期限流阈值1</td><td>FB≤0.4V</td><td></td><td>0.2</td><td></td><td>V</td></tr><tr><td> $V_{CS\_TH2}$ </td><td>逐周期限流阈值2</td><td>FB&gt;0.4V</td><td>0.25</td><td>0.3</td><td>0.35</td><td>V</td></tr><tr><td> $T_{LEB}$ </td><td>前沿消隐时间</td><td></td><td></td><td>300</td><td></td><td>ns</td></tr><tr><td> $T_{DELAY}$ </td><td>芯片关断延迟</td><td></td><td></td><td>200</td><td></td><td>ns</td></tr><tr><td colspan="7">零电流检测及输出开路保护(FB)</td></tr><tr><td> $V_{FB\_FALL}$ </td><td>FB下降阈值电压</td><td>FB下降</td><td></td><td>0.1</td><td></td><td>V</td></tr><tr><td> $V_{FB\_HYS}$ </td><td>FB迟滞电压</td><td>FB上升</td><td></td><td>0.1</td><td></td><td>V</td></tr><tr><td> $V_{FB\_OVP}$ </td><td>FB过压保护阈值</td><td></td><td>1.4</td><td>1.5</td><td>1.6</td><td>V</td></tr><tr><td colspan="7">内部时间控制</td></tr><tr><td> $T_{ON\_MAX}$ </td><td>最大开通时间</td><td></td><td>7</td><td>9.5</td><td>12</td><td>us</td></tr><tr><td> $T_{OFF\_MIN}$ </td><td>最小关断时间</td><td></td><td></td><td>4.5</td><td></td><td>us</td></tr><tr><td> $T_{OFF\_MAX}$ </td><td>最大关断时间</td><td></td><td></td><td>130</td><td></td><td>us</td></tr><tr><td colspan="7">内置MOS</td></tr><tr><td> $R_{DS\_ON}$ </td><td>MOSFET导通阻抗</td><td></td><td></td><td>1.8</td><td></td><td>Ω</td></tr><tr><td> $BV_{DSS}$ </td><td>MOSFET漏源极击穿电压</td><td></td><td>650</td><td></td><td></td><td>V</td></tr><tr><td colspan="7">过热调节部分</td></tr><tr><td> $T_{REG}$ </td><td>过热调节温度</td><td></td><td></td><td>150</td><td></td><td>°C</td></tr></table>

注4：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。

## 内部结构框图

![](images/621b24941467fb2f3ae89f4f8d598748b379a8e55564792e3d5a3099d605a016.jpg)  
图 3 BP3337EB 内部框图

## 功能描述

BP3337EB 是一款高精度的原边反馈 LED 恒流控制芯片，适合搭配前级 Boost APFC 升压电路，实现两级隔离无频闪应用。

## 启动

系统上电以后，母线电压无需启动电阻通过芯片 DRAIN 端对 VCC 电容充电，当 VCC 电压达到芯片开启阈值时，芯片内部控制电路开始工作，COMP 电压被快速上拉到 1.7V 左右。然后 BP3337EB 开始输出脉冲信号，系统刚开始工作在 7kHz。当 FB 引脚检测到正向电平大于 0.4V 以后，BP3337EB 转为闭环工作。

## 恒流控制，输出电流设置

BP3337EB 采用了专有的电流采样机制, 工作于原边反馈模式, 无需次级反馈电路, 即可实现高精度输出恒流控制。

LED 输出电流计算方法:

$$
I _ {o u t} \approx \frac {V _ {R E F}}{2 \times R _ {c s}} \times \frac {N _ {P}}{N _ {S}}
$$

其中：

$V_{REF}$ 是内部基准电压

$N_{P}$ 是变压器原边绕组的匝数

$N_{s}$ 是变压器次级绕组的匝数

$R_{cs}$ 是电流采样电阻的值

## 反馈网络

BP3337EB 通过 FB 引脚检测输出电流过零的状态，FB 的下降阈值电压设置在 0.1V，迟滞电压为 0.1V。

FB 引脚也可以用来探测输出过压保护(OVP)，阈值为 1.5V。
FB 的上下分压电阻比例可以设置为：

$$
\frac {R _ {F B L}}{R _ {F B L} + R _ {F B H}} \approx \frac {1 . 5 V}{V _ {O V P}} \times \frac {N _ {S}}{N _ {A}}
$$

其中：

$R_{FBL}$ 是反馈网络的下分压电阻

$R_{FBH}$ 是反馈网络的上分压电阻

$V_{OVP}$ 是输出电压过压保护设定值

$N_{s}$ 是变压器次级绕组的匝数

$N_{A}$ 是变压器辅助绕组的匝数

## 过温调节功能

BP3337EB 具有过热调节功能, 在驱动电源过热时逐渐减小输出电流, 从而控制输出功率和温升, 使电源温度保持在设定值, 以提高系统的可靠性。芯片内部设定过热调节温度点为 $150^{\circ} \mathrm{C}$ 。

## 保护功能

BP3337EB 内置多重保护功能，保证了系统可靠性。

当 LED 开路时，输出电压逐渐上升，FB 检测到的电压也会跟随上升。当 FB 检测到的电压升高到 1.5V OVP 阈值时，会触发保护逻辑并停止开关工作，芯片进入故障保护状态。当 LED 短路时，FB 检测不到退磁信号，系统工作在 7kHz低频。若经过 100 个连续的开关周期后仍未解除输出短路故障状态，芯片进入故障保护状态。

系统进入故障保护状态后，芯片以约 $42\mu A$ 左右的电流对 VCC 电压放电，当 VCC 到达欠压保护阈值时，系统将重启。同时系统不断的检测系统状态，如果故障解除，系统会重新开始正常工作。

当输出短路或者变压器饱和时，CS 峰值电压将会比较高。当 CS 电压上升到内部限制值时，该开关周期马上停止。此逐周期限流功能可以保护功率 MOS 管、变压器和输出续流二极管。

## PCB Layout 指南

在设计 BP3337EB 应用 PCB 时，需要遵循以下建议：

1) VCC 的旁路电容需要紧靠芯片 VCC 和 GND 引脚。

2) 电流采样电阻的功率地线尽可能粗，且要离芯片的地尽量近，以保证电流采样的准确性，否则可能会影响输出电流的调整率。线电压补偿用的电阻必须尽量靠近芯片 CS 引脚。另外，信号地需要单独连接到芯片的地引脚。

3) 减小大电流环路的面积，如变压器原边、功率管及吸收网络的环路面积，以及变压器次级、次级二极管、输出电容的环路面积，以减小EMI辐射。

4) 接到 FB 的分压电阻必须靠近 FB 引脚，且节点要远离变压器的动点，否则系统噪声容易误触发 FB OVP 保护功能。

## 封装信息

DIP-7 封装外形尺寸  
![](images/7df0ad8a88e8867e46a20c5039b61b1f6726f6ab8cb52f676732c583bc73fc76.jpg)

![](images/7abcf94e58b9ef3afca46a71629b765cca35fc8814af32c37c458f8ee483a2c6.jpg)

![](images/56c2930b81bdbcb28edfcbc0cafd13b0cdce4ce344391387835a3c13a1982d93.jpg)

![](images/c2e58538caf76e22f1c34ab3d967d4588cc2118aec7b70f3859d156f505865b6.jpg)  
WITH PLATING

SECTION B-B

<table><tr><td rowspan="2">SYMBOL</td><td colspan="3">MILLIMETER</td></tr><tr><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A</td><td>—</td><td>—</td><td>4.80</td></tr><tr><td>A1</td><td>0.40</td><td>—</td><td>—</td></tr><tr><td>A2</td><td>3.10</td><td>—</td><td>3.50</td></tr><tr><td>b</td><td>0.355</td><td>—</td><td>0.559</td></tr><tr><td>B1</td><td colspan="3">1.52REF</td></tr><tr><td>c</td><td>0.203</td><td>—</td><td>0.356</td></tr><tr><td>D</td><td>9.10</td><td>—</td><td>9.45</td></tr><tr><td>E</td><td>6.25</td><td>—</td><td>6.70</td></tr><tr><td>e</td><td>2.44</td><td>2.54</td><td>2.64</td></tr><tr><td>E1</td><td>7.62</td><td>—</td><td>10.90</td></tr><tr><td>L</td><td>2.92</td><td>—</td><td>3.81</td></tr></table>

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev.1.0</td><td>2021/04</td><td>首次发行</td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。