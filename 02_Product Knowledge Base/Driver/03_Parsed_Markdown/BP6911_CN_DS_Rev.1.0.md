## 概述

BP6911 是一款高压半桥栅极驱动芯片，两路独立输入可以分别驱动高侧和低侧半桥 NMOS 或 IGBT，可广泛应用于马达驱动等。

内置死区时间和直通保护逻辑，防止上下桥臂功率管同时导通。

BP6911 芯片封装类型为 SOP8。

![](images/bbb8d452ce3c08eb520d180e694e03d5de4da5b8ecabd0f32a605c6a6840ab1a.jpg)

## 特点

■ 高侧驱动浮动电源设计，最高耐压+600V

■ 驱动电流 450mA/1000mA

■ 可承受瞬时负压

■ 10V \~ 20V 栅极驱动电源电压

■ 支持 3.3V/5V/15V 输入逻辑

■ 高低侧欠压保护功能

■ 内置 100ns 死区时间

## 应用领域

■ 电机驱动

■ IOT/智能家居/智能照明

工业控制

## 典型应用

![](images/bc7ed4219d2ccad47ba6aeee0a62b4881e15a921ff46f2bcbde9ec445431b0e8.jpg)  
图 1 BP6911 典型应用电路

## 定购信息

<table><tr><td>定购型号</td><td>封装</td><td>包装形式</td><td>打印</td></tr><tr><td>BP6911</td><td>SOP8</td><td>卷盘4,000 只/盘</td><td>BP6911XXXXXYXXWWX</td></tr></table>

## 管脚封装

![](images/6b44711bbd64f6916d5a187a424110f5a3f2f9b21427e5e0dc1479e8b20488e9.jpg)

XXXXXYX: 批次号

图 2 管脚封装图

## 管脚描述

<table><tr><td>管脚号</td><td>管脚名称</td><td>描述</td></tr><tr><td>1</td><td>VCC</td><td>芯片工作电源输入端</td></tr><tr><td>2</td><td>HIN</td><td>高侧逻辑输入信号</td></tr><tr><td>3</td><td>LIN</td><td>低侧逻辑输入信号</td></tr><tr><td>4</td><td>COM</td><td>低侧驱动地</td></tr><tr><td>5</td><td>LO</td><td>低侧输出,控制低侧 MOS 的开通与截止</td></tr><tr><td>6</td><td>VS</td><td>高侧悬浮地</td></tr><tr><td>7</td><td>HO</td><td>高侧输出,控制高侧 MOS 的开通与截止</td></tr><tr><td>8</td><td>VB</td><td>高侧悬浮电源</td></tr></table>

极限参数(注1)

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td> $V_B$ </td><td>高侧浮动电源电压</td><td>-0.3~625</td><td>V</td></tr><tr><td> $V_S$ </td><td>高侧电源基准电压</td><td> $V_B - 25 \sim V_B + 0.3$ </td><td>V</td></tr><tr><td> $V_{HO}$ </td><td>高侧驱动输出电压</td><td> $V_S - 0.3 \sim V_B + 0.3$ </td><td>V</td></tr><tr><td> $V_{CC}$ </td><td>低侧驱动及逻辑电源电压</td><td>-0.3~25</td><td>V</td></tr><tr><td> $V_{LO}$ </td><td>低侧驱动输出电压</td><td>-0.3~ $V_{CC}$ +0.3</td><td>V</td></tr><tr><td> $V_{IN}$ </td><td>逻辑输入电压(HIN/LIN)</td><td>-0.3~ $V_{CC}$ +0.3</td><td>V</td></tr><tr><td> $dV_s/dt$ </td><td>开关电压摆率</td><td>50</td><td>V/ns</td></tr><tr><td> $P_{DMAX}$ </td><td>封装功率耗散(注2)</td><td>0.625</td><td>W</td></tr><tr><td> $θ_{JA}$ </td><td>结对环境热阻</td><td>200</td><td>°C/W</td></tr><tr><td> $T_J$ </td><td>结温范围</td><td>-40~150</td><td>°C</td></tr><tr><td> $T_{STG}$ </td><td>存储温度范围</td><td>-55~150</td><td>°C</td></tr></table>

