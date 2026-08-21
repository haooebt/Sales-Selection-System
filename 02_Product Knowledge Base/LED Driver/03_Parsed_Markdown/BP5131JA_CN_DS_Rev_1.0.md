## 述

BP5131JA 是一款高精度的单段线性恒流 LED控制芯片，集成了高压 MOS管和JFET 高压供电功能。主要用于驱动由市电供电的高电压、低电流 LED灯串。由于不需要磁性元件，LED 驱动器可以实现小体积、长寿命，并符合EMI 规定。

BP513JA可以通过外部电阻精确的设定 LED 电流。

BP5131JA 具有过温调节功能。当输入电压过高，或者 LED 电流过大时，此功能将降低输出电流。

## 特点

◆ 外围电路非常简单，驱动器体积非常小

◆ 无需磁性元件

◆ 500V 高压MOS管，无需压敏电阻

◆ 超快 LED启动

◆ ±5% LED 输出电流精度

◆ LED电流可外部设定

◆ 过温调节功能

◆ 采用 SOT89-3 封装

## 应用

◆ GU10/E27 LED 球泡灯、射灯

◆ LED 蜡烛灯

◆ 其它 LED 照明

## 典型应用

![](images/40ead26dc9f8bdc10e82c9cb1e85c2e3bd862de8c2736f2adb0b0285044d1a28.jpg)  
图 1 BP5131JA 典型应用图

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>温度范围</td><td>包装形式</td><td>打印</td></tr><tr><td>BP5131JA</td><td>SOT89-3</td><td>-40 °C到105 °C</td><td>编带4000颗/盘</td><td>BP5131JXXXXA</td></tr></table>

## 管脚封装

![](images/1085081c5f018089e177eaf0816d93447580b30f487ba3b1ab746b120b1fee8b.jpg)  
XXXXXY: lot code  
图 2 BP5131JA 管脚封装图

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>D</td><td>芯片LED灯接口端</td></tr><tr><td>2</td><td>GND</td><td>芯片地</td></tr><tr><td>3</td><td>CS</td><td>芯片电流采样端,接采样电阻到地</td></tr></table>

![](images/78c313573f17cb50a352a5348d22b656199b0de980e713463468c845902ded06.jpg)

## 极限参数(注1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td>D</td><td>500V芯片高压接口</td><td>500</td><td>V</td></tr><tr><td> $I_{D\_MAX}$ </td><td>漏极最大饱和电流@  $T_{J\_max}$ </td><td>60</td><td>mA</td></tr><tr><td>CS</td><td>芯片低压接口</td><td>-0.3~6</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注2)</td><td>1.25</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>PN结到环境的热阻</td><td>100</td><td>°C/W</td></tr><tr><td> $T_{J}$ </td><td>工作结温范围</td><td>-40 to 150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55 to 150</td><td>°C</td></tr><tr><td></td><td>ESD(注3)</td><td>2</td><td>KV</td></tr></table>

注 1：最大极限值是指超出该工作范围，芯片有可能损坏。推荐工作范围是指在该范围内，器件功能正常，但并不完全保证满足个别性能指标。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。

注 2：温度升高最大功耗一定会减小，这也是由 T<sub>JMAX</sub>, θ ,和环境温度 T 所决定的。最大允许功耗为 $\begin{array} { r l } { \mathrm { P } _ { \mathrm { D M A X } } } & { { } = \mathrm { ~ \Gamma ~ } \left( \mathrm { T } _ { \mathrm { J M A X } } \right. } \end{array}$ T<sub>A</sub>)/ θ<sub>JA</sub>或是极限范围给出的数字中比较低的那个值。

注 3：人体模型，100pF 电容通过 1.5KΩ 电阻放电。

## 推荐工作范围

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td> $I_{LED}$ </td><td>LED 输出电流 @220V</td><td>&lt;40</td><td>mA</td></tr><tr><td> $I_{LED}$ </td><td>LED 输出电流 @110V</td><td>&lt;60</td><td>mA</td></tr></table>

电气参数(注 4, 5)（无特别说明情况下，T<sub>A</sub>=25℃）

