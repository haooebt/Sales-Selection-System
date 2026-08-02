![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/d060a3654bfbb7a123dc56dcb9cc3ac45cbc94d69a8f68d58bc4e2e09533d71a.jpg)

## BPA8616D 替换 TNY286D对比测试报告

## 5V/0.3A 12V/0.4A 20V40mA)

上海晶丰明源半导体股份有限公司

Shanghai Bright Power Semiconductor Co., Ltd.

文长川

时间：2021/11/05

## 内容

电路及实物图  
性能测试对比  
结论

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/127c1fbd0de16f1cbf3773ca8331c01ef2289e7810974f98e3db09b4129cd8b8.jpg)

芯片更换为BPA8616D后还需更改了以下几点

R17和R20不装可以有输入过欠压保护功能  
L2位置不装，感量大两个方案都会系统不稳定

## 元件面

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/4f3c96b9967683e925ff0514ed292658a0768c63956a3ff0692af80625429402.jpg)

## 贴片面

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/74caae399a3b4eb5491e4a2d86c69bf67ad141d3ff031fdc9f2e9fc045e39c34.jpg)

空载功耗  
![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/f6aa7b23f819eea4e67bd7cb720828b806e649266052a31ef4410eaa84b8545d.jpg)

输入电压

备注：TNY286D在EN pin脚上拉一串电阻做过欠压，阻值4M；BPA8616D内部集成过欠压功能，无需外部电阻

效率测试  
![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/3f31240a90c5497d75260d0b24f37d06a2101fe02068cf31c4cfa7aec646b480.jpg)

负载

## 输出电压交叉调整率

BPA8616D

<table><tr><td> $V_{IN}(VAC)$  $I_{OUT}(A)$ </td><td></td><td>5V</td><td>12V</td><td>20V</td></tr><tr><td rowspan="4"> $I_{O5V}=0A$  $I_{O12V}=0A$  $I_{O20V}=0A$ </td><td>85VAC</td><td>5</td><td>12.7</td><td>18.2</td></tr><tr><td>115VAC</td><td>5</td><td>12.75</td><td>18.2</td></tr><tr><td>230VAC</td><td>5</td><td>12.83</td><td>18.27</td></tr><tr><td>265VAC</td><td>5</td><td>12.86</td><td>18.28</td></tr><tr><td rowspan="4"> $I_{O5V}=0.3A$  $I_{O12V}=0A$  $I_{O20V}=0A$ </td><td>85VAC</td><td>4.986</td><td>14.61</td><td>21.92</td></tr><tr><td>115VAC</td><td>4.988</td><td>14.61</td><td>21.89</td></tr><tr><td>230VAC</td><td>4.986</td><td>14.29</td><td>21.6</td></tr><tr><td>265VAC</td><td>4.986</td><td>14.23</td><td>21.52</td></tr><tr><td rowspan="4"> $I_{O5V}=0A$  $I_{O12V}=0.4A$  $I_{O20V}=0A$ </td><td>85VAC</td><td>5</td><td>11.2</td><td>18.44</td></tr><tr><td>115VAC</td><td>5</td><td>10.98</td><td>18.34</td></tr><tr><td>230VAC</td><td>5</td><td>11.15</td><td>18.56</td></tr><tr><td>265VAC</td><td>5</td><td>11.15</td><td>18.56</td></tr><tr><td rowspan="4"> $I_{O5V}=0A$  $I_{O12V}=0A$  $I_{O20V}=0.05A$ </td><td>85VAC</td><td>5</td><td>12.39</td><td>13.45</td></tr><tr><td>115VAC</td><td>5</td><td>12.43</td><td>11.66</td></tr><tr><td>230VAC</td><td>5</td><td>12.49</td><td>13.62</td></tr><tr><td>265VAC</td><td>5</td><td>12.5</td><td>13.6</td></tr></table>

测试条件：Io=0A为只带客户板上负载

TNY286D

