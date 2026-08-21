## BP3276AHL 升压闭环可控硅调光 LED 驱动芯片

## 概述

BP3276AHL 是一款高效率、高 PF 值，支持可控硅调光的 LED 驱动芯片。芯片工作在电感电流临界连续模式，适用于 Boost 结构的 LED 驱动电源。

BP3276AHL芯片内部集成500V功率开关，采用栅极驱动和高压供电方式，只需要很少的外围元件，即可实现优异的恒流特性，极大的节约了系统成本和体积。

BP3276AHL 具有多重保护功能，包括 LED 开路保护（过压保护），芯片温度过热调节等。

BP3276AHL 采用 SOP-8 封装。

![](images/769c1efc9e9dfa74cfd202b8b16a21daf424f884d9eb93d375f2e4705980a23b.jpg)  
SOP-8 封装

## 特点

■ 支持可控硅调光

内置COMP闭环恒流控制

■ 内部集成 500V 功率管

■ 临界连续电流控制模式

■ 集成 600V 高压 JFET 供电，无 VCC 电容

■ ±5% LED 输出电流精度

■ 精准的 LED 开路保护

■ RTH 设定过热调节功能

■ 支持NTC保护线路

■ 采用 SOP-8 封装

## 应用领域

■ LED 球泡灯

■ LED 蜡烛灯

■ 其他LED照明

## 典型应用

![](images/df98d339e1ea82564007956682a46f75450125e3bf7c7c4e1392ff81d45c6c6c.jpg)  
图 1. BP3276AHL 典型应用图 (Boost)

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP3276AHL</td><td>SOP-8</td><td>编带4,000颗/盘</td><td>BP3276AXXXXXYHXXYYWWL</td></tr></table>

## 管脚封装

![](images/1942e12722228255cab7f57273c6b6c187fd31377b414367584182b7354d7af4.jpg)  
图 2. SOP-8 管脚封装图

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>RTH</td><td>过温调节起始温度设置及 NTC 功能</td></tr><tr><td>2</td><td>Tonmax</td><td>最大导通时间设置</td></tr><tr><td>3</td><td>GND</td><td>芯片地</td></tr><tr><td>4</td><td>CS</td><td>电流采样端</td></tr><tr><td>5</td><td>DRAIN</td><td>内置功率 MOS 管的漏极</td></tr><tr><td>6</td><td>HV</td><td>高压供电输入端</td></tr><tr><td>7</td><td>NC</td><td>悬空</td></tr><tr><td>8</td><td>OVP</td><td>过压保护信号采样端</td></tr></table>

## 极限参数(注1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td>HV</td><td>高压供电输入端</td><td>-0.3~600</td><td>V</td></tr><tr><td>DRAIN</td><td>内置功率 MOS 管的漏极</td><td>-0.3~500</td><td>V</td></tr><tr><td>RTH</td><td>过温调节起始温度设置及 NTC 功能</td><td>-0.3~7.5</td><td>V</td></tr><tr><td>CS</td><td>电流采样端</td><td>-0.3~6</td><td>V</td></tr><tr><td>OVP</td><td>过压保护信号采样端</td><td>-0.3~6</td><td>V</td></tr><tr><td>Tonmax</td><td>最大导通时间设置</td><td>-0.3~6</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注 2)</td><td>0.45</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>PN 结到环境的热阻</td><td>145</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40 to 150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55 to 150</td><td>°C</td></tr><tr><td></td><td>ESD(注 3)</td><td>2</td><td>KV</td></tr></table>

注1：最大极限值是指超出该工作范围，芯片有可能损坏。推荐工作范围是指在该范围内，器件功能正常，但并不完全保证满足个别性能指标。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。

注2：温度升高最大功耗一定会减小，这也是由TJMAX, $\theta$ JA,和环境温度TA所决定的。最大允许功耗为 $PDMAX = (TJMAX - TA) / \theta JA$ 或是极限范围给出的数字中比较低的那个值。

注3：人体模型，100pF电容通过 $1.5\mathrm{K}\Omega$ 电阻放电。

