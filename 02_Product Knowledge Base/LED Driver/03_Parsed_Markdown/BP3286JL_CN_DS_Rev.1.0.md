## BP3286JL 升降压闭环可控硅调光 LED 驱动芯片

## 概述

BP3286JL 是一款高效率、高 PF 值，支持可控硅调光的 LED 驱动芯片。芯片工作在电感电流临界连续模式，适用于 Buck-Boost 结构的 LED 驱动电源。

BP3286JL 芯片内部集成 600V 功率开关，采用栅极驱动和高压供电方式，只需要很少的外围元件，即可实现优异的恒流特性，极大的节约了系统成本和体积。

BP3286JL 具有多重保护功能，包括 LED 开路保护（过压保护），LED 短路保护，芯片温度过热调节等。

BP3286JL 采用 SOP-8 封装。

![](images/f1b668c4e4578a68fb7078f6fc4436aed14ae183d839d4249c6189bc3a758d3b.jpg)  
SOP-8 封装

## 特点

■ 支持可控硅调光

内置COMP闭环恒流控制

■ 内部集成 600V 功率管

■ 临界连续电流控制模式

■ 集成 600V 高压 JFET 供电，无 VCC 电容

■ ±5% LED 输出电流精度

■ 精准的 LED 开路保护

■ 采用 SOP-8 封装

## 应用领域

■ LED 球泡灯

■ LED 蜡烛灯

■ 其他 LED 照明

## 典型应用

![](images/3935fbc2851e1a8c805920d87cdc729881a94c7be50167b7b0bb984b5712dbea.jpg)  
图 1. BP3286JL 典型应用图 (Buck-Boost)

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP3286JL</td><td>SOP-8</td><td>编带4,000颗/盘</td><td>BP3286JXXXXYZXYYWWL</td></tr></table>

## 管脚封装

![](images/32cb53d806cd85b11840b144dab5f97ded3a26d3f965774f7db144fa78ed14d8.jpg)  
图 2. SOP-8 管脚封装图

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>VS</td><td>过压保护信号差分采样负端</td></tr><tr><td>2</td><td>Tonmax</td><td>最大导通时间设置</td></tr><tr><td>3</td><td>GND</td><td>芯片地</td></tr><tr><td>4</td><td>CS</td><td>电流采样端</td></tr><tr><td>5</td><td>DRAIN</td><td>内置功率 MOS 管的漏极</td></tr><tr><td>6</td><td>HV</td><td>高压供电输入端</td></tr><tr><td>7</td><td>NC</td><td>悬空</td></tr><tr><td>8</td><td>OVP</td><td>过压保护信号差分采样正端</td></tr></table>

## 极限参数(注1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td>HV</td><td>高压供电输入端</td><td>-0.3~600</td><td>V</td></tr><tr><td>DRAIN</td><td>内置功率 MOS 管的漏极</td><td>-0.3~600</td><td>V</td></tr><tr><td>VS</td><td>过压保护信号差分采样负端</td><td>-0.3~6</td><td>V</td></tr><tr><td>CS</td><td>电流采样端</td><td>-0.3~6</td><td>V</td></tr><tr><td>OVP</td><td>过压保护信号差分采样正端</td><td>-0.3~6</td><td>V</td></tr><tr><td>Tonmax</td><td>最大导通时间设置</td><td>-0.3~6</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注 2)</td><td>0.45</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>PN 结到环境的热阻</td><td>145</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40 to 150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55 to 150</td><td>°C</td></tr><tr><td></td><td>ESD(注 3)</td><td>2</td><td>KV</td></tr></table>

注1：最大极限值是指超出该工作范围，芯片有可能损坏。推荐工作范围是指在该范围内，器件功能正常，但并不完全保证满足个别性能指标。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。  
注2：温度升高最大功耗一定会减小，这也是由TJMAX, $\theta$ JA,和环境温度TA所决定的。最大允许功耗为 $PDMAX = (TJMAX - TA) / \theta JA$ 或是极限范围给出的数字中比较低的那个值。

注3：人体模型，100pF电容通过 $1.5\mathrm{K}\Omega$ 电阻放电。

