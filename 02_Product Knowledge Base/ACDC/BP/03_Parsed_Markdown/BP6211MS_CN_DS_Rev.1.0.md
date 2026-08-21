## BP6211MS 超快关断 CCM/DCM同步整流驱动开关

## 概述

BP6211MS是一款高集成度、高性能、自供电的同步整流控制芯片， 内置功率 MOSFET，支持 CCM、DCM 和 QR 工作模式，适用于高效率、高功率密度反激变换器应用。

BP6211MS采用预关断工作模式，驱动电压根据功率MOSFET压降自适应调整，加上超短的关断延时和高达 4 A 的驱动下拉电流，能够实现超快的关断速度，使得系统能可靠工作于CCM 模式。

BP6211MS 芯片内部使用了振铃检测电路，避免了在 DCM 模式下由于自由振荡引起误开通而导致的初次级共通问题。同时内置前沿消隐时间，可以防止寄生振荡误触发MOSFET提前关断，从而保证同步整流稳定工作。超短的开通延时可以增加MOSFET导通时间以获得尽可能高的效率。

BP6211MS采用功率管漏极引脚自供电的⽅法，⽆需外部供电，可灵活地选择放置在输出正端或负端。放置于正端时，不需要额外的供电绕组，外围电路⾮常简洁。同时，由于自供电，可以实现宽范围输出电压，输出电压可以低至 0 V，⾮常适合充电器应用。

BP6211MS 采用 SOP-8 封装,满足 MSL-3 潮敏等级。

![](images/81d19ea74d8ff6db5ce277d18ed469b6c443d6340ac97c869ca4879e62ef2240.jpg)  
SOP-8 封装

## 特点

 集成 100 V 同步整流 MOSFET

 支持 CCM/DCM/QR 工作模式

 自适应驱动电压，超快关断速度，防止CCM模式初次级共通

 内置振铃检测，防止DCM 误开通

可用于正端和负端整流

 芯片自供电，正端整流⽆需辅助供电绕组

 支持宽输出电压范围，可低至0V输出

 最大4A驱动下拉电流，超低驱动内阻可避免密勒效应引起误开通

 超短开通延时，增加MOSFET导通时间，优化了效率

 低待机功耗，满足六级能效要求

 集成度高，外围电路简洁

## 应用领域

 QC/USB-PD/可编程 AC-DC 充电器

 高效率电源适配器

 高效率、高功率密度反激变换器

## 典型应用

![](images/53a2ffe14b76af08c7e5ee79654e74b58fa960ca15102dca1c5ad82d649ec506.jpg)  
图 1. BP6211MS 典型应用电路

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP6211MS</td><td>SOP-8</td><td>卷盘4000颗/盘</td><td>BP6211MXXXXYYZZZZWWS</td></tr></table>

## 管脚封装

![](images/bcd1f9a2c11640a92523d538f14760b1ffef25ee103863dde6711c129efc9936.jpg)  
图 2. SOP-8 管脚封装图

BP6211M：产品型号XXXXXYY: 批次号ZZZZ: 内部标示WW：周号

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>VCC</td><td>芯片供电引脚,内部自供电输出端,推荐使用 1 μF 瓷片电容到芯片地</td></tr><tr><td>2</td><td>VD</td><td>功率 MOSFET 漏极电压检测引脚,同时也是内部自供电输入端</td></tr><tr><td>3/4</td><td>S</td><td>芯片同步整流管源极,芯片地</td></tr><tr><td>5/6/7/8</td><td>D</td><td>芯片内部同步整流管漏极</td></tr></table>

## 极限参数(注 1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td>VCC</td><td> $V_{CC}$ 电压</td><td>-0.3~9.9</td><td>V</td></tr><tr><td> $V_D$ </td><td>同步整流管漏极到源极耐压</td><td>-0.7~100</td><td>V</td></tr><tr><td> $V_{VD}$ </td><td>VD引脚电压范围</td><td>-1~150</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注2)</td><td>0.97</td><td>W</td></tr><tr><td> $θ_{JA}$ </td><td>结到环境的热阻(注3)</td><td>145</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40~150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55~150</td><td>°C</td></tr></table>

