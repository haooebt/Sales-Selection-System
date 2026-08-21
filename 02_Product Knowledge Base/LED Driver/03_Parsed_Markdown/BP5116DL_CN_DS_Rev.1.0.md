## BP5116DL高压单段线性恒流 LED 控制芯片

## 概述

BP5116DL 是一款高精度的单段线性恒流 LED 控制芯片，集成了高压 MOS管和 JFET 高压供电功能。主要用于驱动由市电供电的高电压、低电流 LED 灯串。由于不需要磁性元件，LED 驱动器可以实现小体积、长寿命，并符合 EMI规定。

BP5116DL 可以通过外部电阻精确的设定 LED 电流。

BP5116DL 具有过温调节功能。当输入电压过高，或者 LED电流过大时，此功能将降低输出电流。

![](images/44497bbc0d54eff3f90617ea137028f27afbef41bb323c5e5a9fbf6a31d0e065.jpg)

## 特点

◆ 外围电路非常简单，驱动器体积非常小

◆ 无需磁性元件

◆ 500V 高压 MOS管，无需压敏电阻

◆ 超快 LED 启动

◆ ±5% LED 输出电流精度

◆ LED 电流可外部设定

◆ 过温调节功能

◆ 采用 ESOP-8 封装

## 应用

◆ GU10/E27 LED 球泡灯、射灯

◆ LED 蜡烛灯

◆ 其它 LED 照明

## 典型应用

![](images/669318aba3853166b70c5f5184910f991a7000b1f7cf815c5a44fcfc59482825.jpg)  
图 1 BP5116DL 典型应用图

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP5116DL</td><td>ESOP8</td><td>编带4000颗/盘</td><td>BP5116XXXXYLWXYYD</td></tr></table>

## 管脚封装

![](images/5ed99d0ee49977ae9690be1b7d83f1315bbb16e563373ce4f58ad68bfabd9802.jpg)  
XXXXXY: lot code  
WX: sign  
图 2 BP5116DL 管脚封装图

YY：周号

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>GND</td><td>芯片地</td></tr><tr><td>2</td><td>CS</td><td>芯片电流采样端,接采样电阻到地</td></tr><tr><td>3,4,5,6,8</td><td>NC</td><td>空脚</td></tr><tr><td>7</td><td>D</td><td>芯片LED灯接口端</td></tr></table>

## 极限参数(注 1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td>D</td><td>500V芯片高压接口</td><td>500</td><td>V</td></tr><tr><td> $I_{D\_MAX}$ </td><td>漏极最大饱和电流@ TJ_max</td><td>80</td><td>mA</td></tr><tr><td>CS</td><td>芯片低压接口</td><td>-0.3~6</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注2)</td><td>1.25</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>PN结到环境的热阻</td><td>100</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40 to 150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55 to 150</td><td>°C</td></tr><tr><td></td><td>ESD (注3)</td><td>2</td><td>kV</td></tr></table>

注 1：最大极限值是指超出该工作范围，芯片有可能损坏。推荐工作范围是指在该范围内，器件功能正常，但并不完全保证满足个别性能指标。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。

注 2：温度升高最大功耗一定会减小，这也是由 $T _ { J M A X _ { I } } \theta _ { J A _ { I } }$ ,和环境温度 T 所决定的。最大允许功耗为 $\mathsf { P } _ { \mathsf { D M A X } } = ( \mathsf { T } _ { \mathsf { J M A X } } - \mathsf { T } _ { \mathsf { A } } ) / \mathsf { \Omega } \Theta _ { \mathsf { J A } }$ 或是极限范围给出的数字中比较低的那个值。

注 3：人体模型，100pF电容通过 1.5KΩ 电阻放电。

电气参数(注 4, 5)（无特别说明情况下，TA=25℃）

