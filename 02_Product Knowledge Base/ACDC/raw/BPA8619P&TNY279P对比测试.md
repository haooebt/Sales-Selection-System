![](./素材/images/BPA8619P&TNY279P对比测试/443bcb17cabb752f14a9969c9d5e639ce4768ab6d57106c90406653adaee493e.jpg)

## BPA8619P&TNY279P对比测试

## (12V/1.25A@85\~265Vac)

上海晶丰明源半导体股份有限公司

Shanghai Bright Power Semiconductor Co., Ltd.

WHX

时间：2021年6月

## 电气参数对比

<table><tr><td></td><td>BPA8619P</td><td>TNY279P</td></tr><tr><td>开关频率</td><td>132KHz</td><td>132KHz</td></tr><tr><td>Mosfet BV</td><td>700V</td><td>700V</td></tr><tr><td> $R_{DS\_ON}$ </td><td>2.6Ω</td><td>3.9Ω</td></tr><tr><td>限流点</td><td>650mA</td><td>650mA</td></tr><tr><td>软启动</td><td>有</td><td>无</td></tr><tr><td>输入过压保护</td><td>有</td><td>无</td></tr><tr><td>输入欠压保护</td><td>内置</td><td>外加</td></tr><tr><td>输出过压保护</td><td>自动重启</td><td>锁死</td></tr><tr><td>过载保护</td><td>有</td><td>有</td></tr><tr><td>封装</td><td>DIP7, SOP7</td><td>DIP7, SMD8C</td></tr></table>

## 测试数据对比

电源规格：85\~265Vac输入，12V/1.25A输出

<table><tr><td colspan="2"></td><td>BPA8619P</td><td>TNY279P</td><td></td></tr><tr><td colspan="2">待机功耗</td><td>51mW</td><td>69mW</td><td>包含输入电压检测电阻损耗</td></tr><tr><td rowspan="2">效率</td><td>115Vac</td><td>84%</td><td>81.9%</td><td></td></tr><tr><td>230Vac</td><td>84.6%</td><td>83.8%</td><td></td></tr><tr><td rowspan="2">输出电压纹波</td><td>85Vac</td><td>236mV</td><td>236mV</td><td></td></tr><tr><td>265Vac</td><td>202mV</td><td>204mV</td><td></td></tr><tr><td rowspan="2">动态负载性能</td><td>50%-100%</td><td> $240mV_{PK\_PK}$ </td><td> $259mV_{PK\_PK}$ </td><td></td></tr><tr><td>10%-90%</td><td> $287mV_{PK\_PK}$ </td><td> $340mV_{PK\_PK}$ </td><td></td></tr><tr><td rowspan="2">MOSFET应力</td><td> $V_{DS}$ </td><td>530V</td><td>540V</td><td></td></tr><tr><td> $I_{DS}$ </td><td>1.1A</td><td>1.42A</td><td></td></tr><tr><td rowspan="2">二极管应力</td><td>VRR</td><td>67.2V</td><td>69.9V</td><td></td></tr><tr><td> $I_{PK}$ </td><td>7A</td><td>7.16A</td><td></td></tr><tr><td colspan="2">温升测试(环温50°C)</td><td>99.02°C</td><td>98.93°C</td><td></td></tr><tr><td colspan="2">传导EMI</td><td>&gt;6dB裕量</td><td>&gt;6dB裕量</td><td></td></tr><tr><td colspan="2">Surge</td><td>Pass</td><td>Pass</td><td>共模4kV,差模2kV</td></tr><tr><td colspan="2">EFT群脉冲</td><td>Pass</td><td>Pass</td><td>4kV,5kHz/38kHz/100kHz</td></tr><tr><td colspan="2">ESD</td><td>Pass</td><td>Pass</td><td>8kV接触放电/15kV空气放电</td></tr></table>

## 电路及实物图

![](./素材/images/BPA8619P&TNY279P对比测试/7880e265d2bb0394080c931dd58e70870c2bbbf0869658f06401b338fa93f171.jpg)

![](./素材/images/BPA8619P&TNY279P对比测试/78e23a9f02f0b04f08d22738ca10315184cbee79735c8be4397f0e6351c8fd97.jpg)

![](./素材/images/BPA8619P&TNY279P对比测试/e2822d9d7a94f47e89056ac1a4ff88797260cb99c4125cc648b9ce4fd5e2513d.jpg)

