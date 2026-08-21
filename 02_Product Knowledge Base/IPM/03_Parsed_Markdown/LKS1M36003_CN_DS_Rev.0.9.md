## 概述

LKS1M36003 是一款智能且高可靠性的半桥功率模块，内部集成一颗高压专用驱动芯片及两颗高性能快恢复 FR-MOSFET，特别适用于直流无刷电机。低侧MOSFET 源极开路用于电流采样。信号输入内部包含施密特触发器，逻辑电平兼容3.3V/5V/15V。模块同时集成了欠压保护、过温保护、硬件过流保护、输出死区、输入信号互锁等保护功能。

LKS1M36003 采用 ESOP-13T 封装。

![](images/70b6232b219820a8e301576985f65d66c71c4b4cb81e6b514fb7c779c5548a42.jpg)

## 特点

◼ 集成高性能 600V/3A FR-MOSFET

◼ 短路时间＞5μs

◼ 内部集成自举二极管和限流电阻

◼ 高低压电气间隙＞2mm

◼ 抗瞬态负电压能力强

◼ 输入逻辑兼容 3.3V, 5V 及 15V 电平

◼ 高侧和低侧均集成欠压保护功能

◼ 输入信号互锁及内置死区，均防止上下管直通

◼ FO/SD异常状态输出/外部关机控制

◼ 硬件过流保护(OCP)，过温保护(OTP)

◼ ESOP13 封装，低热阻，高散热能力

![](images/03c092bade934e00f693af00214c814829509d6ac1ea1f5bac3058e973c87c0e.jpg)  
图 1. LKS1M36003 典型应用图

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>印章</td></tr><tr><td>LKS1M36003</td><td>ESOP-13T</td><td>编带2500 PCS/盘</td><td>LKS1M36003XXXXXYZZZZWWX</td></tr></table>

![](images/d4bc07f64eba72b745771251731c00c7225d5ccdb5d5ca96b8d05b29beed7ea7.jpg)

## 管脚封装

![](images/73c9502a5856429ad7640268bcb304ef20ef349d4404859f0e950f712fece13e.jpg)  
LKS1M36003：产品型号  
XXXXXYX：批号  
ZZZZ：标识  
图 2. LKS1M36003 管脚封装图

WW：周号

X：特殊代码

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>VB</td><td>高侧桥臂供电端</td></tr><tr><td>2</td><td>HIN</td><td>高侧逻辑信号输入端</td></tr><tr><td>3</td><td>LIN</td><td>低侧逻辑信号输入端</td></tr><tr><td>4,5</td><td>GND</td><td>接地端</td></tr><tr><td>6</td><td>VCC</td><td>低侧供电端</td></tr><tr><td>7</td><td>CSC</td><td>硬件过流保护输入端,如未使用需要接地</td></tr><tr><td>8</td><td>FO/SD</td><td>异常信号输出和关机信号输入端,内部通过540kΩ电阻上拉到5V</td></tr><tr><td>9</td><td>N</td><td>低侧MOSFET的源极端</td></tr><tr><td>10,11</td><td>VS</td><td>相电压输出端</td></tr><tr><td>12,13</td><td>P</td><td>高压直流供电端</td></tr><tr><td>14(衬底)</td><td>VS</td><td>相电压输出端</td></tr><tr><td>15(衬底)</td><td>P</td><td>高压直流供电端</td></tr></table>

![](images/1ac8d4a932d276709d0748a43375adcf390acf48a492180e6ea600b50abd8f6e.jpg)

内部结构框图  
![](images/24df2213e0c313bb5a15bd05fcfa419c2f67db606bb59ff0299a6e7688c733d4.jpg)  
图 3. LKS1M36003 内部结构框图

## 极限参数(注 1)(无特别说明情况下， ${ \bar { \mathsf { T } } } _ { \mathsf { A } } { = } 2 5 ^ { \circ } \mathsf { C } )$

逆变部分

