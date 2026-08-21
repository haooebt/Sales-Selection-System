## BP3529B低功耗 PSR 隔离恒压恒流控制芯片

## 概述

BP3529B 是一款原边控制低功耗恒压恒流控制芯片。重载下芯片工作在电感电流临界连续模式，轻载下芯片工作在电感电流断续导通模式。适用于单级单压或两级全压的隔离电源。

BP3529B芯片集成⾼压启动和供电电路，启动后从辅助绕组给VCC 供电，全程谷底开通，能有效降低系统待机功耗，提⾼效率和动态性能，并减小系统工作在重载时的噪声。

BP3529B 具有良好的动态响应速度，启动时输出电压上升快，负载快速切换输出电压过冲或跌落少。

BP3529B 具有多重保护功能，包括输出开路/短路保护，芯片供电欠压/过压保护，CS 开路保护，副边⼆极管短路保护，逐周期限流，过温保护等。

BP3529B 采用 SOP-8 封装。

![](images/55face750986ad2d0c780d09b57bba43ac4efa4332345ce23551dc97eb0a040f.jpg)  
SOP-8 封装

## 特点

 低待机功耗

 接灯带负载斩波调光无闪烁、低噪声

 原边电流关机过冲小

 集成⾼压启动和供电电路

 PSR 隔离系统恒压恒流输出

 准谐振多模式控制

 ±3%输出电压精度

 ±5%输出电流精度

 线电压补偿

 启动后输出电压上升时间短

 保护功能

过温保护

FB 开路保护

输出短路保护

芯片供电欠压/过压保护

CS 开路保护、逐周期限流

副边电感和副边⼆极管短路保护

## 应用领域

 适配器电源

 LED 驱动电源

## 典型应用

![](images/64e8f416e8ff651b14f214388ddefcc9aeb92bcb21ee7e616f7dc6f555dfca85.jpg)  
图 1. BP3529B 典型应用电路  
注：该线路及参数仅供参考，实际应用电路和参数请通过试验充分验证。

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP3529B</td><td>SOP-8</td><td>卷盘4,000颗/盘</td><td>BP3529XXXXXYXYYWWB</td></tr></table>

## 管脚封装

![](images/89043bfbdb61be2b673e26c64a54b50d7b4074916ab316350eda46b193288088.jpg)  
图 2. SOP-8 管脚封装图

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>VCC</td><td>芯片电源,必须就近接旁路电容</td></tr><tr><td>2</td><td>COMP</td><td>环路补偿脚</td></tr><tr><td>3</td><td>FB</td><td>退磁检测及反馈电压输入端脚</td></tr><tr><td>4</td><td>GND</td><td>芯片地</td></tr><tr><td>5</td><td>CS</td><td>电流采样输入端,电流采样电阻接 CS 引脚和地之间</td></tr><tr><td>6</td><td>GATE</td><td>外部功率 MOS 管栅级驱动</td></tr><tr><td>7</td><td>NC</td><td>无连接</td></tr><tr><td>8</td><td>HV</td><td>高压输入端</td></tr></table>

## 极限参数(注 1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td> $V_{HV}$ </td><td>HV端口电压范围</td><td>-0.3~750</td><td>V</td></tr><tr><td> $V_{CC}$ </td><td>VCC电压</td><td>-0.3~30</td><td>V</td></tr><tr><td> $V_{FB}$ </td><td>反馈输入端电压</td><td>-0.3~6</td><td>V</td></tr><tr><td> $V_{COMP}$ </td><td>环路补偿脚</td><td>-0.3~6</td><td>V</td></tr><tr><td> $V_{CS}$ </td><td>电流采样端电压</td><td>-0.3-6</td><td>V</td></tr><tr><td> $P_{DMAX}$ </td><td>功耗(注2)</td><td>0.45</td><td>W</td></tr><tr><td> $\theta_{JA}$ </td><td>PN结到环境的热阻(注3)</td><td>145</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>工作结温范围</td><td>-40~150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td>-55~150</td><td>°C</td></tr></table>

