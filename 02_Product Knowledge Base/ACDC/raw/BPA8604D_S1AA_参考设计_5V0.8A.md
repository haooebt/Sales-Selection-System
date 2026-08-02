![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/ef9b350415f5b5a851603bb2dd89cbcd13b88482865f2bfe3ec0bb1a4f338386.jpg)

## BPA8604D（S1AA）隔离电源参考设计

## (5V/0.8A@85\~265Vac)

上海晶丰明源半导体股份有限公司

Shanghai Bright Power Semiconductor Co., Ltd.

YSM

时间：2021年10月

## 内容

BPA8604D  
电源规格  
电路图  
PCB Layout  
实物图  
变压器规格  
性能测试数据

## 产品特点:

➢ 700V MOSFET  
》集成高压启动、自供电电路  
》低待机功耗  
》丰富的保护功能  
》优异的动态响应速度，输出无过冲

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/1e038d86fd37f3a71835ace3643e4ae610266b0e73cb6d50a5c91fc7665b27b9.jpg)

## 应用领域:

》家用电器辅助电源  
》微波辅助电源

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/51cb7de95553f109d18b40dfe16d12ee7237e6c69b48ab65334855a2245c1632.jpg)

SOP7

<table><tr><td>项目描述</td><td>符号</td><td>最小</td><td>典型</td><td>最大</td><td>单位</td><td>备注</td></tr><tr><td colspan="7">输入</td></tr><tr><td>电压</td><td> $V_{IN}$ </td><td>85</td><td>115/230</td><td>265</td><td> $V_{AC}$ </td><td></td></tr><tr><td>频率</td><td> $f_{LINE}$ </td><td>47</td><td>50/60</td><td>63</td><td>Hz</td><td></td></tr><tr><td colspan="7">输出</td></tr><tr><td>输出电压</td><td> $V_{OUT}$ </td><td></td><td>5</td><td></td><td>V</td><td>±5%</td></tr><tr><td>输出电流</td><td> $I_{OUT}$ </td><td></td><td>0.8</td><td></td><td>A</td><td></td></tr><tr><td>输出电压纹波</td><td> $V_{RIPPLE}$ </td><td></td><td></td><td>134</td><td>mV</td><td>20MHz带宽</td></tr><tr><td>连续输出功率</td><td> $P_{OUT}$ </td><td></td><td>4</td><td></td><td>W</td><td></td></tr><tr><td colspan="7">效率</td></tr><tr><td>待机功耗</td><td> $P_{STDBY}$ </td><td></td><td></td><td>22</td><td>mW</td><td>230VAC</td></tr><tr><td>满载效率</td><td>η</td><td>72.1</td><td></td><td></td><td>%</td><td></td></tr><tr><td colspan="7">环境</td></tr><tr><td>传导EMI</td><td></td><td colspan="4">满足CISPR22/EN55022 Class B,至少6dB 裕量</td><td></td></tr><tr><td rowspan="2">Surge</td><td></td><td></td><td>±2</td><td></td><td>kV</td><td>差模</td></tr><tr><td></td><td></td><td>±4</td><td></td><td>kV</td><td>共模</td></tr><tr><td>EFT</td><td></td><td></td><td>±4</td><td></td><td>kV</td><td>5kHz/100kHz/38kHz</td></tr><tr><td rowspan="2">ESD</td><td></td><td></td><td>±8</td><td></td><td>kV</td><td>接触放电</td></tr><tr><td></td><td></td><td>±15</td><td></td><td>kV</td><td>空气放电</td></tr><tr><td>工作环境温度</td><td> $T_{AMP}$ </td><td></td><td></td><td>50</td><td>°C</td><td></td></tr></table>

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/03d89084712fb8d375d4b95b7ef9c3176f087a3c555a655dfa4b7fd4a24202a9.jpg)

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/dcb3d50cce70ef696746489a3469852f045b85a6b2b9025618bd328d94015e99.jpg)

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/f162b4bcac5ccd31ce13d1e1b9f42cc74fb5b783cd45a12a86a5994312bc3365.jpg)

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/a2e5fc7ed192f00d70b5fe084dda5eab20d32084925d8d909949a8c8a6ba9d5f.jpg)

## 原理图

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/3de67ab78ff9ebe2c04b55eca6e08ea96bbc07f0f0622f2f41be767d932a8998.jpg)

## 绕线方式

