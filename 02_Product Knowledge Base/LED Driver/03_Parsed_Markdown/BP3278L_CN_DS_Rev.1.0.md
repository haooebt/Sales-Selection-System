## BP3278L升压闭环可控硅调光 LED驱动芯片

## 概述

BP 3278L 是一款高效率、高PF 值，支持可控硅调光的LED 驱动芯片。芯片工作在电感电流临界连续模式，适用于Boost 结构的 LED 驱动电源。

BP 3278L 芯片采用栅极驱动和高压供电方式，只需要很少的外围元件，即可实现优异的恒流特性，极大的节约了系统成本和体积。

BP 3278L 具有多重保护功能，包括 LED 开路保护（过压保护），芯片温度过热调节等。

BP 3278L 采用 SOP -8 封装。

![](images/8f5e33982b2e1e6721ca11428cd485e499edcf139ec493f0bec5dc1b6c0a7c14.jpg)  
SOP -8 封装

## 特点

◼ 支持可控硅调光

◼ 内置 COMP 闭环恒流控制

◼ 临界连续电流控制模式

◼ 集成 600V 高压 JFET 供电，无 VCC 电容

◼ ±5% LED 输出电流精度

◼ 精准的 LED 开路保护

◼ RTH 设定过热调节功能

◼ 支持 N TC 保护线路

◼ 采用 SOP -8 封装

## 应用领域

◼ LED 球泡灯

◼ LED 蜡烛灯

◼ 其他 LED 照明

## 典型应用

![](images/c1898fea84bfc77460a16423167b61eeb159ae9151477d674b1204a7b55ff803.jpg)  
图 1.BP 3278L 典型应用图（Boost ）

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP3278L</td><td>SOP-8</td><td>编带4,000颗/盘</td><td>BP3278XXXXXYZYWWL</td></tr></table>

## 管脚封装

![](images/22730ea3c06403271e97d5c45dc0febf272da010a491d24ea6cd024d08a6c000.jpg)  
图 2.SOP -8 管脚封装图

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>RTH</td><td>过温调节起始温度设置及 NTC 功能</td></tr><tr><td>2</td><td>Tonmax</td><td>最大导通时间设置</td></tr><tr><td>3</td><td>CS</td><td>电流采样端</td></tr><tr><td>4</td><td>GATE</td><td>驱动输出端,接外部 MOS 栅极</td></tr><tr><td>5</td><td>HV</td><td>高压供电输入端</td></tr><tr><td>6</td><td>NC</td><td>悬空</td></tr><tr><td>7</td><td>GND</td><td>芯片地</td></tr><tr><td>8</td><td>OVP</td><td>过压保护信号采样端</td></tr></table>

极限参数(注 1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td>HV</td><td>高压供电输入端</td><td>-0.3~600</td><td>V</td></tr><tr><td>GATE</td><td>驱动输出端,接外部 MOS 栅极</td><td>-0.3~18</td><td>V</td></tr><tr><td>RTH</td><td>过温调节起始温度设置及 NTC 功能</td><td>-0.3~7.5</td><td>V</td></tr><tr><td>CS</td><td>电流采样端</td><td>-0.3~6</td><td>V</td></tr><tr><td>OVP</td><td>过压保护信号采样端</td><td>-0.3~6</td><td>V</td></tr><tr><td>Tonmax</td><td>最大导通时间设置</td><td>-0.3~6</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注 2)</td><td>0.45</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>PN 结到环境的热阻</td><td>145</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40 to 150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55 to 150</td><td>°C</td></tr></table>

注 1：最大极限值是指超出该工作范围，芯片有可能损坏。推荐工作范围是指在该范围内，器件功能正常，但并不完全保证满足个别性能指标。电气参数义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型合理反映了器件性能。

注 2：温度升高最大功耗一定会减小，这也是由T<sub>JMAX</sub> , θ<sub>JA</sub>,和环境温度T<sub>A</sub> 所决定的。最大允许功耗为 $P _ { \mathsf { D M A X } } = ( \mathsf { T } _ { \mathsf { J M A X } } - \mathsf { T } _ { \mathsf { A } } ) / \theta _ { \mathsf { J A } }$ 或是极限范围给出的数字中比较低的那个值。

