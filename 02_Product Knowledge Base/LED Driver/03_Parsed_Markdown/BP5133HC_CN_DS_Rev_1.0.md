## 概述

BP5133HC 是一款高精度的单段线性恒流 LED 控制芯片，集成了高压 MOS 管和 JFET 高压供电功能。主要用于驱动由市电供电的高电压、低电流 LED 灯串。由于不需要磁性元件，LED 驱动器可以实现小体积、长寿命，并符合 EMI 规定。

BP5133HC 可以通过外部电阻精确的设定 LED 电流。

BP5133HC 具有过温调节功能。当输入电压过高，或者 LED 电流过大时，此功能将降低输出电流。

![](images/c62b8d2bb3469b54f7ce1d273b7cd47e0f8c77b37601a9787e9ff094aa9d751f.jpg)  
HSOP7 封装

## 特点

内置 800V 整流桥

■ 外围电路非常简单，驱动器体积非常小

■ 无需磁性元件

■ 500V 高压 MOS 管，无需压敏电阻

■ 超快 LED 启动

■ ±5% LED 输出电流精度

■ LED 电流可外部设定

■ 过温调节功能

■ 采用 HSOP7 封装

## 应用

■ GU10/E27 LED 球泡灯、射灯

■ LED 蜡烛灯

■ 其它 LED 照明

## 典型应用

![](images/543b7b467558e93a0807c51c7318167f03ff88ee4521a9ae882fd585c7101488.jpg)  
图 1 BP5133HC 典型应用图

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP5133HC</td><td>HSOP7</td><td>编带5000颗/盘</td><td>BP5133XXXXXYHWXYC</td></tr></table>

## 管脚封装

![](images/5300c47c1fa6684fdc55cc8a7da5549010b5f05357eb1a84a49396d83080ce15.jpg)  
XXXXXY: lot code  
WX: sign  
图 2 BP5133HC 管脚封装图

YY: 周号

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1/7</td><td>ACIN</td><td>交流电压输入端</td></tr><tr><td>2</td><td>GND</td><td>芯片地</td></tr><tr><td>3</td><td>NC</td><td>悬空脚</td></tr><tr><td>4</td><td>Drain</td><td>内部高压功率 MOS 漏极</td></tr><tr><td>5</td><td>CS</td><td>芯片电流采样端,接采样电阻到地</td></tr><tr><td>6</td><td>BUS</td><td>整流桥输出正,接输入电容和灯珠</td></tr><tr><td>衬底</td><td>GND</td><td>芯片地</td></tr></table>

极限参数(注1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td>ACIN/ACIN</td><td>整流桥最大耐压值</td><td>-0.3~800</td><td>V</td></tr><tr><td>BUS</td><td>整流桥输出正最大耐压值</td><td>-0.6~500</td><td>V</td></tr><tr><td>Drain</td><td>集成功率 MOS 高压接口</td><td>-0.3~500</td><td>V</td></tr><tr><td>CS</td><td>芯片低压接口</td><td>-0.3~6</td><td>V</td></tr><tr><td> $I_{D\_MAX}$ </td><td>漏极最大饱和电流@ TJ_max</td><td>80</td><td>mA</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注 2)</td><td>1.25</td><td>W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40 to 150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55 to 155</td><td>°C</td></tr><tr><td></td><td>ESD (注 3)</td><td>2</td><td>KV</td></tr></table>

注 1：最大极限值是指超出该工作范围，芯片有可能损坏。推荐工作范围是指在该范围内，器件功能正常，但并不完全保证满足个别性能指标。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。  
注 2：温度升高最大功耗一定会减小，这也是由 TJMAX, θJA, 和环境温度 TA 所决定的。最大允许功耗为 PDMAX = (TJMAX - TA) / θJA 或是极限范围给出的数字中比较低的那个值。  
注3：人体模型，100pF电容通过 $1.5\mathrm{K}\Omega$ 电阻放电。

## 电气参数(注 4,5)（无特别说明情况下，TA=25℃）

<table><tr><td>符号</td><td>参数描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">工作电流</td></tr><tr><td> $I_{CC}$ </td><td>静态工作电流</td><td>D=30V</td><td></td><td>70</td><td>100</td><td>uA</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $V_{REF}$ </td><td>电流基准</td><td>D=30V, Rcs=120Ω</td><td>570</td><td>600</td><td>630</td><td>mV</td></tr><tr><td colspan="7">过热调节</td></tr><tr><td> $T_{REG}$ </td><td>过热调节温度</td><td>-</td><td></td><td>150</td><td></td><td>°C</td></tr></table>

