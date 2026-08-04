![](./素材/images/BPA8616P_VS_TNY276P对比测试/cf648895afb12dd8efd7993bc7e204281d1f0390c2b031ec51eb95becbdb53e5.jpg)

## BPA8616P&TNY276P对比测试

## (12V/0.7A@85\~265Vac)

上海晶丰明源半导体股份有限公司

Shanghai Bright Power Semiconductor Co., Ltd.

WHX

时间：2020年12月

## 电气参数对比

<table><tr><td></td><td>BPA8616P</td><td>TNY276P</td></tr><tr><td>开关频率</td><td>132KHz</td><td>132KHz</td></tr><tr><td>Mosfet BV</td><td>700V</td><td>700V</td></tr><tr><td> $R_{DS\_ON}$ </td><td>11Ω</td><td>14Ω</td></tr><tr><td>限流点</td><td>350mA</td><td>350mA</td></tr><tr><td>软启动</td><td>有</td><td>无</td></tr><tr><td>输入过压保护</td><td>有</td><td>无</td></tr><tr><td>输入欠压保护</td><td>内置</td><td>外加</td></tr><tr><td>输出过压保护</td><td>自动重启</td><td>锁死</td></tr><tr><td>过载保护</td><td>有</td><td>有</td></tr><tr><td>封装</td><td>DIP7, SOP7</td><td>DIP7, SMD8C</td></tr></table>

## 测试数据对比

电源规格：85\~265Vac输入，12V/0.7A输出

<table><tr><td colspan="2"></td><td>BPA8616P</td><td>TNY276P</td><td></td></tr><tr><td colspan="2">待机功耗</td><td>53mW</td><td>76mW</td><td>包含输入电压检测电阻损耗</td></tr><tr><td rowspan="2">效率</td><td>115Vac</td><td>78.60%</td><td>78.50%</td><td></td></tr><tr><td>230Vac</td><td>79.20%</td><td>79.90%</td><td></td></tr><tr><td rowspan="2">输出电压纹波</td><td>85Vac</td><td>134mV</td><td>138mV</td><td></td></tr><tr><td>265Vac</td><td>124mV</td><td>134mV</td><td></td></tr><tr><td rowspan="2">动态负载性能</td><td>50%-100%</td><td> $148mV_{PK\_PK}$ </td><td> $200mV_{PK\_PK}$ </td><td></td></tr><tr><td>10%-90%</td><td> $196mV_{PK\_PK}$ </td><td> $272mV_{PK\_PK}$ </td><td></td></tr><tr><td rowspan="2">MOSFET应力</td><td> $V_{DS}$ </td><td>540V</td><td>540V</td><td></td></tr><tr><td> $I_{DS}$ </td><td>0.68A</td><td>0.62A</td><td></td></tr><tr><td rowspan="2">二极管应力</td><td>VRR</td><td>67.2V</td><td>70.4V</td><td></td></tr><tr><td> $I_{PK}$ </td><td>4.64A</td><td>4.92A</td><td></td></tr><tr><td colspan="2">温升测试(环温50°C)</td><td>108°C</td><td>110°C</td><td></td></tr><tr><td colspan="2">传导EMI</td><td>&gt;6dB裕量</td><td>&gt;6dB裕量</td><td></td></tr><tr><td colspan="2">Surge</td><td>Pass</td><td>Pass</td><td>共模2kV,差模4kV</td></tr><tr><td colspan="2">EFT群脉冲</td><td>Pass</td><td>Pass</td><td>4kV,5kHz/38kHz/100kHz</td></tr><tr><td colspan="2">ESD</td><td>Pass</td><td>Pass</td><td>8kV接触放电/15kV空气放电</td></tr></table>

## 电路及实物图

![](./素材/images/BPA8616P_VS_TNY276P对比测试/2cfc54ce77b585c8b8c2d5f2d17e1ee68f77e92563dba783f2cc203d80a4858b.jpg)

