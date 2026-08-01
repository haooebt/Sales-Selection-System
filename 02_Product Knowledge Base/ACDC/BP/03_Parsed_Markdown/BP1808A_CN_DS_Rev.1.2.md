## 概述

BP1808A 是一款多工作模式、宽输入/输出范围的 DC-DC LED 驱动芯片，内部集成 80V/300mΩ 功率开关。BP1808A 可以工作于升压、降压或升降压模式，其输入/输出电压范围可达 3-80VDC。

BP1808A 可通过外置采样电阻调节输出电流的大小, 其输出电流的精度可达+/-3%。BP1808A 可通过 DIM 引脚进行 PWM 和模拟调光。

BP1808A 采用 420kHz 固定开关频率，可使用小尺寸的电感和输入/输出电容。电流模式控制使其拥有出色的响应速度，并使环路补偿更为简单。BP1808A 内置驱动电路优化了 SW 上升与下降时间，更容易获得较好的 EMI 效果。

BP1808A 具有多重保护功能，包括过流保护、输入欠压保护、输出过压保护、芯片过热调节等。

BP1808A 采用散热增强的 ESOP-8 封装。

![](images/0d83401b00424125377e9a0036eddb41d756ac7d590666f8854f2406a71e3cd1.jpg)

## 特点

■ 3V 到 80VDC 输入/输出范围

■ 支持升压、降压和升降压模式

■ 内置 80V/300mΩ 功率 MOSFET

■ +/-3%输出电流精度

■ 支持 PWM 调光及模拟调光

■ 420kHz 固定工作频率

内置软启动

逐周期的峰值电流限制

输入欠压保护

\- 输出过压保护

■ 过温调节功能

■ 散热增强的 ESOP-8 封装

## 应用领域

■ MR16 LED 射灯

■ 智能调光 LED 灯

■ 可调光 LED 灯

■ 太阳能 LED 灯

## 典型应用

![](images/23163b4f1a1bcb702bb53aa8756b140eb15b8a9768ae9385c8e4a00514047219.jpg)  
图 1a BP1808A 典型应用电路(升压)

![](images/872685d40860562d8c2e4c26257be75b4d2266a4ff2b97a8f584c397ebe98894.jpg)  
图 1b BP1808A 典型应用电路(降压)

![](images/478e26446c32b42d86fa1153be4f4a2590431602399c2bb8e3a05e7aa09c07b6.jpg)  
图 1c BP1808A 典型应用电路(升降压)

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP1808A</td><td>ESOP-8</td><td>卷盘4,000/盘</td><td>BP1808AXXXXXYZXYWWZ</td></tr></table>

## 管脚封装

![](images/e23852d06f43aba7ef605b427e5b5448f9d65c48f441d6144cf310cbe0e332e3.jpg)  
图 2 管脚封装图

BP1808A: 产品型号

XXXXXY: 批次

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>OVP</td><td>过压保护端,连接至输出脚和地之间的分压电阻。</td></tr><tr><td>2</td><td>COMP</td><td>环路补偿端,连接补偿电阻(可选)串联补偿电容到地。</td></tr><tr><td>3</td><td>DIM</td><td>调光输入端,不调光时悬空。</td></tr><tr><td>4</td><td>GND</td><td>芯片地。</td></tr><tr><td>5</td><td>SW</td><td>开关端,连接内部 MOSFET 漏极及外部整流二极管阳极,保持 PCB 板上连线尽可能短。</td></tr><tr><td>6</td><td>VDD</td><td>芯片内部电源输出端,连接 1μF 旁路电容到地。</td></tr><tr><td>7</td><td>VOUT</td><td>输出电压连接点,并提供芯片电源</td></tr><tr><td>8</td><td>CS</td><td>LED 电流采样端,连接采样电阻到 VOUT 端。</td></tr><tr><td>9</td><td>散热焊盘</td><td>内部与芯片衬底连接,应用中可接地。</td></tr></table>

