## 概述

BP5116DJ 是一款高精度的单段线性恒流 LED控制芯片，集成了高压 MOS管和JFET 高压供电功能。主要用于驱动由市电供电的高电压、低电流 LED灯串。由于不需要磁性元件，LED 驱动器可以实现小体积、长寿命，并符合EMI 规定。

BP5116DJ 可以通过外部电阻精确的设定 LED电流。

BP5116DJ 具有过温调节功能。当输入电压过高，或者 LED 电流过大时，此功能将降低输出电流。

## 特点

◆ 外围电路非常简单，驱动器体积非常小

◆ 无需磁性元件

◆ 500V 高压MOS管，无需压敏电阻

◆ 超快LED启动

◆ ±5% LED 输出电流精度

◆ LED 电流可外部设定

◆ 过温调节功能

◆ 采用 ESOP8 封装

## 应用

◆ GU10/E27 LED 球泡灯、射灯

◆ LED 蜡烛灯

◆ 其它 LED 照明

## 典型应用

![](images/d2defa5a45581a4926ec62e6d282087e48b6ef6c093aaf6e1e82b7e5382e033a.jpg)  
图 1 BP5116DJ 典型应用图

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>温度范围</td><td>包装形式</td><td>打印</td></tr><tr><td>BP5116DJ</td><td>ESOP8</td><td>-40 °C到105 °C</td><td>编带4000颗/盘</td><td>BP5116XXXXXYJWXYYD</td></tr></table>

## 管脚封装

![](images/c6b84085b1edc0f5020f4773a0f60ad110f55cb77a6d709f4216596e6d62c082.jpg)  
图 2 BP5116DJ 管脚封装图

XXXXXY: lot code

WX: sign

YY：周号

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>GND</td><td>芯片地</td></tr><tr><td>2</td><td>CS</td><td>芯片电流采样端,接采样电阻到地</td></tr><tr><td>3,4,5,6,8</td><td>NC</td><td>空脚</td></tr><tr><td>7</td><td>D</td><td>芯片LED灯接口端</td></tr></table>

## 极限参数(注 1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td>D</td><td>500V芯片高压接口</td><td>500</td><td>V</td></tr><tr><td>CS</td><td>芯片低压接口</td><td>-0.3~6</td><td>V</td></tr><tr><td> $I_{D\_MAX}$ </td><td>漏极最大饱和电流@  $T_J\_max$ </td><td>80</td><td>mA</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注2)</td><td>1.25</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>PN结到环境的热阻</td><td>100</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40 to 155</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55 to 150</td><td>°C</td></tr><tr><td></td><td>ESD(注3)</td><td>2</td><td>KV</td></tr></table>

注 1：最大极限值是指超出该工作范围，芯片有可能损坏。推荐工作范围是指在该范围内，器件功能正常，但并不完全保证满足个别性能指标。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。

注 2：温度升高最大功耗一定会减小，这也是由 T<sub>JMAX</sub>, θ ,和环境温度 T 所决定的。最大允许功耗为 $\begin{array} { r l r } { \mathrm { P _ { D M A X } } } & { { } = } & { \left( \mathrm { T } _ { \mathrm { J M A X } } \right. } \end{array}$ T<sub>A</sub>)/ θ<sub>JA</sub>或是极限范围给出的数字中比较低的那个值。

注 3：人体模型，100pF 电容通过 1.5KΩ 电阻放电。

## 电气参数(注 4, 5)（无特别说明情况下， $\mathrm { T } _ { \mathsf { A } } { = } 2 5 ^ { \circ } \mathrm { C } )$

<table><tr><td>符号</td><td>参数描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">工作电流</td></tr><tr><td> $I_{CC}$ </td><td>静态工作电流</td><td>D=30V</td><td></td><td>70</td><td>100</td><td>uA</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $V_{REF}$ </td><td>电流基准</td><td>D=30V, Rcs=120Ω</td><td></td><td>600</td><td></td><td>mV</td></tr><tr><td colspan="7">过热调节</td></tr><tr><td> $T_{REG}$ </td><td>过热调节温度</td><td>-</td><td></td><td>140</td><td></td><td>°C</td></tr></table>