![](./素材/images/BPA8616P_VS_TNY276P对比测试/9749703a5481c3f37bf6003fbbcff29d463288cdd0d4df00d9d936dc64577ac8.jpg)

![](./素材/images/BPA8616P_VS_TNY276P对比测试/84a495e41ae00bf01ee5315533062f98985491099cc97446127a726220ea5db6.jpg)

空载功耗  
![](./素材/images/BPA8616P_VS_TNY276P对比测试/8edb98d1ee9369046a5adbb2c417ae699a38eb6efb0174e6552f4ddb3d7805c0.jpg)

输入电压

备注：TNY276P在FB pin脚接一串电阻到Bulk电压做UVP，阻值4M；BPA8616P内部集成UVP功能，无需外部电阻

效率测试  
![](./素材/images/BPA8616P_VS_TNY276P对比测试/3d7e24e5f60e0fe7b9b1f2d15bc8e11a2f4e274e7d14bca84827eb1c885ddc67.jpg)

负载

## 输出电压调整率

BPA8616P

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>12.203</td><td>12.203</td><td>12.206</td><td>12.206</td><td>12.211</td><td>12.211</td><td>12.21</td><td>0.07%</td></tr><tr><td>20%</td><td>12.201</td><td>12.201</td><td>12.205</td><td>12.204</td><td>12.208</td><td>12.208</td><td>12.20</td><td>0.06%</td></tr><tr><td>40%</td><td>12.203</td><td>12.203</td><td>12.203</td><td>12.201</td><td>12.208</td><td>12.204</td><td>12.20</td><td>0.06%</td></tr><tr><td>60%</td><td>12.210</td><td>12.200</td><td>12.201</td><td>12.203</td><td>12.206</td><td>12.201</td><td>12.20</td><td>0.08%</td></tr><tr><td>80%</td><td>12.196</td><td>12.198</td><td>12.198</td><td>12.199</td><td>12.205</td><td>12.203</td><td>12.20</td><td>0.07%</td></tr><tr><td>100%</td><td>12.195</td><td>12.196</td><td>12.196</td><td>12.196</td><td>12.201</td><td>12.200</td><td>12.20</td><td>0.05%</td></tr><tr><td>平均值</td><td>12.20</td><td>12.20</td><td>12.20</td><td>12.20</td><td>12.21</td><td>12.20</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>0.12%</td><td>0.06%</td><td>0.08%</td><td>0.08%</td><td>0.08%</td><td>0.09%</td></tr></table>

计算方法：调整率=100%\*(最大值-最小值)/平均值  
测试条件：无假负载

TNY276P

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>12.204</td><td>12.203</td><td>12.203</td><td>12.203</td><td>12.203</td><td>12.201</td><td>12.20</td><td>0.02%</td></tr><tr><td>20%</td><td>12.203</td><td>12.203</td><td>12.201</td><td>12.201</td><td>12.200</td><td>12.200</td><td>12.20</td><td>0.02%</td></tr><tr><td>40%</td><td>12.201</td><td>12.201</td><td>12.200</td><td>12.200</td><td>12.199</td><td>12.199</td><td>12.20</td><td>0.02%</td></tr><tr><td>60%</td><td>12.200</td><td>12.199</td><td>12.199</td><td>12.198</td><td>12.198</td><td>12.198</td><td>12.20</td><td>0.02%</td></tr><tr><td>80%</td><td>12.198</td><td>12.198</td><td>12.196</td><td>12.196</td><td>12.196</td><td>12.195</td><td>12.20</td><td>0.02%</td></tr><tr><td>100%</td><td>12.195</td><td>12.196</td><td>12.195</td><td>12.195</td><td>12.194</td><td>12.194</td><td>12.19</td><td>0.02%</td></tr><tr><td>平均值</td><td>12.20</td><td>12.20</td><td>12.20</td><td>12.20</td><td>12.20</td><td>12.20</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>0.07%</td><td>0.06%</td><td>0.07%</td><td>0.07%</td><td>0.07%</td><td>0.06%</td></tr></table>