<table><tr><td>绕组</td><td>起始脚</td><td>终止脚</td><td>材料</td><td>匝数</td><td>绕线方式</td></tr><tr><td>N1</td><td>5</td><td>NC</td><td> $\phi 0.15*2P$ </td><td>25Ts</td><td>密绕一层(PIN脚朝外)</td></tr><tr><td colspan="4">胶带</td><td>3Ts</td><td></td></tr><tr><td>N2</td><td>3</td><td>5</td><td> $\phi 0.15*1P$ </td><td>112Ts</td><td>密绕三层(PIN脚朝外)</td></tr><tr><td colspan="4">胶带</td><td>3Ts</td><td></td></tr><tr><td>N3</td><td>1</td><td>2</td><td> $\phi 0.15*2P$ </td><td>14Ts</td><td>均匀绕一层(PIN脚朝外)</td></tr><tr><td colspan="4">胶带</td><td>3Ts</td><td></td></tr><tr><td>N4</td><td>10</td><td>6</td><td>三层绝缘线 $\phi 0.5*1P$ </td><td>7Ts</td><td>均匀绕一层(PIN脚朝外)</td></tr><tr><td colspan="4">胶带</td><td>1Ts</td><td></td></tr></table>

## 规格与材料

》初级绕组感量 $\mathsf { L } _ { \mathsf { p } } { = } 1 . 6 5 \mathsf { m } \mathsf { H } { \pm } 1 0 \%$ （测试条件:0.3V，50kHz）  
》漏感量 $\mathsf { L } _ { \mathsf { I k } } { < } 8 2 \mathsf { u H }$  
》骨架：EE16加高 (5+5PIN)  
》磁芯：EE16 PC40或同等材质， $\mathsf { A e } { = } 1 9 \mathsf { m m } ^ { 2 }$  
》 N1、N2、N3:2UEW漆包线  
》N4:三层绝缘线  
》绝缘胶带:3M900或同等材质  
》耐压测试:3KV,50/60Hz,1Min  
》成品要求：浸凡立水

## 脚位图

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/b72a78859c6daa3e1a092c88afd78a1d4b0513237dd2a93ea38068d3a157f492.jpg)

空载功耗  
![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/de3a75d826f5b175bf398bf5700b3e312a67e0de999ac9cadf25cb05fbd5acaf.jpg)

输入电压

效率测试  
![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/a8106c925712a6137b7d5c5a8a64b524aca84a82cb2c38f7f2560f54977c78f6.jpg)

## 输出电压调整率

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>4.99</td><td>4.99</td><td>4.99</td><td>4.99</td><td>4.99</td><td>4.99</td><td>4.99</td><td>0.04%</td></tr><tr><td>20%</td><td>4.99</td><td>4.99</td><td>4.99</td><td>4.99</td><td>4.99</td><td>4.99</td><td>4.99</td><td>0.02%</td></tr><tr><td>40%</td><td>4.98</td><td>4.98</td><td>4.98</td><td>4.98</td><td>4.98</td><td>4.98</td><td>4.98</td><td>0.00%</td></tr><tr><td>60%</td><td>4.98</td><td>4.98</td><td>4.98</td><td>4.98</td><td>4.98</td><td>4.98</td><td>4.98</td><td>0.02%</td></tr><tr><td>80%</td><td>4.97</td><td>4.97</td><td>4.97</td><td>4.97</td><td>4.97</td><td>4.97</td><td>4.97</td><td>0.02%</td></tr><tr><td>100%</td><td>4.97</td><td>4.97</td><td>4.97</td><td>4.97</td><td>4.97</td><td>4.97</td><td>4.97</td><td>0.00%</td></tr><tr><td>平均值</td><td>4.98</td><td>4.98</td><td>4.98</td><td>4.98</td><td>4.98</td><td>4.98</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>0.50%</td><td>0.50%</td><td>0.46%</td><td>0.50%</td><td>0.50%</td><td>0.50%</td></tr></table>

◼ 计算方法：调整率=100%\*(最大值-最小值)/平均值

## 输出电压纹波

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/5a60794656552335d85812a242640d2c5913eff37caf52a0a57d449efaec2ca0.jpg)

85 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } } \mathsf { R i p p l e }$ $\mathsf { V } _ { \mathsf { P K - P K } } { = } 1 3 4 \mathsf { m V }$

Test Condition:

➢ Full Load

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/ff1f061f8f87040b7282c7a8ec4af84a3bc5fa5cbcfff650014d24953085bcd7.jpg)

230 VAC

$\begin{array} { r l } & { \mathsf { C H 1 V _ { \mathsf { O U T } } R i p p l e } } \\ & { \mathsf { V _ { P K - P K } } \mathsf { = } \mathsf { 1 0 5 m v } } \end{array}$

Test Condition:

➢ Full Load

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/b0115916056e9463c8535567b16f7c1a73f1d611e0135e84f7ad14169df789dd.jpg)

