![](./素材/images/BPA8618P_&_TNY278P对比测试/6436f32c5d3308c9d57333114a4a127ab4546013f02e92eb8e75ea66c1064426.jpg)

## BPA8618P&TNY278P对比测试

## (12V/1A@85\~265Vac)

上海晶丰明源半导体股份有限公司

Shanghai Bright Power Semiconductor Co., Ltd.

WHX

时间：2020年12月

## 电气参数对比

<table><tr><td></td><td>BPA8618P</td><td>TNY278P</td></tr><tr><td>开关频率</td><td>132KHz</td><td>132KHz</td></tr><tr><td>Mosfet BV</td><td>700V</td><td>700V</td></tr><tr><td> $R_{DS\_ON}$ </td><td>4.7Ω</td><td>5.2Ω</td></tr><tr><td>限流点</td><td>550mA</td><td>550mA</td></tr><tr><td>软启动</td><td>有</td><td>无</td></tr><tr><td>输入过压保护</td><td>有</td><td>无</td></tr><tr><td>输入欠压保护</td><td>内置</td><td>外加</td></tr><tr><td>输出过压保护</td><td>自动重启</td><td>锁死</td></tr><tr><td>过载保护</td><td>有</td><td>有</td></tr><tr><td>封装</td><td>DIP7, SOP7</td><td>DIP7, SMD8C</td></tr></table>

## 测试数据对比

电源规格:85\~265Vac输入，12V/1A输出

<table><tr><td colspan="2"></td><td>BPA8618P</td><td>TNY278P</td><td></td></tr><tr><td colspan="2">待机功耗</td><td>51mW</td><td>69mW</td><td>包含输入电压检测电阻损耗</td></tr><tr><td rowspan="2">效率</td><td>115Vac</td><td>81.4%</td><td>81.9%</td><td></td></tr><tr><td>230Vac</td><td>82.3%</td><td>82.7%</td><td></td></tr><tr><td rowspan="2">输出电压纹波</td><td>85Vac</td><td>232mV</td><td>240mV</td><td></td></tr><tr><td>265Vac</td><td>205mV</td><td>215mV</td><td></td></tr><tr><td rowspan="2">动态负载性能</td><td>50%-100%</td><td> $247mV_{PK\_PK}$ </td><td> $287mV_{PK\_PK}$ </td><td></td></tr><tr><td>10%-90%</td><td> $288mV_{PK\_PK}$ </td><td> $366mV_{PK\_PK}$ </td><td></td></tr><tr><td rowspan="2">MOSFET应力</td><td> $V_{DS}$ </td><td>540V</td><td>540V</td><td></td></tr><tr><td> $I_{DS}$ </td><td>0.87A</td><td>0.7A</td><td></td></tr><tr><td rowspan="2">二极管应力</td><td>VRR</td><td>67.2V</td><td>69.5V</td><td></td></tr><tr><td> $I_{PK}$ </td><td>6.6A</td><td>6.76A</td><td></td></tr><tr><td colspan="2">温升测试(环温50°C)</td><td>111°C</td><td>111°C</td><td></td></tr><tr><td colspan="2">传导EMI</td><td>&gt;6dB裕量</td><td>&gt;6dB裕量</td><td></td></tr><tr><td colspan="2">Surge</td><td>Pass</td><td>Pass</td><td>共模2kV,差模4kV</td></tr><tr><td colspan="2">EFT群脉冲</td><td>Pass</td><td>Pass</td><td>4kV,5kHz/38kHz/100kHz</td></tr><tr><td colspan="2">ESD</td><td>Pass</td><td>Pass</td><td>8kV接触放电/15kV空气放电</td></tr></table>

## 电路及实物图

![](./素材/images/BPA8618P_&_TNY278P对比测试/70d1dabeeec7ca76ecc4f4c745efcc4061b40af192bf7c092d05a953a5f42dc3.jpg)

![](./素材/images/BPA8618P_&_TNY278P对比测试/99852713de991e751f5c5ad76e04f37282f2ee89fb3b7e9b07b95721d565abce.jpg)

![](./素材/images/BPA8618P_&_TNY278P对比测试/e240040e947c49f24a56e6ea83fc43deb61374564fe6dddaf44a9acbd4967927.jpg)

