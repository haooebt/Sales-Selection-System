## BP62110S 高效率DCM/QR同步整流驱动开关

## 概述

BP62110S 是一款高集成度、高性能、自供电的同步整流控制芯片，适用于高效率、高功率密度反激变换器应用。

BP62110S支持DCM和QR工作模式，内部电路通过检测同步MOSFET 的漏极和源极之间的电压产生一个理想的驱动信号来控制MOSFET的导通与截止，实现较低的导通损耗。

BP62110S 能够自适应调节驱动关断的 V<sub>DS</sub> 阈值电压，确保在退磁结束前关断驱动。芯片内部使用了振铃检测电路，避免了在 DCM 模式下由于自由振荡引起误开通而导致的初次级共通问题。同时内置前沿消隐时间，可以防止寄生振荡误触发MOSFET提前关断，从而保证同步整流稳定工作。

BP62110S 采用 VD 引脚自供电的方法，无需外部供电，可灵活地选择放置在输出正端或负端。放置于正端时，不需要额外的供电绕组，外围电路非常简洁。同时，由于自供电，可以实现宽输出电压范围，输出电压可以低至0 V，非常适合充电器应用。

BP62110S 采用 SOT23-6 封装, 满足 MSL-3 潮敏等级。

![](images/3ae96f8654c255c8ad083dc9a443fe3b14b292f3858b2af68fe27392e2711395.jpg)

SO23-6 封装

## 特点

 支持 DCM/QR 工作模式

 芯片自供电，正端整流无需辅助供电绕组

 支持宽输出电压范围，可低至0V输出

 内置振铃检测，防止DCM误开通

 可用于正端和负端整流

 支持宽输出电压范围，可低至0V输出

 最大4A驱动下拉电流，超低驱动内阻可避免密勒效应引起误开通

超短开通延时，增加了MOSFET导通时间，优化了效率

 低待机功耗，满足六级能效要求

 集成度高，外围电路简洁

## 应用领域

 QC/USB-PD/可编程 AC-DC 充电器

 高效率电源适配器

 高效率、高功率密度反激变换器

## 典型应用

![](images/196a1157eb83a98a87fba9e5209379bea656eb03dfdf10e0687180885336617d.jpg)  
图 1. BP62110S 典型应用电路

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP62110S</td><td>SOT23-6</td><td>卷盘3000颗/盘</td><td>62110S</td></tr></table>

## 管脚封装

![](images/a9ef577857382d9a8f00da4bc48d21345eadddceaa24f6973462d20dceaf8eda.jpg)  
BP62110S：产品型号  
图 2. SOT23-6 管脚封装图

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>VOUT</td><td>输出电压检测端,同时也向芯片供电,可以连接到输出或者 VCC 脚</td></tr><tr><td>2</td><td>VSS</td><td>芯片地</td></tr><tr><td>3</td><td>SLEW</td><td>dv/dt timer 设定引脚</td></tr><tr><td>4</td><td>VCC</td><td>芯片供电脚</td></tr><tr><td>5</td><td>VG</td><td>驱动输出</td></tr><tr><td>6</td><td>VD</td><td>功率 MOSFET 漏极电压检测脚,同时也是自供电引脚</td></tr></table>

极限参数(注 1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td>VCC</td><td> $V_{cc}$ 电压</td><td>-0.3~9</td><td>V</td></tr><tr><td> $V_D$ </td><td>VD引脚电压范围</td><td>-1~200</td><td>V</td></tr><tr><td>VG</td><td>VG引脚电压范围</td><td>-0.7~9</td><td>V</td></tr><tr><td> $V_{SLEW}$ </td><td>SLEW引脚电压范围</td><td>-0.7~9</td><td>V</td></tr><tr><td>VOUT</td><td>VOUT引脚电压范围</td><td>-0.7~30</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注2)</td><td>0.97</td><td>W</td></tr><tr><td> $θ_{JA}$ </td><td>结到环境的热阻 SOT23-6(注3)</td><td>240</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40~150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55~150</td><td>°C</td></tr><tr><td>ESD</td><td>人体模型 ESD(注4)</td><td>1.5</td><td>kV</td></tr></table>