注1：所有电压参数都以COM为参考地。超过器件最大额定值可能会引起器件的毁坏。  
注2：热阻及功率耗散都基于PCB测量及空气环境。最大功率耗散取 $\mathrm{PDMAX} = (\mathrm{TJMAX - TA}) / \theta \mathrm{JA}$ 和列表中最大值中较小值。

推荐工作范围(注 3)（无特别说明情况下， $T_{A}=25^{\circ}C$ ）

<table><tr><td>符号</td><td>参数</td><td>参数范围</td><td>单位</td></tr><tr><td> $V_B$ </td><td>高侧浮动电源电压</td><td> $V_S + 10 \sim V_S + 20$ </td><td>V</td></tr><tr><td> $V_S$ </td><td>高侧电源基准电压</td><td>-5 ~ 600</td><td>V</td></tr><tr><td> $V_{HO}$ </td><td>高侧驱动输出电压</td><td> $V_S \sim V_B$ </td><td>V</td></tr><tr><td> $V_{CC}$ </td><td>低侧驱动及逻辑电源电压</td><td>10 ~ 20</td><td>V</td></tr><tr><td> $V_{LO}$ </td><td>低侧驱动输出电压</td><td>0 ~  $V_{CC}$ </td><td>V</td></tr><tr><td> $V_{IN}$ </td><td>逻辑输入电压(HIN/ LIN)</td><td>0 ~  $V_{CC}$ </td><td>V</td></tr></table>

注3：所有电压参数都以COM为参考地。推荐工作范围定义了器件正常工作的条件。

电气参数(注 4)（无特别说明情况下， $V_{CC}=V_{BS}=15V, T_{A}=25^{\circ}C$ ）

