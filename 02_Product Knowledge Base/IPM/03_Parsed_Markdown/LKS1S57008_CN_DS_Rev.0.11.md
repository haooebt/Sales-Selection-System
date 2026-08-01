1图中，所示采样方式为单电阻采样，采样方式可以根据实际情况自行选择

## 概述

LKS1S57008 是一款智能且高可靠性的半桥功率模块，内部集成一颗高压专用驱动芯片及两颗高性能 SiCMOSFET，特别适用于直流无刷电机。低侧MOSFET源极开路用于电流采样。

信号输入内部包含施密特触发器，逻辑电平兼容3.3V/5V/15V。模块同时集成了欠压保护、过温保护、硬件过流保护、输出死区、输入信号互锁等保护功能。LKS1S57008 采用低热阻、小体积 EHSOP12 贴片封装。

## 特点

◼ IPM 自供电，无需外部 VCC 供电

◼ 集成母线电压检测，高精度(±1.5%)

◼ FO/SD故障状态输出和外部关断控制

◼ 支持睡眠模式，极低静态功耗

◼ 内置高性能 600V/8A SiC MOSFET

◼ 强耐瞬态负压能力

◼ 输入信号互锁及内置死区，防止上下管直通

◼ 高低压电气间隙大于 2mm

◼ 集成 TSD、UVLO、OCP 保护功能

## 典型应用

![](images/3fd7d5c85b030a1f392b9f4a33f58f061622d53927eb05ef63f6a53e5ed125cb.jpg)  
图 1. LKS1S57008 典型应用图

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>印章</td></tr><tr><td>LKS1S57008</td><td>EHSOP12</td><td>编带2500 PCS/盘</td><td>LKS1S57008XXXXXYZZZZWWX</td></tr></table>


## 管脚封装

![](images/b218eaba05ade05006a7162c5aad5e324442a194380018d299106673151f489c.jpg)  
图 2. LKS1S57008 管脚封装图

LKS1S57008：产品型号

XXXXXYX：批号

ZZZZ：标识

WW：周号

X：特殊字符

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>PSNS</td><td>母线电压采样输出信号</td></tr><tr><td>2</td><td>HIN</td><td>高侧控制信号输入</td></tr><tr><td>3</td><td>LIN</td><td>低侧控制信号输入</td></tr><tr><td>4,5</td><td>GND</td><td>低侧参考地</td></tr><tr><td>6</td><td>OCP</td><td>过流检测信号输入</td></tr><tr><td>7</td><td>FO/SD</td><td>故障信号输出和外部关断控制复用引脚,内部串接1M电阻上拉到5V基准</td></tr><tr><td>8,9</td><td>N</td><td>连接低侧MOSFET的SOURCE端</td></tr><tr><td>10</td><td>VS</td><td>悬浮地,高侧参考地</td></tr><tr><td>11</td><td>VB</td><td>高侧电源供电端</td></tr><tr><td>12</td><td>P</td><td>高压端输入,内部芯片取电供电端,连接高侧MOSFET的DRAIN端</td></tr><tr><td>13(衬底)</td><td>VS</td><td>主散热焊盘,连通VS引脚(带电)</td></tr><tr><td>14(衬底)</td><td>P</td><td>主散热焊盘,连通P引脚(带电)</td></tr></table>

![](images/540f1c212d5ed4a928c52d4fe48596a195310ab55271664bd11c0c2ca51ffba8.jpg)

## 极限参数(注 1)(无特别说明情况下， ${ \bar { \mathsf { T } } } _ { \mathsf { A } } { = } 2 5 ^ { \circ } \mathsf { C } )$

逆变部分

<table><tr><td>符号</td><td>参数</td><td>条件</td><td>参数范围</td><td>单位</td></tr><tr><td> $V_{DSS}$ </td><td>MOSFET 漏源电压</td><td> $I_{DSS}=250uA$ </td><td>600</td><td>V</td></tr><tr><td rowspan="2"> $I_D$ </td><td rowspan="2">MOSFET 连续工作电流 (注 2)</td><td> $T_C=25°C$ </td><td>8</td><td>A</td></tr><tr><td> $T_C=100°C$ </td><td>5.1</td><td>A</td></tr><tr><td> $I_{DM}$ </td><td>脉冲电流(注 2)</td><td> $T_C=25°C, t≤100μs$ </td><td>12</td><td>A</td></tr><tr><td> $P_D$ </td><td>封装最大耗散功耗</td><td>单颗 MOSFET( $T_C=100°C$ )</td><td>45</td><td>W</td></tr></table>

