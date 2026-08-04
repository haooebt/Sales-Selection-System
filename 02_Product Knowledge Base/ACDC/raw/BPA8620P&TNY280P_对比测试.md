![](./素材/images/BPA8620P&TNY280P_对比测试/65b8bf5778ea92a03712ee937da5a2735831ca6eeb5633b96da375f04ee9cb43.jpg)

## BPA8620P&TNY280P对比测试

## (12V/1.5A@85\~265Vac)

上海晶丰明源半导体股份有限公司

Shanghai Bright Power Semiconductor Co., Ltd.

WHX

时间：2021年4月

## 电气参数对比

<table><tr><td></td><td>BPA8620P</td><td>TNY280P</td></tr><tr><td>开关频率</td><td>132KHz</td><td>132KHz</td></tr><tr><td>Mosfet BV</td><td>700V</td><td>700V</td></tr><tr><td> $R_{DS\_ON}$ </td><td>2.5Ω</td><td>2.6Ω</td></tr><tr><td>限流点</td><td>750mA</td><td>750mA</td></tr><tr><td>软启动</td><td>有</td><td>无</td></tr><tr><td>输入过压保护</td><td>有</td><td>无</td></tr><tr><td>输入欠压保护</td><td>内置</td><td>外加</td></tr><tr><td>输出过压保护</td><td>自动重启</td><td>锁死</td></tr><tr><td>过载保护</td><td>有</td><td>有</td></tr><tr><td>封装</td><td>DIP7, SOP7</td><td>DIP7, SMD8C</td></tr></table>

## 测试数据对比

电源规格：85\~265Vac输入，12V/1.5A输出

<table><tr><td colspan="2"></td><td>BPA8620P</td><td>TNY280P</td><td></td></tr><tr><td colspan="2">待机功耗</td><td>48mW</td><td>70mW</td><td>包含输入电压检测电阻损耗</td></tr><tr><td rowspan="2">效率</td><td>115Vac</td><td>84%</td><td>84.1%</td><td></td></tr><tr><td>230Vac</td><td>84.6%</td><td>85.4%</td><td></td></tr><tr><td rowspan="2">输出电压纹波</td><td>85Vac</td><td>255mV</td><td>256mV</td><td></td></tr><tr><td>265Vac</td><td>224mV</td><td>220mV</td><td></td></tr><tr><td rowspan="2">动态负载性能</td><td>50%-100%</td><td> $260mV_{PK\_PK}$ </td><td> $295mV_{PK\_PK}$ </td><td></td></tr><tr><td>10%-90%</td><td> $314mV_{PK\_PK}$ </td><td> $376mV_{PK\_PK}$ </td><td></td></tr><tr><td rowspan="2">MOSFET应力</td><td> $V_{DS}$ </td><td>550V</td><td>550V</td><td></td></tr><tr><td> $I_{DS}$ </td><td>1.25A</td><td>1.5A</td><td></td></tr><tr><td rowspan="2">二极管应力</td><td>VRR</td><td>67.2V</td><td>68.4V</td><td></td></tr><tr><td> $I_{PK}$ </td><td>8.8A</td><td>9.5A</td><td></td></tr><tr><td colspan="2">温升测试(环温50°C)</td><td>110.72°C</td><td>110.82°C</td><td></td></tr><tr><td colspan="2">传导EMI</td><td>&gt;6dB裕量</td><td>&gt;6dB裕量</td><td></td></tr><tr><td colspan="2">Surge</td><td>Pass</td><td>Pass</td><td>共模4kV,差模2kV</td></tr><tr><td colspan="2">EFT群脉冲</td><td>Pass</td><td>Pass</td><td>4kV,5kHz/38kHz/100kHz</td></tr><tr><td colspan="2">ESD</td><td>Pass</td><td>Pass</td><td>8kV接触放电/15kV空气放电</td></tr></table>

## 电路及实物图

![](./素材/images/BPA8620P&TNY280P_对比测试/36d8e4cc2664f4f21c36557e3c6c4c91ff6d5c9d2e47501e112bf3366c758048.jpg)

![](./素材/images/BPA8620P&TNY280P_对比测试/75033ad07df27cdf836343fdbf2193f711103c389ff01c26fa9e59ba34e4fcce.jpg)

![](./素材/images/BPA8620P&TNY280P_对比测试/1f5e1d07713dcaf593183a2ebf33b226064cc965218586b2a3dd04fe31b6d7da.jpg)

