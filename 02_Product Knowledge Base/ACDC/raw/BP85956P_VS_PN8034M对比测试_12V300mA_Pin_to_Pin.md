![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/ed528f703510dac554677adb9476e2c7b30ff95745ff543d75da133b5a0cf532.jpg)

## BP85956P&PN8034M对比测试 (12V/0.3A@85\~264Vac)(Pin to Pin)

上海晶丰明源半导体股份有限公司

Shanghai Bright Power Semiconductor Co., Ltd.

陈耀兵

2022 11 14

## 电气特性对比

<table><tr><td></td><td>BP85956P</td><td>PN8034M</td></tr><tr><td>开关频率</td><td>45KHz</td><td>45KHz(实测)</td></tr><tr><td>Mosfet BV</td><td>650V</td><td>650V</td></tr><tr><td> $R_{DS\_ON}$ </td><td>11Ω</td><td>13.5Ω</td></tr><tr><td>限流点</td><td>600mA</td><td>590mA</td></tr><tr><td>软启动</td><td>有</td><td>有(限制Toffmin降低启动阶段开关频率)</td></tr><tr><td>输出过压保护</td><td>有</td><td>?</td></tr><tr><td>输出短路保护</td><td>有</td><td>有</td></tr><tr><td>输出过载保护</td><td>有</td><td>有</td></tr><tr><td>反馈开路保护</td><td>有</td><td>?</td></tr><tr><td>过温保护</td><td>有</td><td>有</td></tr><tr><td>封装</td><td>DIP7</td><td>DIP7</td></tr></table>

## BP85956P

PWM/PFM  
3级限流点软启动，降低MOS电流应力

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/376b793077af9f6fa03b15766dda6a769db557d343d3063793a4f7fef4bea63d.jpg)

## PN8034M

PFM  
Toffmin 动阶段的开关频率，MOS电流 应力较大

## BP85956P典型应用电路

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/6b278b98bc6f4da0d2afe08071c32149197dfb7a5bba4a5407a0485ce358daf4.jpg)

无需外部VDD电容

## PN8034M典型应用电路

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/45fdf4d247fb6c24d7c55eb826b5c6bd2d284c711a15539c43f61393b144dbea.jpg)

需外部VDD电容

◼ 为了满足输入85VAC\~265VAC工作电压范围，本报告均基于将两个输入电解电容EC091和EC092更改为10uF/400V后进行测试  
◼ PN8034M在85VAC输入时无法在0.3A负载启机，只能在0.23A负载下启机  
◼ 为了Pin to Pin替换PN8034，所以换BP85956P后未去掉VDD电容EC093（4.7uF/50V)

电源规格： 85\~265Vac输入，12V/0.3A输出 (PN8034M无法在0.3A负载启机，只能在0.23A以下带载启动)

<table><tr><td colspan="2"></td><td>BP85956P</td><td>PN8034M</td><td></td></tr><tr><td colspan="2">待机功耗@230Vac</td><td>152mW</td><td>150mW</td><td>未断开板上后端负载</td></tr><tr><td rowspan="2">效率</td><td>115Vac</td><td>73.8%</td><td>71.83%</td><td>满载效率</td></tr><tr><td>230Vac</td><td>76.02%</td><td>73.33%</td><td>满载效率</td></tr><tr><td rowspan="2">输出电压纹波</td><td>85Vac</td><td>64mV</td><td>42.4mV</td><td>满载</td></tr><tr><td>265Vac</td><td>38mV</td><td>42.7mV</td><td>满载</td></tr><tr><td rowspan="2">动态负载性能</td><td>50%-100%</td><td> $170mV_{PK\_PK}$ </td><td> $112mV_{PK\_PK}$ </td><td>@265Vac</td></tr><tr><td>10%-90%</td><td> $320mV_{PK\_PK}$ </td><td> $228mV_{PK\_PK}$ </td><td>@265Vac</td></tr><tr><td rowspan="4">MOSFET应力</td><td> $V_{DS}$ </td><td>400V</td><td>400V</td><td>@265Vac,满载启机</td></tr><tr><td> $I_{DS}$ </td><td>1.1A</td><td>1.47A</td><td>@265Vac,满载启机</td></tr><tr><td> $V_{DS}$ </td><td>400V</td><td>400V</td><td>@265Vac,输出短路</td></tr><tr><td> $I_{DS}$ </td><td>1.06A</td><td>2.12A</td><td>@265Vac,输出短路</td></tr><tr><td colspan="2">温升测试(环温40°C)</td><td>52.3°C</td><td>60.4°C</td><td>@85Vac,满载</td></tr><tr><td colspan="2">传导EMI</td><td>&gt;6dB裕量</td><td>&gt;6dB裕量</td><td></td></tr><tr><td colspan="2">Surge</td><td>Pass</td><td>Pass</td><td>共模2kV</td></tr><tr><td colspan="2">EFT群脉冲</td><td>Pass</td><td>Pass</td><td>4kV,5kHz/38kHz/100kHz</td></tr><tr><td colspan="2">ESD</td><td>Pass</td><td>Pass</td><td>15kV、20KV空气放电</td></tr></table>

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/584fd1aa5be0e22e48aa679b0be27ad31a354904618925287fe92b86bbaac675.jpg)

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/f7c7bd08e0b100cd7e704a1b760c2e9ac1771063dc7aeb3215e3e9be64c8a838.jpg)

