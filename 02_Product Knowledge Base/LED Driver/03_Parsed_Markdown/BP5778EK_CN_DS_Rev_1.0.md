## 概述

BP5778EK 是一款双通道可调光 LED 线性恒流驱动芯片，主要用于市电输入的各类智能调光光源和灯具的驱动。基于线性恒流技术的 BP5778EK，可以省去磁性元件，有助于 LED 驱动器实现小体积、长寿命，并符合 EMI 标准。

BP5778EK 支持 PWM 输入调光信号，输出电流为模拟连续，改善调光时的频闪和 EMI 性能。

BP5778EK 具有过温调节功能。当输入电压过高或者 LED 电流过大导致芯片温度过高时，将降低输出电流。

BP5778EK 具有线电压补偿功能，输入电压在一定范围内波动时，输入功率基本不变。

BP5778EK 采用 ESOP8 封装

![](images/85286dac045a20d0b7199f92eefa55a64e6f71e53ac0c94aa7bf877e8f5f67fc.jpg)

## 特点

■ 频闪低 Pst LM<1，SVM<0.4

■ PWM 输入调光信号，全程模拟输出电流

■ 1%--100%调光范围

线电压补偿功能

■ 单个 Rcs 电阻设定两路 LED 电流

■ 低待机功耗，100uA

■ 内置 500V 高压 MOS 管

芯片间输出电流偏差±5%

■ 芯片内两路之间输出电流偏差±4%

内置过温降电流功能

■ 采用 ESOP-8 封装

## 应用领域

■ 智能 LED 灯丝灯

智能LED球泡灯

其它智能LED照明

ESOP8 封装

## 典型应用

![](images/522c21eabc29f795306564d715807742af04a7a8a0968942a3138755349ef3ed.jpg)  
图 1 BP5778EK 典型应用图

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP5778EK</td><td>ESOP8</td><td>卷盘4,000/盘</td><td>BP5778XXXXYEXXWWK</td></tr></table>

## 管脚封装

![](images/e376ce2ecb45fbcd87e782aa7a63b5682d43c5d0731d68a5577ccd8a3e9ddd20.jpg)  
图 2 管脚封装图

XXXXYY: 批次号

XX: 标示

WW: 周号

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>DIM1</td><td>PWM 调光信号输入端口 1</td></tr><tr><td>2</td><td>VD</td><td>线电压补偿调节点,通过电阻连接到地</td></tr><tr><td>3</td><td>DIM2</td><td>PWM 调光信号输入端口 2</td></tr><tr><td>4</td><td>CS</td><td>LED 灯串电流设定端口,通过电阻连接到地</td></tr><tr><td>5</td><td>D2</td><td>恒流输出端口 2</td></tr><tr><td>6</td><td>D1</td><td>恒流输出端口 1</td></tr><tr><td>7</td><td>NC</td><td>悬空脚</td></tr><tr><td>8</td><td>VIN</td><td>芯片电源输入端口</td></tr><tr><td>衬底</td><td>GND</td><td>芯片地</td></tr></table>

## 极限参数(注1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td>VIN</td><td>高压供电输入端电压</td><td>-0.3~550</td><td>V</td></tr><tr><td>VIN, D1, D2</td><td>内部高压 MOSFET 漏极电压</td><td>-0.3~500</td><td>V</td></tr><tr><td>CS1, VD</td><td>芯片低压接口</td><td>-0.3~7</td><td>V</td></tr><tr><td>DIM1, DIM2</td><td>PWM输入端</td><td>-0.3~24</td><td>V</td></tr><tr><td> $I_{D1-MAX}, I_{D2-MAX}$ </td><td>漏极最大饱和电流</td><td>100</td><td>mA</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注 2)</td><td>1.25</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>PN 结到环境的热阻</td><td>100</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40 to 150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55 to 150</td><td>°C</td></tr></table>

注1：最大极限值是指超出该工作范围，芯片有可能损坏。推荐工作范围是指在该范围内，器件功能正常，但并不完全保证满足个别性能指标。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。

