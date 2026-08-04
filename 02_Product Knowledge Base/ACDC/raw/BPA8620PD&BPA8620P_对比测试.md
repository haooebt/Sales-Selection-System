## BPA8620PD&BPA8620P对比测试

## (12V/1.5A@85\~265Vac)

时间：2023年9月

![](./素材/images/BPA8620PD&BPA8620P_对比测试/3caed995cfadd1a006c130db62e5f30bc914979edc3376853c606ea243572971.jpg)

## 电气参数对比

<table><tr><td></td><td>BPA8620PD</td><td>BPA8620P</td></tr><tr><td>开关频率</td><td colspan="2">132KHz</td></tr><tr><td>Mosfet BV</td><td>750V</td><td>700V</td></tr><tr><td> $R_{DS\_ON}$ </td><td colspan="2">2.5Ω</td></tr><tr><td>限流点</td><td colspan="2">750mA</td></tr><tr><td>软启动</td><td colspan="2">有</td></tr><tr><td>输入过压保护</td><td colspan="2">有</td></tr><tr><td>输入欠压保护</td><td colspan="2">内置</td></tr><tr><td>输出过压保护</td><td colspan="2">自动重启</td></tr><tr><td>过载保护</td><td colspan="2">有</td></tr><tr><td>封装</td><td colspan="2">DIP7</td></tr></table>

备注：对比BPA8620P，BPA8620PD除了BVdss高50V以外，其他参数全部保持一致，因此BPA8620PD可完美兼容BPA8620P。

## 测试数据对比

电源规格：85\~265Vac输入，12V/1.5A输出

<table><tr><td></td><td></td><td>BPA8620PD</td><td>BPA8620P</td><td></td></tr><tr><td colspan="2">待机功耗(@230Vac)</td><td>49mW</td><td>48mW</td><td>辅助供电</td></tr><tr><td rowspan="2">效率(满载)</td><td>115Vac</td><td>84.6%</td><td>84.7%</td><td></td></tr><tr><td>230Vac</td><td>85.3%</td><td>85.1%</td><td></td></tr><tr><td rowspan="2">输出电压纹波</td><td>85Vac</td><td>236mV</td><td>255mV</td><td></td></tr><tr><td>265Vac</td><td>230mV</td><td>224mV</td><td></td></tr><tr><td rowspan="2">动态负载性能</td><td>50%-100%</td><td> $295mV_{PK\_PK}$ </td><td> $260mV_{PK\_PK}$ </td><td></td></tr><tr><td>10%-90%</td><td> $343mV_{PK\_PK}$ </td><td> $314mV_{PK\_PK}$ </td><td></td></tr><tr><td rowspan="2">MOSFET应力</td><td> $V_{DS}$ </td><td>550V</td><td>550V</td><td></td></tr><tr><td> $I_{DS}$ </td><td>1.14A</td><td>1.25A</td><td></td></tr><tr><td rowspan="2">二极管应力</td><td>VRR</td><td>68V</td><td>67.2V</td><td></td></tr><tr><td> $I_{PK}$ </td><td>9A</td><td>8.8A</td><td></td></tr><tr><td colspan="2">温升测试(环温50°C)</td><td>107.8°C</td><td>110.7°C</td><td></td></tr><tr><td colspan="2">传导EMI</td><td>&gt;6dB裕量</td><td>&gt;6dB裕量</td><td></td></tr><tr><td colspan="2">Surge</td><td>Pass</td><td>Pass</td><td>共模4kV,差模2kV</td></tr><tr><td colspan="2">EFT群脉冲</td><td>Pass</td><td>Pass</td><td>4kV,5kHz/38kHz/100kHz</td></tr><tr><td colspan="2">ESD</td><td>Pass</td><td>Pass</td><td>8kV接触放电/15kV空气放电</td></tr></table>

## 电路及实物图

![](./素材/images/BPA8620PD&BPA8620P_对比测试/53e0f6ca6f383662a0f914225e6ca4d2eca06b856c5dc80eb9ff516b8c4746d5.jpg)