待机功耗  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/5961a83ec790664d3f3ff77689c1651235ae5838a4aa724600c9b08236a138c7.jpg)

输入电压(VAC)

备注：测试时未断开板上负载

效率曲线  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/ce484d1c8c7f5d70b32903cd59c5f9af03540a098d6d52392180d3bdc2ce3edc.jpg)

备注：测试时未断开板上负载

## 输出电压调整率

BP85956P

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>12.41</td><td>12.40</td><td>12.40</td><td>12.40</td><td>12.39</td><td>12.39</td><td>12.40</td><td>0.16%</td></tr><tr><td>20%</td><td>12.16</td><td>12.15</td><td>12.15</td><td>12.14</td><td>12.14</td><td>12.14</td><td>12.15</td><td>0.21%</td></tr><tr><td>40%</td><td>12.09</td><td>12.08</td><td>12.07</td><td>12.06</td><td>12.06</td><td>12.06</td><td>12.07</td><td>0.20%</td></tr><tr><td>60%</td><td>12.05</td><td>12.03</td><td>12.03</td><td>12.02</td><td>12.01</td><td>12.01</td><td>12.02</td><td>0.34%</td></tr><tr><td>80%</td><td>12.00</td><td>12.00</td><td>11.99</td><td>11.99</td><td>11.98</td><td>11.98</td><td>11.99</td><td>0.20%</td></tr><tr><td>100%</td><td>12.01</td><td>11.99</td><td>11.99</td><td>11.97</td><td>11.96</td><td>11.95</td><td>11.98</td><td>0.45%</td></tr><tr><td>平均值</td><td>12.12</td><td>12.11</td><td>12.10</td><td>12.10</td><td>12.09</td><td>12.09</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>3.40%</td><td>3.39%</td><td>3.43%</td><td>3.54%</td><td>3.58%</td><td>3.64%</td></tr></table>

计算方法：调整率=100%\*(最大值-最小值)/平均值  
测试条件：未断开板上负载

PN8034M

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>12.506</td><td>12.498</td><td>12.493</td><td>12.484</td><td>12.476</td><td>12.47</td><td>12.49</td><td>0.29%</td></tr><tr><td>20%</td><td>12.287</td><td>12.285</td><td>12.283</td><td>12.282</td><td>12.278</td><td>12.273</td><td>12.28</td><td>0.11%</td></tr><tr><td>40%</td><td>12.23</td><td>12.232</td><td>12.233</td><td>12.232</td><td>12.233</td><td>12.233</td><td>12.23</td><td>0.02%</td></tr><tr><td>60%</td><td>12.218</td><td>12.216</td><td>12.215</td><td>12.212</td><td>12.209</td><td>12.205</td><td>12.21</td><td>0.11%</td></tr><tr><td>80%</td><td>12.194</td><td>12.2</td><td>12.201</td><td>12.203</td><td>12.203</td><td>12.207</td><td>12.20</td><td>0.11%</td></tr><tr><td>100%</td><td>12.206</td><td>12.205</td><td>12.203</td><td>12.2</td><td>12.197</td><td>12.191</td><td>12.20</td><td>0.12%</td></tr><tr><td>平均值</td><td>12.27</td><td>12.27</td><td>12.27</td><td>12.27</td><td>12.27</td><td>12.26</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>2.54%</td><td>2.43%</td><td>2.38%</td><td>2.31%</td><td>2.27%</td><td>2.28%</td></tr></table>