<table><tr><td>符号</td><td>描述</td><td>条件</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td colspan="7">静态电气参数</td></tr><tr><td> $V_{CC\_ON}$ </td><td rowspan="2"> $V_{CC}$ 和 $V_{BS}$ 欠压保护释放电压</td><td></td><td>8</td><td>8.5</td><td>9.8</td><td>V</td></tr><tr><td> $V_{BS\_ON}$ </td><td></td><td>-</td><td>8.7</td><td>10</td><td>V</td></tr><tr><td> $V_{CC\_UVLO}$ </td><td rowspan="2"> $V_{CC}$ 和 $V_{BS}$ 欠压保护电压</td><td></td><td>7.2</td><td>7.6</td><td>8.8</td><td>V</td></tr><tr><td> $V_{BS\_UVLO}$ </td><td></td><td>6.5</td><td>7.8</td><td>-</td><td>V</td></tr><tr><td> $V_{CC\_HYS}$ </td><td rowspan="2"> $V_{CC}$ 和 $V_{BS}$ 欠压保护迟滞电压</td><td></td><td>0.6</td><td>0.9</td><td>1.2</td><td>V</td></tr><tr><td> $V_{BS\_HYS}$ </td><td></td><td>-</td><td>0.9</td><td>-</td><td>V</td></tr><tr><td> $I_{QCC}$ </td><td> $V_{CC}$ 静态电流</td><td>HIN=LIN=0V</td><td>-</td><td>50</td><td>150</td><td>uA</td></tr><tr><td> $I_{QBS}$ </td><td> $V_{BS}$ 静态电流</td><td>HIN=LIN=0V</td><td>-</td><td>35</td><td>80</td><td>uA</td></tr><tr><td> $I_{LK}$ </td><td>浮动电源漏电流</td><td> $V_{HO}=V_{B}=V_{S}=620V$ </td><td>-</td><td>-</td><td>10</td><td>uA</td></tr><tr><td> $V_{IH}$ </td><td>逻辑“1”输入电平</td><td></td><td>2.4</td><td>-</td><td>-</td><td>V</td></tr><tr><td> $V_{IL}$ </td><td>逻辑“0”输入电平</td><td></td><td>-</td><td>-</td><td>0.6</td><td>V</td></tr><tr><td> $I_{ISOURCE}$ </td><td>逻辑“1”输入偏置电流</td><td>HIN, LIN=5V</td><td>-</td><td>32</td><td>100</td><td>uA</td></tr><tr><td> $I_{ISINK}$ </td><td>逻辑“0”输入偏置电流</td><td>HIN, LIN=0V</td><td>-</td><td>-</td><td>1.0</td><td>uA</td></tr><tr><td> $V_{OH}$ </td><td>高电平输出电压, $V_{BIAS}-V_{O}$ </td><td> $I_{O}=20mA$ </td><td>-</td><td>-</td><td>1.0</td><td>V</td></tr><tr><td> $V_{OL}$ </td><td>低电平输出电压, $V_{O}$ </td><td> $I_{O}=20mA$ </td><td>-</td><td>-</td><td>1.0</td><td>V</td></tr><tr><td> $I_{O+}$ </td><td>高电平输出短路脉冲电流</td><td> $V_{O}=0V (V_{IN}=5V, V_{O}$ 短路脉宽&lt;10us)</td><td>300</td><td>450</td><td>-</td><td>mA</td></tr><tr><td> $I_{O-}$ </td><td>低电平输出短路脉冲电流</td><td> $V_{O}=15V (V_{IN}=0V, V_{O}$ 短路脉宽&lt;10us)</td><td>650</td><td>1000</td><td>-</td><td>mA</td></tr><tr><td colspan="7">动态电气参数(注5)(CL=1nF)</td></tr><tr><td> $t_{on}$ </td><td>导通传输延迟</td><td> $V_{S}=0V$ </td><td>100</td><td>250</td><td>450</td><td rowspan="6">ns</td></tr><tr><td> $t_{off}$ </td><td>关断传输延迟</td><td> $V_{S}=0V or 600V$ </td><td>80</td><td>160</td><td>300</td></tr><tr><td> $t_r$ </td><td>输出上升时间</td><td></td><td>-</td><td>40</td><td>100</td></tr><tr><td> $t_f$ </td><td>输出下降时间</td><td></td><td>-</td><td>12</td><td>50</td></tr><tr><td>DT</td><td>死区时间</td><td></td><td>40</td><td>100</td><td>250</td></tr><tr><td>MT</td><td>高低侧传输延迟匹配</td><td> $t_{on} \& t_{off}\ for (HS-LS)$ </td><td>-</td><td>-</td><td>80</td></tr></table>

注4：电气参数表定义了器件工作范围，由测试程序保证.最大值和最小值由测试保证，典型值由设计值，性能和统计分析保证。  
注5：动态传输时间受外围走线的寄生参数影响较大，使用时以实测数据为准。

## 内部结构框图

![](images/1b46a55f97cf12fe51c148819a1731bcdece76c98b27563f15186afe27094af5.jpg)  
图3 内部框图

## 时序图

![](images/9460c7640a9588e1d70891c6756ce37a6a19a72e25a6e47b74cb73adb4678149.jpg)  
图 4 输入/输出时序

![](images/326f411bdf88f18fe2a47a25ced21688e99593051569a6d26e7445fa63630de1.jpg)  
图 5 开关时序

## 特性曲线

![](images/61f3ec3f770e426d31816d3ff298bf079c20e18cfc675d2aa323b08936f23daa.jpg)  
图 6 I $_{QCC}$ vs. V $_{CC}$

![](images/cc45123aaf931a86e830db38d30a5ec233eb83b1fba31dfdc3a3b53c87b80126.jpg)

![](images/de09bdeab06271f838c0baf5d9c72744644716af459ae6f95569cfeeabb34b8a.jpg)  
图 8 Iqcc vs. Ta