控制部分

<table><tr><td>符号</td><td>参数</td><td>条件</td><td>参数范围</td><td>单位</td></tr><tr><td> $V_{PSNS}$ </td><td>母线电压输出(固定比率)</td><td>PSNS 和 GND 之间电压</td><td>-0.3~+6</td><td>V</td></tr><tr><td> $V_{BS}$ </td><td>高侧供电电压</td><td>VB 和 VS 之间电压</td><td>-0.3~20</td><td>V</td></tr><tr><td> $V_{LIN/HIN}$ </td><td>输入信号电压</td><td>LIN/HIN 和 GND 之间电压</td><td>-0.3~20</td><td>V</td></tr><tr><td> $V_{OCP}$ </td><td>过流保护检测输入</td><td>OCP 和 GND 之间电压</td><td>-0.3~6</td><td>V</td></tr><tr><td> $V_{FO/SD}$ </td><td>故障输出和关机控制电压</td><td>FO/SD 和 GND 之间电压</td><td>-0.3~6</td><td>V</td></tr></table>

封装热阻

<table><tr><td>符号</td><td>参数</td><td>条件</td><td>参数范围</td><td>单位</td></tr><tr><td> $R_{thJC\_TOP}$ </td><td>MOS 结温到其顶部外壳的热阻</td><td>同逆变部分条件</td><td>22</td><td>°C/W</td></tr><tr><td> $R_{thJC\_BOTTOM}$ </td><td>MOS 结温到散热焊盘底部的热阻</td><td>同逆变部分条件</td><td>1.1</td><td>°C/W</td></tr><tr><td> $R_{thJA}$ </td><td>MOS 结温到环境温度的热阻</td><td>同逆变部分条件</td><td>85</td><td>°C/W</td></tr></table>

整机系统

<table><tr><td>符号</td><td>参数</td><td>条件</td><td>参数范围</td><td>单位</td></tr><tr><td> $T_{J}$ </td><td>工作结温范围</td><td></td><td>-40~150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度范围</td><td></td><td>-40~125</td><td>°C</td></tr></table>

ESD 能力

<table><tr><td>符号</td><td>参数</td><td>条件</td><td>参数范围</td><td>单位</td></tr><tr><td>HBM</td><td>人体放电模型</td><td></td><td>±2000</td><td>V</td></tr><tr><td>CDM</td><td>元件充电模式</td><td></td><td>±2000</td><td>V</td></tr><tr><td>MM</td><td>机器放电模式</td><td></td><td>±200</td><td>V</td></tr></table>

注 1：极限参数是指应用超出该范围，可导致器件永久性损坏。  
注 2：受最大结温限制。

推荐工作条件(注 3) (无特别说明情况下， ${ \bar { \mathsf { T } } } _ { \mathsf { A } } = 2 5 ^ { \circ } { \mathsf { C } } )$

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td> $V_{PN}$ </td><td>功率供电电压</td><td>P, N 引脚之间</td><td>-</td><td>300</td><td>400</td><td>V</td></tr><tr><td> $V_{LIN/HIN(ON)}$ </td><td>高电平电压</td><td>LIN/HIN 和 GND 之间</td><td>3.0</td><td>-</td><td>15</td><td>V</td></tr><tr><td> $V_{LIN/HIN(OFF)}$ </td><td>低电平电压</td><td>LIN/HIN 和 GND 之间</td><td>0</td><td>-</td><td>0.4</td><td>V</td></tr><tr><td> $T_{DEAD}$ </td><td>死区时间(注 4)</td><td>输入 LIN 与 HIN 之间</td><td>1.0</td><td>-</td><td>-</td><td>μs</td></tr><tr><td> $F_{PWM}$ </td><td>开关频率</td><td></td><td>-</td><td>20</td><td>-</td><td>kHz</td></tr><tr><td> $V_{LIN/HIN\_MIN}$ </td><td>LIN/HIN 最小输入脉宽</td><td>LIN/HIN 脉冲宽度(高电平和低电平)</td><td>1.0</td><td></td><td></td><td>μs</td></tr><tr><td> $T_C$ </td><td>MOS 顶部外壳温度</td><td></td><td></td><td></td><td>100</td><td>°C</td></tr><tr><td> $T_J$ </td><td>MOS 器件结温</td><td></td><td></td><td></td><td>125</td><td>°C</td></tr></table>