计算方法：调整率=100%\*(最大值-最小值)/平均值  
测试条件：未断开板上负载

## OLP

BP85956P

<table><tr><td> $I_{OUT}(A)$  $V_{IN}(VAC)$ </td><td>85</td><td>264</td></tr><tr><td>0.319</td><td>12.012</td><td>11.957</td></tr><tr><td>0.348</td><td>11.956</td><td>11.953</td></tr><tr><td>0.377</td><td>9.62</td><td>11.946</td></tr><tr><td>0.406</td><td>6.65</td><td>11.607</td></tr><tr><td>0.435</td><td>OLP</td><td>8.82</td></tr><tr><td>0.464</td><td></td><td>OLP</td></tr><tr><td>0.493</td><td></td><td></td></tr></table>

PN8034M

<table><tr><td> $I_{OUT}(A)$  $V_{IN}(VAC)$ </td><td>85</td><td>264</td></tr><tr><td>0.319</td><td>12.225</td><td>12.218</td></tr><tr><td>0.348</td><td>10.958</td><td>12.216</td></tr><tr><td>0.377</td><td>OLP</td><td>12.217</td></tr><tr><td>0.406</td><td></td><td>12.223</td></tr><tr><td>0.435</td><td></td><td>11.83</td></tr><tr><td>0.464</td><td></td><td>9.89</td></tr><tr><td>0.493</td><td></td><td>OLP</td></tr></table>

## 输出电压纹波

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/c178a15f25cfa5074c7ca31aa8cb0569937f1c4a9cf2648af5a5b29ad74ac954.jpg)

85 VAC  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/c4553e7ac14aaf0cb7fb97d007def66d3840a8e5d7d4eb5d6a604619a4eb7f4e.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/0ac4e3f135fb6e47ee6012c95b90b0abb78c68fe3c37d50aa2783af521ed95ad.jpg)

265 VAC  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/a00546095fe495f3a9f64f099a52b4078d129c4a59d59dd32c2dfb48e4541231.jpg)  
Test Condition:  
➢ Full Load

85 VAC  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/5a44df987f2b4fb883e79631d7d1142f17079ed59538eddaf0baf29613275aec.jpg)

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/101aaef2e391943d172aba4763359fc260cc79805ca4838b2f3f9438001038b2.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/b4da67ce98e394e27be99ea6226b44d9ba32ab7d6e6d5d0ccb55e6dfc809cd7c.jpg)

265 VAC  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/f9cf80fe26aefad466b1615157fa3abe8323a90eabf6b8262d7aabf5424c4a78.jpg)  
Test Condition:  
➢ Full Load

## (50%-100%)

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/9f2d73866d9aafcdc6949279e4cadb1f0c52838ff67364ae88fc87acc18ff6a8.jpg)

85 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { \mathsf { P K - P K } } = 2 2 6 . 5 ~ \mathsf { m V }$  
CH4 IOUT

## Test Condition:

➢ 0.15 A-0.3 A-0.15 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/ebf3a173735d043303026db62ef3c5c4e4af685a6d1265f30823691d7e31aa1b.jpg)

265 VAC

CH1 VOUT $V _ { \mathsf { P K - P K } } = 2 2 4 . 8 ~ \mathsf { m V }$  
CH4 IOUT

## Test Condition:

➢ 0.15 A-0.3 A-0.15 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/8b37291179b21482d74aea3f4013373678be7ab014d3f53c01ca7c51f9be2b43.jpg)

