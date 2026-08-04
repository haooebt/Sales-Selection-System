![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/c7d4f40c2d80fac0bf81a72709e4d07a8e14106b1bf30afbd259b8fcba98bd34.jpg)

## TNY176D& BPA8616D comparison report (5V/0.3A 12V0.35A)

上海晶丰明源半导体股份有限公司

Shanghai Bright Power Semiconductor Co., Ltd.

Yaobing.Chen

Date 2022.9.21

Comparison  
Test data comparison  
Picture  
Performance test data  
Testing summary

<table><tr><td></td><td>BPA8616D</td><td>TNY176D</td></tr><tr><td>Frequency</td><td>132KHz</td><td>132KHz</td></tr><tr><td>Mosfet BV</td><td>700V</td><td>700V</td></tr><tr><td> $R_{DS\_ON}$ </td><td>11Ω</td><td>14Ω</td></tr><tr><td>Current Limit</td><td>350mA</td><td>350mA</td></tr><tr><td>Soft start</td><td>Yes</td><td>No</td></tr><tr><td>Input UVP</td><td>Yes (Built-in)</td><td>Yes (Need External Resistance)</td></tr><tr><td>Output Overload Protect</td><td>Yes</td><td>Yes</td></tr><tr><td>Output Short-circuit Protect</td><td>Yes</td><td>Yes</td></tr><tr><td>OTP</td><td>Yes</td><td>Yes</td></tr><tr><td>Package</td><td>SOP7</td><td>SOP7</td></tr></table>

Specification: Input 85\~132Vac， Output 5V/0.3A 12V/0.35A

<table><tr><td colspan="2"></td><td>BPA8616D</td><td>TNY176D</td><td></td></tr><tr><td colspan="2">Standby power consumption</td><td>390mW</td><td>368mW</td><td>115VAC</td></tr><tr><td colspan="2">Efficiency</td><td>74.7%</td><td>74%</td><td>115VAC,Full load</td></tr><tr><td rowspan="2">Output Ripple Voltage</td><td>85Vac</td><td>5V-132mV/12V-272mV</td><td>5V-100mV/12V-228mV</td><td>Full load</td></tr><tr><td>132Vac</td><td>5V-96mV/12V-220mV</td><td>5V-86mV/12V-220mV</td><td>Full load</td></tr><tr><td rowspan="2">Load Transient Response(5V)</td><td>50%-100%</td><td> $156mV_{PK\_PK}$ </td><td> $108mV_{PK\_PK}$ </td><td>85VAC, 12V-0.35A</td></tr><tr><td>10%-90%</td><td> $280mV_{PK\_PK}$ </td><td> $1720mV_{PK\_PK}$ </td><td>85VAC, 12V-0.35A</td></tr><tr><td rowspan="2">MOSFET Drain Voltage and Current</td><td> $V_{DS}$ </td><td>324V</td><td>332V</td><td>132VAC, start-up</td></tr><tr><td> $I_{DS}$ </td><td>0.46A</td><td>0.54A</td><td>132VAC, start-up</td></tr><tr><td>Diode Voltage (5V)</td><td>VRR</td><td>18.6V</td><td>21.9V</td><td>132VAC, start-up</td></tr><tr><td>Diode Voltage (12V)</td><td>VRR</td><td>50V</td><td>56V</td><td>132VAC, start-up</td></tr><tr><td colspan="2">Temperature Rise</td><td>67.6°C (ambient 39.3°C)</td><td>67.6°C (ambient 39.1°C)</td><td>85VACBPA8616D: 5V-0.3A, 12V-0.35ATNY176D: 5V-0.3A, 12V-0.25A</td></tr><tr><td colspan="2">Conducted EMI</td><td>Margin&gt;6dB</td><td>Margin&gt;6dB</td><td>115VAC, 5V-0.3A, 12V-0.35A</td></tr></table>

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/f8076fea34a2b7bd17cf785e3aefee4cbb06104756cfedc3daba2bc24011649e.jpg)

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/39d8f8025ff5cd44e4c4eeeae267bb6c43fbb263e8c8d39279c10cb725c88140.jpg)

Standby Power consumption  
![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/9bdc4b51492e872117ac47d0251d863ecafd3bbc73619cf243d06e0c3c19e4f6.jpg)

Input Voltage(Vac)  
◼ Load on board not disconnected

Efficiency Curve  
![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/bc0ad52ed522979b8ed17572baa81bbce0e9848a57520d36f00b6f77dd1525ef.jpg)

◼ Load on board not disconnected

## Output voltage regulation

BPA8616D