图 7 I $_{QBS}$ vs. V $_{BS}$  
![](images/e0654ea66831431f157d08546890da4f5e4d360ae38a477400c8d4f26b093dda.jpg)

![](images/fed195cea7310ddb89216eba7eb51b43df8c5191d8ecf682c27c09bdee967bf0.jpg)  
图 10 V $_{CC\_ON}$ vs. Ta

图 9 I $_{QBS}$ vs. Ta  
![](images/285f0249ff0a86172f958d7e6a2293b8050121793da17b76589c7996e4412ff5.jpg)  
图 11 V $_{CC\_OFF}$ vs. Ta

![](images/d136d4b34875a9eb4b57bed2ca1f2e171b86583f30b37c666f5ed1cc1a7843aa.jpg)  
图 12 IN\_ON vs. Ta

![](images/e272d649c6d08a0784647d7ccbceb14fe8fd572d7847e1dd7d68c205424e336d.jpg)  
图 13 IN\_OFF vs. Ta

![](images/cc94298260c9625a42c6cc8ecb3d6bf30682b501f7e98aaa6d24e17d1669fb81.jpg)  
图 14 Vo\_H vs. Ta

![](images/b831a2884158ce678275087cd2b3f05d469612cf064cf3f9876c0d3a789b22d4.jpg)  
图 15 Vo\_L vs. Ta

![](images/88c34a00e86d7b457cef9ad8e0d639f723ba7b543df562eb66c5b60089cc2087.jpg)  
图 16 BV\_VB&HO&VS vs. Ta

## 封装信息

![](images/535eba34fecb1a74a8e2da029fad0e50f116bfa91a868445abb9704b23ea792f.jpg)

![](images/93d81bb51045ba6e68b5cb2709bfa5116f164b623eb489db2b8c0f4648254b9c.jpg)

![](images/33f95affb15afb2b5c2b337723e2ca83d0ed155bb81277a8068fbf269b86e142.jpg)

![](images/a295586db4b78857846a35b58f407bd51d34354a4a7365ed8bf6fa04b2b51c5c.jpg)  
SECTION B-B

<table><tr><td rowspan="2">SYMBOL</td><td colspan="3">MILLIMETER</td></tr><tr><td>MIN</td><td>NOM</td><td>MAX</td></tr><tr><td>A</td><td>1.30</td><td>-</td><td>1.80</td></tr><tr><td>A1</td><td>0.05</td><td>-</td><td>0.25</td></tr><tr><td>A2</td><td>1.25</td><td>1.40</td><td>1.65</td></tr><tr><td>b</td><td>0.33</td><td>-</td><td>0.51</td></tr><tr><td>c</td><td>0.17</td><td>-</td><td>0.25</td></tr><tr><td>D</td><td>4.70</td><td>4.90</td><td>5.10</td></tr><tr><td>E</td><td>5.80</td><td>6.00</td><td>6.20</td></tr><tr><td>E1</td><td>3.70</td><td>3.90</td><td>4.10</td></tr><tr><td>e</td><td colspan="3">1.27BSC</td></tr><tr><td>L</td><td>0.40</td><td>-</td><td>1.00</td></tr></table>

## 版本信息

<table><tr><td>版本</td><td>日期</td><td>记录</td></tr><tr><td>Rev. 1.0</td><td>2020/12</td><td>首次发行</td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>

## 免责声明

晶丰明源尽力确保本产品规格书内容的准确和可靠，但是保留在没有通知的情况下，修改规格书内容的权利。

本产品规格书未包含任何针对晶丰明源或第三方所有的知识产权的授权。针对本产品规格书所记载的信息，晶丰明源不做任何明示或暗示的保证，包括但不限于对规格书内容的准确性、商业上的适销性、特定目的的适用性或者不侵犯晶丰明源或任何第三人知识产权做任何明示或暗示保证，晶丰明源也不就因本规格书本身及其使用有关的偶然或必然损失承担任何责任。