![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/e33de96a95bdcae55146bf2c78e07b898c6853c07cf3d9784291045e47097225.jpg)

## BPA8618P&TOP264VG对比测试

## (12V/1A@85\~265Vac)

上海晶丰明源半导体股份有限公司

Shanghai Bright Power Semiconductor Co., Ltd.

陈耀兵

2021 6 25

## 内容

参考电路  
特性参数对比  
电路及实物图  
性能测试对比  
结论和建议

BPA8618P  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/728a3f7848b6ccbc9b34c10e482f85df0ab2875370282fd9c077ca207849a50d.jpg)

◼ <50mW@230VAC <150mW@230VAC  
优异的动态响应速度，无输出过冲  
输入过欠保护无需电阻检测

TOP264V  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/d39a9bb1d40b01a9e0ec5391b981e9e04045642e625f9fbf33ac1b1da46399d5.jpg)

输出电流可调  
输入过欠压保护需要增加母线电阻检测  
66K 132K  
PWM控制模式，噪音小

## 电气特性对比

<table><tr><td></td><td>BPA8618P</td><td>TOP264VG</td></tr><tr><td>开关频率</td><td>132KHz</td><td>66KHz</td></tr><tr><td>Mosfet BV</td><td>700V</td><td>725V</td></tr><tr><td> $R_{DS\_ON}$ </td><td>4.5Ω</td><td>5.4Ω</td></tr><tr><td>限流点</td><td>550mA</td><td>最大1.3A,X脚可调</td></tr><tr><td>软启动</td><td>有</td><td>有</td></tr><tr><td>输出过压保护</td><td>有</td><td>有</td></tr><tr><td>输出短路保护</td><td>有</td><td>有</td></tr><tr><td>输出过载保护</td><td>有</td><td>有</td></tr><tr><td>反馈开路保护</td><td>有</td><td>有</td></tr><tr><td>过温保护</td><td>有</td><td>有</td></tr><tr><td>封装</td><td>SOP7</td><td>eDIP-12B</td></tr></table>

## BPA8618P

■采用简单的脉冲数控制无需外部环路补偿电路，具有较高的环路带宽和快速的动态响应  
■高集成度和优化的控制技术极大地减少了外围器件数量，节省了系统成本和体积，同时提高了可靠性

## TOP264VG

■采用多模式PWM控制技术，可充分提高所有负载条件下的效率集成负载补偿功能，可提高恒压精度和负载调整率  
66 kHz效率要求

## 测试数据对比

<table><tr><td colspan="2"></td><td>BPA8618P</td><td>TOP264VG</td><td></td></tr><tr><td colspan="2">待机功耗@230Vac</td><td>100mW</td><td>187mW</td><td>外供电,相同假负载电阻</td></tr><tr><td rowspan="2">效率</td><td>115Vac</td><td>81.75%</td><td>81.62%</td><td>满载效率</td></tr><tr><td>230Vac</td><td>82.52%</td><td>80.97%</td><td>满载效率</td></tr><tr><td rowspan="2">输出电压纹波</td><td>85Vac</td><td>74mV</td><td>65.4mV</td><td>满载</td></tr><tr><td>265Vac</td><td>76mV</td><td>61mV</td><td>满载</td></tr><tr><td rowspan="2">动态负载性能</td><td>50%-100%</td><td> $104mV_{PK\_PK}$ </td><td> $214.5mV_{PK\_PK}$ </td><td>@265Vac</td></tr><tr><td>10%-90%</td><td> $136mV_{PK\_PK}$ </td><td> $328mV_{PK\_PK}$ </td><td>@85Vac</td></tr><tr><td rowspan="2">MOSFET应力</td><td> $V_{DS}$ </td><td>528V</td><td>514V</td><td>@265Vac,满载启机</td></tr><tr><td> $I_{DS}$ </td><td>0.971A</td><td>0.996A</td><td>@265Vac,满载启机</td></tr><tr><td colspan="2">温升测试(环温50°C)</td><td>29.2°C</td><td>39.9°C</td><td>@265Vac,满载</td></tr><tr><td colspan="2">传导EMI</td><td>&gt;6dB裕量</td><td>&gt;6dB裕量</td><td></td></tr></table>

