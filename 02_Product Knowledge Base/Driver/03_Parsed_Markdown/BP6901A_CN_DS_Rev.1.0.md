## 概述

BP6901A 是用于功率 MOSFET 和 IGBT 的半桥栅极驱动芯片。它具有一个高侧和一个低侧输入通道，以及两个具有内部死区时间的输出通道，以避免直通。

输入逻辑电平兼容 3.3V/5V/15V 信号。浮动高侧通道可以驱动 600V N 沟道功率 MOSFET 或 IGBT.

![](images/d18bb6e4a685bdc5cb61d649ad82817264da4cbb69aeb96f6f74f7f1ee8be820.jpg)

## 特点

◼ 高侧驱动浮动电源设计，最高耐压 600V

◼ 对于负的瞬态电压具有高鲁棒性

◼ 10V \~ 20V 栅极驱动电源电压

◼ 支持 3.3V/5V/15V 输入逻辑

◼ 高低侧欠压保护功能

◼ 内置 100ns 死区时间

◼ 支持 SOP8 封装

## 典型应用

![](images/b61d9ad9a228c798cfd88f8333861018fbe6d3395268589570a1362822ff389d.jpg)  
图 1 BP6901A 典型应用电路

定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP6901A</td><td>SOP8</td><td>卷盘4,000 只/盘</td><td>BP6901XXXXYAXXWWX</td></tr></table>

## 管脚封装

![](images/1aff83d52b0158f7c54831fb6b956960d686ce78913c89b1b195bdd3c7dbba52.jpg)  
图 2 管脚封装图

BP6901A：产品型号

XXXXXYX: 批次号

XX: 工厂代码

WW：周号

X：特殊代码

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>VCC</td><td>芯片工作电源输入端</td></tr><tr><td>2</td><td>HIN</td><td>高侧逻辑输入</td></tr><tr><td>3</td><td>LIN</td><td>低侧逻辑输入</td></tr><tr><td>4</td><td>COM</td><td>低侧驱动地</td></tr><tr><td>5</td><td>LO</td><td>低侧输出,控制低侧 MOS 的开通与截止</td></tr><tr><td>6</td><td>VS</td><td>高侧悬浮地</td></tr><tr><td>7</td><td>HO</td><td>高侧输出,控制高侧 MOS 的开通与截止</td></tr><tr><td>8</td><td>VB</td><td>高侧悬浮电源</td></tr></table>

