## BP2362JHL 非隔离降压型有源 PFC LED 驱动芯片

## 概述

BP2362JHL 是一款带有源功率因素校正的高精度非隔离型降压型 PFC LED 驱动芯片，专为通用电源设计且具有恒流控制作用。且 BP2362JHL 工作在临界导通模式，减小了开关损耗并优化了 EMI。

BP2362JHL 去除了 VCC, COMP 电容以此简化外部电路。它采用了特有的电流检测技术，减少了外部元件的同时可实现高精度输出电流，且拥有良好的线性调整率和负载调整率。

BP2362JHL 具有多重保护功能以加强系统可靠性，包括 LED 短路保护,LED 开路保护，另外，BP2362JHL 具有过热调节功能，在驱动电源过热时减小输出电流，以提高系统的可靠性。

![](images/72845263e25c86f358f77a62db89f7fa7001038ec2877b04b85d543603511828.jpg)  
SOP7 封装

## 特点

■ 有源功率因数校正，0.9 PF，低谐波

无VCC和COMP电容

外置电流采样电阻

■ 电感电流临界连续模式

■ LED 短路保护

■ LED 开路保护(OVP 电阻调节)

■ Enable 功能兼容开关调色和感应灯

■ 逐周期电流限流

■ 过热调节功能

■ 采用 SOP7 封装

## 应用

■ LED 球泡灯

■ LED 灯管

■ 其它LED照明

## 典型应用

![](images/4c50399b9865ca97aab95a37a94faa2498eff06bff5c395ff572f6883b1eddb8.jpg)  
图 1 BP2362JHL 典型应用图

ZZZZ: 标示

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP2362JHL</td><td>SOP7</td><td>编带4,000 颗/盘</td><td>BP2362XXXXXYHZZZZWWJL</td></tr></table>

## 管脚封装

![](images/1ad821e635c46279db724b532915d51d9907cba3511f02e6bd8661d8d9e0fb30.jpg)  
图 3 管脚封装图

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>ROVP</td><td>OVP 设置引脚(OVP 悬空,无 OVP)</td></tr><tr><td>2</td><td>GND</td><td>芯片地</td></tr><tr><td>3</td><td>NC</td><td>无连接</td></tr><tr><td>4</td><td>HV</td><td>芯片高压供电端</td></tr><tr><td>5,6</td><td>DRAIN</td><td>内部高压功率管漏极</td></tr><tr><td>7</td><td>CS</td><td>电流采样端,采样电阻接在 CS 和 GND 端之间</td></tr></table>

## 极限参数(注1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td>DRAIN</td><td>内部高压功率管漏极到源极峰值电压</td><td>-0.3~600</td><td>V</td></tr><tr><td>HV</td><td>芯片高压供电接口</td><td>-0.3~500</td><td>V</td></tr><tr><td>ROVP</td><td>OVP设置端</td><td>-0.3~6</td><td>V</td></tr><tr><td>CS</td><td>电流采样端</td><td>-0.3~6</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注2)</td><td>0.45</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>PN结到环境的热阻</td><td>145</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40 to 150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>存储温度范围</td><td>-55 to 150</td><td>°C</td></tr></table>

注1：最大极限值是指超出该工作范围，芯片有可能损坏。推荐工作范围是指在该范围内，器件功能正常，但并不完全保证满足个别性能指标。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。  
注2：温度升高最大功耗一定会减小，这也是由 $T_{JMAX}, \theta_{JA}$ 和环境温度 $T_A$ 所决定的。最大允许功耗为 $P_{DMAX} = (T_{JMAX} - T_A) / \theta_{JA}$ 或是极限范围给出的数字中比较低的那个值。

电气参数(注3,4)（无特别说明情况下，HV=100V, $T_{A}=25^{\circ}C$ ）

