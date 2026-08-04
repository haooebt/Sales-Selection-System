![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/2e9d3523c6651b5fb9bbfe41c7fc9876cf0aa41b8f338e555a55178bec641dfe.jpg)

## BPA8505D&KP3114SGA对比测试

## (5V/0.25A@85\~265Vac)

上海晶丰明源半导体股份有限公司

Shanghai Bright Power Semiconductor Co., Ltd.

YSM

时间：2021年6月

## 电气参数对比

<table><tr><td></td><td>BPA8505D</td><td>KP3114SGA</td></tr><tr><td>开关频率</td><td>45KHz</td><td>30KHz</td></tr><tr><td>Mosfet BV</td><td>650V</td><td>700V</td></tr><tr><td> $R_{DS\_ON}$ </td><td>8.5Ω</td><td>20Ω</td></tr><tr><td>限流点</td><td>440mA</td><td>420mA</td></tr><tr><td>软启动</td><td>有</td><td>有</td></tr><tr><td>输出过压保护</td><td>有</td><td>有</td></tr><tr><td>过载保护</td><td>有</td><td>有</td></tr><tr><td>封装</td><td>DIP-7, SOP-7</td><td>SOP-8</td></tr></table>

## 测试数据对比

电源规格：85\~265Vac输入，5V/0.25A输出

<table><tr><td colspan="2"></td><td>BPA8505D</td><td>KP3114SGA</td><td></td></tr><tr><td colspan="2">待机功耗</td><td>107mW</td><td>60mW</td><td>230Vac输入</td></tr><tr><td colspan="2">负载调整率</td><td>4.86%~5.04%</td><td>0.2%~0.75%</td><td></td></tr><tr><td rowspan="2">满载效率</td><td>115Vac</td><td>68.2%</td><td>66.1%</td><td></td></tr><tr><td>230Vac</td><td>64.1%</td><td>62.4%</td><td></td></tr><tr><td rowspan="2">输出电压纹波</td><td>85Vac</td><td>26.2mV</td><td>35.9mV</td><td></td></tr><tr><td>265Vac</td><td>41mV</td><td>60.8mV</td><td></td></tr><tr><td rowspan="2">动态负载性能</td><td>50%-100%</td><td>150mVPK_PK</td><td>261mVPK_PK</td><td rowspan="2">265Vac输入</td></tr><tr><td>10%-90%</td><td>264mVPK_PK</td><td>332mVPK_PK</td></tr><tr><td rowspan="2">MOSFET应力</td><td> $V_{DS}$ </td><td>390V</td><td>390V</td><td rowspan="2">265Vac输入</td></tr><tr><td> $I_{DS}$ </td><td>0.871A</td><td>0.519A</td></tr><tr><td rowspan="2">续流二极管应力</td><td>VRR</td><td>390V</td><td>380V</td><td></td></tr><tr><td> $I_{PK}$ </td><td>0.56A</td><td>0.456A</td><td></td></tr><tr><td colspan="2">温升测试(环温50°C)</td><td>84.3°C</td><td>89.1°C</td><td>265Vac输入</td></tr><tr><td colspan="2">传导EMI</td><td>6dB裕量</td><td>6dB裕量</td><td></td></tr><tr><td colspan="2">Surge</td><td>Pass</td><td>Pass</td><td>差模2kV(增加1 Pcs 561压敏)</td></tr><tr><td colspan="2">EFT群脉冲</td><td>Pass</td><td>Pass</td><td>4kV,5kHz/38kHz/100kHz</td></tr><tr><td colspan="2">ESD</td><td>Pass</td><td>Pass</td><td>15kV空气放电</td></tr></table>

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/2cfb4ac87561beeb945f5f460929728cbc3713acd8c37846832ac3e2686225b7.jpg)

◼ KP3114SGA省FB电容、FB反馈二极管

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/548eeb26b29834289e0b7d6714db1644e0732d74972cf2ff4cc6279ead9873f2.jpg)