<table><tr><td> $V_{OUT}(V)$  $I_{OUT}(A)$ </td><td></td><td>5V</td><td>12V</td></tr><tr><td rowspan="3"> $I_{O\_5V}=0A$  $I_{O\_12V}=0A$ </td><td>85VAC</td><td>5.0062</td><td>12.745</td></tr><tr><td>115VAC</td><td>5.0062</td><td>12.794</td></tr><tr><td>132VAC</td><td>5.0062</td><td>12.813</td></tr><tr><td rowspan="3"> $I_{O\_5V}=0.3A$  $I_{O\_12V}=0A$ </td><td>85VAC</td><td>5.0017</td><td>15.186</td></tr><tr><td>115VAC</td><td>5.0017</td><td>15.219</td></tr><tr><td>132VAC</td><td>5.0017</td><td>15.243</td></tr><tr><td rowspan="3"> $I_{O\_5V}=0A$  $I_{O\_12V}=0.35A$ </td><td>85VAC</td><td>5.0062</td><td>11.222</td></tr><tr><td>115VAC</td><td>5.0062</td><td>11.259</td></tr><tr><td>132VAC</td><td>5.0061</td><td>11.218</td></tr><tr><td rowspan="3"> $I_{O\_5V}=0.3A$  $I_{O\_12V}=0.35A$ </td><td>85VAC</td><td>5.0022</td><td>12.651</td></tr><tr><td>115VAC</td><td>5.0023</td><td>12.657</td></tr><tr><td>132VAC</td><td>5.0022</td><td>12.661</td></tr></table>

◼ Calculation method：regulation=100%\*(Max-Min)/Avg  
◼ Test condition： Load on board not disconnected

TNY176D

<table><tr><td> $V_{OUT}(V)$  $I_{OUT}(A)$ </td><td></td><td>5V</td><td>12V</td></tr><tr><td rowspan="3"> $I_{O\_5V}=0A$  $I_{O\_12V}=0A$ </td><td>85VAC</td><td>5.0072</td><td>12.86</td></tr><tr><td>115VAC</td><td>5.0072</td><td>12.901</td></tr><tr><td>132VAC</td><td>5.0072</td><td>12.93</td></tr><tr><td rowspan="3"> $I_{O\_5V}=0.3A$  $I_{O\_12V}=0A$ </td><td>85VAC</td><td>5.0029</td><td>14.874</td></tr><tr><td>115VAC</td><td>5.0028</td><td>14.94</td></tr><tr><td>132VAC</td><td>5.0027</td><td>14.941</td></tr><tr><td rowspan="3"> $I_{O\_5V}=0A$  $I_{O\_12V}=0.35A$ </td><td>85VAC</td><td>5.0072</td><td>11.192</td></tr><tr><td>115VAC</td><td>5.0073</td><td>11.186</td></tr><tr><td>132VAC</td><td>5.0073</td><td>11.185</td></tr><tr><td rowspan="3"> $I_{O\_5V}=0.3A$  $I_{O\_12V}=0.35A$ </td><td>85VAC</td><td>5.0032</td><td>12.755</td></tr><tr><td>115VAC</td><td>5.0032</td><td>12.757</td></tr><tr><td>132VAC</td><td>5.0032</td><td>12.764</td></tr></table>

BPA8616D

<table><tr><td>Input Voltage</td><td>85VAC</td><td>115VAC</td><td>132VAC</td></tr><tr><td>OLP (5V)</td><td>0.6A</td><td>0.7A</td><td>0.8A</td></tr></table>

Load of 12V is 0.35A

TNY176D

<table><tr><td>Input Voltage</td><td>85VAC</td><td>115VAC</td><td>132VAC</td></tr><tr><td>OLP (5V)</td><td>1A</td><td>1.2A</td><td>1.4A</td></tr></table>

Load of 12V is 0.35A

## Output Ripple

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/8049c25ce02c6f1044387990c334cc0a1138c6d842f88933eebc9293efe5e631.jpg)

85 VAC

CH1 $5 \mathsf { V } _ { \mathsf { O U T } }$ $\mathsf { R i p p } | \mathsf { e }$ $V _ { P K - P K \_ 5 \vee } = 1 3 2 \mathsf { m V }$  
CH2 12VOUT $1 2 \mathsf { V } _ { \mathsf { o u r } }$ Ripple $V _ { P K - P K \_ 1 2 V } = 2 7 2 m v$

Test Condition:  
➢ Full Load  
![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/999a301250da41c2af6f84c3152f232403730a814813a4f82dc3939a7a85221f.jpg)

85 VAC

CH1 $5 \mathsf { V } _ { \mathsf { O U T } }$ Ripple $V _ { \mathsf { P K - P K \_ 5 V } } { = } 1 0 0 \mathsf { m V }$  
CH2 $1 2 \mathsf { V } _ { \mathsf { O U T } }$ Ripple $V _ { P K - P K \_ 1 2 V } = 2 2 8 \mathsf { m V }$

Test Condition:  
➢ Full Load  
![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/de5927a0f596c6c9648ed779acdd2043ca0fdd2ed00ea9c033decb242deb51a9.jpg)

132 VAC

CH1 $5 \mathsf { V } _ { \mathsf { O U T } }$ Ripple $V _ { P K - P K \_ 5 V } = 9 6 m V$  
CH2 $1 2 \mathsf { V } _ { \mathsf { o u r } } \mathsf { R i p p l e }$ $V _ { P K - P K \_ 1 2 V } = 2 2 0 \_ m V$