注 1：极限参数是指超出该范围，有可能导致器件永久性损坏。极限参数为器件应力的额定值，长期工作在极限参数条件可能会影响器件的可靠性。  
注 2：温度升高最大功耗一定会减小，这也是由T , θ ,和环境温度T 所决定的。最大允许功耗为P = (T - T )/ θ 或是极限范围给出的数字中比较低的那个值。  
注 3：1平方英寸双层PCB板，按照JEDEC 标准测试。  
注 4：人体模型，100pF 电容通过1.5kΩ电阻放电。

电气参数(注5)（无特别说明情况下， ${ \sf T } _ { \sf A } = 2 5 ^ { \circ } { \sf C } )$

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">VCC供电部分</td></tr><tr><td> $V_{CC\_ON}$ </td><td>VCC启动阈值电压</td><td>VCC上升至IC开启</td><td>3.53</td><td>3.78</td><td>4</td><td>V</td></tr><tr><td> $V_{CC\_UVLO}$ </td><td>VCC欠压保护开启电压</td><td>VCC下降至IC关闭</td><td>3.1</td><td>3.32</td><td>3.5</td><td>V</td></tr><tr><td rowspan="2"> $V_{CC\_REG}$ </td><td rowspan="2">VCC调整电压</td><td>VD供电</td><td>6.6</td><td>6.8</td><td>7.1</td><td>V</td></tr><tr><td>VOUT供电</td><td>6.83</td><td>7.1</td><td>7.35</td><td>V</td></tr><tr><td> $I_{CH}$ </td><td>VCC电容充电电流</td><td>VCC=6V,VD=14V</td><td>26</td><td>33</td><td>40</td><td>mA</td></tr><tr><td> $I_Q$ </td><td>静态工作电流</td><td>VCC=7V</td><td>190</td><td>234</td><td>270</td><td>μA</td></tr><tr><td> $I_{CC}$ </td><td>工作电流</td><td>VCC=7V, $F_{SW}=100kHz$ </td><td></td><td>2</td><td></td><td>mA</td></tr><tr><td colspan="7">控制电路</td></tr><tr><td> $V_{ON\_TH}$ </td><td>驱动开通 $V_{DS}$ 阈值电压</td><td></td><td>-100</td><td>-160</td><td>-220</td><td>mV</td></tr><tr><td> $V_{OFF\_TH}$ </td><td>自适应调整后的驱动关断 $V_{DS}$ 阈值电压</td><td></td><td></td><td></td><td>0</td><td>mV</td></tr><tr><td> $t_{Delay\_ON}$ </td><td>驱动开通延时</td><td></td><td></td><td>40</td><td></td><td>ns</td></tr><tr><td> $t_{ON\_BL}$ </td><td>开通消隐时间</td><td></td><td></td><td>700</td><td></td><td>ns</td></tr><tr><td> $t_{OFF\_MIN}$ </td><td>最小关断时间</td><td></td><td></td><td>1.8</td><td></td><td>us</td></tr><tr><td rowspan="2"> $t_{SLEW}$ </td><td rowspan="2">斜率检测时间</td><td>SLEW引脚浮空</td><td></td><td>40</td><td></td><td>ns</td></tr><tr><td>SLEW引脚接芯片地</td><td></td><td>23</td><td></td><td>ns</td></tr><tr><td> $V_{UVLO\_ON}$ </td><td>输出欠压保护阈值</td><td></td><td></td><td>2.5</td><td></td><td>V</td></tr><tr><td> $V_{UVLO\_HYS}$ </td><td>输出欠压保护迟滞</td><td></td><td></td><td>0.5</td><td></td><td>V</td></tr><tr><td colspan="7">驱动输出</td></tr><tr><td> $V_{GL}$ </td><td>输出低电平</td><td>VCC=7V,Isink=100mA</td><td></td><td></td><td>0.08</td><td>V</td></tr><tr><td> $V_{GH}$ </td><td>输出高电平</td><td>VCC=7V,Isource=100mA</td><td>6.6</td><td></td><td></td><td>V</td></tr><tr><td> $I_{SOURCE}$ </td><td>最大驱动输出电流</td><td>VCC=7V</td><td></td><td>1</td><td></td><td>A</td></tr><tr><td> $I_{SINK}$ </td><td>最大下拉电流</td><td>VCC=7V</td><td></td><td>4</td><td></td><td>A</td></tr><tr><td> $R_L$ </td><td>下拉阻抗</td><td></td><td></td><td>0.5</td><td></td><td>Ω</td></tr></table>