电源规格:85\~265Vac输入，12V/1A(BPA8618),12V/1A(TOP264)输出  
本报告的所有测试均基于：  
BPA8618P的100%负载电流为1A，TOP264的100%负载电流为1A

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/42b8aa0ea481c16e1f966a1c2d26fe31e5e2626a1e02e07a909f2b7d10c65a36.jpg)

BPA8618P:R3,R4,R15,CE2,R12,R17,R14不装;  
TOP264VG：R16,R13不装元件;

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/5443c2841614bb3a4ff65d5d1106b7778aba3622c7b3898448dc93bd361eac43.jpg)

## 元件面

## 贴片面

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/947f9a94b4248b285885c8a5002e2411629eeaae1aa3e273b64deea89c7add4f.jpg)

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/58ac8368082ea033150de56f391cc48816d3a7eefc2adebd60258e1b80bf1c64.jpg)

## 变压器规格书

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/57877a88bae9f156108882ffe753192d1e3a0806d02f98d7e966e6e7fd69e47d.jpg)

<table><tr><td>序号</td><td>起始脚</td><td>终止脚</td><td>绕制规则</td><td>匝数</td><td>绕线方式</td><td>挡墙(底部/顶部)</td></tr><tr><td>N1</td><td>3</td><td>2</td><td>2UEW φ0.3*1P</td><td>40Ts</td><td>密绕二层(PIN脚朝外)</td><td>6mm/3mm</td></tr><tr><td>胶带</td><td></td><td></td><td></td><td>2Ts</td><td></td><td></td></tr><tr><td>N2</td><td>5</td><td>4</td><td>2UEW φ0.3*1P</td><td>16Ts</td><td>均匀间绕一层(PIN脚朝外)</td><td>6mm/3mm</td></tr><tr><td>胶带</td><td></td><td></td><td></td><td>3Ts</td><td></td><td></td></tr><tr><td>N3</td><td>8</td><td>9</td><td>2UEW φ0.45*2P</td><td>11Ts</td><td>均匀间绕二层(PIN脚朝外)</td><td>6mm/3mm</td></tr><tr><td>胶带</td><td></td><td></td><td></td><td>3Ts</td><td></td><td></td></tr><tr><td>N4</td><td>2</td><td>1</td><td>2UEW φ0.3*1P</td><td>38Ts</td><td>密绕二层(PIN脚朝外)</td><td>6mm/3mm</td></tr><tr><td>胶带</td><td></td><td></td><td></td><td>3Ts</td><td></td><td></td></tr></table>

## 规格参数：

1）骨架：ECO2020立式（5+5PIN），磁芯材质：ECO2020 PC40 或同等材质 ，Ae＝37.1mm² ；  
2）N1、N2、N4: 2UEW 漆包线；N3: 三层绝缘线；  
3）绝缘胶带:3M900 或同等材质；  
4）初级绕组感量Lp：0.918mH±5%（测试条件： 0.3V，100kHz）；  
5）漏感量Llk：要求控制在初级绕组的2%以内(测试条件： 0.3 V，100kHz）；  
6）耐压测试= 3KV 2mA 1Min；  
7）成品要求：浸凡立水；

■注：BPA8618P和TOP264VG采用相同的变压器

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/5a1573e58d37749b14e0afda331c74447ea104692ae0dca98c2b353bceda8c9a.jpg)

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/d518722d5601b0e9012a13a30fd188638ebe1cf5f578ae1e990bb22f64eb3a72.jpg)

效率曲线  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/7e747049f9748e2bac3b86c0604b5c4a95ab775eaae93e84b82cdd3cbf7b04a5.jpg)

BPA8618P

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>12.207</td><td>12.207</td><td>12.207</td><td>12.207</td><td>12.207</td><td>12.207</td><td>12.21</td><td>0.00%</td></tr><tr><td>20%</td><td>12.206</td><td>12.206</td><td>12.206</td><td>12.207</td><td>12.207</td><td>12.207</td><td>12.21</td><td>0.01%</td></tr><tr><td>40%</td><td>12.205</td><td>12.205</td><td>12.205</td><td>12.206</td><td>12.206</td><td>12.206</td><td>12.21</td><td>0.01%</td></tr><tr><td>60%</td><td>12.204</td><td>12.204</td><td>12.204</td><td>12.205</td><td>12.205</td><td>12.205</td><td>12.20</td><td>0.01%</td></tr><tr><td>80%</td><td>12.204</td><td>12.204</td><td>12.204</td><td>12.205</td><td>12.205</td><td>12.205</td><td>12.20</td><td>0.01%</td></tr><tr><td>100%</td><td>12.203</td><td>12.203</td><td>12.203</td><td>12.204</td><td>12.204</td><td>12.204</td><td>12.20</td><td>0.01%</td></tr><tr><td>平均值</td><td>12.20</td><td>12.20</td><td>12.20</td><td>12.21</td><td>12.21</td><td>12.21</td><td></td><td></td></tr><tr><td>负载调整率</td><td>0.03%</td><td>0.03%</td><td>0.03%</td><td>0.02%</td><td>0.02%</td><td>0.02%</td><td></td><td></td></tr></table>