<table><tr><td> $V_{IN}(VAC)$  $I_{OUT}(A)$ </td><td></td><td>5V</td><td>12V</td><td>20V</td></tr><tr><td rowspan="4"> $I_{O5V}=0A$  $I_{O12V}=0A$  $I_{O20V}=0A$ </td><td>85VAC</td><td>5</td><td>12.48</td><td>18.58</td></tr><tr><td>115VAC</td><td>5</td><td>12.49</td><td>18.56</td></tr><tr><td>230VAC</td><td>5</td><td>12.58</td><td>18.5</td></tr><tr><td>265VAC</td><td>5</td><td>12.6</td><td>18.49</td></tr><tr><td rowspan="4"> $I_{O5V}=0.3A$  $I_{O12V}=0A$  $I_{O20V}=0A$ </td><td>85VAC</td><td>4.986</td><td>14.7</td><td>22.16</td></tr><tr><td>115VAC</td><td>4.99</td><td>14.72</td><td>22.05</td></tr><tr><td>230VAC</td><td>4.988</td><td>14.38</td><td>21.65</td></tr><tr><td>265VAC</td><td>4.987</td><td>14.27</td><td>21.55</td></tr><tr><td rowspan="4"> $I_{O5V}=0A$  $I_{O12V}=0.4A$  $I_{O20V}=0A$ </td><td>85VAC</td><td>5</td><td>11.07</td><td>18.4</td></tr><tr><td>115VAC</td><td>5</td><td>11.1</td><td>18.45</td></tr><tr><td>230VAC</td><td>5</td><td>11.18</td><td>18.55</td></tr><tr><td>265VAC</td><td>5</td><td>11.19</td><td>18.55</td></tr><tr><td rowspan="4"> $I_{O5V}=0A$  $I_{O12V}=0A$  $I_{O20V}=0.04A$ </td><td>85VAC</td><td>5</td><td>12.31</td><td>16.17</td></tr><tr><td>115VAC</td><td>5</td><td>12.31</td><td>16.15</td></tr><tr><td>230VAC</td><td>5</td><td>12.31</td><td>16.03</td></tr><tr><td>265VAC</td><td>5</td><td>12.31</td><td>16</td></tr></table>

测试条件：Io=0A为只带客户板上负载

## 输出电压纹波

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/d7213469ba7e50f1fcab4e5a44bc7217d3697137f0a902f3d1715e04e0f79a38.jpg)

## BPA8616D

85 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T - S V } }$ Ripple$V _ { P K - P K } = 8 8 m V$ ！  
CH2 $\mathsf { V } _ { \mathsf { O U T } - 1 2 \mathsf { V } }$ Ripple $\mathsf { V } _ { \mathsf { P K - P K } } { = } 1 0 2 \mathsf { m V }$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/d3319c05aceb8ea977623e1ce0ef4b90865176db781f4f843c3ed0a6564cc05b.jpg)

## BPA8616D

265 $\mathsf { v } _ { \mathsf { A C } }$

CH1 $\mathsf { V } _ { \mathsf { O U T - S V } }$ Ripple $\mathbf { V } _ { \mathsf { P K - P K } } { = } 9 2 \mathsf { m V }$  
CH2 $\mathsf { V } _ { \mathsf { O U T } - 1 2 \mathsf { V } }$ Ripple $\mathbf { V } _ { \mathsf { P K - P K } } { = } 9 6 \mathsf { m V }$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/73f067a6b624ace2642ac35af89e39a0ae6a9fae701326a92da2faf6b3b24610.jpg)

## TNY286D

85 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T - 5 V } }$ Ripple $V _ { p | k - P K } = 8 7 m V$  
$\begin{array} { r l } & { \mathsf { C H 2 V _ { O U T - 1 2 V } R i p p l e } } \\ & { \mathsf { V _ { P K - P K } } \mathsf { = 9 2 m V } } \end{array}$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/21826c1b278bd1488e225f296ba79c5cfb4202bdcd846c3b7feb6af00dc34b36.jpg)

## TNY286D

265 $\mathsf { v } _ { \mathsf { A C } }$

CH1 $\mathsf { V } _ { \mathsf { O U T - S V } }$ Ripple $V _ { p | \mathrm { X - P K } } = 8 7 \mathsf { m V }$  
CH2 $\mathsf { V } _ { \mathsf { O U T - 1 } 2 \mathsf { V } }$ Ripple $V _ { p | k - P K } = 9 4 m v$

