## 概述

BP2522X 是一款高精度低待机功耗的非隔离降压型恒压驱动芯片。适用于85Vac\~265Vac 全电压输入的非隔离电源。

BP2522X 芯片内部集成高压功率开关，采用独有的电压电流控制技术，不需要外部环路补偿电容，即可实现优异的恒压特性，极大的节约了系统成本和体积。

BP2522X 芯片采用多模式控制技术，并从输出给VCC 供电，有效降低系统待机功耗，提高效率和动态性能，并减小系统工作在轻载时的噪声。

BP2522X 采用 SOT33-5A 封装。

## 特点

 超低待机功耗 <20mW

 固定 12V 或24V 输出电压，可选择

 内部集成高压功率管

 集成高压启动和供电电路

 优异的动态响应

 减小音频噪声的降幅调制技术

 改善EMI的抖频技术

 ±5%输出电压精度

 内置软启动

 保护功能

➢ 过载保护

➢ 短路保护

➢ 过温保护

➢ 逐周期限流

## 应用

辅助电源

 其他应用

## 典型应用

![](images/947b42cac026bdb20e5cc4892d6b0292b6fd4104b48bbe608816d4b532da19eb.jpg)  
图 1 BP2522X 典型应用

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>温度范围</td><td>包装形式</td><td>打印</td></tr><tr><td>BP2522X</td><td>SOT33-5A</td><td>-40°C 到 105°C</td><td>编带7,500 颗/盘</td><td>BP2522XXXXXYZZZWWX</td></tr></table>

## 管脚封装

![](images/4ef84dd4f9a4ab332193578d1ff0047130203fe366e8dc61381a01be7b4d049c.jpg)  
图 2 管脚封装图

XXXXXY: lot code

ZZZZ: 标示

WW：周号

X:代表 MOS 型号

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>GND</td><td>芯片地</td></tr><tr><td>2</td><td>SEL</td><td>输出电压选择端。接VCC:输出12V;接GND:输出24V</td></tr><tr><td>3</td><td>VCC</td><td>芯片电源端</td></tr><tr><td>4</td><td>DRAIN</td><td>芯片内部高压功率管的漏极</td></tr><tr><td>5</td><td>CS</td><td>电流采样端,采样电阻接在CS和GND端之间</td></tr></table>

## 极限参数(注 1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td> $V_{DS}(B、D、F)$ </td><td rowspan="2">内部高压功率管漏极到源极峰值电压</td><td>-0.3~500</td><td>V</td></tr><tr><td> $V_{DS}(CH)$ </td><td>-0.3~650</td><td>V</td></tr><tr><td>VCC</td><td>VCC电压</td><td>-0.3~28</td><td>V</td></tr><tr><td> $I_{CC\_MAX}$ </td><td>VCC引脚最大电源电流</td><td>5</td><td>mA</td></tr><tr><td>SEL</td><td>输出电压选择端</td><td>-0.3~28</td><td>V</td></tr><tr><td>CS</td><td>电流采样端</td><td>-0.3~6</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注2)</td><td>0.4</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>PN结到环境的热阻</td><td>155</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40 to 150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55 to 150</td><td>°C</td></tr></table>

注 1：最大极限值是指超出该工作范围，芯片有可能损坏。推荐工作范围是指在该范围内，器件功能正常，但并不完全保证满足个别性能指标。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。

注 2：温度升高最大功耗一定会减小，这也是由 T<sub>JMAX</sub>,θ<sub>JA</sub>,和环境温度 $\mathrm { T } _ { \mathrm { A } }$ 所决定的。最大允许功耗为 $\mathrm { P _ { D M A X } = ( T _ { J M A X } - T _ { A } ) / }$ $\theta _ { \mathrm { J A } }$ 或是极限范围给出的数字中比较低的那个值。

## 极限输出电流表

测试条件：输入电压 85Vac-265Vac

\*脉冲电流：持续时间<60S，占空比<10% 。

<table><tr><td>型号</td><td>持续电流Vout=12V</td><td>脉冲电流Vout=12V</td><td>持续电流Vout=24V</td><td>脉冲电流Vout=24V</td><td>内部MOS管限制最大电流</td><td>单位</td></tr><tr><td>BP2522B</td><td>160</td><td>250</td><td>140</td><td>250</td><td>500</td><td>mA</td></tr><tr><td>BP2522CH</td><td>220</td><td>300</td><td>170</td><td>280</td><td>650</td><td>mA</td></tr><tr><td>BP2522D</td><td>240</td><td>350</td><td>220</td><td>310</td><td>750</td><td>mA</td></tr><tr><td>BP2522F</td><td>320</td><td>500</td><td>300</td><td>500</td><td>1200</td><td>mA</td></tr></table>