<table><tr><td>符号</td><td>参数</td><td>条件</td><td>参数范围</td><td>单位</td></tr><tr><td> $V_{DSS}$ </td><td>MOSFET的漏源电压</td><td> $I_{DSS}=250uA$ </td><td>600</td><td>V</td></tr><tr><td rowspan="2"> $I_D$ </td><td rowspan="2">MOSFET连续工作电流(注2)</td><td> $T_C=25°C$ </td><td>3</td><td>A</td></tr><tr><td> $T_C=100°C$ </td><td>1.89</td><td>A</td></tr><tr><td> $P_D$ </td><td>最大耗散功耗</td><td>单颗MOSFET( $T_C=100°C$ )</td><td>50</td><td>W</td></tr></table>

控制部分

<table><tr><td>符号</td><td>参数</td><td>条件</td><td>参数范围</td><td>单位</td></tr><tr><td> $V_{CC}$ </td><td>低侧供电电压</td><td>VCC和GND两端电压</td><td>-0.3~20</td><td>V</td></tr><tr><td> $V_{BS}$ </td><td>高侧供电电压</td><td>VB和VS两端电压</td><td>-0.3~20</td><td>V</td></tr><tr><td> $V_{LIN/HIN}$ </td><td>逻辑信号输入电压</td><td>LIN/HIN和GND两端电压</td><td>-0.3~ $V_{CC}$ +0.3</td><td>V</td></tr><tr><td> $V_{CSC}$ </td><td>过流检测信号输入</td><td>CSC和GND两端电压</td><td>-0.3~ $V_{CC}$ +0.3</td><td>V</td></tr><tr><td> $V_{FO/SD}$ </td><td>异常信号输出和关机信号输入</td><td>FO/SD和GND两端电压</td><td>-0.3~ $V_{CC}$ +0.3</td><td>V</td></tr></table>

热阻

<table><tr><td>符号</td><td>参数</td><td>条件</td><td>参数范围</td><td>单位</td></tr><tr><td> $R_{thJC\_TOP}$ </td><td>结到顶部壳的热阻</td><td>同逆变部分操作条件</td><td>20</td><td>°C/W</td></tr><tr><td> $R_{thJC\_BOTTOM}$ </td><td>结到底部壳的热阻</td><td>同逆变部分操作条件</td><td>1</td><td>°C/W</td></tr><tr><td> $R_{thJA}$ </td><td>结到外部环境的热阻</td><td>同逆变部分操作条件</td><td>78</td><td>°C/W</td></tr></table>

系统

<table><tr><td>符号</td><td>参数</td><td>条件</td><td>参数范围</td><td>单位</td></tr><tr><td> $T_{J}$ </td><td>工作结温</td><td></td><td>-40~150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>储存温度</td><td></td><td>-40~125</td><td>°C</td></tr></table>

ESD

<table><tr><td>符号</td><td>参数</td><td>条件</td><td>参数范围</td><td>单位</td></tr><tr><td>HBM</td><td>人体放电模式</td><td></td><td>±2000</td><td>V</td></tr><tr><td>CDM</td><td>元件充电模式</td><td></td><td>±2000</td><td>V</td></tr><tr><td>MM</td><td>机器放电模式</td><td></td><td>±200</td><td>V</td></tr></table>

注 1：极限参数是指超出该范围，有可能导致器件永久性损坏。  
注 2：受最大结温限制。