假负载：KP3114SGA假负载5.1K，BPA8505D假负载2K。

注1：BPA8505D的fs\_min与Ilimit\_min均比KP3114SGA大，故KP3114SAG使用较大的Rdummy（更小的功耗）就可以使输出稳定不飘高，所以KP3114SGA的待机要优于BPA8505D。

效率测试  
![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/3077ca45c360f88586a24296d8d15fb40f144559cb9a98de2b91b937171562ea.jpg)

负载

## 输出电压调整率

BPA8505D

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>5.249</td><td>5.249</td><td>5.250</td><td>5.251</td><td>5.254</td><td>5.255</td><td>5.25</td><td>0.12%</td></tr><tr><td>20%</td><td>5.063</td><td>5.061</td><td>5.060</td><td>5.057</td><td>5.056</td><td>5.054</td><td>5.06</td><td>0.17%</td></tr><tr><td>40%</td><td>5.033</td><td>5.030</td><td>5.028</td><td>5.028</td><td>5.028</td><td>5.027</td><td>5.03</td><td>0.12%</td></tr><tr><td>60%</td><td>5.019</td><td>5.013</td><td>5.013</td><td>5.011</td><td>5.011</td><td>5.011</td><td>5.01</td><td>0.16%</td></tr><tr><td>80%</td><td>5.011</td><td>5.004</td><td>5.005</td><td>5.005</td><td>5.004</td><td>5.004</td><td>5.01</td><td>0.15%</td></tr><tr><td>100%</td><td>5.003</td><td>5.001</td><td>5.001</td><td>4.999</td><td>4.999</td><td>5.001</td><td>5.00</td><td>0.07%</td></tr><tr><td>平均值</td><td>5.06</td><td>5.06</td><td>5.06</td><td>5.06</td><td>5.06</td><td>5.06</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>4.86%</td><td>4.89%</td><td>4.92%</td><td>4.99%</td><td>5.04%</td><td>5.02%</td></tr></table>

◼ 计算方法：调整率=100%\*(最大值-最小值)/平均值

注2：从20%\~100%负载看，两款IC调整率差别不大。而空载时BPA8505D的输出不能做的太低（考虑待机功耗），进而导致全负载范围下的负载调整率 较差。

KP3114SGA

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>5.145</td><td>5.132</td><td>5.125</td><td>5.107</td><td>5.076</td><td>5.057</td><td>5.11</td><td>1.72%</td></tr><tr><td>20%</td><td>5.116</td><td>5.111</td><td>5.108</td><td>5.105</td><td>5.097</td><td>5.093</td><td>5.11</td><td>0.45%</td></tr><tr><td>40%</td><td>5.112</td><td>5.111</td><td>5.108</td><td>5.105</td><td>5.095</td><td>5.095</td><td>5.10</td><td>0.33%</td></tr><tr><td>60%</td><td>5.116</td><td>5.111</td><td>5.108</td><td>5.102</td><td>5.096</td><td>5.088</td><td>5.10</td><td>0.55%</td></tr><tr><td>80%</td><td>5.117</td><td>5.116</td><td>5.113</td><td>5.107</td><td>5.096</td><td>5.091</td><td>5.11</td><td>0.51%</td></tr><tr><td>100%</td><td>5.125</td><td>5.122</td><td>5.120</td><td>5.112</td><td>5.101</td><td>5.091</td><td>5.11</td><td>0.67%</td></tr><tr><td>平均值</td><td>5.12</td><td>5.12</td><td>5.11</td><td>5.11</td><td>5.09</td><td>5.09</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>0.64%</td><td>0.41%</td><td>0.33%</td><td>0.20%</td><td>0.49%</td><td>0.75%</td></tr></table>

## 输出电压纹波

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/7b59404b36bce7f860d10ad9b5e4b1502a26e87ad0e5b2746305de0a91277570.jpg)

85 VAC