注2：温度升高最大功耗一定会减小，这也是由TJMAX, $\theta$ JA,和环境温度TA所决定的。最大允许功耗为PDMAX = (TJMAX - TA)/ $\theta$ JA或是极限范围给出的数字中比较低的那个值。

## 芯片适用范围

此芯片不适合做高压输入高 PF 应用

## 电气参数(注 4,5) （无特别说明情况下，TA = 25 ℃）

<table><tr><td>符号</td><td>参数描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">芯片供电(VIN管脚)</td></tr><tr><td> $BV_{DVIN}$ </td><td>VIN管脚击穿电压</td><td></td><td>550</td><td></td><td></td><td>V</td></tr><tr><td> $I_{STBY}$ </td><td>待机工作电流</td><td>PWMx=0V</td><td></td><td>170</td><td></td><td>uA</td></tr><tr><td colspan="7">电流采样(CS管脚)</td></tr><tr><td> $V_{CS}$ </td><td>CS端口电压</td><td> $V_{VIN}=30V, RCS=20kΩ$ </td><td></td><td>1.2</td><td></td><td>V</td></tr><tr><td colspan="7">线电压补偿接口端(VD管脚)</td></tr><tr><td> $I_{VD}$ </td><td>VD端口电流</td><td>HV=325Vdc</td><td></td><td>37.5</td><td></td><td>uA</td></tr><tr><td colspan="7">LED灯接口端(D1,D2管脚)</td></tr><tr><td> $BV_{D1}$ </td><td>D1 MOS击穿电压</td><td></td><td>500</td><td></td><td></td><td>V</td></tr><tr><td> $I_{DSS1}$ </td><td>D1 MOS饱和电流</td><td></td><td></td><td>100</td><td></td><td>mA</td></tr><tr><td> $BV_{D2}$ </td><td>D2 MOS击穿电压</td><td></td><td>500</td><td></td><td></td><td>V</td></tr><tr><td> $I_{DSS2}$ </td><td>D2 MOS饱和电流</td><td></td><td></td><td>100</td><td></td><td>mA</td></tr><tr><td> $I_{OUT}$ </td><td>D1/D2输出最大电流设置</td><td>设置输出最大电流范围</td><td>5</td><td></td><td>100</td><td>mA</td></tr><tr><td rowspan="2"> $D_{IOUT}$ </td><td>芯片内IOUT偏差</td><td> $I_{OUT}=60mA$ </td><td></td><td></td><td>±4</td><td>%</td></tr><tr><td>芯片间IOUT偏差</td><td> $I_{OUT}=60mA$ </td><td></td><td></td><td>±5</td><td>%</td></tr><tr><td colspan="7">调光信号输入端(DIM1, DIM2管脚)</td></tr><tr><td> $V_{PWM\_H}$ </td><td>PWM信号高电平</td><td></td><td>2.6</td><td></td><td></td><td>V</td></tr><tr><td> $V_{PWM\_L}$ </td><td>PWM信号低电平</td><td></td><td></td><td></td><td>0.5</td><td>V</td></tr><tr><td> $F_{PWM}$ </td><td>PWM信号工作频率</td><td></td><td>0.5</td><td></td><td>2</td><td>KHz</td></tr><tr><td> $R_{PD}$ </td><td>DIM脚内部下拉电阻</td><td></td><td></td><td>5</td><td></td><td>KΩ</td></tr><tr><td colspan="7">过热调节</td></tr><tr><td> $T_{REG}$ </td><td>过热调节结温</td><td></td><td></td><td>150</td><td></td><td>°C</td></tr></table>

注4：典型参数值为 $25^{\circ}\mathrm{C}$ 下测得的参数标准。  
注5：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。

## 内部结构框图

![](images/e4548541a7bfc9b4d2476a6fff9a017ba4b4c1082d0374d582588230ae04cb80.jpg)  
图 3 BP5778EK 内部框图

## 功能描述