85 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { \mathsf { P K - P K } } = \pm 1 1 6 \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.15 A-0.3 A-0.15 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/b1411616c4429b486afc59f125f2e1934f53fde713bb5af28ad169285a5f224b.jpg)

265 VAC

CH1 VOUT VPK-PK= 112 mV  
CH4 IOUT

## Test Condition:

➢ 0.15 A-0.3 A-0.15 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## (10%-90%)

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/21614609f3e2481bcedfc06264f46c4fd76d2210d0ae68c18e7a1cb0cc14d2a5.jpg)

85 VAC

CH1 VOUT $\mathsf { V } _ { \mathsf { O U T } }$ $\mathsf { V } _ { \mathsf { P K - P K } } { = } 3 6 1 . 3 \mathsf { m V }$  
CH4 IOUT

## Test Condition:

➢ 0.03A-0.27 A-0.03 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/f512f101507e142b791d3d790ab4853be9200fac6c8bf6e68ddb9b8f28f532af.jpg)

265 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { \mathsf { P K - P K } } { = } 3 7 4 . 5 \mathsf { m v }$  
CH4 IOUT

## Test Condition:

➢ 0.03A-0.27 A-0.03 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/826d738162575e2ef39edab373967d5f66ce9582e5e778eec732bf501f7be814.jpg)

85 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 2 4 0 m v$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.03A-0.27 A-0.03 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/48491ef9b3c7bca555d2c014c9bf564a3ffc294eb6e983cd46fe77ba5cd8a1bb.jpg)

265 VAC

CH1 VOUT $V _ { \mathsf { P K - P K } } { = } 2 2 8 \mathsf { m V }$  
CH4 IOUT

## Test Condition:

➢ 0.03A-0.27 A-0.03 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## 输出电压开机波形

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/0699357925eee53d088663ac4b6d1228a170402720382978b35fc0776dd87b34.jpg)

85 VAC  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/85bd43e0e5c71a408a6d9338264b46962db7c25f96c82db08c6e2200a6daae02.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/190dafefe471af24b5d67752eabfd26168269dd3b7beaae2d4ab2466c456b768.jpg)

265 VAC  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/6100b9a662afc2fc14db8ab021c7f3acedf6c5ec539f39bf21d19d97d6321c99.jpg)  
Test Condition:  
➢ Full Load

85 VAC  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/c6d5ace96c55d18c46108ac535ca2bc5ec39c731c22da0baf640aac388600bf6.jpg)

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/e00d03d1d6c3825fe40e08490281710d0611c3ba7f4d8e30de8b6ec0ff8d35b1.jpg)  
Test Condition:  
➢ Io=0.23A

不能满载启机  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/ea983c1eefbdd3e35f449579edd58fe49a04c07807c7f2b8ad1b425c85d78144.jpg)

265 VAC  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/50318ee56b6845d3a226fdf50ea5e6094d2e84ca4f684d6866a29741eb2839cd.jpg)  
Test Condition:  
➢ Full Load

## MOSFET

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/ffa8de27fd6e9cdb1afba479560df6dde8e392badf1e71c9c8614413b7f65aec.jpg)

85 VAC

CH3 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 1 4 1 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 1. 0 4 9 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/4eab92103af049698fecaa328cbe303bc3b4300d0295b1646a132801775e126c.jpg)

265 VAC

CH3 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 3 9 8. 3 V
$$

$$
I _ {D S \_ M A X} = 1. 1 1 8 \mathrm{A}
$$

## Test Condition:

➢ Full Load

85 VAC  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/f080aa349aa580ab3b76f19b9dc57d22e69d68a4b4692f4d35b17d6579dc019a.jpg)

CH3 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 1 4 4 V
$$

$$
I _ {D S \_ M A X} = 1. 1 7 \mathrm{A}
$$

## Test Condition:

➢ Io=0.23A

## 不能满载启机

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/0d61db00929573fdabbe00b81ea2c3b4b1374fb368440a6cba91bab65f220589.jpg)

265 VAC

CH3 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 4 0 0 V
$$

$$
I _ {D S \_ M A X} = 1. 4 7 \mathrm{A}
$$

## Test Condition:

➢ Full Load