注 4：典型参数值为25˚C 下测得的参数标准。  
注 5：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。

## 内部结构框图

![](images/7567fc52683c1923fd106647e3f9cf53488371b62a26f2c0037634e71171b324.jpg)  
图 3 BP5116DJ 部框图

## 应用信息

BP5116DJ 是一款高精度单段线性恒流 LED 控制芯片，主要用于驱动由市电供电的高电压、低电流LED 灯串。

## 1 供电

在系统上电后，D 端通过内部的高压 JFET 给芯片供电，当D端的电压超过10V之后芯片开始工作。

## 2 恒流控制，输出电流设置

BP5116DJ可以通过外部电阻精确设定 LED电流。

LED 导通时，输出电流计算公式：

$$
I _ {L E D} = \frac {V r e f}{R c s}
$$

由于散热能力的限制，在220V市电输入时，建议将LED电流设在40mA以下；在110V市电输入时，建议将 LED电流设在80mA以下。

## 3 过温调节功能

BP5116DJ 具有过热调节功能，在驱动电源过热时逐渐减小输出电流，从而控制输出功率和温升，使电源温度保持在设定值，以提高系统的可靠性。

过热调节温度为芯片内部设定值(参照电气参数表)。

## PCB 设计

在设计BP5116DJ的PCB板时，需要注意以下事项：

## 地线

电流采样电阻的功率地线尽可能短。GND的面积要尽可能大，以减小热阻，增强散热能力。

## 芯片散热片

BP5116DJ 芯片底部有增强散热能力的散热片，在芯片内部已经连接到 GND 引脚。在设计 PCB 时，将散热片连接到 PCB 的地。为了达到良好的散热效果，需要将散热片连接的PCB铜皮面积尽量大。

## 封装信息

<table><tr><td colspan="5">SOP8-EP (EXP PAD) PACKAGE OUTLINE DIMENSIONS<img src="images/24aef3876b750b96702802799b20376cbc1d991894dbd86dbcab0cafabf49001.jpg"/><img src="images/278d467ef4cfa68a342a4fe91b1d694e5fd6e57b134db7fa90a83acf258df2dd.jpg"/>晶丰明源专用<img src="images/5482006d3e95f1311b79b9ac9bb84136fe355ec6510bfa53a526b6e64994794d.jpg"/></td></tr><tr><td rowspan="2">Symbol</td><td colspan="2">Dimensions In Millimeters</td><td colspan="2">Dimensions In Inches</td></tr><tr><td>Min</td><td>Max</td><td>Min</td><td>Max</td></tr><tr><td>A</td><td>1.350</td><td>1.700</td><td>0.053</td><td>0.067</td></tr><tr><td>A1</td><td>0.000</td><td>0.100</td><td>0.000</td><td>0.004</td></tr><tr><td>A2</td><td>1.350</td><td>1.550</td><td>0.053</td><td>0.061</td></tr><tr><td>c</td><td>0.170</td><td>0.250</td><td>0.007</td><td>0.010</td></tr><tr><td>E</td><td>3.800</td><td>4.000</td><td>0.150</td><td>0.157</td></tr><tr><td>E1</td><td>5.800</td><td>6.200</td><td>0.228</td><td>0.244</td></tr><tr><td>E2</td><td>2.313</td><td>2.513</td><td>0.091</td><td>0.099</td></tr><tr><td>L</td><td>0.400</td><td>1.270</td><td>0.016</td><td>0.050</td></tr><tr><td>b</td><td>0.330</td><td>0.510</td><td>0.013</td><td>0.020</td></tr><tr><td>D</td><td>4.700</td><td>5.100</td><td>0.185</td><td>0.201</td></tr><tr><td>D1</td><td>3.202</td><td>3.402</td><td>0.126</td><td>0.134</td></tr><tr><td>e</td><td colspan="2">1.270 BASIC</td><td colspan="2">0.050 BASIC</td></tr><tr><td>θ</td><td>0°</td><td>8°</td><td>0°</td><td>8°</td></tr></table>