推荐工作条件(注 3) (无特别说明情况下，T<sub>A</sub>=25℃)

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td> $V_{PN}$ </td><td>高压供电电压</td><td>PN 脚之间</td><td>-</td><td>300</td><td>400</td><td>V</td></tr><tr><td> $V_{CC}$ </td><td>低侧供电电压</td><td>VCC 和 GND 脚之间</td><td>13.5</td><td>15.0</td><td>16.5</td><td>V</td></tr><tr><td> $V_{BS}$ </td><td>高侧供电电压</td><td>VB 和 VS 脚之间</td><td>13.5</td><td>15.0</td><td>16.5</td><td>V</td></tr><tr><td> $V_{LIN/HIN(ON)}$ </td><td>输入开通电压阈值</td><td>LIN/HIN 和 GND 脚之间</td><td>3.0</td><td>-</td><td> $V_{CC}$ </td><td>V</td></tr><tr><td> $V_{LIN/HIN(OFF)}$ </td><td>输入关断电压阈值</td><td>LIN/HIN 和 GND 脚之间</td><td>0</td><td>-</td><td>0.4</td><td>V</td></tr><tr><td> $T_{LIN/HIN_MIN}$ </td><td>LIN/HIN 最小输入脉宽</td><td>LIN/HIN 脉冲宽度(高电平和低电平)</td><td>1.0</td><td></td><td></td><td>μs</td></tr><tr><td> $T_{DEAD}$ </td><td>死区时间</td><td> $V_{CC}=V_{BS}=13.0\sim20.0V$ </td><td>1.0</td><td>-</td><td>-</td><td>μs</td></tr><tr><td> $F_{PWM}$ </td><td>PWM 开关频率</td><td> $T_J<150°C$ </td><td>-</td><td>20</td><td>-</td><td>kHz</td></tr><tr><td> $T_C$ </td><td>MOS 顶部外壳温度</td><td></td><td></td><td></td><td>100</td><td>°C</td></tr><tr><td> $T_J$ </td><td>MOS 器件结温</td><td></td><td></td><td></td><td>125</td><td>°C</td></tr></table>

注 3：在推荐的工作条件下，可以保证器件长期可靠的工作。