## MOSFET

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/3a307097c808d797467399e1e9a8ac18426c146a2c55bb8da1bcb567051b6157.jpg)

85 VAC

CH3 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 1 2 7. 3 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 0. 7 3 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/d71f20e3ac96df38c11ce4d94698949f734ef9ab4dd2d321ab82aaa912096e26.jpg)

265 VAC

CH3 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 3 9 8 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 0. 6 4 3 \mathrm{A}
$$

## Test Condition:

➢ Full Load

85 VAC  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/845abccf2b9bad10c8ce6bf1d5a34dff3ebc2e4b397348dd112d3debc9b857ea.jpg)

CH3 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 1 4 4 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 1. 0 9 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/a490b1c82289dfd98358a3b0911d5e858245fec36b8ef69b2069a0596d5d8657.jpg)

265 VAC

CH3 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 4 0 0 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 1. 2 4 \mathrm{A}
$$

## Test Condition:

➢ Full Load

## 电感电流开机波形

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/a10120d6a91fb5b260aafea86811bda3c64accd3ad4db0ddc3eb589b69597212.jpg)

85 VAC  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/2938ce5b8a92bd21cb534365d0b68ad4323666890da6838211b8d85cd3477c4b.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/b736883247ce1d22e137c083c6726f69777d89cc5df5bba39b3cc2ec31ff0c58.jpg)

265 VAC  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/b1e55a7db3a3ba9158fd263892280bc12483e227be38b5188f5ab4d3e90a3cb1.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/aa4ecf54bc938f61fb7f4ff29a9ae3823ccc19b85b7c6f5100b5ad32cc92942f.jpg)

85 VAC  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/258e87d9c98f9b06b2f9f99eed4af1e34a062c8a8240dde3782b0f6f800a4f52.jpg)  
Test Condition:  
➢ Io=0.23A

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/1c041ca9c9632f95eed74e637321b7276f14915baaa3039c51e82f89b1313409.jpg)

265 VAC  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/7a4e0375421ec4ec52503022f90c3be81027decfc69e12679a53e1f6061595e5.jpg)  
Test Condition:  
➢ Full Load

## 电感电流稳态波形

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/4a7c21b4263a1742f333df2bd3903c94ee76237f20941a8b8ba2790da5cf9f6e.jpg)

85 VAC  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/49a7b2df72b696f729dad90ea2945aee64713bdab8332388f4cebfc69bc6d359.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/8a52fcd14a31a7e4db6d7cb496c687ea7b75beef797c94a38153ddc8271a3a65.jpg)

265 VAC  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/4b08575757fc0509d3f9452708ff13c46648f14cbc6cf5ab4c75c75ac6e1cabe.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/a424ff548bb521e0e04136381b458cc24fbdafbda95ba5d5c55332e4917467ff.jpg)

85 VAC  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/8c7a7dfe559fb0de0356e28316545f700d2a76747083b8993a99016be7dfd841.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/1a194e7b49078b85f3d9cb58138235983aa38d67cd22cb64b44daff69335c4e6.jpg)

265 VAC  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/e525498645f57ac9a88a25a8bfb7e6f7f30fc70c81eebbef47a196606cae52f1.jpg)  
Test Condition:  
➢ Full Load

## MOSFET

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/3caaece4ba01a1bf17a102713fef8971acd8aa2018aaa6ca82bdcb28d80b9104.jpg)

85 VAC

CH3 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 1 2 9. 5 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 1. 0 1 4 \mathrm{A}
$$

## Test Condition:

➢ Full Load  
➢ 输出短路

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/5f77b68cae1e0bf29097c24d8651d3fdade2979917950ac0cb6a2cffd03f19a9.jpg)

265 VAC

CH3 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 3 8 7. 3 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 1. 0 6 4 \mathrm{A}
$$

## Test Condition:

➢ Full Load  
➢ 输出短路

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/306e8186e64dbbe448c3a56fd100dbf9c84c26cefef046748badf84654f1bdac.jpg)

85 VAC  
265 VAC

CH3 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 1 4 3 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 1. 2 8 \mathrm{A}
$$

## Test Condition:

➢ Full Load  
➢ 输出短路