## 输出电压纹波

![](./素材/images/BPA8616P_VS_TNY276P对比测试/e42e6536da06ff464b515280c63a438780b63a7ba085072e12f3fe43d563c35f.jpg)

85 VAC  
![](./素材/images/BPA8616P_VS_TNY276P对比测试/dcabd9bee36b99f6a3855434185101063aa88658534203a2f4b931c6d49c23ce.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8616P_VS_TNY276P对比测试/032ac7ccfe2966af736bc0fd700c55f7e7d44406e8379c68162d6b964ebc245b.jpg)

85 VAC  
![](./素材/images/BPA8616P_VS_TNY276P对比测试/15550cfa4bd8cd29d8cae7a472c0d8062c2ce12f6504fc47669750b06bf32583.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8616P_VS_TNY276P对比测试/b6780a30f6cc02cc9542f6bac099f968080c0394df5eb3b2d4e19601129051ee.jpg)

265 VAC  
![](./素材/images/BPA8616P_VS_TNY276P对比测试/8ae987be0781478fde816da902b755c2b7634843316803af792ceccf94bd5f7c.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8616P_VS_TNY276P对比测试/a0c2be3593cc6f6e753e2d50c9802dff6739af168bc19e24a633f27264a60dc9.jpg)

265 VAC  
![](./素材/images/BPA8616P_VS_TNY276P对比测试/97eada8b05f969336aeab507835f2a368d7c4eee034b8f02ded20b1f110436a1.jpg)  
Test Condition:  
➢ Full Load

## (50%-100%)

![](./素材/images/BPA8616P_VS_TNY276P对比测试/7f1a6f989626dca143e4ad443948e143464b3ac6b3f600e4bcb0dd9515914dd3.jpg)

85 VAC

CH4 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { p | c - P K } = 1 4 8 ~ \mathsf { m V }$  
CH3 ${ \mathsf I } _ { 0 \mathsf U \top }$

## Test Condition:

➢ 0.35 A-0.7 A-0.35 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8616P_VS_TNY276P对比测试/19e2a73d489d342f1751aa1deb521df42740407081e46db040f742228e665c6d.jpg)

85 VAC

$\mathsf { C H } 4 \mathsf { V } _ { \mathsf { O U T } }$ $V _ { \mathsf { P K - P K } } { = } 1 9 6 ~ \mathsf { m V }$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.35 A-0.7 A-0.35 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8616P_VS_TNY276P对比测试/22acea0ccea9c0023a2f922aad98a151fe0ff2901cb160504bb704ce413372b8.jpg)

265 VAC

CH4 $\mathsf { V } _ { \mathsf { O U T } }$ $v _ { p _ { \vert k - P K } } = 1 3 6 ~ \mathsf { m v }$  
CH3 $\mathsf { I } _ { 0 \mathsf { U T } }$

## Test Condition:

➢ 0.35 A-0.7 A-0.35 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8616P_VS_TNY276P对比测试/80bab7327ec44191a24689e374247f9e6798c6f53161a28a61df83a2be88227a.jpg)

265 VAC

$\mathsf { C H } 4 \mathsf { V } _ { \mathsf { O U T } }$ $v _ { p _ { \vert k - P K } } = 2 0 0 ~ \mathsf { m V }$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.35 A-0.7 A-0.35 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## (10%-90%)

![](./素材/images/BPA8616P_VS_TNY276P对比测试/7e093e8c4b3e127204d32d54d533e654f677438a80df5cdbcd9ee46f69739772.jpg)

85 VAC

CH4 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { \mathsf { P K - P K } } { = } 1 9 6 \mathsf { m V }$  
CH3 ${ \mathsf I } _ { 0 \mathsf U \top }$

## Test Condition:

➢ 0.07A-0.63 A-0.07 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8616P_VS_TNY276P对比测试/7fa9ae0b51acf787870613a43df3982040fb6574d31141ce6a924617013cb5f9.jpg)

85 VAC

CH4 VOUT $\mathsf { C H } 4 \mathsf { V } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 2 7 2 m v$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.07A-0.63 A-0.07 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8616P_VS_TNY276P对比测试/ac1bb8b2b5f70881d706defa5ffd9c4b3459dc416c296444d044000c0a9f9694.jpg)

265 VAC

CH4 V $\mathsf { V } _ { \mathsf { O U T } }$ $\mathsf { V } _ { \mathsf { P K - P K } } { = } 1 6 7 \mathsf { m V }$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.07A-0.63 A-0.07 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8616P_VS_TNY276P对比测试/d505414265383772abb9b291f763ad98da8e9bfb66aabb26679ff8d5f3990f1c.jpg)

265 VAC

$\mathsf { C H } 4 \mathsf { V } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 2 4 4 m v$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.07A-0.63 A-0.07 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## 输出电压开机波形

![](./素材/images/BPA8616P_VS_TNY276P对比测试/6c9bf27b3217d664143d7620466a0e99248bf87f2727a11376152affcebd48d8.jpg)

85 VAC  
![](./素材/images/BPA8616P_VS_TNY276P对比测试/a4532fb00bfa8b16631d01bb334b3659fdcb35ec35a632f42e03af11db46eeb2.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8616P_VS_TNY276P对比测试/b0d71c97e5609319d4b0345cdfa8bd22e01fc194a0f1d728931fa53ee47fd182.jpg)

85 VAC  
![](./素材/images/BPA8616P_VS_TNY276P对比测试/ad69ad1b7b824b2f4a835e3fbbffff102d3b44e4e0536936902a6060ec0f0373.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8616P_VS_TNY276P对比测试/482bb483f43b7c2fd2cb37a191abb25650eaf4fa30de329f4a94e890162a2d99.jpg)

265 VAC  
![](./素材/images/BPA8616P_VS_TNY276P对比测试/05654b7e46bf5d1481a0296c69fac27273bec459ab4847ea84a6b1d7d70c54e0.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8616P_VS_TNY276P对比测试/864d229dcb8cd7775edef2c041496b3529a478543c6398031ccf05a3d092ce7f.jpg)

265 VAC  
![](./素材/images/BPA8616P_VS_TNY276P对比测试/285fab124822e9db9acd7d82921bc880f098f8c23a0cfeed03aa8bcca7a6e39c.jpg)  
Test Condition:  
➢ Full Load

## MOSFET

![](./素材/images/BPA8616P_VS_TNY276P对比测试/db77f707c3676e9564677c6cc86c5c5fd9d2bc7bed9fbfa626edaa4ef81463bc.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 7 2 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 4 3 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8616P_VS_TNY276P对比测试/fe5155704767731f2a19cde0d21b1ea5d87ab19657e215ff15dd82996d55908e.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 6 8 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 4 1 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8616P_VS_TNY276P对比测试/a92475def20495a8629a42e463a94cebd0b40ee087bae4edc5932bf8e232f01c.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 5 4 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 6 8 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8616P_VS_TNY276P对比测试/488225eeb224b9e08062bddf7646970a220528b07e7bd97216868ea7889651a0.jpg)

265 VAC

CH1 VDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 5 4 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 6 2 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

## MOSFET

![](./素材/images/BPA8616P_VS_TNY276P对比测试/c8bbf14ed1dd0211abb302406f0ba1b55ef69ccbee65527506af4966af8237d0.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 7 5 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 4 2 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8616P_VS_TNY276P对比测试/b4653eb0aa521385cced8d577a2ed33a676ca82958bbae4fbdbb8fb3082c11c3.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 6 7 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 3 8 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8616P_VS_TNY276P对比测试/fd18b97fb6a2bf25b76f70f05ed20c71deee327fd9d84a6078236f3216cc486f.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
V _ {D S \_ M A X} = 5 4 0 V
$$

$$
I _ {D S \_ M A X} = 0. 5 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8616P_VS_TNY276P对比测试/8c5083a59aa0bedb6f7d0d03dc6cb248fcd4929aeccfef1a1c65ea41173380d1.jpg)