电气参数 (无特别说明情况下， $\mathsf { T } _ { \mathsf { A } } = 2 5 ^ { \circ } \mathsf { C } )$

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">逆变部分</td></tr><tr><td> $BV_{DSS}$ </td><td>MOS漏源击穿电压</td><td> $V_{cc}=0V, I_D=250μA$ </td><td>600</td><td></td><td></td><td>V</td></tr><tr><td> $I_{DSS}$ </td><td>MOS漏源漏电流</td><td> $V_{cc}=0V, V_{DS}=600V$ </td><td></td><td></td><td>10</td><td>μA</td></tr><tr><td> $V_{SD}$ </td><td>体二极管正向导通电压</td><td> $V_{LIN/HIN}=0V, I_D=-0.5A$ </td><td></td><td></td><td>1</td><td>V</td></tr><tr><td> $R_{DS(ON)}$ </td><td>MOS管导通阻抗</td><td> $V_{CC}=15V, V_{LIN/HIN}=5V, I_D=0.5A$ </td><td></td><td>2.5</td><td>3.4</td><td>Ω</td></tr><tr><td> $T_{ON}$ </td><td rowspan="8">开关过程</td><td rowspan="8"> $V_{PN}=400V, I_D=3A, V_{LIN/HIN}=0~5V, 感性负载 L=2.8mH 高侧和低侧 MOSFET 开关$ </td><td></td><td>990</td><td></td><td>ns</td></tr><tr><td>\(T_{OFF}</td><td></td><td>610</td><td></td><td>ns</td></tr><tr><td> $Irr$ </td><td></td><td>2.3</td><td></td><td>A</td></tr><tr><td> $T_{rr}$ </td><td></td><td>150</td><td></td><td>ns</td></tr><tr><td> $T_r$ </td><td></td><td>80</td><td></td><td>ns</td></tr><tr><td> $T_f$ </td><td></td><td>20</td><td></td><td>ns</td></tr><tr><td> $E_{ON}$ </td><td></td><td>210</td><td></td><td>μJ</td></tr><tr><td> $E_{OFF}$ </td><td></td><td>10</td><td></td><td>μJ</td></tr><tr><td colspan="7">控制部分</td></tr><tr><td> $I_{QCC}$ </td><td> $V_{CC}$ 静态供电电流</td><td> $V_{CC}=15V, V_{LIN/HIN}=0V$ </td><td>280</td><td>330</td><td>420</td><td>μA</td></tr><tr><td> $I_{QBS}$ </td><td> $V_{BS}$ 静态供电电流</td><td> $V_{BS}=15V, V_{LIN/HIN}=0V$ </td><td>30</td><td>80</td><td>150</td><td>μA</td></tr><tr><td> $V_{CC_ON}$ </td><td rowspan="2"> $V_{CC}$ 和 $V_{BS}$ 正常工作电压阈值</td><td rowspan="2"></td><td>9.55</td><td>9.89</td><td>10.8</td><td>V</td></tr><tr><td> $V_{BS_ON}$ </td><td>10.05</td><td>10.4</td><td>11.05</td><td>V</td></tr><tr><td> $V_{CC_UVLO}$ </td><td rowspan="2"> $V_{CC}$ 和 $V_{BS}$ 欠压保护电压阈值</td><td rowspan="2"></td><td>8.55</td><td>8.87</td><td>9.8</td><td>V</td></tr><tr><td> $V_{BS_UVLO}$ </td><td>8.65</td><td>9.14</td><td>9.95</td><td>V</td></tr><tr><td> $V_{CC_HYS}$ </td><td rowspan="2"> $V_{CC}$ 和 $V_{BS}$ 电压滞环</td><td rowspan="2"></td><td></td><td>1</td><td></td><td>V</td></tr><tr><td> $V_{BS_HYS}$ </td><td></td><td>1.2</td><td></td><td>V</td></tr><tr><td> $t_{UVFLT}$ </td><td> $V_{CC}$ 和 $V_{BS}$ 欠压保护滤波时间</td><td></td><td></td><td>5</td><td></td><td>μs</td></tr><tr><td> $V_{IH}$ </td><td>HIN/LIN开通电压阈值</td><td>逻辑高电平</td><td>2.5</td><td></td><td></td><td>V</td></tr><tr><td> $V_{IL}$ </td><td>HIN/LIN关断电压阈值</td><td>逻辑低电平</td><td></td><td></td><td>0.8</td><td>V</td></tr><tr><td> $V_{SDH}$ </td><td> $\overline{SD}$ 开通电压阈值</td><td>逻辑高电平</td><td>2.5</td><td></td><td></td><td>V</td></tr><tr><td> $V_{SDL}$ </td><td> $\overline{SD}$ 关断电压阈值</td><td>逻辑低电平</td><td></td><td></td><td>0.8</td><td>V</td></tr><tr><td> $V_{FO}$ </td><td>FO工作电压</td><td> $T_J=25°C$ </td><td></td><td>5.23</td><td></td><td>V</td></tr><tr><td> $I_{FO}$ </td><td>外部上拉灌电流</td><td> $V_{FO}=20V$ </td><td></td><td>27</td><td></td><td>μA</td></tr><tr><td> $V_{sc(REF)}$ </td><td>过流保护阈值</td><td></td><td>0.43</td><td>0.47</td><td>0.53</td><td>V</td></tr><tr><td> $t_{CINFLT}$ </td><td>CSC过流检测前置滤波</td><td></td><td></td><td>400</td><td></td><td>ns</td></tr><tr><td> $t_{CTFD}$ </td><td>CSC 过流信号检测到 FO 故障输出延时</td><td></td><td></td><td>680</td><td></td><td>ns</td></tr><tr><td> $t_{FOD}$ </td><td>异常输出下拉保持时间</td><td></td><td>70</td><td></td><td></td><td>μs</td></tr><tr><td>DT</td><td>内置死区时间</td><td></td><td></td><td>500</td><td></td><td>ns</td></tr><tr><td colspan="7">自举二极管</td></tr><tr><td> $V_{F-BSD}$ </td><td>前向导通压降</td><td> $I_F=1mA$ </td><td></td><td>0.7</td><td></td><td>V</td></tr><tr><td> $R_{BSD}$ </td><td>等效导通电阻</td><td></td><td></td><td>100</td><td></td><td>Ω</td></tr><tr><td colspan="7">过温保护</td></tr><tr><td> $T_{OTP}$ </td><td>过温保护阈值</td><td></td><td></td><td>140</td><td></td><td>°C</td></tr><tr><td> $T_{HYS}$ </td><td>过温保护迟滞</td><td></td><td></td><td>30</td><td></td><td>°C</td></tr></table>