Test Condition:  
➢ Full Load  
![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/d14c708c7a25e5974f922ee79348006bc5ff464e81a255eb49fdba444fa8a853.jpg)

132 VAC

CH1 $5 \mathsf { V } _ { \mathsf { o u r } }$ Ripple $V _ { P K - P K \_ 5 \vee } = 8 6 \mathsf { m v }$  
CH2 $1 2 \mathsf { V } _ { \mathsf { o u r } }$ Ripple $V _ { P K - P K \_ 1 2 V } = 2 2 0 \_ w$

Test Condition:

➢ Full Load

## 5V Dynamic Load Response(50%-100%)

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/e46e9d3fc25e0f41afe5eb728f7e35b2800f05ba94fdcb897a1e28754ba5c367.jpg)

85 VAC

CH1 $5 \mathsf { V } _ { \mathsf { o u r } }$ Ripple VPK-PK\_5V=156mV $V _ { \mathsf { P K - P K \_ 5 V } } { = } 1 5 6 \mathsf { m V }$  
CH2 $1 2 \mathsf { V } _ { \mathsf { o u r } }$ RippleVPK-PK\_12V=600mV V

## Test Condition:

➢ $\mathsf { S V } { : 0 . 1 5 \mathsf { A } { - 0 . 3 \mathsf { A } { - 0 . 1 5 \mathsf { A } } } }$  
➢ 12V:0.35A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/6f674c02464e0e12127c44e0ea9b720b65548c97bf7cb5d49a85237aa8fb785b.jpg)

85 VAC

CH1 $5 \mathsf { V } _ { \mathsf { o u r } }$ $\mathsf { R i p p l e }$  
C $\cdot \mathsf { H } 2 \ 1 2 \mathsf { V } _ { \mathsf { O U T } }$ Ripple

$$
V _ {P K - P K \_ 5 V} = 1 0 8 m V
$$

$$
V _ {P K - P K \_ 1 2 V} = 5 4 4 m V
$$

## Test Condition:

➢ $5 \mathsf { V } { : 0 . 1 5 \mathsf { A } { - 0 . 3 \mathsf { A } { - 0 . 1 5 \mathsf { A } } } }$  
➢ 12V:0.35A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/ca9a5ef8ebaafeb21222970f40889b37fac40101a6e5818bb3d4a593ad142d64.jpg)

132 VAC

CH1 $5 \mathsf { V } _ { \mathsf { o u r } }$ Ripple VPK-PK\_5V=120mV $V _ { P K - P K \_ 5 V }$  
CH2 12VOUT $1 2 \mathsf { V } _ { \mathsf { o U T } }$ Ripple $V _ { P K - P K \_ 1 2 V } = 5 6 8 \mathsf { m V }$

## Test Condition:

➢ 5V:0.15A-0.3A-0.15 A  
➢ 12V:0.35A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/10b4ef6e3eb764ec6b66ad30a9468de063058666b54b05c70fd9b423154f4307.jpg)

132 VAC

CH1 $5 \mathsf { V } _ { \mathsf { O U T } }$ Ripple $V _ { P K - P K \_ 5 V } { = } 6 0 9 m V$  
CH2 12VOUT $1 2 \mathsf { V } _ { \mathsf { o u r } }$ Ripple $\mathsf { V } _ { \mathsf { P K - P K \_ 1 2 V } } { = } 1 4 7 0 \mathsf { m V }$

## Test Condition:

➢ 5V:0.15A-0.3A-0.15 A  
➢ $1 2 \mathsf { V } . 0 . 3 5 \mathsf { A }$  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## 12V Dynamic Load Response(50%-100%)

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/ce206ee7cc3da8d86b9a57e2ed1eda33d99e48046d870cb6be786862c5eb5683.jpg)

85 VAC

CH1 $5 \mathsf { V } _ { \mathsf { o u r } }$ Ripple VPK-PK\_5V=160mV $V _ { P K \mathrm { - } P K \_ 5 V } = 1 6 0 m v$  
CH2 12VOUT $\bar { 1 2 } \mathsf { V } _ { \mathsf { o u r } } \mathsf { R i p p l e }$ $V _ { P K - P K \_ 1 2 V } = 6 4 0 m v$

## Test Condition:

➢ 5V:0.3 A  
➢ 12V: 0.175A-0.35A-0.175 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/eeaed8037b5952593a34face485dc9eb950aa388844272eca1c4ad92763fa533.jpg)

85 VAC

CH1 $5 \mathsf { V } _ { \mathsf { o u } }$ Ripple VPK-PK\_5V=112mV $V _ { P K - P K } \mathsf { \Pi } _ { 5 \mathsf { V } } \mathsf { \bar { = } } \mathsf { 1 } \mathsf { 1 } 2 \mathsf { m } \mathsf { v }$  
CH2 12VOUT $\mathsf { C H } 2 \mathsf { 1 } 2 \mathsf { V } _ { \mathsf { 0 } \mathsf { U } \mathsf { T } }$ Ripple $V _ { P K - P K \_ 1 2 V } = 5 4 0 m v$