## Test Condition:

➢ Full Load

## 动态负载(50%-100%)

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/adcbcff4a745372a812566132cc5a87b439620ecdc96d567d4f7d641199c10a1.jpg)

## BPA8616D

85 VAC

CH1 V Ripple VPK-PK=96mV  
CH2 V Ripple VPK-PK=490mV

CH4 IOUT-5V

## Test Condition:

➢ 0.15 A-0.3 A-0. 15 A  
➢ 0.2 A-0.4 A-0.2 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/0fb56950f276f7fe6767e58119e72f84d6b00a04258610c0cef6c3b806926a2a.jpg)

## BPA8616D

265 VAC

CH1 V V Ripple VPK-PK=96mV  
CH2 V Ripple VPK-PK=510mV  
CH4 IOUT-5V

## Test Condition:

➢ 0.15 A-0.3 A-0. 15 A  
➢ 0.2 A-0.4 A-0.2 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/29819d2be5603f0ac81ba7ab0eed86ddecbd0a6c35d692e271b2b08a11bc7a9d.jpg)

## TNY286D

85 VAC

CH1 V Ripple VPK-PK=102mV  
CH2 V Ripple VPK-PK=480mV  
CH4 IOUT-5V

## Test Condition:

➢ $0 . 1 5 \mathsf { A } – 0 . 3 \mathsf { A } – 0 . 1 5 \mathsf { A }$  
➢ $0 . 2 \ A { - } 0 . 4 \ A { - } 0 . 2 \ A$  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/f2056791b480ea4b51aa644cdd62216dc0d1401889b73ca5071d2eefeb142484.jpg)

## TNY286D

265 VAC

CH1 V Ripple V =96mV  
CH2 V Ripple VPK-PK=540mV  
CH4 IOUT-5V

## Test Condition:

➢ 0.15 A-0.3 A-0. 15 A  
➢ 0.2 A-0.4 A-0.2 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## 动态负载(10%-90%)

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/a0bf1eed404ba229a247ffefd13369574fd50d7dbc6f616b375bcb09b2da1a31.jpg)

## BPA8616D

85 VAC

CH1 V Ripple VPK-PK=96mV  
CH2 V Ripple VPK-PK=930mV

CH4 IOUT-5V

## Test Condition:

➢ 0.03 A-0.27 A-0.03 A  
➢ 0.04 A-0.36A-0.04 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/8db423a2de84979c94c9d69e0a68e4808eed67c3652fcd4c92d4a7672e26f71d.jpg)

## BPA8616D

265 VAC

CH1 V RippleOUT-5V VPK-PK=106mV  
CH2 V Ripple VPK-PK=960mV  
CH4 IOUT-5V ${ \mathsf { C H } } 4 \mid _ { _ { 0 \cup \mathsf { T } } - 5 \lor }$

## Test Condition:

➢ 0.03 A-0.27 A-0.03 A  
➢ 0.04 A-0.36A-0.04 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/c761aaba3e277e24a41e9988d0c7d18776e4df8951fec0ab7ba43e7c025498b3.jpg)

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/23e5ce04d621d55da652cd21761fe3f8aa298a97f3d48c86d75e3cbed42d0b1e.jpg)

## TNY286D

85 VAC

${ \mathsf { C H 1 } } { \mathsf { V } } _ { { \mathsf { O U T } } - { \mathsf { 5 V } } }$ Ripple$\mathsf { V } _ { \mathsf { P K - P K } } { = } 1 0 8 \mathsf { m V }$ （201  
CH2 $\mathsf { V } _ { \mathsf { O U T - 1 2 V } }$ Ripple VPK-PK=400mV

## Test Condition:

➢ 0.03 A-0.27 A-0.03 A  
➢ $0 . 0 4 \ A - 0 . 3 6 \ A - 0 . 0 4 \ A$  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## TNY286D

265 VAC

CH1 V $\mathsf { V } _ { \mathsf { O U T - S V } }$ Ripple $\mathsf { V } _ { \mathsf { P K - P K } } { = } 1 0 9 \mathsf { m V }$  
CH2 $\mathsf { V } _ { \mathsf { O U T - 1 } 2 \mathsf { V } }$ Ripple VPK-PK=420mV