CH3 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 4 0 0 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 2. 1 2 \mathrm{A}
$$

## Test Condition:

➢ Full Load  
➢ 输出短路

## 输出短路保护 (电感电流波形)

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/998b03e96653c11bfeb4d3684a61a07ebb5579cc99f8b69ca6cae79db87db4b9.jpg)

85 VAC  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/88ce4108ea85958c21dc0b2444f09a572b152e45ec72ac2c93d6bf3014fdb85a.jpg)

## Test Condition:

➢ Full Load  
➢ 输出短路

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/0f9a5cbc096e6f3c6c0895927a2a89e35c8d7d68fbacbc40061cb1aee8de9a2f.jpg)

265 VAC  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/960d573dd8b8c1c9c6757a5db9b1534be31914394a651a0243d6ac46caa81965.jpg)

## Test Condition:

➢ Full Load  
➢ 输出短路

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/a08a65bda38e16a19a82ab06babad69c484a10655be7c50732565d8076fce522.jpg)

85 VAC  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/7c61dd4f01298b05e52c19c6992e9c13b5f6094381e0bc57ef0a7778362fce37.jpg)

## Test Condition:

➢ Full Load  
➢ 输出短路

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/30bedea4ee0859a04308f6ee1ce9e02619102bad1225f7464fc5073dfac900ab.jpg)

265 VAC  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/298067e0fe48a43350e819f178d04bcc38e7b65a8707885f8e1b6d9c445110f8.jpg)

## Test Condition:

➢ Full Load  
➢ 输出短路

## 温升测试

BP85956P

<table><tr><td rowspan="2">项目</td><td>85VAC</td><td>115VAC</td><td>230VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>40.2</td><td>38.9</td><td>38.9</td><td>40.4</td></tr><tr><td>BP85956P (U091)</td><td>90.8</td><td>80.3</td><td>91.7</td><td>92.2</td></tr><tr><td>续流二极管 (D094)</td><td>84</td><td>78.8</td><td>83.4</td><td>83.6</td></tr><tr><td>电感磁芯 (L092)</td><td>77</td><td>73.3</td><td>74.8</td><td>74.8</td></tr><tr><td>电感线包 (L092)</td><td>84.7</td><td>80.8</td><td>83.1</td><td>83.4</td></tr><tr><td>输入电解电容 (EC092)</td><td>56.4</td><td>52.3</td><td>53.2</td><td>53.6</td></tr><tr><td>输出电解电容 (EC095)</td><td>50.8</td><td>49.7</td><td>50.2</td><td>49.9</td></tr></table>

PN8034M

<table><tr><td rowspan="2">项目</td><td>85VAC</td><td>115VAC</td><td>230VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>39</td><td>40</td><td>37.9</td><td>40.2</td></tr><tr><td>PN8034M (U091)</td><td>99.4</td><td>87.4</td><td>87.8</td><td>92.8</td></tr><tr><td>续流二极管 (D094)</td><td>77.6</td><td>74.5</td><td>74.1</td><td>76</td></tr><tr><td>电感磁芯 (L092)</td><td>80.8</td><td>77.6</td><td>78.3</td><td>79.2</td></tr><tr><td>电感线包 (L092)</td><td>78.5</td><td>75.7</td><td>75.7</td><td>77.3</td></tr><tr><td>输入电解电容 (EC092)</td><td>61.3</td><td>57</td><td>54.4</td><td>56.9</td></tr><tr><td>输出电解电容 (EC095)</td><td>50.9</td><td>50.4</td><td>49.2</td><td>50.4</td></tr></table>

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/1341525833d11ac6623336f80bc5d9369bd3ea7a1a4142792d6ee99ab2920552.jpg)

115VAC Line

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/0b9cd36d8b78a61d97b111a7c567e75a99f7bd94781c0f7d338928b337af9f19.jpg)

115VAC Neutral

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/1bf2f16eb0ab2d8141dfbec5d4c75ea6b34885b280d8389262c6df1a3fd8c360.jpg)

115VAC Line

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/d17f47d9ce4759f5b663b426154f836a00150f02c3de3d0e6f2eab45883946c0.jpg)