注 1：极限参数是指超出该范围，有可能导致器件永久性损坏。极限参数为器件应⼒的额定值，⻓期工作在极限参数条件可能会影响器件的可靠性。  
注 2：温度升高最大功耗一定会减小，这也是由 ${ \mathsf { T } } { \mathsf { I M A X } } ,$ θ<sub>JA</sub>,和环境温度 $\mathsf { T } _ { \mathsf { A } }$ 所决定的。最大允许功耗为 $\mathsf { P } _ { \mathsf { D M A X } } = ( \mathsf { T } _ { \mathsf { J M A X } } - \mathsf { T } _ { \mathsf { A } } ) /$ $\theta _ { \ J A }$ 或是极限范围给出的数字中比较低的那个值。

注 3：1平⽅英寸双层PCB板，按照JEDEC 标准测试。

电气参数(注 4)（⽆特别说明情况下， ${ \mathsf { V C C } } = 7 { \mathsf { V } }$ ${ \sf T } _ { \sf A } = 2 5 ^ { \circ } { \sf C } )$

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">VCC供电部分</td></tr><tr><td> $V_{CC\_ON}$ </td><td>VCC启动阈值电压</td><td>VCC上升至IC开启</td><td>3.47</td><td>3.67</td><td>3.87</td><td>V</td></tr><tr><td> $V_{CC\_UVLO}$ </td><td>VCC欠压保护开启电压</td><td>VCC下降至IC关闭</td><td>3.06</td><td>3.26</td><td>3.46</td><td>V</td></tr><tr><td> $V_{CC\_REG}$ </td><td>VCC调整电压</td><td> $V_{VD}=14V$ </td><td>6.73</td><td>7.03</td><td>7.33</td><td>V</td></tr><tr><td> $I_{CH}$ </td><td>VCC电容充电电流</td><td>VCC=6V, $V_{VD}=14V$ </td><td>28</td><td>32</td><td>36</td><td>mA</td></tr><tr><td> $I_Q$ </td><td>静态工作电流</td><td>VCC=7V</td><td>220</td><td>280</td><td>340</td><td>μA</td></tr><tr><td> $I_{CC}$ </td><td>工作电流</td><td>VCC=7V, $F_{SW}=100kHz$ </td><td></td><td>2</td><td></td><td>mA</td></tr><tr><td colspan="7">控制电路</td></tr><tr><td> $V_{DS\_REG}$ </td><td>MOSFET  $V_{DS}$ 电压调整值</td><td></td><td>-50</td><td>-40</td><td>-30</td><td>mV</td></tr><tr><td> $V_{ON\_TH}$ </td><td>驱动开通 $V_{DS}$ 阈值电压</td><td></td><td>-180</td><td>-140</td><td>-80</td><td>mV</td></tr><tr><td> $t_{SLEW}$ </td><td>斜率检测时间</td><td></td><td></td><td>22</td><td></td><td>ns</td></tr><tr><td> $V_{OFF\_TH}$ </td><td>驱动关断 $V_{DS}$ 阈值电压</td><td></td><td></td><td>0</td><td></td><td>mV</td></tr><tr><td> $t_{Delay\_ON}$ </td><td>驱动开通延时</td><td></td><td></td><td>30</td><td></td><td>ns</td></tr><tr><td> $t_{Delay\_OFF}$ </td><td>关断延时</td><td></td><td></td><td>10</td><td></td><td>ns</td></tr><tr><td> $t_{ON\_BL}$ </td><td>开通消隐时间</td><td></td><td></td><td>950</td><td></td><td>ns</td></tr><tr><td> $V_{OFF\_BL}$ </td><td>消隐时间内关断 $V_{DS}$ 阈值</td><td></td><td></td><td>2</td><td></td><td>V</td></tr><tr><td> $t_{OFF\_MIN}$ </td><td>最小关断时间</td><td></td><td></td><td>1.5</td><td></td><td>us</td></tr><tr><td colspan="7">功率管</td></tr><tr><td> $R_{DS\_ON}$ </td><td>功率管导通阻抗</td><td> $V_{GS}=10V, I_D=1A$ </td><td></td><td>10</td><td>11.5</td><td>mΩ</td></tr><tr><td> $BV_{DSS}$ </td><td>功率管击穿电压</td><td> $V_{GS}=0V, I_D=250μA$ </td><td>100</td><td></td><td></td><td>V</td></tr><tr><td> $I_D$ </td><td>连续漏极电流</td><td></td><td></td><td>50</td><td></td><td>A</td></tr><tr><td> $I_{DSS}$ </td><td>功率管关断漏电流</td><td> $V_{DS}=100V, V_{GS}=0V$ </td><td></td><td></td><td>1</td><td>μA</td></tr></table>