![](./素材/images/BPA8619P&TNY279P对比测试/232df048bcc3491ffe81144374137aabcf402879cccd45b8294e613341fba470.jpg)

备注：TNY279P在FB pin脚上拉一串电阻做UVL，阻值4M；BPA8619P内部集成UVL功能，无需外部电阻

效率测试  
![](./素材/images/BPA8619P&TNY279P对比测试/255f15dd2ddeb430de0830872e12a1e582e7eff882ed628495e02dda4be4abee.jpg)

负载

## 输出电压调整率

BPA8619P

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>12.191</td><td>12.191</td><td>12.190</td><td>12.189</td><td>12.188</td><td>12.188</td><td>12.19</td><td>0.02%</td></tr><tr><td>20%</td><td>12.190</td><td>12.190</td><td>12.189</td><td>12.188</td><td>12.188</td><td>12.186</td><td>12.19</td><td>0.03%</td></tr><tr><td>40%</td><td>12.190</td><td>12.189</td><td>12.189</td><td>12.188</td><td>12.186</td><td>12.185</td><td>12.19</td><td>0.04%</td></tr><tr><td>60%</td><td>12.189</td><td>12.188</td><td>12.188</td><td>12.188</td><td>12.186</td><td>12.183</td><td>12.19</td><td>0.05%</td></tr><tr><td>80%</td><td>12.188</td><td>12.186</td><td>12.186</td><td>12.186</td><td>12.185</td><td>12.181</td><td>12.19</td><td>0.06%</td></tr><tr><td>100%</td><td>12.186</td><td>12.186</td><td>12.185</td><td>12.185</td><td>12.184</td><td>12.180</td><td>12.18</td><td>0.05%</td></tr><tr><td>平均值</td><td>12.19</td><td>12.19</td><td>12.19</td><td>12.19</td><td>12.19</td><td>12.18</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>0.04%</td><td>0.04%</td><td>0.04%</td><td>0.03%</td><td>0.03%</td><td>0.07%</td></tr></table>

计算方法：调整率=100%\*(最大值-最小值)/平均值  
测试条件：无假负载

TNY279P

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>12.190</td><td>12.191</td><td>12.195</td><td>12.195</td><td>12.196</td><td>12.196</td><td>12.19</td><td>0.05%</td></tr><tr><td>20%</td><td>12.189</td><td>12.191</td><td>12.194</td><td>12.195</td><td>12.195</td><td>12.196</td><td>12.19</td><td>0.06%</td></tr><tr><td>40%</td><td>12.188</td><td>12.190</td><td>12.193</td><td>12.194</td><td>12.195</td><td>12.195</td><td>12.19</td><td>0.06%</td></tr><tr><td>60%</td><td>12.186</td><td>12.189</td><td>12.191</td><td>12.193</td><td>12.193</td><td>12.195</td><td>12.19</td><td>0.07%</td></tr><tr><td>80%</td><td>12.185</td><td>12.188</td><td>12.191</td><td>12.193</td><td>12.193</td><td>12.193</td><td>12.19</td><td>0.07%</td></tr><tr><td>100%</td><td>12.183</td><td>12.185</td><td>12.188</td><td>12.191</td><td>12.191</td><td>12.192</td><td>12.19</td><td>0.07%</td></tr><tr><td>平均值</td><td>12.19</td><td>12.19</td><td>12.19</td><td>12.19</td><td>12.19</td><td>12.19</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>0.06%</td><td>0.05%</td><td>0.06%</td><td>0.03%</td><td>0.04%</td><td>0.03%</td></tr></table>

## 输出电压纹波

![](./素材/images/BPA8619P&TNY279P对比测试/e771fb9c2526776c9119e6bc847a02327d2a75c3af25cb3c29ac54d5c114950e.jpg)

85 VAC  
![](./素材/images/BPA8619P&TNY279P对比测试/61b8da270e523cbeab17a23f507ae3f94ef4d0cced05cdf6f3f4eac606e953fd.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8619P&TNY279P对比测试/cd59d585477835178d28fa60ecfc94bf8c612f131cfbdc38f50ff941a13590df.jpg)

