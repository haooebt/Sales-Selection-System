## 概述

BP5356HB 是一款高精度多段线性恒流 LED 控制芯片，集成了高压 MOS 管和 JFET 高压供电功能。主要用于驱动由市电供电的高电压、低电流 LED 灯串。由于不需要电解电容和磁性元件，LED 驱动器可以实现小体积、长寿命，并符合 EMI 规定。

BP5356HB 可以通过外部电阻精确的设定 LED 电流，芯片通过优化分段导通时的电流基准，有利于减小 THD。

BP5356HB 具有过温调节功能, 当输入电压过高, 或者 LED 电流过大时, 此功能将降低输出电流。

BP5356HB 集成了输入线电压补偿功能，在输入线电压过高时，BP5356HB 将按照外置的补偿电阻减小输出电流，保证输入功率基本不随线电压变化。

BP5356HB 内部优化了打线，在多芯片并联时方便走线，节省跳线电阻。

## 特点

■ THD<20%

■ 650V 高压 MOS 管

■ 多芯片并联使用时可节省跳线电阻

■ 外围电路非常简单，驱动器体积非常小

■ 无需电解电容和磁性元件

■ 母线电压变化±20%仍可工作

■ 超快LED启动

■ LED 电流可外部设定

输入线电压补偿功能

内置过温降电流功能，过温点可调

■ 采用 ESOP8 封装

## 应用

■ GU10/E27 LED 球泡灯、射灯

LED 蜡烛灯

■ 其它LED照明

## 典型应用

![](images/f76978c6e7b1351810d451d2f74a38b4f6f59648d721cf2b60b71ce78ff07ee9.jpg)  
图 1 BP5356HB 典型应用图

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP5356HB</td><td>ESOP8</td><td>编带4,000 颗/盘</td><td>BP5356XXXXYBWXYYH</td></tr></table>

## 管脚封装

![](images/fad229f6aee7bd2c074072193152604eefdc8454a69279cea9fc7c96016d8523.jpg)  
图 2 管脚封装图

BP5356HB: 产品型号

XXXXXY: 批次号

WX: 标号

YY: 周号

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>D3</td><td>第三段LED灯接口端</td></tr><tr><td>2</td><td>GND</td><td>芯片地</td></tr><tr><td>3,5</td><td>D2</td><td>第二段LED灯接口端</td></tr><tr><td>4</td><td>D1</td><td>第一段LED灯接口端</td></tr><tr><td>6</td><td>CS</td><td>电流采样端,接采样电阻到地</td></tr><tr><td>7</td><td>NC</td><td>悬空</td></tr><tr><td>8</td><td>VD</td><td>线补信号输入端</td></tr><tr><td>衬底</td><td>GND</td><td>芯片地</td></tr></table>

## 极限参数(注1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td>D1, D2, D3</td><td>650V芯片高压接口</td><td>-0.3~650</td><td>V</td></tr><tr><td>CS, VD</td><td>芯片低压接口</td><td>-0.3~6</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注2)</td><td>1.25</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>PN结到环境的热阻</td><td>100</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40 to 150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55 to 150</td><td>°C</td></tr></table>

注1：最大极限值是指超出该工作范围，芯片有可能损坏。推荐工作范围是指在该范围内，器件功能正常，但并不完全保证满足个别性能指标。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。  
注2：温度升高最大功耗一定会减小，这也是由TJMAX, $\theta$ JA,和环境温度TA所决定的。最大允许功耗为PDMAX = (TJMAX - TA)/ $\theta$ JA或是极限范围给出的数字中比较低的那个值。

电气参数(注3,4)（无特别说明情况下， $T_{A}=25^{\circ}C$ ）

<table><tr><td>符号</td><td>参数描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">工作电流</td></tr><tr><td> $I_{CC}$ </td><td>静态工作电流</td><td>D1=30V, CS=2V</td><td>100</td><td>160</td><td>260</td><td>μA</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $V_{REFL\_POST}$ </td><td>D1=10V 电流基准</td><td>D1=10V, Rcs=1kΩ</td><td>459</td><td>473</td><td>487</td><td>mV</td></tr><tr><td> $V_{REFH\_POST}$ </td><td>D1=45V 电流基准</td><td>D1=45V, Rcs=1kΩ</td><td>500</td><td>546</td><td>600</td><td>mV</td></tr><tr><td> $V_{REFdelta\_POST}$ </td><td>电流基准差值</td><td>Rcs=1kΩ</td><td>71</td><td>73</td><td>77</td><td>mV</td></tr><tr><td colspan="7">过热调节</td></tr><tr><td> $T_{REG}$ </td><td>过热调节温度</td><td>Tj</td><td></td><td>140</td><td></td><td>°C</td></tr></table>