\*注：BP2522B 12V应用极限电流参数为电感1mH下测试结果，24V 应用为电感2mH 下测试结果；  
BP2522CH、BP2522D 12V 应用极限电流参数为电感 550uH 下测试结果，24V 应用为电感 1mH 下测试结果；

BP2522F12V 应用极限电流参数为电感330uH 下测试结果，24V应用为电感600uH 下测试结果；感量设置较大会导致温升变高，为了保证芯片温升控制在合理范围，建议让满载时系统工作在 DCM 或BCM 模式。

![](images/b66dec04a4d61b627547bae5a35fe543c6438e32a2e66eedda820ca10e8c9692.jpg)  
图 3 瞬时脉冲示意图

电气参数(注 4, 5)（无特别说明情况下， $\mathrm { \bf T } _ { \mathrm { A } } { = } 2 5 \mathrm { \mathcal { C } } { ) }$

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">电源电压</td></tr><tr><td> $V_{CC}$ </td><td> $V_{CC}$ 引脚稳态电压</td><td>SEL= VCC</td><td>12.1</td><td>12.45</td><td>12.8</td><td>V</td></tr><tr><td> $V_{CC}$ </td><td> $V_{CC}$ 引脚稳态电压</td><td>SEL= GND</td><td>24</td><td>24.75</td><td>25.5</td><td>V</td></tr><tr><td> $V_{CC_ON}$ </td><td> $V_{CC}$ 开启电压</td><td>Rising</td><td></td><td>11</td><td></td><td>V</td></tr><tr><td> $V_{CC_OFF}$ </td><td> $V_{CC}$ 关断电压</td><td>Falling</td><td></td><td>7.5</td><td></td><td>V</td></tr><tr><td> $V_{CC_HYS}$ </td><td> $V_{CC}$ 引脚电压迟滞</td><td></td><td></td><td>3.5</td><td></td><td>V</td></tr><tr><td> $V_{CC_CHRG}$ </td><td> $V_{CC}$ 充电开启电压</td><td>Falling</td><td></td><td>8</td><td></td><td>V</td></tr><tr><td> $V_{CLAMP}$ </td><td> $V_{CC}$ 引脚箝位电压</td><td> $I_{CLAMP}=2mA$ </td><td></td><td>27.5</td><td></td><td>V</td></tr><tr><td rowspan="2"> $V_{CC_OLP}$ </td><td rowspan="2"> $V_{CC}$ 过载保护电压</td><td>Falling/SEL接Vcc</td><td></td><td>8.5</td><td></td><td>V</td></tr><tr><td>Falling/SEL接GND</td><td></td><td>16</td><td></td><td>V</td></tr><tr><td> $I_{OP}$ </td><td> $V_{CC}$ 工作电流</td><td> $V_{DRAIN}=40V$ </td><td></td><td>200</td><td>300</td><td>uA</td></tr><tr><td> $I_{cc}$ </td><td> $V_{CC}$ 启动电流</td><td></td><td></td><td>3</td><td></td><td>mA</td></tr><tr><td colspan="7">振荡器</td></tr><tr><td> $F_{OSC_MAX}$ </td><td>最大开关频率</td><td>频率中心值</td><td>54</td><td>60</td><td>66</td><td>kHz</td></tr><tr><td> $D_{MAX}$ </td><td>最大占空比</td><td></td><td></td><td>64</td><td></td><td>%</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $V_{CS_TH}$ </td><td>电流检测阈值</td><td></td><td></td><td>200</td><td></td><td>mV</td></tr><tr><td> $T_{LEB}$ </td><td>前沿消隐时间</td><td></td><td></td><td>250</td><td></td><td>ns</td></tr><tr><td> $T_{ILD}$ </td><td>电流限流延迟</td><td></td><td></td><td>100</td><td></td><td>ns</td></tr><tr><td colspan="7">功率管</td></tr><tr><td> $B\ R_{DS_ON}$ </td><td rowspan="4">功率管导通阻抗</td><td rowspan="4">Vout=12V, $I_{DS}$ =50mA</td><td></td><td>17</td><td></td><td>Ω</td></tr><tr><td> $CH\ R_{DS_ON}$ </td><td></td><td>16</td><td></td><td>Ω</td></tr><tr><td> $D\ R_{DS_ON}$ </td><td></td><td>9</td><td></td><td>Ω</td></tr><tr><td> $F\ R_{DS_ON}$ </td><td></td><td>5.6</td><td></td><td>Ω</td></tr><tr><td> $I_{DSS}$ </td><td>功率管关断漏极漏电流</td><td> $V_{CC}$ =12V/ $V_{DS}$ =500V</td><td></td><td></td><td>30</td><td>uA</td></tr><tr><td>B、D、 $F\ BV_{DSS}$ </td><td rowspan="2">功率管的击穿电压</td><td rowspan="2"> $V_{GS}$ =0V/ $I_{DS}$ =250uA</td><td>500</td><td></td><td></td><td>V</td></tr><tr><td> $CH\ BV_{DSS}$ </td><td>650</td><td></td><td></td><td>V</td></tr><tr><td> $V_{DS\_SUP}$ </td><td>漏极供电电压</td><td></td><td>24</td><td></td><td></td><td>V</td></tr><tr><td colspan="7">过热保护</td></tr><tr><td> $T_{SD}$ </td><td>过热调节温度</td><td></td><td></td><td>150</td><td></td><td>°C</td></tr><tr><td> $T_{SD_HYS}$ </td><td>过热保护温度迟滞</td><td></td><td></td><td>40</td><td></td><td>°C</td></tr></table>