85 VAC  
![](./素材/images/BPA8619P&TNY279P对比测试/2d7c1f9601a5392ee30b409eb841f19b07845aaeab585d74959e0e9167838578.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8619P&TNY279P对比测试/f84a60d1ecad8a0c56919d9113d05208b26200ea0ee5154bcafee15d86bec2ac.jpg)

265 VAC  
![](./素材/images/BPA8619P&TNY279P对比测试/a223ab3151dedce8eac4995062c441e8ff30bcfa7667d9e8b57c13beedde8775.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8619P&TNY279P对比测试/505434a70bfc004a6fb18635fb1e7a437d03e1e673daa9d7852c1300277eaef4.jpg)

265 VAC  
![](./素材/images/BPA8619P&TNY279P对比测试/59fb3e80349f3c15516713d3722c15d8ca840eb2221786165f2e52d520c4d6b6.jpg)  
Test Condition:  
➢ Full Load

## (50%-100%)

![](./素材/images/BPA8619P&TNY279P对比测试/4411a675360d488794ba7c88dee1b8337a9f3b4a2f862d4206f70c6363fe24f7.jpg)  
85 VAC

CH4 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 2 4 0 m v$  
CH3 IOUT $\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.625 A-1.25 A-0.625 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8619P&TNY279P对比测试/8efc8004ea3746ecf16e1dc3147649d7d40e5687892d148ea353f4379d12a254.jpg)

85 VAC

CH4 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 2 5 9 m v$  
CH3 IOUT $\mathsf { C H 3 } \mathsf { I } _ { 0 \mathsf { U T } }$

## Test Condition:

➢ 0.625 A-1.25 A-0.625 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8619P&TNY279P对比测试/a509a941bbf85822e2c36f2fbff1788fac1588727d62cc21933c6cb9a41420dc.jpg)

265 VAC

CH4 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { \mathsf { P K - P K } } = 2 0 3 ~ \mathsf { m V }$  
CH3 IOUT $\mathsf { I } _ { 0 \mathsf { U T } }$

## Test Condition:

➢ 0.625 A-1.25 A-0.625 A  
➢ Slew Rate: 0.5 $\mathsf { A } / \mu \mathsf { S }$  
➢ Frequency: 100 Hz

![](./素材/images/BPA8619P&TNY279P对比测试/0efd1654b4e22c3d6c52c3af2a935797305df91752efba776d3f596e528cb728.jpg)

265 $\mathsf { v } _ { \mathsf { A C } }$

CH4 $\mathsf { V } _ { \mathsf { O U T } }$ $v _ { p _ { k - P K } } = 2 4 7 m v$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.625 A-1.25 A-0.625 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## (10%-90%)

![](./素材/images/BPA8619P&TNY279P对比测试/530382b46f954f30bf64f2645620bcb72e99f9a8f57237009c03f915d82f1b7c.jpg)

85 VAC

CH4 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 2 8 7 ~ \mathsf { m V }$  
CH3 IOUT $\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.125A-1.125 A-0.125 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8619P&TNY279P对比测试/4e3014068ac91c6a2555769dfa458db9393834d134608292aec6f27eec14d863.jpg)

85 VAC

CH4 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { \mathsf { P K - P K } } { = } 3 4 0 ~ \mathsf { m V }$  
CH3 IOUT $\mathsf { C H 3 } \mathsf { I } _ { 0 \mathsf { U T } }$

## Test Condition:

➢ 0.125A-1.125 A-0.125 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8619P&TNY279P对比测试/701ee6b6684f7061471baf28b6c40e1df1d1eaaa9798adb00c216d9ee918eb7f.jpg)

265 VAC

CH4 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 2 4 3 ~ \mathsf { m V }$  
CH3 IOUT $\mathsf { I } _ { 0 \mathsf { U T } }$

## Test Condition:

➢ 0.125A-1.125 A-0.125 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8619P&TNY279P对比测试/321accb28c1b6e1be428ff8fcd82d64abfebd1984fa773487da2a23ef20c5a11.jpg)

265 $\mathsf { v } _ { \mathsf { A C } }$

CH4 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 2 6 8 m v$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.125A-1.125 A-0.125 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## 输出电压开机波形

![](./素材/images/BPA8619P&TNY279P对比测试/4c206e4684de0c180ed66cde236b4e413df58680a9e80b62a7ae16f8b56a9ee3.jpg)