注 1：极限参数是指超出该范围，有可能导致器件永久性损坏。极限参数为器件应⼒的额定值，⻓期工作在极限参数条件可能会影响器件的可靠性。  
注 2：温度升⾼最大功耗一定会减小，这也是由 T<sub>JMAX</sub>, θ<sub>JA</sub>,和环境温度T<sub>A</sub>所决定的。最大允许功耗为P<sub>DMAX</sub> = (T<sub>JMAX</sub> - T<sub>A</sub>)/ θ<sub>JA</sub>或是极限范围给出的数字中比较低的那个值。  
注 3：1平方英寸双层 PCB板，按照JEDEC 标准测试。

电气参数(注 4,5)

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">电源电压(VCC)</td></tr><tr><td> $V_{CC\_OVP}$ </td><td> $V_{CC}$ 过压保护阈值</td><td></td><td>26</td><td>27.4</td><td>29.4</td><td>V</td></tr><tr><td> $V_{CC\_ON}$ </td><td> $V_{CC}$ 启动电压</td><td> $V_{CC}$ 上升</td><td>10.4</td><td>12</td><td>13.6</td><td>V</td></tr><tr><td> $V_{CC\_UVLO}$ </td><td> $V_{CC}$ 欠压保护阈值</td><td> $V_{CC}$ 下降</td><td>6.5</td><td>7.4</td><td>8.7</td><td>V</td></tr><tr><td> $V_{CC\_JEFTON}$ </td><td>JETFT开启电压</td><td></td><td>8</td><td>8.5</td><td>9</td><td>V</td></tr><tr><td> $I_{ch}$ </td><td> $V_{CC}$ 启动电流</td><td> $V_{CC}=0V$ </td><td>1.2</td><td>3</td><td>5.8</td><td>mA</td></tr><tr><td> $I_{OP}$ </td><td> $V_{CC}$ 工作电流</td><td> $V_{FB}=1.9V, V_{CS}=1V$ </td><td>0.885</td><td>0.975</td><td>1.315</td><td>mA</td></tr><tr><td> $I_Q$ </td><td> $V_{CC}$ 静态电流</td><td> $V_{FB}=2.2V, V_{CS}=1V$ </td><td>625</td><td>858</td><td>925</td><td>μA</td></tr><tr><td colspan="7">退磁检测和电压采样(FB)</td></tr><tr><td> $V_{FB\_EA\_REF}$ </td><td>内部误差放大器基准</td><td></td><td>1.99</td><td>2.02</td><td>2.06</td><td>V</td></tr><tr><td> $V_{FB\_OVP}$ </td><td>FB过压保护阈值</td><td></td><td>2.35</td><td>2.58</td><td>2.9</td><td>V</td></tr><tr><td> $V_{FB\_ZCD\_H}$ </td><td>过零检测高阈值</td><td> $V_{DEM}$ 上升</td><td></td><td>0.25</td><td></td><td>V</td></tr><tr><td> $V_{FB\_ZCD\_L}$ </td><td>过零检测低阈值</td><td> $V_{DEM}$ 下降</td><td></td><td>0.2</td><td></td><td>V</td></tr><tr><td> $V_{FB\_SHORT}$ </td><td>输出短路阈值</td><td></td><td>1.1</td><td>1.24</td><td>1.35</td><td>V</td></tr><tr><td> $T_{SAMPLE\_BIG}$ </td><td>采样时间(BCM)(注6)</td><td> $T_{CS\_TH}=0.55V$ </td><td>2.79</td><td>3.72</td><td>4.65</td><td>μs</td></tr><tr><td> $T_{SAMPLE\_SMALL}$ </td><td>采样时间(DCM)(注6)</td><td> $T_{CS\_TH}=0.1V$ </td><td>1.4</td><td>1.86</td><td>2.33</td><td>μs</td></tr><tr><td> $T_{ZCD\_MASK\_H}$ </td><td>最大退磁屏蔽时间(注6)</td><td> $V_{CS}=0.55V$ </td><td>1.92</td><td>2.56</td><td>3.2</td><td>μs</td></tr><tr><td> $T_{ZCD\_MASK\_L}$ </td><td>最小退磁屏蔽时间(注6)</td><td> $V_{CS}=0.1V$ </td><td>0.53</td><td>0.7</td><td>0.875</td><td>μs</td></tr><tr><td> $T_{DEMAG\_MAX}$ </td><td>最大退磁时间</td><td>检测不到退磁</td><td>143</td><td>200</td><td>257</td><td>μs</td></tr><tr><td colspan="7">内部时间控制</td></tr><tr><td> $T_{OFF\_MAX}$ </td><td>最大退磁时间(注6)</td><td>检测到退磁</td><td></td><td>1</td><td></td><td>ms</td></tr><tr><td> $T_{ON\_MAX}$ </td><td>最大开通时间</td><td></td><td>7</td><td>9</td><td>11</td><td>μs</td></tr><tr><td colspan="7">电流采样(CS)</td></tr><tr><td> $V_{REF\_CC}$ </td><td>恒流基准(BCM)</td><td></td><td>1.944</td><td>1.98</td><td>2.024</td><td>V</td></tr><tr><td> $T_{LEB}$ </td><td>前沿消隐时间(注6)</td><td></td><td>250</td><td>350</td><td>450</td><td>ns</td></tr><tr><td> $V_{OCP}$ </td><td>逐周期限流电压</td><td></td><td>0.44</td><td>0.55</td><td>0.66</td><td>V</td></tr><tr><td colspan="7">JFET(HV)</td></tr><tr><td> $I_{DSS}$ </td><td>JFET的漏电流</td><td> $V_{CC}=14V/V_{HV}=750V$ </td><td></td><td></td><td>20</td><td>μA</td></tr><tr><td colspan="7">功率管驱动(GATE)</td></tr><tr><td> $V_{SOURCE}$ </td><td>驱动电平</td><td></td><td></td><td>12</td><td></td><td>V</td></tr><tr><td> $I_{SOURCE}$ </td><td>最大驱动上拉电流</td><td> $V_{CC}=12V, C_L=4.7nF$ </td><td></td><td>40</td><td></td><td>mA</td></tr><tr><td> $I_{SINK}$ </td><td>最大驱动下拉电流</td><td> $V_{CC}=12V, C_L=4.7nF$ </td><td></td><td>400</td><td></td><td>mA</td></tr><tr><td colspan="7">功误差放大器 (COMP)</td></tr><tr><td> $G_m$ </td><td>误差放大器跨导</td><td></td><td></td><td>1.98</td><td></td><td>μA/V</td></tr><tr><td> $V_{BCM}$ </td><td>DCM-BCM 转换电压</td><td></td><td></td><td>1.9</td><td></td><td>V</td></tr><tr><td> $I_{COMP}$ </td><td>误差放大器电流能力</td><td></td><td></td><td>2</td><td></td><td>μA</td></tr><tr><td colspan="7">过温保护</td></tr><tr><td> $T_{SD}$ </td><td>过热保护温度</td><td></td><td></td><td>135</td><td></td><td>°C</td></tr></table>

