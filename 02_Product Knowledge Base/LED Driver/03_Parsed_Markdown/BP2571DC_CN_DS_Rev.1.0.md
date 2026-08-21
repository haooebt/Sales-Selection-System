# 高精度低功耗非隔离降压型AC/DC恒压芯片

## 概述

BP2571DC 是一款直接采样输出电压的高精度低待机功耗的非隔离降压型恒压芯片，输出电压的动态响应快，批量一致性好。适用于 85Vac\~265Vac 全电压输入的非隔离电源。

BP2571DC芯片内部集成功率MOSFET，采用电压电流控制技术，不需要VCC电容和外部环路补偿电容，即可实现优异的恒压特性，极大的节约了系统成本和体积。

BP2571DC 采用多模式控制技术，并减小系统工作在轻载时的噪声，并能够从输出电压给芯片供电，有效降低系统待机功耗，提高效率。

BP2571DC 采用 SOP8 封装。

![](images/2068b795c8a3a1bbf8e99717d92f11ae741e743c03ada5ba9ef20758de3dadd1.jpg)  
SOP8 封装

## 特点

 优异的动态响应

 直接采样输出电压

 输出电压批量一致性达到±5%以内

 外围精简，电源体积小

 无需 VCC 电容和供电二极管

 集成续流二极管

 3.3V 或 5V 输出电压

 内部集成功率管

 集成高压启动和供电电路

 减小音频噪声的降幅调制技术

 改善 EMI 的抖频技术

 内置软启动

 保护功能

过温保护

逐周期限流

## 应用

辅助电源

其他应用

## 典型应用

![](images/11a483e6433b0511a2e02e187aefe45aa6d903f72c56fa5f560b32b51459c2c4.jpg)  
图 1 BP2571DC 典型应用图

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP2571DC</td><td>SOP8</td><td>编带4,000颗/盘</td><td>BP2571XXXXYCZZZWWD</td></tr></table>

## 管脚封装

![](images/2864a0cc57d25cc1e931fdf0d14c60fffebd33bca409c0f74db8f577fd724ee1.jpg)  
BP2571DC：产品型号  
XXXXXYC : 批次号  
ZZZZ: 内部标示  
WW：周号  
图 2.管脚封装图

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>CSP</td><td>电流采样端,采样电阻接在 CSP 和 VOUT 端之间</td></tr><tr><td>2</td><td>VOUT</td><td>电源输出端</td></tr><tr><td>3</td><td>SEL</td><td>输出电压选择端。接 GND:输出 3.3V;接 VOUT:输出 5V</td></tr><tr><td>4</td><td>GND</td><td>芯片地</td></tr><tr><td>5</td><td>HV</td><td>芯片内部高压功率管的漏极</td></tr><tr><td>6,7</td><td>NC</td><td>电源输出端</td></tr><tr><td>8</td><td>VS</td><td>芯片内部高压功率管的源极,功率电感接在 VS 和 CSP 之间</td></tr></table>

## 输出功率

测试条件：输入电压 85Vac-265Vac。 \*脉冲电流持续时间<60s，占空比<10% 。

<table><tr><td>持续电流Vout=3.3V</td><td>脉冲电流Vout=3.3V</td><td>持续电流Vout=5V</td><td>脉冲电流Vout=5V</td><td>内部 MOS 管限制最大电流</td><td>单位</td></tr><tr><td>300</td><td>500</td><td>300</td><td>500</td><td>750</td><td>mA</td></tr></table>

![](images/d94bbed6a251ef24f347ed1e9eed5d24adeb0ef986a6952a33d352f129c3382b.jpg)  
图 3 瞬时脉冲示意图

注 2：温度升高最大功耗一定会减小，这也是由 $T _ { \Delta M A X } , \theta _ { J A } ,$ 和环境温度TA所决定的。最大允许功耗为 $P _ { D M A X } = ( T _ { J M A X } - T _ { A } ) / \theta _ { J A }$ 或是极限范围给出的数字中比较低的那个值。

## 极限参数(注 1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td> $V_{DS}$ </td><td>内部高压功率管漏极到源极峰值电压</td><td>-0.3~500</td><td>V</td></tr><tr><td>SEL</td><td>输出电压选择端</td><td>-0.3~6</td><td>V</td></tr><tr><td>VOUT</td><td>电源输出端</td><td>-0.3~6</td><td>V</td></tr><tr><td>CSP</td><td>电流采样端</td><td>-0.3~6</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注2)</td><td>0.86</td><td>W</td></tr><tr><td> $θ_{JA}$ </td><td>PN结到环境的热阻</td><td>145</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40 to 150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55 to 150</td><td>°C</td></tr></table>

注 1：最大极限值是指超出该工作范围，芯片有可能损坏。推荐工作范围是指在该范围内，器件功能正常，但并不完全保证满足个别性能指标。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。