## Test Condition:

➢ 0.03 A-0.27 A-0.03 A  
➢ 0.04 A-0.36A-0.04 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## 输出电压开机波形

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/ffcde0eb2babc00baed972b139590f126e8435684930a5199ba2229d5fbbef12.jpg)

## BPA8616D

85 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T - S V } }$ Ripple $\mathtt { t } _ { \mathrm { r i s e } } = 6 . 8 1 \mathrm { m } s$  
CH2 $\mathsf { V } _ { \mathsf { O U T } - 1 2 \mathsf { V } }$ Ripple trise=7.5mS

## Test Condition:

➢ NO Load

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/3c8e7af052ea75e88b5fb4f2d911e3e35cc33f726287b0a95368d1b29204e378.jpg)

## BPA8616D

265 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T - S V } }$ Ripple trise=3.98mS  
CH2 $\mathsf { V } _ { \mathsf { O U T } - 1 2 \mathsf { V } }$ Ripple trise=4.12mS

## Test Condition:

➢ NO Load

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/0d7d16b6f722a3f7ff09307a90fcab9c7d7a7e382516e1dc9681d55be20a6345.jpg)

## TNY286D

85 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T - 5 V } }$ Ripple trise=5.29mS  
CH2 VOUT-12V Ripple trise=6.01mS

## Test Condition:

➢ NO Load

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/d67c5121e3d2e385c25a584c865a8c0dc0ce12814fe973e1d896a21487dc0311.jpg)

## TNY286D

265 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T - S V } }$ Ripple trise=4.59mS  
CH2 VOUT-12V Ripple t =4.92mS

## Test Condition:

➢ NO Load

## 输出电压开机波形

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/b1ba694ab511310f50aa0a2195fb3342e6c623abb31ffa604b5f1d476149ef66.jpg)

## BPA8616D

85 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T - S V } }$ Ripple trise=9.45mS  
CH2 $\mathsf { V } _ { \mathsf { O U T } - 1 2 \mathsf { V } }$ Ripple t =10.08mS

## Test Condition:

➢ Full Load

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/29ca52c11e3ab3b418a13d38005a89fbf2eab37317b3cf988a06cd86954d8d13.jpg)

## BPA8616D

265 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T - S V } }$ Ripple trise=4.82mS  
$\begin{array} { r l } { \mathbf { 1 } } & { \mathsf { C H 2 V } _ { \mathrm { O U T - 1 2 V } } \mathsf { R i p p l e } } \\ & { \mathbf { t } _ { \mathrm { r i s e } } = 5 . 3 2 \mathsf { m S } } \end{array}$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/ae9c4c0530c17dfbb4ccd9ee9d8fa4d225cabcbd62c6f2be320455813751468b.jpg)

## TNY286D

85 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T - 5 V } }$ Ripple $\mathtt { t } _ { \mathrm { r i s e } } = 1 0 . 1 2 \mathrm { m } 5$  
CH2 VOUT-12V Ripple t =11.05mS

## Test Condition:

➢ Full Load

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/6537d72c7baedd40eb74f6137cfeb1b1996c3cd33b3e5866d4a5aba4a3ecb3b8.jpg)

## TNY286D

265 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T - S V } }$ Ripple trise=7.45mS  
CH2 VOUT-12V Ripple trise=8.35mS

## Test Condition:

➢ Full Load

## MOSFET开机波形

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/a45d87a9f96e9689381c721b9f268c9e24483413e272f260c2bf538638ef1bba.jpg)

## BPA8616D

85 VAC

CH3 VDS  
CH4 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 3 2 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 4 8 0 \mathrm{A} \end{array}
$$

Test Condition:

➢ Full Load

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/063e5dfaec02021b019c100a71d64f19ee99620017ec8fa97f67e6372ac23c7e.jpg)

## BPA8616D

265 VAC

CH3 VDS  
CH4 IDS

$$
\begin{array}{l} V _ {D S \_ M A X} = 5 6 0 V \\ I _ {D S \_ M A X} = 0. 6 2 2 A \end{array}
$$

Test Condition:

➢ Full Load

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/a04bc26c6c1b839096fa0e949b07cf2da6168633ab35e99bd04a0283c8f6fc78.jpg)