![](./素材/images/BPA8618P_&_TNY278P对比测试/b7bf290e0eea17b62208e5d06556e35597f5620d2e18cc6c131242b5f3e27ada.jpg)

备注：TNY278P在FB pin脚上拉一串电阻做UVL，阻值4M；BPA8618P内部集成UVL功能，无需外部电阻

效率测试  
![](./素材/images/BPA8618P_&_TNY278P对比测试/4d8639d8181089a215eebbdbfc796ae8091f751a6f4aa5b48e20f5afc2daa91d.jpg)

负载

## 输出电压调整率

BPA8618P

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>12.201</td><td>12.201</td><td>12.198</td><td>12.198</td><td>12.198</td><td>12.198</td><td>12.20</td><td>0.02%</td></tr><tr><td>20%</td><td>12.199</td><td>12.198</td><td>12.196</td><td>12.196</td><td>12.196</td><td>12.196</td><td>12.20</td><td>0.02%</td></tr><tr><td>40%</td><td>12.198</td><td>12.196</td><td>12.196</td><td>12.195</td><td>12.195</td><td>12.195</td><td>12.20</td><td>0.02%</td></tr><tr><td>60%</td><td>12.196</td><td>12.196</td><td>12.195</td><td>12.194</td><td>12.193</td><td>12.193</td><td>12.19</td><td>0.02%</td></tr><tr><td>80%</td><td>12.195</td><td>12.195</td><td>12.193</td><td>12.194</td><td>12.193</td><td>12.193</td><td>12.19</td><td>0.02%</td></tr><tr><td>100%</td><td>12.194</td><td>12.193</td><td>12.191</td><td>12.191</td><td>12.191</td><td>12.191</td><td>12.19</td><td>0.02%</td></tr><tr><td>平均值</td><td>12.20</td><td>12.20</td><td>12.19</td><td>12.19</td><td>12.19</td><td>12.19</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>0.06%</td><td>0.07%</td><td>0.06%</td><td>0.06%</td><td>0.06%</td><td>0.06%</td></tr></table>

计算方法：调整率=100%\*(最大值-最小值)/平均值  
测试条件：无假负载

TNY278P

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>12.198</td><td>12.198</td><td>12.198</td><td>12.198</td><td>12.199</td><td>12.198</td><td>12.20</td><td>0.01%</td></tr><tr><td>20%</td><td>12.196</td><td>12.196</td><td>12.196</td><td>12.196</td><td>12.198</td><td>12.198</td><td>12.20</td><td>0.02%</td></tr><tr><td>40%</td><td>12.195</td><td>12.196</td><td>12.196</td><td>12.196</td><td>12.198</td><td>12.196</td><td>12.20</td><td>0.02%</td></tr><tr><td>60%</td><td>12.194</td><td>12.193</td><td>12.194</td><td>12.195</td><td>12.196</td><td>12.196</td><td>12.19</td><td>0.02%</td></tr><tr><td>80%</td><td>12.191</td><td>12.193</td><td>12.193</td><td>12.193</td><td>12.196</td><td>12.195</td><td>12.19</td><td>0.04%</td></tr><tr><td>100%</td><td>12.190</td><td>12.191</td><td>12.191</td><td>12.193</td><td>12.195</td><td>12.194</td><td>12.19</td><td>0.04%</td></tr><tr><td>平均值</td><td>12.19</td><td>12.19</td><td>12.19</td><td>12.20</td><td>12.20</td><td>12.20</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>0.07%</td><td>0.06%</td><td>0.06%</td><td>0.04%</td><td>0.03%</td><td>0.03%</td></tr></table>

## 输出电压纹波

![](./素材/images/BPA8618P_&_TNY278P对比测试/5562826a82795ce6dc1cea590462c45bf94188c792f5cad2cc4fa0020cfe7ed5.jpg)

85 VAC  
![](./素材/images/BPA8618P_&_TNY278P对比测试/a09987a26cd9d1b5668b63c413d75ebf1787bbe12709ae36442aa7d8c0ac7ef4.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8618P_&_TNY278P对比测试/429ca195e8e08a6cbfad5c23941f90ebba0ea3509c1ce4d558499c8269ee2eff.jpg)