电气参数(注 3, 4) （无特别说明情况下，H V =30V, TA =25 ℃）

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">电源</td></tr><tr><td> $I_{ST}$ </td><td>HV启动电流</td><td></td><td></td><td>1</td><td></td><td>mA</td></tr><tr><td> $I_{OP}$ </td><td>HV工作电流</td><td></td><td>260</td><td>280</td><td>300</td><td>uA</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $V_{CS\_REF}$ </td><td>电流检测基准电压</td><td></td><td>388</td><td>400</td><td>412</td><td>mV</td></tr><tr><td> $V_{CS\_LIMIT}$ </td><td>电流峰值限流阈值</td><td></td><td></td><td>1.4</td><td></td><td>V</td></tr><tr><td> $T_{LEB}$ </td><td>前沿消隐时间</td><td></td><td></td><td>350</td><td></td><td>ns</td></tr><tr><td> $T_{DELAY}$ </td><td>芯片关断延迟</td><td></td><td></td><td>200</td><td></td><td>ns</td></tr><tr><td colspan="7">内部时间控制</td></tr><tr><td> $T_{OFF\_MIN}$ </td><td>最小退磁时间</td><td></td><td></td><td>2.5</td><td></td><td>us</td></tr><tr><td> $T_{OFF\_MAX}$ </td><td>最大退磁时间</td><td></td><td>28</td><td>40</td><td>52</td><td>us</td></tr><tr><td> $T_{ON\_MAX}$ </td><td>最大导通时间</td><td>Tonmax接51K</td><td>10.8</td><td>12</td><td>13.2</td><td>us</td></tr><tr><td colspan="7">RTH</td></tr><tr><td> $I_{RTH}$ </td><td>RTH上拉电流</td><td> $V_{RTH}<2V$ </td><td>46</td><td>50</td><td>54</td><td>uA</td></tr><tr><td colspan="7">开路保护</td></tr><tr><td> $V_{OVP\_H}$ </td><td>过压保护触发阈值</td><td></td><td>0.48</td><td>0.5</td><td>0.52</td><td>V</td></tr><tr><td> $V_{OVP\_L}$ </td><td>过压保护退出阈值</td><td></td><td></td><td>0.4</td><td></td><td>V</td></tr><tr><td colspan="7">过热调节</td></tr><tr><td> $T_{REG1}$ </td><td>过热调节温度1</td><td>RTH=75K</td><td></td><td>150</td><td></td><td>°C</td></tr><tr><td> $T_{REG2}$ </td><td>过热调节温度2</td><td>RTH=300K</td><td></td><td>120</td><td></td><td>°C</td></tr><tr><td> $T_{REG3}$ </td><td>过热调节温度3</td><td>RTH悬空</td><td></td><td>130</td><td></td><td>°C</td></tr></table>

注 3：典型参数值为25˚C 下测得的参数标准。  
注 4：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。

## 内部结构框图

![](images/c6651850c04e618e0fac6dab649f3c7822d98198c152bde6f96e31d1bce4344a.jpg)  
图 3. BP 3278L 内部框图

## 功能描述

BP 3278L 是一款高效率支持可控硅调光的 LED 驱动芯片，应用于 Boost 结构的 LED 驱动电源。电路采用无 VCC 电容的高压供电架构，只需要极少的外围组件就可以达到优异的恒流特性，极大的节约了系统成本和体积。在 外接调光器时，BP 3278L 通过内部Tonmax 限制，使输出电流跟随调光角度同步调节，改善调光范围和调光兼容性。

## 1 启动

系统上电后，母线电压通过 HV 引脚给芯片供电，当芯片内部电压达到芯片开启阈值时，芯片控制电路开始工作。

## 2 恒流控制

芯片 CS 端连接到内部的基准运放反向输入端，运放正向输出端为 CS 基准电压，运放输出端误差信号通过内部补偿自动调节占空比实现输出恒流。

输出电流的计算公式为：

$$
I _ {\mathrm{LED}} = \frac {V _ {C S \_ R E F}}{2 * R _ {C S}} (m A)
$$

其中，RCS 为电流采样电阻阻值。

## 3 储能电感

BP 3278L 工作在电感电流临界模式，当功率管导通时，流过储能电感的电流从零开始上升，BOOST 导通时间为：

$$
t _ {o n} = \frac {L \times I _ {P K}}{V _ {I N}}
$$

其中，L 是电感量；

$\mathsf { I } _ { \mathsf { P K } }$ 是电感电流的峰值；

$V _ { \mathsf { I N } }$ 是经整流后的母线电压；

当功率管关断时，流过储能电感的电流从峰值开始往下降，当电感电流下降到零时，芯片内部逻辑再次将功率管开通。BOOST 功率管的关断时间为：

$$
t _ {o f f} = \frac {L \times I _ {P K}}{V _ {L E D} - V _ {I N}}
$$

BOOST 储能电感的计算公式为：

$$
L = \frac {(V _ {L E D} - V _ {I N}) \times V _ {I N}}{f \times I _ {P K} \times V _ {L E D}}
$$

其中，f为系统最大工作频率。设置 BP 3278L 系统工作频率时，选择在输入电压最低时设置系统的工作频率和最大导通时间，而当输入电压最高时，系统的导通时间最小。

## 4 最大导通时间设置

BP3278L 具有最大导通时间调节功能，通过调节Tonmax 引脚对地电阻调节芯片最大导通时间，可以很好的兼容不同系统工作频率和调光曲线。Tonmax 引脚不允许悬空。

![](images/149aceba5d9e1f0621dd17514cf58f9a35e6edab173317ee533d13139c961113.jpg)  
图 4. Tonmax 设置曲线