265 VAC

CH1 VDS

$$
V _ {D S \_ M A X} = 5 4 0 V
$$

$$
I _ {D S \_ M A X} = 0. 4 3 7 \mathrm{A}
$$

## Test Condition:

➢ Full Load

## 输出二极管开机波形

![](./素材/images/BPA8616P_VS_TNY276P对比测试/64fc08c4d412c3185a4b1270a8ea820d13e4c1d49d5b7f7bb4391c5e9197de1c.jpg)

85 VAC  
![](./素材/images/BPA8616P_VS_TNY276P对比测试/b6edee249ed100625608b458a18dfb06ed33f4fcc151f3ccd1087b8fea48197b.jpg)

Test Condition:  
➢ Full Load

![](./素材/images/BPA8616P_VS_TNY276P对比测试/b9727f2eed0cc031cf2aaa46ab9b62ee19054f52989c77221693af4c1dd2c1cd.jpg)

85 VAC  
![](./素材/images/BPA8616P_VS_TNY276P对比测试/fe56da7954eed87ca6b6b5237aafb5052ebcb563633ee159ea965c3be03b85bc.jpg)

Test Condition:  
➢ Full Load

![](./素材/images/BPA8616P_VS_TNY276P对比测试/4e9edd435ac1dbcaa3cbe151b933b12cd95a664f68cfb2f658dc6941afad2fff.jpg)

265 VAC  
![](./素材/images/BPA8616P_VS_TNY276P对比测试/2a67197cbd927a1629125c3ec50469454f13274c16793456ec52696a9bcd6472.jpg)

Test Condition:  
➢ Full Load

![](./素材/images/BPA8616P_VS_TNY276P对比测试/f1ce20ad0fdd61bc91c71804af1db2c3753ceab4ae50d1afc2333976a37623cf.jpg)

265 VAC  
![](./素材/images/BPA8616P_VS_TNY276P对比测试/92f7a36c807cd5552b90a8923e681b75bf2f3c7fc1891722b1ca0b71a3e4f9e3.jpg)

Test Condition:  
➢ Full Load

机电流电压应力小

TNY276P

几电流电压应力大

## 输出二极管稳态波形

![](./素材/images/BPA8616P_VS_TNY276P对比测试/66bf924ae54a50105e9b43da8b74500c0a39150046a72755b7150b5ea76f0dc4.jpg)

85 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 3 8. 1 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 3. 6 9 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8616P_VS_TNY276P对比测试/f28e5cadc90800dcb6237d4c8e4f32d892d240f63e208a169d78ffd02a202022.jpg)

85 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 3 9. 2 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 3. 3 7 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8616P_VS_TNY276P对比测试/1d21238ca9d6f544e679228cba969a81d4114bc6cb3eb6df8beff68677d274ce.jpg)

265 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 6 8. 1 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 4. 0 4 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8616P_VS_TNY276P对比测试/eb13da0ec157864593bc4f6b6fc2b88923f6e26d93e3ecdb4e0bd2fd6f1355a6.jpg)

265 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 6 8. 9 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 3. 7 5 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

## MOSFET

BPA8616P  
![](./素材/images/BPA8616P_VS_TNY276P对比测试/fa30f5eb08b35de96463de0edcbf27a28fc4921dc018f9b02c32ab4a69513380.jpg)

CH1 VO  
CH2 VDS  
CH4 VDC\_IN

$$
V _ {D S \_ M A X} = 6 6 0 \mathrm{V}
$$

$$
V _ {D C I N} = 5 5 0 \mathrm{V}
$$

Test Condition:

➢ Full Load

