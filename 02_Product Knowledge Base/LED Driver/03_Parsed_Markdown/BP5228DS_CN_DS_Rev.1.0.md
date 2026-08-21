## 概述

BP5228DS是一款高精度两段线性恒流 LED 控制芯片，集成了高压 MOS管和 JFET 高压供电功能。主要用于驱动由市电供电的高电压、低电流 LED 灯串。由于不需要电解电容和磁性元件，LED 驱动器可以实现小体积、长寿命，并符合 EMI 规定。

BP5228DS 可以通过外部电阻精确的设定 LED 电流。

BP5228DS具有过温调节功能。当输入电压过高，或者 LED电流过大，导致芯片温度过高时，此功能将降低输出电流。

BP5228DS集成了输入线电压补偿功能，在输入线电压过高时，BP5228DS将按照外置的补偿电阻减小输出电流，保证输入功率基本不随线电压变化。

## 特点

◆ 外围电路非常简单，驱动器体积非常小

◆ 无需电解电容和磁性元件

◆ 500V 内置高压 MOS 管

◆ 输入线电压补偿功能

◆ 超快 LED 启动

◆ ±5% LED 输出电流精度

◆ LED 电流可外部设定

◆ 采用 ESOP8 封装

## 应用领域

◆ GU10/E27 LED 球泡灯、射灯

◆ LED 蜡烛灯

◆ 其他 LED 照明

## 典型应用

![](images/f978f1d391849e8c44382fa744067fa6bdbea0bb4860874b1a54362148b95625.jpg)  
图 1 BP5228DS 典型应用图

定购信息

<table><tr><td>定购型号</td><td>封装</td><td>温度范围</td><td>包装形式</td><td>打印</td></tr><tr><td>BP5228DS</td><td>ESOP8</td><td>-40 °C到 105 °C</td><td>编带4,000 颗/盘</td><td>BP5228XXXXYDWXYYS</td></tr></table>

## 管脚封装

![](images/9450470a9b32e8ac9ee81c1c97c0393a7de121836d6a6a348e852d4357491cd2.jpg)  
图 2 管脚封装图

管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>CS</td><td>电流采样端,接采样电阻到地</td></tr><tr><td>2,6,7</td><td>NC</td><td>不接</td></tr><tr><td>3</td><td>VD</td><td>外部功率 MOS 管的漏极信号输入端,通过电阻接到外部功率 MOS 管的漏极或接到 GND 引脚。</td></tr><tr><td>4,散热片</td><td>GND</td><td>芯片地</td></tr><tr><td>5</td><td>D2</td><td>第二段 LED 灯接口端</td></tr><tr><td>8</td><td>D1</td><td>第一段 LED 灯接口端</td></tr></table>

## 极限参数(注 1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td>D1, D2</td><td>高压输出端口</td><td>500</td><td>V</td></tr><tr><td>CS, VD</td><td>芯片低压接口</td><td>-0.3~6</td><td>V</td></tr><tr><td>ID1-MAX</td><td>D1 漏极最大饱和电流</td><td>60</td><td>mA</td></tr><tr><td>ID2-MAX</td><td>D2 漏极最大饱和电流</td><td>60</td><td>mA</td></tr><tr><td>PDMAX</td><td>功耗(注 2)</td><td>1.25</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>PN 结到环境的热阻</td><td>100</td><td>°C/W</td></tr><tr><td>TJ</td><td>工作结温范围</td><td>-40 to 150</td><td>°C</td></tr><tr><td>TSTG</td><td>储存温度范围</td><td>-55 to 150</td><td>°C</td></tr></table>

注 1：最大极限值是指超出该工作范围，芯片有可能损坏。推荐工作范围是指在该范围内，器件功能正常，但并不完全保证满足个别性能指标。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。  
注 2：温度升高最大功耗一定会减小，这也是由 T<sub>JMAX</sub>, θ<sub>JA,</sub>和环境温度 T<sub>A</sub>所决定的。最大允许功耗为 $\mathsf { P } _ { \sf D M A X } = ( \mathsf { T } _ { \sf M A X } - \mathsf { T } _ { \sf A } ) / \theta _ { \sf I A }$ 或是极限范围给出的数字中比较低的那个值。

电气参数(注 3, 4) （无特别说明情况下，TA =25 ℃）

<table><tr><td>符号</td><td>参数描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">工作电流</td></tr><tr><td> $I_{CC}$ </td><td>静态工作电流</td><td>D1,D2=30V</td><td>80</td><td>115</td><td>150</td><td>μA</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $V_{REF\_CS\_1}$ </td><td>第一电流基准</td><td>D1=30V, Rcs=120Ω</td><td>840</td><td>865</td><td>890</td><td>mV</td></tr><tr><td> $V_{REF\_CS\_2}$ </td><td>第二电流基准</td><td>D1,D2=30V, Rcs=120Ω</td><td>860</td><td>885</td><td>910</td><td>mV</td></tr><tr><td colspan="7">过热调节</td></tr><tr><td> $T_{REG}$ </td><td>过热调节温度</td><td></td><td></td><td>140</td><td></td><td>°C</td></tr></table>

注 3：典型参数值为25˚C 下测得的参数标准。  
注 4：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。