电气参数(注 4, 5)（无特别说明情况下，HV=30V, TA=25℃）

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">电源</td></tr><tr><td> $I_{ST}$ </td><td>HV启动电流</td><td></td><td></td><td>1</td><td></td><td>mA</td></tr><tr><td> $I_{OP}$ </td><td>HV工作电流</td><td></td><td></td><td>280</td><td></td><td>uA</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $V_{CS\_REF}$ </td><td>电流检测基准电压</td><td></td><td>388</td><td>400</td><td>412</td><td>mV</td></tr><tr><td> $V_{CS\_LIMIT}$ </td><td>电流峰值限流阈值</td><td></td><td></td><td>1.4</td><td></td><td>V</td></tr><tr><td> $T_{LEB}$ </td><td>前沿消隐时间</td><td></td><td></td><td>350</td><td></td><td>ns</td></tr><tr><td> $T_{DELAY}$ </td><td>芯片关断延迟</td><td></td><td></td><td>200</td><td></td><td>ns</td></tr><tr><td colspan="7">内部时间控制</td></tr><tr><td> $T_{OFF\_MIN}$ </td><td>最小退磁时间</td><td></td><td></td><td>2.5</td><td></td><td>us</td></tr><tr><td> $T_{OFF\_MAX}$ </td><td>最大退磁时间</td><td></td><td></td><td>40</td><td></td><td>us</td></tr><tr><td> $T_{ON\_MAX}$ </td><td>最大导通时间</td><td>Tonmax接51K</td><td>10.8</td><td>12</td><td>13.2</td><td>us</td></tr><tr><td colspan="7">RTH</td></tr><tr><td> $I_{RTH}$ </td><td>RTH上拉电流</td><td> $V_{RTH}<2V$ </td><td>46</td><td>50</td><td>54</td><td>uA</td></tr><tr><td colspan="7">开路保护</td></tr><tr><td> $V_{OVP\_H}$ </td><td>过压保护触发阈值</td><td></td><td>0.48</td><td>0.5</td><td>0.52</td><td>V</td></tr><tr><td> $V_{OVP\_L}$ </td><td>过压保护退出阈值</td><td></td><td></td><td>0.4</td><td></td><td>V</td></tr><tr><td colspan="7">功率MOSFET</td></tr><tr><td> $R_{DS\_ON}$ </td><td>MOSFET导通电阻</td><td>VGS=10V/IDS=0.5A</td><td></td><td>4.8</td><td></td><td>Ω</td></tr><tr><td> $BV_{DSS}$ </td><td>MOSFET击穿电压</td><td>VGS=0V/IDS=250uA</td><td>500</td><td></td><td></td><td>V</td></tr><tr><td> $I_{DSS}$ </td><td>MOSFET漏电流</td><td>VGS=0V/VDS=500V</td><td></td><td></td><td>1</td><td>uA</td></tr><tr><td colspan="7">过热调节</td></tr><tr><td> $T_{REG1}$ </td><td>过热调节温度 1</td><td>RTH=75K</td><td></td><td>150</td><td></td><td>°C</td></tr><tr><td> $T_{REG2}$ </td><td>过热调节温度 2</td><td>RTH=300K</td><td></td><td>120</td><td></td><td>°C</td></tr><tr><td> $T_{REG3}$ </td><td>过热调节温度 3</td><td>RTH 悬空</td><td></td><td>130</td><td></td><td>°C</td></tr></table>

注4：典型参数值为 $25^{\circ}\mathrm{C}$ 下测得的参数标准。  
注5：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。

## 内部结构框图

![](images/01e75c239fa69818fb88fe612d442b562442b9f17bd4619bfab114ff527c9978.jpg)  
图 3. BP3276AHL 内部框图

## 功能描述

BP3276AHL 是一款高效率支持可控硅调光的 LED 驱动芯片，应用于 Boost 结构的 LED 驱动电源。电路采用无 VCC 电容的高压供电架构，只需要极少的外围组件就可以达到优异的恒流特性，极大的节约了系统成本和体积。在外接调光器时，BP3276AHL 通过内部 Tonmax 限制，使输出电流跟随调光角度同步调节，改善调光范围和调光兼容性。

## 启动

系统上电后，母线电压通过 HV 引脚给芯片供电，当芯片内部电压达到芯片开启阈值时，芯片控制电路开始工作。

## 恒流控制

芯片 CS 端连接到内部的基准运放反向输入端，运放正向输出端为 CS 基准电压，运放输出端误差信号通过内部补偿自动调节占空比实现输出恒流。

输出电流的计算公式为：

$$
I _ {\mathrm{LED}} = \frac {V _ {C S \_ R E F}}{2 * R _ {C S}} (m A)
$$

其中，RCS 为电流采样电阻阻值。

## 储能电感

BP3276AHL 工作在电感电流临界模式，当功率管导通时，流过储能电感的电流从零开始上升，BOOST 导通时间为：

$$
t _ {o n} = \frac {L \times I _ {P K}}{V _ {I N}}
$$

其中，L 是电感量；

$I_{PK}$ 是电感电流的峰值；

$V_{IN}$ 是经整流后的母线电压；

当功率管关断时，流过储能电感的电流从峰值开始往下降，当电感电流下降到零时，芯片内部逻辑再次将功率管开通。BOOST 功率管的关断时间为：

$$
t _ {o f f} = \frac {L \times I _ {P K}}{V _ {L E D} - V _ {I N}}
$$

BOOST 储能电感的计算公式为:

$$
L = \frac {(V _ {L E D} - V _ {I N}) \times V _ {I N}}{f \times I _ {P K} \times V _ {L E D}}
$$

其中，f 为系统最大工作频率。设置 BP3276AHL 系统工作频率时，选择在输入电压最低时设置系统的工作频率和最大导通时间，而当输入电压最高时，系统的导通时间最小。

## 最大导通时间设置

BP3276AHL 具有最大导通时间调节功能，通过调节 Tonmax 引脚对地电阻调节芯片最大导通时间，可以很好的兼容不同系统工作频率和调光曲线。Tonmax 引脚不允许悬空。