## 极限参数(注1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td>SW</td><td>开关管漏极峰值电压</td><td>-0.3~80</td><td>V</td></tr><tr><td>VOUT</td><td>输出电压采样端电压</td><td>-0.3~80</td><td>V</td></tr><tr><td>CS</td><td>LED电流采样端电压</td><td>-0.3~80</td><td>V</td></tr><tr><td>OVP</td><td>过压保护端电压</td><td>-0.3~80</td><td>V</td></tr><tr><td>VDD</td><td>芯片内部电源输出电压</td><td>-0.3~6</td><td>V</td></tr><tr><td>COMP</td><td>环路补偿端电压</td><td>-0.3~6</td><td>V</td></tr><tr><td>DIM</td><td>调光端电压</td><td>-0.3~6</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注2)</td><td>1</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>结到环境的热阻(注3)</td><td>60</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40~150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55~150</td><td>°C</td></tr></table>

注1：最大极限值是指超出该工作范围，芯片有可能损坏。推荐工作范围是指在该范围内，器件功能正常，但并不完全保证满足个别性能指标。电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。

注2：温度升高最大功耗一定会减小，这也是由 $T_{JMAX}, \theta_{JA}$ 和环境温度 $T_A$ 所决定的。最大允许功耗为 $P_{DMAX} = (T_{JMAX} - T_A) / \theta_{JA}$ 或是极限范围给出的数字中比较低的那个值。

注3：1平方英寸双层PCB板，按照JEDEC标准测试。

电气参数(注4)（无特别说明情况下， $T_{A}=25^{\circ}C$ ）

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">电源电压</td></tr><tr><td> $V_{IN}$ </td><td>输入电压</td><td></td><td>3</td><td></td><td>80</td><td>V</td></tr><tr><td> $V_{DD_ON}$ </td><td> $V_{DD}$ 启动电压</td><td> $V_{DD}$ 上升</td><td>2.2</td><td>2.5</td><td>2.6</td><td>V</td></tr><tr><td> $V_{DD\_UVLO,HYS}$ </td><td> $V_{DD}$ 欠压保护迟滞电压</td><td> $V_{DD}$ 下降</td><td>194</td><td>200</td><td>206</td><td>mV</td></tr><tr><td> $V_{DD\_Reg}$ </td><td>芯片内部电源输出电压</td><td> $V_{OUT}=6V$ </td><td>4.5</td><td>4.9</td><td>5.5</td><td>V</td></tr><tr><td colspan="7">工作电流及频率</td></tr><tr><td> $I_{SD}$ </td><td>静态电流(关机)</td><td> $V_{DIM}=0V$ </td><td>55</td><td>80</td><td>105</td><td>μA</td></tr><tr><td> $I_Q$ </td><td>静态电流(无开关动作)</td><td> $V_{COMP}=0V$ </td><td>160</td><td>200</td><td>240</td><td>μA</td></tr><tr><td> $f_{SW}$ </td><td>开关频率</td><td></td><td>340</td><td>420</td><td>500</td><td>kHz</td></tr><tr><td> $D_{max}$ </td><td>最大占空比</td><td> $V_{OUT}-V_{CS}=0.1V$ </td><td>85</td><td>90</td><td>100</td><td>%</td></tr><tr><td colspan="7">过压保护</td></tr><tr><td> $V_{OVP}$ </td><td>过压保护电压</td><td></td><td>1</td><td>1.2</td><td>1.4</td><td>V</td></tr><tr><td colspan="7">使能/调光</td></tr><tr><td> $V_{EN}$ </td><td>使能电压</td><td>DIM上升</td><td>0.33</td><td>0.4</td><td>0.45</td><td>V</td></tr><tr><td> $V_{EN\_HYS}$ </td><td>使能迟滞</td><td></td><td></td><td>270</td><td></td><td>mV</td></tr><tr><td> $I_{DIM}$ </td><td>DIM端上拉电流</td><td>DIM=0V</td><td></td><td>1.3</td><td></td><td>μA</td></tr><tr><td> $V_{DIM\_LOW}$ </td><td>DIM模拟调光下限电压</td><td></td><td>0.35</td><td>0.55</td><td>0.85</td><td>V</td></tr><tr><td> $V_{DIM\_HIGH}$ </td><td>DIM模拟调光上限电压</td><td></td><td>1.4</td><td>1.75</td><td>2.0</td><td>V</td></tr><tr><td> $F_{DIM}$ </td><td>PWM调光频率范围</td><td></td><td>0.1</td><td></td><td>5</td><td>kHz</td></tr><tr><td> $T_{ShutDown}$ </td><td>DIM关机延时</td><td>DIM为低</td><td></td><td>15</td><td></td><td>ms</td></tr><tr><td colspan="7">电流采样</td></tr><tr><td> $V_{OUT}-V_{CS}$ </td><td>采样电压</td><td></td><td>194</td><td>200</td><td>206</td><td>mV</td></tr><tr><td colspan="7">功率管</td></tr><tr><td>Rdson</td><td>功率管导通电阻</td><td> $I_D=200mA$ </td><td>200</td><td>300</td><td>500</td><td>mΩ</td></tr><tr><td> $I_{lim}$ </td><td>限流保护</td><td></td><td>2</td><td>3</td><td>4</td><td>A</td></tr><tr><td> $BV_{DSS}$ </td><td>功率管的击穿电压</td><td> $V_{GS}=0V/I_{DS}=10μA$ </td><td>80</td><td></td><td></td><td>V</td></tr><tr><td colspan="7">过热调节</td></tr><tr><td> $T_{Thermal}$ </td><td>过热调节起始温度</td><td></td><td></td><td>140</td><td></td><td>°C</td></tr></table>