## Test Condition:

➢ $5 \mathsf { V } { : } 0 . 3 \mathsf { A }$  
➢ $\begin{array} { r l } & { 1 2 \mathsf { V } \colon 0 . 1 7 5 \mathsf { A } – 0 . 3 5 \mathsf { A } – } \\ & { 0 . 1 7 5 \mathsf { A } } \end{array}$  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/215b21f4ad395d0d1411ac31bbb5255261992cb1abb7d3d768fe5e717a7e2d49.jpg)

132 VAC

CH1 $5 \mathsf { V } _ { \mathsf { o u r } }$ Ripple VPK-PK\_5V=144mV $V _ { p \ k \mathrm { - } P K \_ 5 \vee } = 1 4 4 \mathrm { { m v } }$  
CH2 12VOUT $1 2 \mathsf { V } _ { \mathsf { o U T } }$ RippleVPK-PK\_12V=610mV

## Test Condition:

➢ 5V:0.3 A  
➢ 12V: 0.175A-0.35A-0.175 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/38a528fa74dbd2dbf8bf1c8463ae6c8d3d5aa970bacd285e1e7927db3e630c15.jpg)

132 VAC

CH1 $5 \mathsf { V } _ { \mathsf { o u r } }$ Ripple VPK-PK\_5V=116mV $V _ { P K - P K \_ 5 V } = 1 1 6 m v$  
CH2 $1 2 \mathsf { V } _ { \mathsf { O U T } }$ RippleVPK-PK\_12V=580mV

## Test Condition:

➢ $5 \mathsf { V } { : } 0 . 3 \mathsf { A }$  
➢ $\begin{array} { r l } & { 1 2 \mathsf { V } \colon 0 . 1 7 5 \mathsf { A } – 0 . 3 5 \mathsf { A } – } \\ & { 0 . 1 7 5 \mathsf { A } } \end{array}$  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## 5V Dynamic Load Response(10%-90%)

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/08dee172fcb9de4d5b6245785dfe3c609babb22bac699d6ac985307e52a4e433.jpg)

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/ed00bb0c27adb3e75d2a72fdce107f92dfc7c502f8a603b0d707cc1f8e447846.jpg)

CH1 $5 \mathsf { V } _ { \mathsf { o u r } }$ Ripple VPK-PK\_5V=280mV $V _ { p \vert \mathsf { X } \mathsf { - P K } \_ { 5 } \mathsf { v } } \mathsf { = } 2 8 0 \mathsf { m v }$  
CH2 $1 2 \mathsf { V } _ { \mathsf { o u r } }$ Ripple$\mathsf { V } _ { \mathsf { P K - P K \_ 1 2 V } } \mathsf { = } \mathsf { 1 } \mathsf { 1 0 0 m V }$ VPK-PK\_12V=1100mV

## Test Condition:

➢ $\mathsf { S V } { : 0 . 0 3 \mathsf { A } { - 0 . 2 7 \mathsf { A } { - 0 . 0 3 \mathsf { A } } } }$  
➢ 12V:0.35A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/5849de50b23a9754d1b09a48aae0aaf73bdf324c53fef9da8d56d233ecd6e393.jpg)

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/41d02fa7814daecc91e867db7e207963797282116b22ad4736964ddab72664c6.jpg)

CH1 $5 \mathsf { V } _ { \mathsf { o u r } }$ Ripple VPK-PK\_5V=1720mV $\mathsf { V } _ { \mathsf { P K - P K \_ 5 V } } { = } 1 7 2 0 \mathsf { m V }$

CH2 12V $\mathsf { C H } 2 \mathsf { 1 } 2 \mathsf { V } _ { \mathsf { O U T } }$ Ripple$\mathsf { V } _ { \mathsf { P K - P K \_ 1 2 V } } { = } 3 6 8 0 \mathsf { m V }$ VPK-PK\_12V=3680mV

## Test Condition:

➢ $\mathsf { S V } { : 0 . 0 3 \mathsf { A } { - 0 . 2 7 \mathsf { A } { - 0 . 0 3 \mathsf { A } } } }$  
➢ $1 2 \mathsf { V } . 0 . 3 5 \mathsf { A }$  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/b79f3d159435259da309bc3cca20410f5e52b3cda697e78638921486ac653d73.jpg)

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/f801835652b090e2442d1c731d2bdc86679e138042a5e930a21944a8696c801a.jpg)

CH1 $5 \mathsf { V } _ { \mathsf { o u r } }$ Ripple VPK-PK\_5V=280mV $V _ { p \vert k - P K \_ 5 \vee } = 2 8 0 \mathsf { m v }$  
CH2 $1 2 \mathsf { V } _ { \mathsf { o U T } }$ Ripple $\mathsf { V } _ { \mathsf { P K - P K \_ 1 2 V } } \mathsf { = } \mathsf { 1 } \mathsf { 1 } 2 0 \mathsf { m V }$