85 VAC  
![](./素材/images/BPA8618P_&_TNY278P对比测试/515b940958d89e740f8b7007e4856aac3cbcd324f1dad3a4450d21d57aaa1cbf.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8618P_&_TNY278P对比测试/cba745503e3a6800c4b4bcbc61f6cdfd87da1ea79bd905aa8a36220a82d068b3.jpg)

265 VAC  
![](./素材/images/BPA8618P_&_TNY278P对比测试/8f6168f9e4cb541e9912aa743bfcd33ae55c005595082fda5462dc89c3a44982.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8618P_&_TNY278P对比测试/e23f3303548b46d47ab33eb529adaadbff6d3d48f13f5bf75c0b832fb2dd3747.jpg)

265 VAC  
![](./素材/images/BPA8618P_&_TNY278P对比测试/d5eeac208ca4a3f20753cc1ed6881afbd864ec9b3cd0762b526e4a0d7ff10d77.jpg)  
Test Condition:  
➢ Full Load

## (50%-100%)

![](./素材/images/BPA8618P_&_TNY278P对比测试/0928795a8b5fb7f2644faf088b12c267fc9cc19d94347ce60e076fe7e39494b3.jpg)

85 VAC

CH4 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 2 4 7 m v$  
CH3 ${ \mathsf I } _ { 0 \mathsf U \top }$

## Test Condition:

➢ 0.5 A-1 A-0.5 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8618P_&_TNY278P对比测试/432979042914e244792856b167e7ecd0982bbd0da296a3a2ea4b3c115fe37738.jpg)

85 VAC

CH4 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 2 8 7 ~ \mathsf { m V }$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.5 A-1 A-0.5 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8618P_&_TNY278P对比测试/b12b0513b0715190351deaac52246667e54e3a22cf536f97c155baa94f44e0ff.jpg)

265 VAC

CH4 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { p | c - P K } = 2 2 2 m v$  
CH3 $\mathsf { I } _ { 0 \mathsf { U T } }$

## Test Condition:

➢ 0.5 A-1 A-0.5 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8618P_&_TNY278P对比测试/9da557fe4b6ed39047a3b4b124808b26aba9402f0855fbdab296d0d41ce7ec5a.jpg)

265 VAC

CH4 VOUT $V _ { P K \mathrm { - } P K } = 2 7 2 m v$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.5 A-1 A-0.5 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## (10%-90%)

![](./素材/images/BPA8618P_&_TNY278P对比测试/8fcd6b9004b3dbf0b12deacf1d113c5925b9b8c76e010a2e9f4251ba9370a7b3.jpg)

85 VAC

CH4 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { \mathsf { P K - P K } } { = } 2 8 8 \mathsf { m V }$  
CH3 ${ \mathsf I } _ { 0 \mathsf U \top }$

## Test Condition:

➢ 0.1A-0.9 A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8618P_&_TNY278P对比测试/195484545b576560440898c9a5f84431dc73609a5c7e3bd0ed56743ef88ca97f.jpg)

85 VAC

CH4 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { \mathsf { P K - P K } } { = } 3 6 6 ~ \mathsf { m V }$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.1A-0.9 A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8618P_&_TNY278P对比测试/b1c60fc7472b64422845856e3291107b0a01d6d61f9e853555f0c2b60f625d9f.jpg)

265 VAC

CH4 V $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 2 4 8 m v$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ $0 . 1 \mathsf { A } \mathsf { - } 0 . 9 \mathsf { A } \mathsf { - } 0 . 1 \mathsf { A }$  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8618P_&_TNY278P对比测试/2b5b3d38d079ef4079f04afc1f9a4becfb744c3b0520d5be3f8ab436522a5bfd.jpg)

265 VAC

$\mathsf { C H } 4 \mathsf { V } _ { \mathsf { O U T } }$ $V _ { \mathsf { P K - P K } } { = } 2 9 6 \mathsf { m V }$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.1A-0.9 A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## 输出电压开机波形

![](./素材/images/BPA8618P_&_TNY278P对比测试/df24fa267851bb53d26fa528960a95c0ef63c723003783c2974e65202f75a2ae.jpg)