115VAC Neutral

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/c1ed7137fd41a64d329a10da1877c89dd7ecd5f5365baab4d90d68569e5ebec3.jpg)

230VAC Line

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/7419b002c9ac26a309adb14e23e04320da8cb2cafbd67838c365e8bf9ebb2ab1.jpg)

230VAC Neutral

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/95422bc3cf62d8ddf934305bbeac570d100cb6787c83dc32ea34204b0e40aa30.jpg)

230VAC Line

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/9d161906262dae4eeda66de42e191c39dacd15f3905b8dd94e15c03f4a7dacf0.jpg)

230VAC Neutral

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/4838f5c7c201840c66b79360078170242bc676878d24ee10c96069f94ffc68a9.jpg)

115VAC Neutral  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/bbb9a5cb8d8378f3581c1463ebf3a9d07fa89d2b6bc550132a7888bef70a8dae.jpg)

230VAC Neutral

![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/2380237aa8e6d0e0e44a68a400b951c3b03c28cdc63264040f92f83e5cd025df.jpg)

115VAC Neutral  
![](./素材/images/BP85956P_VS_PN8034M对比测试_12V300mA_Pin_to_Pin/12e55a5449fe9a23de77248c0c9d3332a4e6e53ebcf7dab6745cfabf76fe5e53.jpg)

230VAC Neutral

BP85956P

<table><tr><td>差模</td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>+2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr></table>

PN8034M

<table><tr><td>差模</td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>+2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr></table>

## EFT

BP85956P

<table><tr><td>差模</td><td>电压</td><td>脉冲群持续时间</td><td>脉冲频率</td><td>测试时间</td><td>测试结果</td></tr><tr><td>L N to GND</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L N to GND</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L N to GND</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L N to GND</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L N to GND</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L N to GND</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L N to GND</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L N to GND</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr></table>

PN8034M

<table><tr><td>差模</td><td>电压</td><td>脉冲群持续时间</td><td>脉冲频率</td><td>测试时间</td><td colspan="2">测试结果</td></tr><tr><td>L N to GND</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td><td></td></tr><tr><td>L N to GND</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td><td></td></tr><tr><td>L N to GND</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td><td></td></tr><tr><td>L N to GND</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td><td></td></tr><tr><td>L N to GND</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td><td></td></tr><tr><td>L N to GND</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td><td></td></tr><tr><td>L N to GND</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td><td></td></tr><tr><td>L N to GND</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td><td></td></tr></table>

BP85956P

<table><tr><td>测试点</td><td>电压(V)</td><td>放电类型</td><td>放电次数</td><td>测试结果</td></tr><tr><td>Vo</td><td>±15kV</td><td>空气放电</td><td>各10次</td><td>Pass</td></tr><tr><td>GND</td><td>±15kV</td><td>空气放电</td><td>各10次</td><td>Pass</td></tr><tr><td>Vo</td><td>±20kV</td><td>空气放电</td><td>各10次</td><td>Pass</td></tr><tr><td>GND</td><td>±20kV</td><td>空气放电</td><td>各10次</td><td>Pass</td></tr></table>

PN8034M

<table><tr><td>测试点</td><td>电压(V)</td><td>放电类型</td><td>放电次数</td><td>测试结果</td></tr><tr><td>Vo</td><td>±15kV</td><td>空气放电</td><td>各10次</td><td>Pass</td></tr><tr><td>GND</td><td>±15kV</td><td>空气放电</td><td>各10次</td><td>Pass</td></tr><tr><td>Vo</td><td>±20kV</td><td>空气放电</td><td>各10次</td><td>Pass</td></tr><tr><td>GND</td><td>±20kV</td><td>空气放电</td><td>各10次</td><td>Pass</td></tr></table>

## 空载功耗和效率

➢ BP85956P PN8034M  
BP85956P PN8034M

## 带载启动

BP85956P PN8034M  
BP85956P PN8034M

## 动态负载

BP85956P PN8034M

## 温升

BP85956P PN8034M

## 开关MOS应力和电感电流

➢ BP85956P MOS PN8034M

## 结论

BP85956P Pin to Pin PN8034M

## THANK YOU FOR WATCHING