注3：典型参数值为 $25^{\circ} \mathrm{C}$ 下测得的参数标准。  
注4：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。

## 内部结构框图

![](images/321b7ca531959bd30a600cbbc981cf128f233a9982f08916cfa2ec82fce08386.jpg)  
图 3 BP5356HB 内部框图

## 应用信息

BP5356HB 是一款满足低 THD 的高精度多段线性恒流 LED 控制芯片，主要用于驱动由市电供电的高电压、低电流 LED 灯串。

## 1 供电

在系统上电后，D1 通过内部的高压 JFET 给芯片供电，当 D1 的电压超过 10V 之后芯片开始工作。

## 2 驱动机制

BP5356HB 根据母线电压变化而改变接入的 LED 灯数, 因此可以在整个交流周期内，增加 LED 被点亮的时间，从而提高 LED 的利用率和总输出流明数。在输入电压较低时，会有部分 LED 点亮；在输入电压较高时，大部分或全部 LED 都点亮。

BP5356HB 可以自动适应不同的 LED 灯串正向压降，无需外部电阻设置灯串切换电压。根据输入交流电压的高低（110V, 220V），只需要选择合适的正向压降的 LED 灯串。

## 3 恒流控制，输出电流设置

各段 CS 基准会跟随 D1 电压变化来优化总谐波。BP5356HB 可以通过外部电阻精确设定 LED 电流。

LED 分段导通时，每段输出电流计算公式：

$$
I _ {L E D n} = \frac {V r e f _ {n}}{R c s}
$$

其中，n=1,2,3。分别为各段的基准。

## 4 过温调节功能

BP5356HB 具有过热调节功能，在驱动电源过热时逐渐减小输出电流，从而控制输出功率和温升，使电源温度保持在设定值，以提高系统的可靠性。

## 5 输入线电压补偿功能

当第三段 LED 亮起时，为了减小损耗，BP5356HB 根据 D3 端的电压高低来减小 LED 电流，电流减小的起始点和幅度通过外置 VD 到 D3 的电阻设置。

## 6 PCB 设计

在设计 BP5356HB PCB 板时，需要注意以下事项：

## 地线

电流采样电阻的功率地线尽可能短。地的铺铜面积要尽可能大，以减小热阻，增强散热能力。

## 芯片散热片

BP5356HB 芯片底部有增强散热能力的散热片。在设计 PCB 时，将散热片连接到 GND。为了达到良好的散热效果，需要将散热片连接的铜皮面积尽量大。

## 封装信息

![](images/ceb2619af7ed85a48ab7556b0c50a0a23e0a191d827a105360bba5a4acf9fc08.jpg)

COMMON DIMENSIONS
(UNITS OF MEASURE=MILLIMETER)

<table><tr><td>SYMBOL</td><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A1</td><td>0.00</td><td>—</td><td>0.15</td></tr><tr><td>A2</td><td>1.25</td><td>1.40</td><td>1.65</td></tr><tr><td>b</td><td>0.30</td><td>—</td><td>0.50</td></tr><tr><td>c</td><td>0.10</td><td>—</td><td>0.25</td></tr><tr><td>D</td><td>4.70</td><td>4.90</td><td>5.10</td></tr><tr><td>D1</td><td>3.02</td><td>—</td><td>3.50</td></tr><tr><td>E</td><td>5.80</td><td>—</td><td>6.40</td></tr><tr><td>E1</td><td>3.70</td><td>3.90</td><td>4.10</td></tr><tr><td>E2</td><td>2.10</td><td>—</td><td>2.60</td></tr><tr><td>e</td><td colspan="3">1.27 BSC</td></tr><tr><td>L</td><td>0.40</td><td>0.60</td><td>1.00</td></tr></table>

![](images/717e0fd97f400f24ea17e7a59647119a835055312ab233a9ad3ba6e9dc378d2a.jpg)

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev. 1.0</td><td>2024/08</td><td>首次发行</td></tr><tr><td>Rev. 1.1</td><td>2024/11</td><td>优化打线,5号管脚改为D2</td></tr></table>

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。

## 电子器件报废说明

该产品在生命周期结束后，由客户按照一般电子产品的报废流程进行处理。