## 内部结构框图

![](images/38457cc93bfabb9d995ef9636dc3ffc72a5428136cead4c16733e720aafdb9ac.jpg)  
图 3 BP5228DS 内部框图

## 应用信息

BP5228DS 是一款高精度两段线性恒流 LED 控制芯片，主要用于驱动由市电供电的高电压、低电流 LED 灯串。

## 1 供电

在系统上电后，D1 通过内部的高压 JFET 给芯片供电，当D1 的电压超过 10V 之后芯片开始工作。

## 2 驱动机制

BP5228DS 根据母线电压变化而改变接入的 LED 灯数，因此可以在整个交流周期内，增加 LED 被点亮的时间，从而提高 LED 的利用率和总输出流明数。在输入电压较低时，会有部分 LED 点亮；在输入电压较高时，全部 LED 都点亮。

BP5228DS 可以自动适应不同的 LED 灯串正向压降，无需外部电阻设置灯串切换电压。根据输入交流电压的高低

（110V，220V），只需要选择合适的正向压降的 LED 灯串。

## 3 恒流控制，输出电流设置

BP5228DS可以通过外部电阻精确设定 LED 电流。

LED 分段导通时，每段输出电流计算公式：

$$
I _ {L E D n} = \frac {V r e f _ {N}}{R c s}
$$

其中， $\mathsf { N } = 1 , 2 ,$ 。分别为各段的基准。

由于散热能力的限制，在 220V 市电输入时，建议将 LED电流设在 40mA 以下。

## 4 过温调节功能

BP5228DS具有过热调节功能，在驱动电源过热时逐渐减小输出电流，从而控制输出功率和温升，使电源温度保持在设定值，以提高系统的可靠性。

## 5 输入线电压补偿功能

当第二段 LED 亮起时，为了减小损耗，BP5228DS 有内置线补偿，根据 VD 电压调节LED 电流。也可以通过外加补偿电阻调节，在 VD 到 GND 外加电阻 RD1或者 VD 到D2 外加电阻 RD2，调节补偿量，关系式如下所述：

$$
V _ {R E F 2} = 0. 8 8 5 - (K * \mathrm{VD} - 3. 3 V) * 0. 1 2 2 V
$$

分压比系数 K 计算公式：

1、VD 到 GND 外加电阻 RD1：

$$
K = \frac {2 9 4 K \Omega / / R _ {\mathrm{D} 1}}{2 9 4 K \Omega / / R _ {\mathrm{D} 1} + 3 3 5 0 K \Omega}
$$

2、VD 到 D2 外加电阻 RD2:

$$
K = \frac {2 9 4 K \Omega}{2 9 4 K \Omega + 3 3 5 0 K \Omega / / R _ {\mathrm{D} 2}}
$$

## PCB 设计

在设计 BP5228DS PCB 板时，需要注意以下事项：

## 地线

电流采样电阻的功率地线尽可能短。地/Drain 的面积要尽可能大，以减小热阻，增强散热能力。

## 芯片散热片

BP5228DS芯片底部有增强散热能力的散热片，在芯片内部已经连接到 GND 引脚。在设计 PCB 时，将散热片连接到 PCB 的地。为了达到良好的散热效果，需要将散热片连接的铜皮面积尽量大。

## 封装信息

![](images/e2daaa10c0b4df3a561f7c829d75325999ace8ec15506a01a0455e1ad8af83ac.jpg)

![](images/af94e3e44999f3c281ffea74836e98a2e9072848142003e1b871bc0aa37d1dba.jpg)

![](images/b1f68ea6c0c23a3d5414b5f19f6f96c0d506619c1a6a86e4cc3a1070c49a5c46.jpg)

![](images/79671f0e81384b430381602df17bb946f9cac84ed3043ba7b4c6c00ec92003a6.jpg)

<table><tr><td>SYMBOL</td><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A1</td><td>0.00</td><td>-</td><td>0.15</td></tr><tr><td>A2</td><td>1.25</td><td>1.40</td><td>1.65</td></tr><tr><td>b</td><td>0.30</td><td>-</td><td>0.50</td></tr><tr><td>c</td><td>0.10</td><td>-</td><td>0.25</td></tr><tr><td>D</td><td>4.70</td><td>4.90</td><td>5.10</td></tr><tr><td>D1</td><td>3.02</td><td>-</td><td>3.50</td></tr><tr><td>E</td><td>5.80</td><td>-</td><td>6.40</td></tr><tr><td>E1</td><td>3.70</td><td>3.90</td><td>4.10</td></tr><tr><td>E2</td><td>2.10</td><td>-</td><td>2.60</td></tr><tr><td>e</td><td colspan="3">1.27 BSC</td></tr><tr><td>L</td><td>0.40</td><td>0.60</td><td>1.00</td></tr></table>

![](images/40dcaf432eced61f6b8e33671966355addb77e6c64700312d76be0c24870ae96.jpg)

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>1.0</td><td>2025/01</td><td>首次发行</td></tr><tr><td></td><td></td><td></td></tr></table>

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。

## 电子器件报废说明

该产品在生命周期结束后，由客户按照一般电子产品的报废流程进行处理。