85 VAC  
![](./素材/images/BPA8619P&TNY279P对比测试/f7970aa5ee0435f088a60c5397ff24c8efc6d2427f64199a4fa093be4a45bab4.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8619P&TNY279P对比测试/d4d1a45337b5d78a479bc983f9d204c844047aefec336cb4613b09e3eedaeace.jpg)

85 VAC  
![](./素材/images/BPA8619P&TNY279P对比测试/54d0f3ac861f8fb02ac9becc59a0ad75542d8efe9c68fba6cba762e0ba6205cc.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8619P&TNY279P对比测试/d1771f2987983e8b595fc790338749dfaed3d5e57092de7e4e4073b4e1afb6f2.jpg)

265 VAC  
![](./素材/images/BPA8619P&TNY279P对比测试/74b8f739fe1b7fb5850f0e397924be933ab11b7c8329ea2f58c08f332740416d.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8619P&TNY279P对比测试/b8f333b62d0a408a7a38cbf42da3d63ea3872c28e032f0e980757a41929bd7cd.jpg)

265 VAC  
![](./素材/images/BPA8619P&TNY279P对比测试/411e5df2db5579fd290097ad38a8870a72c2c1232e08125035cb50374fd96f1b.jpg)  
Test Condition:  
➢ Full Load

## MOSFET

![](./素材/images/BPA8619P&TNY279P对比测试/dfb20920e1b0f2e90580fd4526c0bae75434c9b875d6e7e236b179f3ae10e3c5.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 7 2 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 7 8 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8619P&TNY279P对比测试/7b16c8b3932b1a3466e60e9023954241164bb78ca3d4b4eab0283e425728a06b.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 7 2 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 8 4 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8619P&TNY279P对比测试/486b9df315cfe73a5e8c49135c777d6819e78d9c3ec3ff6e8afbeb157c74dca4.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 5 3 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 9 1 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8619P&TNY279P对比测试/1d9f6fca002a250ebc367f2ade077027b936f0aefec3ef91ebc51111868dd40c.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 5 3 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 8 7 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

## MOSFET

![](./素材/images/BPA8619P&TNY279P对比测试/754eda33a928661d6c52fad29e671391f09eefdcc4062dab1c0da088362e26d6.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 7 1 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 6 7 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8619P&TNY279P对比测试/c432717a8406585ad94e02bfd325b4bb1da6b993fd59761ba61b5cd6673346df.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 7 2 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 6 9 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8619P&TNY279P对比测试/f6c1271e35f2fd26e93b52713fb762d607fe052ba89fd30e27aa14fa475d6e18.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
V _ {D S \_ M A X} = 5 3 0 V
$$

$$
I _ {D S \_ M A X} = 0. 7 1 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8619P&TNY279P对比测试/8228230dd0442a1814edcd70815a0ce0f64f46df1cfb86b53255234ec2d50022.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
V _ {D S \_ M A X} = 5 3 0 V
$$

$$
I _ {D S \_ M A X} = 0. 7 8 \mathrm{A}
$$

## Test Condition:

➢ Full Load

## 输出二极管开机波形

![](./素材/images/BPA8619P&TNY279P对比测试/d7170af6eed441168c1a9c6a31264b1202a627c783e4b51a46673d4e9faa81aa.jpg)

85 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 3 1. 1 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 6. 8 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8619P&TNY279P对比测试/975c8b7830c6bc4c9760316a882b648277a72e6468fe27ed0a6bd6cdff19288a.jpg)

85 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 3 6 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 6. 9 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8619P&TNY279P对比测试/776c50c82c0737ea3ec336f7d3bcecfc17a1d6f658e788bf88bcaf88ade2bfa2.jpg)

265 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 6 7. 2 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 7 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8619P&TNY279P对比测试/c381089622a4d1f90efe74f48456a83f0e998b28e2041478f18003f4361b27e9.jpg)

265 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 6 9. 9 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 7. 1 6 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

## 输出二极管稳态波形

![](./素材/images/BPA8619P&TNY279P对比测试/a53e0f43db14ab652a1b8d7886abf42664944df729bbcc005e564d0f2dad31c1.jpg)

85 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 3 1. 6 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 6. 5 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8619P&TNY279P对比测试/b5ec3948b696b4757acc492c295c4066b59cff9a7220d5e2daa3f238eb3a3b71.jpg)