注 4：典型参数值为25˚C下测得的参数标准。

注 5：电气参数定义了器件在工作范围内并且在保证特定性能指标的测试条件下的直流和交流电参数规范。最小值和最大值由测试保证，典型值由设计、测试或统计分析保证。对于未给定上下限值的参数，该规范不予保证其精度，但其典型值合理反映了器件性能。注 6：设计保证。

## 内部结构框图

![](images/ea211786d4e9d77ccf8bdf11934c416c47de1975d273b70515f5ad24bb7df36b.jpg)  
图 3. BP3529B 内部框图

## 功能描述

BP3529B 是一款原边控制低功耗恒压恒流控制芯片，重载下芯片工作在电感电流临界连续模式，轻载下芯片工作在电感电流断续导通模式。 BP3529B 采用特有的多模式准谐振控制，只需要极少的外围组件就可以达到优异的恒压恒流特性，特别适合于有恒压恒流需求的 LED 驱动器、中功率适配器。

## 启动

BP3529B系统上电后，⺟线电压通过 HV 对 VCC 电容充电，当 Vcc 电压达到芯片开启阈值 $V _ { C C \_ O N }$ 时，芯片内部控制电路开始工作。系统正常后，Vcc 由辅助绕组通过⼆极管供电。

为了启动后输出电压快速建立，BP3529B 在开机后 20ms内短暂屏蔽原边恒流功能，原边电流只受 OCP 限制，从而缩短首次启动时输出电压的上升时间。

## 恒流控制，输出电流设置