## TNY286D

85 VAC

CH3 VDS  
CH4 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 3 2 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 4 8 \mathrm{A} \end{array}
$$

Test Condition:

➢ Full Load

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/619d9e7e6e86a6420d1e044167e43ca77fa03840e8a0adc55641ad4c6bb9f356.jpg)

## TNY286D

265 VAC

CH2 VDS  
CH4 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 5 7 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 5 4 \mathrm{A} \end{array}
$$

Test Condition:

➢ Full Load

## MOSFET稳态波形

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/acfb6ad17311929130fbeee196cb72d540696674e90aa4dab0bbc57959fe2313.jpg)

BPA8616D

85 VAC  
![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/bd53b7e14513c3b003678d170d4d5743cb4fdb984df60767a9c8670baaa11922.jpg)

Test Condition:  
➢ Full Load

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/8c9d27c81ee88ae495d438da822b4b8e882877b1d0e1def6ca7e50b13b6c2524.jpg)

BPA8616D

265 VAC  
![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/b2e819efa9ccf578528cc5cb75b12f9a4e1df298b5d84c824ab9676323d4201d.jpg)

Test Condition:  
➢ Full Load

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/7f8afc9bbd80f1af5eee58cfaa4bff79a187819f5cac97c7a3199cb702a87fe8.jpg)

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/9fb175a1e7d46994f474d29564d50c21775efd2f302f128b115ec088994a5811.jpg)

## TNY286D

85 VAC  
![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/6e35872f512bb58a3762687b77d0325801535688c0eb749bcc1a14533bd5eb38.jpg)

Test Condition:  
➢ Full Load

TNY286D  
265 VAC  
![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/ff0b1ce18909e601f3a501e404f7910c5613f54fa3f9a44c44207ebb52d8b06c.jpg)

Test Condition:  
➢ Full Load

## 输出二极管开机电压波形（D1）

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/4cc62007792bc92e28bafb70b8542a91708a8f0612a34ab409689a850d9f5019.jpg)

BPA8616D

${ \otimes 5 } \mathsf { V } _ { \mathsf { A C } }$

CH3 VD

$V _ { \mathsf { D } \_ M A X } = 4 4 V$

Test Condition:

➢ Full Load

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/1d688415322a9c8bf3423204ce3e68e8d262ec1cb91289ffac6158f5ee453159.jpg)

BPA8616D

265 VAC

CH3 VD

$V _ { \mathsf { D } \_ M A X } = 8 0 V$

Test Condition:

➢ Full Load

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/0b3f94d3d5fa8d4df20be1fec5279813c3fbe7dc242b7b1c93d6c5a966c27526.jpg)

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/4c341b52e81f2a95dd68e9a13bf12312966416fd6edb8a3de7b80830077797d0.jpg)

TNY286D

${ \tt S 5 V } _ { \sf A C }$

CH2 VD

$V _ { \mathsf { D } \_ M A X } = 4 3 V$

Test Condition:

➢ Full Load

TNY286D

265 VAC

CH2 VD

$V _ { \mathsf { D } \_ M A X } = 7 7 \mathsf { V }$

Test Condition:

➢ Full Load

## 输出二极管稳态电压波形（D3）

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/e5543863811c9ca7676ac210d5f29fb6f6f567ce328609466bc080e6eb0e2094.jpg)

BPA8616D  
85 VAC  
CH3 VD  
$V _ { \mathsf { D } \_ M A X } = 1 7 \mathsf { V }$  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/e123f9d7985172bcc7a249e9fdf925286e4b5f93c96014e438b7f875c44c972b.jpg)

BPA8616D  
265 VAC  
CH2 VD  
$\mathsf { V } _ { \mathsf { D } \_ \mathsf { M A X } } { = } 3 1 . 4 \mathsf { V }$  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/3450ba92f613e95d3106cb4bd2bac9a37597a3e7b0738f7f12f85bfe9990315b.jpg)

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/28f06976bbcab6f42a4a716257291fe50312b2b3dccca5aa14c419ff11936fcb.jpg)