极限参数(注 1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td> $V_B$ </td><td>高侧浮动电源电压</td><td>-0.3 ~ 625</td><td>V</td></tr><tr><td> $V_S$ </td><td>高侧电源基准电压</td><td> $V_B - 25 ~ V_B + 0.3$ </td><td>V</td></tr><tr><td> $V_{HO}$ </td><td>高侧驱动输出电压</td><td> $V_S - 0.3 ~ V_B + 0.3$ </td><td>V</td></tr><tr><td> $V_{CC}$ </td><td>低侧驱动及逻辑电源电压</td><td>-0.3 ~ 25</td><td>V</td></tr><tr><td> $V_{LO}$ </td><td>低侧驱动输出电压</td><td>-0.3 ~  $V_{CC} + 0.3$ </td><td>V</td></tr><tr><td> $V_{IN}$ </td><td>逻辑输入电压(HIN/ LIN)</td><td>-0.3 ~  $V_{CC} + 0.3$ </td><td>V</td></tr><tr><td> $dV_s/dt$ </td><td>开关电压摆率</td><td>50</td><td>V/ns</td></tr><tr><td> $P_{DMAX}$ </td><td>封装功率耗散(注 2)</td><td>0.625</td><td>W</td></tr><tr><td> $θ_{JA}$ </td><td>结对环境热阻</td><td>200</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>结温范围</td><td>-40 ~ 150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>存储温度范围</td><td>-55 ~ 150</td><td>°C</td></tr><tr><td>ESD</td><td>静电放电(注 3)</td><td>2</td><td>KV</td></tr></table>

注 1：超过“绝对最大额定值”的压力可能会对设备造成永久性损坏。在“推荐操作条件”下，设备运行是有保证的，但某些特定参数可能无法实现。电气特性表规定了设备的工作范围，通过测试程序确定了设备在直流和交流电压下的电气特性。对于EC 表中没有最小值和最大值的参数，以典型值定义操作范围，其精度不受规格的保证。  
注 2：最大功耗随温度升高而降低，由 TJMAX、θJA和环境温度（TA）决定。最大功率耗散为PDMAX = (TJMAX - TA) /θJA与最大值表中所列数值之间的较低者  
注 3：人体放电模式，100pF电容在1.5kΩ电阻上放电

推荐工作范围（无特别说明情况下， ${ \bar { \mathsf { T } } } _ { \mathsf { A } } = 2 5 ^ { \circ } { \mathsf { C } } )$

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td> $V_B$ </td><td>高侧浮动电源电压</td><td> $V_S + 10 \sim V_S + 20$ </td><td>V</td></tr><tr><td> $V_S$ </td><td>高侧电源基准电压</td><td>-5 ~ 600</td><td>V</td></tr><tr><td> $V_{HO}$ </td><td>高侧驱动输出电压</td><td> $V_S \sim V_B$ </td><td>V</td></tr><tr><td> $V_{CC}$ </td><td>低侧驱动及逻辑电源电压</td><td>10 ~ 20</td><td>V</td></tr><tr><td> $V_{LO}$ </td><td>低侧驱动输出电压</td><td>0 ~  $V_{CC}$ </td><td>V</td></tr><tr><td> $V_{IN}$ </td><td>逻辑输入电压(HIN/ LIN)</td><td>0 ~  $V_{CC}$ </td><td>V</td></tr></table>