注 5：电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。最小值和最大值由测试保证，典型值由设计、测试或统计分析保证。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。

## 内部结构框图

![](images/98f9682f305f8e88d70990899849fac70d90c8bf9f2eb6621f6f6ec695f2f35b.jpg)  
图 3. BP62110S 内部框图

## 功能描述

BP62110S是一款用于替代反激式变换器副边整流二极管的高性能同步整流芯片。BP62110S支持DCM以及QR工作模式，适合于最大开关频率不高于200k的应用。超短的关断延时和高达4 A的驱动下拉电流，能够实现超快的关断速度，增加MOSFET导通时间，同时采用了自适应关断阈值的方式，可保证系统可靠工作并降低功耗，优化了系统效率。芯片内部使用了振铃检测电路，避免了由于自由振荡引起误开通而导致的初次级共通问题，保证芯片也能在DCM模式下可靠工作。40 ns超短开通延时缩短了体二极管的导通时间，增加了MOSFET沟道的导通时间，极大地提高了效率。（注6：以下描述到的参数均为电气参数列表中的典型值，除非特别说明是最大或最小值）

## 启动和VCC 欠压保护

系统启动时，BP62110S 通过 VD 引脚对 VCC 电容充电，充电电流为 I 。当 VCC 电压上升到启动阈值电压

V 时，芯片退出 VCC 欠压保护状态，内部控制电路开始工作，驱动同步整流MOSFET正常导通和关断。芯片工作时，所需的工作电流仍然会通过 VD 引脚提供，内部线性调整器将 VCC 稳压到 V<sub>CC\_REG</sub> 。当 VCC 电压下降到低于欠压保护阈值 $V _ { \mathsf { C C \_ U V L O } }$ 时，控制器进入欠压保护状态，驱动保持低电平，同步整流MOSFET处于关断状态，直到VCC电压再次升高到V<sub>CC\_ON</sub> 。

## 输出欠压保护

BP62110S放置在负端使用，当VOUT引脚接输出电压时，输出电压低于V 同步整流驱动关闭。这样可以避免开机或者输出短路时CCM过深，变压器去磁不够，原边电流累计过高而导致原副边MOSFET电压尖峰过高。放置在正端使用时，需将VOUT 引脚短接至VCC引脚（如图4所示）。

## 漏极电压检测

BP62110S 通过 VD 引脚检测同步 MOSFET 漏极电压达到检测电流的目的，从而驱动MOSFET导通和关闭实现同步整流。当原边开关管关断后，变压器次级续流，同步 MOSFET 的体二极管导通， $\mathsf { V } _ { \mathsf { D S } }$ 电压由正变为负，控制器驱动MOSFET开通。

## 斜率检测与驱动开通

当检测到 MOSFET 的 V 从 2 V 下降至驱动开通阈值电$V _ { \mathsf { O N \_ T H } }$ 的时间小于芯片内部设定的斜率检测时间 $\mathfrak { t } _ { \mathsf { S L E W } }$ 时，控制器驱动同步 MOSFET 导通，开通延迟时间为t<sub>Delay\_ON</sub> 。如果下降到 $V _ { \mathsf { O N \_ T H } }$ 的时间超过 t<sub>SLEW</sub>，那么驱动电路保持 MOSFET 关断，防止由于 DCM 模式下的自由振荡引起误开通导致的初次级共通问题。

在 DCM 模式下，当反激变压器去磁完成，次级电流下降到零后，变压器励磁电感和寄生电容产生自由振荡。由于初次级芯片通过漏极供电或者钳位电路的漏电流导致变压器中存储了能量，自由振荡幅度被增大而使得同步整流管漏极电压可能振荡到低于 $0 \ V _ { \circ }$ 。如果没有斜率检测电路，控制器会误开通MOSFET并维持导通状态，直到开通消隐时间 $\tan B L$ 结束。如果这段时间内原边功率开关开通，就会导致初次级共通。斜率检测电路能够有效地分辨自由振荡和初级开关关断现象，禁止控制器在自由振荡期间开通MOSFET，避免共通问题。

BP62110S 可通过 SLEW 引脚设定斜率检测时间 t<sub>SLEW，</sub>SLEW 引脚接 VS 时，t 为 23 nS; SLEW 引脚悬空时，芯片使用默认 $\mathtt { t s } \mathtt { \Gamma } \mathtt { L E W }$ 为 40 ns；当 SLEW 通过电阻 $\mathsf { R s L E W }$ 接到到VS时：