85 VAC  
![](./素材/images/BPA8618P_&_TNY278P对比测试/5b4cdceb6cadf1c8e12ee4d9c4d4e75299a1db2ddf2ccea96db7e7fc7f770dfd.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8618P_&_TNY278P对比测试/6d2e61773569eed68fc1ee71b131307b35031cc8e514f9c0ea20bbc8ab0e454c.jpg)

85 VAC  
![](./素材/images/BPA8618P_&_TNY278P对比测试/6786fafecf443914bee5cea91394063ca0ab6c9086179d2a999e4068c7ddde6f.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8618P_&_TNY278P对比测试/0ea662defd3d9ad4df6398760992329262c58adfbd076994db339b7f201ca559.jpg)

265 VAC  
![](./素材/images/BPA8618P_&_TNY278P对比测试/c3edea0188ac06a551e525698407bf50691e17b4adbc24f81c85eccbd70a24ea.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8618P_&_TNY278P对比测试/7993ea1accafaf3b9f2d3ff9c6cfadaa57d4c632614002cf669864b87db95b99.jpg)

265 VAC  
![](./素材/images/BPA8618P_&_TNY278P对比测试/56054aeddfc32d44544d1bc8d032e0d15fae6c93478f5574efb3ef2452b6b5b6.jpg)  
Test Condition:  
➢ Full Load

## MOSFET

![](./素材/images/BPA8618P_&_TNY278P对比测试/c9248921ff1c275896894a6d03c7e1ca5c5fc9ba5ad8ce4955a6628fab01ed9e.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 6 8 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 7 1 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618P_&_TNY278P对比测试/361d0bb1e45d80f885604b576159e01328af5c18d7ddc7c42574fd78e1d76b4a.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 6 8 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 6 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618P_&_TNY278P对比测试/22994d7ec356abebfa575bb31af63c9c2245c357d8d5f9f8d76e8e67e035477d.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 5 4 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 8 7 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618P_&_TNY278P对比测试/a2a69b7bba195a6ef35cab6416a94113c194566fc1971c9c0dce41becc044823.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 5 4 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 7 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

## MOSFET

![](./素材/images/BPA8618P_&_TNY278P对比测试/fe23b01ebe3301a122d41665455e7af655624562244d925bfc4e892c7f62602c.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 7 1 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 6 1 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618P_&_TNY278P对比测试/acf9756455ec1e0aa2de60866dc161dcb0587fc5018334f9976f90ca34a96436.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 7 1 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 5 9 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618P_&_TNY278P对比测试/92333a53d7c6c90af496dcb5f97c7624182df2a8eb04f8d559fdce4e45fddf16.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 5 3 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 6 5 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618P_&_TNY278P对比测试/59b23ed4567c5d184a75d84bed3bca3ab052f18490645a93b9b8fba4b81fcd43.jpg)

265 VAC

CH1 VDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 5 4 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 6 7 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

## 输出二极管开机波形

![](./素材/images/BPA8618P_&_TNY278P对比测试/e878b507eba3cbce8b4f570e54ccc97bedeebe57ac77c866c95eff65e3ecc5c1.jpg)

85 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 3 1. 5 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 6. 2 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618P_&_TNY278P对比测试/86466bfad07a33d6c147ce75673f6d73ed575f66f5cde7d37c25dbb5192b065d.jpg)

85 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 3 9. 8 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 6. 1 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618P_&_TNY278P对比测试/26c5f3da57b2b90b30001575cbf77d3a6060715b24e4945547d1f90b2c0f6839.jpg)

265 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 6 7. 2 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 6. 6 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618P_&_TNY278P对比测试/d3f0826b3deda0c109d1e6e80ebac2df5489d91c189194b54ad5b2899472237b.jpg)

265 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 6 8. 8 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 6. 6 8 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

## 输出二极管稳态波形

![](./素材/images/BPA8618P_&_TNY278P对比测试/b59fd46329042ea9e2a3651cef72fe52b79f41bd97b7396b4cfde7ac92c73f27.jpg)

85 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 3 3 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 6. 2 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618P_&_TNY278P对比测试/9713b5381b44520246141bb3503f9288b148f4f028e6242dcff342b369fa2160.jpg)

85 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 4 1. 5 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 6. 0 6 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618P_&_TNY278P对比测试/61c0e2fcff41ca8f2b6b86b10f7f294b860c80b7d3cf182d3bfccee08962258d.jpg)