115 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ Ripple $\mathsf { V } _ { \mathsf { P K - P K } } { = } \pmb { 1 } \pmb { 1 } \mathsf { 1 } \mathsf { m V }$

Test Condition:

➢ Full Load

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/783e1c6cb4f0b1aad8b99656c97a1799bc364962ef13d1c01407e83a726a9e39.jpg)

265 VAC

$\begin{array} { r l } & { \mathsf { C H 1 V _ { o u T } R i p p l e } } \\ & { \mathsf { V _ { P K - P K } } \lneq 1 0 8 \mathsf { m V } } \end{array}$

Test Condition:

➢ Full Load

## (50%-100%)

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/9a3cc4a6336ba0acdce5380cd81295805d95620b48fc6bfceccaa1ae0c4ddb21.jpg)

85 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $v _ { p _ { k - P K } } { = } 1 3 9 \mathsf { m V }$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U } \mathsf { T } } }$

## Test Condition:

➢ 0.4 A-0.8 A-0.4 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/956568b86ba1673a9389289b86918fed016a4654d8e9de3a5ccdea8a6a05243f.jpg)

230 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $v _ { p _ { \mathsf { K - P K } } } { = } 1 1 8 \mathsf { m v }$

$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.4 A-0.8 A-0.4 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/798afe4f57acf1f2d4a2da750aae7dee0cdaf893f528c144b56e60aef0aae57e.jpg)

115 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { p | c - P K } = 1 2 5 m v$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.4 A-0.8 A-0.4 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/9b1df5d01d69e7fea18b9ffb22298eb8b874772944332e7c9afd0b009e4817db.jpg)

265 VAC

${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ $V _ { \mathsf { P K - P K } } { = } 1 1 9 \mathsf { m V }$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.4 A-0.8 A-0.4 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## (10%-90%)

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/5bc9480bda5c38f986f03a167aadcfd544af2cb20781d5c8a9040c4d5aa26a43.jpg)

85 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 1 4 5 m v$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U } \mathsf { T } } }$

## Test Condition:

➢ 0.08A-0.72 A-0.08A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/db356aa54b65e22e93f8ad95d17ac00eb7811de94b51b11846ad1b27661c2cdd.jpg)

230 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { \mathsf { P K - P K } } { = } 1 2 4 ~ \mathsf { m V }$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.08A-0.72 A-0.08A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/533aa15007e438651cdedeb35c9302a7f790b3ccd4c545d10909b7df330d9456.jpg)

115 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $v _ { p _ { \mathrm { K - P K } } } { = } 1 2 6 ~ \mathsf { m V }$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.08A-0.72 A-0.08A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/e2a7545a0c1a338ca44d5b9160af2f52d572b18bba35dbff6a47670cd895f5ff.jpg)

265 VAC

${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ $v _ { p _ { k - P K } } { = } 1 2 7 m v$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.08A-0.72 A-0.08A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## 输出电压开机波形

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/1fd757121893f24f6b449c4b74197e6027943d238903afdccf8dd8a84805faff.jpg)

85 VAC  
![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/43ed9ac24be42893259eaf3ac2408bff553bdf03a24a2031fcb39eda02bcde11.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/f96f30b71c38fe1a01df318040ec0980d8fe683fda0cab8f0ee9aedc622ba9a1.jpg)

115 VAC  
![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/ffae3fdea5c170a853075a320cacfc92e28a9c6fb238bf289fd51210bdf9dc7e.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/60856f1b704a2861f54dcc0601d9f6b1a16234df91dd3e0ecc8ae216c2010cae.jpg)

230 VAC  
![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/5d1bcb989164d38ec1bcccaace03a90e4e9653cda74aeae0219dfd7070834707.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/fff47900e71575312a9bb43e8107e0981aef1947bc1fa382bc3e1a1bcde9f706.jpg)

265 VAC  
![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/dcffba62d61f581c490cbbd90d6401517c3b82759d2ca216dcd295ec15d6bbea.jpg)  
Test Condition:  
➢ Full Load

## MOSFET

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/f8c7b26e87d40c71c0fd2ad0c5924f979d1e52a200f9a3d2bb56543e86b3ad05.jpg)

85 VAC  
![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/11a96fc0622587f7c146e4c5c128127ae6eb12de076e36229a1da4d5d696e7e6.jpg)

Test Condition:  
➢ Full Load

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/e90e21b694a1b149d3969b8806c0945b6e551bbabdfbc0fd1e1e6e6a51d0cd9a.jpg)