![](images/b387e87d690a1aea2c3eadfd8dc63d071fc2775d05eb93caf9c221e585e230d3.jpg)  
图 4. 典型应用电路图  
应用设计人员可根据产品规格，自由选择不同的方案。

## 设计指南：

输入信号HIN、LIN均为高电平有效逻辑。为避免输入信号震荡产生误动作，输入布线应尽可能短，并建议在每个输入信号上使用RC 滤波器（R2，C2）。滤波器的时间常数应约为100ns，并尽可能靠近IPM输入引脚放置。

使用旁路电容CE2（铝电解或钽）可以减少对电源的瞬态电流需求。推荐的CE2容值范围为 10uF 或更大。此外，为了减小电源线上的高频开关噪声，在尽量靠近VCC 引脚处放置去耦电容C3（100 至220nF，具有低ESR和低ESL）,与旁路电容并联使用。

◆ 为防止保护电路故障，推荐使用 RC滤波器（R3，C5），时间常数（R3 x C5）应设置为1.5\~3μs，并且滤波器必须尽可能靠近OCP引脚放置。

◆ FO/SD 是输入/输出引脚（如果用作输出，则为开漏输出）。当 $F O / \overline { { \mathsf { S D } } }$ 开启下拉时，推荐流过 R1 的电流为1mA。电容C1 的容值范围为 1nF至100nF。电容越大， $F O / \overline { { \mathsf { S D } } }$ 引脚的关断保持时间越长。此外，C1滤波器应尽量靠近 FO/SD 引脚放置。

◆ 去耦电容C4（容值范围100至220nF，低ESR和低 ESL的陶瓷贴片电容）与每个 CE1 并联，用于滤除高频干扰。CE1 的推荐容值在10μF和47μFF之间。CE1 和C4 应尽可能靠近VS和 VB引脚放置。自举电路的负端应尽可能短的直接连到VS 引脚，并远离主输出线。

◆ 为了避免 VCC 引脚上的过压，可以使用稳压二极管（DZ2）。同样，在 VB 引脚上，每个 CE1 上可并联放置稳压二极管（DZ1）。

◆ 使用去耦电容C6（100至 220nF，低ESR和低ESL）与电解电容 CE3 并联，可有效防止浪涌电压的破坏。两个电容C6和CE3应尽可能靠近 IPM放置（C6优先于CE3）

◆ N 引脚到限流电阻及限流电阻到 PGND 的布线应尽可能短，能有效减小故障的发生。

◆ 信号 SGND 与功率 PGND 推荐使用单点连接，可以减小控制信号受到功率地波动的影响。

由于FO/SD管脚内部增加540kΩ上拉到5V，外部的上拉可以省去，不会影响功能。（如果为了减少电路改动，保留外部上拉也可行。）

## 功能描述

## 输入输出真值表

<table><tr><td>HIN</td><td>LIN</td><td>输出(U/V/W)</td><td>描述</td></tr><tr><td>0</td><td>0</td><td>Hi-Z</td><td>高阻态,高低侧均关断</td></tr><tr><td>0</td><td>1</td><td>0</td><td>低侧导通,高侧关断</td></tr><tr><td>1</td><td>0</td><td> $V_P$ </td><td>高侧导通,低侧关断</td></tr><tr><td>1</td><td>1</td><td>Hi-Z</td><td>禁止输入同时为高,低侧和高侧均关断</td></tr><tr><td>开路</td><td>开路</td><td>Hi-Z</td><td>信号输入内部下拉 5kΩ电阻,高低侧均关断</td></tr></table>