BP3529B 芯片逐周期检测电感的峰值电流，CS 端连接到内部的峰值电流比较器的输入端，与内部阈值电压进⾏比较，当 CS 外部电压达到内部检测阈值时，功率管关断。

输出电流的表达式为：

$$
I _ {O U T} = \frac {1}{2} \times \frac {N _ {P}}{N _ {S}} \times 0. 1 7 5 \times \frac {V _ {\mathrm {RFF\_CC}}}{R _ {\mathrm{cs}}}
$$

其中， $\mathsf { N } _ { \mathsf { p } }$ 变压器主级的匝数， ${ \sf N } _ { s }$ 是变压器次级的匝数， $\mathsf { I } _ { 0 \mathsf { u t } }$ 是恒流输出电流， $V _ { R E F \_ C C }$ 是恒流基准电压， $\mathsf { R } _ { \mathsf { C S } }$ 是电流检测电阻。CS 比较器的输出还包括一个 $T _ { \mathsf { L E B } }$ 前沿消隐时间。

## 恒压控制，输出电压设置

BP3529B 通过采样变压器辅助绕组电感两端压降，分压后与内部基准比较形成闭环后，来恒定输出电压 $\vee 0 _ { \circ }$

$$
V o = \frac {V _ {F B \_ E A \_ R E F} * (R _ {F B L} + R _ {F B H})}{R _ {F B L}} * \frac {N _ {S}}{N _ {a u x}} - V _ {f}
$$

其中，V<sub>f</sub>是续流⼆极管压降，R<sub>FBL</sub>是 FB 下拉电阻，R<sub>FBH</sub>是FB上拉电阻， $\mathsf { N } _ { \sf a u x }$ 是变压器辅助绕组的匝数。

## 多模式控制

BP3529B 芯片采用多模式控制技术，能有效降低系统待机功耗，提⾼效率，并减小系统工作在轻载时的噪声。

![](images/a2bf82cefb4cbbbf7cdd52b66660c36da8e924f66cc06e2391a8796bca7ed7e4.jpg)

## 线电压补偿设置

BP3529B 芯片内部的关断延迟，导致不同线电压下，电感的峰值电流有差异。线电压越⾼，电感峰值电流偏差越大，输出电流就越大，影响CC精度。线电压补偿的目的是使电感峰值电流在不同线电压下保持原来预期值。

功率管导通时FB 钳位电路将FB电压钳位至接近0V，镜像MOSFET 导通时的 IFB 得到 K\*IFB，将该电流注入到补偿电阻RC上， $\nearrow$ 生 $\Delta { \sf V } _ { \sf C S ; }$ ，叠加到CS电压上，用 $\mathsf { V } _ { \mathsf { C S } } { + } \Delta \mathsf { V } _ { \mathsf { C S } }$ 和参考电压进⾏比较，决定功率管关断。

通过调节FB上拉电阻 $R _ { \mathrm { F B H } }$ 可以决定线电压补偿的深度，推荐其取值范围如下：

$$
\frac {K \times N _ {a u x} \times R _ {c} \times L}{N _ {p} \times \varDelta t \times R _ {c s}} \leq R _ {F B H} <   \frac {V _ {b u l k} \times N _ {a u x}}{N _ {p} \times 3 \times 1 0 ^ {- 4}}
$$

其中 $\mathsf { V } _ { \sf b u l k }$ 是⺟线电压，芯片内部关断延时 $\triangle$ t(约 100ns)，K 是固定系数约为 0.00625，Rc 为 $2 . 8 \mathsf { k } \Omega _ { \mathsf { c } }$ L为变压器原边励磁电感值。

## 过压保护电阻设置

当 FB 检测到的平台电压达到内部设定的开路保护阈值$V _ { F B \_ O \vee P }$ 时，系统进入开路保护。

$$
V _ {O V P} = \frac {V _ {F B \_ O V P} * (R _ {F B L} + R _ {F B H})}{R _ {F B L}} * \frac {N _ {S}}{N _ {a u x}} - V _ {f}
$$

其中， $\mathsf { V } _ { \mathsf { o v p } }$ 是需要设定的过压保护点

## 保护功能