![](./素材/images/BPA8620PD&BPA8620P_对比测试/bc427ff4b21994a5f259d19ade116646a47c48268eba15816218c53914095eff.jpg)

![](./素材/images/BPA8620PD&BPA8620P_对比测试/5211c5c23f05e8a6420478d7248ed143b1b0588e209c1e3bb75ff29f4ecebeff.jpg)

空载功耗  
![](./素材/images/BPA8620PD&BPA8620P_对比测试/ce694b1bb8eda2617c44b4bbda0f5a2794443b9858c411cc0b71617db0985a68.jpg)

输入电压

效率测试  
![](./素材/images/BPA8620PD&BPA8620P_对比测试/06b1cb9c034f04f55af8d670c0ef861f9d2a6666a2277335a68ce3063a099644.jpg)

负载

BPA8620P

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.17</td><td>12.176</td><td>0.06%</td></tr><tr><td>20%</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.17</td><td>12.17</td><td>12.174</td><td>0.05%</td></tr><tr><td>40%</td><td>12.18</td><td>12.18</td><td>12.17</td><td>12.17</td><td>12.17</td><td>12.17</td><td>12.173</td><td>0.06%</td></tr><tr><td>60%</td><td>12.17</td><td>12.17</td><td>12.17</td><td>12.17</td><td>12.17</td><td>12.17</td><td>12.171</td><td>0.06%</td></tr><tr><td>80%</td><td>12.17</td><td>12.17</td><td>12.17</td><td>12.17</td><td>12.17</td><td>12.16</td><td>12.168</td><td>0.05%</td></tr><tr><td>100%</td><td>12.17</td><td>12.17</td><td>12.17</td><td>12.17</td><td>12.16</td><td>12.16</td><td>12.166</td><td>0.07%</td></tr><tr><td>平均值</td><td>12.174</td><td>12.173</td><td>12.173</td><td>12.171</td><td>12.170</td><td>12.167</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>0.07%</td><td>0.08%</td><td>0.08%</td><td>0.08%</td><td>0.09%</td><td>0.09%</td></tr></table>

BPA8620PD

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.181</td><td>0.01%</td></tr><tr><td>20%</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.179</td><td>0.01%</td></tr><tr><td>40%</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.178</td><td>0.01%</td></tr><tr><td>60%</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.176</td><td>0.02%</td></tr><tr><td>80%</td><td>12.17</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.18</td><td>12.174</td><td>0.03%</td></tr><tr><td>100%</td><td>12.17</td><td>12.17</td><td>12.17</td><td>12.17</td><td>12.17</td><td>12.17</td><td>12.171</td><td>0.01%</td></tr><tr><td>平均值</td><td>12.176</td><td>12.177</td><td>12.177</td><td>12.177</td><td>12.177</td><td>12.177</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>0.09%</td><td>0.07%</td><td>0.08%</td><td>0.08%</td><td>0.07%</td><td>0.08%</td></tr></table>

 计算方法：调整率=100%\*(最大值-最小值)/平均值  
测试条件：无假负载

## 输出电压纹波

![](./素材/images/BPA8620PD&BPA8620P_对比测试/98b957f0b01d06996aaf26aa1719132da6580bfd1dd843d63d9ffd8fad82b79f.jpg)

$8 5 \mathsf { V } _ { \mathsf { A C } }$  
CH4 $\mathsf { V } _ { \mathrm { O U T } } \mathsf { R i p p l e }$ $V _ { P K - P K } = 2 5 5 m v$  
Test Condition:  Full Load

![](./素材/images/BPA8620PD&BPA8620P_对比测试/879cbfd79d2e5c14a53cc796caa3701fa605cbc749f9ab6bfe56a949699c89f4.jpg)

$8 5 V _ { \mathsf { A C } }$  
CH1 $\mathsf { V } _ { \mathrm { O U T } } \mathsf { R i p p l e }$ $V _ { P K - P K } = 2 3 6 m v$  
Test Condition:  Full Load