## 开关过程定义

![](images/347a6b1d7ff5c2e33f433fa090db01ea503c517230a39541c135c6eb9f8ea475.jpg)  
图 5. 开关过程时间定义

## 过流保护功能

![](images/8be802543e059fe3ee529d85783da9387b367c49dcb97480eb4391da9dcdeeb6.jpg)  
图 6. 过流保护功能

## 过流保护功能逻辑：

CSC引脚用于检测采样电阻两端电压，当CSC引脚上电压超过0.48V时, LKS1M36003会将FO/SD引脚拉低并保持65uS时间后恢复工作。在FO/SD持续为低期间，无论LIN与HIN引脚输入什么信号，模块高低侧输出均保持关闭状态。如果不需要使用硬件过流保护功能，则将CSC引脚就近接至模块的GND端，防止噪声干扰。

## 外部关断控制(SD)

![](images/855875f9d421c06045dd7ef81f87c8cd0f93d71f75b5a3728befc0bf3016f055.jpg)  
图 7. 外部信号 Shutdown 功能

## 外部关断控制(SD)逻辑:

复用引脚FO/SD输入低电平，IPM 模块立即关闭高侧和低侧MOS；复用引脚FO/SD输入高电平，IPM模块低侧MOS 立即响应LIN输入电平的信号工作，高侧 MOS需要等待下一个HIN 周期上升沿开始工作。

## 过温保护功能

![](images/d4111dc79c137d9ca1539e3a00d1b59b5183c931e4273595398a95cf3fc7c646.jpg)  
图 8. 过温保护功能

过温保护功能逻辑：

LKS1M36003 内部集成了过温保护关断电路，触发关断功能的逻辑时序如图8 所示。触发保护时 (例：输出过载导致的耗散功率增加, 芯片所处的环境温度上升等)，芯片同时关断高侧和低侧的功率管输出。当IPM工作时的温度达到热关断电路的触发温度(内部HVIC触发140℃)时，热关断电路被激活，输出被关断；当 HVIC电路检测到温度下降到释放温度阈值(110℃)或更低的温度时，IPM 的输出关断状态被解除，输出会根据输入控制逻辑信号正常工作。

封装信息

![](images/5a764d619ffbfe2b7f77d1afe8358d2da616a83c7b3d2e2a35c822466c1d924c.jpg)

TOP VIEW  
![](images/415725fc00c480709b7bb31a75ddefc9bdb80e7499efe2a30aa8adbae1457eba.jpg)

![](images/62521778faf570942a5d36f8d4adbc1f9440566a9795f13a4fada5e4b479dc05.jpg)  
SIDE VIEW

ESOP-13T 封装外形尺寸  
![](images/54e936ccf392584bee2d13940736df405d39c72134fc446858eda91a443534cb.jpg)

BOTTOM VIEW  
![](images/fba2fcc2a9f56ae8c3818d655df946c9deb5002c4e5761c63548070a9cd2e0bc.jpg)

COMMON DIMENSIONS (UNITS OF MEASURE=MILLIMETER)