注 4：电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。最小值和最大值由测试保证，典型值由设计、测试或统计分析保证。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。

## 内部结构框图

![](images/a9332d80f8395c4d9dcde529cdbf3683315945b6025f313bd1b02e040cccd6b3.jpg)  
图 3. BP6211MS 内部框图

## 功能描述

BP6211MS是一款用于替代反激式变换器副边整流二极管的高性能同步整流芯片。内置低导通阻抗功率MOSFET，降低了副边整流管的压降，以提高系统效率。BP6211MS 支持 CCM、DCM 以及 QR 工作模式，采用预关断技术，驱动电压随MOSFET漏极到源极的电压升高而降低。同时超短的关断延时和高达 4 A 的驱动下拉电流，能够实现超快的关断速度，使得系统能可靠工作于 CCM 模式。芯片内部使用了振铃检测电路，避免了由于自由振荡引起误开通而导致的初次级共通问题，保证芯片也能在DCM模式下可靠工作。30 ns超短开通延时减短了体二极管的导通时间，增加了MOSFET沟道的导通时间，极大地提高了效率。（注 5：以下描述到的参数均为电气参数列表中的典型值，除⾮特别说明是最大或最小值）

## 启动和VCC 欠压保护

系统启动时，BP6211MS 通过 VD 引脚对 VCC 电容充电，充电电流为 I<sub>CH</sub> 。当 VCC 电压上升到启动阈值电压V<sub>CC\_ON</sub>时，芯片退出 VCC 欠压保护状态，内部控制电路开始工作，驱动同步整流MOSFET正常导通和关断。芯片工作时，所需的工作电流仍然会通过 VD 引脚提供，内部线性调整器将 VCC 稳压到 V 。当 VCC 电压下降到低于欠压保护阈值 V 时，控制器进⼊欠压保护状态，驱动保持低电平，同步整流MOSFET处于关断状态，直到VCC电压再次升高到V<sub>CC\_ON</sub>。

## 漏极电压检测

BP6211MS 通过 VD 引脚检测同步 MOSFET 漏极电压达到检测电流的目的，从而驱动MOSFET导通和关闭实现同步整流。当原边开关管关断后，变压器次级续流，同步 MOSFET 的体二极管导通，V<sub>DS</sub>电压由正变为负，控制器驱动MOSFET开通。由于体二极管导通时有比较大的正向压降，导致 VD 引脚存在负电流，过大的负电流可能会导致控制电路的地不稳定使得驱动提前关断，降低效率。

## 斜率检测与驱动开通