电气参数(注 4)（无特别说明情况下， $\mathsf { V } _ { C C } = \mathsf { V } _ { 8 5 } = 1 5 \mathsf { V } , \mathsf { T } _ { \mathsf { A } } = 2 5 ^ { \circ } \mathsf { C } )$

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">静态电气参数</td></tr><tr><td> $V_{CC\_ON}$ </td><td rowspan="2"> $V_{CC}$ 和 $V_{BS}$ 欠压保护释放电压</td><td rowspan="2"></td><td rowspan="2">8</td><td rowspan="2">8.8</td><td rowspan="2">9.8</td><td rowspan="2">V</td></tr><tr><td> $V_{BS\_ON}$ </td></tr><tr><td> $V_{CC\_UVLO}$ </td><td rowspan="2"> $V_{CC}$ 和 $V_{BS}$ 欠压保护电压</td><td rowspan="2"></td><td rowspan="2">7.2</td><td rowspan="2">8.0</td><td rowspan="2">8.8</td><td rowspan="2">V</td></tr><tr><td> $V_{BS\_UVLO}$ </td></tr><tr><td> $V_{CC\_HYS}$ </td><td rowspan="2"> $V_{CC}$ 和 $V_{BS}$ 欠压保护迟滞电压</td><td rowspan="2"></td><td rowspan="2">0.5</td><td rowspan="2">0.8</td><td rowspan="2">1.2</td><td rowspan="2">V</td></tr><tr><td> $V_{BS\_HYS}$ </td></tr><tr><td> $I_{QCC}$ </td><td> $V_{CC}$ 静态电流</td><td>HIN=LIN=0V</td><td></td><td>200</td><td>300</td><td>uA</td></tr><tr><td> $I_{QBS}$ </td><td> $V_{BS}$ 静态电流</td><td>HIN=LIN=0V</td><td></td><td>50</td><td>100</td><td>uA</td></tr><tr><td> $I_{LK}$ </td><td>浮动电源漏电流</td><td> $V_{HO}=V_{B}=V_{S}=620V$ </td><td></td><td></td><td>50</td><td>uA</td></tr><tr><td> $V_{IH}$ </td><td>逻辑“1”输入电平</td><td></td><td>2.8</td><td></td><td></td><td>V</td></tr><tr><td> $V_{IL}$ </td><td>逻辑“0”输入电平</td><td></td><td></td><td></td><td>0.45</td><td>V</td></tr><tr><td> $I_{ISOURCE}$ </td><td>逻辑“1”输入偏置电流</td><td>HIN, LIN=5V</td><td></td><td>5</td><td>10</td><td>uA</td></tr><tr><td> $I_{ISINK}$ </td><td>逻辑“0”输入偏置电流</td><td>HIN, LIN=0V</td><td></td><td></td><td>1.0</td><td>uA</td></tr><tr><td> $V_{OH}$ </td><td>高电平输出电压</td><td> $I_{O}=20mA$ </td><td></td><td></td><td>1.0</td><td>V</td></tr><tr><td> $V_{OL}$ </td><td>低电平输出电压</td><td> $I_{O}=20mA$ </td><td></td><td></td><td>1.0</td><td>V</td></tr><tr><td> $I_{O+}$ </td><td>高电平输出短路脉冲电流</td><td> $V_{O}=0V (V_{IN}=5V,V_{O}短路脉宽<10us)$ </td><td>130</td><td>210</td><td></td><td>mA</td></tr><tr><td> $I_{O-}$ </td><td>低电平输出短路脉冲电流</td><td> $V_{O}=15V (V_{IN}=0V,V_{O}短路脉宽<10us)$ </td><td>240</td><td>320</td><td></td><td>mA</td></tr><tr><td colspan="7">动态电气参数( $C_L$ =1nF)</td></tr><tr><td> $t_{on}$ </td><td>导通传输延迟</td><td> $V_S$ =0V</td><td></td><td>250</td><td>350</td><td rowspan="6">ns</td></tr><tr><td> $t_{off}$ </td><td>关断传输延迟</td><td> $V_S$ =0V or 600V</td><td></td><td>150</td><td>250</td></tr><tr><td> $t_r$ </td><td>输出上升时间</td><td></td><td></td><td>100</td><td>170</td></tr><tr><td> $t_f$ </td><td>输出下降时间</td><td></td><td></td><td>50</td><td>90</td></tr><tr><td>DT</td><td>死区时间</td><td></td><td>50</td><td>100</td><td>150</td></tr><tr><td>MT</td><td>高低侧传输延迟匹配</td><td> $t_{on}$ &amp; $t_{off}$ for(HS-LS)</td><td></td><td></td><td>60</td></tr></table>

注 4：所规定的最大和最小参数由试验保证，典型值由设计、表征和统计分析保证。

## 内部结构框图

![](images/92127f2153be041854cff1771bafe5b5142c84393c74ff50b054d1ae710dd997.jpg)

## 时序图

图 3 内部框图  
![](images/9e375256cd781e2303025a5073fec3621617e197edfb36bfc68008ee22e47a36.jpg)  
图 4 输入/输出时序

![](images/887bb386e0926472b1360f7e72b3fc2b9be2cb086b786f370ae8bcad15b78521.jpg)  
图 5 开关时序

![](images/9780a7e62deaf8e45708838c5dba047596cb289fb5249555ce3ecee171f1e2c5.jpg)

![](images/3ca75dda54a5186c53161bff93ac2def7ea62b5dbe42529d3f45ab1d04ac18b3.jpg)

![](images/7da378a6019cf4a13c03ee3338f5734596855cbc17425658be14ff275f90efd9.jpg)

![](images/c0dc9a55563af724ef6fa780492f87e33fd19d71a6f3708a12ad99632dfdfdab.jpg)

![](images/60e502fee2f7d36b38fb5d57f4e0498fc8bebac6166f606b79361a54085c1af6.jpg)

![](images/171154c3e55f85d7b74288d02f43365f0f597ce0f695b05ea604a87e55a89e5c.jpg)

![](images/3bd4a1c7b070419bbe53bcea898e9b504af9e75606a85dca6f87d0af361a8212.jpg)

![](images/30244ba5b2bd43dc4d476fd7ee73e93b3566054cca5e46ce9724689aca358cf3.jpg)