<table><tr><td>SYMBOL</td><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A1</td><td>0.020</td><td>-</td><td>0.120</td></tr><tr><td>A2</td><td>1.370</td><td>-</td><td>1.570</td></tr><tr><td>A3</td><td>0.600</td><td>0.650</td><td>0.700</td></tr><tr><td>b</td><td>0.380</td><td>-</td><td>0.460</td></tr><tr><td>b1</td><td>0.370</td><td>0.400</td><td>0.430</td></tr><tr><td>b2</td><td>2.050</td><td>2.100</td><td>2.150</td></tr><tr><td>c</td><td>0.193</td><td>-</td><td>0.253</td></tr><tr><td>c1</td><td>0.170</td><td>0.203</td><td>0.230</td></tr><tr><td>D</td><td>8.900</td><td>9.000</td><td>9.100</td></tr><tr><td>D1</td><td>2.845</td><td>2.945</td><td>3.045</td></tr><tr><td>D2</td><td>1.340</td><td>1.440</td><td>1.540</td></tr><tr><td>D3</td><td>0.310</td><td>0.410</td><td>0.510</td></tr><tr><td>D4</td><td>0.560</td><td>0.660</td><td>0.760</td></tr><tr><td>D5</td><td>0.745</td><td>0.845</td><td>0.945</td></tr><tr><td>E</td><td>7.400</td><td>7.500</td><td>7.600</td></tr><tr><td>E1</td><td>10.240</td><td>10.340</td><td>10.440</td></tr><tr><td>E2</td><td>3.018</td><td>3.118</td><td>3.218</td></tr><tr><td>E3</td><td>3.218</td><td>3.318</td><td>3.418</td></tr><tr><td>E4</td><td>4.018</td><td>4.118</td><td>4.218</td></tr><tr><td>E5</td><td>3.250</td><td>3.350</td><td>3.450</td></tr><tr><td>E6</td><td>3.050</td><td>3.150</td><td>3.250</td></tr><tr><td>E7</td><td>2.250</td><td>2.350</td><td>2.450</td></tr><tr><td>E8</td><td>0.932</td><td>1.032</td><td>1.132</td></tr><tr><td>E9</td><td>2.240</td><td>2.290</td><td>2.340</td></tr><tr><td>e</td><td>0.750</td><td>0.800</td><td>0.850</td></tr><tr><td>e1</td><td>2.350</td><td>2.400</td><td>2.450</td></tr><tr><td>e2</td><td>4.140</td><td>4.190</td><td>4.240</td></tr><tr><td>e3</td><td>4.940</td><td>4.990</td><td>5.040</td></tr><tr><td>e4</td><td>2.040</td><td>2.090</td><td>2.140</td></tr><tr><td>e5</td><td>1.950</td><td>2.000</td><td>2.050</td></tr><tr><td>e6</td><td>-0.020</td><td>0.030</td><td>0.080</td></tr><tr><td>F</td><td>9.000</td><td>-</td><td>9.400</td></tr><tr><td>L</td><td>0.620</td><td>0.720</td><td>0.820</td></tr><tr><td>L1</td><td>1.320</td><td>1.420</td><td>1.520</td></tr><tr><td></td><td colspan="3">两边L1差值:0.15 MAX</td></tr><tr><td>L2</td><td colspan="3">0.25 BSC</td></tr><tr><td>R</td><td>0.10</td><td>-</td><td>-</td></tr><tr><td>h</td><td>0.35</td><td>0.40</td><td>0.45</td></tr><tr><td>θ1</td><td>15°</td><td>17°</td><td>19°</td></tr><tr><td>θ2</td><td>11°</td><td>13°</td><td>15°</td></tr><tr><td>θ3</td><td>15°</td><td>17°</td><td>19°</td></tr><tr><td>θ4</td><td>11°</td><td>13°</td><td>15°</td></tr><tr><td>θ5</td><td>0°</td><td>3°</td><td>6°</td></tr><tr><td>φ</td><td>0.90</td><td>1.00</td><td>1.10</td></tr><tr><td>x1</td><td>1.50</td><td>1.60</td><td>1.70</td></tr><tr><td>y1</td><td>1.70</td><td>1.80</td><td>1.90</td></tr></table>

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev.0.1</td><td>2025/02</td><td>Preliminary</td></tr><tr><td>Rev.0.11</td><td>2025/04</td><td>新增典型应用电路图及设计指南</td></tr><tr><td>Rev.0.12</td><td>2025/08</td><td>更新内部框图、部分电气参数以及保护逻辑框图</td></tr><tr><td>Rev.0.9</td><td>2026/07</td><td>更新部分电气参数</td></tr></table>

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任

## 电子器件报废说明

该产品在生命周期结束后，由客户按照一般电子产品的报废流程进行处理。