## BP3286CL升降压闭环可控硅调光 LED驱动芯片

## 概述

BP3286CL是一款高效率、高PF值，支持可控硅调光的 LED驱动芯片。芯片工作在电感电流临界连续模式，适用于Buck-Boost 结构的LED 驱动电源。

BP3286CL 芯片内部集成 500V 功率开关，采用栅极驱动和高压供电方式，只需要很少的外围元件，即可实现优异的恒流特性，极大的节约了系统成本和体积。

BP3286CL具有多重保护功能，包括LED 开路保护（过压保护)，LED短路保护，芯片温度过热调节等。

BP3286CL 采用 SOP-8 封装。

![](images/1fbe60b86ff67b331a627f71c1178497453c725de4afa2a754118eb70004503a.jpg)  
SOP-8 封装

## 特点

支持可控硅调光

内置COMP闭环恒流控制

内部集成500V功率管

临界连续电流控制模式

集成 600V 高压 JFET 供电，无 VCC 电容

±5% LED 输出电流精度

精准的LED 开路保护

RTH 设定过热调节功能

支持 NTC 保护线路

采用 SOP-8 封装

## 应用领域

LED球泡灯

LED 蜡烛灯

其他LED照明

## 典型应用

![](images/261aea92aeafd4feb6809cdbba8476cbd5d9d168909377a21e4007bf87ac1dac.jpg)  
图 1. BP3286CL 典型应用图(Buck-Boost)

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP3286CL</td><td>SOP-8</td><td>编带4,000颗/盘</td><td>BP3286CXXXXYZXXYYWWL</td></tr></table>

## 管脚封装

![](images/474e58729d52b05768da7cbdd5150d5405fef6b26710404a0c901e0841b57904.jpg)  
图 2. SOP-8 管脚封装图

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>VS</td><td>过压保护信号差分采样负端</td></tr><tr><td>2</td><td>RTH</td><td>过温调节起始温度设置及 NTC 功能</td></tr><tr><td>3</td><td>Tonmax</td><td>最大导通时间设置</td></tr><tr><td>4</td><td>CS</td><td>电流采样端</td></tr><tr><td>5</td><td>DRAIN</td><td>内置功率 MOS 管的漏极</td></tr><tr><td>6</td><td>HV</td><td>高压供电输入端</td></tr><tr><td>7</td><td>GND</td><td>芯片地</td></tr><tr><td>8</td><td>OVP</td><td>过压保护信号差分采样正端</td></tr></table>

极限参数(注1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td>HV</td><td>高压供电输入端</td><td>-0.3~600</td><td>V</td></tr><tr><td>DRAIN</td><td>内置功率 MOS 管的漏极</td><td>-0.3~500</td><td>V</td></tr><tr><td>RTH</td><td>过温调节起始温度设置及 NTC 功能</td><td>-0.3~7.5</td><td>V</td></tr><tr><td>VS</td><td>过压保护信号差分采样负端</td><td>-0.3~6</td><td>V</td></tr><tr><td>CS</td><td>电流采样端</td><td>-0.3~6</td><td>V</td></tr><tr><td>OVP</td><td>过压保护信号差分采样正端</td><td>-0.3~6</td><td>V</td></tr><tr><td>Tonmax</td><td>最大导通时间设置</td><td>-0.3~6</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注 2)</td><td>0.45</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>PN 结到环境的热阻</td><td>145</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40 to 150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55 to 150</td><td>°C</td></tr><tr><td></td><td>ESD(注 3)</td><td>2</td><td>kV</td></tr></table>

注1：最大极限值是指超出该工作范围，芯片有可能损坏。推荐工作范围是指在该范围内，器件功能正常，但并不完全保证满足个别性能指标。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。

注2：温度升高最大功耗一定会减小，这也是由TJMAX，θJA.和环境温度TA所决定的。最大允许功耗为 $P _ { \mathsf { D M A X } } = ( \mathsf { T } _ { \mathsf { J M A X } } - \mathsf { T } _ { \mathsf { A } } ) / \theta _ { \mathsf { J A } }$ 或是极限范围给出的数字中比较低的那个值。