注 3：推荐的工作条件，器件可稳定可靠的工作。  
注 4：IPM内置预驱包含了内置死区时间(典型值参考电气参数表格中的数据)，控制算法在设置死区时间时，需考虑内置死区时间影响。

电气参数(注 5) (无特别说明情况下， ${ \bar { \mathsf { T } } } _ { \mathsf { A } } = 2 5 ^ { \circ } { \mathsf { C } } )$

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">逆变部分</td></tr><tr><td> $BV_{DSS}$ </td><td>MOS 漏源击穿电压</td><td> $V_{LIN/HIN}=0V, I_D=1mA$ </td><td>600</td><td></td><td></td><td>V</td></tr><tr><td> $I_{DSS}$ </td><td>MOS 额定漏电流</td><td> $V_{LIN/HIN}=0V,V_{DS}=600V$ </td><td></td><td></td><td>10</td><td>μA</td></tr><tr><td> $V_{SD}$ </td><td>MOS 体二极管正向导通压降</td><td> $V_{LIN/HIN}=0V,I_D=-0.5A$ </td><td></td><td></td><td>4</td><td>V</td></tr><tr><td> $R_{DS(ON)}$ </td><td>MOS 管导通内阻</td><td> $V_{PN}=80V, I_D=0.5A$ </td><td></td><td>0.8</td><td>1.2</td><td>Ω</td></tr><tr><td> $T_{ON}$ </td><td rowspan="6">开关过程</td><td rowspan="6"> $V_{PN}=400V,I_D=8A,高侧和低侧$ </td><td></td><td>700</td><td></td><td>ns</td></tr><tr><td> $T_{OFF}$ </td><td></td><td>400</td><td></td><td>ns</td></tr><tr><td> $T_r$ </td><td></td><td>120</td><td></td><td>ns</td></tr><tr><td> $T_f$ </td><td></td><td>24</td><td></td><td>ns</td></tr><tr><td> $E_{ON}$ </td><td></td><td>400</td><td></td><td>μJ</td></tr><tr><td> $E_{OFF}$ </td><td></td><td>70</td><td></td><td>μJ</td></tr><tr><td colspan="7">控制部分</td></tr><tr><td> $I_{QCC}$ </td><td>低侧静态供电电流</td><td> $V_{PN}=310V,V_{LIN/HIN}=0V$ </td><td>200</td><td>260</td><td>300</td><td>μA</td></tr><tr><td> $I_{QCC\_SLEEP}$ </td><td>低侧睡眠模式静态电流</td><td> $V_{PN}=310V,V_{LIN/HIN}=0V,V_{FO}=0V$ </td><td>120</td><td>170</td><td>220</td><td>μA</td></tr><tr><td> $I_{QBS}$ </td><td>高侧静态供电电流</td><td> $V_{BS}=18V,V_{LIN/HIN}=0V$ </td><td>24</td><td>35</td><td>52</td><td>μA</td></tr><tr><td> $V_{P\_ON\_REF}$ </td><td> $V_P$ 开启阈值内部基准电压</td><td></td><td></td><td>0.4</td><td></td><td>V</td></tr><tr><td> $V_{P\_OFF\_REF}$ </td><td> $V_P$ 关断阈值内部基准电压</td><td></td><td></td><td>0.3</td><td></td><td>V</td></tr><tr><td> $V_{P\_ON}$ </td><td rowspan="2"> $V_P$ 和 $V_{BS}$ 开启阈值电压</td><td rowspan="2"></td><td>54</td><td>59</td><td>66</td><td>V</td></tr><tr><td> $V_{BS\_ON}$ </td><td>12.6</td><td>13.2</td><td>13.8</td><td>V</td></tr><tr><td> $V_{FO/\overline{SD\_ON}}$ </td><td> $V_{FO/\overline{SD}}$ 开启阈值电压</td><td></td><td>1.75</td><td>1.98</td><td>2.25</td><td>V</td></tr><tr><td> $V_{P\_UVLO}$ </td><td rowspan="2"> $V_P$ 和 $V_{BS}$ 关断阈值电压</td><td rowspan="2"></td><td>40</td><td>43</td><td>50</td><td>V</td></tr><tr><td> $V_{BS\_UVLO}$ </td><td>7.7</td><td>8.4</td><td>8.6</td><td>V</td></tr><tr><td> $V_{FO/\overline{SD\_OFF}}$ </td><td> $V_{FO/\overline{SD}}$ 关断阈值电压</td><td></td><td>0.9</td><td>1.27</td><td>1.5</td><td>V</td></tr><tr><td> $V_{P\_HYS}$ </td><td rowspan="2"> $V_P$ 和 $V_{BS}$ 迟滞电压</td><td rowspan="2"></td><td>10</td><td>16</td><td>20</td><td>V</td></tr><tr><td> $V_{BS\_HYS}$ </td><td>4.6</td><td>4.8</td><td>5.2</td><td>V</td></tr><tr><td> $V_{FO/\overline{SD\_HYS}}$ </td><td> $V_{FO/\overline{SD}}$ 迟滞电压</td><td></td><td>0.4</td><td>0.7</td><td>0.9</td><td>V</td></tr><tr><td> $V_{LIN/HIN(ON)}$ </td><td>HIN/LIN 开启高电平</td><td>逻辑高电平</td><td>2.5</td><td>-</td><td></td><td>V</td></tr><tr><td> $V_{LIN/HIN(OFF)}$ </td><td>HIN/LIN 关断低电平</td><td>逻辑低电平</td><td></td><td>-</td><td>0.6</td><td>V</td></tr><tr><td> $V_{OCP}$ </td><td>过流保护阈值</td><td></td><td>0.453</td><td>0.47</td><td>0.483</td><td>V</td></tr><tr><td> $T_{OCP\_LEB}$ DT</td><td>OCP 保护延时死区时间</td><td>驱动内置</td><td></td><td>1.0300</td><td></td><td>μsns</td></tr><tr><td> $V_{PSNS}$ </td><td>母线电压检测输出电压</td><td> $V_{PN}=75V$ 时输出电压</td><td>0.49</td><td>0.5</td><td>0.51</td><td>V</td></tr><tr><td> $K_{PSNS}$ </td><td>母线电压输出比例(固定)</td><td> $K_{PSNS}=V_{PSNS}/V_{PN}$ </td><td>1/143.8</td><td>1/146</td><td>1/148.3</td><td>V</td></tr><tr><td colspan="7">热关断(TSD)保护</td></tr><tr><td> $T_{TSD}$ </td><td>过热关断阈值温度</td><td></td><td></td><td>137</td><td></td><td>°C</td></tr><tr><td> $T_{HYST}$ </td><td>过热关断迟滞温度</td><td></td><td></td><td>35</td><td></td><td>°C</td></tr></table>