## Test Condition:

➢ $\mathsf { S V } { : 0 . 0 3 \mathsf { A } { - 0 . 2 7 \mathsf { A } { - 0 . 0 3 \mathsf { A } } } }$  
➢ 12V:0.35A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/5f4678f63039ac4f510c771f308234ed3a096546a1a9b4ab6113b02b099966d5.jpg)

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/74448c9a716ca55668fa47349d9f9e11a4881a8e6e9e4d2ee790f138622c0ca7.jpg)

CH1 $5 \mathsf { V } _ { \mathsf { O U T } }$ Ripple $V _ { P K \mathrm { - } P K \_ 5 \vee } = 5 0 0 \mathrm { m V }$  
CH2 12V $1 2 \mathsf { V } _ { \mathsf { o u r } }$ Ripple $V _ { p | \mathrm { K - P K } \_ 1 2 \mathrm { V } } = 1 4 0 0 \mathrm { m V }$

## Test Condition:

➢ $\mathsf { S V } { : 0 . 0 3 \mathsf { A } { - 0 . 2 7 \mathsf { A } { - 0 . 0 3 \mathsf { A } } } }$  
➢ $1 2 \mathsf { V } . 0 . 3 5 \mathsf { A }$  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## 12V Dynamic Load Response(10%-90%)

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/3abea3c87e838a293b271c0594d3735126685b14fe71dc7421da6276907b23ad.jpg)

85 VAC

CH1 $5 \mathsf { V } _ { \mathsf { o u r } }$ Ripple VPK-PK\_5V=184mV $V _ { p \ k \mathrm { - } P K \_ 5 V } = 1 8 4 m v$  
CH2 $1 2 \mathsf { V } _ { \mathsf { o U T } }$ Ripple $V _ { P K - P K \_ 1 2 V } =$ 1120mV

## Test Condition:

➢ 5V:0.3A  
➢ 12V: 0.03A-0.27A-0.03A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/c1729e39afec77a6a87b7b3abcc092bd4d8c5f77fdf7298f91121576a50842a5.jpg)

85 VAC

CH1 $5 \mathsf { V } _ { \mathsf { o u r } }$ Ripple VPK-PK\_5V=164mV $V _ { p \vert k - P K \_ 5 \vee } = 1 6 4 \mathsf { m v }$  
CH2 12VOUT $\mathsf { C H } 2 \mathsf { 1 } 2 \mathsf { V } _ { \mathsf { 0 } \mathsf { U } \mathsf { T } }$ Ripple $v _ { p \kappa \mathrm { - } P \kappa \_ 1 2 V } \overline { { = } } 1 0 6 0 \mathsf { m v }$

## Test Condition:

➢ 5V:0.3A  
➢ 12V: 0.03A-0.27A-0.03A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/450464fae006fb9782e2e1e33e7f3a697611ffb1254bf26e60f320106907cbab.jpg)

132 VAC

CH1 $5 \mathsf { V } _ { \mathsf { o u r } }$ Ripple VPK-PK\_5V=176mV $V _ { P K - P K \_ 5 V }$  
CH2 $1 2 \mathsf { V } _ { \mathsf { o U I } }$ Ripple $v _ { p \kappa - P \ l k \_ 1 2 \vee 2 } =$ 1100mV

## Test Condition:

➢ 5V:0.3A  
➢ 12V: 0.03A-0.27A-0.03A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/e13c1a77337dc7df4c6bc62e531b9a9c12917c849a79e9501162c2c435b71a13.jpg)

132 VAC

CH1 $5 \mathsf { V } _ { \mathsf { O U T } }$ Ripple VPK-PK\_5V=168mV $V _ { P K - P K \_ 5 V } = 1 6 8 m v$  
CH2 $1 2 \mathsf { V } _ { \mathsf { O U T } }$ RippleVPK-PK\_12V=1060mV

## Test Condition:

➢ 5V:0.3A  
➢ 12V: 0.03A-0.27A-0.03A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## Output Voltage Start-up Profile

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/ff8856c59a9ba36f16095df73708b117613ccd01876b0cacdcb92817c96456bf.jpg)

85 VAC

$\begin{array} { r } { \mathsf { C H 1 V _ { 0 \cup \mathsf { T } \_ 5 \vee } } } \\ { \mathsf { t } _ { \mathrm { r i s e } } = 9 . 9 ~ \mathsf { m S } } \end{array}$ CH1 VOUT\_5V  
$\begin{array} { l l } { { \mathsf { C H 2 } } { \mathsf { V } } _ { 0 \cup \mathsf { T } _ { - } 1 2 \vee } } \\ { { \mathsf { t } } _ { \mathsf { r i s e } } { = } 1 0 \mathsf { m } { \mathsf { S } } } \end{array}$ CH2 VOUT\_12V