![](./素材/images/BPA8620P&TNY280P_对比测试/366fd1d02a89bc0ebd49e84217d2b01955675ca2ef3401e16770284b66e526dc.jpg)

备注：TNY280P在FB pin脚上拉一串电阻做UVL，阻值4M；BPA8620P内部集成UVL功能，无需外部电阻

效率测试  
![](./素材/images/BPA8620P&TNY280P_对比测试/57d6839567f119c8fc98978ce022dee2e17921a4ee6f73af0064faa0c7291867.jpg)

负载

## 输出电压调整率

BPA8620P

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>12.178</td><td>12.178</td><td>12.178</td><td>12.176</td><td>12.175</td><td>12.171</td><td>12.18</td><td>0.06%</td></tr><tr><td>20%</td><td>12.176</td><td>12.176</td><td>12.175</td><td>12.175</td><td>12.174</td><td>12.170</td><td>12.17</td><td>0.05%</td></tr><tr><td>40%</td><td>12.175</td><td>12.175</td><td>12.174</td><td>12.173</td><td>12.170</td><td>12.168</td><td>12.17</td><td>0.06%</td></tr><tr><td>60%</td><td>12.173</td><td>12.173</td><td>12.173</td><td>12.170</td><td>12.169</td><td>12.166</td><td>12.17</td><td>0.06%</td></tr><tr><td>80%</td><td>12.170</td><td>12.170</td><td>12.169</td><td>12.168</td><td>12.165</td><td>12.164</td><td>12.17</td><td>0.05%</td></tr><tr><td>100%</td><td>12.169</td><td>12.168</td><td>12.168</td><td>12.166</td><td>12.164</td><td>12.160</td><td>12.17</td><td>0.07%</td></tr><tr><td>平均值</td><td>12.17</td><td>12.17</td><td>12.17</td><td>12.17</td><td>12.17</td><td>12.17</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>0.07%</td><td>0.08%</td><td>0.08%</td><td>0.08%</td><td>0.09%</td><td>0.09%</td></tr></table>

计算方法：调整率=100%\*(最大值-最小值)/平均值  
测试条件：无假负载

TNY280P

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>12.181</td><td>12.180</td><td>12.181</td><td>12.181</td><td>12.180</td><td>12.181</td><td>12.18</td><td>0.01%</td></tr><tr><td>20%</td><td>12.180</td><td>12.179</td><td>12.180</td><td>12.179</td><td>12.179</td><td>12.179</td><td>12.18</td><td>0.01%</td></tr><tr><td>40%</td><td>12.179</td><td>12.178</td><td>12.178</td><td>12.178</td><td>12.178</td><td>12.178</td><td>12.18</td><td>0.01%</td></tr><tr><td>60%</td><td>12.176</td><td>12.176</td><td>12.176</td><td>12.178</td><td>12.176</td><td>12.176</td><td>12.18</td><td>0.02%</td></tr><tr><td>80%</td><td>12.171</td><td>12.175</td><td>12.175</td><td>12.175</td><td>12.175</td><td>12.175</td><td>12.17</td><td>0.03%</td></tr><tr><td>100%</td><td>12.170</td><td>12.171</td><td>12.171</td><td>12.171</td><td>12.171</td><td>12.171</td><td>12.17</td><td>0.01%</td></tr><tr><td>平均值</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.18</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>0.09%</td><td>0.07%</td><td>0.08%</td><td>0.08%</td><td>0.07%</td><td>0.08%</td></tr></table>

## 输出电压纹波

![](./素材/images/BPA8620P&TNY280P_对比测试/57eb3532ff98f371f3239f6b0cfd04fab093325e3042e72d7afcb6a71e2408b4.jpg)

85 VAC  
![](./素材/images/BPA8620P&TNY280P_对比测试/9175e7495033d79a5d5339727b0013c1dfd9f3311d669b3c38389acae9d2b1ea.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8620P&TNY280P_对比测试/9a475e862bdc1f2fe27d1d267fe6f8ab98fef2f43acf97afe636b3cfb167eeb4.jpg)

85 VAC  
![](./素材/images/BPA8620P&TNY280P_对比测试/69be3813e92eead7c4636af324892899f06edd2058080ebce0ec941127e4d400.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8620P&TNY280P_对比测试/7f142dfc8c3739c7592faef7bef6539f67973bb4e8ac130c664a82e6e461b222.jpg)