$\begin{array} { r l } { \mathbf { \Delta } } & { { } \mathsf { C H 1 } ~ \mathsf { V _ { o u T } } \mathsf { R i p p l e } } \\ { \mathbf { \Delta } } & { { } \mathsf { V _ { P K - P K } } { = } 2 6 . 2 ~ \mathsf { m V } } \end{array}$

Test Condition:

➢ Full Load

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/275fcef9f5a8af4cc829022ad8ccb8216f98e264b34d5189d6f3d80b3a8e76cf.jpg)

85 VAC

$\begin{array} { r l } { \mathbf { u } } & { { } \mathsf { C H 1 V _ { o u \top } R i p p l e } } \\ { \mathbf { \Delta } } & { { } \mathsf { V _ { P K - P K } } = 3 5 . 9 \mathsf { m V } } \end{array}$

Test Condition:

➢ Full Load

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/b7246f19f6a3d1815b356d8e71158965a0eceff9cc64b69c69831d4781954e83.jpg)

265 VAC

$\begin{array} { r l } { \mathbf { u } } & { { } \mathsf { C H 1 V _ { o u T } R i p p l e } } \\ { \mathbf { \Delta } } & { { } \mathsf { V _ { P K - P K } } = 4 1 \mathsf { m V } } \end{array}$

Test Condition:

➢ Full Load

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/52525171cb8307685b9fb552d250c42a3fc8ebcc13b0ccf6e3b8fbe4b2130f30.jpg)

265 VAC

$\begin{array} { r l } { \mathbf { \delta u } } & { { } \mathsf { C H 1 } \mathsf { V _ { \mathrm { o u T } } R i p p l e } } \\ { \mathbf { \delta v _ { \mathsf { P K - P K } } = } 6 0 . 8 \mathsf { m V } } \end{array}$

Test Condition:

➢ Full Load

## (50%-100%)

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/bf5c30738a4fa7531cedc11d6e6b5e3957067060f4459b9c6a6611bb9de9edbd.jpg)

85 VAC

CH1 VOUT  
CH3 IOUT

$$
V _ {P K - P K} = 1 3 1 \mathrm{mV}
$$

## Test Condition:

➢ 0.125 A-0.25 A-0.125 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/8cd3de0b6939ff9f1d0cb53fd8e6fc33579542c991f968858b4c6e705ca672b8.jpg)

85 VAC

CH1 VOUT  
CH3 IOUT

$$
V _ {P K - P K} = 2 4 8 \mathrm{mV}
$$

## Test Condition:

➢ 0.125 A-0.25 A-0.125 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/b56f234c781280f5f22c065e9f652f1e4adf4ab6132f9efa37ecec4015a3fb2d.jpg)

265 VAC

CH1 VOUT  
CH3 IOUT

$$
V _ {P K - P K} = 1 5 0 \mathrm{mV}
$$

## Test Condition:

➢ 0.125 A-0.25 A-0.125 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/61c27a13e37770538b0489cbc0527331b784b1dbe82f3c0189b7e8716cb4a13b.jpg)

265 VAC

CH1 VOUT  
CH3 IOUT

$$
V _ {P K - P K} = 2 6 1 \mathrm{mV}
$$

## Test Condition:

➢ 0.125 A-0.25 A-0.125 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## (10%-90%)

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/396d0f1a3aa031e239f9fb0092abc3fdca486391c022355c8ae3092533a02f3c.jpg)

85 VAC

CH1 VOUT $\mathsf { C H 1 } \mathsf { V } _ { \mathsf { O U T } }$ $V _ { p | c - P K } = 2 4 4 m v$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.025 A-0.25 A-0.025 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/ac956bace943ff37c0b5c64450d6da62a575da719f0f139ddcc9ccab77e67b01.jpg)

85 VAC

CH1 VOUT $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { p | c - P K } = 3 2 0 ~ \mathsf { m V }$  
CH3 IOUT $\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.025 A-0.25 A-0.025 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/d954a20d4b7e6cc6aabba17eba8517d6c1bfef427500c449cf7771c4b3dd2f55.jpg)

265 VAC