注3：人体模型，100pF电容通过1.5kΩ电阻放电。

电气参数(注4，5)（无特别说明情况下，HV=30V，TA=25°C)

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">电源</td></tr><tr><td> $I_{ST}$ </td><td>HV启动电流</td><td></td><td></td><td>1</td><td></td><td>mA</td></tr><tr><td> $I_{OP}$ </td><td>HV工作电流</td><td></td><td></td><td>280</td><td></td><td>μA</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $V_{CS\_REF}$ </td><td>电流检测基准电压</td><td></td><td>388</td><td>400</td><td>412</td><td>mV</td></tr><tr><td> $V_{CS\_LIMIT}$ </td><td>电流峰值限流阈值</td><td></td><td></td><td>1.2</td><td></td><td>V</td></tr><tr><td> $T_{LEB}$ </td><td>前沿消隐时间</td><td></td><td></td><td>350</td><td></td><td>ns</td></tr><tr><td> $T_{DELAY}$ </td><td>芯片关断延迟</td><td></td><td></td><td>200</td><td></td><td>ns</td></tr><tr><td colspan="7">内部时间控制</td></tr><tr><td> $T_{OFF\_MIN}$ </td><td>最小退磁时间</td><td></td><td></td><td>2.5</td><td></td><td>μs</td></tr><tr><td> $T_{ZCD\_MASK}$ </td><td>退磁屏蔽时间</td><td></td><td></td><td>1.75</td><td></td><td>μs</td></tr><tr><td> $T_{OFF\_MAX}$ </td><td>最大退磁时间</td><td></td><td></td><td>140</td><td></td><td>μs</td></tr><tr><td> $T_{ON\_MAX}$ </td><td>最大导通时间</td><td>Tonmax接51k</td><td>10.8</td><td>12</td><td>13.2</td><td>μs</td></tr><tr><td colspan="7">RTH</td></tr><tr><td> $I_{RTH}$ </td><td>RTH上拉电流</td><td></td><td>46</td><td>50</td><td>54</td><td>μA</td></tr><tr><td colspan="7">开路保护</td></tr><tr><td> $V_{OVP\_H}$ </td><td>过压保护触发阈值</td><td></td><td>0.48</td><td>0.5</td><td>0.52</td><td>V</td></tr><tr><td> $V_{OVP\_L}$ </td><td>过压保护退出阈值</td><td></td><td></td><td>0.4</td><td></td><td>V</td></tr><tr><td colspan="7">功率MOSFET</td></tr><tr><td> $R_{DS\_ON}$ </td><td>MOSFET导通电阻</td><td>VGS=10V/IDS=0.5A</td><td></td><td>3</td><td>3.6</td><td>Ω</td></tr><tr><td> $BV_{DSS}$ </td><td>MOSFET击穿电压</td><td>VGS=0V/IDS=250μA</td><td>500</td><td></td><td></td><td>V</td></tr><tr><td> $I_{DSS}$ </td><td>MOSFET漏电流</td><td>VGS=0V/VDS=500V</td><td></td><td></td><td>1</td><td>μA</td></tr><tr><td colspan="7">过热调节</td></tr><tr><td> $T_{REG1}$ </td><td>过热调节温度 1</td><td>RTH=75k</td><td></td><td>150</td><td></td><td>°C</td></tr><tr><td> $T_{REG2}$ </td><td>过热调节温度 2</td><td>RTH=300k</td><td></td><td>120</td><td></td><td>°C</td></tr><tr><td> $T_{REG3}$ </td><td>过热调节温度 3</td><td>RTH 悬空</td><td></td><td>130</td><td></td><td>°C</td></tr></table>

注4：典型参数值为25℃下测得的参数标准。  
注5：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。

## 内部结构框图

![](images/37424640a03fc957aa3935a7f26f33da3eac1a5957e2b783b76e0d91db45ac4d.jpg)  
图 3. BP3286CL 内部框图

