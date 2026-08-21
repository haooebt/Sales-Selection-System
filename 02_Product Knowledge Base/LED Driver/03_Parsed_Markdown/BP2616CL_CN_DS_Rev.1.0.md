## 概述

BP2616CL 是一款高效率、高 PF值的 LED 驱动芯片。芯片工作在电感电流临界连续模式，适用于全压输入 Boost 架构的 LED驱动电源。

BP2616CL 芯片采用先进的栅极驱动和高压供电方式，只需要很少的外围元件，即可实现优异的恒流特性，极大的节约了系统成本和体积。

BP2616CL具有多重保护功能，包括LED开路保护（过压保护）、芯片温度过热调节等。

BP2616CL 采用 SOP-8 封装。

![](images/a75e17d792f6406149e716d857b50c5dd9300044c39ecd996ec01d338e04204c.jpg)  
SOP-8 封装

## 特点

 内置 COMP 闭环恒流控制

 临界连续电流控制模式

 集成 600V 高压 JFET 供电，无 VCC 电容

 ±5% LED 输出电流精度

 精准的 LED 开路保护

 RTH 设定过热调节功能

 采用 SOP-8 封装

## 应用领域

 LED 球泡灯

 LED 灯

 其它 LED 照明

## 典型应用

![](images/501afc1c93047bea733f6c44acd73a1e8857255b2ca4993f50020dea7c1a8a67.jpg)  
图 1 BP2616CL 典型应用电路  
注：该线路及参数仅供参考，实际应用电路和参数请通过试验充分验证。

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP2616CL</td><td>SOP-8</td><td>卷盘4,000/盘</td><td>BP2616XXXXYLXXYYWWC</td></tr></table>

## 管脚封装

![](images/c29fee354a12f0b639c33d380f564d5f40a2055701c019305f2fc912df963576.jpg)  
BP2616CL：产品型号  
XXXXXY：批次  
XXYY：标识  
图 2 SOP-8 管脚封装图

WW：周号

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>OVP</td><td>过压保护信号采样端</td></tr><tr><td>2</td><td>RTH</td><td>过温调节起始温度设置及NTC功能</td></tr><tr><td>3</td><td>GND</td><td>芯片地</td></tr><tr><td>4</td><td>CS</td><td>电流采样端</td></tr><tr><td>5</td><td>DRAIN</td><td>内置 MOS 漏极</td></tr><tr><td>6</td><td>NC</td><td>悬空。NC 引脚应用时请勿连接其它节点,包括 HV 和 DRAIN。</td></tr><tr><td>7</td><td>HV</td><td>高压供电输入端</td></tr><tr><td>8</td><td>NC</td><td>悬空。NC 引脚应用时请勿连接其它节点,包括 HV 和 DRAIN。</td></tr></table>

## 极限参数(注 1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td>HV</td><td>高压供电输入端</td><td>-0.3~600</td><td>V</td></tr><tr><td>DRAIN</td><td>内置MOS漏极</td><td>-0.3~500</td><td>V</td></tr><tr><td>RTH</td><td>过温调节起始温度设置及NTC功能</td><td>-0.3~6</td><td>V</td></tr><tr><td>CS</td><td>电流采样端</td><td>-0.3~6</td><td>V</td></tr><tr><td>OVP</td><td>过压保护信号采样端</td><td>-0.3~6</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注2)</td><td>0.45</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>PN结到环境的热阻(注3)</td><td>145</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40~150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55~150</td><td>°C</td></tr></table>

注 1：最大极限值是指超出该工作范围，芯片有可能损坏。推荐工作范围是指在该范围内，器件功能正常，但并不完全保证满⾜个别性能指标。电⽓参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。

注 2：温度升高最大功耗一定会减小，这也是由 T<sub>JMAX</sub>, θ<sub>JA</sub>,和环境温度T<sub>A</sub>所决定的。最大允许功耗为 $P _ { D M A X } = ( T _ { J M A X } - T _ { A } ) / \theta _ { J A }$ 或是极限范围给出的数字中比较低的那个值。

注 3：1平方英寸双层 PCB板，按照JEDEC 标准测试。