CH1 V $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { \mathsf { P K - P K } } = 2 6 4 ~ \mathsf { m V }$  
CH3 IOUT

## Test Condition:

➢ 0.025 A-0.25 A-0.025 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/bd457dba29c82cbb5839b75068e8ffc9877cdd41acf488354bce07744045e015.jpg)

265 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { p | c - P K } = 3 3 2 m v$  
CH3 IOUT $\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.025 A-0.25 A-0.025 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## 输出电压开机波形

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/ea943ea65d08be615ecd2b73b114d98c2455b4befac6261c76d32845e165d3f1.jpg)

85 VAC  
![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/13d0f81262a1f3dc84c3e4c8bedf7876f505fe92eb1399c74f9e51a60c00219e.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/f2628005bfec0e885372464a0f990328a985aa7e3b57d33fa39d512e197d529d.jpg)

85 VAC  
![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/af368013f26366fb79ced3990e9c3154d91fd7f9c3e6874424af7a15d86e632a.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/9cd6d7c014239bbe19e59cb5607c82d92b3ba9c7fcecd68349992b9638618664.jpg)

265 VAC  
![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/cc415b3cc9dfd9661a8144b66c8e5275b70e8cefaacd371a61ec71234ebbff98.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/32d3293ee2ff52323b4e87ef91900dc61704342448bb4060441aacbde1873772.jpg)

265 VAC  
![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/4ac69620bb1e4f991d5fabb1e59cc03abdc093db9bcd6cfd5f89bd0dc7e5dd3b.jpg)  
Test Condition:  
➢ Full Load

## MOSFET

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/1c814a226924c0dc8baa48c5ad40e3abb9ef80f8470f82a1c7c6cd8547a47f1b.jpg)

85 VAC

CH4 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 1 2 9 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 8 1 2 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/e7f074947bfb3262557bfaad86149c66b3ac6358bb5516b56f6b366d26d5c79a.jpg)

85 VAC

CH4 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 1 2 7 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 4 7 7 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/542526f8020df9b161932b5847e7fe40b0f0513954737d530ba91dd8de9a1bf2.jpg)

265 VAC

CH4 VDS  
CH3 IDS

$$
\begin{array}{l} V _ {D S \_ M A X} = 3 9 0 \mathrm{V} \\ I _ {D S \_ M A X} = 0. 8 7 1 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/d135e8069617a39ac3f18e7b93707b910f4eb2f632abebb0654980a796ed1cd4.jpg)

265 VAC

CH4 VDS  
CH3 IDS

$$
\begin{array}{l} V _ {D S \_ M A X} = 3 9 0 \mathrm{V} \\ I _ {D S \_ M A X} = 0. 5 1 9 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

## BPA8505D

## KP3114SGA

注3：由于BPA8505D限流点较高、起机时CCM深度较深、开关速度比KP3114SGA快，导致开机时MOS的电流应力较大。

## MOSFET

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/22287400ba3a0b57a252d5239e3cb2fd7e0e0357f3f3cddf4b5c7d9c79902879.jpg)

85 VAC

CH4 VDS  
CH3 IDS

$$
\begin{array}{l} V _ {D S \_ M A X} = 1 2 5 \mathrm{V} \\ I _ {D S \_ M A X} = 0. 4 1 5 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/68e20c1e3cc9ab7b81f02d3203dab799d0fcfc98c4425cb761161402ec7d4185.jpg)

85 VAC

CH4 VDS  
CH3 IDS

$$
\begin{array}{l} V _ {D S \_ M A X} = 1 2 8 \mathrm{V} \\ I _ {D S \_ M A X} = 0. 3 8 2 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/d4a195d159e172697722376a022f52dfe41553f5cb6de90606abe97880e3e4d0.jpg)

265 VAC

CH4 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 3 9 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 4 3 3 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/37396d37f615b52b6d8dadde4740bb3728336d1f753018c727c0f75fde4b482a.jpg)

265 VAC

CH4 VDS