<table><tr><td>符号</td><td>参数描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">工作电流</td></tr><tr><td> $I_{CC}$ </td><td>静态工作电流</td><td>D=30V</td><td></td><td>70</td><td>100</td><td>uA</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $V_{REF}$ </td><td>电流基准</td><td>D=30V, Rcs=120Ω</td><td></td><td>600</td><td></td><td>mV</td></tr><tr><td colspan="7">过热调节</td></tr><tr><td> $T_{REG}$ </td><td>过热调节温度</td><td>-</td><td></td><td>150</td><td></td><td>°C</td></tr></table>

注 4：典型参数值为25<sub>˚</sub>C 下测得的参数标准。  
注 5：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。

## 内部结构框图

![](images/2eed823add47d9068d0a4a1e9dceacc588a6dc750966d89685e721c648c3d8cc.jpg)  
图 3 BP5131JA 部框图

## 应用信息

BP5131JA 是一款高精度单段线性恒流 LED 控制芯片，主要用于驱动由市电供电的高电压、低电流LED 灯串。

## 1 供电

在系统上电后，D 端通过内部的高压 JFET 给芯片供电，当D端的电压超过10V之后芯片开始工作。

## 2 恒流控制，输出电流设置

BP5131JA可以通过外部电阻精确设定 LED电流。

LED 导通时，输出电流计算公式：

$$
I _ {L E D} = \frac {V r e f}{R c s}
$$

由于散热能力的限制，在220V市电输入时，建议将LED电流设在40mA以下；在110V市电输入时，建议将 LED电流设在60mA以下。

## 3 过温调节功能

BP5131JA 具有过热调节功能，在驱动电源过热时逐渐减小输出电流，从而控制输出功率和温升，使电源温度保持在设定值，以提高系统的可靠性。

过热调节温度为芯片内部设定值(参照电气参数表)。

## PCB 设计

在设计BP5131JA的PCB板时，需要注意以下事项：

## 地线

电流采样电阻的功率地线尽可能短。GND的面积要尽可能大，以减小热阻，增强散热能力。

## 芯片散热片

BP5131JA 芯片底部有增强散热能力的散热片，在芯片内部已经连接到 GND 引脚。在设计 PCB 时，将散热片连接到 PCB 的地。为了达到良好的散热效果，需要将散热片连接的PCB铜皮面积尽量大。

封装信息  
SOT89-3 PACKAGE OUTLINE DIMENSIONS  
![](images/844c5d10759d096c2a06cb30662698cfa085dfbde7428984e4c19f09405c49bf.jpg)

![](images/d54484ecb206a2cf321f0583b51a48d3d94c51c054927a982af3739950af63d4.jpg)

![](images/eb23f77f1b01b0a3dac4b8712bb67917997d791d62e6990d495e09726127a5f8.jpg)

<table><tr><td rowspan="2">SYMBOL</td><td colspan="2">Dimensions In Millimeters</td><td colspan="2">Dimensions In Inches</td></tr><tr><td>MIN</td><td>MAX</td><td>MIN</td><td>MAX</td></tr><tr><td>A2</td><td>1.400</td><td>1.600</td><td>0.055</td><td>0.063</td></tr><tr><td>c</td><td>0.360</td><td>0.460</td><td>0.014</td><td>0.018</td></tr><tr><td>b</td><td>0.380</td><td>0.470</td><td>0.015</td><td>0.018</td></tr><tr><td>a</td><td>0.460</td><td>0.560</td><td>0.018</td><td>0.022</td></tr><tr><td>D</td><td>4.300</td><td>4.700</td><td>0.169</td><td>0.185</td></tr><tr><td>D1</td><td colspan="2">1.700REF</td><td colspan="2">0.067REF</td></tr><tr><td>E</td><td>4.000</td><td>4.400</td><td>0.157</td><td>0.173</td></tr><tr><td>E1</td><td>2.300</td><td>2.700</td><td>0.091</td><td>0.106</td></tr><tr><td>e</td><td colspan="2">1.500BSC</td><td colspan="2">0.059BSC</td></tr><tr><td>L1</td><td>0.800</td><td>1.200</td><td>0.031</td><td>0.047</td></tr></table>