85 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 3 6. 8 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 7 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8619P&TNY279P对比测试/515524f21cf28fd169d4d8cc76a93a91b5ff2e0e4caec98ee4849d8a64dce291.jpg)

265 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 6 7. 3 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 6. 9 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8619P&TNY279P对比测试/578a6b8149a7d84d71c90d2f4d64f2eb1d67b89853ddc031209f56e58abde30c.jpg)

265 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 6 9. 5 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 6. 7 6 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

## MOSFET

BPA8619P  
![](./素材/images/BPA8619P&TNY279P对比测试/5ca79099b5e8190137239432a375dce106c6b24b6f76b05da370a5e86130bec6.jpg)

CH1 VDS  
CH2 VDC\_IN  
CH4 VO

$$
V _ {D S \_ M A X} = 6 8 0 \mathrm{V}
$$

$$
V _ {D C I N} = 5 5 0 \mathrm{V}
$$

Test Condition:

➢ Full Load

TNY279P  
![](./素材/images/BPA8619P&TNY279P对比测试/b908166d01c3abeffaefa9dde27f7e493b7cc127dd1ae26aea65d10e4399a596.jpg)

CH1 VDS  
CH2 VDC\_IN  
CH4 VO

$$
V _ {D S \_ M A X} = 7 1 0 \mathrm{V}
$$

$$
V _ {D C \_ I N} = 5 5 0 \mathrm{V}
$$

Test Condition:

➢ Full Load

BPA8619P  
![](./素材/images/BPA8619P&TNY279P对比测试/33ed4da03e3e0564941cab660333914ecea66d43d6127dc43fb75a902448c812.jpg)

CH1 VAC\_IN  
CH4 Vo

VAC\_IN\_STARTUP=65 V

Test Condition:

➢ No Load

TNY279P  
![](./素材/images/BPA8619P&TNY279P对比测试/3a5ec3d2fc46d8f29212b57f2f9a6f83dd49bd2557f565e078a098e1a7695907.jpg)

CH1 VAC\_IN  
CH4 Vo

VAC\_IN\_STARTUP=74 V

Test Condition:

➢ No Load

备注：TNY279P在FB pin脚上拉一串电阻做UVL，阻值4M；BPA8619P内部集成UVL功能，无需外部电阻

## MOSFET

![](./素材/images/BPA8619P&TNY279P对比测试/75969f08033458f3c8c69558dadedfbea7d646c4d1789048e52607aff9a89440.jpg)

85 VAC

${ \mathsf { C H 1 } } \mathsf { V _ { D S } }$  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 6 8 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 7 9 \mathrm{A} \end{array}
$$