电气参数<sub>(</sub>注 3<sub>,</sub> 4<sub>)</sub> （无特别说明情况下， ${ \mathsf { T } } { \mathsf { A } } = 2 5 { } ^ { \circ } { \mathsf { C } } )$

<table><tr><td>符号</td><td>参数描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">电源电压</td></tr><tr><td> $V_{OUT}$ </td><td> $V_{OUT}$ 引脚稳态电压</td><td>SEL=GND</td><td>3.272</td><td>3.345</td><td>3.408</td><td>V</td></tr><tr><td> $V_{OUT}$ </td><td> $V_{OUT}$ 引脚稳态电压</td><td>SEL=VOUT</td><td></td><td>5.24</td><td></td><td>V</td></tr><tr><td> $V_{OUT\_CLAMP}$ </td><td> $V_{OUT}$ 引脚钳位电压</td><td> $I_{CLAMP}=2mA$ </td><td></td><td>6</td><td></td><td>V</td></tr><tr><td> $I_{OUT\_OP}$ </td><td> $V_{OUT}$ 工作电流</td><td> $V_{DRAIN}=60V$ </td><td>800</td><td>900</td><td>1100</td><td>μA</td></tr><tr><td> $I_{cc}$ </td><td> $V_{CC}$ 启动电流</td><td></td><td></td><td>2</td><td></td><td>mA</td></tr><tr><td> $I_{HV\_OP}$ </td><td>HV工作电流</td><td> $V_{OUT}=3.3V$ </td><td></td><td>30</td><td></td><td>μA</td></tr><tr><td colspan="7">振荡器</td></tr><tr><td> $F_{OSC\_MAX}$ </td><td>最大开关频率</td><td>频率中心值</td><td>20</td><td>48</td><td>70</td><td>kHz</td></tr><tr><td> $T_{ON\_MAX}$ </td><td>最大开通时间</td><td></td><td>1.5</td><td>1.9</td><td>3.5</td><td>μs</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $V_{cs\_th}$ </td><td>电流检测阈值</td><td></td><td>192</td><td>200</td><td>208</td><td>mV</td></tr><tr><td> $T_{LEB}$ </td><td>前沿消隐时间</td><td></td><td></td><td>280</td><td></td><td>ns</td></tr><tr><td> $T_{ILD}$ </td><td>电流限流延迟</td><td></td><td></td><td>150</td><td></td><td>ns</td></tr><tr><td colspan="7">功率管</td></tr><tr><td> $R_{DS\_ON}$ </td><td>功率管导通阻抗</td><td> $V_{out}=3.3V,I_{DS}=50mA$ </td><td></td><td></td><td>12</td><td>Ω</td></tr><tr><td> $BV_{DSS}$ </td><td>功率管的击穿电压</td><td> $V_{GS}=0V/I_{DS}=250μA$ </td><td>500</td><td></td><td></td><td></td></tr><tr><td colspan="7">过热保护</td></tr><tr><td> $T_{SD}$ </td><td>过热调节温度</td><td></td><td></td><td>145</td><td></td><td>°C</td></tr><tr><td> $T_{SD\_HYS}$ </td><td>过热保护温度迟滞</td><td></td><td></td><td>40</td><td></td><td>°C</td></tr></table>

注 3：典型参数值为 25˚C下测得的参数标准。  
注 4：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。

## 内部结构框图

![](images/764705981a5e0a21e692c11bb3ad103d5299bf9c82fe47de2078410718601f6f.jpg)  
图 4 内部框图

## 应用信息

## 启动

系统上电后，母线电压通过Drain端内部的高压JFET对芯片内部 VCC 电容充电，达到芯片开启阈值时，芯片内部控制电路开始工作。芯片正常工作时主要从输出直接供电，部分驱动模块需要由高压 JFET 供电。

## 软启动

芯片具有软启动功能，在软启动过程中，会分段增加原边峰值电流以减小开关应力，每一次重启都会经历软启动过程。在输出电压建立完成前，芯片检测电感退磁电流，在电感电流小于峰值电流的约 30%才允许再次开通 MOSFET，以此防止启动过程中的电感电流积累。

## 多模式控制

BP2571DC 芯片采用 PWM/PFM 多模式控制技术，能有效降低系统待机功耗，提高效率，并减小系统工作在轻载时的噪声。

## 输出电感

BP2571DC可工作于CCM、DCM等多种工作模式，对于电感的选择包括感量、峰值电流以及平均电流。最终根据电感价格、电感尺寸以及系统效率来决定电感的大小。小感量电感可以减小尺寸、降低价格以及改善系统动态响应，但是，同时会增大电感的峰值电流和输出纹波并且降低系统效率。相反的，大感量电感可以提高效率，因为需要更多线圈数，物理体积也会更大，动态响应也会变的更慢。系统效率以及动态响应，推荐电感纹波电流系数r不小于25%，工作在CCM模式下，然后，根据输入/输出电压、系统开关频率、满载输出电流以及推荐的电感纹波电流ΔIL 估算电感感量、峰值电流