## 功能描述

BP3286CL 是一款高效率支持可控硅调光的LED驱动芯片，应用于 Buck-Boost 结构的 LED 驱动电源。电路采用无 VCC电容的高压供电架构，只需要极少的外围组件就可以达到优异的恒流特性，极大的节约了系统成本和体积。在外接调光器时，BP3286CL通过内部 Tonmax限制，使输出电流跟随调光角度同步调节，改善调光范围和调光兼容性。

## 1 启动

系统上电后，母线电压通过HV引脚给芯片供电，当芯片内部电压达到芯片开启阈值时，芯片控制电路开始工作。

## 2恒流控制

芯片 CS 端连接到内部的基准运放反向输入端，运放正向输出端为CS 基准电压，运放输出端误差信号通过内部补偿自动调节占空比实现输出恒流。

输出电流的计算公式为：

$$
I _ {L E D} = \frac {V _ {C S \_ R E F}}{2 * R _ {C S}} (m A)
$$

其中，RCS为电流采样电阻阻值。

## 3 储能电感

BP3286CL工作在电感电流临界模式，当功率管导通时，流过储能电感的电流从零开始上升，导通时间为：

$$
t _ {o n} = \frac {L \times I _ {P K}}{V _ {I N}}
$$

其中，L是电感量；

IPK是电感电流的峰值；

VIN 是经整流后的母线电压；

当功率管关断时，流过储能电感的电流从峰值开始往下降，当电感电流下降到零时，芯片内部逻辑再次将功率管开通。功率管的关断时间为：

$$
t _ {o f f} = \frac {L \times I _ {P K}}{V _ {L E D}}
$$

储能电感的计算公式为：

$$
L = \frac {V _ {L E D} \times V _ {I N}}{f \times I _ {P K} \times (V _ {L E D} + V _ {I N})}
$$

其中，f为系统最大工作频率。设置 BP3286CL系统工作频率时，选择在输入电压最低时设置系统的最小工作频率和最大导通时间，而当输入电压最高时，系统的导通时间最小，工作频率最高。

## 4最大导通时间设置

BP3286CL 具有最大导通时间调节功能，通过调节 Tonmax引脚对地电阻调节芯片最大导通时间，可以很好的兼容不同系统工作频率和调光曲线。Tonmax引脚不允许悬空。

![](images/27e4e7b9dd05aaafcdc1e2d7076cb29d2f5a24b6f2e65444c546737d55249394.jpg)  
图 4. Tonmax 设置曲线

## 5 过压保护电阻设置

OVP引脚用来探测输出过压保护。OVP的上下分压电阻比例可以设置为：

$$
V _ {O V P} = \frac {R _ {O V P} + 1 0 k}{1 0 \mathrm{k}} \times V _ {O V P \_ H}
$$

其中，

ROVP 为 R1 或 R2 的阻值，R1/R2 为阻值相同的电阻；

R1 是差分反馈网络正端的上分压电阻：

R2 是差分反馈网络负端的上分压电阻：

$\mathsf { V O V P \_ H }$ 是芯片检测 OVP 保护阈值；

VOVP是输出电压过压保护设定点；

为了提高OVP精度，建议采用高精度电阻。

建议在VS和OVP引脚之间并联电阻提高电路抗干扰能力。

![](images/636a867f2bc3eb2406df16a34f1a8aa453e2dee671bd02b21ffb3858e3aef322.jpg)  
图 5.OVP 线路示意图

## 6 过温调节功能

BP3286CL 具有过热调节 过热时逐渐减小输出电流，从而控制输出功率和温升 使电源温度保持在设定值，以提高系统的可靠性。芯片内部设定的过热调节温度点可通过 RTH 引脚对地电阻设定，RTH 引脚对地建议并联330pF电容滤掉高频开关噪声干扰。

RTH 引脚兼容 NTC 功能，当使用 NTC 功能时，建议在 RTH对地并联100k以下电阻将芯片过温调节设为150℃。当NTC引脚电压低于 0.5V 时，芯片基准开始下降，当 NTC 引脚电压低于0.34V时，芯片基准电压降到60%。