=100%\*( - )/  
测试条件：无假负载

TOP264VG

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>12.239</td><td>12.239</td><td>12.239</td><td>12.239</td><td>12.239</td><td>12.239</td><td>12.239</td><td>0.00%</td></tr><tr><td>0.2</td><td>12.238</td><td>12.238</td><td>12.238</td><td>12.237</td><td>12.237</td><td>12.237</td><td>12.238</td><td>0.01%</td></tr><tr><td>0.4</td><td>12.237</td><td>12.237</td><td>12.237</td><td>12.237</td><td>12.237</td><td>12.237</td><td>12.237</td><td>0.00%</td></tr><tr><td>0.6</td><td>12.236</td><td>12.236</td><td>12.236</td><td>12.236</td><td>12.236</td><td>12.236</td><td>12.236</td><td>0.00%</td></tr><tr><td>0.8</td><td>12.235</td><td>12.235</td><td>12.235</td><td>12.235</td><td>12.235</td><td>12.235</td><td>12.235</td><td>0.00%</td></tr><tr><td>1</td><td>12.235</td><td>12.235</td><td>12.235</td><td>12.235</td><td>12.235</td><td>12.235</td><td>12.235</td><td>0.00%</td></tr><tr><td>平均值</td><td>12.237</td><td>12.237</td><td>12.237</td><td>12.237</td><td>12.237</td><td>12.237</td><td></td><td></td></tr><tr><td>负载调整率</td><td>0.03%</td><td>0.03%</td><td>0.03%</td><td>0.03%</td><td>0.03%</td><td>0.03%</td><td></td><td></td></tr></table>

=100%\*( - )/  
测试条件：无假负载

## 输出电压纹波

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/3b722493cac9325dfba9ab0c299b8cfeefd77601111b6d1c745b2507f166711c.jpg)

BPA8618P

85 VAC  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/05cb57595fe2bc1252b536ff710174bf4583e5a3dc4505a1f14211706222f021.jpg)  
Test Condition:  
➢ FULL Load

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/9d88bb5490f01ac5c877cfa05c52e664f5848da14351cd0502d6a9eb72ae2c01.jpg)

BPA8618P

265 VAC  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/1a968b4d99ea62280abbe0d08515275e78a28bbc7359df9de5d446049eaebaaf.jpg)  
Test Condition:  
➢ FULL Load

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/93cb10faf86fbc3530b3863d0da741e782e8c5da4204d4af4558fa0c49a5a085.jpg)

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/48ad6702b0dba500684d5d2f3ff9af57030fd3aae66bf3ec2ac21566d71753da.jpg)

TOP264VG  
85 VAC  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/2d1686a926fc864aaeffe795c86e37e5aa2d4697851b716e79ee0511b183b919.jpg)  
Test Condition:  
➢ FULL Load

TOP264VG  
265 VAC  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/546732973cbd48adeda665959b3afa4f2f766b78873c20bcef53df95a96f21d4.jpg)  
Test Condition:  
➢ FULL Load

## (50%-100%)

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/fad5c38b38f136d0446b3a50e5bc650577233d6eba352bc93f39fd19f7215a3c.jpg)

## BPA8618P

85 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $v _ { p _ { \mathrm { K - P K } } } { = } 1 0 6 ~ \mathsf { m V }$  
CH4 ${ \mathsf I } _ { 0 \mathsf U \top }$

## Test Condition:

➢ 0.5 A-1 A-0.5 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/069c7d671650062dabf74aa0fff23083d4ef34cc1aa585dd0f98c710905b501a.jpg)

## BPA8618P