TNY276P  
![](./素材/images/BPA8616P_VS_TNY276P对比测试/fb29432c9856f536f5249aefcb99c89b61e73519ca998e702f842d78b79ecd02.jpg)

CH1 VO  
CH2 VDS  
CH4 VDC\_IN

$$
V _ {D S \_ M A X} = 7 2 0 \mathrm{V}
$$

$$
V _ {D C \_ I N} = 5 5 0 \mathrm{V}
$$

Test Condition:

➢ Full Load

BPA8616P  
![](./素材/images/BPA8616P_VS_TNY276P对比测试/37604e33d869d023e4c05992bf12ec8abe09de098b525f4f34023862f4b01fa1.jpg)

CH1 VAC\_IN  
CH4 Vo

VAC\_IN\_STARTUP=60 V

Test Condition:

➢ No Load

TNY276P  
![](./素材/images/BPA8616P_VS_TNY276P对比测试/00ce534f3503deb124f9803352a314b292dec327f6a0f511439c461549118dfb.jpg)

CH1 VAC\_IN  
CH4 Vo

VAC\_IN\_STARTUP=72 V

Test Condition:

➢ No Load

备注：TNY276P在FB pin脚接一串电阻到Bulk电压做UVP，阻值4M；BPA8616P内部集成UVP功能，无需外部电阻

## MOSFET

![](./素材/images/BPA8616P_VS_TNY276P对比测试/2ac29ecf8c5d839a6f2f9253d50c9e8193ba3ffc2f34e94b0784413c6ae1d002.jpg)

85 VAC

${ \mathsf { C H 1 } } \mathsf { V _ { D S } }$  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 6 8 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 4 4 \mathrm{A} \end{array}
$$