注 4：典型参数值为25˚C 下测得的参数标准。  
注 5：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。

## 内部结构框图

![](images/7d9743316bb682c2d7dcef0926ebe52878359713e0f6a32ecdeaf2f8cb77263d.jpg)  
图 3 BP2522X 内部框图

## 应用信息

BP2522X 是一款高压输入的超低待机功耗降压型恒压驱动芯片，采用特有的多模式控制，芯片内部集成高压功率开关和输出电压采样电阻，只需要极少的外围组件就可以达到优异的恒压特性。特别适合于辅助电源应用。

## 启动

系统上电后，母线电压直接通过 Drain 端对 V 电容充电，当V 电压达到芯片开启阈值时，芯片内部控制电路开始工作。BP2522X内置27V稳压管，用于钳位 V<sub>CC</sub>电压。芯片正常工作时，需要的 V<sub>CC</sub>电流极低，所以无需辅助绕组供电。

## 软启动

芯片具有软启动功能，在软启动过程中，会分段增加原边峰值电流以减小开关应力，每一次重启都会经历软启动的过程。

![](images/cae7e20bfdfbccdf2dad6081a92241fc9c36d56f70ba318e621cb56ab99b28db.jpg)

## 输出电感

BP2522X 可工作于 CCM、DCM 等多种工作模式，对于电感的选择包括感量、峰值电流以及平均电流。最终根据电感价格、电感尺寸以及系统效率来决定电感的大小。小感量电感可以减小尺寸、降低价格以及改善系统动态响应，但是，同时会增大电感的峰值电流和输出纹波并且降低系统效率。相反的，大感量电感可以提高效率，因为需要更多线圈数，物理体积也会更大，动态响应也会变的更慢。综合电感价格、尺寸、系统效率以及动态响应，推荐电感纹波电流系数 r 不小于 25%，工作在 CCM 模式下，然后，根据输入/输出电压、系统开关频率、满载输出电流以及推荐的电感纹波电流 ΔIL估算电感感量、峰值电流

$$
\mathrm{L} = \frac {V _ {O U T} (V _ {I N} - V _ {O U T})}{V _ {I N} * F * \Delta I _ {L}}
$$

其中

$$
\Delta I _ {L} = I _ {o u t} * r
$$

## 峰值电流

当电流纹波系数 r 确定后，就可以计算出峰值电流大小

$$
I _ {L \_ P E A K} = I _ {O \_ M A X} + \frac {\Delta I _ {L}}{2}
$$

$$
I _ {L \_ V A L L Y} = I _ {O \_ M A X} - \frac {\Delta I _ {L}}{2}
$$

同样由芯片的 $\mathrm { I _ { L I M I T } }$ 参数可推算出最大的过载电流。

## CS 电阻的选择

芯片可以根据MOS档位合理的设置电感的限流峰值，实际 CS 电阻的选择需要综合考虑负载电流和电流纹波，并留一定余量。

CS 电阻计算为：

$$
R _ {C S} = \frac {2 2 0 (\mathrm{mV})}{I _ {\lim i t} (\mathrm{mA})}
$$

注：内部比较器延时导致实际 CS\_TH略高于芯片内部 200mV基准电压。

## 输入电容的选择

输入电容的用处在于输入电压以及 MOSFET 开关尖峰的滤波。由于降压转换器的输入电流是非连续的，需要电容对交流电流进行吸收，以保证平稳的输入电压。另外，输入电容需要能承受足够的电流波纹。输入纹波电流有效值估算如下：

$$
I _ {I N \_ R M S} = I _ {O \_ M A X} \times \sqrt {D \times (1 - D)}
$$