## 5 过压保护电阻设置

OVP 引脚用来探测输出过压保护。OVP 的上下分压电阻比例可以设置为：

$$
V _ {O V P} = \frac {R 1 + (R 2 / / 1 0 K)}{\mathrm{R} 2 / / 1 0 \mathrm{K}} \times V _ {O V P \_ H}
$$

其中，

R2 是反馈网络的下分压电阻；

R1 是反馈网络的上分压电阻；

VOVP\_H 是芯片检测 OVP 保护阈值；

VOVP 是输出电压过压保护设定点；

为了提高 OVP 精度，OVP 下分压电阻推荐 1KΩ左右。

![](images/5ce6ca3b609a99a7a792bcf5ecee3795adaaa4d353e8905304cceb0ddc1f1f2c.jpg)  
图 5. OVP 线路示意图

## 6 过温调节功能

BP3278L 具有过热调节功能，在驱动电源过热时逐渐减小输出电流，从而控制输出功率和温升，使电源温度保持在设定值，以提高系统的可靠性。芯片内部设定的过热调节温度点可通过 RTH 引脚对地电阻设定，RTH 引脚对地建议并联330pF 电容滤掉高频开关噪声干扰。

RTH 引脚兼容 NTC 功能，当使用NTC 功能时，建议在 RTH对地并联一个 100K 以下电阻将芯片过温调节设为 150℃。当 NTC 引脚电压低于 0.5V时，芯片基准开始下降，当 NTC引脚电压低于 0.34V时，芯片基准电压降到60% 。

![](images/cecffef32179c73d36035d1ace306ba1ca3e844cc9c5ce04165b7093cdb604df.jpg)

图 6. NTC 参考线路  
![](images/52072f33b9eff003c2f537f6a67f281b022be8083b7f89d2ae508ef313b07b30.jpg)  
图 7. NTC 降功率曲线

## 7 保护功能

BP3278L 内置多种保护功能，包括 LED 开路保护，芯片过热调节等。

## 过压保护功能

当输出 LED 负载开路时，随着输出电压的上升，当输出电压达到设定的过压保护点，会触发芯片过压保护逻辑并停止开关工作。

## 8 PCB 设计

在设计 BP3278L PCB 时，需要遵循以下指南：

## RTH 引脚

RTH 电阻需要尽量靠近芯片 RTH 引脚，且 RTH 节点需要远离高压节点和噪声源。

## Tonmax 引脚

Tonmax 电阻需要尽量靠近芯片 Tonmax 引脚，且 Tonmax节点需要远离高压节点和噪声源。

## 地线

电流采样电阻的功率地线尽可能粗，且要离芯片的 GND 脚尽量近。另外，RTH 脚和 OVP 脚的电阻到芯片 GND 脚的连线应尽可能短。

## CS 引脚

电流采样电阻到芯片 CS 引脚的走线尽量短，以减小芯片采样误差。

## 功率环路的面积

减小功率环路的面积，如功率管、母线电容和续流二极管的环路面积，以减小 EMI 辐射。

## 封装信息

![](images/84f4f43e490c0f075c57a10db95f41e9477775830bfefc00b97a5af09bf079c5.jpg)

![](images/7b9d74a643b36508a8f67164b3d46a3945cfd3f280b435a1cb0f4ee5b8a524d4.jpg)

![](images/baea38385449e45201a66c512f65ea1eb2836e1f200ddb07d6b1fb50c6b7bf50.jpg)

![](images/b5af7d8bb9073385280658c1ead3913c5fa5526eccbc885e4c6da5afd03161d1.jpg)  
SECTION B-B

<table><tr><td rowspan="2">SYMBOL</td><td colspan="3">MILLIMETER</td></tr><tr><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A</td><td>1.30</td><td>—</td><td>1.80</td></tr><tr><td>A1</td><td>0.05</td><td>—</td><td>0.25</td></tr><tr><td>A2</td><td>1.25</td><td>1.40</td><td>1.65</td></tr><tr><td>b</td><td>0.33</td><td>—</td><td>0.51</td></tr><tr><td>c</td><td>0.17</td><td>—</td><td>0.25</td></tr><tr><td>D</td><td>4.70</td><td>4.90</td><td>5.10</td></tr><tr><td>E</td><td>5.80</td><td>6.00</td><td>6.30</td></tr><tr><td>E1</td><td>3.70</td><td>3.90</td><td>4.10</td></tr><tr><td>e</td><td colspan="3">1.27BSC</td></tr><tr><td>L</td><td>0.40</td><td>—</td><td>1.00</td></tr></table>

版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev. 1.0</td><td>2026/04</td><td>首次发行</td></tr><tr><td></td><td></td><td></td></tr></table>

![](images/40dc25f1bc52cd29c49210c9e5512edece534c7eeb6efd771508d80256b38949.jpg)

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明 源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。

## 电子器件报废说明

该产品在生命周期结束后，由客户按照一般电子产品的报废流程进行处理。