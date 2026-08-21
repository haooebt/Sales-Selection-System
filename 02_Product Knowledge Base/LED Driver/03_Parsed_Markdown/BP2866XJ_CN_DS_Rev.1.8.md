## BP2866XJ 非隔离降压型 LED 恒流驱动芯片

## 概述

BP2866XJ 是一款外置 OVP 降压型 LED 恒流驱动芯片。芯片工作在电感电流临界连续模式，适用于 85Vac\~265Vac 全范围输入电压的非隔离降压型 LED 恒流电源。芯片 ROVP 引脚带 Enable 功能，适用于开关调色和感应灯应用。

BP2866XJ 芯片内部集成 550/600V 功率开关，采用栅极退磁检测技术和高压 JFET 供电技术，无需 VCC 电容和启动电阻，使其外围器件更简单，节约了外围的成本和体积。

BP2866XJ 芯片内置高精度的电流采样电路，同时采用恒流控制技术，实现高精度的 LED 恒流输出和优异的线电压调整率。芯片工作在电感电流临界模式，输出电流不随电感量和 LED 工作电压的变化而变化，实现优异的负载调整率。

BP2866XJ 具有多重保护功能，包括 LED 短路保护，芯片供电欠压保护，外置 OVP，芯片温度过热调节等。BP2866XJ 采用 SOP7 封装。

## 特点

■ 无VCC电容、无启动电阻

■ 集成高压供电功能

■ 外置防潮 OVP 功能

■ 低母线电压下不闪灯

■ Enable 功能兼容开关调色和感应灯

■ ±5% LED 输出电流精度

■ LED 短路保护

■ 过热调节功能

■ 采用 SOP7 封装

## 应用

LED 蜡烛灯

■ LED 球泡灯

■ 其它 LED 照明

## 典型应用

![](images/38ae23546a1c8dd4fb527d8e7007969d68d9b56fb304b723134077f4566c1784.jpg)  
图 1 BP2866XJ 典型应用图

## 芯片名称

![](images/8285bbebad3d86b875d55e031c73e2b781eac3deffc934859b9dc745cbee910c.jpg)

产品系列名称

封装类型

典型Rdson

定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP2866XJ</td><td>SOP7</td><td>编带4,000 颗/盘</td><td>BP2866XXXXXYYZZZZWWJ</td></tr></table>

## 管脚封装

![](images/a3b210b03d6ffdc14ab585d921d219290321344e1ba939edb7cbc9e806383c57.jpg)  
XXXXYYY: 批次号  
ZZZZ: 内部标示  
图 2 管脚封装图

WW: 周号

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>GND</td><td>芯片地</td></tr><tr><td>2</td><td>ROVP</td><td>OVP 设置引脚</td></tr><tr><td>3</td><td>NC</td><td>无连接</td></tr><tr><td>4</td><td>HV</td><td>芯片高压供电端</td></tr><tr><td>5,6</td><td>DRAIN</td><td>内部高压功率管漏极</td></tr><tr><td>7</td><td>CS</td><td>电流采样端,采样电阻接在 CS 和 GND 端之间</td></tr></table>

## 极限参数(注1)

<table><tr><td>符号</td><td>参数</td><td colspan="7">参数范围</td><td>单位</td></tr><tr><td>HV</td><td>600V芯片高压供电接口</td><td colspan="7">-0.3~500</td><td>V</td></tr><tr><td>DRAIN</td><td>内部高压功率管漏极到源极峰值电压</td><td colspan="7">-0.3~500</td><td>V</td></tr><tr><td>ROVP</td><td>OVP设置引脚电压限值</td><td colspan="7">-0.3~8</td><td>V</td></tr><tr><td>CS</td><td>电流采样端</td><td colspan="7">-0.3~8</td><td>V</td></tr><tr><td rowspan="2">IDMAX</td><td rowspan="2">漏极最大电流@TJ=100°C</td><td>S</td><td>A</td><td>B</td><td>C</td><td>D</td><td>F</td><td>G</td><td rowspan="2">mA</td></tr><tr><td>320</td><td>440</td><td>580</td><td>800</td><td>900</td><td>1000</td><td>1500</td></tr><tr><td>PDMAX</td><td>功耗(注2)</td><td colspan="7">0.45</td><td>W</td></tr><tr><td>θJA</td><td>PN结到环境的热阻</td><td colspan="7">145</td><td>°C/W</td></tr><tr><td>TJ</td><td>工作结温范围</td><td colspan="7">-40 to 150</td><td>°C</td></tr><tr><td>TSTG</td><td>储存温度范围</td><td colspan="7">-55 to 150</td><td>°C</td></tr></table>

