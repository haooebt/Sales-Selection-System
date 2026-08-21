## 概述

BP5358H 是一款满足分次谐波的高精度多段线性恒流 LED 控制芯片，集成了高压 MOS 管和 JFET 高压供电功能。主要用于驱动由市电供电的高电压、低电流 LED 灯串。由于不需要电解电容和磁性元件，LED 驱动器可以实现小体积、长寿命，并符合 EMI 规定。

BP5358H 可以通过外部电阻精确的设定 LED 电流，芯片通过优化分段导通时的电流基准，有利于减小 THD。

BP5358H 具有过温调节功能。当输入电压过高，或者 LED 电流过大时，此功能将降低输出电流。

BP5358H 集成了输入线电压补偿功能，在输入线电压过高时，BP5358H 将按照外置的补偿电阻减小输出电流，保证输入功率基本不随线电压变化。

BP5358H 内部优化了打线，在多芯片并联时方便走线，节省跳线电阻。

## 特点

■ 优化电流基准，满足分次谐波标准

■ 外围电路非常简单，驱动器体积非常小

■ 无需电解电容和磁性元件

■ 700V 高压 MOS 管

■ 多芯片并联使用时可节省跳线电阻

■ 母线电压变化±20%仍可工作

■ 超快 LED 启动

■ LED 电流可外部设定

输入线电压补偿功能

内置过温降电流功能

■ 采用 SOP7-EP 封装

## 应用

■ GU10/E27 LED 球泡灯、射灯

■ LED 投光灯

■ 其它LED照明

## 典型应用

![](images/3fc456674597266c19f69e92fbc8cc6e95ba139a36feb4fab692eb21ec7f1093.jpg)  
图 1 BP5358H 典型应用图

![](images/fb253cd1ed824006585ed4334e3286af945c76cf936c6c672d3aa12aec721ae4.jpg)

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP5358H</td><td>SOP7-EP</td><td>编带4,000 颗/盘</td><td>BP5358XXXXXXWXYYH</td></tr></table>

## 管脚封装

![](images/041376c4a7040254f79a28888b7a2227adf16170871e465b54049ad28747e924.jpg)  
XXXXY: Lot Code  
WX: 标号  
图 2 管脚封装图

YY: 周号

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>D3</td><td>第三段 LED 灯接口端</td></tr><tr><td>2</td><td>GND</td><td>芯片地</td></tr><tr><td>3, 5</td><td>D2</td><td>第二段 LED 灯接口端</td></tr><tr><td>4</td><td>D1</td><td>第一段 LED 灯接口端</td></tr><tr><td>6</td><td>CS</td><td>电流采样端,接采样电阻到地</td></tr><tr><td>8</td><td>VD</td><td>外部功率 MOS 管的漏极信号输入端,通过电阻接到外部功率 MOS 管的漏极</td></tr></table>

## 极限参数(注1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td>D1, D2, D3</td><td>700V芯片高压接口</td><td>-0.3~700</td><td>V</td></tr><tr><td>CS,VD</td><td>芯片低压接口</td><td>-0.3~6</td><td>V</td></tr><tr><td>ID1_MAX</td><td>漏极最大饱和电流@ TJ_max</td><td>70</td><td>mA</td></tr><tr><td>ID2_MAX</td><td>漏极最大饱和电流@ TJ_max</td><td>80</td><td>mA</td></tr><tr><td>ID3_MAX</td><td>漏极最大饱和电流@ TJ_max</td><td>100</td><td>mA</td></tr><tr><td>PDMAX</td><td>功耗(注2)</td><td>1.25</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>PN结到环境的热阻</td><td>100</td><td>°C/W</td></tr><tr><td>TJ</td><td>工作结温范围</td><td>-40 to 150</td><td>°C</td></tr><tr><td>TSTG</td><td>储存温度范围</td><td>-55 to 150</td><td>°C</td></tr><tr><td></td><td>ESD (注3)</td><td>2</td><td>KV</td></tr></table>

注1：最大极限值是指超出该工作范围，芯片有可能损坏。推荐工作范围是指在该范围内，器件功能正常，但并不完全保证满足个别性能指标。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。

注2：温度升高最大功耗一定会减小，这也是由 $T_{JMAX}, \theta_{JA}$ 和环境温度 $T_A$ 所决定的。最大允许功耗为 $P_{DMAX} = (T_{JMAX} - T_A) / \theta_{JA}$ 或是极限范围给出的数字中比较低的那个值。

注3：人体模型，100pF电容通过 $1.5\mathrm{K}\Omega$ 电阻放电。

## 电气参数(注 4,5)（无特别说明情况下，TA=25℃）

<table><tr><td>符号</td><td>参数描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">工作电流</td></tr><tr><td> $I_{CC}$ </td><td>静态工作电流</td><td>D1=30V, CS=2V</td><td></td><td>160</td><td>260</td><td>uA</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $V_{REFL\_POST}$ </td><td>D1=10V 电流基准</td><td>D1=10V, Rcs=1kΩ</td><td>200</td><td>206</td><td>212</td><td>mV</td></tr><tr><td> $V_{REFH\_POST}$ </td><td>D1=45V 电流基准</td><td>D1=40V, Rcs=1kΩ</td><td>340</td><td>350</td><td>360</td><td>mV</td></tr><tr><td> $V_{REFdelta\_POST}$ </td><td>电流基准差值</td><td>Rcs=1kΩ</td><td>139.3</td><td>144</td><td>147.9</td><td>mV</td></tr><tr><td colspan="7">过热调节</td></tr><tr><td> $T_{REG}$ </td><td>过热调节温度</td><td></td><td></td><td>150</td><td></td><td>°C</td></tr></table>