265 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 6 7. 2 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 6. 6 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618P_&_TNY278P对比测试/a6d93817aaf2a7a2b0a8ff247f3e2559535c02b5e3c764ea11f66e2e60920f51.jpg)

265 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 6 9. 5 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 6. 7 6 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

## MOSFET

BPA8618P  
![](./素材/images/BPA8618P_&_TNY278P对比测试/28d80d227f6c3b63750821e94c8d888a64b6cf2740fb63886c07426bea4af9d7.jpg)

CH1 VO  
CH2 VDS  
CH4 VDC\_IN

$$
V _ {D S \_ M A X} = 6 9 0 \mathrm{V}
$$

$$
V _ {D C I N} = 5 5 0 \mathrm{V}
$$

Test Condition:

➢ Full Load

TNY278P  
![](./素材/images/BPA8618P_&_TNY278P对比测试/93fea8665fb609f422a18457d4fdbe81e006c7db467c9eb684e202824893d00f.jpg)

CH1 VO  
CH2 VDS  
CH4 VDC\_IN

$$
V _ {D S \_ M A X} = 7 5 0 \mathrm{V}
$$

$$
V _ {D C \_ I N} = 5 5 0 \mathrm{V}
$$

Test Condition:

➢ Full Load

BPA8618P  
![](./素材/images/BPA8618P_&_TNY278P对比测试/0eb77bc29071d3e695efe263020f49e262edf41c96c3949e0e28dfc6d90b5de1.jpg)

CH2 VAC\_IN  
CH4 Vo

VAC\_IN\_STARTUP=62 V

Test Condition:

➢ No Load

TNY278P  
![](./素材/images/BPA8618P_&_TNY278P对比测试/a7e3b7ce807bde9638e2854fb3483f18e2f96273fc10e25ddaaa029f44426978.jpg)

CH2 VAC\_IN  
CH4 Vo

VAC\_IN\_STARTUP=73 V

Test Condition:

➢ No Load

备注：TNY278P在FB pin脚上拉一串电阻做UVL，阻值4M；BPA8618P内部集成UVL功能，无需外部电阻

## MOSFET