注1：最大极限值是指超出该工作范围，芯片有可能损坏。推荐工作范围是指在该范围内，器件功能正常，但并不完全保证满足个别性能指标。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。  
注2：温度升高最大功耗一定会减小，这也是由TJMAX, $\theta$ JA,和环境温度TA所决定的。最大允许功耗为 $\mathrm{PDMAX} = (\mathrm{TJMAX - TA}) / \theta \mathrm{JA}$ 或是极限范围给出的数字中比较低的那个值。

## 工作范围

<table><tr><td>符号</td><td colspan="8">参数范围</td><td>单位</td></tr><tr><td colspan="10">Vin=176Vac~265Vac,腔体温度60°C</td></tr><tr><td rowspan="2">ILED max最大输出电流</td><td>SJ</td><td>AJ</td><td>BJ</td><td>CJ</td><td>DJ</td><td>FJ</td><td>GJ</td><td rowspan="2">mA</td><td></td></tr><tr><td>180</td><td>220</td><td>290</td><td>380</td><td>450</td><td>500</td><td>550</td><td></td></tr><tr><td rowspan="2">POUTmax最大输出功率</td><td>SJ</td><td>AJ</td><td>BJ</td><td>CJ</td><td>DJ</td><td>FJ</td><td>GJ</td><td rowspan="2">W</td><td></td></tr><tr><td>16W</td><td>17W</td><td>19W</td><td>21W</td><td>24W</td><td>35W</td><td>40W</td><td></td></tr><tr><td colspan="10">Vin=176Vac~265Vac,腔体温度90°C</td></tr><tr><td rowspan="2">ILED max最大输出电流</td><td>SJ</td><td>AJ</td><td>BJ</td><td>CJ</td><td>DJ</td><td>FJ</td><td>GJ</td><td rowspan="2">mA</td><td></td></tr><tr><td>150</td><td>190</td><td>260</td><td>340</td><td>380</td><td>450</td><td>500</td><td></td></tr><tr><td rowspan="2">POUTmax最大输出功率</td><td>SJ</td><td>AJ</td><td>BJ</td><td>CJ</td><td>DJ</td><td>FJ</td><td>GJ</td><td rowspan="2">W</td><td></td></tr><tr><td>12W</td><td>13W</td><td>15W</td><td>17W</td><td>19W</td><td>29W</td><td>35W</td><td></td></tr><tr><td colspan="10"></td></tr><tr><td rowspan="2">VLED min</td><td rowspan="2">最小负载电压</td><td>SJ</td><td>AJ</td><td>BJ</td><td>CJ</td><td>DJ</td><td>FJ</td><td>GJ</td><td rowspan="2">V</td></tr><tr><td>&gt;20</td><td>&gt;20</td><td colspan="5">&gt;15</td></tr></table>

电气参数(注 3,4) （无特别说明情况下，TA=25℃）

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">电源电压</td></tr><tr><td> $I_{CC}$ </td><td>芯片工作电流</td><td> $F_{OP}=4kHz$ </td><td>175</td><td>200</td><td>280</td><td>μA</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $V_{CS\_TH}$ </td><td>电流检测阈值</td><td></td><td>360</td><td>373</td><td>386</td><td>mV</td></tr><tr><td> $T_{LEB}$ </td><td>前沿消隐时间</td><td></td><td></td><td>500</td><td></td><td>ns</td></tr><tr><td> $T_{DELAY}$ </td><td>芯片关断延迟</td><td></td><td></td><td>200</td><td></td><td>ns</td></tr><tr><td colspan="7">ROVP</td></tr><tr><td> $V_{EN}$ </td><td>ROVP引脚开机阈值</td><td></td><td></td><td>0.3</td><td></td><td>V</td></tr><tr><td> $I_{OVP}$ </td><td>OVP引脚电流</td><td></td><td></td><td>35</td><td></td><td>μA</td></tr><tr><td colspan="7">内部时间控制</td></tr><tr><td> $T_{OFF\_MIN}$ </td><td>最小退磁时间</td><td></td><td></td><td>1.3</td><td></td><td>μs</td></tr><tr><td> $T_{OFF\_MAX}$ </td><td>最大退磁时间</td><td></td><td></td><td>420</td><td></td><td>μs</td></tr><tr><td> $T_{ON\_MAX}$ </td><td>最大开通时间</td><td></td><td></td><td>40</td><td></td><td>μs</td></tr><tr><td> $T_{OVP\_RST}$ </td><td>OVP重启时间</td><td></td><td></td><td>10</td><td></td><td>ms</td></tr><tr><td colspan="7">功率管</td></tr><tr><td> $BV_{DSS}$ </td><td>功率管的击穿电压</td><td> $V_{GS}=0V,I_{DS}=250uA$ </td><td>500</td><td></td><td></td><td>V</td></tr><tr><td> $I_{DSS}$ </td><td>功率管漏电流</td><td> $V_{GS}=0V,V_{DS}=500V$ </td><td></td><td></td><td>1</td><td>μA</td></tr><tr><td> $SJ\ R_{DS\_ON}$ </td><td rowspan="7">功率管导通阻抗</td><td rowspan="7"> $V_{GS}=10V,I_{DS}=0.1A$ </td><td></td><td>16.5</td><td></td><td rowspan="7">Ω</td></tr><tr><td> $AJ\ R_{DS\_ON}$ </td><td></td><td>11</td><td></td></tr><tr><td> $BJ\ R_{DS\_ON}$ </td><td></td><td>8.5</td><td></td></tr><tr><td> $CJ\ R_{DS\_ON}$ </td><td></td><td>5.8</td><td></td></tr><tr><td> $DJ\ R_{DS\_ON}$ </td><td></td><td>4.8</td><td></td></tr><tr><td> $FJ\ R_{DS\_ON}$ </td><td></td><td>3</td><td></td></tr><tr><td> $GJ\ R_{DS\_ON}$ </td><td></td><td>2</td><td></td></tr><tr><td colspan="7">过热调节</td></tr><tr><td> $T_{REG}$ </td><td>过热调节温度</td><td>IC Surface</td><td></td><td>140</td><td></td><td>°C</td></tr></table>

