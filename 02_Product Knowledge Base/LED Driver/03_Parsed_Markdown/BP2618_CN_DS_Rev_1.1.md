## 概述

BP2618 是一款高效率、高 PF 值的 LED 驱动芯片。芯片工作在电感电流临界连续模式，适用于全压输入 Boost 架构的 LED 驱动电源。

BP2618 芯片采用先进的栅极驱动和高压供电方式，只需要很少的外围元件，即可实现优异的恒流特性，极大的节约了系统成本和体积。

BP2618 具有多重保护功能，包括 LED 开路保护（过压保护）、芯片温度过热调节等。

BP2618 采用 SOP-8 封装。

![](images/670cb3fcad2c40fdb6ec91fe9555d4d0424771d57c8d8658de94e230172c060a.jpg)  
SOP-8 封装

## 特点

内置COMP闭环恒流控制

■ 临界连续电流控制模式

■ 集成 600V 高压 JFET 供电，无 VCC 电容

■ ±5% LED 输出电流精度

■ 精准的 LED 开路保护

■ 采用 SOP-8 封装

## 应用领域

■ LED 球泡灯

■ LED 投光灯

■ 其它 LED 照明

## 典型应用

![](images/f99d045c4882fa23b249ae2aa7ab828d7346cf1c1f3e5ccb999e3678a073c339.jpg)  
图 1 BP2618 典型应用电路

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP2618</td><td>SOP-8</td><td>卷盘4,000/盘</td><td>BP2618XXXXXYZXXWWZ</td></tr></table>

## 管脚封装

![](images/d984dc77afa750e3ea5fb9533698df4551c7ae5ca33f05aec537fc02ae021a19.jpg)  
BP2618: 产品型号  
XXXXXY: 批次  
XX: 标识  
WW: 周号  
Z: 预留  
图 2 SOP-8 管脚封装图

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>RTH</td><td>过温调节起始温度设置及NTC功能</td></tr><tr><td>2</td><td>Tonmax</td><td>最大导通时间设置</td></tr><tr><td>3</td><td>CS</td><td>电流采样端</td></tr><tr><td>4</td><td>GATE</td><td>驱动输出端,接外部MOS栅极</td></tr><tr><td>5</td><td>HV</td><td>高压供电输入端</td></tr><tr><td>6</td><td>NC</td><td>悬空,应用时请勿连接其它节点,包括HV和DRAIN</td></tr><tr><td>7</td><td>GND</td><td>芯片地</td></tr><tr><td>8</td><td>OVP</td><td>过压保护信号采样端</td></tr></table>

## 极限参数(注1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td>HV</td><td>高压供电输入端</td><td>-0.3~600</td><td>V</td></tr><tr><td>GATE</td><td>驱动输出脚,接外部MOS栅极</td><td>-0.3~18</td><td>V</td></tr><tr><td>RTH</td><td>过温调节起始温度设置及NTC功能</td><td>-0.3~6</td><td>V</td></tr><tr><td>CS</td><td>电流采样端</td><td>-0.3~6</td><td>V</td></tr><tr><td>OVP</td><td>过压保护信号采样端</td><td>-0.3~6</td><td>V</td></tr><tr><td>Tonmax</td><td>最大导通时间设置</td><td>-0.3~6</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注2)</td><td>0.45</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>PN结到环境的热阻(注3)</td><td>145</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40~150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55~150</td><td>°C</td></tr></table>

注1：最大极限值是指超出该工作范围，芯片有可能损坏。推荐工作范围是指在该范围内，器件功能正常，但并不完全保证满足个别性能指标。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。

注2：温度升高最大功耗一定会减小，这也是由 $T_{JMAX}, \theta_{JA}$ ，和环境温度 $T_A$ 所决定的。最大允许功耗为 $P_{DMAX} = (T_{JMAX} - T_A) / \theta_{JA}$ 或是极限范围给出的数字中比较低的那个值。

注3：1平方英寸双层PCB板，按照JEDEC标准测试。