265 VAC  
![](./素材/images/BPA8620P&TNY280P_对比测试/05127ffea77037a19071be13874910573fd906c293cf2752aa015793475c7b01.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8620P&TNY280P_对比测试/9c592a87ad484a7a8d8ba4976127a97404d28534e7b129cdc11dfda89022832c.jpg)

265 VAC  
![](./素材/images/BPA8620P&TNY280P_对比测试/5369cbff99abbec0328b2e24e3e4609a2de9fb9a2457284017d0620dd94b59e3.jpg)  
Test Condition:  
➢ Full Load

## (50%-100%)

![](./素材/images/BPA8620P&TNY280P_对比测试/67ab00c080ab471af47c776439470c4eb55fa957dfe84425ef7c20c77939dab8.jpg)

85 VAC

CH4 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 2 6 0 m V$  
CH3 ${ \mathsf I } _ { 0 \mathsf U \top }$

## Test Condition:

➢ 0.5 A-1 A-0.5 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8620P&TNY280P_对比测试/b2eb0f82b50f838a276bae1edcd459d9269ccd6b58ec88757f85e6f805ab15b1.jpg)

85 VAC

$\mathsf { C H } 4 \mathsf { V } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 2 9 5 ~ \mathsf { m V }$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.5 A-1 A-0.5 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8620P&TNY280P_对比测试/b25861ff7c24edf64548f99bfe8bc4c019880069441e5c76f4aae2e774f0a919.jpg)

265 VAC

CH4 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { p | c - P K } = 2 2 9 m v$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.5 A-1 A-0.5 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8620P&TNY280P_对比测试/6a6fe2e326d5be386222cc4b3689b8d766061232ca39a902530a0ed0030b596c.jpg)

265 VAC

$\mathsf { C H } 4 \mathsf { V } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 2 3 3 ~ \mathsf { m V }$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.5 A-1 A-0.5 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## (10%-90%)

![](./素材/images/BPA8620P&TNY280P_对比测试/53dfbac75359b0d90b784cebc68b4f10987166741be06532efbbc009515518fb.jpg)

85 VAC

CH4 $\mathsf { V } _ { \mathsf { O U T } }$ $\mathsf { V } _ { \mathsf { P K - P K } } { = } 3 1 4 \mathsf { m V }$  
CH3 ${ \mathsf I } _ { 0 \mathsf U \top }$

## Test Condition:

➢ 0.1A-0.9 A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8620P&TNY280P_对比测试/add9ee1fa663aecc86b7ff86f38c3955ce3669313dd98c7b75d744471093f937.jpg)

85 VAC

CH4 VOUT $\mathsf { C H } 4 \mathsf { V } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 3 7 6 m v$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.1A-0.9 A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8620P&TNY280P_对比测试/a4acdfe7c51cffc6d5b30604d906977167fb227af83b53d7dfc81997e22b6619.jpg)

265 VAC

CH4 V $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 2 7 5 m v$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ $0 . 1 \mathsf { A } \mathsf { - } 0 . 9 \mathsf { A } \mathsf { - } 0 . 1 \mathsf { A }$  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8620P&TNY280P_对比测试/73fdc162acfe645997eae5eddac36f39d106672b6a2872942cbcaf3b96f78e90.jpg)

265 VAC

CH4 VOUT $V _ { P K - P K } = 2 9 9 m v$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.1A-0.9 A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## 输出电压开机波形

![](./素材/images/BPA8620P&TNY280P_对比测试/f860ee742a18102a7ef2ce8f28b31ace6a915ba31fd00966825888dea9330ef5.jpg)

85 VAC  
![](./素材/images/BPA8620P&TNY280P_对比测试/3face3b550967421628085aa88abbec1a947b6d9ff219d04a67c8d467952aa82.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8620P&TNY280P_对比测试/897949410bc0f214b7a14c9604d00535d85ff0c8afe606d3cfffa7173858548b.jpg)

85 VAC  
![](./素材/images/BPA8620P&TNY280P_对比测试/61ca0b7ec84d6e72247da00d67aa476621667569741ea5b0040cd7e35a0eea80.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8620P&TNY280P_对比测试/3b35fa946727dfea7d5a40a2b90618ff30abd1a5102d9fef87139a0bbc302735.jpg)