注 5: 电气特性定义器件的工作范围，大部分数据由测试程序保证，小部分由设计值保证，生产不会测试(举例：热关断(TSD)保护)。对于电气特性表中未定义的最大值和最小值的情况，其典型值仅用于定义器件的工作范围，规格书不保证其精度。

## 真值表

<table><tr><td>HIN</td><td>LIN</td><td>输出</td><td>描述</td></tr><tr><td>0</td><td>0</td><td>Hi-Z</td><td>输出高阻态,高侧和低侧 MOS 关断</td></tr><tr><td>0</td><td>1</td><td>0</td><td>低侧 MOS 导通,高侧 MOS 关断</td></tr><tr><td>1</td><td>0</td><td> $V_P$ </td><td>高侧 MOS 导通,低侧 MOS 关断</td></tr><tr><td>1</td><td>1</td><td>Hi-Z</td><td>禁止输入,输出高阻态,高侧和低侧 MOS 关断</td></tr><tr><td>开路</td><td>开路</td><td>Hi-Z</td><td>HIN/LIN 内部下拉电阻 5.1kΩ,高侧和低侧 MOS 关断</td></tr></table>

## 开关过程定义

![](images/8cb9eaf7498d7c38c1ff82ecdd015e323fdf7d7ce8ea3adc99a05c98ba508d90.jpg)  
图4.开关过程时间定义

## 典型应用电路图

![](images/a692c54b1303068732ba7facbd9923c9f77d210cd6f09fba9d636bf49d0ec805.jpg)  
图 5. 典型应用电路图  
设计人员可根据应用需求，选择不同的设计方案。

## 应用指南：

◆ FO/SD复用引脚内部串接了一个 1MΩ（典型值）上拉电阻连接至内部 5V 电压基准，输入功能控制模块开关，输出功能用作故障信号报警，因内部上拉阻值较大，应用时需外接外部上拉电阻，阻值参考 FO/SD下拉后，流过 R1 上的电流为 1mA设计上拉电阻阻值；电容 C1 的值建议从 10nF-100nF 之间，值越大，FO 下拉和恢复时间越长，C1 应尽可能靠近 FO/引脚放置。