## 电气参数(注4)（无特别说明情况下， $T_{A}=25^{\circ}C$ ）

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">电源</td></tr><tr><td> $I_{ST}$ </td><td>HV启动电流</td><td></td><td></td><td>1.2</td><td></td><td>mA</td></tr><tr><td> $I_{OP}$ </td><td>HV工作电流</td><td> $F_{OP}=40kHz,CL=0pF$ </td><td>200</td><td>330</td><td>450</td><td>μA</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $V_{CS\_REF}$ </td><td>电流检测基准电压</td><td></td><td>291</td><td>300</td><td>309</td><td>mV</td></tr><tr><td> $V_{CS\_LIMIT}$ </td><td>电流峰值限流阈值</td><td></td><td>2.5</td><td>2.8</td><td>3.1</td><td>V</td></tr><tr><td> $T_{LEB}$ </td><td>前沿消隐时间</td><td></td><td></td><td>350</td><td></td><td>ns</td></tr><tr><td> $T_{DELAY}$ </td><td>芯片关断延迟</td><td></td><td></td><td>200</td><td></td><td>ns</td></tr><tr><td colspan="7">内部时间控制</td></tr><tr><td> $T_{OFF\_MIN}$ </td><td>最小关断时间</td><td></td><td></td><td>4</td><td></td><td>μs</td></tr><tr><td> $T_{OFF\_MAX}$ </td><td>最大关断时间</td><td></td><td>25</td><td>40</td><td>55</td><td>μs</td></tr><tr><td rowspan="2"> $T_{ON\_MAX}$ </td><td rowspan="2">最大开通时间</td><td>Tonmax悬空</td><td>13.5</td><td>17</td><td>20.5</td><td>μs</td></tr><tr><td>Tonmax接51kΩ</td><td></td><td>13</td><td></td><td>μs</td></tr><tr><td colspan="7">RTH</td></tr><tr><td> $I_{RTH}$ </td><td>RTH上拉电流</td><td></td><td>40</td><td>50</td><td>60</td><td>μA</td></tr><tr><td colspan="7">开路保护</td></tr><tr><td> $V_{OVP\_H}$ </td><td>过压保护触发阈值</td><td></td><td>0.482</td><td>0.5</td><td>0.518</td><td>V</td></tr><tr><td> $V_{OVP\_L}$ </td><td>过压保护退出阈值</td><td></td><td></td><td>0.44</td><td></td><td>V</td></tr><tr><td colspan="7">过热调节部分</td></tr><tr><td> $T_{REG1}$ </td><td>过热调节温度1</td><td>RTH=150kΩ</td><td></td><td>150</td><td></td><td>°C</td></tr><tr><td> $T_{REG2}$ </td><td>过热调节温度2</td><td>RTH=300kΩ</td><td></td><td>120</td><td></td><td>°C</td></tr><tr><td> $T_{REG3}$ </td><td>过热调节温度3</td><td>RTH悬空</td><td></td><td>130</td><td></td><td>°C</td></tr></table>

注4：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。

## 内部结构框图

![](images/9d7165015510f98546f4338d997b87ef7de225f9bed970c6828fd1f1530b9569.jpg)  
图 3 BP2618 内部框图

## 功能描述

BP2618 是一款高效率的 LED 驱动芯片，应用于全压输入 Boost 架构的 LED 驱动电源。电路采用无 VCC 电容的高压供电架构，只需要极少的外围组件就可以达到优异的恒流特性，极大的节约了系统成本和体积。

## 启动

系统上电后，母线电压通过 HV 引脚给芯片供电，当芯片内部电压达到芯片开启阈值时，芯片控制电路开始工作。

## 恒流控制

芯片 CS 端通过采样保持和恒流计算后连接到内部的运放反向输入端，运放正向输入为 CS 基准电压，运放输出端误差信号通过内部补偿自动调节 MOS 导通时间实现输出恒流。输出电流的计算公式为：

$$
I _ {\mathsf {L E D}} = \frac {V _ {C S \_ R E F}}{2 * R _ {C S}} (m A)
$$

其中， $R_{CS}$ 为电流采样电阻阻值。

## 储能电感

BP2618 工作在电感电流临界模式，当功率管导通时，流过储能电感的电流从零开始上升，Boost 导通时间为：

$$
t _ {o n} = \frac {L \times I _ {P K}}{V _ {I N}}
$$

其中，L 是电感量；

$I_{PK}$ 是电感电流的峰值；

$V_{IN}$ 是经整流后的母线电压；

当功率管关断时，流过储能电感的电流从峰值开始往下降，当电感电流下降到零时，芯片内部逻辑再次将功率管开通。Boost 功率管的关断时间为：

$$
t _ {o f f} = \frac {L \times I _ {P K}}{V _ {L E D} - V _ {I N}}
$$

BOOST 储能电感的计算公式为:

$$
L = \frac {\left(V _ {L E D} - V _ {I N}\right) \times V _ {I N}}{f \times I _ {P K} \times V _ {L E D}}
$$

其中，f 为系统最大工作频率。设置 BP2618 系统工作频率时，选择在输入电压最低时设置系统的工作频率和最大导通时间，而当输入电压最高时，系统的导通时间最小。

## 最大导通时间设置

BP2618 具有最大导通时间调节功能, 通过调节 Tonmax 引脚对地电阻能够调节芯片最大导通时间, 可以很好的兼容不同系统工作频率。

![](images/764ebb59c9816c470da9615fc503b3a3c93b8106eff95a15ee2655a4e74ff1f9.jpg)  
图 4 Tonmax 设置曲线