注3：典型参数值为 $25^{\circ} \mathrm{C}$ 下测得的参数标准。  
注4：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。

## 内部结构框图

![](images/d0e42bebd8a39fb098f3eb9160ce7c3eb7dc241ff8510b5d0afafe594f64a4ed.jpg)  
图 3 BP2866XJ 内部框图

## 应用信息

BP2866XJ是一款专用于LED照明的恒流驱动芯片，应用于非隔离降压型LED驱动电源。采用栅极退磁检测技术和高压JFET供电技术，无需VCC电容和启动电阻，使其外围器件更简单，节约了外围的成本和体积。

## 启动

系统上电后，母线电压通过 HV 脚对芯片内部供电，当内部供电电压达到芯片开启阈值时，芯片内部控制电路开始工作。芯片正常工作时，所需的工作电流仍然通过内部的 JFET 对其提供。

## 恒流控制，输出电流设置

芯片逐周期检测电感的峰值电流，CS 端连接到内部的峰值电流比较器的输入端，与内部 373mV 阈值电压进行比较，当 CS 电压达到内部检测阈值时，功率管关断。

电感峰值电流的计算公式为：

$$
I _ {P K} = \frac {0 . 3 7 3}{R _ {C S}}
$$

其中，RCS 为电流采样电阻阻值。

CS 比较器的输出还包括一个 500ns 前沿消隐时间。

LED 输出电流计算公式为:

$$
\mathrm{I} _ {\mathrm{LED}} = \frac {\mathrm{I} _ {\mathrm{PK}}}{2}
$$

其中， $I_{PK}$ 是电感的峰值电流。

## 储能电感

BP2866XJ 工作在电感电流临界模式，当功率管导通时，流过储能电感的电流从零开始上升，导通时间为：

$$
t _ {\mathrm{on}} = \frac {L \times I _ {\mathrm{PK}}}{V _ {\mathrm{IN}} - V _ {\mathrm{LED}}}
$$

其中，L 是电感量； $I_{PK}$ 是电感电流的峰值；VIN 是经整流后的母线电压； $V_{LED}$ 是输出 LED 上的电压。

当功率管关断时，流过储能电感的电流从峰值开始往下降，当电感电流下降到零时，芯片内部逻辑再次将功率管开通。功率管的关断时间为：

$$
t _ {\text {off}} = \frac {L \times I _ {\mathrm{PK}}}{V _ {\mathrm{LED}}}
$$

储能电感的计算公式为：

$$
\mathrm{L} = \frac {\mathrm{V} _ {\mathrm{LED}} \times \left(\mathrm{V} _ {\mathrm{IN}} - \mathrm{V} _ {\mathrm{LED}}\right)}{\mathrm{f} \times \mathrm{I} _ {\mathrm{PK}} \times \mathrm{V} _ {\mathrm{IN}}}
$$

其中，f 为系统工作频率。BP2866XJ 的系统工作频率和输入电压成正比关系，设置 BP2866XJ 系统工作频率时，选择在输入电压最低时设置系统的最低工作频率，而当输入电压最高时，系统的工作频率也最高。