◆ 自举供电，建议 C4 容值范围 1μF-10μF 之间，推荐使用 2.2μF/X7R MLCC 电容，电容的取值和预充电的时间相关，电容值越大，需要的充电时间越长，可以根据应用实际情况综合考虑选取；C4 应尽可能靠近 VS和 VB 引脚；自举电容的负极应直接连接到 VS端子，并与主输出线分开。

◆ PSNS滤波电容 C3，推荐使用 10nF，C3 应尽可能靠近 PSNS引脚放置。

◆ OCP 功能在典型应用图中选择其中一个 IPM 作为 OCP 保护采样(可以根据实际情况调整)，由于三个 IPM 的 FO 脚是并联的，所以当作为 OCP 采样的 IPM 触发过流保护时，该 IPM 的 FO 管脚输出低电平，同时其他 IPM 的 FO 管脚会同步拉低，触发 fault，IPM 会关闭桥臂 MOS管。OCP 内部已经包含 1us 滤波，外部 RC 滤波的时间可以根据实际需求进行取值，建议最好在 1μs 以内。

◆ HIN/LIN 建议增加输入 RC 滤波，电阻推荐使用 100Ω，电容推荐使用 1nf/X7R MLCC 电容。

◆ 与电解电容 CD2 并联使用的去耦电容器 C5（推荐容值范围 100nF-220nF 之间，具有低 ESR 和低 ESL 的高耐压电容）有助于防止浪涌破坏功率管，电容器 C5 和 CD2 应尽可能靠近 IPM 放置（C5 优先于 CD2 靠近 IPM 引脚放置）。

◆ 为避免寄生参数引起的故障，VS 引脚、分流电阻器和 PGND 上的接线应尽可能短粗。

◆ SGND 与 PGND 的连接仅在一点（靠近分流电阻器端子）以减少电源地波动的影响。

## OCP 保护

![](images/655b74712006b79a468233a39a28ecec48874131b1dcda9ef9e80f9b696a8358.jpg)

## 图 6. OCP 保护功能

## OCP 保护逻辑：

IPM内部高侧和低侧MOS 在工作期间，若只检测到 OCP输入电压大于阈值电压，则触发OCP 保护，FO的输出电平由高电平变为低电平，同时关闭 MOS的开关功能。65μs 后，FO自动恢复，输出电平由低电平变为高电平，MOS 恢复正常的开关功能。



## 外部关断控制(SD)

![](images/efda2c0c8d5265bd22c8e965b994fd22156c31a478a00f44fc873570d9dd70cd.jpg)  
图 7. 外部关断控制逻辑

## 外部关断控制 $( \overline { { \mathsf { S D } } }$ )逻辑:

复用引脚 $F O / \overline { { \mathsf { S D } } }$ 输入低电平，IPM 模块立即关闭高侧和低侧MOS；复用引脚 $F O / \overline { { \mathsf { S D } } }$ 输入高电平，IPM 模块低侧MOS 立即响应HIN/LIN输入电平的信号工作。

## 睡眠模式控制(FO)

![](images/74861c1c491f2a5c44c0ff6cd60d3aad08deb68aca395bda279dbca6de4f9ea0.jpg)  
图 8. 睡眠模式(FO)控制逻辑

## 睡眠模式(FO)：

当FO/SD输入低电平的时间超过130μs，芯片进入睡眠模式，以降低功耗。可以通过将FO/ 拉高来唤醒芯片，进入正常工作状态。

## 热关断保护功能(TSD)

![](images/c25370a979fff78b4d35adb0221b6ac2fbba93a959cd49f84b415d2190aeb1a5.jpg)  
图 9. 热关断逻辑

## 热关断保护功能(TSD)：

IPM模块集成热关断功能，以很近的距离将功率器件MOS和专用驱动芯片封装在一起，MOS 工作时的发热能很快的被驱动芯片检测到，驱动芯片上集成了温度检测电路，当保护电路检测点温度达到过温关断温度值137℃(典型值)时，保护电路逻辑控制高侧和低侧MOS关断，FO输出低电平并保持下拉；模块冷却降温，电路检测点检测到恢复温度值时，保护电路释放FO下拉电平，模块恢复正常工作。



封装信息

![](images/58e85f29b8669b6b9bcd804dc87caf249e1b44021ae5fd86764ed74bd7c30dd0.jpg)  
TOP VIEW

![](images/e68382abb4caed436606aa3023dfd9ccde81b592f1e5bc99c32ebe72e5b143df.jpg)  
SIDE VIEW