![](images/6dddd98b2749f7900f0adb34874cf9811b76ce8e5c95564d68fd2d7b92c5d65e.jpg)

图 6.NTC 参考线路  
![](images/53c55ffbf5b48c9e1f24374c9df1418dac53fe7c2a44e5e5cc2cad05f8ee2866.jpg)  
图 7. NTC 降功率曲线

## 7保护功能

BP3286CL 内置多种保护功能，包括LED 开路保护(过压保

护)，LED短路保护，芯片过热调节等。

## LED 过压保护功能

当输出LED 负载开路时，随着输出电压的上升，当输出电压达到设定的过压保护点，会触发芯片过压保护逻辑并停止开关工作。

## LED 短路保护功能

当输出LED负载短路时，电感电流续流时间过长，芯片无法检测到续流结束信号，所以芯片工作在最大退磁时间Toffmax。

## 8 PCB 设计

在设计 BP3286CL PCB 时，需要遵循以下指南：

## RTH 引脚

RTH 电阻需要尽量靠近芯片 RTH 引脚，且 RTH 节点需要远离高压节点和噪声源。

## Tonmax 引脚

Tonmax 电阻需要尽量靠近芯片 Tonmax 引脚，且 Tonmax节点需要远离高压节点和噪声源。

## 地线

电流采样电阻的功率地线尽可能粗，且要离芯片的 GND脚尽量近。另外，RTH 脚和 OVP 脚的电阻到芯片 GND 脚的连线应尽可能短。

## DRAIN 引脚

增加DRAIN引脚的铺铜面积可以提高芯片散热，但是铺铜会影响EMI性能。

## 功率环路的面积

减小功率环路的面积，如功率管、母线电容和续流二极管的环路面积，以减小EMI辐射。

## 封装信息

![](images/248bd31ca63f0a989efbca3ccb0e441d8b60fe32f1b2fda3848d90fd7d36e1a9.jpg)

![](images/dbdbfd5851eac693e9a78d57571e9f75bc9c6645ffaf5465bc33ef4370d2ff87.jpg)

![](images/b38e1beea8f10492cd839c9eec7236880845a1316681b51d8966bd3b2cc72b85.jpg)

![](images/e1702cdef3cf743f5913c8f5fd1e180a859afe7fd2f97a051c47c45b298063be.jpg)  
SECTION B-B

<table><tr><td rowspan="2">SYMBOL</td><td colspan="3">MILLIMETER</td></tr><tr><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A</td><td>1.30</td><td>—</td><td>1.80</td></tr><tr><td>A1</td><td>0.05</td><td>—</td><td>0.25</td></tr><tr><td>A2</td><td>1.25</td><td>1.40</td><td>1.65</td></tr><tr><td>b</td><td>0.33</td><td>—</td><td>0.51</td></tr><tr><td>c</td><td>0.17</td><td>—</td><td>0.25</td></tr><tr><td>D</td><td>4.70</td><td>4.90</td><td>5.10</td></tr><tr><td>E</td><td>5.80</td><td>6.00</td><td>6.30</td></tr><tr><td>E1</td><td>3.70</td><td>3.90</td><td>4.10</td></tr><tr><td>e</td><td colspan="3">1.27BSC</td></tr><tr><td>L</td><td>0.40</td><td>—</td><td>1.00</td></tr></table>

![](images/b09b38e3a8f7eeac48134e3050b2c1ddb2e992f3260338904d1015545b36145c.jpg)

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev. 1.0</td><td>2023/12</td><td>首次发行</td></tr><tr><td>Rev. 1.1</td><td>2024/08</td><td>修改 Toffmax 典型值,增加电子器件报废说明</td></tr><tr><td></td><td></td><td></td></tr></table>

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性，商业上的适销性，特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。

## 电子器件报废说明

该产品在生命周期结束后，由客户按照一般电子产品的报废流程进行处理。