BP3529B 内置多种保护功能，包括输出开路/短路保护，$\mathsf { V } _ { \mathsf { C C } }$ 欠压/过压保护，CS开路保护、副边⼆极管/副边电感短路保护、过温保护等。

## 输出短路保护

当输出短路时，FB 检测到的电压低于 $V _ { F B \_ S H O R T }$ <sub>T</sub>时，系统进入短路保护。短路工作150ms后，关断功率管，1.5s后系统重启。

## 输出开路保护

当 FB 采样电压连续四个周期大于 $V _ { F B \_ O \vee P }$ 则触发输出过压保护，关断功率管，1.5s 后系统重启。

## VCC过压保护

当VCC电压大于 ${ \mathsf { V } } _ { \mathsf { C C } } \mathsf { _ { O V P } } ,$ ，则触发VCC过压保护，关断功率管。

## CS 开路保护

当CS⾼于3.3V超过20us，则关断功率管，1.5s后系统重启。

副边二极管/副边电感短路保护

当 MOS 导通时经过屏蔽时间后，若 CS 电压大于阈值 1.4V，则关断功率管，作为本周期的功率管关断信号。若连续两个周期检测均大于阈值电压 1.4V，则触发失效信号，关断功率管，1.5s 后系统重启。

PCB Layout 指南

在设计 BP3529BPCB时，需要遵循以下指南：

1) $\mathsf { V } _ { \mathsf { C C } }$ 的旁路电容需要紧靠芯片 V<sub>CC</sub>和 GND 引脚。

2) 接到FB的分压电阻必须靠近FB 引脚，且节点要远离功率电感的动点。

3) 电流采样电阻的功率地线尽可能短，且要和芯片的地线及其它小信号的地线分头接到⺟线电容的地端。

4) 减小功率环路的⾯积，如功率电感、功率管、⺟线电容的环路⾯积，以及功率电感、续流⼆极管、输出电容的环路⾯积，以减小 EMI 辐射。

## 封装信息

![](images/803616217058f7c3336c381590a5ec3dff096ebc584d8580678c78ae5573e2b8.jpg)

SOP-8 封装外形尺寸  
![](images/a16a58f582b9582d7cbf2f6ef399e6f1193a1eb8bc1bc0c76434e53dc934179e.jpg)

![](images/fd7e5177f674005fa8a09b8167000d9cb1fe90408f829f4c19f4505db0d88667.jpg)

![](images/b153714fe5c8f80415d3eb64d646840d1fa40f65e3110c6e7b2e2f7589c1fa34.jpg)  
WITH PLATING

SECTION B-B  
![](images/3b3ea4e2642a9645735d4dd372016bdbd65c1e8c810886063d7f97afeb49e075.jpg)

<table><tr><td rowspan="2">SYMBOL</td><td colspan="3">MILLIMETER</td></tr><tr><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A</td><td>1.30</td><td>—</td><td>1.80</td></tr><tr><td>A1</td><td>0.05</td><td>—</td><td>0.25</td></tr><tr><td>A2</td><td>1.25</td><td>1.40</td><td>1.65</td></tr><tr><td>b</td><td>0.33</td><td>—</td><td>0.51</td></tr><tr><td>c</td><td>0.17</td><td>—</td><td>0.25</td></tr><tr><td>D</td><td>4.70</td><td>4.90</td><td>5.10</td></tr><tr><td>E</td><td>5.80</td><td>6.00</td><td>6.30</td></tr><tr><td>E1</td><td>3.70</td><td>3.90</td><td>4.10</td></tr><tr><td>e</td><td colspan="3">1.27BSC</td></tr><tr><td>L</td><td>0.40</td><td>—</td><td>1.00</td></tr></table>

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev. 1.0</td><td>2025/12</td><td>首次发行</td></tr><tr><td></td><td></td><td></td></tr></table>

![](images/b91a3bcd9f28138dab3ddb31728532aa74367d13c944e6cb68b7652c74a15851.jpg)

## 免责声明

晶丰明源尽⼒确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明⽰或暗⽰的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三⼈知识产权做任何明⽰或暗⽰保证，晶丰明源也不就因本规格书本⾝及其使用有关的偶然或必然损失承担任何责任。

## 电子器件报废说明

该产品在生命周期结束后，由客⼾按照一般电⼦产品的报废流程进⾏处理。