![](./素材/images/BPA8616P_VS_TNY276P对比测试/cef098e6acafd0ba5e19f85248239111b120aec2186455c0ab4deb696be37160.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 6 8 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 4 1 \mathrm{A} \end{array}
$$

![](./素材/images/BPA8616P_VS_TNY276P对比测试/577f2497991ea1a8fa1fb9140aafd786986a6bd9168f705af3e83243b9d05c89.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
V _ {D S \_ M A X} = 5 4 0 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 0. 7 \mathrm{A}
$$

![](./素材/images/BPA8616P_VS_TNY276P对比测试/ff9975b0180b63ae059c590c68fb56a714dabf2b2de4363ee22e48f7a7cf08e9.jpg)

265 VAC

CH1 VDS

$$
V _ {D S \_ M A X} = 5 4 0 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 0. 6 5 \mathrm{A}
$$

## 温升测试

BPA8616P

<table><tr><td rowspan="2">项目</td><td>85VAC</td><td>115VAC</td><td>230VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>50</td><td>50</td><td>50</td><td>50</td></tr><tr><td>BP8616P (U2)</td><td>108.57</td><td>96.74</td><td>92.34</td><td>93.97</td></tr><tr><td>变压器绕组(T1)</td><td>77.67</td><td>77.36</td><td>78.96</td><td>80</td></tr><tr><td>变压器磁芯(T1)</td><td>73.54</td><td>73.73</td><td>75.96</td><td>77</td></tr><tr><td>整流二极管(D3)</td><td>80.24</td><td>79.98</td><td>80.05</td><td>80.36</td></tr><tr><td>整流桥(D1)</td><td>67.06</td><td>62.71</td><td>58.56</td><td>58.19</td></tr><tr><td>输入电解电容(C4)</td><td>73.73</td><td>69.79</td><td>67.49</td><td>67.77</td></tr><tr><td>输出电解电容(EC1)</td><td>52.85</td><td>52.62</td><td>52.39</td><td>52.42</td></tr></table>

TNY276P

<table><tr><td rowspan="2">项目</td><td>85VAC</td><td>115VAC</td><td>230VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>50</td><td>50</td><td>50</td><td>50</td></tr><tr><td>TNY276 (U2)</td><td>110.24</td><td>97.09</td><td>91.38</td><td>92.82</td></tr><tr><td>变压器绕组(T1)</td><td>76.8</td><td>76.77</td><td>77.54</td><td>78.6</td></tr><tr><td>变压器磁芯(T1)</td><td>75.82</td><td>74.93</td><td>76.64</td><td>77.5</td></tr><tr><td>整流二极管(D3)</td><td>80.19</td><td>79.72</td><td>79.79</td><td>80.07</td></tr><tr><td>整流桥(D1)</td><td>67.76</td><td>62.79</td><td>57.88</td><td>57.38</td></tr><tr><td>输入电解电容(C4)</td><td>73.23</td><td>69.1</td><td>66.61</td><td>66.9</td></tr><tr><td>输出电解电容(EC1)</td><td>61.85</td><td>61.52</td><td>61.65</td><td>61.76</td></tr></table>

备注：增大芯片Source散热铜箔面积可以降低芯片温度

![](./素材/images/BPA8616P_VS_TNY276P对比测试/f6e90a9571f273bdf2b978ab26603959faf8539149c4985a1064e76e7698fbdf.jpg)

115Vac Line  
![](./素材/images/BPA8616P_VS_TNY276P对比测试/2c42ef80bfb9821bc4ad6b5cf6e70452b055dc387b85d2fd24c2ccd5fd5f3486.jpg)

230Vac Line

![](./素材/images/BPA8616P_VS_TNY276P对比测试/6e247d13796f06ce75cceacf72985e76e51e34e020f14784a38cc650d65b7b75.jpg)

115Vac Neutral

![](./素材/images/BPA8616P_VS_TNY276P对比测试/462013c363d590fc1416da0858750716ece5f2c9b0d6ad1c8b80a46518214f6d.jpg)

230Vac Neutral

![](./素材/images/BPA8616P_VS_TNY276P对比测试/6b5eb92b4922b9de11536229915fe9e6634d4fc5b477f5311f713cdb369a71d5.jpg)

115Vac Line  
![](./素材/images/BPA8616P_VS_TNY276P对比测试/ca198512b2597d94627dd1da8f11ddef6b2c66e5d6eddbcefe91d2f261cca346.jpg)

230Vac Line

![](./素材/images/BPA8616P_VS_TNY276P对比测试/6c0eb4d0c1d7dd1b04d98c932670e2e8bf181b65b285775ec177a66551a01180.jpg)

115Vac Neutral

![](./素材/images/BPA8616P_VS_TNY276P对比测试/5d5b3a3f39a3c0a984dd53a1f75131fea492bbed5746813134cebcfb75cdc42d.jpg)

230Vac Neutral

## Surge

BPA8616P

<table><tr><td>差模</td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>+2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to PE</td><td>+4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>L to PE</td><td>-4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>N to PE</td><td>+4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>N to PE</td><td>-4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr></table>

TNY276P

<table><tr><td>差模</td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>+2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to PE</td><td>+4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>L to PE</td><td>-4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>N to PE</td><td>+4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>N to PE</td><td>-4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr></table>

## EFT

BPA8616P

<table><tr><td>差模</td><td>电压</td><td>脉冲群持续时间</td><td>脉冲频率</td><td>测试时间</td><td>测试结果</td></tr><tr><td>L to N</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr></table>

TNY276P

<table><tr><td>差模</td><td>电压</td><td>脉冲群持续时间</td><td>脉冲频率</td><td>测试时间</td><td>测试结果</td></tr><tr><td>L to N</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr></table>

BPA8616P

<table><tr><td>测试点</td><td>电压(V)</td><td>放电类型</td><td>放电次数</td><td>测试结果</td></tr><tr><td>Vo</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr></table>

TNY276P

<table><tr><td>测试点</td><td>电压(V)</td><td>放电类型</td><td>放电次数</td><td>测试结果</td></tr><tr><td>Vo</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr></table>

## THANK YOU FOR WATCHING