![](images/575b8b7b8ed3f61c34915ed5231f26dce6be9e428997480bddaa211351ac7b15.jpg)  
图 4. Tonmax 设置曲线

## 过压保护电阻设置

OVP 引脚用来探测输出过压保护。OVP 的上下分压电阻比例可以设置为：

$$
V _ {O V P} = \frac {R 1 + (R 2 / / 1 0 K)}{\mathrm{R} 2 / / 1 0 \mathrm{K}} \times V _ {O V P \_ H}
$$

其中，

R2 是反馈网络的下分压电阻；

R1 是反馈网络的上分压电阻；

VOVP\_H 是芯片检测 OVP 保护阈值；

VOVP 是输出电压过压保护设定点；

为了提高 OVP 精度，OVP 下分压电阻推荐 1KΩ 左右。

![](images/a39394a2266a0d49eba61153c1175def532bd68fdef96f16a0898c9321fe2a78.jpg)  
图 5. OVP 线路示意图

## 过温调节功能

BP3276AHL 具有过热调节功能，在驱动电源过热时逐渐减小输出电流，从而控制输出功率和温升，使电源温度保持在设定值，以提高系统的可靠性。芯片内部设定的过热调节温度点可通过 RTH 引脚对地电阻设定，RTH 引脚对地建议并联 330pF 电容滤掉高频开关噪声干扰。

RTH 引脚兼容 NTC 功能，当使用 NTC 功能时，建议在 RTH 对地并联一个 100K 以下电阻将芯片过温调节设为 150°C。当 NTC 引脚电压低于 0.5V 时，芯片基准开始下降，当 NTC 引脚电压低于 0.34V 时，芯片基准电压降到 60%。

![](images/107037f50323e261922e665864e9f4114223ea7e1168fa87036812b52c4cbe04.jpg)

图 6. NTC 参考线路  
![](images/a3d3ba9dfe67717e132310d6b32d07790b574a6033613c94e5f86a8da66dde00.jpg)  
图 7. NTC 降功率曲线

## 保护功能

BP3276AHL 内置多种保护功能，包括 LED 开路保护，芯片过热调节等。

过压保护功能

当输出 LED 负载开路时，随着输出电压的上升，当输出电压达到设定的过压保护点，会触发芯片过压保护逻辑并停止开关工作。

## PCB 设计

在设计BP3276AHLPCB时，需要遵循以下指南：

## RTH 引脚

RTH 电阻需要尽量靠近芯片 RTH 引脚，且 RTH 节点需要远离高压节点和噪声源。

## Tonmax 引脚

Tonmax 电阻需要尽量靠近芯片 Tonmax 引脚，且 Tonmax 节点需要远离高压节点和噪声源。

## 地线

电流采样电阻的功率地线尽可能粗，且要离芯片的 GND 脚尽量近。另外，RTH 脚和 OVP 脚的电阻到芯片 GND 脚的连线应尽可能短。

## DRAIN 引脚

增加 DRAIN 引脚的铺铜面积可以提高芯片散热，但是铺铜会影响 EMI 性能。

## 功率环路的面积

减小功率环路的面积，如功率管、母线电容和续流二极管的环路面积，以减小 EMI 辐射。

## 封装信息

![](images/c6043de45797815d1b56ce2696d2646d3e72039b91ba8eeb9405b8b37b95b45e.jpg)

![](images/30303730ddff0921284982bda7cd18377820ea6c4f9edcb20dbdf9285c50fc38.jpg)

![](images/d23e40fc030241e57a81c8efbb7fa7bd0c2cd7b0bbc2f5e74ad73ca6d69de0ce.jpg)

![](images/833128ad3f1fc1662bcc92be19af27c063edb93a52231abdbb8087f994e9e897.jpg)  
SECTION B-B

<table><tr><td rowspan="2">SYMBOL</td><td colspan="3">MILLIMETER</td></tr><tr><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A</td><td>1.30</td><td>—</td><td>1.80</td></tr><tr><td>A1</td><td>0.05</td><td>—</td><td>0.25</td></tr><tr><td>A2</td><td>1.25</td><td>1.40</td><td>1.65</td></tr><tr><td>b</td><td>0.33</td><td>—</td><td>0.51</td></tr><tr><td>c</td><td>0.17</td><td>—</td><td>0.25</td></tr><tr><td>D</td><td>4.70</td><td>4.90</td><td>5.10</td></tr><tr><td>E</td><td>5.80</td><td>6.00</td><td>6.30</td></tr><tr><td>E1</td><td>3.70</td><td>3.90</td><td>4.10</td></tr><tr><td>e</td><td colspan="3">1.27BSC</td></tr><tr><td>L</td><td>0.40</td><td>—</td><td>1.00</td></tr></table>

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev. 1.0</td><td>2024/06</td><td>首次发行</td></tr><tr><td></td><td></td><td></td></tr></table>

![](images/8575388b85f85dcf6b9e06bf3c9f7672d786b09985729f8f61929c988aea9447.jpg)

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。