当 VD 引脚检测到 MOSFET 的 V<sub>DS</sub>从 2 V 下降至驱动开通阈值电压 $\mathsf { V o N \_ T H }$ 的时间小于芯片内部设定的斜率检测时间 t 时，控制器驱动同步 MOSFET 导通，开通延迟时间为T<sub>DELAY\_ON</sub>。如果下降到 $V _ { \mathsf { O N \_ T H } }$ 的时间超过t<sub>SLEW</sub>，那么驱动电路保持 MOSFET 关断，防止由于 DCM 模式下的自由振荡引起误开通导致的初次级共通问题。

在 DCM 模式下，当反激变压器去磁完成，次级电流下降到零后，变压器励磁电感和寄生电容产生自由振荡。由于初次级芯片通过漏极供电或者钳位电路的漏电流导致变压器中存储了能量，自由振荡幅度被增大而使得同步整流管漏极电压可能振荡到低于 $0 \ V _ { \circ }$ 。如果没有斜率检测电路，控制器会误开通MOSFET并维持导通状态，直到开通消隐时间 $\tan B L$ 结束。如果这段时间内原边功率开关开通，就会导致初次级共通。斜率检测电路能够有效地分辨自由振荡和初级开关关断现象，禁止控制器在自由振荡期间开通MOSFET，避免共通问题。

## 开通消隐时间

BP6211MS 驱动 MOSFET 开通后，控制器在开通消隐时间 t<sub>ON\_BL</sub>内维持 MOSFET 导通，以禁止由于变压器漏感和寄生电容产生的高频振荡触发到关断阈值电压$\mathsf { V o F F \_ T H }$ 提前关断。但是如果在消隐时间内 $\mathsf { V } _ { \mathsf { D S } }$ 向上穿过消隐关断阈值 $V _ { O F F \_ B L }$ ，则控制器立即关断MOSFET。

## 自适应驱动电压

BP6211MS 采用预关断技术，驱动电压随 MOSFET 漏极到源极的电压差自适应调整。在一个开关周期内，当次级电流下降， $\mathsf { V } _ { \mathsf { D S } }$ 电压高于调整值 $V _ { D S \_ R E G }$ 时，BP6211MS 降低驱动电压，增加 MOSFET 的导通内阻，使 $\mathsf { V } _ { \mathsf { D S } }$ 电压维持到 $V _ { D S \_ R E G }$ 直到通过MOSFET的电流下降到零。这样做的好处是在MOSFET关断时，⻔极电压很低，可以实现较快的关断速度。在 CCM 模式下这个功能显得尤其重要，较快的关断速度可以减小次级的反向电流，从而降低同步整流管的电压尖峰。

## 驱动关断

在导通时间已经超过开通消隐时间 $\tan B L$ 的情况下，当$\mathsf { V } _ { \mathsf { D S } }$ 电压上升到 $\mathsf { V o F F \_ T H }$ 时，控制器立即关断 MOSFET。其最大 4 A 下拉电流，可以快速拉低⻔极电压，同时超低驱动内阻可以消除密勒效应引起的误开通。

## 最小关断时间

控制器一旦关断驱动，在最小关断时间 $\mathsf { t o F F \_ M I N }$ 内将锁定关断状态。

## 典型应用

BP6211MS可以放置在输出正端或负端来取代次级整流二极管（如图 4、5 所示），且不需要额外的辅助绕组供电。VD 引脚为控制器的漏极电压检测脚和内部自供电输⼊端。

![](images/8de2662795a0c558e9188aa9cec5c9e54e6dd4225e21ceea3304bb1c2f4a3486.jpg)

图4.正端整流应用电路  
![](images/bf8340f0178c2be647bfb8d18118478daf6d31466a11bef8be596f2d046517e5.jpg)  
图5.负端整流应用电路

## PCB Layout 指南

为保证系统可靠工作，在设计 PCB 时，需要遵循以下建议：

1) BP6211MS 的 S 和 D 引脚做覆铜散热。芯片的 D脚（MOSFET 漏极）能很好地起到散热作用，是器件散热的主要途径。但是由于漏极属于 EMI 动点，在满足散热的条件下铺铜⾯积应尽量小。