$$
D = \frac {V _ {O U T}}{V _ {I N}}
$$

为了减小噪声，建议输入电容选择电解电容。

## 输出电容的选择

输出电容的作用是输出电压的滤波以及输出动态电流的供应。当输出电流恒定时，输出纹波主要由输出电容的 ESR以及容量决定。

$$
V _ {R I P P L E} = V _ {R I P P L E \_ E S R} + V _ {R I P P L E \_ C}
$$

$$
V _ {R I P P L E \_ E S R} = \Delta I _ {L} \times E S R
$$

$$
V _ {R I P P L E \_ C} = \frac {\Delta I _ {L}}{8 \times C _ {O U T} \times f s w}
$$

## 二极管选择

二极管作为 BUCK电路的续流二极管，为了提高效率，尽量使用具有快恢复时间和低导通压降的二极管作为整流二极管。二极管反向击穿电压需大于BUCK电容输入电压。

## 假负载选择

系统中假负载作用是防止空载或轻载时输出电压飘高。假负载阻值过大会导致空载时输出电压飘高，而阻值过小会影响实际的带载能力，也会增大系统的待机功耗。因此需要合理的设置假负载阻值，12V推荐为 22Kohm,24V 推荐为 91Kohm。

## 多模式控制

BP2522X 芯片采用 PWM/PFM 多模式控制技术，能有效降低系统待机功耗，提高效率，并减小系统工作在轻载时的噪声。

## 输出电压过载、短路保护

BP2522X 通过 VCC 引脚来实现输出电压的过载、短路保护。当VCC电压低于设定电压且保持360ms，芯片即实现输出过载保护。保护后，功率 MOS 关断，芯片振荡器工作在最低频率为 8KHz，保护发生后，芯片会定时约2S重新检测 VCC 电压，如果过载、短路解除，则正常工作，如未解除，继续保护。

## 其它保护功能

BP2522X 内置多种保护功能，包括过温保护，逐周期限流等。

## PCB 设计

在设计 BP2522XPCB时，需要遵循以下建议：

## 旁路电容

V<sub>CC</sub>的旁路电容需要紧靠芯片V<sub>CC</sub>和GND 引脚。

## 芯片 GND

芯片 GND 输出电感之间的走线应该短粗,防止形成发射天线影响EMI辐射。

## 功率环路的面积

减小功率环路的面积，如输入母线电容、芯片DRAIN引脚以及GND 之间的环路，输出电容、输出电感、输出整流管之间的环路以减小 EMI 辐射。

## DRAIN 引脚

增加 DRAIN 引脚的敷铜面积以提高芯片散热。DRAIN引脚尽量远离低压引脚和元器件。

## 封装信息

<table><tr><td rowspan="2">SYMBOL</td><td colspan="3">MILLIMETER</td></tr><tr><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A</td><td>—</td><td>—</td><td>1.30</td></tr><tr><td>A1</td><td>0.05</td><td>—</td><td>0.15</td></tr><tr><td>A2</td><td>1.05</td><td>1.10</td><td>1.15</td></tr><tr><td>A3</td><td>0.50</td><td>0.55</td><td>0.65</td></tr><tr><td>a</td><td>0.52</td><td>—</td><td>0.60</td></tr><tr><td>a1</td><td>0.51</td><td>0.54</td><td>0.57</td></tr><tr><td>b</td><td>0.58</td><td>—</td><td>0.66</td></tr><tr><td>b1</td><td>0.57</td><td>0.60</td><td>0.63</td></tr><tr><td>c</td><td>0.15</td><td>—</td><td>0.19</td></tr><tr><td>c1</td><td>0.14</td><td>0.15</td><td>0.16</td></tr><tr><td>d</td><td>0.38</td><td>—</td><td>0.46</td></tr><tr><td>d1</td><td>0.37</td><td>0.40</td><td>0.43</td></tr><tr><td>D</td><td>3.80</td><td>3.90</td><td>4.00</td></tr><tr><td>E1</td><td>2.50</td><td>2.60</td><td>2.70</td></tr><tr><td>E</td><td>3.80</td><td>4.00</td><td>4.20</td></tr><tr><td>e</td><td colspan="3">0.90BSC</td></tr><tr><td>e1</td><td colspan="3">0.81 BSC</td></tr><tr><td>e2</td><td colspan="3">1.25 BSC</td></tr><tr><td>L</td><td>0.40</td><td>0.50</td><td>0.60</td></tr><tr><td>L1</td><td colspan="3">0.70REF.</td></tr><tr><td>θ</td><td>0</td><td>—</td><td>8°</td></tr></table>