265 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { \mathsf { P K - P K } } = 1 0 4 ~ \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { l } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.5 A-1 A-0.5 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/70861cc42b3b14b330bf66cf2401f8ac981c064b683fbc5af82eb749ad3b3eb0.jpg)

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/3da979854662eaaa04fe90b3ac02dbd31ec4b150e350e6a91fb38d1a651a5c5d.jpg)

## TOP264VG

85 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { \mathsf { P K - P K } } { = } 1 9 4 . 3 \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.5 A-1 A-0.5 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## TOP264VG

265 VAC

CH1 VOUT $V _ { \mathsf { P K - P K } } { = } 2 1 4 . 5 \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.5 A-1 A-0.5 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## (10%-90%)

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/d5febd9b3a6b384ba4af25b550e76da68610d7380544451dfe78314f41ef53ec.jpg)

## BPA8618P

85 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $v _ { p _ { \mathrm { K - P K } } } { = } 1 3 6 ~ \mathsf { m v }$

$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.1A-0.9A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/2eb85813228583baadc8d3c4ccc298bc00791a611642ef2b4208be4a624c580a.jpg)

## BPA8618P

265 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $v _ { p _ { \mathrm { K - P K } } } { = } 1 2 8 \mathsf { m v }$

$\mathsf { C H 4 } \mathsf { l } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.1A-0.9A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/c652b18754c123837ab674c58a65b463b6912f9b11fb2d91b15440365db3741c.jpg)

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/725e47b16ea545a3c68c4ffbd64d161f10f7743301bf24f9d8701d9ef1dcd6e6.jpg)

## TOP264VG

85 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$  
$\mathsf { V } _ { \mathsf { P K - P K } } { = } 3 2 8 \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.1A-0.9A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## TOP264VG

265 VAC

CH1 VOUT  
$V _ { p | k - P K } = 2 7 4 m v$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.1A-0.9A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## 输出电压开机波形

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/87232326ccef6d784e7708c815e91b48d36b047a390f9998751fe88d66b78dbe.jpg)

BPA8618P  
85 VAC  
CH1 VOUT trise= 11.9mS  
➢ Full Load

Test Condition:

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/7b9f62f54c6f89ebd645559f4bd39af97560be6a208f6464dce1b6567048a1d7.jpg)

BPA8618P  
265 VAC  
CH1 VOUT t =9.3mS  
➢ Full Load

Test Condition:  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/ff46884b7b94fbc010aba4dd9054516f07e2f8ce7ee1b6e4ef75916adbb19504.jpg)

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/f644d6f618239af5736681929c5c71a861a47ec4d2b25281cc9cf9fb53d705cf.jpg)

TOP264VG  
85 VAC  
CH1 VOUT trise= 12.4mS  
Test Condition:  
➢ Full Load

TOP264VG

265 VAC

CH1 VOUT t = 12.2 mS

Test Condition:

➢ Full Load

## MOSFET

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/5f1b38e4a4e84d9f0b9984af1489a0d05ed2137ad0384b6b95788fa01aeacf6f.jpg)

BPA8618P

85 VAC  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/75e17a4faae5f11b1e77dc055b61fd343ba1cef05544d581487c1f32b40ead89.jpg)

Test Condition:

➢ Full Load  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/c88330c8d174d7814e3ea9e88d02fd26f5f1f43d5dd3f7cff8fb8904fceacf8f.jpg)

BPA8618P

265 VAC  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/a8ddcbb38dd8ba9d6ac33c245e438dc88696976e1e0a3b1837f9548fe30451c3.jpg)

Test Condition:  
➢ Full Load

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/396d3e6f926504f6053f1239fbc3e28d95297639044073880fd80f74404aa54f.jpg)

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/f8ab71896f4f289be647bab292e0a590434d4ca444c7ba48ce299873368c50fd.jpg)

## TOP264VG

85 VAC  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/7fadb2d9f84d5831bd1bc992a539caa168c2c11c0a1db351dfa51a842c71b5f7.jpg)

Test Condition:  
➢ Full Load

TOP264VG  
265 VAC  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/b49ddc2e735d9b83fe64e36ac762110af111370a1082a5798da7ef557a378778.jpg)

Test Condition:  
➢ Full Load

## MOSFET

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/2a1fc61b7766c9aec19c584e46fa5b6a0e29266454556eacba35268dfa6dac62.jpg)

BPA8618P