BP2866XJ 设置了系统的最小退磁时间和最大退磁时间，分别为 1.3us 和 420us。由 $t_{OFF}$ 的计算公式可知，如果电感量很小时， $t_{OFF}$ 很可能会小于芯片的最小退磁时间，系统就会进入电感电流断续模式，LED 输出电流会背离设计值；而当电感量很大时， $t_{OFF}$ 又可能会超出芯片的最大退磁时间，这时系统就会进入电感电流连续模式，输出 LED 电流同样也会背离设计值。所以选择合适的电感值很重要。

## 过压保护电阻设置

开路保护电压可以通过 ROVP 引脚电阻来设置，ROVP 引脚流出的电流约为 35uA。

当 LED 开路时，输出电压逐渐上升，退磁时间变短。因此可以根据需要设定的开路保护电压，来计算退磁时间 Tovp。

$$
\mathrm{Tovp} \approx \frac {\mathrm{L} \times \mathrm{Vcs}}{\mathrm{Rcs} \times \mathrm{Vovp}}
$$

其中，

Vcs 是 CS 关断阈值 (373mV)

Vovp 是需要设定的过压保护点

然后根据 Tovp 时间来计算 Rovp 的电阻值，公式如下：

$$
\mathrm{Rovp} \approx \frac {1 5 0}{\mathrm{Tovp}} * 1 0 ^ {- 3}
$$

注：ROVP 脚有 EN 功能，ROVP 电压低于 0.3V，芯片进入保护 Disable，关断输出，所以 ROVP 电阻建议大于 15K；如不需要 OVP 功能，ROVP 悬空即可。

## 保护功能

BP2866XJ 内置多种保护功能，包括 LED 短路保护，芯片供电电压欠压保护，芯片温度过热调节等。

当 LED 短路时，系统工作在 4kHz 低频，所以功耗很低。

BP2866XJ 通过过温调节电路检测芯片温度，当芯片温度超过 $140^{\circ}$ C 时，芯片进入过温调节状态，逐渐减小输出电流，从而控制输出功率和温升，使芯片温度控制在一定值，以提高系统的可靠性。

## PCB 设计

在设计BP2866XJPCB时，需要遵循以下指南：

## CS采样电阻

电流采样电阻的功率地线尽可能短，且要和芯片的地线及其它小信号地线分头接到母线电容的地。另外加大CS引脚的铺铜面积可以加强芯片散热。

## HV引脚

在焊接允许的情况下，HV 引脚尽量远离 CS 引脚和其他低压引脚。

功率环路的面积

减小功率环路的面积，如功率电感、功率管、母线电容的环路面积，以及功率电感、续流二极管、输出电容的环路面积，以减小 EMI 辐射。

## DRAIN 引脚

增加 DRAIN 引脚的铺铜面积以提高芯片散热,但是过大的铺铜面积会使 EMI 变差。

## 封装信息

![](images/7d56bac2c0a36eacf18face5ec99f54fb8315512eb22307ef03cbe31a822b14f.jpg)

![](images/fe1eae51678330c4e1f821de369ecd27efffec3c4e42defcd6d5edc40ad344d8.jpg)

![](images/c4a89153349ef51412501143206303a6682af7d97e3169a86d29450d0acf7178.jpg)  
WITH PLATING  
SECTION B-B

![](images/58d31fdc907f8c6c247483b95a17fc74de70916a6cbcd0d42eb35d73ca1cd5f4.jpg)

<table><tr><td rowspan="2">SYMBOL</td><td colspan="3">MILLIMETER</td></tr><tr><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A</td><td>1.30</td><td>—</td><td>1.80</td></tr><tr><td>A1</td><td>0.05</td><td>—</td><td>0.25</td></tr><tr><td>A2</td><td>1.25</td><td>—</td><td>1.65</td></tr><tr><td>b</td><td>0.33</td><td>—</td><td>0.51</td></tr><tr><td>c</td><td>0.10</td><td>—</td><td>0.25</td></tr><tr><td>D</td><td>4.70</td><td>4.90</td><td>5.10</td></tr><tr><td>E</td><td>5.80</td><td>6.00</td><td>6.24</td></tr><tr><td>E1</td><td>3.70</td><td>3.90</td><td>4.10</td></tr><tr><td>e</td><td colspan="3">1.27BSC</td></tr><tr><td>L</td><td>0.40</td><td>—</td><td>1.00</td></tr></table>

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev.1.6</td><td>2022/07</td><td>OVP 重启时间“8ms”改为“10ms”</td></tr><tr><td>Rev.1.7</td><td>2022/09</td><td>包装形式改为4000颗/盘</td></tr><tr><td>Rev.1.8</td><td>2024/06</td><td>修改A档最小带载参数;删除ESD项</td></tr><tr><td></td><td></td><td></td></tr></table>

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。