265 VAC  
![](./素材/images/BPA8620P&TNY280P_对比测试/59b4deb98990cafb8a349a95fe10149ea0b12964b6bfbd193a8d4d2f30e5ad94.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8620P&TNY280P_对比测试/e5fd5f716370ee78ec462698e5b89cc53de0a6049a8fbd1e9afe6620c2dfc128.jpg)

265 VAC  
![](./素材/images/BPA8620P&TNY280P_对比测试/0b53c28933220e687e8f3f85ef0cffbf134f98379bb4eec7a231ccf803b11369.jpg)  
Test Condition:  
➢ Full Load

## MOSFET

![](./素材/images/BPA8620P&TNY280P_对比测试/cffb5f47a744719df3dcbdd7fc6f636c91a103627be05f41ccf8d33b4ab7c3aa.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 8 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 8 8 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8620P&TNY280P_对比测试/7ea6e02e9af7f0127ee96179e5621b21e3e2725fb5d7fdbfd68b031af87f094b.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 8 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 8 9 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8620P&TNY280P_对比测试/f74fbe57a5d44c0c0ccabbbe7ae5ea77619f121f361c3e30a5f59eb1c197bdb4.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} V _ {D S \_ M A X} = 5 5 0 V \\ I _ {D S \_ M A X} = 1. 0 5 A \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8620P&TNY280P_对比测试/70895dc1854ae60e45cbb6cd608aa64fb37f00ceb464f8edaf756622785f5ffe.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} V _ {D S \_ M A X} = 5 4 0 V \\ I _ {D S \_ M A X} = 0. 9 7 A \end{array}
$$

## Test Condition:

➢ Full Load

## MOSFET

![](./素材/images/BPA8620P&TNY280P_对比测试/143c29876a64a6d9a426cdf9b9d17be975818d3a98e3ca365c46f180cccdca4d.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 8 2 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 8 2 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8620P&TNY280P_对比测试/8dae68c0dc5290106834b0237de0c89669607c620f7b6d4f5fb741bb56fce62b.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 8 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 8 3 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8620P&TNY280P_对比测试/78bf0a4ab994de8e7c2f92ea3de4e6ef717fb9000877e7d081b38624fd379ccd.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
V _ {D S \_ M A X} = 5 5 0 V
$$

$$
I _ {D S \_ M A X} = 0. 8 7 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8620P&TNY280P_对比测试/cf69435fea74a04a901e3c1ef9382cbb76bff50f7252e739ace59a3964cace96.jpg)

265 VAC

CH1 VDS

$$
V _ {D S \_ M A X} = 5 5 0 V
$$

$$
I _ {D S \_ M A X} = 0. 9 3 \mathrm{A}
$$

## Test Condition:

➢ Full Load

## 输出二极管开机波形

![](./素材/images/BPA8620P&TNY280P_对比测试/5b6e3913b81ebcb1a962156f6516e00f34e249092fc6af0d7d1fe548e895d32a.jpg)

85 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 3 2. 6 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 8. 8 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8620P&TNY280P_对比测试/1bb9370761cbf1d33018f3d91928fd555bb04b511788610c86da43a5065c58fb.jpg)

85 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 3 5. 5 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 8. 7 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8620P&TNY280P_对比测试/539b9a3daf60dfa6f861495453a4b250d4a81781b111f882280ac2a9c25fc0f3.jpg)

265 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 6 7. 2 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 8. 8 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8620P&TNY280P_对比测试/976c5e9c8f173c68d8598e40978d18cf1cda42dcd3b86a1625e26daf95380582.jpg)

265 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 6 8. 4 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 9. 1 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

## 输出二极管稳态波形

![](./素材/images/BPA8620P&TNY280P_对比测试/5db8a22700b5739c959d4e5df6b038c9e9cee502545265bc174c9f973bf45f03.jpg)

85 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 3 4. 1 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 8. 4 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8620P&TNY280P_对比测试/9200d012f3fe9d70207a7ac21ea5d4472225603112bb4746725c5daa818ad2c8.jpg)

85 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 3 6 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 8. 7 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8620P&TNY280P_对比测试/f1db69db61963c82fb22120889cb4941b0463e19f0e6bf72166f815be1567706.jpg)

265 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 6 7. 3 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 8. 8 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8620P&TNY280P_对比测试/6cf9165baa96f1ab84fbc5be3cd7d26848ddc4800646fc6858fdeb5decb84ecf.jpg)