$$
\begin{array}{l} V _ {D S \_ M A X} = 3 9 0 \mathrm{V} \\ I _ {D S \_ M A X} = 0. 3 8 5 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

## 输出二极管开机波形

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/faf691822f57efdfafffe7fe6674f426924b758f1c4797513e467f3fab4fb0e6.jpg)

85 VAC

CH4 VR  
CH3 IF

$$
V _ {R \_ M A X} = 1 2 0 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 0. 4 9 6 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/f3a77bb9af61b9c1980922e4c533b9ab52c0272623cb5cace9b23b726f81fc02.jpg)

85 VAC

CH4 VR  
CH3 IF

$$
V _ {R \_ M A X} = 1 1 4 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 0. 4 4 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/0deb4c48ff25abfc553c121ae6827ae5646fcf968341053d7c4631b2ea2ea6b6.jpg)

265 VAC

CH4 VR  
CH3 IF

$$
V _ {R \_ M A X} = 3 9 0 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 0. 5 6 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/5ec7d5f47c7748bb29a7af88057f0c6d225f54e7f50d7e0676b0b5bf79d3cb5a.jpg)

265 VAC

CH4 VR  
CH3 IF

$$
V _ {R \_ M A X} = 3 8 0 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 0. 4 5 6 \mathrm{A}
$$

## Test Condition:

➢ Full Load

## 输出二极管稳态波形

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/cc5bc6202470d6b30168c0a65ef765dec1821e5e1990da02b236eb0a45cfdeea.jpg)

85 VAC

CH4 VR  
CH3 IF

$$
V _ {R \_ M A X} = 1 2 4 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 0. 4 0 8 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/c4405ec200d1fb675a5d5aa2de921f37c39db67b820dc381e2b41ed43b3cc94a.jpg)

85 VAC

CH4 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 1 1 8 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 0. 4 1 2 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/75bd4d5756ca0c4cb6f6ed1698ad4ae3f907e1b239d81cbb47dc51686a3073f5.jpg)

265 VAC

CH4 VR  
CH3 IF

$$
V _ {R \_ M A X} = 3 8 2 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 0. 4 1 6 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/1398378cd25a3d520251f39da9adb84a24d42cb3d5d6bfd5d67b2e920a935a6b.jpg)

265 VAC

CH4 VR  
CH3 IF

$$
V _ {R \_ M A X} = 3 7 3 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 0. 4 0 4 \mathrm{A}
$$

## Test Condition:

➢ Full Load

## MOSFET

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/025ee6378221bfdcb95214d2469eaa440b1e15cefdf37d336dbc987edb80f7a8.jpg)

85 VAC

CH4 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 1 2 7 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 8 4 8 \mathrm{A} \end{array}
$$

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/a0c2b8aa8dbc1ee64d71b87053df0f4966013af5a814991998eb26b65b9bfbce.jpg)

85 VAC

CH4 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 1 2 9 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 5 2 \mathrm{A} \end{array}
$$

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/dab13f4da476bea8ba5f597aa8a4acb6f56e843f445014d67d11fd67bfe3cef5.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 3 9 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 9 7 5 \mathrm{A} \end{array}
$$

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/795691bdd2f586cd96f2e0aaaa88881e81c96def03d845d040f554985cc338b3.jpg)

265 VAC

CH4 VDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 4 0 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 6 \mathrm{A} \end{array}
$$

## 温升测试

BPA8505D

<table><tr><td rowspan="2">项目</td><td>85VAC</td><td>115VAC</td><td>230VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>50</td><td>50</td><td>50</td><td>50</td></tr><tr><td>BPA8505D (U1)</td><td>69.4</td><td>71.1</td><td>80.9</td><td>84.3</td></tr><tr><td>电感器绕组(L2)</td><td>68.4</td><td>68.9</td><td>71.9</td><td>72.9</td></tr><tr><td>电感器磁芯(L2)</td><td>62.2</td><td>62.7</td><td>64.7</td><td>65.1</td></tr><tr><td>整流二极管(D3)</td><td>71.2</td><td>72.4</td><td>77.8</td><td>79.6</td></tr><tr><td>整流桥(D1)</td><td>53.9</td><td>53.5</td><td>53.6</td><td>53.7</td></tr><tr><td>输入电解电容(C6)</td><td>58.1</td><td>57.3</td><td>59.9</td><td>60.7</td></tr><tr><td>输出电解电容(C3)</td><td>56.8</td><td>57.2</td><td>58.6</td><td>59.9</td></tr></table>