注4：规格书的最小、最大规范范围由测试保证，典型值由设计、测试或统计分析保证。

## 内部结构框图

![](images/6c351bc8d8386b2444b219602c84f50fecff157167502feb9671f31a86afb643.jpg)  
图 3 BP1808A 内部框图

## 功能描述

BP1808A 是一款多工作模式、宽输入/输出范围的 DC-DC LED 驱动芯片，可以工作于升压、降压和升降压模式。

## 启动与关机

BP1808A 内置软启动功能，当 COMP 电压上升至 1V 时，软启动结束，内置 MOSFET 开始开关动作。

当COMP电容值小于8nF时，COMP电压以最大斜率1V/ms上升，软启动时间为1ms；若需要更长的软启动时间，可适当加大COMP端的电容，当COMP电容大于8nF时，软启动充电电流以最大值 $8\mu A$ 给COMP电容充电，直到COMP电压上升至1V，此时的软启动时间为 $t_{ss}$ ：

$$
t _ {s s} = \frac {1 V * C _ {C O M P}}{8 u A}
$$

![](images/51a27d5f9c7e25100cb918bec3a81ebb8c4363bdbf8fc7c9eb4a9c68a221f90f.jpg)  
图 4 软启动时间与 COMP 电容关系曲线

当 DIM 端电压持续小于 0.2V 超过 15ms 时，BP1808A 进入关机状态。在此状态下静态电流减小至 $80\mu A$ ，COMP 电容被放电至零。

## LED 电流设置

LED 电流可通过连接在 CS 端和 VOUT 端之间的外部采样电阻设置。

该电阻值可通过下式计算：

$$
\mathrm{R} _ {C S} = \frac {0 . 2}{I _ {L E D}}
$$

$I_{LED}$ 为 LED 的电流平均值。

## 模拟和 PWM 调光

BP1808A 支持模拟和 PWM 调光。当 DIM 电压小于 0.2V 时，芯片处于关机状态。在模拟调光模式下，当 DIM 电压在 0.55V-1.75V 范围内变化时，LED 电流将在 0%-100% 范围内线性变化。当 DIM 电压大于 1.75V 时，LED 电流为最大值。

在 PWM 调光模式下，DIM 端高电平须大于 1.75V。在 DIM 端施加 PWM 信号，LED 平均电流将根据 PWM 占空比从 0%-100% 变化。

## 过压保护

在升压和升/降压型应用中，LED 开路将触发过压保护。过压保护点可通过外部分压电阻设置，OVP 比较器参考电压为 1.2V，迟滞 100mV。建议将过压保护电压设置比正常 VOUT 电压高 30%以上。

## 过温调节功能

BP1808A 具有过热调节功能，在驱动电源过热时逐渐减小

## 升压型、降压型、升降压型 LED 驱动芯片

输出电流，从而控制输出功率和温升，使电源温度保持在设定值，以提高系统的可靠性。芯片内部设定过热调节温度点为 $140^{\circ}C$ 。

## 电容选择

输入电容典型值为 $10\mu F$ ，输出电容典型值为 $1\mu F$ ，若需进一步减小输入/输出纹波，可选用更大的电容。在开关频率下，输入/输出电容的容抗需尽可能的小，建议使用 X5R 或 X7R 的陶瓷电容。 $C_{COMP}$ 被用于环路补偿和软启动，推荐使用 1nF 的电容。