265 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 6 7. 7 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 9. 5 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

## MOSFET

BPA8620P  
![](./素材/images/BPA8620P&TNY280P_对比测试/fcff8b7d45ee9be5f64233b0a26f4d36415421da11ea8a3993f9bc1e5a64de39.jpg)

CH1 VDS  
CH2 VDC\_IN  
CH4 VO

$$
V _ {D S \_ M A X} = 7 0 0 \mathrm{V}
$$

$$
V _ {D C I N} = 5 5 0 \mathrm{V}
$$

Test Condition:

➢ Full Load

TNY280P  
![](./素材/images/BPA8620P&TNY280P_对比测试/470fc93e3acda4200c8d5ce2fc9c6fbdcfb5d69c63f4e9b96bcf9a04abfa1cb5.jpg)

CH1 VDS  
CH2 VDC\_IN  
CH4 VO

$$
V _ {D S \_ M A X} = 7 5 0 \mathrm{V}
$$

$$
V _ {D C \_ I N} = 5 5 0 \mathrm{V}
$$

Test Condition:

➢ Full Load

BPA8620P  
![](./素材/images/BPA8620P&TNY280P_对比测试/d2e35b84be5f8e9aeb7b9692ceaa72d812f40652477ac4853c94c474b12bebe7.jpg)

CH1 VAC\_IN  
CH4 Vo

VAC\_IN\_STARTUP=66 V

Test Condition:

➢ No Load

TNY280P  
![](./素材/images/BPA8620P&TNY280P_对比测试/7f1676817e118ce7d1d6ca4f7d1d3616bd471d3a879e1adaf9e4d982539cb8f2.jpg)

CH2 VAC\_IN  
CH4 Vo

VAC\_IN\_STARTUP=72 V

Test Condition:

➢ No Load

备注：TNY280P在FB pin脚上拉一串电阻做UVL，阻值4M；BPA8620P内部集成UVL功能，无需外部电阻

## MOSFET

![](./素材/images/BPA8620P&TNY280P_对比测试/ad20a75e6f183b6a6863e0816a0e1b7bbeb84edcdfa73b098a85eefffd4433b4.jpg)

85 VAC

${ \mathsf { C H 1 } } \mathsf { V _ { D S } }$  
$C H 3 \mid _ { \mathsf { D S } }$

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 8 4 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 8 9 \mathrm{A} \end{array}
$$

![](./素材/images/BPA8620P&TNY280P_对比测试/ba4edc5fdacf6ac4d19e21ac5f11277ed0f2471b09a1f25aef5ac8bd9c2ca0a0.jpg)

85 VAC

${ \mathsf { C H 1 } } \mathsf { V _ { D S } }$  
$C H 3 \mid _ { \mathsf { D S } }$

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 8 2 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 9 7 \mathrm{A} \end{array}
$$