85 VAC  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/364a8b316925e9cb48553188c89459a38259fec4009078998c3e27dfad3920d2.jpg)

Test Condition:

➢ Full Load

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/c8d4aeb2a2877ac3feef6a163b243a49fe2014fa362499ba15d3718bb824ee21.jpg)

BPA8618P

265 VAC  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/2ff0ac48f1db8706176d19bcb822d6bc7ffc710bc0465e5527913a52c825ec33.jpg)

Test Condition:

➢ Full Load

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/377aa065e76be9bad9892aeedf52a40027a9dd92402227cf3c7089e6fa4405db.jpg)

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/258e318921d8dfe38afa3a08556c33738cc17733f927f8a34fa8ea6cd94471e7.jpg)

## TOP264VG

85 VAC  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/f00b1e9d8c124a23ee01fbca5b1edbeaf5f073fc389efe0595da87443c42c5ad.jpg)

Test Condition:

➢ Full Load

TOP264VG  
265 VAC  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/026c26c25f6f312391083ba089e1211f167827b387caeb60129cc8853d4d3b80.jpg)

Test Condition:

➢ Full Load

## 输出二极管开机波形

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/95acdf8229786267f56b0f2a2fe25f2d1224d5c7f33e123081d0ec1395a797f2.jpg)

BPA8618P

85 VAC  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/c4e986ddf3411267fbb0d52c1aa83a08758553e17f9dfb4ebe7b36431035e225.jpg)

Test Condition:

➢ Full Load  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/cab723579a0b136a90a582fc366b43b815af0f220eca94ec068881a399301145.jpg)

BPA8618P

265 VAC  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/82967f571e4f76be03066de34e12caa6ffda4be8b2b057a03178843bafbaf079.jpg)

Test Condition:  
➢ Full Load

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/4c4f6263c8e2baa8113362ae7548947365c332d4b66791fde1a4172718994652.jpg)

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/b708b1dedab8465f1534014f5a6b948dc9784f0ba99970f14348b9244895975d.jpg)

## TOP264VG

85 VAC  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/f41845f6d818a086c0346e237146c6bdbadc1b3b047847ed6756b7371348f6d9.jpg)

Test Condition:  
➢ Full Load

TOP264VG  
265 VAC  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/2f8e45fa6d8d1b41b1ab8d06a8975785ad759995068fd7696fb1b2356956985b.jpg)

Test Condition:  
➢ Full Load

## 输出二极管稳态波形

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/be2fbc2393e868c6c98daf00aa6b68ac6253ec5e911b14fcb32732eb88c18223.jpg)

BPA8618P  
85 VAC

CH2 VD  
CH4 ID

$$
\begin{array}{l} \mathrm {V_ {D\_MAX}} = 4 5. 0 5 \mathrm{V} \\ \mathrm {I_ {D\_MAX}} = 5. 8 1 5 \mathrm{A} \end{array}
$$

Test Condition:

➢ Full Load

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/4689e2451dee0c8b182e4ab905d4645238df7a6905fd08f4b889e07bdb9c7740.jpg)

BPA8618P  
265 VAC

CH2 VD  
CH4 ID

$$
V _ {D \_ M A X} = 6 7. 8 5 V
$$

$$
I _ {D \_ M A X} = 6. 0 1 \mathrm{A}
$$

➢ Full Load

Test Condition:  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/5611d307fdbd8ce36a1e6d7bdf9f8450ed36a7fb40c903a9d6262f7fd4cb9262.jpg)

## TOP264VG

85 VAC

CH2 VD  
CH4 ID

$$
V _ {D \_ M A X} = 3 9. 9 V
$$

$$
I _ {D \_ M A X} = 4. 7 5 A
$$

Test Condition:

➢ Full Load

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/2ae7773b653d36268751cc94c43c83d34f2dea9ad8585cc993613ea9fea758b0.jpg)

TOP264VG  
265 VAC

CH2 VD  
CH4 ID

$$
V _ {D \_ M A X} = 7 3. 4 V
$$

$$
I _ {D \_ M A X} = 4. 5 \mathrm{A}
$$

Test Condition:

➢ Full Load

## 输入过压保护与恢复

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/a400977066b34584225490feffa9c2a4148b698e3128e5306770c8da0f98524c.jpg)

## BPA8618P