## 过压保护电阻设置

OVP 引脚用来探测输出过压保护。OVP 的上下分压电阻比例可以设置为：

$$
V _ {O V P} = \frac {R 1 + (R 2 / / 1 0 k)}{\mathrm{R} 2 / / 1 0 \mathrm{k}} \times V _ {O V P \_ H}
$$

其中，

R2 是反馈网络的下分压电阻；

R1 是反馈网络的上分压电阻；

$V_{OVP\_H}$ 是芯片检测 OVP 保护阈值；

$V_{OVP}$ 是输出电压过压保护设定点；

为提高 OVP 精度，OVP 下分压电阻推荐 1kΩ 左右。

![](images/7b223cf01a195d83320a8c86784f3e62d9659b4653890b9392660d5c15586be9.jpg)  
图 5 OVP 线路示意图

## 过温调节功能

BP2618 具有过热调节功能，在驱动电源过热时逐渐减小输出电流，从而控制输出功率和温升，使电源温度保持在设定值，以提高系统的可靠性。芯片内部设定的过热调节温度点可通过 RTH 引脚对地电阻设定。

RTH 引脚兼容 NTC 功能, 当使用 NTC 功能时, 建议在 RTH 对地并联 150 kΩ电阻将芯片过温调节设为 150°C。当 RTH 引脚电压低于 0.5V 时, 芯片基准开始下降, 当 RTH 引脚电压低于 0.34V 时, 芯片基准电压降到 135mV。

![](images/735a17292cd95e4fefae31eecc23c23a8e31a01339adf89c97f120c0b0fdf594.jpg)

图 6 NTC 参考线路  
![](images/602fc1416c0d6fb375d53ad4dfbe978500b2af532128a0b5f6c9ba984ae48405.jpg)  
图 7 NTC 降功率曲线

## 保护功能

BP2618 内置多种保护功能，包括逐周期限流保护、输出过

压保护、LED 开路保护、芯片过热调节等。

## 过压保护功能

当输出 LED 负载开路时，输出电压上升，当输出电压达到设定的过压保护点，会触发芯片过压保护逻辑并立即停止开关工作。

## PCB Layout 指南

在设计 BP2618 PCB 时，需要遵循以下指南：

1) RTH 电阻需要尽量靠近芯片 RTH 引脚，且 RTH 节点需要远离高压节点和噪声源。

2) Tonmax 电阻需要尽量靠近芯片 Tonmax 引脚，且 Tonmax 节点需要远离高压节点和噪声源。

3) 电流采样电阻的功率地线尽可能粗，且要离芯片的 GND 脚尽量近。另外，RTH 脚和 OVP 脚的电阻到芯片 GND 脚的连线应尽可能短。

4) 电流采样电阻到芯片 CS 引脚的走线尽量短，以减小芯片采样误差。

5) 减小功率环路的面积，如功率管、母线电容和续流二极管的环路面积，以减小 EMI 辐射。

6) NC 引脚应用时请勿连接其它节点, 包括 HV 和 DRAIN。

## 封装信息

SOP-8 封装外形尺寸  
![](images/1abd741559b9b114232f45ac470c963c669af68847f8c07e2be7e7cfde6c0ac6.jpg)

![](images/6585fe1df01b4736fb527c1d954bdc222bf689c5bfcb2a1d47e43d0292d0a1e1.jpg)

![](images/d45de1a73535ff642597534a0398995f8e17846652f2ee82e75206fbe6872ca0.jpg)

<table><tr><td rowspan="2">SYMBOL</td><td colspan="3">MILLIMETER</td></tr><tr><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A</td><td>1.30</td><td>—</td><td>1.80</td></tr><tr><td>A1</td><td>0.05</td><td>—</td><td>0.25</td></tr><tr><td>A2</td><td>1.25</td><td>1.40</td><td>1.65</td></tr><tr><td>b</td><td>0.33</td><td>—</td><td>0.51</td></tr><tr><td>c</td><td>0.17</td><td>—</td><td>0.25</td></tr><tr><td>D</td><td>4.70</td><td>4.90</td><td>5.10</td></tr><tr><td>E</td><td>5.80</td><td>6.00</td><td>6.20</td></tr><tr><td>E1</td><td>3.70</td><td>3.90</td><td>4.10</td></tr><tr><td>e</td><td colspan="3">1.27BSC</td></tr><tr><td>L</td><td>0.40</td><td>—</td><td>1.00</td></tr></table>

![](images/2179e4728fd6cf2a49661ae4afa352df26642353f21e6715f47eeaa4191f1248.jpg)  
SECTION B-B

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev.1.0</td><td>2021/05</td><td>首次发行</td></tr><tr><td>Rev.1.1</td><td>2021/06</td><td>纠正进过温调节点后的基准电压</td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。