电气参数(注 4)（无特别说明情况下， ${ \sf T } _ { \sf A } = 2 5 ^ { \circ } { \sf C } )$

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">电源</td></tr><tr><td> $I_{ST}$ </td><td>HV启动电流</td><td></td><td></td><td>1.2</td><td></td><td>mA</td></tr><tr><td> $I_{OP}$ </td><td>HV工作电流</td><td> $F_{OP}=40KHz$ </td><td>200</td><td>330</td><td>450</td><td>μA</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $V_{CS\_REF}$ </td><td>电流检测基准电压</td><td></td><td>290</td><td>300</td><td>310</td><td>mV</td></tr><tr><td> $V_{CS\_LIMIT}$ </td><td>电流峰值限流阈值(注5)</td><td></td><td>1.9</td><td>2.2</td><td>2.5</td><td>V</td></tr><tr><td> $T_{LEB}$ </td><td>前沿消隐时间</td><td></td><td></td><td>350</td><td></td><td>ns</td></tr><tr><td> $T_{DELAY}$ </td><td>芯片关断延迟</td><td></td><td></td><td>200</td><td></td><td>ns</td></tr><tr><td colspan="7">内部时间控制</td></tr><tr><td> $T_{OFF\_MIN}$ </td><td>最小退磁时间</td><td></td><td></td><td>4</td><td></td><td>μs</td></tr><tr><td> $T_{OFF\_MAX}$ </td><td>最大退磁时间(注5)</td><td></td><td>28</td><td>40</td><td>52</td><td>μs</td></tr><tr><td> $T_{ON\_MAX}$ </td><td>最大开通时间</td><td></td><td>13.5</td><td>17</td><td>21</td><td>μs</td></tr><tr><td colspan="7">RTH</td></tr><tr><td> $I_{RTH}$ </td><td>RTH上拉电流</td><td></td><td>40</td><td>50</td><td>60</td><td>μA</td></tr><tr><td colspan="7">开路保护</td></tr><tr><td> $V_{OVP\_H}$ </td><td>过压保护触发阈值</td><td></td><td>0.482</td><td>0.5</td><td>0.518</td><td>V</td></tr><tr><td> $V_{OVP\_L}$ </td><td>过压保护退出阈值</td><td></td><td></td><td>0.44</td><td></td><td>V</td></tr><tr><td colspan="7">功率MOSFET</td></tr><tr><td> $BV_{DSS}$ </td><td>功率管的击穿电压</td><td> $V_{GS}=0V/ I_{DS}=250uA$ </td><td>500</td><td></td><td></td><td>V</td></tr><tr><td> $I_{DSS}$ </td><td>功率管漏电流</td><td> $V_{GS}=0V/V_{DS}=500V$ </td><td></td><td></td><td>1</td><td>μA</td></tr><tr><td>ID</td><td>连续漏极电流</td><td> $T_{C}=25°C$ </td><td></td><td>2</td><td></td><td>A</td></tr><tr><td colspan="7">过热调节部分</td></tr><tr><td> $T_{REG1}$ </td><td>过热调节温度1</td><td> $RTH=150kΩ$ </td><td></td><td>150</td><td></td><td>°C</td></tr><tr><td> $T_{REG2}$ </td><td>过热调节温度2</td><td> $RTH=300kΩ$ </td><td></td><td>120</td><td></td><td>°C</td></tr><tr><td> $T_{REG3}$ </td><td>过热调节温度3</td><td> $RTH悬空$ </td><td></td><td>130</td><td></td><td>°C</td></tr></table>

注 4：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。  
注 5：设计保证。

## 内部结构框图

![](images/93037d50c6a38f0417df0006c3c1dfc8590076566dc293f14e8ea4889bd27cfd.jpg)  
图 3 BP2616CL 内部框图

## 功能描述

BP2616CL 是一款高效率的 LED 驱动芯片，应用于全压输入Boost 架构的 LED 驱动电源。电路采用无 VCC 电容的高压供电架构，只需要极少的外围组件就可以达到优异的恒流特性，极大的节约了系统成本和体积。

## 启动

系统上电后，⺟线电压通过 HV引脚给芯片供电，当芯片内部电压达到芯片开启阈值时，芯片控制电路开始工作。

## 恒流控制

芯片 CS 端连接到内部的基准运放反向输入端，运放正向输出端为 CS 基准电压，运放输出端误差信号通过内部补偿自动调节占空比实现输出恒流。

输出电流的计算公式为：

$$
I _ {\mathrm{LED}} = \frac {V _ {C S \_ R E F}}{2 * R _ {C S}} (m A)
$$

其中， $\mathsf { R c s }$ 为电流采样电阻阻值。

## 储能电感

BP2616CL 工作在电感电流临界模式，当功率管导通时，流过储能电感的电流从零开始上升，BOOST 导通时间为：

$$
t _ {o n} = \frac {L \times I _ {P K}}{V _ {I N}}
$$

其中，L 是电感量；

$\mathsf { I } _ { \mathsf { P K } }$ 是电感电流的峰值；

$V _ { \mathsf { I N } }$ 是经整流后的⺟线电压；

当功率管关断时，流过储能电感的电流从峰值开始往下降，当电感电流下降到零时，芯片内部逻辑再次将功率管开通。BOOST 功率管的关断时间为：

$$
t _ {o f f} = \frac {L \times I _ {P K}}{V _ {L E D} - V _ {I N}}
$$

BOOST 储能电感的计算公式为：

$$
L = \frac {(V _ {L E D} - V _ {I N}) \times V _ {I N}}{f \times I _ {P K} \times V _ {L E D}}
$$

其中，f为系统最大工作频率。设置 BP2616CL 系统工作频率时，选择在输入电压最低时设置系统的工作频率和最大导通时间，而当输入电压最高时，系统的导通时间最小。

## 过压保护电阻设置

OVP引脚用来探测输出过压保护。OVP的上下分压电阻比例可以设置为：