![](images/7f6617bbe3954ff3fe04a86d4e293954d09914dbd621efc68cd86c10b7a5eb57.jpg)  
SIDE VIEW

EHSOP12 封装外形尺寸  
![](images/404655dd35de63c6c9193f5e3456047bffbc2beb5a966b449e28e8a53d7f1cf3.jpg)

BOTTOM VIEW  
![](images/4161f30d3b5dbcfe2e60326cb666546903f21e67780435546bdee4c674caf941.jpg)  
NOTES:  
1. ALL DIMENSIONS MEET JEDEC STANDARD MS-012F  
2 ALL DIMFNSIONS DO NOT INCLUDF MOLD FLASH OR PROTRUSIONS

COMMON DIMENSIONS (UNITS OF MEASURE=MILLIMETER)

<table><tr><td>SYMBOL</td><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A1</td><td>0.05</td><td>0.10</td><td>0.15</td></tr><tr><td>A2</td><td>1.35</td><td>1.40</td><td>1.45</td></tr><tr><td>A3</td><td>-</td><td>0.40</td><td>-</td></tr><tr><td>A4</td><td>-</td><td>0.80</td><td>-</td></tr><tr><td>b</td><td>0.35</td><td>-</td><td>0.49</td></tr><tr><td>b1</td><td>0.80</td><td>0.85</td><td>0.90</td></tr><tr><td>c</td><td>0.17</td><td>-</td><td>0.25</td></tr><tr><td>D</td><td>9.20</td><td>9.30</td><td>9.40</td></tr><tr><td>D1</td><td>2.69</td><td>2.74</td><td>2.79</td></tr><tr><td>D2</td><td>1.43</td><td>1.48</td><td>1.53</td></tr><tr><td>D3</td><td>3.11</td><td>3.16</td><td>3.21</td></tr><tr><td>D4</td><td>2.69</td><td>2.74</td><td>2.79</td></tr><tr><td>D5</td><td>2.57</td><td>2.62</td><td>2.67</td></tr><tr><td>D6</td><td colspan="3">0.54 REF</td></tr><tr><td>D7</td><td colspan="3">0.96 REF</td></tr><tr><td>D8</td><td colspan="3">1.08 REF</td></tr><tr><td>D9</td><td colspan="3">0.86 REF</td></tr><tr><td>D10</td><td colspan="3">2.32 REF</td></tr><tr><td>E</td><td>8.38</td><td>8.43</td><td>8.48</td></tr><tr><td>E1</td><td>6.20</td><td>6.30</td><td>6.40</td></tr><tr><td>E2</td><td>2.77</td><td>2.82</td><td>2.87</td></tr><tr><td>E3</td><td>2.16</td><td>2.21</td><td>2.26</td></tr><tr><td>E4</td><td>3.56</td><td>3.61</td><td>3.66</td></tr><tr><td>E5</td><td>0.86</td><td>0.91</td><td>0.96</td></tr><tr><td>E6</td><td>1.38</td><td>1.43</td><td>1.48</td></tr><tr><td>E7</td><td colspan="3">0.96 REF</td></tr><tr><td>E8</td><td colspan="3">1.74 REF</td></tr><tr><td>E9</td><td colspan="3">3.15 REF</td></tr><tr><td>E10</td><td colspan="3">2.54 REF</td></tr><tr><td>E11</td><td colspan="3">1.55 REF</td></tr><tr><td>e</td><td colspan="3">1.00BSC</td></tr><tr><td>e1</td><td colspan="3">2.10BSC</td></tr><tr><td>e2</td><td colspan="3">0.40BSC</td></tr><tr><td>e3</td><td colspan="3">2.20BSC</td></tr><tr><td>e4</td><td colspan="3">1.40BSC</td></tr><tr><td>e5</td><td colspan="3">0.55BSC</td></tr><tr><td>e6</td><td colspan="3">0.45BSC</td></tr><tr><td>L</td><td>0.40</td><td>-</td><td>0.80</td></tr><tr><td>x1</td><td>1.18</td><td>1.28</td><td>1.38</td></tr><tr><td>y1</td><td>1.18</td><td>1.28</td><td>1.38</td></tr></table>

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev.0.1</td><td>2026/03</td><td>Preliminary</td></tr><tr><td>Rev.0.11</td><td>2026/04</td><td>更新部分 EC-Table 参数以及描述</td></tr></table>



## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任

## 电子器件报废说明

该产品在生命周期结束后，由客户按照一般电子产品的报废流程进行处理。