CH1 VDC\_IN $V _ { \mathsf { D C } \_ \mathsf { I N } }$  
CH2 $\mathsf { V } _ { \mathsf { D } \mathsf { S } }$  
CH3 ${ \sf V } _ { 0 }$

$$
\begin{array}{l} \mathrm {V _ {DS\_MAX}} = 6 6 0 \mathrm{V} \\ \mathrm {V _ {DC\_IN}} = 5 0 8 \mathrm{V} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/f463dc295684cccdab71a156948f678789ad95f7cf2140d7e6ff5b1e19180453.jpg)

## BPA8618P

CH1 VDC\_IN $\mathsf { V } _ { \mathsf { D C } \_ \mathsf { I N } }$  
CH2 $\mathsf { V } _ { \mathsf { D } \mathsf { S } }$  
CH3 ${ \sf V } _ { 0 }$

$$
V _ {D C \_ I N} = 4 5 1 \mathrm{V}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/4c8da2fd12c56942d0dc8d23e1f1131d11b4bf592f5abbb745740bb79b0c10c0.jpg)

## TOP264VG

CH1 VDC\_IN $V _ { \mathsf { D C } \_ \mathsf { I N } }$  
CH2 $\mathsf { V } _ { \mathsf { D } \mathsf { S } }$  
CH3 ${ \sf V } _ { 0 }$

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 5 7 2. 5 \mathrm{V} \\ \mathrm {V_ {DC\_IN}} = 4 3 9 \mathrm{V} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/c2deceaaee7b76b87711fa46d5d4f61092cf2d419b849298aebfea26aec23727.jpg)

## TOP264VG

CH1 VDC\_IN $\mathsf { V } _ { \mathsf { D C } \_ \mathsf { I N } }$  
CH2 $\mathsf { V } _ { \mathsf { D } \mathsf { S } }$  
CH3 ${ \sf V } _ { 0 }$

$$
V _ {D C \_ I N} = 4 0 8 \mathrm{V}
$$

## Test Condition:

➢ Full Load

BPA8618P  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/2bebc66f297e41593c76e79b51a26c81b90e89a1b0c3258453c042e06de69139.jpg)

CH3 VO  
CH1 VDC\_IN  
CH2 VDs

$$
V _ {D C \_ I N} = 8 9. 2 \mathrm{V}
$$

Test Condition:

➢ No Load

TOP264V  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/edf8c229a29cff09c16799053708785987ad7d307ce2d32c090a2971f631caf4.jpg)

CH3 VO  
CH1 VDC\_IN  
CH2 VDs

$$
V _ {D C \_ I N} = 1 0 3. 5 \mathrm{V}
$$

Test Condition:

➢ No Load

备注：TOP264VG Vpin脚上拉一串电阻做UVL，阻值4M；BPA8618P内部集成UVL功能，无需外部电阻

## MOSFET

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/db9bc5dd2d49848d30bc02898f0775bb8131a373c4e666dc1038527368a06fde.jpg)

BPA8618P

85 VAC  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/6176443bdeeedceb6e2125dbf0c27e69856076fcbb3fb22fd5946ab7dd2dafa3.jpg)

Test Condition:  
➢ Full Load

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/14d49b050b190f06d34def712bd3276cec960db78a42d2db771a16340e8ad3e5.jpg)

BPA8618P

265 VAC  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/aa4474a8a61a7078b34c486f428d957062d7b65c46f9d3b819c5f4cc6f9a3038.jpg)

Test Condition:  
➢ Full Load

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/d9008e3eac8d5d0a18ab931c29a50e38a049a6cdef173945d4badd68b93f8020.jpg)

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/b1ad29270f9da195d7f6f65245f47cbfadaed7aab323affb72853ab2998f5578.jpg)

## TOP264VG

85 VAC  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/a7757e36908cd866d6e083073a38461c0a8aadb8c61b30c4b181e94221cfec95.jpg)

Test Condition:  
➢ Full Load

TOP264VG  
265 VAC  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/add94ac4ddefb9fdf396bcec23a73232ed142d669575d39358c103e9f9f25363.jpg)

Test Condition:  
➢ Full Load

## 输出短路保护 (输出二极管波形)

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/9bb8b827a61e8ba81591ca43e56734b3d88abb16f35baf57193aa2d8b1c611d4.jpg)

BPA8618P  
85 VAC