${ \tt S 5 V } _ { \sf A C }$  
CH2 VD  
$\mathsf { V } _ { \mathsf { D } \_ \mathsf { M A X } } { = } 1 6 . 4 \mathsf { V }$  
Test Condition:  
➢ Full Load

## TNY286D

TNY286D

265 VAC

CH2 VD

$V _ { \mathsf { D } \_ M A X } = 3 0 V$

Test Condition:

➢ Full Load

## 输入过压保护 （MOS波形）

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/7a026c041d5f456111f3a5423e5c062c1e4ba59382828fe43b2be22212ed84b8.jpg)

## BPA8616D

CH2VDC\_IN $\mathsf { C H } 2 \mathsf { V } _ { \mathsf { D C } \_ \mathsf { I N } }$  
CH3 $\mathsf { V } _ { \mathrm { d } s }$

$$
\begin{array}{l} \mathrm {V_ {ds\_MAX}} = 6 4 0 \mathrm{V} \\ \mathrm {V_ {DC\_IN}} = 4 8 9 \mathrm{V} \end{array}
$$

Test Condition:

➢ real Load

触发过压保护， MOS最高电压640V

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/a434409d2e51afafa9743f4f3a61b9ff9f7af47ecdee0d96125109c7a3044a9d.jpg)

## TNY286D

CH1 VDC\_IN $\mathsf { C H 1 V _ { D C \_ I N } }$  
${ \mathsf { C H } } 2 { \mathsf { V } } _ { \mathsf { d s } }$  
$\mathsf { C H 3 } \mathsf { V } _ { 0 }$

$$
\begin{array}{l} \mathrm {V_ {ds\_MAX}} = 4 9 0 \mathrm{V} \\ \mathrm {V_ {DC\_IN}} = 6 5 0 \mathrm{V} \end{array}
$$

Test Condition:

➢ real Load

无过压保护， MOS最高电压650V

## 输入欠压保护

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/195c780be080ff2d815d513868e5f0d03aefd83732f1c76941864c4680de0be9.jpg)

## BPA8616D

CH2 VDC\_IN $\mathsf { C H } 2 \mathsf { V } _ { \mathsf { D C } \_ \mathsf { I N } }$  
${ \mathsf { C H 3 } } \mathsf { V _ { D S } }$

$$
V _ {D C \_ I N \_} = 8 7 V
$$

Test Condition:

➢ real Load

内置欠压保护， 启机电压85VDC

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/e2268a17ed98cdf36346358524fecb1ea5ac4fc60a7545098c2252b2153b8387.jpg)

## TNY286D

CH2 VDC\_IN $\mathsf { C H } 2 \mathsf { V } _ { \mathsf { D C } \_ \mathsf { I N } }$  
${ \mathsf { C H 3 } } \mathsf { V } _ { \mathsf { D S } }$

$$
V _ {D C \_ I N \_} = 9 9 V
$$

Test Condition:

➢ real Load

输入欠压保护， 需要增加电阻到EN脚

BPA8616D

<table><tr><td rowspan="2">项目</td><td>90VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>29.55</td><td>29.07</td></tr><tr><td>BPA8616D (IC6)</td><td>109.58</td><td>89.56</td></tr><tr><td>变压器绕组(T1)</td><td>68.84</td><td>66.18</td></tr><tr><td>变压器磁芯(T1)</td><td>63.3</td><td>63.46</td></tr><tr><td>整流二极管(D1)</td><td>71.46</td><td>70.43</td></tr><tr><td>续流二极管(D3)</td><td>58.45</td><td>58.11</td></tr></table>

备注：增大芯片Source散热铜箔面积可以降低芯片温度

TNY286D

<table><tr><td rowspan="2">项目</td><td>90VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>29</td><td>29.03</td></tr><tr><td>TNY286D (IC6)</td><td>100</td><td>90.14</td></tr><tr><td>变压器绕组(T1)</td><td>67.32</td><td>65.52</td></tr><tr><td>变压器磁芯(T1)</td><td>63.55</td><td>63.15</td></tr><tr><td>整流二极管(D1)</td><td>70.13</td><td>69.69</td></tr><tr><td>续流二极管(D3)</td><td>56.95</td><td>56.79</td></tr></table>