![](./素材/images/BPA8618P_&_TNY278P对比测试/f8926140fe22ade4b342d709934aa30d6be5fe1f4533cfd12cee6a6be15bd782.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 6 8 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 7 5 \mathrm{A} \end{array}
$$

![](./素材/images/BPA8618P_&_TNY278P对比测试/abe1f846bac9adbc11286a9593d040c4b5d734deb8c2d225575164d1a9772cb8.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 6 8 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 7 7 \mathrm{A} \end{array}
$$

![](./素材/images/BPA8618P_&_TNY278P对比测试/6a807a9cb5f730410d6e63cfe1bd86a2611f2efb6e61f0622a8dfbbd70294a8e.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 5 4 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 1. 0 6 \mathrm{A} \end{array}
$$

![](./素材/images/BPA8618P_&_TNY278P对比测试/48dc8b21f529dbe9692f889d072f56d8e5cfe1a4abb5b90758030b9823342b68.jpg)

265 VAC

CH1 VDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 5 3 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 1. 1 5 \mathrm{A} \end{array}
$$

## 温升测试

BPA8618P

<table><tr><td rowspan="2">项目</td><td>85VAC</td><td>115VAC</td><td>230VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>50</td><td>50</td><td>50</td><td>50</td></tr><tr><td>BP8618P (U2)</td><td>101.48</td><td>91.28</td><td>88.11</td><td>90.03</td></tr><tr><td>变压器绕组(T1)</td><td>80.68</td><td>82.01</td><td>85.16</td><td>86.51</td></tr><tr><td>变压器磁芯(T1)</td><td>80.31</td><td>81.09</td><td>85.72</td><td>87.46</td></tr><tr><td>整流二极管(D3)</td><td>93.2</td><td>92.91</td><td>93.46</td><td>93.84</td></tr><tr><td>整流桥(D1)</td><td>72.08</td><td>66.93</td><td>61.74</td><td>61.4</td></tr><tr><td>输入电解电容(C6)</td><td>73.13</td><td>69.44</td><td>67.55</td><td>68.09</td></tr><tr><td>输出电解电容(C3)</td><td>66.17</td><td>66.11</td><td>66.56</td><td>67.08</td></tr></table>

TNY278P

<table><tr><td rowspan="2">项目</td><td>85VAC</td><td>115VAC</td><td>230VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>50</td><td>50</td><td>50</td><td>50</td></tr><tr><td>TNY278 (U2)</td><td>98.37</td><td>90.75</td><td>89.18</td><td>92.45</td></tr><tr><td>变压器绕组(T1)</td><td>81.64</td><td>81.64</td><td>85.37</td><td>86.87</td></tr><tr><td>变压器磁芯(T1)</td><td>79.24</td><td>80.14</td><td>85.37</td><td>87.29</td></tr><tr><td>整流二极管(D3)</td><td>95.08</td><td>94.72</td><td>95.36</td><td>95.68</td></tr><tr><td>整流桥(D1)</td><td>71.4</td><td>66.2</td><td>60.73</td><td>60.33</td></tr><tr><td>输入电解电容(C6)</td><td>72.83</td><td>69.64</td><td>67.79</td><td>68.68</td></tr><tr><td>输出电解电容(C3)</td><td>66.67</td><td>66.58</td><td>67.1</td><td>67.52</td></tr></table>

备注：增大芯片Source散热铜箔面积可以降低芯片温度

![](./素材/images/BPA8618P_&_TNY278P对比测试/e6466f02c046faf9de534b3106f242c57c0fda9e9b01433658e685f260a85aa2.jpg)

115Vac Line  
![](./素材/images/BPA8618P_&_TNY278P对比测试/27d9fb507495b4c98df90ae965ca2527664e7d927b55b30f5d49e4c0348c8fda.jpg)

230Vac Line

![](./素材/images/BPA8618P_&_TNY278P对比测试/9627fb753f9bc90dd127addce70f9aeaf8704fa292c11559981db57e29bd881e.jpg)

115Vac Neutral

![](./素材/images/BPA8618P_&_TNY278P对比测试/85112b8c8b501f32b310f48b0d633079969248a1280b629cb3d49672fff5c989.jpg)

230Vac Neutral

![](./素材/images/BPA8618P_&_TNY278P对比测试/ff783bc96a8cd432225743e6ea33b4ec79ba43fafb6ce40c3a43408f8b5ae820.jpg)

115Vac Line  
![](./素材/images/BPA8618P_&_TNY278P对比测试/99e0b822d6860b68352288f8c07fc91ea49054f7d9541bf7e7dd25f7762c6598.jpg)

230Vac Line

![](./素材/images/BPA8618P_&_TNY278P对比测试/017708cc364e9fa93ac700255df2460f41eaa00364e165930f89380991b4db5c.jpg)

115Vac Neutral

![](./素材/images/BPA8618P_&_TNY278P对比测试/41dae6d0f439ed3e70cc6d70c2d1821f47e49418171831dc5b8823698cfde91e.jpg)

230Vac Neutral

## Surge

BPA8618P

<table><tr><td>差模</td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>+2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to PE</td><td>+4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>L to PE</td><td>-4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>N to PE</td><td>+4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>N to PE</td><td>-4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr></table>

TNY278P

<table><tr><td>差模</td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>+2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to PE</td><td>+4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>L to PE</td><td>-4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>N to PE</td><td>+4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>N to PE</td><td>-4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr></table>

## EFT

BPA8618P

<table><tr><td>差模</td><td>电压</td><td>脉冲群持续时间</td><td>脉冲频率</td><td>测试时间</td><td>测试结果</td></tr><tr><td>L to N</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr></table>

TNY278P

<table><tr><td>差模</td><td>电压</td><td>脉冲群持续时间</td><td>脉冲频率</td><td>测试时间</td><td>测试结果</td></tr><tr><td>L to N</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr></table>

BPA8618P

<table><tr><td>测试点</td><td>电压(V)</td><td>放电类型</td><td>放电次数</td><td>测试结果</td></tr><tr><td>Vo</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr></table>

TNY278P

<table><tr><td>测试点</td><td>电压(V)</td><td>放电类型</td><td>放电次数</td><td>测试结果</td></tr><tr><td>Vo</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr></table>

## THANK YOU FOR WATCHING