![](./素材/images/BPA8619P&TNY279P对比测试/9c38141eaa513cb2ba08f844ae01ee05fa3f2850769975aa87dd4714c293c876.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 7 2 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 9 2 \mathrm{A} \end{array}
$$

![](./素材/images/BPA8619P&TNY279P对比测试/c05fb04ff6e38fbe1ea86151803e75e10c3bbedf03e20e7f947cb475d5b6aa0c.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
V _ {D S \_ M A X} = 5 3 0 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 1. 1 \mathrm{A}
$$

![](./素材/images/BPA8619P&TNY279P对比测试/7152ebf051dced60c8288a3cb7b2a3fd99fd9db0fde0a5c1e4404ca909905c9f.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
V _ {D S \_ M A X} = 5 4 0 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 1. 4 2 \mathrm{A}
$$

## 温升测试

BPA8619P

<table><tr><td rowspan="2">项目</td><td>85VAC</td><td>115VAC</td><td>230VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>50</td><td>50</td><td>50</td><td>50</td></tr><tr><td>BP8619P (U2)</td><td>98.96</td><td>91.77</td><td>93.69</td><td>99.02</td></tr><tr><td>变压器绕组(T1)</td><td>77.54</td><td>77.28</td><td>80.37</td><td>82.04</td></tr><tr><td>变压器磁芯(T1)</td><td>72.56</td><td>72.83</td><td>76.14</td><td>77.71</td></tr><tr><td>整流二极管(D3)</td><td>96.85</td><td>96.5</td><td>97.6</td><td>98.37</td></tr><tr><td>整流桥(D1)</td><td>72.85</td><td>67.16</td><td>61.75</td><td>61.23</td></tr><tr><td>输入电解电容(C6)</td><td>72.22</td><td>68.71</td><td>67.4</td><td>68.54</td></tr><tr><td>输出电解电容(C3)</td><td>65.86</td><td>65.71</td><td>66.43</td><td>66.99</td></tr></table>

TNY279P

<table><tr><td rowspan="2">项目</td><td>85VAC</td><td>115VAC</td><td>230VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>50</td><td>50</td><td>50</td><td>50</td></tr><tr><td>TNY279 (U2)</td><td>98.93</td><td>90.86</td><td>89.6</td><td>91.42</td></tr><tr><td>变压器绕组(T1)</td><td>77.92</td><td>77.48</td><td>80.43</td><td>81.6</td></tr><tr><td>变压器磁芯(T1)</td><td>75.94</td><td>76.15</td><td>79.95</td><td>81.3</td></tr><tr><td>整流二极管(D3)</td><td>96.92</td><td>96.44</td><td>97.61</td><td>98.23</td></tr><tr><td>整流桥(D1)</td><td>72.06</td><td>66.34</td><td>60.23</td><td>59.64</td></tr><tr><td>输入电解电容(C6)</td><td>72.71</td><td>68.65</td><td>66.25</td><td>66.52</td></tr><tr><td>输出电解电容(C3)</td><td>67.82</td><td>67.47</td><td>68.3</td><td>68.7</td></tr></table>

备注：增大芯片Source散热铜箔面积可以降低芯片温度

![](./素材/images/BPA8619P&TNY279P对比测试/c020bb974b20fcb0801241a7128f63b961ec99dffcd4d4fef0076d29002d3b26.jpg)

115Vac Line

![](./素材/images/BPA8619P&TNY279P对比测试/2d3dc13fb600ae36c9dd6e4ecfd0f0e32bb8ade98b89513aef921f00a59586f9.jpg)

230Vac Line

![](./素材/images/BPA8619P&TNY279P对比测试/e36047d2244cbbd119d4fb15f01900b3069456eed1d1349594b31f12c5f1c070.jpg)

115Vac Neutral

![](./素材/images/BPA8619P&TNY279P对比测试/2939ef2520cfb38795ef622486f8157e7a88d68c9839d76114fc9ce564bc2dd5.jpg)

230Vac Neutral

![](./素材/images/BPA8619P&TNY279P对比测试/a46483116fc130f59cbb3904c25a3214159a9be71a46fe9322ee189a03f4566c.jpg)

115Vac Line  
![](./素材/images/BPA8619P&TNY279P对比测试/daddf9611b959fb19f8d8345dd6f5b8bde3af516201f5ce8e87532a05fddff0d.jpg)

230Vac Line

![](./素材/images/BPA8619P&TNY279P对比测试/8a94ca472f100173f3c61808b98b9d69de695c354ada31d7610f895105dbe76a.jpg)

115Vac Neutral

![](./素材/images/BPA8619P&TNY279P对比测试/fdc4251fa367e7ecdfd90ba215d9c7cdf608965d0865f224dbc8add6b2d69e3f.jpg)

230Vac Neutral

## Surge

BPA8619P

<table><tr><td>差模</td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>+2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to PE</td><td>+4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>L to PE</td><td>-4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>N to PE</td><td>+4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>N to PE</td><td>-4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr></table>

TNY279P

<table><tr><td>差模</td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>+2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to PE</td><td>+4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>L to PE</td><td>-4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>N to PE</td><td>+4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>N to PE</td><td>-4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr></table>

## EFT

BPA8619P

<table><tr><td>差模</td><td>电压</td><td>脉冲群持续时间</td><td>脉冲频率</td><td>测试时间</td><td>测试结果</td></tr><tr><td>L to N</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr></table>

TNY279P

<table><tr><td>差模</td><td>电压</td><td>脉冲群持续时间</td><td>脉冲频率</td><td>测试时间</td><td>测试结果</td></tr><tr><td>L to N</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr></table>

BPA8619P

<table><tr><td>测试点</td><td>电压(V)</td><td>放电类型</td><td>放电次数</td><td>测试结果</td></tr><tr><td>Vo</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr></table>

TNY279P

<table><tr><td>测试点</td><td>电压(V)</td><td>放电类型</td><td>放电次数</td><td>测试结果</td></tr><tr><td>Vo</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr></table>

## THANK YOU FOR WATCHING