230 VAC  
![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/f121658adfdff0d906f955fddd33ed557c52f6c83591464490ebbb62d3e84c1b.jpg)

Test Condition:  
➢ Full Load

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/7f0e9005230ac7c0997c3fe0322dee8496e509a35c9caf620bf1c44888a51858.jpg)

115 VAC  
![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/a42fe7f25fa2b6b17d68a04c0f52c2decc30c8b325da6d6fa14234aed0143851.jpg)

Test Condition:  
➢ Full Load

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/fdbfa7aea5743cf81a0f532fa92b195dec91323fa1d2f6a6cce2df31aea73261.jpg)

265 VAC  
![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/6bd3b84aebc450cedf15c8e1fc33a36ce36f25b9070a1df44254f6a48c38f82d.jpg)

Test Condition:  
➢ Full Load

## MOSFET

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/0465171cc58716977879f08fab6f90ffa574de94099f44534d5efaa13b9cbe66.jpg)

85 VAC

CH4 VDS  
CH3 IDS

$$
V _ {D S \_ M A X} = 2 4 8 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 2 9 6 \mathrm{mA}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/a2f9d33e98a68354c129c623252be59210416914859da4fc4d8a6282f4fd1e70.jpg)

265 VAC

CH4 VDS  
CH3 IDS

$$
V _ {D S \_ M A X} = 4 6 0 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 3 1 2 \mathrm{mA}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/203cdd4049f8ea5e9cd0faf0c20b5988995f7fede738510ffe60cfcc8fbdad1a.jpg)

115 VAC

CH4 VDS  
CH3 IDS

$$
V _ {D S \_ M A X} = 2 8 8 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 3 0 0 \mathrm{mA}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/8fc55b4281164a1a70ccae70ee2d4cc8cc7deb21bcd9d5573119329b3b75dac0.jpg)

265 VAC

CH4 VDS

$$
V _ {D S \_ M A X} = 5 1 0 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 3 1 6 \mathrm{mA}
$$

## Test Condition:

➢ Full Load

## 输出二极管开机波形

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/91ec667f6bfc168544e0e76db1ba109c57aa5ff01a06708fbcb0c332e7d4e210.jpg)

85 VAC

CH4 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 2 0. 6 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 4. 8 8 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/b291ff60ec55a964adef82fe9a7793650fbe6a9187cce3d0abbce9ea058c944d.jpg)

230 VAC

CH4 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 3 0. 1 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 5. 2 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/3912be4a0d4499cf86a828538ecf854c37c0373de61d2f261bb53f784d55e78e.jpg)

115 VAC

CH4 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 2 1. 8 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 4. 9 6 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/ba32cbb21647170ea99c860f6bede874395d134226bffcc78faab8d51043aabd.jpg)

265 VAC

CH4 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 3 3. 8 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 5. 2 8 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

## 输出二极管稳态波形

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/8f201c9d406787474a3f2ad8d664aad65e89e0a93a68cc50ea5580c9fc3b6b39.jpg)

85 VAC

CH4 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 2 0. 1 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 4. 8 8 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/d71ec83943cd5dc8e53e7145537872e1dcac5ff4a44f9e218c4c1f7a2f27ce7e.jpg)

230 VAC

CH4 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 2 9. 8 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 5. 2 8 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/6a534ba2f306e4d37373e440dc566c83254309846816e071db4319f24b3f2e14.jpg)

115 VAC

CH4 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 2 1. 3 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 4. 9 6 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/0bc97afd425f7ae7d93c3a8cab8a44494610060e8fc85c41adf0c0bd144bf751.jpg)

265 VAC

CH4 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 3 3. 7 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 5. 3 3 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

## MOSFET

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/6f1f98876b35130fcfaef3bb7e674557f7bacc263d7485455d2d0ccc2bd7c0e5.jpg)

85 VAC

CH4 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 4 2 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 2 7 4 \mathrm{mA} \end{array}
$$

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/a4fe1a3aeaea30b66de68a0853f81cfa7558640ef4fb57bea473c31f687a2511.jpg)

115 VAC

CH4 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 8 6 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 2 7 8 \mathrm{mA} \end{array}
$$

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/72315987c656c6109b1e533d78c392210614300baacc204cf5867bf0b571f379.jpg)

230 VAC

CH4 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 4 6 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 3 5 0 \mathrm{mA} \end{array}
$$

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/1dd0a83d0cf1c2d8674c51fde702983201fbbfb68e5a17d08c801e2ca1b1e2d8.jpg)

265 VAC

CH4 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 5 1 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 3 9 0 \mathrm{mA} \end{array}
$$