Test Condition:  
➢ Full Load  
![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/a36ac0d211cc66af19cfdc4766f48c84f2fa9d256db4a5dd429ea61f68ebffd4.jpg)

85 VAC

$\begin{array} { c } { \mathsf { C H 1 V _ { 0 \downarrow \uparrow \mathrm { \Sigma } _ { - \downarrow \downarrow \mathrm { e } } } } } \\ { \mathsf { t } _ { \mathrm { r i s e } } \mathrm { = } 5 . 7 \mathrm { \ m s } } \end{array}$ CH1 VOUT\_5V  
$\begin{array} { l l } { { \mathsf { C H 2 } } { \mathsf { V } } _ { 0 \cup \mathsf { T } _ { - } 1 2 \vee } } \\ { { \mathsf { t } } _ { \mathsf { r i s e } } { = } 6 . 1 \mathsf { m s } } \end{array}$ CH2 VOUT\_12V

Test Condition:  
➢ Full Load  
![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/16194671ab715c96afb010e5a9dbd59acba17b01c72db760fa3c463d192e3e8f.jpg)

132 VAC

$\begin{array} { r } { \mathsf { C H 1 V _ { 0 \cup \mathsf { T } \_ 5 \vee } } } \\ { \mathsf { t } _ { \mathrm { r i s e } } \equiv 7 . 9 ~ \mathsf { m S } } \end{array}$ CH1 V  
$\begin{array} { l l } { { \mathbb { C } } { \mathbb { H } } 2 { \mathbb { V } } _ { 0 \cup { \mathbb { T } } _ { - } 1 2 \vee } } \\ { { \mathbb { t } } _ { \mathrm { r i s e } } { = } 8 . 2 ~ \mathrm { m } 5 } \end{array}$ CH2 VOUT\_12V

Test Condition:  
➢ Full Load  
![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/98a66692208f80ad9d07fb91bc517eb94952296d5181afd9802d64c49ec12d4e.jpg)

132 VAC

$\begin{array} { r } { \mathsf { C H 1 V _ { O U T \_ 5 V } } } \\ { \mathsf { t } _ { \mathrm { r i s e } } \equiv 4 . 6 \mathsf { m s } } \end{array}$ CH1 V  
$\begin{array} { l l } { { \sf C H 2 \ : V _ { 0 \cup \sf T _ { - } 1 2 V } } } \\ { { \sf t _ { r i s e } = 5 . 1 \ : m S } } \end{array}$ CH2 VOUT\_12V

Test Condition:

➢ Full Load

## MOSFET Start up waveform

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/b937c93a362a6b971894d126a911411f3b21fd3e60c855d3899f64af74ad78a8.jpg)

85 VAC

CH1 VDS  
CH4 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 5 6 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 4 4 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/798cb7378bc3c22c1e46749c820b2553d30a46aa52a00ca74d345fd08e376f91.jpg)

132 VAC

CH1 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 3 2 4 V
$$

$$
I _ {D S \_ M A X} = 0. 4 6 A
$$

## Test Condition:

➢ Full Load

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/e30d26afb18f08add9d5700ab2d547b984685fd431553845d16888a72d6eedb6.jpg)

85 VAC

CH1 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 2 6 4 V
$$

$$
I _ {D S \_ M A X} = 0. 5 A
$$

## Test Condition:

➢ Full Load

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/dbd45ee98c1aa48ee7e76d70361b77ce1ef5602c7228d49d32e1def7cf933d8c.jpg)

132 VAC

CH1 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 3 3 2 V
$$

$$
I _ {D S \_ M A X} = 0. 5 4 A
$$

## Test Condition:

➢ Full Load

## MOSFET Normal Waveform

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/6502aacf483d1ae8d071c988ec1f5930dc4e012d76de8b54082843e2f78f437a.jpg)

85 VAC

CH1 VDS  
CH4 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 5 6 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 4 3 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/4ef5874e9dabd858c77c042a736f617bcd6ed483907edb26f123e3f08134d076.jpg)

132 VAC

CH1 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 3 2 4 V
$$

$$
I _ {D S \_ M A X} = 0. 4 4 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/1c1be05d9770394c58c8e71c05a6c6fe578b027c2f6cf001ecfba48dd4248ba5.jpg)

85 VAC

CH1 VDS  
CH4 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 6 4 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 4 8 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/132a39ade5ea06711f80941660d32c427795e1454f9d8606209761966140c16f.jpg)

132 VAC

CH1 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 3 2 8 V
$$

$$
I _ {D S \_ M A X} = 0. 5 \mathrm{A}
$$

## Test Condition:

➢ Full Load

## Output Diode Voltage @ start up

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/591b468715ef6c9a06251b82554a68266cdecda88675f1c72c84d02d94542e62.jpg)

85 VAC

CH1 5V  
CH2 12V

CH1=13.5 V

CH2=36 V

## Test Condition:

➢ Full Load

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/a0219828bdbaeb2db75a55863c9fd92dfc5207ed4a59d632147023da5ee9906d.jpg)