$$
t _ {S L E W} = 2 3 \mathrm{ns} + R _ {S L E W} \times 0. 3 2 \mathrm{nS/k} \Omega
$$

为了避免被判断为悬空状态，R<sub>SLEW</sub>最大允许取值为150$\mathsf { k } \Omega _ { \circ }$

## 开通消隐时间

BP62110S驱动MOSFET开通后，控制器在开通消隐时间 $\tan B L$ 内维持 MOSFET 导通，以禁止由于变压器漏感和寄生电容产生的高频振荡触发到关断阈值电压 $V _ { \mathsf { O F F \_ T H } }$ 提前关断。

## 关断阈值电压自适应调整

当BP62110S 开始工作后，会逐步调整功率管的关断阈值，提高功率管关断时机的准确性，提高可靠性，降低功耗。

## 驱动关断

在导通时间已经超过开通消隐时间 $\tan B L$ 的情况下，当$\mathsf { V } _ { \mathsf { D S } }$ 电压上升到 $V _ { \mathsf { O F F \_ T H } }$ 时，控制器立即关断 MOSFET。其最大 4 A 下拉电流，可以快速拉低门极电压，同时超低驱动内阻可以消除米勒效应引起的误开通。

## 最小关断时间

控制器一旦关断驱动，在最小关断时间 $\mathsf { t } _ { 0 \mathsf { F F \_ M I N } }$ 内将锁定关断状态。

## 典型应用

BP62110S 搭配 MOSFET 可以放置在输出正端或输出负端来取代肖特基二极管（如图4、图 5 所示），且不需要额外的辅助绕组供电。VD脚为控制器的漏极电压检测脚和内部自供电输入端。

![](images/6966344a1be97976fc0b4e681134dbf2338dd40ec1ac62bc86e06fe7e14c0cde.jpg)  
图4. SR放置在正端典型应用电路图

![](images/b4208320dcdecbcec5fe1401f06c7bcf827b4839e3fef22dfa4135bdac7a17af.jpg)  
图5.SR放置在负端典型应用电路图

## PCB Layout 指南

为保证系统可靠工作，在设计 PCB 时，需要遵循以下建议：

1) 在VCC和S 引脚之间放置一个1μF的瓷片电容，并靠近芯片 VCC 和 S 引脚，以提升芯片的抗干扰能力

2) 为了降低辐射干扰，应减小高频功率环路面积。即BP62110S、变压器次级绕组和输出滤波电容之间的环路面积尽可能小

## 封装信息

![](images/98b25a2d94b92e97b2989973d100b0998dfe89cf8ad763d3df82e5e9be61755f.jpg)

## SOT23-6 封装外形尺寸

![](images/0a34c552a42ae87fab2578cffc323b25bccfa0ab1855299ed717726a285fed15.jpg)

![](images/910961a34578a4511800b2dda32cd01d293d7973b9aa786a5f37cb6d2941c90c.jpg)

![](images/1081f2e0d59f2f554542bcd0175cc83768e1b1ac8b9f80cd511fdb1ae39436af.jpg)  
DETAIL A

<table><tr><td rowspan="2">SYMBOL</td><td colspan="3">MILLIMETER</td></tr><tr><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A</td><td>0.90</td><td>-</td><td>1.45</td></tr><tr><td>A1</td><td>0.00</td><td>-</td><td>0.15</td></tr><tr><td>A2</td><td>0.90</td><td>-</td><td>1.30</td></tr><tr><td>D</td><td>2.82</td><td>-</td><td>3.03</td></tr><tr><td>E</td><td>1.50</td><td>-</td><td>1.70</td></tr><tr><td>E1</td><td>2.60</td><td>-</td><td>3.00</td></tr><tr><td>L</td><td>0.30</td><td>-</td><td>0.60</td></tr><tr><td>b</td><td>0.28</td><td>-</td><td>0.50</td></tr><tr><td>c</td><td>0.10</td><td>-</td><td>0.23</td></tr><tr><td>e</td><td colspan="3">0.95 BSC</td></tr><tr><td>e1</td><td colspan="3">1.90 BSC</td></tr></table>

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev. 1.0</td><td>2025/09</td><td>正式发行</td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。

## 电子器件报废说明

该产品在生命周期结束后，由客户按照一般电子产品的报废流程进行处理。