![](images/16e8fd6fb4797293cd6cec32bd168db1933ce658c3ebf426de0f25f7908a7ed0.jpg)

![](images/314cc2daf2ce1306b010ec26cb6f36d3ee2d7645a98cfb2b4ab49d2ab9781763.jpg)

![](images/b0d73153ef3372e121b0fbffff5136aaee4f3079b4ec344852127ca45a90b1a2.jpg)

![](images/3b0310cb7af98abc0f91e78b6f7eaed62a8708e05c5a4a1d09c210c01d2a4fb2.jpg)

![](images/a3ddc1c967df21f5b24c017f4e557db1b8fdab1024949991d94bb7ae67f0502f.jpg)

![](images/25fb3449b590ecc757e79f89d7c406d1baa996ef89164432e4183a885abb1e0e.jpg)

![](images/59a57ac6332c8ad6cbecd6cb7a589fbb3fa6dad987a40356c8948ba328da1f46.jpg)

![](images/ccbc7c7acd5a36b065854a9f3a5434419c0bb5818caf1d830559f03f3d6747ce.jpg)

![](images/01588b177c5d66f351a48ee3c3bee4521e146067fe01c7b88c1f4b4ec553aebe.jpg)

![](images/f43d2c573b6f06d71b67455fdcb67233ddac64aa2148fc81966cf923c7668011.jpg)

![](images/c9f3c709eea990d9c86c94ba2224adee8d92ebaa39b38a012c7c506d5c192915.jpg)

![](images/83ea06c6bc92d1a2a3ce062be1c1cd98d23ec122b0bfbf06f5664f5ccc61a42b.jpg)

![](images/93dc60485b72d4e7fb25f18fcd609063df34fd0859142da444cdc6b6b3922bec.jpg)

![](images/c25be299fe1eda88ba414ff3e29e8ae7b378004ac5f9bc1410641c9dc71e947a.jpg)

![](images/fecbba3dcc1d7948cb8dec757ac64e4e205a68bb57bf1dae954ca2ba2e755c7c.jpg)

![](images/66b9b1ebbc81f9c79968d8c4bc7667c434e939107d105b3abcf1ddc44274026a.jpg)

## 封装信息

![](images/fff59efcfbbce22109ff52275db477c8d7a8bf785be4e1d4770661f935aca7d8.jpg)

![](images/b27ada5afd6f606793abefadfdc75c5c028ecd0bbccb50eb5ca48a6838132893.jpg)

![](images/25b5db709c8d335f41623a6cd7fedb62873cd4632516365a9e1f2feac7fd57f0.jpg)

![](images/6ae338a561e4a6bab288bd8175accbcb802b5f3a4b167fa216a86bd09797a4ba.jpg)  
SECTION B-B

<table><tr><td rowspan="2">SYMBOL</td><td colspan="3">MILLIMETER</td></tr><tr><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A</td><td>1.30</td><td>-</td><td>1.80</td></tr><tr><td>A1</td><td>0.05</td><td>-</td><td>0.25</td></tr><tr><td>A2</td><td>1.25</td><td>1.40</td><td>1.65</td></tr><tr><td>b</td><td>0.33</td><td>-</td><td>0.51</td></tr><tr><td>c</td><td>0.17</td><td>-</td><td>0.25</td></tr><tr><td>D</td><td>4.70</td><td>4.90</td><td>5.10</td></tr><tr><td>E</td><td>5.80</td><td>6.00</td><td>6.20</td></tr><tr><td>E1</td><td>3.70</td><td>3.90</td><td>4.10</td></tr><tr><td>e</td><td colspan="3">1.27BSC</td></tr><tr><td>L</td><td>0.40</td><td>-</td><td>1.00</td></tr></table>

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev. 1.0</td><td>2024/11</td><td>首次发行</td></tr></table>

![](images/4aed62168d8a27df276962e3f0b3526f694be5df08ad118dced211fb6c2d5999.jpg)

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。

## 电子器件报废说明

该产品在生命周期结束后，由客户按照一般电子产品的报废流程进行处理。