132VAC

CH1 5V  
CH2 12V

CH1=18.6 V

CH2=50 V

## Test Condition:

➢ Full Load

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/a17039490458b019ffe9a722b23f61eebbc8eb2f6d032c057ccb5fea933932ed.jpg)

85 VAC

CH1 5V  
CH2 12V

CH1=16.2 V

CH2=42 V

## Test Condition:

➢ Full Load

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/17cb0233b5e2778664dbea46630973f658c6936fd87a64990b513fa424f97397.jpg)

132 VAC

CH1 5V  
CH2 12V

CH1=21.9 V

CH2=56 V

## Test Condition:

➢ Full Load

## Output Diode Voltage @ normal working

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/d89dfeeb26c1f48336f2bd5615e1ee12be695cea838244374658024e1fd17a98.jpg)

85 VAC

CH1 5V  
CH2 12V

CH1=13.4 V

CH2=33 V

## Test Condition:

➢ Full Load

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/86eb03da68546e5b7b010f6779cf12391e9602fef0ec997e43bc98ae450e3257.jpg)

132VAC

CH1 5V  
CH2 12V

CH1=18 V

CH2=44 V

## Test Condition:

➢ Full Load

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/5e9b08f29178e0849b047cb8a5ee503731bd6b30b2baab3db1e8e5b632fecd06.jpg)

85 VAC

CH1 5V  
CH2 12V

CH1=13.6 V

CH2=36 V

## Test Condition:

➢ Full Load

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/c7789c125a252acd7c4532ec8b2066212de266c878c0158d0744f1e1ded2ec48.jpg)

132 VAC

CH1 5V  
CH2 12V

CH1=18 V

CH2=44 V

## Test Condition:

➢ Full Load

## Output SCP MOSFET waveform

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/e753adc01e15a48f913235e9debda7f4337cb6ea80a82be1cfa787e02d126912.jpg)

85 VAC

CH1 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 2 5 2 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 0. 4 2 A
$$

## Test Condition:

➢ 5V Output Short circuit

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/1d4cfa7aa6eee83ea3530975fce813b34143698e6dd054c8a72836717a8e894c.jpg)

132 VAC

CH1 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 3 2 3 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 0. 4 5 \mathrm{A}
$$

## Test Condition:

➢ 5V Output Short circuit

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/6d6333cbcdf163280df200c5d9d955f86b2dce81a502c37bee8ec6105efc49c5.jpg)

85 VAC

CH1 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 2 6 4 V
$$

$$
I _ {D S \_ M A X} = 0. 4 9 A
$$

## Test Condition:

➢ 5V Output Short circuit

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/2df61710686432746414eb72daa66721f8a54532db3ab8aadb1de2bfe9d3120c.jpg)

132 VAC

CH1 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 3 2 8 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 0. 5 2 \mathrm{A}
$$

## Test Condition:

➢ 5V Output Short circuit

## Output SCP Diode Voltage waveform

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/a7eed70b26793d3a74e705027b384b34f34aba70a7bd1e6e3f15aac332642d3b.jpg)

85 VAC

CH1 5V  
CH2 12V

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/0172b71e308882a4888c28d4d042551d99f98b8a30358ff72af1a0728e2c14ff.jpg)

## Test Condition:

➢ 5V Output Short circuit

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/41e97f6909a6d3795eed8ec6cfbf68f0dcd2f519efbb2d2b9b5b255a34123d36.jpg)

132 VAC

CH1 5V  
CH2 12V

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/677594604ef8217a1582251fe2b02d79a3c2644abeb3de56cd1df4c55fa86665.jpg)

## Test Condition:

➢ 5V Output Short circuit

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/c2fc139f364e43a6ce02e1c8e3ef9b21a1a482b1744967b7f8268521902c5c9a.jpg)

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/3221c20e626472052d0caadb8d7edd89899234f449c6dacb399b70f422809ae5.jpg)

85 VAC

CH1 5V  
CH2 12V

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/b5b4a446127f7fcce438045c7bf3fc04a6980aa81170dc314de6f13e8295c9aa.jpg)

## Test Condition:

➢ 5V Output Short circuit

132 VAC

CH1 5V  
CH2 12V

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/77ef8d0b0a8bc7705ba8e7fd5cb4c43b9357926c905153e87f4cd62447427398.jpg)

## Test Condition:

➢ 5V Output Short circuit

## Output SCP Diode Voltage waveform

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/a2fffa5a8db6377dd0c0a9e9462052b785e13924363216187632e780ca956b03.jpg)

85 VAC

CH1 5V  
CH2 12V

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/e40312782f18bd0b1307734ac7639b7aae039773ecf89591d699686788ddd578.jpg)

## Test Condition:

12V Output Short circuit

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/01ca14504ebd09f3fbfd80efbb9c986dcfeb58f4cdfad50517fe702664e74873.jpg)

132 VAC