注4：典型参数值为 $25^{\circ}\mathrm{C}$ 下测得的参数标准。  
注5：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。

## 内部结构框图

![](images/b2f5b1b7a47017e1de4d3198de3dd64cfa5fdea170190c7b551dd0b021fc8a7b.jpg)  
图 3 BP5133HC 部框图

## 应用信息

接的 PCB 铜皮面积尽量大。

BP5133HC 是一款高精度单段线性恒流 LED 控制芯片，主要用于驱动由市电供电的高电压、低电流 LED 灯串。

## 1 供电

在系统上电后，Drain 端通过内部的高压 JFET 给芯片供电，当 Drain 端的电压超过 10V 之后芯片开始工作。

## 2 恒流控制，输出电流设置

BP5133HC 可以通过外部电阻精确设定 LED 电流。

LED 导通时，输出电流计算公式：

$$
I _ {L E D} = \frac {V r e f}{R c s}
$$

由于散热能力的限制，在 220V 市电输入时，建议将 LED 电流设在 40mA 以下；在 110V 市电输入时，建议将 LED 电流设在 80mA 以下。

## 3 过温调节功能

BP5133HC 具有过热调节功能，在驱动电源过热时逐渐减小输出电流，从而控制输出功率和温升，使电源温度保持在设定值，以提高系统的可靠性。

过热调节温度为芯片内部设定值(参照电气参数表)。

## PCB 设计

在设计 BP5133HC 的 PCB 板时，需要注意以下事项：

## 地线

电流采样电阻的功率地线尽可能短。GND 的面积要尽可能大，以减小热阻，增强散热能力。

## 芯片散热片

BP5133HC 芯片底部有增强散热能力的散热片，在芯片内部已经连接到 GND 引脚。在设计 PCB 时，将散热片连接到 PCB 的地。为了达到良好的散热效果，需要将散热片连

## 封装信息

![](images/6aea1bab37c8b08b67506a330587d11373335912f62f1022b796ddba927f1414.jpg)

![](images/5120e200353069322109c8528189e4e2ea08493168468cb30b934f870014f20d.jpg)

![](images/931a81def3686db69b011f5455ca810108b8852eed1f9f0fbc62982774533e5e.jpg)  
背面
Bottom View

![](images/f434ae280ecba73793d52f76825bf4437e938c240d55d917837edf606881a69f.jpg)

<table><tr><td>Unit</td><td colspan="3">mm</td><td>Unit</td><td colspan="3">mm</td></tr><tr><td>/</td><td>min</td><td>typ</td><td>max</td><td>/</td><td>min</td><td>typ</td><td>max</td></tr><tr><td>A</td><td>1.05</td><td>1.15</td><td>1.25</td><td>e1</td><td>0.35</td><td>0.40</td><td>0.45</td></tr><tr><td>C</td><td>0.15</td><td>0.20</td><td>0.22</td><td>e2</td><td>0.46</td><td>0.51</td><td>0.56</td></tr><tr><td>D</td><td>6.0</td><td>6.2</td><td>6.4</td><td>e3</td><td>0.50</td><td>0.55</td><td>0.60</td></tr><tr><td>E</td><td>3.70</td><td>3.9</td><td>4.1</td><td>e4</td><td>0.75</td><td>0.80</td><td>0.85</td></tr><tr><td>HE</td><td>5.9</td><td>6.0</td><td>6.1</td><td>L</td><td>0.95</td><td>1.05</td><td>1.15</td></tr><tr><td>d1</td><td>2.46</td><td>2.51</td><td>2.56</td><td>L1</td><td>0.40</td><td>/</td><td>0.80</td></tr><tr><td>d2</td><td>1.28</td><td>1.33</td><td>1.38</td><td>f1</td><td>0.61</td><td>0.66</td><td>0.71</td></tr><tr><td>d3</td><td>1.22</td><td>1.27</td><td>1.32</td><td>f2</td><td>0.80</td><td>0.85</td><td>0.90</td></tr><tr><td>d4</td><td>2.18</td><td>2.23</td><td>2.28</td><td>f3</td><td>2.25</td><td>2.30</td><td>2.35</td></tr><tr><td>d5</td><td>2.68</td><td>2.73</td><td>2.78</td><td>a</td><td colspan="3">0.2(ref)</td></tr></table>

版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev. 1.0</td><td>2021/4</td><td>首次发行</td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。