备注：增大芯片Source散热铜箔面积可以降低芯片温度

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/2e7d2c3cf62a6953d991a81081f395a676e4a5a01b8411027dda662cacfdb7d0.jpg)

115VAC Line BPA8616D  
![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/292fdd024b3d0f025ee26bea8819f3577fed9cdb0fbad35d76ab3dc34805ce36.jpg)

115VAC Neutral BPA8616D

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/3b089bf6b1b21a20b9233df3f7182b7a42a25f3f15aa20f299b933b25b6f50db.jpg)

115VAC Line TNY286D  
![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/685c7166595f5b2a2706df62cfd5e3d7bf982f017843accf77d519be2abb744e.jpg)

115VAC Neutral TNY286D

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/676a42ca503091db347bcd565ba013a0fa05cdc503476cfb54bd5ca959d3c008.jpg)

230VAC Line BPA8616D  
![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/4fe318f85baa992ef9f91edffd68a866c872a0dac68b481ca278f65215e8739a.jpg)

230VAC Neutral BPA8616D

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/dc811084443f178fde7567a8eece16efe09f72bebc99a2d9c89c89f2bce500f5.jpg)

230VAC Line TNY286D  
![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/bedcacfd85efc55cb1540384484080924fe143427e4485bb9d633b691f42bd60.jpg)

230VAC Neutral TNY286D

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/38d51a48f3dcf16701a302edc48ddeef64ebacf097e28af15c366f6a80c5ba56.jpg)

115VAC BPA8616D  
![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/3f671069a6230ddb16fed88906fd95668d421dc31caaabbe620589d85604807c.jpg)

230VAC BPA8616D

![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/8779e40e8f567c4c6f9324ce9f93d5f5c13a9d2ff210f2b3033559f4dfb20d05.jpg)

115VAC TNY286D  
![](./素材/images/BPA8616D_VS_TNY286D对比测试评估报告/ad51ca685abfa2ae96c42524eb59342ac7ca77b656c66b3dd873776f8035d9fd.jpg)

230VAC TNY286D

BPA8616D

<table><tr><td></td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>±2kV</td><td>0,90,180,270</td><td>2</td><td>5</td><td>Pass</td></tr><tr><td>L to PE</td><td>±4kV</td><td>0,90,180,270</td><td>12</td><td>5</td><td>Pass</td></tr><tr><td>N to PE</td><td>±4kV</td><td>0,90,180,270</td><td>12</td><td>5</td><td>Pass</td></tr><tr><td>L+N to PE</td><td>±4kV</td><td>0,90,180,270</td><td>12</td><td>5</td><td>Pass</td></tr></table>

## 测试说明

➢ 按照GB/T17626.5和IEC61000-4-5的最新版本要求进行测试  
➢ 室温环境，230VAC输入，板上负载条件

TNY286D

<table><tr><td></td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>±2kV</td><td>0,90,180,270</td><td>2</td><td>5</td><td>Pass</td></tr><tr><td>L to PE</td><td>±4kV</td><td>0,90,180,270</td><td>12</td><td>5</td><td>Pass</td></tr><tr><td>N to PE</td><td>±4kV</td><td>0,90,180,270</td><td>12</td><td>5</td><td>Pass</td></tr><tr><td>L+N to PE</td><td>±4kV</td><td>0,90,180,270</td><td>12</td><td>5</td><td>Pass</td></tr></table>

## 测试说明

➢ 按照GB/T17626.5和IEC61000-4-5的最新版本要求进行测试  
➢ 室温环境，230VAC输入，板上负载条件

## 结论

➢ BPA8616D替换TNY286D，从效率、交叉调整率、波形、温升、EMI测试数据来看均比较接近；  
BPA8616D可Pin to Pin替代TNY286D，但需同时更改以下几处：

D4位置如果需要出50mA电流，更改二极管为ES1J；  
R20和R17输入欠压保护功能，我们不需要电阻一样有输入过欠保护功能；  
⚫ EC6和EC7如果做低电压输入，更改为400V10uF；  
L2位置8\*10工字电感更改跳线，不改电感正常工作时均有系统不稳定；  
增加VCC供电电阻可以降低芯片温度；

## THANK YOU FOR WATCHING