电气参数(注 4, 5)（无特别说明情况下，HV=30V, TA=25℃）

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">电源</td></tr><tr><td> $I_{ST}$ </td><td>HV启动电流</td><td></td><td></td><td>1</td><td></td><td>mA</td></tr><tr><td> $I_{OP}$ </td><td>HV工作电流</td><td></td><td></td><td>222</td><td></td><td>uA</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $V_{CS\_REF}$ </td><td>电流检测基准电压</td><td></td><td>388</td><td>398</td><td>412</td><td>mV</td></tr><tr><td> $V_{CS\_LIMIT}$ </td><td>电流峰值限流阈值</td><td></td><td></td><td>1.2</td><td></td><td>V</td></tr><tr><td> $T_{LEB}$ </td><td>前沿消隐时间</td><td></td><td></td><td>350</td><td></td><td>ns</td></tr><tr><td> $T_{DELAY}$ </td><td>芯片关断延迟</td><td></td><td></td><td>200</td><td></td><td>ns</td></tr><tr><td colspan="7">内部时间控制</td></tr><tr><td> $T_{OFF\_MIN}$ </td><td>最小退磁时间</td><td></td><td></td><td>2.5</td><td></td><td>us</td></tr><tr><td> $T_{ZCD\_MASK}$ </td><td>退磁屏蔽时间</td><td></td><td></td><td>1.75</td><td></td><td>us</td></tr><tr><td> $T_{OFF\_MAX}$ </td><td>最大退磁时间</td><td></td><td></td><td>200</td><td></td><td>us</td></tr><tr><td> $T_{ON\_MAX}$ </td><td>最大导通时间</td><td>Tonmax接51K</td><td>10.9</td><td>11.7</td><td>12.6</td><td>us</td></tr><tr><td colspan="7">开路保护</td></tr><tr><td> $V_{OVP\_H}$ </td><td>过压保护触发阈值</td><td></td><td>0.48</td><td>0.5</td><td>0.52</td><td>V</td></tr><tr><td> $V_{OVP\_L}$ </td><td>过压保护退出阈值</td><td></td><td></td><td>0.4</td><td></td><td>V</td></tr><tr><td colspan="7">功率MOSFET</td></tr><tr><td> $R_{DS\_ON}$ </td><td>MOSFET导通电阻</td><td>VGS=10V/IDS=0.5A</td><td></td><td>2</td><td></td><td>Ω</td></tr><tr><td> $BV_{DSS}$ </td><td>MOSFET击穿电压</td><td>VGS=0V/IDS=250uA</td><td>600</td><td></td><td></td><td>V</td></tr><tr><td> $I_{DSS}$ </td><td>MOSFET漏电流</td><td>VGS=0V/VDS=500V</td><td></td><td></td><td>1</td><td>uA</td></tr><tr><td colspan="7">过热调节</td></tr><tr><td> $T_{REG}$ </td><td>过热调节温度</td><td></td><td></td><td>130</td><td></td><td>°C</td></tr></table>

注4：典型参数值为 $25^{\circ}\mathrm{C}$ 下测得的参数标准。  
注5：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。

## 内部结构框图

![](images/49d6caaa803faa03b29d277f88cce49398c45ef227640ed8404ce7f59f8d02c1.jpg)  
图 3. BP3286JL 内部框图

## 功能描述

BP3286JL 是一款高效率支持可控硅调光的 LED 驱动芯片，应用于 Buck-Boost 结构的 LED 驱动电源。电路采用无 VCC 电容的高压供电架构，只需要极少的外围组件就可以达到优异的恒流特性，极大的节约了系统成本和体积。在外接调光器时，BP3286JL 通过内部 Tonmax 限制，使输出电流跟随调光角度同步调节，改善调光范围和调光兼容性。

## 启动

系统上电后，母线电压通过 HV 引脚给芯片供电，当芯片内部电压达到芯片开启阈值时，芯片控制电路开始工作。

## 恒流控制

芯片 CS 端连接到内部的基准运放反向输入端，运放正向输出端为 CS 基准电压，运放输出端误差信号通过内部补偿自动调节占空比实现输出恒流。

输出电流的计算公式为：

$$
I _ {L E D} = \frac {V _ {C S \_ R E F}}{2 * R _ {C S}} (m A)
$$

其中，RCS 为电流采样电阻阻值。

## 储能电感

BP3286JL 工作在电感电流临界模式，当功率管导通时，流过储能电感的电流从零开始上升，导通时间为：

$$
t _ {o n} = \frac {L \times I _ {P K}}{V _ {I N}}
$$

其中，L 是电感量；

IPK 是电感电流的峰值；

VIN 是经整流后的母线电压；

当功率管关断时，流过储能电感的电流从峰值开始往下降，当电感电流下降到零时，芯片内部逻辑再次将功率管开通。功率管的关断时间为：

$$
t _ {o f f} = \frac {L \times I _ {P K}}{V _ {L E D}}
$$

储能电感的计算公式为：

$$
L = \frac {V _ {L E D} \times V _ {I N}}{f \times I _ {P K} \times (V _ {L E D} + V _ {I N})}
$$

其中，f 为系统最大工作频率。设置 BP3286JL 系统工作频率时，选择在输入电压最低时设置系统的最小工作频率和最大导通时间，而当输入电压最高时，系统的导通时间最小，工作频率最高。

## 最大导通时间设置