$$
\mathrm{L} = \frac {V _ {O U T} (V _ {I N} - V _ {O U T})}{V _ {I N} * F * \Delta I _ {L}}
$$

其中

$$
\Delta I _ {L} = I _ {o u t} * r
$$

## 峰值电流

当电流纹波系数 r确定后，就可以计算出峰值电流大小

$$
I _ {L \_ P E A K} = I _ {O \_ M A X} + \frac {\Delta I _ {L}}{2}
$$

$$
I _ {L \_ V A L L Y} = I _ {O \_ M A X} - \frac {\Delta I _ {L}}{2}
$$

同样由芯片的 ILIMIT 参数可推算出最大的过载电流。

## CS电阻的选择

芯片可以根据 MOSFET档位合理的设置电感的限流峰值，实际 CS 电阻的选择需要综合考虑负载电流和电流纹波，并留一定余量。

CS 电阻计算为：

$$
R _ {C S} = \frac {V c s \_ p k (m V)}{I _ {l i m i t} (m A)}
$$

## 输入电容的选择

输入电容的用处在于输入电压以及 MOSFET 开关尖峰的滤波。由于降压转换器的输入电流是非连续的，需要电容对交流电流进行吸收，以保证平稳的输入电压。另外，输入电容需要能承受足够的电流波纹。输入纹波电流有效值估算如下：

$$
\begin{array}{c} {I _ {I N \_ R M S} = I _ {O \_ M A X} \times \sqrt {D \times (1 - D)}} \\ {D = \frac {V _ {O U T}}{V _ {I N}}} \end{array}
$$

为了减小噪声，建议输入电容选择电解电容。

## 输出电容的选择

输出电容的作用是输出电压的滤波以及输出动态电流的供应。当输出电流恒定时，输出纹波主要由输出电容的 ESR以及容量决定。

$$
\begin{array}{c} V _ {R I P P L E} = V _ {R I P P L E \_ E S R} + V _ {R I P P L E \_ C} \\ V _ {R I P P L E \_ E S R} = \Delta I _ {L} \times E S R \end{array}
$$

$$
V _ {R I P P L E \_ C} = \frac {\Delta I _ {L}}{8 \times C _ {O U T} \times f s w}
$$

## 保护功能

BP2571DC 内置多种保护功能，包括过温保护，逐周期限流、VOUT 电压钳位等。

## 抖频

BP2571DC 引入抖频技术来减少 EMI 噪声。芯片开关频率在当前频率的±3%范围周期性抖动，抖频周期为当前频率1/128。

## 输出电压采样

BP2571DC 直接采样输出电压，实现高精度高速的输出电压控制。

![](images/f5730d12f64a645468dc30c512ffb34c472c05616d6541daaefe55f5be51fce2.jpg)

## 封装信息

![](images/b11d0af81ccb2192b02b912bf2e89a0dc4c98a62cd3ac22dabe4890c4d190247.jpg)

![](images/9ef2ad67d96c7b42441028a80c99aae71865528a668c87b92ae80abdf5421415.jpg)

![](images/eb51d7f5a91634680bade80fb3c1177c91301c849a7251f462b1d2916e6dbfc4.jpg)  
SECTION B-B

<table><tr><td rowspan="2">SYMBOL</td><td colspan="3">MILLIMETER</td></tr><tr><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A</td><td>1.30</td><td>—</td><td>1.80</td></tr><tr><td>A1</td><td>0.05</td><td>—</td><td>0.25</td></tr><tr><td>A2</td><td>1.25</td><td>1.40</td><td>1.65</td></tr><tr><td>b</td><td>0.33</td><td>—</td><td>0.51</td></tr><tr><td>c</td><td>0.17</td><td>—</td><td>0.25</td></tr><tr><td>D</td><td>4.70</td><td>4.90</td><td>5.10</td></tr><tr><td>E</td><td>5.80</td><td>6.00</td><td>6.30</td></tr><tr><td>E1</td><td>3.70</td><td>3.90</td><td>4.10</td></tr><tr><td>e</td><td colspan="3">1.27BSC</td></tr><tr><td>L</td><td>0.40</td><td>—</td><td>1.00</td></tr></table>

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev.1.0</td><td>2025/02</td><td>首次发行</td></tr></table>

![](images/bbcc3dfec2dd75d4f88da4bad58f34dd4770c698bdb3b75fba81c9f6277e04a7.jpg)

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。

## 电子器件报废说明

该产品在生命周期结束后，由客户按照一般电子产品的报废流程进行处理。