备注：增大芯片Source散热铜箔面积可以降低芯片温度

KP3114SGA

<table><tr><td rowspan="2">项目</td><td>85VAC</td><td>115VAC</td><td>230VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>50</td><td>50</td><td>50</td><td>50</td></tr><tr><td>KP3114SGA (U1)</td><td>75.9</td><td>75.7</td><td>85.1</td><td>89.1</td></tr><tr><td>电感器绕组(L2)</td><td>66.1</td><td>66.6</td><td>68.8</td><td>69.8</td></tr><tr><td>电感器磁芯(L2)</td><td>65.2</td><td>65.6</td><td>67.8</td><td>68.8</td></tr><tr><td>整流二极管(D3)</td><td>71.6</td><td>71.7</td><td>76.3</td><td>78.1</td></tr><tr><td>整流桥(D1)</td><td>53.1</td><td>52.4</td><td>52.5</td><td>52.7</td></tr><tr><td>输入电解电容(C6)</td><td>56.3</td><td>55.8</td><td>57.1</td><td>57.6</td></tr><tr><td>输出电解电容(C3)</td><td>54.6</td><td>54.3</td><td>55.2</td><td>55.5</td></tr></table>

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/0e81a82145f5f6a397e8a021d4824e58f396e33c9e001f8ec23956ae01c1267b.jpg)

115Vac Line  
![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/86de9e8335a1191413ef3421208a129189d175badc85c5e552a379ebb497d8dc.jpg)

230Vac Line

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/6dd7ea22ce63a897406c6f82260b5c2be9c047258f4bea2502d57a6fae131c69.jpg)

115Vac Neutral

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/1bbb830f2c56ff4eb2113ce403eb666da324d51207172a51770265ffef4011ff.jpg)

230Vac Neutral

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/269c570791966763d5b34a9f1140a59afb812f3a06425008770709ca750b4126.jpg)

115Vac Line  
![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/150636b9d8d8cee65333604d11b259a847a81dafe7deef7fec3e54e049f707b8.jpg)

230Vac Line

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/af29ed3c19277856b2f68d440545170aaa9b1349566c229a8d221ffd0ef8a1ef.jpg)

115Vac Neutral

![](./素材/images/BPA8505D_VS_KP3114SGA对比测试_5V250mA/a8654204b3993969ad3b3b70fe41e1b9a6e78904d0b08cddbc6ba3ae50037087.jpg)

230Vac Neutral

BPA8505D

<table><tr><td>差模</td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>+1.5kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-1.5kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr></table>

KP3114SGA

<table><tr><td>差模</td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>+1.5kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-1.5kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr></table>

1PCS 561 BUS

## EFT

BPA8505D

<table><tr><td>差模</td><td>电压</td><td>脉冲群持续时间</td><td>脉冲频率</td><td>测试时间</td><td>测试结果</td></tr><tr><td>L to N</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr></table>

KP3114SGA

<table><tr><td>差模</td><td>电压</td><td>脉冲群持续时间</td><td>脉冲频率</td><td>测试时间</td><td>测试结果</td></tr><tr><td>L to N</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr></table>

BPA8505D

<table><tr><td>测试点</td><td>电压(V)</td><td>放电类型</td><td>放电次数</td><td>测试结果</td></tr><tr><td>Vo</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr></table>

KP3114SGA

<table><tr><td>测试点</td><td>电压(V)</td><td>放电类型</td><td>放电次数</td><td>测试结果</td></tr><tr><td>Vo</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr></table>

## THANK YOU FOR WATCHING