2) 在 VCC 和 S 引脚之间放置一个 1 μF 的 VCC 瓷片电容，并靠近芯片，以提升芯片的抗⼲扰能⼒。

3) 为了降低辐射⼲扰，应减小高频功率环路⾯积。BP6211MS、变压器次级绕组和输出滤波电容之间的环路⾯积尽可能小。

4) BP6211MS 的 VD 引脚连接 D 引脚， 该电阻应该靠近VD引脚端。一般而言，电阻与D引脚采用单点连接，连接位置为 D 引脚的焊盘。以避免引⼊PCB 走线上的寄生电感。引⼊ PCB 寄生电感后，由于电流斜率为负，寄生电感上的电压降⽅向与MOSFET 压降相反。VD 引脚实际检测到的电压是在MOSFET的 $\mathsf { V } _ { \mathsf { D S } }$ 上叠加了一个正的直流偏置（如图6）。因此，自适应驱动电压偏低，MOSFET损耗增加，降低了系统效率。

![](images/fcdda2e1554fa1eb695fe6371e102fcda1388f1ec18d22eb1512a10ae0cc14a0.jpg)  
图6.MOSFET导通时漏极PCB 寄生电感的电压

5) 但是引⼊适量的寄生电感，有利于 CCM 模式下快速关断，减小反向电流，从而降低同步整流管的电压尖峰。如图 7 所示，在 CCM 模式当原边功率管开通时，次级电流迅速减小，寄生电感上的感应电压增加，VD 对地电压变为正电压，控制器将快速关断 MOSFET，使反向电流尽可能减小。因此，必要时可以尝试将 VD 与漏极连接点放置在变压器引脚端，达到降低漏极电压尖峰的目的。

![](images/c4a047d1f135842e4bf3c973b68e51d10e7fb8778760de5974a668a2eac36211.jpg)  
图7.CCM模式下寄生电感帮助快速关断

## 封装信息

![](images/5d5897a5210890df7cc277793af3f6100a134751d6eb1148f66fb57c9b8b5846.jpg)  
SOP-8封装外形尺寸

![](images/998362450441d594dd805a4c8f7117227665035e9a7691d4cf75ccc0cba8f733.jpg)

![](images/1d25511510a631592756322f6647a2732e38847ffe1cfd627e94328e101d117e.jpg)

<table><tr><td rowspan="2">SYMBOL</td><td colspan="3">MILLIMETER</td></tr><tr><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A</td><td>1.30</td><td>—</td><td>1.80</td></tr><tr><td>A1</td><td>0.05</td><td>—</td><td>0.25</td></tr><tr><td>A2</td><td>1.25</td><td>1.40</td><td>1.65</td></tr><tr><td>b</td><td>0.33</td><td>—</td><td>0.51</td></tr><tr><td>c</td><td>0.17</td><td>—</td><td>0.25</td></tr><tr><td>D</td><td>4.70</td><td>4.90</td><td>5.10</td></tr><tr><td>E</td><td>5.80</td><td>6.00</td><td>6.30</td></tr><tr><td>E1</td><td>3.70</td><td>3.90</td><td>4.10</td></tr><tr><td>e</td><td colspan="3">1.27BSC</td></tr><tr><td>L</td><td>0.40</td><td>—</td><td>1.00</td></tr></table>

![](images/b255c4e09db0112dda584588722cc377c5f52b3c1684167bbe8e00e7413d512c.jpg)  
SECTION B-B

版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev. 1.0</td><td>2025/05</td><td>正式发行</td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>

## 免责声明

晶丰明源尽⼒确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三⽅所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三⼈知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本⾝及其使用有关的偶然或必然损失承担任何责任。

## 电子器件报废说明

该产品在生命周期结束后，由客⼾按照一般电⼦产品的报废流程进⾏处理。