BP3286JL 具有最大导通时间调节功能，通过调节 Tonmax 引脚对地电阻调节芯片最大导通时间，可以很好的兼容不同系统工作频率和调光曲线。Tonmax 引脚不允许悬空。

![](images/03344cb0cd0b0f381dfcbd3f1817ab0d81222dbc7aa5555fc460aeca915bcbf1.jpg)  
图 4. Tonmax 设置曲线

## 过压保护电阻设置

OVP 引脚用来探测输出过压保护。OVP 的上下分压电阻比例可以设置为：

$$
V _ {O V P} = \frac {R _ {O V P} + 1 0 K}{1 0 \mathrm{K}} \times V _ {O V P _ {-} H}
$$

其中，

ROVP 为 R1 或 R2 的阻值，R1/R2 为阻值相同的电阻；

R1是差分反馈网络正端的上分压电阻；

R2 是差分反馈网络负端的上分压电阻；

VOVP\_H 是芯片检测 OVP 保护阈值；

VOVP 是输出电压过压保护设定点；

为了提高 OVP 精度，建议采用高精度电阻。

建议在 VS 和 OVP 引脚之间并联电阻提高电路抗干扰能力。

![](images/97c554f3c28747adc874c756fd1302fcb6a2b8729705a679d30ba80f358387e8.jpg)  
图 5. OVP 线路示意图

## 过温调节功能

BP3286JL 具有过热调节功能，在驱动电源过热时逐渐减小输出电流，从而控制输出功率和温升，使电源温度保持在设定值，以提高系统的可靠性。

## 保护功能

BP3286JL 内置多种保护功能，包括 LED 开路保护（过压保护），LED 短路保护，芯片过热调节等。

## 过压保护功能

当输出 LED 负载开路时，随着输出电压的上升，当输出电压达到设定的过压保护点，会触发芯片过压保护逻辑并停止开关工作。

## LED 短路保护功能

当输出 LED 负载短路时，电感电流续流时间过长，芯片无法检测到续流结束信号，所以芯片工作在最大退磁时间 TOFFMAX。

## PCB 设计

在设计 BP3286JL PCB 时，需要遵循以下指南：

## Tonmax 引脚

Tonmax 电阻需要尽量靠近芯片 Tonmax 引脚，且 Tonmax 节点需要远离高压节点和噪声源。

## 地线

电流采样电阻的功率地线尽可能粗，且要离芯片的 GND 脚尽量近。另外，OVP 脚的电阻到芯片 GND 脚的连线应尽可能短。

## DRAIN 引脚

增加 DRAIN 引脚的铺铜面积可以提高芯片散热，但是铺铜会影响 EMI 性能。

功率环路的面积

减小功率环路的面积，如功率管、母线电容和续流二极管的环路面积，以减小 EMI 辐射。

## 封装信息

![](images/40f009d8a2e8743a07e18b9ec4686f08925e0a4cc55c6198789afffa122863e7.jpg)

![](images/9a7cc02b6dfadc8dfd01d250094b8c7b723e0003ad9d7c3a57d248400c93e613.jpg)

![](images/ea25b4e6da9c3ca88a8042bf97b9d2bc83e0767f83b573eb47010094a3bb577a.jpg)

![](images/e7ed49f0267c3b832f5f4de263dc53ae2459a9c301215833979fccca1616f2bd.jpg)  
SECTION B-B

![](images/18a3b2bf5082aa2d8bdba796668aae7dfb8262ecc692dcdbbe0056905b7dc802.jpg)

<table><tr><td rowspan="2">SYMBOL</td><td colspan="3">MILLIMETER</td></tr><tr><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A</td><td>1.30</td><td>—</td><td>1.80</td></tr><tr><td>A1</td><td>0.05</td><td>—</td><td>0.25</td></tr><tr><td>A2</td><td>1.25</td><td>1.40</td><td>1.65</td></tr><tr><td>b</td><td>0.33</td><td>—</td><td>0.51</td></tr><tr><td>c</td><td>0.17</td><td>—</td><td>0.25</td></tr><tr><td>D</td><td>4.70</td><td>4.90</td><td>5.10</td></tr><tr><td>E</td><td>5.80</td><td>6.00</td><td>6.30</td></tr><tr><td>E1</td><td>3.70</td><td>3.90</td><td>4.10</td></tr><tr><td>e</td><td colspan="3">1.27BSC</td></tr><tr><td>L</td><td>0.40</td><td>—</td><td>1.00</td></tr></table>

版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev. 1.0</td><td>2024/07</td><td>首次发行</td></tr><tr><td></td><td></td><td></td></tr></table>

![](images/332feb0259e4a801893db65be9d95c6c96ac15bec2059088ed1dcfb3fd3f3dad.jpg)

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。