![](./素材/images/BPA8620P&TNY280P_对比测试/ea6764ec38d2a859792bad8e0644512b15c9362422a3fa994974872cc66a22bf.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
V _ {D S \_ M A X} = 5 5 0 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 1. 2 5 \mathrm{A}
$$

![](./素材/images/BPA8620P&TNY280P_对比测试/da8e4e5ec5b644700978e87ebc0f02e42d9f7ae27e3857e74431c27b183cffbc.jpg)

265 VAC

CH1 VDS

$$
V _ {D S \_ M A X} = 5 5 0 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 1. 5 \mathrm{A}
$$

## 温升测试

BPA8620P

<table><tr><td rowspan="2">项目</td><td>85VAC</td><td>115VAC</td><td>230VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>50</td><td>50</td><td>50</td><td>50</td></tr><tr><td>BP861AP(U2)</td><td>108.16</td><td>95.99</td><td>100.65</td><td>110.72</td></tr><tr><td>变压器绕组(T1)</td><td>78.65</td><td>78.78</td><td>82.64</td><td>84.34</td></tr><tr><td>变压器磁芯(T1)</td><td>74.08</td><td>74.8</td><td>79.2</td><td>80.92</td></tr><tr><td>整流二极管(D3)</td><td>104.63</td><td>104.16</td><td>104.98</td><td>105.53</td></tr><tr><td>整流桥(D1)</td><td>80.98</td><td>73.11</td><td>65.6</td><td>65.22</td></tr><tr><td>输入电解电容(C6)</td><td>75.1</td><td>71.34</td><td>70.34</td><td>71.34</td></tr><tr><td>输出电解电容(C3)</td><td>68.86</td><td>68.69</td><td>69.39</td><td>69.9</td></tr></table>

TNY280P

<table><tr><td rowspan="2">项目</td><td>85VAC</td><td>115VAC</td><td>230VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>50</td><td>50</td><td>50</td><td>50</td></tr><tr><td>TNY280 (U2)</td><td>110.82</td><td>100.46</td><td>99.01</td><td>101.83</td></tr><tr><td>变压器绕组(T1)</td><td>80.02</td><td>79.9</td><td>83.78</td><td>85.37</td></tr><tr><td>变压器磁芯(T1)</td><td>74.69</td><td>75.25</td><td>79.54</td><td>81.09</td></tr><tr><td>整流二极管(D3)</td><td>102.02</td><td>101.47</td><td>102.4</td><td>102.91</td></tr><tr><td>整流桥(D1)</td><td>82.08</td><td>73.99</td><td>66.58</td><td>66.38</td></tr><tr><td>输入电解电容(C6)</td><td>76.44</td><td>72.16</td><td>69.67</td><td>70.28</td></tr><tr><td>输出电解电容(C3)</td><td>69.02</td><td>68.73</td><td>69.49</td><td>69.91</td></tr></table>

备注：增大芯片Source散热铜箔面积可以降低芯片温度

![](./素材/images/BPA8620P&TNY280P_对比测试/cbc2f5e088e5eac20b719eed087548ae875897c03a54d761764666dc96279a28.jpg)

115Vac Line  
![](./素材/images/BPA8620P&TNY280P_对比测试/044cf241466d82691ce46d8c8e76667a115ba7fac9f605a9d6559bc0d498fd45.jpg)

230Vac Line

![](./素材/images/BPA8620P&TNY280P_对比测试/808439d213574bdb883d89d863c4112d3220aa73c048bc5859b0a2818e87bb69.jpg)

115Vac Neutral

![](./素材/images/BPA8620P&TNY280P_对比测试/ac03909a1e55c922f3d715dd0edc5ae1a9d0d46941550cf867c98b3a702c862f.jpg)

230Vac Neutral

![](./素材/images/BPA8620P&TNY280P_对比测试/432bd91d6a9619fe203d8708473578a7b8a9d2a277db54c3b61a102777872fa8.jpg)

115Vac Line  
![](./素材/images/BPA8620P&TNY280P_对比测试/c6db6bb45fd5494f83c4c84ee5f0235bf80d49ccd9ff0cfb0ac50b80505cfdf0.jpg)

230Vac Line

![](./素材/images/BPA8620P&TNY280P_对比测试/1ffe4fa2c13815481c2acdc603a58e9d44e536a7b9591c6cd711ad30c9ba6342.jpg)

115Vac Neutral

![](./素材/images/BPA8620P&TNY280P_对比测试/1034d16825c6e5882f386fbf0dfd2c430f36121494a1a7c6429829fe136807bd.jpg)

230Vac Neutral

## Surge

BPA8620P

<table><tr><td>差模</td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>+2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to PE</td><td>+4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>L to PE</td><td>-4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>N to PE</td><td>+4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>N to PE</td><td>-4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr></table>

TNY280P

<table><tr><td>差模</td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>+2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to PE</td><td>+4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>L to PE</td><td>-4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>N to PE</td><td>+4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>N to PE</td><td>-4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr></table>

## EFT

BPA8620P

<table><tr><td>差模</td><td>电压</td><td>脉冲群持续时间</td><td>脉冲频率</td><td>测试时间</td><td>测试结果</td></tr><tr><td>L to N</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr></table>

TNY280P

<table><tr><td>差模</td><td>电压</td><td>脉冲群持续时间</td><td>脉冲频率</td><td>测试时间</td><td>测试结果</td></tr><tr><td>L to N</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr></table>

BPA8620P

<table><tr><td>测试点</td><td>电压(V)</td><td>放电类型</td><td>放电次数</td><td>测试结果</td></tr><tr><td>Vo</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr></table>

TNY280P

<table><tr><td>测试点</td><td>电压(V)</td><td>放电类型</td><td>放电次数</td><td>测试结果</td></tr><tr><td>Vo</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr></table>

## THANK YOU FOR WATCHING