注4：典型参数值为 $25^{\circ}\mathrm{C}$ 下测得的参数标准。  
注5：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。

## 内部结构框图

![](images/9aa042d1c75fb314bd077b2bb8d9aa0f3bae886e8c21da22913fc1d7cfe969f1.jpg)  
图 3 BP5358H 内部框图

## 应用信息

BP5358H 是一款满足分次谐波的高精度多段线性恒流 LED 控制芯片，主要用于驱动由市电供电的高电压、低电流 LED 灯串。

## 1 供电

在系统上电后，D1 通过内部的高压 JFET 给芯片供电，当 D1 的电压超过 10V 之后芯片开始工作。

## 2 驱动机制

BP5358H 根据母线电压变化而改变接入的 LED 灯数，因此可以在整个交流周期内，增加 LED 被点亮的时间，从而提高 LED 的利用率和总输出流明数。在输入电压较低时，会有部分 LED 点亮；在输入电压较高时，大部分或全部 LED 都点亮。

BP5358H 可以自动适应不同的 LED 灯串正向压降，无需外部电阻设置灯串切换电压。根据输入交流电压的高低(110V, 220V), 只需要选择合适的正向压降的 LED 灯串。

## 3 恒流控制，输出电流设置

各段 CS 基准会跟随 D1 电压变化来优化分次谐波，。

BP5358H 可以通过外部电阻精确设定 LED 电流。

LED 分段导通时，每段输出电流计算公式：

$$
I _ {L E D n} = \frac {V r e f _ {n}}{R c s}
$$

其中，n=1,2,3。分别为各段的基准。

## 4 过温调节功能

BP5358H 具有过热调节功能，在驱动电源过热时逐渐减小输出电流，从而控制输出功率和温升，使电源温度保持在设定值，以提高系统的可靠性。过热调节温度为芯片内部设定值 $150^{\circ}$ C。

## 5 输入线电压补偿功能

当第三段 LED 亮起时，为了减小损耗，BP5358H 根据 D1 端的电压高低来减小 LED 电流，电流减小的起始点和幅度通过外置 VD 到 D1 的电阻设置。

## PCB 设计

在设计 BP5358H PCB 板时，需要注意以下事项：

## 地线

电流采样电阻的功率地线尽可能短。地和 Drain 的铺铜面积要尽可能大，以减小热阻，增强散热能力。

## 芯片散热片

BP5358H芯片底部有增强散热能力的散热片。在设计PCB时，将散热片连接到PCB的地。为了达到良好的散热效果，需要将散热片连接的铜皮面积尽量大。

## 封装信息

![](images/b6a1b08ae2d5e532f97ee5e0c5021e6af21fe06344745b4fd0de822d4427e4c8.jpg)

![](images/386601954a4274d2fbcc9955a6e2150713d53f9aad78a9a477eab5190af4afe7.jpg)  
SIDE VIEW

![](images/5e1fba97d78f1d795fc518b8b28edb0acae6b3cee4732d531e58d6057a2ccf3d.jpg)  
BOTTOM VIEW

![](images/faa87d90632fca95c7a493bb0d10d4f042620e77ed03ec5b9cd29ada46e2bc52.jpg)

![](images/a3a8e265f63dcfa62510d6cc8f1c0079a4c19648fcf698471628a49b91b0d8b3.jpg)  
SECTION:A-A

SIDE VIEW

<table><tr><td rowspan="2">SYMBOL</td><td colspan="3">MILLIMETER</td></tr><tr><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A</td><td>1.35</td><td>1.40</td><td>1.45</td></tr><tr><td>A1</td><td>0.10</td><td>-</td><td>0.20</td></tr><tr><td>A2</td><td>1.25</td><td>1.40</td><td>1.55</td></tr><tr><td>b</td><td>0.39</td><td>-</td><td>0.49</td></tr><tr><td>c</td><td>0.10</td><td>-</td><td>0.25</td></tr><tr><td>D</td><td>4.84</td><td>4.90</td><td>5.96</td></tr><tr><td>D1</td><td>3.02</td><td>-</td><td>-</td></tr><tr><td>E</td><td>5.90</td><td>6.00</td><td>6.10</td></tr><tr><td>E1</td><td>3.84</td><td>3.90</td><td>3.96</td></tr><tr><td>E2</td><td>2.13</td><td>-</td><td>-</td></tr><tr><td>e</td><td colspan="3">1.27 BSC</td></tr><tr><td>L</td><td>0.53</td><td>-</td><td>0.73</td></tr></table>

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev. 1.0</td><td>2021/4</td><td>首次发行</td></tr><tr><td>Rev. 1.1</td><td>2022/2</td><td>更新框图引脚序号</td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。