![](./素材/images/BPA8620PD&BPA8620P_对比测试/6f1e46e7ef73088cc1030bf0aa8fbb8454aaa56239c002f9e82848f6985b65c7.jpg)

265 $\mathsf { V } _ { \mathsf { A C } }$  
$\mathsf { C H 4 \ ` _ { O U T } \mathsf { R i p p l e } }$  
Test Condition:  Full Load

![](./素材/images/BPA8620PD&BPA8620P_对比测试/b2187da0f37731b4439e56a0356c4e5044740910bc2251a984bfe84353c9b5fa.jpg)

$2 6 5 \mathsf { V } _ { \mathsf { A C } }$  
CH1 $\mathsf { V } _ { \mathrm { O U T } } \mathsf { R i p p l e }$ $V _ { P K - P K } = 2 3 0 m v$  
Test Condition:  Full Load

## 动态负载(50%-100%)

![](./素材/images/BPA8620PD&BPA8620P_对比测试/c36e39fafe1dbe753ee44d720745631a9fe1985f7c44273c496b41e14c45dcba.jpg)

85 $\mathsf { V } _ { \mathsf { A C } }$

CH4 $\mathsf { V } _ { \mathrm { O U T } }$ $V _ { P K - P K } = 2 6 0 ~ \mathrm { m V }$  
CH3 IOUT $\mathsf { I } _ { \mathrm { O U T } }$

## Test Condition:

 $0 . 7 5 { \mathsf { A } } - 1 . 5 { \mathsf { A } } - 0 . 7 5 { \mathsf { A } }$  
 Slew Rate: $0 . 5 \mathsf { A } / \mu \mathsf { S }$  
 Frequency: 100 Hz

![](./素材/images/BPA8620PD&BPA8620P_对比测试/ad3223a9f879f74dff507b63c6e521803d12687ebdc17d29e9724a6443a4a7ba.jpg)

85 $\mathsf { V } _ { \mathsf { A C } }$

$\mathsf { C H 1 } \mathsf { V } _ { \mathrm { O U I } }$ $v _ { P K - P K } = 2 9 5 m v$  
CH4 IOUT $\mathsf { C H 4 } \mathsf { I _ { O U T } }$

## Test Condition:

 $0 . 7 5 { \mathsf { A } } - 1 . 5 { \mathsf { A } } - 0 . 7 5 { \mathsf { A } }$  
 $\mathsf { S l e w R a t e } \colon 0 . 5 \mathsf { A } / \mu \mathsf { S }$  
 Frequency: $1 0 0 \ H z$

![](./素材/images/BPA8620PD&BPA8620P_对比测试/10de1c8d0e87dccd67bbeca814f44112579ec95ec86ad7256f43ea29c664b69a.jpg)

265 $\mathsf { V } _ { \mathsf { A C } }$

$\mathsf { C H 4 \vee _ { \mathrm { { O U T } } } }$ $V _ { P K - P K } = 2 2 9 m V$  
$C H 3 \mid _ { \mathrm { O U T } }$

## Test Condition:

 $0 . 7 5 { \mathsf { A } } - 1 . 5 { \mathsf { A } } - 0 . 7 5 { \mathsf { A } }$  
 Slew Rate: 0.5 A/μS  
 Frequency: 100 Hz

![](./素材/images/BPA8620PD&BPA8620P_对比测试/aff8b69d0cb3e2ecc5387758114a5afa72d71f9dda95006072a20c3be68aa6de.jpg)

265 $\mathsf { V } _ { \mathsf { A C } }$

$\mathsf { C H 1 } \mathsf { V } _ { \mathrm { O U T } }$ $V _ { P K - P K } = 2 6 7 ~ \mathsf { m V }$  
$C H 4 \mid _ { \mathrm { O U T } }$

## Test Condition:

 $0 . 7 5 { \mathsf { A } } - 1 . 5 { \mathsf { A } } - 0 . 7 5 { \mathsf { A } }$  
 Slew Rate: 0.5 A/μS  
 Frequency: $1 0 0 \ H z$

## 动态负载(10%-90%)

![](./素材/images/BPA8620PD&BPA8620P_对比测试/2b90951c967dd773c05fa28688dd33530c42f4e5ba7dd1cc0e898f9476ea8b5e.jpg)

85 VAC

CH4 $\mathsf { V } _ { \mathrm { O U T } }$ $\mathsf { V } _ { \mathsf { P K - P K } } { = } 3 1 4 \mathsf { m V }$  
CH3 IOUT $\mathsf { I } _ { \mathrm { O U T } }$

## Test Condition:

 0.15A-1.35A-0.15A  
 Slew Rate: 0.5 A/μS  
 Frequency: 100 Hz

![](./素材/images/BPA8620PD&BPA8620P_对比测试/d6df99a14905f8a4ee36b91ca5386c1f5b158b122eb607039eac91a527558679.jpg)

85 VAC

CH1 $\mathsf { V } _ { \mathrm { O U } }$ $V _ { P K - P K } = 3 4 3 ~ \mathsf { m V }$  
CH4 IOUT $\mathsf { I } _ { \mathrm { O U T } }$

## Test Condition:

 0.15A-1.35A-0.15A  
 Slew Rate: 0.5 A/μS  
 Frequency: 100 Hz

![](./素材/images/BPA8620PD&BPA8620P_对比测试/6219898b780ba73d53eeca62b905ca73699a30eb661875af8e82b391e3812a96.jpg)

265 VAC

CH4 $\mathsf { V } _ { \mathrm { O U T } }$ $V _ { P K - P K } { = } 2 7 5 ~ \mathrm { m V }$  
CH3 $\mathsf { I } _ { \mathrm { O U T } }$

## Test Condition:

 $0 . 1 5 { \mathsf { A } } - 1 . 3 5 { \mathsf { A } } - 0 . 1 5 { \mathsf { A } }$  
 Slew Rate: 0.5 A/μS  
 Frequency: 100 Hz

![](./素材/images/BPA8620PD&BPA8620P_对比测试/f9493d6a6b067699a5fd4e5d0c54112c4f126fa76ee5f516cc089b7de67edc06.jpg)

265 $\mathsf { V } _ { \mathsf { A C } }$

CH1 $\mathsf { V } _ { \mathrm { O U T } }$ $V _ { P K - P K } = 3 1 5 m v$  
CH4 $\mathsf { I } _ { \mathrm { O U T } }$

## Test Condition:

 $0 . 1 5 { \mathsf { A } } - 1 . 3 5 { \mathsf { A } } - 0 . 1 5 { \mathsf { A } }$  
 Slew Rate: 0.5 A/μS  
 Frequency: $1 0 0 \ H z$

## 输出电压开机波形

![](./素材/images/BPA8620PD&BPA8620P_对比测试/56fc897ae7caade7de3f4ace0fdc71921e1a57869d41ea206657fdb8519e33fd.jpg)

85 VAC  
![](./素材/images/BPA8620PD&BPA8620P_对比测试/17fb955cb553ad7f9b0836113a114ebb26ed7e7396a543f0b96ffd249d38717f.jpg)  
Test Condition:  
 Full Load

![](./素材/images/BPA8620PD&BPA8620P_对比测试/d549460033a48ed3c984f144cef2b3bc15e6f5f32740a4fb26221a6f10e5a61b.jpg)

85 VAC  
![](./素材/images/BPA8620PD&BPA8620P_对比测试/411db54d3bf3250166c9d883d617f02ed69acc99cc0ee5bd9b834e93acf263ce.jpg)  
Test Condition:  
 Full Load

![](./素材/images/BPA8620PD&BPA8620P_对比测试/47dd3f4c1ad523f7e0d0434414020f6469ca2be4a3e44ff6f6e4d09fb4112569.jpg)

265 VAC  
![](./素材/images/BPA8620PD&BPA8620P_对比测试/d79cb1c863a84e227942ebbe001f433de2639f6efb6b2ec4a76fa7f6a52bc964.jpg)  
Test Condition:  
 Full Load

![](./素材/images/BPA8620PD&BPA8620P_对比测试/a3b46ff38fc5ce7ec17ccb8e5d094f7498c4ddcb74d2d6fcbb2e99feeb4564c3.jpg)

265 VAC  
![](./素材/images/BPA8620PD&BPA8620P_对比测试/b5e0a2433ce5502ba7432b80ee75a3693a5152c22e9f19fdb61a036d45e2054d.jpg)  
Test Condition:  
 Full Load

## MOSFET开机波形

![](./素材/images/BPA8620PD&BPA8620P_对比测试/98c991b5458342f9917a66506cbb1cf88a4f1f0a8c48b86f50678c522f54f5ae.jpg)

85 VAC

CH1 VDS  
CH3 IDS

![](./素材/images/BPA8620PD&BPA8620P_对比测试/a1f092a6098cd4a19a8e389277ec61ed7dd178b0cbf5bdf84d646e7f19a53f91.jpg)  
Test Condition:

 Full Load

![](./素材/images/BPA8620PD&BPA8620P_对比测试/65bd94ff3ca85dade74b963d9d54ce5e1216b761bee40aa74e9fb58bd61ad870.jpg)

85 VAC

CH3 VDS  
CH4 IDS

![](./素材/images/BPA8620PD&BPA8620P_对比测试/3e882308f327cafa4fac7d990c92f1a3f6c074abcf725a16c358cdb2f27af0d2.jpg)  
Test Condition:

 Full Load

![](./素材/images/BPA8620PD&BPA8620P_对比测试/e9448cb4fcd9dfb58a2acca923573c5ae99d1ccfd456e3f7f6e285115310d204.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
V _ {D S \_ M A X} = 5 5 0 V
$$

$$
I _ {D S \_ M A X} = 1. 0 5 A
$$

Test Condition:

 Full Load

![](./素材/images/BPA8620PD&BPA8620P_对比测试/cd6731057c50754cdfc29e4bce518ee88c223b045980a1617d1569c5c508051f.jpg)

265 VAC

CH3 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 5 4 9 V
$$

$$
I _ {D S \_ M A X} = 0. 9 6 \mathrm{A}
$$

Test Condition:

 Full Load

## MOSFET稳态波形

![](./素材/images/BPA8620PD&BPA8620P_对比测试/f2b0a97ec0fc86c4c56cfda24655253e3fea11416375787ff97d4f921e26b62e.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
V _ {D S \_ M A X} = 2 8 2 V
$$

$$
I _ {D S \_ M A X} = 0. 8 2 \mathrm{A}
$$

Test Condition:

 Full Load

![](./素材/images/BPA8620PD&BPA8620P_对比测试/2e4fa3bf22da7455109fa0a7166365e59d40a433aef1e754527de6746f17f252.jpg)

85 VAC

CH3 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 2 8 0 V
$$

$$
I _ {D S \_ M A X} = 0. 7 5 A
$$

Test Condition:

 Full Load

![](./素材/images/BPA8620PD&BPA8620P_对比测试/fe92c50a901e0713cb596b92c90f2f27062b21b12b4aefeb1b84a11d852c626b.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
V _ {D S \_ M A X} = 5 5 0 V
$$

$$
I _ {D S \_ M A X} = 0. 8 7 \mathrm{A}
$$

Test Condition:

 Full Load

![](./素材/images/BPA8620PD&BPA8620P_对比测试/5fbd245eae8bd50a24ea9b511b6c94dde1d494d9f7d0929b0d6a5e49fa20f70a.jpg)

265 VAC

CH3 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 5 4 0 V
$$

$$
I _ {D S M A X} = 0. 8 \mathrm{A}
$$

Test Condition:

 Full Load

## 输出二极管开机波形

![](./素材/images/BPA8620PD&BPA8620P_对比测试/885d1d2ae2396db0f786741c005732736bbd39a3d80bee52148716d94eef1b5a.jpg)

85 VAC

CH2 VR  
CH3 IF

$$
V _ {R \_ M A X} = 3 2. 6 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 8. 8 \mathrm{A}
$$

Test Condition:  
 Full Load  
![](./素材/images/BPA8620PD&BPA8620P_对比测试/e2a2d38abec751ca6587b2372f119106791b2ecd1969ccad1cbcd4e5cffe4538.jpg)

85 VAC

CH3 VR  
CH4 IF

$$
V _ {R \_ M A X} = 3 1. 5 V
$$

$$
I _ {F \text { MAX }} = 8. 8 \mathrm{A}
$$

Test Condition:  
 Full Load  
![](./素材/images/BPA8620PD&BPA8620P_对比测试/dc69079946daa9f53ea34e46f1639523776decd0c90baaa7c35c267359b34cd0.jpg)

265 VAC

CH2 VR  
CH3 IF

$$
V _ {R \_ M A X} = 6 7. 2 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 8. 8 \mathrm{A}
$$

Test Condition:  
 Full Load  
![](./素材/images/BPA8620PD&BPA8620P_对比测试/df476dc6313927e265c31a5331c937237c458e3539cfb34df572a9817968ac56.jpg)

265 VAC

CH3 VR  
CH4 IF

$$
V _ {R \_ M A X} = 6 8 \mathrm{V}
$$

$$
I _ {F M A X} = 9 \mathrm{A}
$$

Test Condition:

 Full Load

## 输出二极管稳态波形

![](./素材/images/BPA8620PD&BPA8620P_对比测试/c79de13add35a7a0d841b15aa4c81f5042859198b94f230c2bebbb2deda9f3fa.jpg)

85 VAC

CH2 VR  
CH3 IF

$$
V _ {R \_ M A X} = 3 4. 1 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 8. 4 \mathrm{A}
$$

Test Condition:

 Full Load

![](./素材/images/BPA8620PD&BPA8620P_对比测试/5f6d8ea2fd582a0f3b037e13054f093952910b8b04753e859e7348c5f6aae649.jpg)

85 VAC

CH3 VR  
CH4 IF

$$
V _ {R \_ M A X} = 3 1. 2 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 8. 4 \mathrm{A}
$$

Test Condition:

 Full Load

![](./素材/images/BPA8620PD&BPA8620P_对比测试/e0fdcf8cb69369f27869ce63d4e6753ecfdfebf867659c17a4e79459b21333bd.jpg)

265 VAC

CH2 VR  
CH3 IF

$$
V _ {R \_ M A X} = 6 7. 3 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 8. 8 \mathrm{A}
$$

Test Condition:

 Full Load

![](./素材/images/BPA8620PD&BPA8620P_对比测试/248aadca9785972c8615cd91a23d4f45b849a15bd65fc5b84a75a3a6e4c988d4.jpg)

265 VAC

CH3 VR  
CH4 IF

$$
V _ {R \_ M A X} = 6 5. 5 \mathrm{V}
$$

$$
I _ {F M A X} = 8. 9 \mathrm{A}
$$

Test Condition:

 Full Load

BPA8620P  
![](./素材/images/BPA8620PD&BPA8620P_对比测试/5b3c71b46aa24d6fb36845aea4b65a1d1f1c365d647d7bf88bf1a18e1a5869f9.jpg)

CH1 VDS  
CH2 VDC\_IN  
CH4 VO

Test Condition:

 Full Load

$$
\begin{array}{l} V _ {I N \_ O V P} = 5 0 0 V D C \\ V _ {D R A I N S \_ O V} = 5 9 7 V \end{array}
$$

BPA8620PD  
![](./素材/images/BPA8620PD&BPA8620P_对比测试/bea6026eaf33ec7e1f024e5bdddf620d484af11ff30f581004830f2ad144c926.jpg)

CH1 VDC\_IN  
CH2 VOUT  
CH3 VDS  
CH4 IDS

Test Condition:

 Full Load

$$
\begin{array}{l} V _ {I N \_ O V P} = 4 9 5 V D C \\ V _ {D R A I N S \_ O V} = 5 9 5 V \end{array}
$$

BPA8620P  
![](./素材/images/BPA8620PD&BPA8620P_对比测试/84d1bf6dc71971c7dfce0d2cf3d6539e6395f945d80ca8e7c3007a4896e50304.jpg)

CH3 VDC\_IN  
CH4 Vo

$$
\mathrm{Vin} _ {\mathrm {DC\_STARTUP}} = 8 7 \mathrm{V}
$$

Test Condition:

 No Load

BPA8620PD  
![](./素材/images/BPA8620PD&BPA8620P_对比测试/727a79af80c3784f8a4fd4280231d7562f4262cb4f9ef7d647005962f9a9c1b4.jpg)

CH3 VDC\_IN  
CH4 Vo

$$
\mathrm{Vin} _ {\mathrm {DC\_ {S} ARTUP}} = 8 6 \mathrm{V}
$$

Test Condition:

 No Load

## 输出短路保护 （MOSFET波形）

![](./素材/images/BPA8620PD&BPA8620P_对比测试/331f7725f5a13b9754fd21bf02043cb9728a8571b8fda09d85123a9f6aacdcb9.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
V _ {D S \_ M A X} = 2 8 4 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 0. 8 9 \mathrm{A}
$$

![](./素材/images/BPA8620PD&BPA8620P_对比测试/448980cc251b34aa2070aa615e9808f24c9350c4ff4138eaec7b04e7efad68cd.jpg)

85 VAC

CH3 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 2 8 1 V
$$

$$
I _ {D S \_ M A X} = 0. 8 4 \mathrm{A}
$$

![](./素材/images/BPA8620PD&BPA8620P_对比测试/8e3452d3d9f54b4602a9c3595662a01667a55756523eb45049cb879c2bfc7464.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
V _ {D S \_ M A X} = 5 5 0 \mathrm{V}
$$

$$
I _ {D S M A X} = 1. 2 5 \mathrm{A}
$$

![](./素材/images/BPA8620PD&BPA8620P_对比测试/a97d46c818b4538721bfb82b7f0018fdaf116a7e2e6ba5945ecdc8eb54b99f94.jpg)

265 VAC

CH3 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 5 4 8 V
$$

$$
I _ {D S M A X} = 1. 1 4 \mathrm{A}
$$

BPA8620P

<table><tr><td rowspan="2">项目</td><td>85VAC</td><td>115VAC</td><td>230VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>50</td><td>50</td><td>50</td><td>50</td></tr><tr><td>BP8620P (U2)</td><td>108.16</td><td>95.99</td><td>100.65</td><td>110.72</td></tr><tr><td>变压器绕组(T1)</td><td>78.65</td><td>78.78</td><td>82.64</td><td>84.34</td></tr><tr><td>变压器磁芯(T1)</td><td>74.08</td><td>74.8</td><td>79.2</td><td>80.92</td></tr><tr><td>整流二极管(D3)</td><td>104.63</td><td>104.16</td><td>104.98</td><td>105.53</td></tr><tr><td>整流桥(D1)</td><td>80.98</td><td>73.11</td><td>65.6</td><td>65.22</td></tr><tr><td>输入电解电容(C6)</td><td>75.1</td><td>71.34</td><td>70.34</td><td>71.34</td></tr><tr><td>输出电解电容(C3)</td><td>68.86</td><td>68.69</td><td>69.39</td><td>69.9</td></tr></table>

BPA8620PD

<table><tr><td rowspan="2">项目</td><td>85VAC</td><td>115VAC</td><td>230VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>51.1</td><td>51.3</td><td>51.1</td><td>51.1</td></tr><tr><td>BP8620PD (U2)</td><td>107.8</td><td>101.8</td><td>101.8</td><td>104.9</td></tr><tr><td>变压器绕组(T1)</td><td>74.5</td><td>74.1</td><td>74.7</td><td>75.4</td></tr><tr><td>变压器磁芯(T1)</td><td>69.4</td><td>69.8</td><td>71.8</td><td>72.9</td></tr><tr><td>整流二极管(D3)</td><td>103.4</td><td>103.5</td><td>104.0</td><td>104.4</td></tr><tr><td>整流桥(D1)</td><td>81.4</td><td>74.3</td><td>66.4</td><td>65.5</td></tr><tr><td>输入电解电容(C6)</td><td>75.4</td><td>71.3</td><td>70.1</td><td>71.8</td></tr><tr><td>输出电解电容(C3)</td><td>69.2</td><td>68.9</td><td>68.4</td><td>69.0</td></tr></table>

备注：增大芯片Source散热铜箔面积可以降低芯片温度

![](./素材/images/BPA8620PD&BPA8620P_对比测试/0443228e3b3787191dfc29ac7df41e669cfa1fd457db8979c908133fc4578412.jpg)

115Vac Line

![](./素材/images/BPA8620PD&BPA8620P_对比测试/ab775935037e2fac8557e90436f5e21afed108999f8f00864ea5eb73c9134be2.jpg)

115Vac Neutral

![](./素材/images/BPA8620PD&BPA8620P_对比测试/4cb28a03a3225386c6f4823a534c8d1b0abaf1011d18c578ed2baee74132f849.jpg)

230Vac Line

![](./素材/images/BPA8620PD&BPA8620P_对比测试/c7f81e9e0156c87e57448a79b4c9943e46fde4eb5387eb8dee5eece776b417c8.jpg)

230Vac Neutral

![](./素材/images/BPA8620PD&BPA8620P_对比测试/d7e4e0ee809d326ea99684ef34588c9f0ba0063dc2604ca0fcb73657ab4953ce.jpg)

115Vac Line

![](./素材/images/BPA8620PD&BPA8620P_对比测试/fe0fd8e0307dd3395ce6079e58ed47ad48d6f4324382a88a34c3775481397636.jpg)

230Vac Line

![](./素材/images/BPA8620PD&BPA8620P_对比测试/74ead85efb541288a13bbcf113b731d222184712a9a39e38610d8b11bfefb73b.jpg)

115Vac Neutral

![](./素材/images/BPA8620PD&BPA8620P_对比测试/196f2583f6c38ae2829533585fd98d0ac6c96f23ce6193eaba0c8ab06d0f8f2b.jpg)

230Vac Neutral

BPA8620P

<table><tr><td>差模/共模</td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>+2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to PE</td><td>+4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>L to PE</td><td>-4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>N to PE</td><td>+4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>N to PE</td><td>-4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr></table>

BPA8620PD

<table><tr><td>差模/共模</td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>+2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to PE</td><td>+4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>L to PE</td><td>-4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>N to PE</td><td>+4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>N to PE</td><td>-4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr></table>

## EFT 群脉冲测试

BPA8620P

<table><tr><td>共模</td><td>电压</td><td>脉冲群持续时间</td><td>脉冲频率</td><td>测试时间</td><td>测试结果</td></tr><tr><td>L/N to PE</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L/N to PE</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L/N to PE</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L/N to PE</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L/N to PE</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L/N to PE</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L/N to PE</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L/N to PE</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr></table>

BPA8620PD

<table><tr><td>共模</td><td>电压</td><td>脉冲群持续时间</td><td>脉冲频率</td><td>测试时间</td><td>测试结果</td></tr><tr><td>L/N to PE</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L/N to PE</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L/N to PE</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L/N to PE</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L/N to PE</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L/N to PE</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L/N to PE</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L/N to PE</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr></table>

BPA8620P

<table><tr><td>测试点</td><td>电压(V)</td><td>放电类型</td><td>放电次数</td><td>测试结果</td></tr><tr><td>Vo</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr></table>

BPA8620PD

<table><tr><td>测试点</td><td>电压(V)</td><td>放电类型</td><td>放电次数</td><td>测试结果</td></tr><tr><td>Vo</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr></table>

## THANK YOU FOR WATCHING