BP5778EK 是一款双通道可调 LED 线性恒流驱动芯片，支持 PWM 调光信号输入，输出模拟电流。主要用于市电输入的各类调光光源和灯具的驱动。

## 1 供电

在系统上电后，VIN 通过内部的高压 JFET 给芯片供电。

## 2 恒流控制，输出电流设置

BP5778EK 可以通过外部电阻精确设定 LED 电流。

每串输出电流计算公式：

$$
I _ {L E D n} = \frac {V _ {C S}}{R _ {C S}} * 5 0 0
$$

其中，n=1,2。VCS 为 CS 引脚的基准电压。

由于散热能力的限制，建议低压 120Vac 输入时，最大输入功率在 9W 左右，高压 220Vac 输入时，最大输入功率在 10W 左右。

## 3 过温调节功能

BP5778EK 具有过热调节功能，在驱动电源过热时逐渐减小输出电流，从而控制输出功率和温升，使电源温度保持在设定值，以提高系统的可靠性。

## 4 输入线电压补偿功能

为了减小损耗，BP5778EK 根据 VD 端的电压高低来减小 LED 电流，减小的幅度通过外置 VD 到地

的电阻设置。VD 与 VREF 的关系曲线如下：

![](images/7150bf3f2c066194e22750fb3173b8172cabc78a591e09a1ac4eea3128654771.jpg)  
图 4 Vvd 与 ILED 关系曲线图(Rcs、Rvd=10K)  
如果不需要线补偿功能，VD 引脚需要接地

## 5 调光

BP5778EK 支持 PWM 调光信号输入并且支持双路调光。PWM 调光信号经芯片内部滤波器滤波后去控制 LED 平均电流。PWM 的高电平幅值建议设置在 2.6V 以上。

BP5778EK DIM1 端口控制 D1 串灯珠，DIM2 端口控制

D2 串灯珠。通过对 DIM1 和 DIM2 的控制，调节系统两路输出电流，从而实现调光功能。

## 6 PCB 设计

在设计 BP5778EK PCB 板时，需要注意以下事项：

## 地线

电流采样电阻的功率地线尽可能短。

GND 和芯片底部的散热铜片面积要尽可能大，以减小热阻，增强散热能力。

## VIN/DRAIN

高压走线需要尽量远离低压元器件和走线。

## 封装信息

![](images/20f737f2e9b4b781863633a4260fceaab49c5f4e186b2a973c7edbb733bbb641.jpg)

![](images/8169b5457d7c0ffce581696b29a97d37de5c4d8e3c6dcd9575c38169d55ccf2d.jpg)

![](images/b4cae2ab2614af18169b8f32d997a9f54af2f8a683af986e230245a667c6f1e0.jpg)

<table><tr><td>SYMBOL</td><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A</td><td>1.35</td><td>-</td><td>1.75</td></tr><tr><td>A1</td><td>0.00</td><td>-</td><td>0.15</td></tr><tr><td>A2</td><td>1.25</td><td>1.40</td><td>1.65</td></tr><tr><td>b</td><td>0.30</td><td>-</td><td>0.50</td></tr><tr><td>c</td><td>0.10</td><td>-</td><td>0.25</td></tr><tr><td>D</td><td>4.70</td><td>4.90</td><td>5.10</td></tr><tr><td>D1</td><td>3.02</td><td>-</td><td>3.50</td></tr><tr><td>E</td><td>5.80</td><td>-</td><td>6.40</td></tr><tr><td>E1</td><td>3.70</td><td>3.90</td><td>4.10</td></tr><tr><td>E2</td><td>2.1</td><td>-</td><td>2.6</td></tr><tr><td>L</td><td>0.40</td><td>0.60</td><td>1.25</td></tr><tr><td>e</td><td>1.17</td><td>1.27</td><td>1.37</td></tr></table>

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev. 0.1</td><td>2021/9</td><td>首次发行</td></tr><tr><td>Rev. 0.9</td><td>2021/10</td><td>升级 0.9</td></tr><tr><td>Rev. 1.0</td><td>2022/3</td><td>升级 1.0</td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。