$$
V _ {O V P} = \frac {R 1 + (R 2 / / 1 0 K)}{\mathrm{R} 2 / / 1 0 \mathrm{K}} \times V _ {O V P \_ H}
$$

其中，

R2 是反馈网络的下分压电阻；

R1 是反馈网络的上分压电阻；

$\mathsf { V o v p \_ H }$ 是芯片检测 OVP保护阈值；

$\mathsf { V o v p }$ 是输出电压过压保护设定点；

为提高 OVP精度，OVP下分压电阻推荐 1KΩ 左右。

![](images/c64857cb0f7039ddc2284ab462e3e8e2f126ef7738767dec7e8d87351c57ebab.jpg)  
图 4 OVP线路⽰意图

## 过温调节功能

BP2616CL 具有过热调节功能，在驱动电源过热时逐渐减小输出电流，从而控制输出功率和温升，使电源温度保持在设定值，以提高系统的可靠性。芯片内部设定的过热调节温度点可通过 RTH 引脚对地电阻设定。

RTH 引脚兼容 NTC 功能，当使用 NTC 功能时，建议在 RTH对地并联 150K 电阻将芯片过温调节设为 $1 5 0 ^ { \circ } \mathsf { C } _ { \circ }$ 当 RTH 引脚电压低于 0.5V 时，芯片基准开始下降，当 RTH 引脚电压低于 0.34V 时，芯片基准电压降到 $1 3 5 \mathsf { m V } _ { \circ }$

![](images/9edfc242c24c5fd0dd1231aa9549466547d4807e4f90069ee255c2575e0c26bd.jpg)

图 5 NTC 参考线路  
![](images/b18b0811dff70a2c88ebe404183622d2797f9691838ac0bc87d11221ea5668f9.jpg)  
图 6 NTC 降功率曲线

## 保护功能

BP2616CL 内置多种保护功能，包括 LED 开路保护，芯片过热调节等。

## 过压保护功能

当输出 LED 负载开路时，随着输出电压的上升，当输出电压达到设定的过压保护点，会触发芯片过压保护逻辑并停止开关工作。

## PCB Layout 指南

在设计 BP2616CLPCB时，需要遵循以下指南：

1) RTH 电阻需要尽量靠近芯片RTH 引脚，且RTH 节点需要远离高压节点和噪声源。

2) 电流采样电阻的功率地线尽可能粗，且要离芯片的 GND脚尽量近。另外，RTH 脚和 OVP脚的电阻到芯片 GND脚的连线应尽可能短。

3) 电流采样电阻到芯片 CS 引脚的⾛线尽量短，以减小芯片采样误差。

4) 减小功率环路的⾯积，如功率管、⺟线电容和续流⼆极管的环路⾯积，以减小 EMI 辐射。

5) NC引脚应用时请勿连接其它节点，包括HV和DRAIN。

## 封装信息

![](images/945720c1ebad9057052c241f6882682d55abd5d23fe1c854117426ceabb86392.jpg)  
SOP-8 封装外形尺寸

![](images/fbb30c34eb94c5710ac766d50b132466706341a9b9040c4d0431b82cfd0b396a.jpg)

![](images/5d183132fa19b5d6eb621e9c64ddb5919570eac503925be23eb189c7312af45f.jpg)

![](images/9de2b18993a61f343cf58574ed28cb32d703c1c3bc61dd33123e98a1ac914243.jpg)  
SECTION B-B

![](images/53578cfa26771bac5726901bdbea0b617db2e72399c66d5b18d3c87efd05ec6d.jpg)

<table><tr><td rowspan="2">SYMBOL</td><td colspan="3">MILLIMETER</td></tr><tr><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A</td><td>1.30</td><td>—</td><td>1.80</td></tr><tr><td>A1</td><td>0.05</td><td>—</td><td>0.25</td></tr><tr><td>A2</td><td>1.25</td><td>1.40</td><td>1.65</td></tr><tr><td>b</td><td>0.33</td><td>—</td><td>0.51</td></tr><tr><td>c</td><td>0.17</td><td>—</td><td>0.25</td></tr><tr><td>D</td><td>4.70</td><td>4.90</td><td>5.10</td></tr><tr><td>E</td><td>5.80</td><td>6.00</td><td>6.30</td></tr><tr><td>E1</td><td>3.70</td><td>3.90</td><td>4.10</td></tr><tr><td>e</td><td colspan="3">1.27BSC</td></tr><tr><td>L</td><td>0.40</td><td>—</td><td>1.00</td></tr></table>

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev.1.0</td><td>2024/7</td><td>首次发行</td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>

## 免责声明

晶丰明源尽⼒确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明⽰或暗⽰的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定⽬的的适用性或者不侵犯晶丰明源或任何第三⼈知识产权做任何明⽰或暗⽰保证，晶丰明源也不就因本规格书本⾝及其使用有关的偶然或必然损失承担任何责任。

## 电子器件报废说明

该产品在⽣命周期结束后，由客⼾按照一般电⼦产品的报废流程进⾏处理。