<table><tr><td>符号</td><td>参数描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">高压电源(HV)</td></tr><tr><td> $I_{CC}$ </td><td>IC工作电流</td><td></td><td></td><td>0.4</td><td></td><td>mA</td></tr><tr><td colspan="7">内部控制</td></tr><tr><td> $T_{ON\_MAX}$ </td><td>最大导通时间</td><td></td><td></td><td>20</td><td></td><td>μs</td></tr><tr><td> $T_{OFF\_MIN}$ </td><td>最小关断时间</td><td></td><td></td><td>1.8</td><td></td><td>μs</td></tr><tr><td> $T_{OFF\_MAX}$ </td><td>最大关断时间</td><td></td><td></td><td>170</td><td></td><td>μs</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $V_{CS\_LIMIT}$ </td><td>CS峰值电压限制</td><td></td><td></td><td>1.4</td><td></td><td>V</td></tr><tr><td> $T_{LEB\_CS}$ </td><td>电流采样前沿消隐时间</td><td></td><td></td><td>300</td><td></td><td>ns</td></tr><tr><td> $T_{DELAY}$ </td><td>芯片关断延迟</td><td></td><td></td><td>200</td><td></td><td>ns</td></tr><tr><td> $V_{REF}$ </td><td>内部基准电压</td><td></td><td>290</td><td>300</td><td>310</td><td>mV</td></tr><tr><td colspan="7">OVP控制</td></tr><tr><td> $I_{OVP}$ </td><td>OVP引脚电流</td><td></td><td></td><td>100</td><td></td><td>μA</td></tr><tr><td> $T_{OVP\_RST}$ </td><td>OVP恢复时间</td><td></td><td></td><td>100</td><td></td><td>mS</td></tr><tr><td rowspan="3"> $V_{EN}$ </td><td>ROVP引脚开机电压</td><td rowspan="2"></td><td colspan="3">关机电压+迟滞电压</td><td rowspan="2">V</td></tr><tr><td>ROVP引脚关机电压</td><td>0.1</td><td>0.2</td><td>0.3</td></tr><tr><td> $V_{EN}$ 迟滞电压</td><td></td><td></td><td>0.1</td><td></td><td>V</td></tr><tr><td colspan="7">功率MOSFET</td></tr><tr><td>JHL  $R_{DS\_ON}$ </td><td>功率MOSFET导通电阻</td><td> $V_{GS}=10V/ I_{DS}=0.5A$ </td><td></td><td>1.9</td><td></td><td>Ω</td></tr><tr><td>JHL  $BV_{DSS}$ </td><td>功率MOSFET击穿电压</td><td> $V_{GS}=0V/ I_{DS}=250uA$ </td><td>600</td><td></td><td></td><td>V</td></tr><tr><td>JHL  $I_{DSS}$ </td><td>功率MOSFET漏电流</td><td> $V_{GS}=0V/V_{DS}=600V$ </td><td></td><td></td><td>1</td><td>μA</td></tr><tr><td colspan="7">过热调节部分</td></tr><tr><td> $T_{REG}$ </td><td>过热调节温度</td><td>IC Surface</td><td></td><td>140</td><td></td><td>°C</td></tr></table>

注 3: 典型参数值为 $25^{\circ}$ C 下测得的参数标准。  
注4：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。

## 内部结构框图

![](images/36747a6a6cf76f268afe1740e8242e9a8f297edfd744ecd89a2f122d5fafd4f3.jpg)  
图 4 BP2362JHL 内部框图

## 应用信息

BP2362JHL 是一款带有有源功率因素校正的高精度非隔离降压 PFC LED 驱动芯片，专为具有恒流控制的通用电源而设计。系统工作在电感电流临界连续模式，可以实现高功率因数、较低的总谐波失真和高效率。

## 1 启动

在系统上电后，母线电压通过 HV 对芯片内部供电，当内部供电达到芯片开启阈值时，芯片内部控制电流开始工作，输出电压逐渐上升，电感峰值电流随之上升，从而实现输出 LED 电流的软启动，有效防止输出电流过冲。