CH2 VD  
CH4 IDS

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/1005ef049d8dd6becdc9159bb91900833995fecd647b6e180e8a2e363f5df29c.jpg)  
Test Condition:

➢ Full Load

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/82697af23548c468b8a7a12be84e49cb4b2411ae58b8cb8116567c6bc5f74680.jpg)

BPA8618P  
265 VAC

CH2 VD  
CH4 ID

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/1d1f17472c7b4a42daa456fbfce36bdf88c56f09fc9bd2809cf1965daace6715.jpg)

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/4fc7d754e170adc5ad4fdb56cd37cd9387ede860f3fd906b9f0dda6ae2e62679.jpg)  
Test Condition:

➢ Full Load

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/8d79b658ea09adc643dde2f4a0c8b30d383abee326572a201ed32db15a5f8acf.jpg)

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/c86aa61aea6259b8281299a84206a30bdf07cda0d8d550c4ff3759f0b99386bf.jpg)

85 VAC

## TOP264VG

CH2 VD  
CH4 IDS

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/6540c77e6c1339f477bca8ee45a720ec1bafa529e56d771d9b69ce0077faad80.jpg)

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/86d242e836cf2f0650c26dab8823ce891dbd67fb58357682655830177b1daf07.jpg)  
Test Condition:

➢ Full Load

TOP264VG

265 VAC

CH2 VD  
CH4 ID

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/d607aca64bcdf5885221412d6750a994eb1b7fb56cc791f393d49648e0308608.jpg)

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/a3c7e4d3c69a6a33a778318c33e8cca8cff5ee4eb16d76f65047b3eb1d61a35a.jpg)  
Test Condition:

➢ Full Load

## 温升测试

BPA8618P

<table><tr><td rowspan="2">项目</td><td colspan="4">温度(°C)</td></tr><tr><td>85VAC</td><td>115VAC</td><td>230VAC</td><td>264VAC</td></tr><tr><td>环境温度</td><td>49.6</td><td>50.2</td><td>50.1</td><td>50</td></tr><tr><td>BPA8618P (U1)</td><td>93</td><td>85</td><td>78.2</td><td>79.2</td></tr><tr><td>SB5200 (D5)</td><td>99.5</td><td>99.5</td><td>99</td><td>99.6</td></tr><tr><td>变压器绕组 (T1)</td><td>77.5</td><td>77.6</td><td>80.1</td><td>80.6</td></tr><tr><td>变压器磁芯 (T1)</td><td>73.9</td><td>74.1</td><td>76.7</td><td>77.8</td></tr><tr><td>输入电解电容(EC1)</td><td>64.3</td><td>62.1</td><td>58.7</td><td>58.3</td></tr><tr><td>输出电解电容(CE4)</td><td>70.7</td><td>70.8</td><td>70.8</td><td>71.3</td></tr><tr><td>整流桥 (DB1)</td><td>67</td><td>63.9</td><td>58.4</td><td>58.2</td></tr></table>

TOP264VG

<table><tr><td rowspan="2">项目</td><td colspan="4">温度(°C)</td></tr><tr><td>85VAC</td><td>115VAC</td><td>230VAC</td><td>264VAC</td></tr><tr><td>环境温度</td><td>50.2</td><td>49.6</td><td>50</td><td>50.2</td></tr><tr><td>TOP264VG (U1)</td><td>89.5</td><td>83.4</td><td>87.9</td><td>90.1</td></tr><tr><td>SB5200 (D5)</td><td>96.4</td><td>95.4</td><td>97.6</td><td>98.1</td></tr><tr><td>变压器绕组 (T1)</td><td>70</td><td>70.9</td><td>75.4</td><td>76.1</td></tr><tr><td>变压器磁芯 (T1)</td><td>62.8</td><td>60.9</td><td>59.2</td><td>59.1</td></tr><tr><td>输入电解电容(EC1)</td><td>67.2</td><td>67.2</td><td>68.3</td><td>68.4</td></tr><tr><td>输出电解电容(CE4)</td><td>66</td><td>67.3</td><td>71.5</td><td>71.9</td></tr><tr><td>整流桥 (DB1)</td><td>66.6</td><td>63.3</td><td>59.6</td><td>59</td></tr></table>

备注：增大芯片Source散热铜箔面积可以降低芯片温度

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/eaba7dbd391307617be93f61fc1a7807e2443480fd50a37b9cdd63142c12b23b.jpg)