CH1 5V  
CH2 12V

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/bce3c4718ec77a1ce5c518555cda5c7cfb335b4307877c465d5a315ec70f2cf1.jpg)

## Test Condition:

12V Output Short circuit

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/78a4f1ccd597f3801b38d6b6f24b6a6b5d498a4a2168cb0b3737fe45b3596fd4.jpg)

85 VAC

CH1 5V  
CH2 12V

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/6a503a6054aa5e1d4984f4741ebaa5c0a4d12d93e30903336536a0f79cbef224.jpg)

## Test Condition:

12V Output Short circuit

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/10f4f6a5ef6ab2b788f0c99604f6d94ab0604e5dfa4bca49a1ae8f66f4eddd8b.jpg)

132 VAC

CH1 5V  
CH2 12V

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/0ce5aad696cf55966a369423c6e337dd0ee5d8b5fc9fe543706e8ba2ef71149a.jpg)

## Test Condition:

12V Output Short circuit

BPA8616D

<table><tr><td rowspan="2">Test Component</td><td colspan="2">85VAC</td><td colspan="2">132VAC</td></tr><tr><td>T (°C)</td><td>ΔT (°C)</td><td>T (°C)</td><td>ΔT (°C)</td></tr><tr><td>Ambient Temperature</td><td colspan="2">39.3</td><td colspan="2">39.9</td></tr><tr><td>BPA8616D</td><td>106.9</td><td>67.6</td><td>89.3</td><td>49.4</td></tr><tr><td>Winding(transf)</td><td>62.9</td><td>23.6</td><td>62.2</td><td>22.3</td></tr><tr><td>Core(transf)</td><td>66.3</td><td>27</td><td>65.5</td><td>25.6</td></tr><tr><td>Output Diode (5v)</td><td>65.4</td><td>26.1</td><td>65.6</td><td>25.7</td></tr><tr><td>Output Diode (12v)</td><td>69.4</td><td>30.1</td><td>69.6</td><td>29.7</td></tr><tr><td>Input Electrolytic capacitor</td><td>56.8</td><td>17.5</td><td>51.7</td><td>11.8</td></tr><tr><td>Output Electrolytic capacitor (5v)</td><td>53.2</td><td>13.9</td><td>53.1</td><td>13.2</td></tr></table>

Test condition: 5V/0.3A 12V/0.35A

TNY176D

<table><tr><td rowspan="2">Test Component</td><td colspan="2">85VAC</td><td colspan="2">132VAC</td></tr><tr><td>T (°C)</td><td>ΔT (°C)</td><td>T (°C)</td><td>ΔT (°C)</td></tr><tr><td>Ambient Temperature</td><td colspan="2">39.1</td><td colspan="2">39</td></tr><tr><td>TNY176D</td><td>106.7</td><td>67.6</td><td>90</td><td>51</td></tr><tr><td>Winding(transf)</td><td>60.2</td><td>21.1</td><td>59.7</td><td>20.7</td></tr><tr><td>Core(transf)</td><td>63.8</td><td>24.7</td><td>62.9</td><td>23.9</td></tr><tr><td>Output Diode (5v)</td><td>66.7</td><td>27.6</td><td>67.5</td><td>28.5</td></tr><tr><td>Output Diode (12v)</td><td>65.3</td><td>26.2</td><td>65.4</td><td>26.4</td></tr><tr><td>Input Electrolytic capacitor</td><td>53.5</td><td>14.4</td><td>49.5</td><td>10.5</td></tr><tr><td>Output Electrolytic capacitor (5v)</td><td>52.3</td><td>13.2</td><td>52.9</td><td>13.9</td></tr></table>

Test condition: 5V/0.3A 12V/0.25A  
■Load at 5V0.3A 12V/0.35A,TNY176D is OTP

BPA8616D  
![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/09628ecee9566eb7d686cb59e6b5be694cb832f2a6353775230fd10dd78892b6.jpg)

115Vac Line

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/5109d23b0b8ef8f8ae1aa2a79dcea127f92b63d12679be5b2c92f241a1f6ed9c.jpg)

115Vac Line

BPA8616D  
![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/2a77df947abc9499fe8f19a5ec289442fd452638fd006ff6857b6dca66d1e3ea.jpg)

115Vac Neutral

![](./素材/images/TNY176D&BPA8616D_comparison_report_5V0.3A12V0.35A_EN/943a9fb7b2ab65bd49df9ac418607727391ac71320dee43257ccb9ed91bc2464.jpg)

115Vac Neutral

BPA8616D

<table><tr><td>Different-mode</td><td>Volt</td><td>Pulse duration</td><td>Pulse frequency</td><td>Test time</td><td>Test result</td></tr><tr><td>L to N</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr></table>

TNY176D

<table><tr><td>Different-mode</td><td>Volt</td><td>Pulse duration</td><td>Pulse frequency</td><td>Test time</td><td>Test result</td></tr><tr><td>L to N</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr></table>

◼ BPA8616D can replace TNY176D without changing PCB and transformer

## THANK YOU FOR WATCHING