## 电感选择

建议电感范围为 $10\mu H-47\mu H$ ，建议选取电感饱和电流超过正常工作时电感电流峰值 30%-40% 的电感。选择材质为铁硅铝的封闭式磁环电感对改进 EMI 有很大帮助。

## 二极管选择

由于BP1808A开关频率较高，为了提高效率，建议使用具有快恢复时间和低导通压降的肖特基二极管作为整流二极管。肖特基二极管的平均电流等级需大于平均输出电流。二极管反向击穿电压需大于输出电压（升压电路）。

## PCB Layout 指南

在设计 BP1808A PCB 时, 流过大电流的走线一定要短且粗, 回路中最好不插入其他接地线。尽量缩短电流采样电阻、电感、二极管、输入/输出电容到芯片的连线。使 SW 线尽可能远离电流采样电阻。其它引脚地单独连接到输入电容地（包括芯片散热焊盘单独接地）。连接 SW、二极管、电感的节点敷铜面积不要太大。

COMMON DIMENSIONS
(UNITS OF MEASURE=MILLIMETER)  
![](images/b14d8df8b15bdaae933dfde699ad7ff5faf1774248fceebbfb24f7c3463e9c23.jpg)

## 封装信息

![](images/2e96edbfbbf00b4914ef17dd3e658af8bda77ae91ee6075ea069fab6918aed79.jpg)  
ESOP-8 封装外形尺寸

![](images/3b2db79e10ba72f8082341fd01792765f626780dc146113739d0e6b48ffbea0a.jpg)  
SECTION B-B

![](images/3db8e617445db7cddd5453cabd67dd4c40e6e1752c1280cd978646dd49826603.jpg)

<table><tr><td>SYMBOL</td><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A</td><td>1.30</td><td>1.50</td><td>1.70</td></tr><tr><td>A1</td><td>0</td><td>-</td><td>0.15</td></tr><tr><td>A2</td><td>1.35</td><td>1.40</td><td>1.50</td></tr><tr><td>A3</td><td>0.50</td><td>0.60</td><td>0.70</td></tr><tr><td>b</td><td>0.38</td><td>-</td><td>0.47</td></tr><tr><td>b1</td><td>0.37</td><td>0.40</td><td>0.43</td></tr><tr><td>c</td><td>0.17</td><td>-</td><td>0.25</td></tr><tr><td>c1</td><td>0.17</td><td>0.20</td><td>0.23</td></tr><tr><td>D</td><td>4.70</td><td>4.90</td><td>5.10</td></tr><tr><td>D1</td><td>1.98</td><td>2.13</td><td>2.28</td></tr><tr><td>E</td><td>5.80</td><td>6.00</td><td>6.20</td></tr><tr><td>E1</td><td>3.80</td><td>3.90</td><td>4.00</td></tr><tr><td>E2</td><td>1.98</td><td>2.13</td><td>2.28</td></tr><tr><td>e</td><td>1.17</td><td>1.27</td><td>1.37</td></tr><tr><td>L</td><td>0.45</td><td>0.60</td><td>0.80</td></tr><tr><td>L1</td><td colspan="3">1.04REF</td></tr><tr><td>L2</td><td colspan="3">0.25BSC</td></tr><tr><td>R</td><td>0.07</td><td>-</td><td>-</td></tr><tr><td>R1</td><td>0.07</td><td>-</td><td>-</td></tr><tr><td>h</td><td>0.30</td><td>0.40</td><td>0.50</td></tr><tr><td> $\Theta$ </td><td>0°</td><td>-</td><td>8°</td></tr><tr><td> $\Theta 1$ </td><td>15°</td><td>17°</td><td>19°</td></tr><tr><td> $\Theta 2$ </td><td>11°</td><td>13°</td><td>15°</td></tr></table>

## 升压型、降压型、升降压型 LED 驱动芯片

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>V1.0</td><td>2017/08</td><td>新建</td></tr><tr><td>V1.1</td><td>2018/05</td><td>文末增加重要声明</td></tr><tr><td>V1.2</td><td>2022/01</td><td>改用新模板;管脚描述增加散热焊盘电气特性描述;更新内部框图;修改电气参数表格;PWM调光频率范围上限从1kHz改到5kHz;更新POD图纸</td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。