<table><tr><td rowspan="2">项目</td><td>85VAC</td><td>115VAC</td><td>230VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>29.6</td><td>28.9</td><td>28.9</td><td>30</td></tr><tr><td>BP8604D (U1)</td><td>74.7</td><td>64.9</td><td>59.6</td><td>60.8</td></tr><tr><td>变压器绕组(T1)</td><td>55</td><td>53.6</td><td>55</td><td>55.6</td></tr><tr><td>变压器磁芯(T1)</td><td>49</td><td>48.4</td><td>50.2</td><td>51.1</td></tr><tr><td>整流二极管(D8)</td><td>66.3</td><td>65.6</td><td>65.9</td><td>66.1</td></tr><tr><td>整流桥(D1)</td><td>39.5</td><td>36.6</td><td>33.6</td><td>33.2</td></tr><tr><td>输入电解电容(C5)</td><td>47.4</td><td>44.3</td><td>41.9</td><td>41.8</td></tr><tr><td>输出电解电容(C4)</td><td>44.9</td><td>44.5</td><td>44.7</td><td>44.6</td></tr></table>

备注：增大芯片Source散热铜箔面积可以降低芯片温度

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/7bd5abffd8d2edc9353b27f7449d4e24cd280f7fe4e526b8ac5a5a1e7d8e9bd2.jpg)

## 测试说明

》在温箱中进行测试  
》电路板放在一个封闭的盒子内  
热电偶连接到各个测量点  
》等测量点温度达到稳定后记录数据

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/fddc637120750e11f59906b3896a3810c9ea0f0ff7b7152c665f4bf028da69c1.jpg)

115Vac Line  
![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/383ad8f2c5838fbfebb2b4da9e16db9164f94e596b1854aef59021e2f9149dc7.jpg)

230Vac Line

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/ab8de7057b25dc04b1a73402acb2e91a547c344a385ab2b89b381bccf89e39e9.jpg)

115Vac Neutral

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/9e568dd58a0ef92e957252a76aea1944b8d8f2d0d0f71509eb1ca2425eadff72.jpg)

230Vac Neutral

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/b8eb93daca7acf2c026a32dcf29e48dedce727da5fcf86e29069ffe85cf32d8f.jpg)

115Vac Horizontal

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/22350bb762b3d30c9f049693e345eb6220c2b4ff1373fa33fb829052c4c2a65b.jpg)

230Vac Horizontal

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/c01c18e79e00d1e808232d86ec451d7eb6880d33c81d1b84d767b490ebe7be94.jpg)

115Vac Vertical

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/8eda8d8491e3e741a97cb07a9abc0dee75a432e698f0c8adc45ca2d910e66aea.jpg)

230Vac Vertical

<table><tr><td>差模</td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>+1.5kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-1.5kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr></table>

## 测试说明

》按照GB/T17626.5和IEC61000-4-5的最新版本要求进行测试  
》室温环境，230VAC输入，满载条件  
》输入1.2/50us组合波浪涌电压  
》每个测试点重复10次  
》每次间隔时间1分钟  
》试验时样机输出正常（符合A类标准）视为Pass

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/d513f8162e00295c5ff971df689d1a73c6e533e5d88314c152f0075e475d2eec.jpg)

## EFT

<table><tr><td>差模</td><td>电压</td><td>脉冲群持续时间</td><td>脉冲频率</td><td>测试时间</td><td>测试结果</td></tr><tr><td>L to N</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr></table>

## 测试说明

》按照GB/T17626.4和IEC61000-4-4的最新版本要求进行测试  
》室温环境，230VAC输入满载条件  
》 分别测试5kHz/100kHz/38kHz脉冲频率  
》脉冲群周期为300ms  
》每个测试条件测试时间120s  
》试验时样机输出正常（符合A类标准）视为Pass

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/b70d7831265a8e5f81ea987c726432c2a82d647cf13251016e20ee373aab6dc5.jpg)

<table><tr><td>测试点</td><td>电压(V)</td><td>放电类型</td><td>放电次数</td><td>测试结果</td></tr><tr><td>Vo</td><td>+12kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-12kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+12kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-12kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr></table>

## 测试说明

》按照GB/T17626.2和IEC61000-4-2的最新版本要求进行测试  
》室温环境，230VAC输入满载条件  
》每个测试点重复10次  
》分别对输出正端和地进行空气放电  
》试验时样机输出正常（符合A类标准）视为PasS

![](./素材/images/BPA8604D_S1AA_参考设计_5V0.8A/6d0b1fd961bc8e42433db807764e08ffa74a8e47aaf67842d3352b6dc48f6db3.jpg)

## THANK YOU FOR WATCHING