115VAC Line  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/3f789cd2566f5daec9774f2836582ba482fec4cd02cc3875e1c20704477a2843.jpg)

115VAC Neutral

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/e87b3e235c1a7198e50276a8b9f36f42c33f42e689103a406ade53f868a044fb.jpg)

115VAC Line

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/f57cf800d6f479fdd5a17f4f75e7ddd837039ce53fc815077dea4297052cb827.jpg)

115VAC Neutral

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/0e08dedff45d0c7a8fb22850dd0e46efa37de5568936e2f2fd67e339bacc9a77.jpg)

230VAC Line  
![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/7dbc540f0d54b76de0f30e8ca3ba5130fd8a70c0ad2d9d5593cb9ed00d32a3db.jpg)

230VAC Neutral

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/c3e7122095edf8363a98f04235e3fe572cf3119bfe297ec219e80b637b0bb272.jpg)

230VAC Line

![](./素材/images/BPA8618P&TOP264VG对比测试_12V1A/1ff81fdb97e443995b5a421af72d07e295b4107fb12b46eacf119eb834ad750a.jpg)

230VAC Neutral

BPA8618P

<table><tr><td>差模</td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>+2kV</td><td>0</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>0</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>90</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>90</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>180</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>180</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>270</td><td>2</td><td>10</td><td>Pass</td></tr></table>

## 测试说明

➢ 按照GB/T17626.5和IEC61000-4-5的最新版本要求进行测试  
➢ 室温环境，230VAC输入，满载条件

TOP264VG

<table><tr><td>差模</td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>+2kV</td><td>0</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>0</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>90</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>90</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>180</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>180</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>270</td><td>2</td><td>10</td><td>Pass</td></tr></table>

## 测试说明

➢ 按照GB/T17626.5和IEC61000-4-5的最新版本要求进行测试  
➢ 室温环境，230VAC输入，满载条件

BPA8618P

<table><tr><td>差模</td><td>电压</td><td>脉冲群持续时间</td><td>脉冲频率</td><td>测试时间</td><td>测试结果</td></tr><tr><td>L to N</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr></table>

## 测试说明

➢ 按照GB/T17626.4和IEC61000-4-4的最新版本要求进行测试  
➢ 室温环境，230VAC输入满载条件  
➢ 脉冲群周期为300ms  
➢ 试验时样机输出正常（符合A类标准）视为Pass

TOP264VG

<table><tr><td>差模</td><td>电压</td><td>脉冲群持续时间</td><td>脉冲频率</td><td>测试时间</td><td>测试结果</td></tr><tr><td>L to N</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr></table>

## 测试说明

➢ 按照GB/T17626.4和IEC61000-4-4的最新版本要求进行测试  
➢ 室温环境，230VAC输入满载条件  
➢ 脉冲群周期为300ms  
➢ 试验时样机输出正常（符合A类标准）视为Pass

BPA8618P

<table><tr><td>测试点</td><td>电压(V)</td><td>放电类型</td><td>放电次数</td><td>测试结果</td></tr><tr><td>Vo</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>+20kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-20kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+20kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-20kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr></table>

## 测试说明

➢ 按照GB/T17626.2和IEC61000-4-2的最新版本要求进行测试  
➢ 室温环境，230VAC输入满载条件  
➢ 试验时样机输出正常（符合A类标准）视为Pass

TOP264VG

<table><tr><td>测试点</td><td>电压(V)</td><td>放电类型</td><td>放电次数</td><td>测试结果</td></tr><tr><td>Vo</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>+20kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-20kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+20kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-20kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr></table>

## 测试说明

➢ 按照GB/T17626.2和IEC61000-4-2的最新版本要求进行测试  
➢ 室温环境，230VAC输入满载条件  
➢ 试验时样机输出正常（符合A类标准）视为Pass

空载功耗

BPA8618P TOP264VG 90mW

效率

➢ 115VAC BPA8618P TOP264VG 230VAC BPA8618P TOP264VG

动态

BPA8618P TOP264VG

输入过欠压保护

TOP264VG DC103.5V-439V  
BPA8618P DC89.2V-508V

启动波形

85VAC TOP264VG

温度数据

➢ 85VAC BPA8618P TOP264VG 230VAC 265VAC TOP264VG

EMI

传导对比测试均有6dB以上余量，但波形有较大差异

## THANK YOU FOR WATCHING