<table><tr><td>符号</td><td>参数描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">工作电流</td></tr><tr><td> $I_{CC}$ </td><td>静态工作电流</td><td>D=30V</td><td></td><td>70</td><td>100</td><td>uA</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $V_{REF}$ </td><td>电流基准</td><td>D=30V, Rcs=120Ω</td><td></td><td>600</td><td></td><td>mV</td></tr><tr><td colspan="7">过热调节</td></tr><tr><td> $T_{REG}$ </td><td>过热调节温度</td><td>-</td><td></td><td>130</td><td></td><td>°C</td></tr></table>

注 4：典型参数值为25˚C 下测得的参数标准。  
注 5：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。

## 内部结构框图

![](images/71d79eb030ab2299d37d0b0e2e2a7b8cf8fc92fdea62c1b5b18b823d6642e5a4.jpg)  
图 3 BP5116DL 部框图

## 应用信息

BP5116DL 是一款高精度单段线性恒流 LED 控制芯片，主要用于驱动由市电供电的高电压、低电流 LED 灯串。

## 1 供电

在系统上电后，D 端通过内部的高压 JFET 给芯片供电，当 D 端的电压超过 10V 之后芯片开始工作。

## 2 恒流控制，输出电流设置

BP5116DL 可以通过外部电阻精确设定 LED 电流。

LED 导通时，输出电流计算公式：

$$
I _ {L E D} = \frac {V r e f}{R c s}
$$

由于散热能力的限制，在 220V 市电输入时，建议将 LED电流设在 40mA 以下；在 110V 市电输入时，建议将 LED电流设在 80mA 以下。

## 3 过温调节功能

BP5116DL 具有过热调节功能，在驱动电源过热时逐渐减小输出电流，从而控制输出功率和温升，使电源温度保持在设定值，以提高系统的可靠性。

过热调节温度为芯片内部设定值(参照电气参数表)。

## PCB 设计

在设计 BP5116DL 的 PCB 板时，需要注意以下事项：

## 地线

电流采样电阻的功率地线尽可能短。GND 的面积要尽可能大，以减小热阻，增强散热能力。

## 芯片散热片

BP5116DL 芯片底部有增强散热能力的散热片，在芯片内部已经连接到 GND 引脚。在设计 PCB 时，将散热片连接到 PCB 的地。为了达到良好的散热效果，需要将散热片连接的 PCB 铜皮面积尽量大。

## 封装信息

![](images/cb54745dea5510be995d95d2e5bb99aacc19e1c434025b247ffa72dfc0d36ac8.jpg)

![](images/acd6288c6a7e4934e7af1dc45e655caaf53a63e3467b195cabeab21c311dd71a.jpg)

![](images/0fdeb560e6493bd2df072e1894042489b6423ec5c4623ab68e9c97a4cf0f957e.jpg)

![](images/27cabc28b46be42772b3859ce1f01fb60f4263d9f2da6ca4319eb26a718e4eee.jpg)

COMMON DIMENSIONS (UNITS OF MEASURE=MILLIMETER)

<table><tr><td>SYMBOL</td><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A1</td><td>0.00</td><td>-</td><td>0.15</td></tr><tr><td>A2</td><td>1.25</td><td>1.40</td><td>1.65</td></tr><tr><td>b</td><td>0.30</td><td>-</td><td>0.50</td></tr><tr><td>c</td><td>0.10</td><td>-</td><td>0.25</td></tr><tr><td>D</td><td>4.70</td><td>4.90</td><td>5.10</td></tr><tr><td>D1</td><td>3.02</td><td>-</td><td>3.50</td></tr><tr><td>E</td><td>5.80</td><td>-</td><td>6.40</td></tr><tr><td>E1</td><td>3.70</td><td>3.90</td><td>4.10</td></tr><tr><td>E2</td><td>2.10</td><td>-</td><td>2.60</td></tr><tr><td>e</td><td colspan="3">1.27 BSC</td></tr><tr><td>L</td><td>0.40</td><td>0.60</td><td>1.00</td></tr></table>

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>1.0</td><td>07/24</td><td>首次发行</td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。