## 2 恒流控制

BP2362JHL 采用特有恒流算法，在 CS 端电压采样后与芯片内部基准电压进行比较，可以实现高精度输出恒流控制。

LED 输出电流计算方法：

其中，

$$
I _ {L E D} = \frac {V _ {\mathrm{REF}}}{R c s}
$$

VREF是内部基准电压

RCS 是电流采样电阻的值

## 3 过压保护电阻设置

开路保护电压可以通过 OVP 引脚电阻来设置，OVP 引脚流出的电流约为 100uA。

当 LED 开路时，输出电压逐渐上升，退磁时间变短。芯片内部集成开路保护算法，通过 OVP 外置电阻来计算开路保护电压 VOVP。

$$
\mathrm{Vovp} \approx \frac {1 5 \times \mathrm{L} \times \mathrm{R} _ {\mathrm{OVP}}}{\mathrm{Rcs}}
$$

其中，

L—功率电感感量，单位为 mH

ROVP—连接与 OVP 与 GND Pin 脚之间电阻，单位为 KΩ

## 4 过热调节

BP2362JHL 具有过热调节功能，在驱动电源过热时逐渐减小输出电流，从而控制输出功率和温升，使电源温度保持在设定值，以提高系统的可靠性。

## 5 保护功能

BP2362JHL 内置多重保护功能，保证了系统可靠性。

当 LED 输出短路时，芯片工作开关频率将工作在 5kHz 左右。

当输出短路或变压器饱和时，CS 峰值电压将会比较高。当 CS 电压上升到内部限制值（1.8V）时，该功率 MOS 管马上停止工作。此逐周期限流功能可以保护功率 MOS 管、功率电感和输出续流二极管。

## 6 PCB 设计

在设计 BP2362JHL PCB 板时，需要注意以下事项：

地线走线

电流采样电阻的功率地线尽可能短而粗。

功率环路的面积

尽可能减小大电流环路的面积，以减小 EMI 辐射。

DRAIN Pin

尽可能加大 DRAIN Pin 铺铜改善芯片散热，过大的 DRAIN 铺铜会导致 EMI 变差。

CS Pin

尽可能加大 CS Pin 铺铜改善芯片散热。

## 封装信息(SOP7)

![](images/a380f3da8cb442b4f5892a8fc88106afca97cd6e67b11a995a70c20e2c9a2979.jpg)

![](images/0199ce06b5403fd8947cce3c699938855a643ead80d6093fd08439744930ef90.jpg)

![](images/9f30a658960396087d0cb8d6e51c8c4ab5f36c363f40d86ba2cdea92c896d458.jpg)

![](images/88fd2ce20a2223658cb6b51a3cd7c73081e7f944b7c9acd758fcfaecf7dc22cb.jpg)  
SECTION B-B

<table><tr><td rowspan="2">SYMBOL</td><td colspan="3">MILLIMETER</td></tr><tr><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A</td><td>1.30</td><td>—</td><td>1.80</td></tr><tr><td>A1</td><td>0.05</td><td>—</td><td>0.25</td></tr><tr><td>A2</td><td>1.25</td><td>—</td><td>1.65</td></tr><tr><td>b</td><td>0.33</td><td>—</td><td>0.51</td></tr><tr><td>c</td><td>0.10</td><td>—</td><td>0.25</td></tr><tr><td>D</td><td>4.70</td><td>4.90</td><td>5.10</td></tr><tr><td>E</td><td>5.80</td><td>6.00</td><td>6.24</td></tr><tr><td>E1</td><td>3.70</td><td>3.90</td><td>4.10</td></tr><tr><td>e</td><td colspan="3">1.27BSC</td></tr><tr><td>L</td><td>0.40</td><td>—</td><td>1.00</td></tr></table>

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev.1.0</td><td>2024/10</td><td>首次发行</td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。

## 电子器件报废说明

该产品在生命周期结束后，由客户按照一般电子产品的报废流程进行处理。