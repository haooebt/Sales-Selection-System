![](./素材/images/BPA8505D参考设计_5V1A_Flyback/7bfdcc239456e3d3fbd01d485f1dcbe904d4b1a52f102e1f79419835f089a344.jpg)

## BPA8505D非隔离参考设计

## (5V/1A flyback )

上海晶丰明源半导体股份有限公司

Shanghai Bright Power Semiconductor Co., Ltd.

夏奇林

2021 1

## 内容

BPA8505D  
电源规格  
电路及实物图  
BOM  
PCB Layout  
性能测试数据

## 产品特点:

➢ 650V MOSFET  
》 PWM控制模式，低输出纹波  
》内置软启动功能  
》集成高压启动、自供电电路  
〉低音频噪声

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/dba7522ef482e527d9435c9ec3e9e24ff6cb88aef753c6d55a08533fcf91a2c6.jpg)

## 应用领域:

》家用电器辅助电源  
》电机驱动辅助电源  
➢ IOT/ /  
》工业控制辅助电源

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/17dbd9420ebfacf53d86442c2bd888d02b8fc74ec49491d4465786233af8c12c.jpg)

SOP7

## 电源规格

<table><tr><td>项目描述</td><td>符号</td><td>最小</td><td>典型</td><td>最大</td><td>单位</td><td>备注</td></tr><tr><td colspan="7">输入</td></tr><tr><td>电压</td><td> $V_{IN}$ </td><td>85</td><td>115/230</td><td>264</td><td> $V_{AC}$ </td><td></td></tr><tr><td>频率</td><td> $f_{LINE}$ </td><td>47</td><td>50/60</td><td>63</td><td>Hz</td><td></td></tr><tr><td colspan="7">输出</td></tr><tr><td>输出电压</td><td> $V_{OUT}$ </td><td>4.75</td><td>5</td><td>5.25</td><td>V</td><td>±5%</td></tr><tr><td>输出电流</td><td> $I_{OUT}$ </td><td>0</td><td></td><td>1</td><td>A</td><td></td></tr><tr><td>输出电压纹波</td><td> $V_{RIPPLE}$ </td><td></td><td></td><td>120</td><td>mV</td><td>20MHz带宽</td></tr><tr><td>连续输出功率</td><td> $P_{OUT}$ </td><td></td><td>5</td><td></td><td>W</td><td></td></tr><tr><td colspan="7">效率</td></tr><tr><td>待机功耗</td><td> $P_{STDBY}$ </td><td></td><td></td><td>120</td><td>mW</td><td>230VAC,包含假负载</td></tr><tr><td>满载效率</td><td>η</td><td>75</td><td></td><td></td><td>%</td><td></td></tr><tr><td colspan="7">环境</td></tr><tr><td>传导EMI</td><td></td><td colspan="4">满足CISPR22/EN55022 Class B,至少6dB 裕量</td><td></td></tr><tr><td>Surge</td><td></td><td></td><td>2</td><td></td><td>kV</td><td>差模</td></tr><tr><td>EFT</td><td></td><td></td><td>4</td><td></td><td>kV</td><td>5kHz/100kHz/38kHz</td></tr><tr><td>ESD</td><td></td><td></td><td>15</td><td>20</td><td>kV</td><td>空气放电</td></tr><tr><td>工作环境温度</td><td> $T_{AMP}$ </td><td>0</td><td></td><td>50</td><td>°C</td><td></td></tr></table>

## 电路及实物图

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/e11ddf22752d3719d31314c835346cd584922c6b8b1b8a849d2ba39e3c0291fe.jpg)

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/4187a251e9fb1ae914dfe6d5a010a82419a45b69c027a1d630a2d4f76219550f.jpg)

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/67556a30d22f6d6e31afa9e34c921ea35fda1028f8a3f5eac92455d3f27cad2d.jpg)

<table><tr><td>序号</td><td>元件标号</td><td>参数描述</td><td>封装尺寸</td><td>数量</td></tr><tr><td>1</td><td>PCB</td><td>CEM-1, 单面板</td><td>60.5mm*28mm</td><td>1</td></tr><tr><td>2</td><td>F1</td><td>2W, 10R保险丝电阻</td><td>DIP</td><td>1</td></tr><tr><td>3</td><td>MOV</td><td>10D471,470V,10mm</td><td>7.5mm</td><td>1</td></tr><tr><td>4</td><td>BD1</td><td>ABS210, 2A/1000V</td><td>ABS</td><td>1</td></tr><tr><td>5</td><td>D3</td><td>SR560, 5A/60V,肖特基</td><td>DO-201AD</td><td>1</td></tr><tr><td>6</td><td>D1</td><td>FR107,1A/1000V</td><td>DO-41</td><td>1</td></tr><tr><td>7</td><td>L1</td><td>1mH, 工字电感</td><td>∅6*8mm</td><td>1</td></tr><tr><td>8</td><td>T1</td><td>2mH, EE13加宽, 112T/13T</td><td>EE13</td><td>1</td></tr><tr><td>9</td><td>C2, C1</td><td>10uF/400V,电解电容</td><td>∅8*12mm</td><td>2</td></tr><tr><td>10</td><td>C3</td><td>470P/1KV,高压瓷片</td><td>5mm</td><td>1</td></tr><tr><td>11</td><td>C8</td><td>1000uF/25V,电解电容,LESR</td><td>∅10*20mm</td><td>1</td></tr><tr><td>12</td><td>C7</td><td>100P/250V, X7R, 瓷片电容</td><td>SMD0805</td><td>1</td></tr><tr><td>13</td><td>C4</td><td>100nF/50V, X7R,瓷片电容</td><td>SMD0805</td><td>1</td></tr><tr><td>14</td><td>R1</td><td>150K, ±5%</td><td>SMD1206</td><td>1</td></tr><tr><td>15</td><td>R2</td><td>10K, ±1%</td><td>SMD0805</td><td>1</td></tr><tr><td>16</td><td>R3</td><td>5.1K, ±1%</td><td>SMD0805</td><td>1</td></tr><tr><td>17</td><td>R6</td><td>1K, ±5%</td><td>SMD1206</td><td>1</td></tr><tr><td>18</td><td>R5</td><td>10R, ±5%</td><td>SMD1206</td><td>1</td></tr><tr><td>19</td><td>U1</td><td>BPA8505D, SOP7</td><td>SOP7</td><td>1</td></tr><tr><td></td><td></td><td></td><td>Total</td><td>20</td></tr></table>

## 示意图

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/2b945db1870bb003059ccdea5871d2802022e1ac3a127e5d42b83d574c0f87e5.jpg)

## 电气规格：

1.初级感量3脚-1脚(Lp)=1.9mH±7%@100KHz0.4V  
2.初级漏感<80uH @50KHz0.4V  
3.绝缘强度原边-副边1.5KV 50/60Hz,1Min

## 材料:

1.磁芯:EE13加厚(铁氧体TDKPC40 或其他等效)Ae=35mm²  
2.骨架:EE13加厚,10pin,立式,槽宽=7.6mm 槽深=2.2mm  
3.绕线 (初级和输出绕组)：类型2-UEW  
4.绕组间绝缘胶布:3M1298或其他等效

## 组装：

1.凡立水含浸

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/f4da120173584944b45b07d50d172edfe11389f7a12c40ad3cb081f47840c1f3.jpg)

备注：所有引脚需套铁氟龙套管

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/1537682d9401280956ff0c89cacfef036cb9c8560e2d266e924506d8eabc7997.jpg)

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/a0b86b3a07736f77988cc6c47259d9558bc9df7f8f03cea54fd540390881aa6d.jpg)

待机功耗  
![](./素材/images/BPA8505D参考设计_5V1A_Flyback/db9286d0615c770074d5c263456cbd3d2d36f673136b462d4dcf8d8c6d145a2c.jpg)

输入电压(VAC)

效率测试  
![](./素材/images/BPA8505D参考设计_5V1A_Flyback/caf01e3b28766f9061378b23bcb802d5c0bcd443b02f274d85a88850838c0413.jpg)

负载比例

## 输出电压调整率

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>4.95</td><td>4.95</td><td>4.95</td><td>4.95</td><td>4.96</td><td>4.96</td><td>4.95</td><td>0.20%</td></tr><tr><td>20%</td><td>4.99</td><td>4.99</td><td>4.99</td><td>4.98</td><td>4.99</td><td>4.99</td><td>4.99</td><td>0.20%</td></tr><tr><td>40%</td><td>5.01</td><td>5.01</td><td>5.01</td><td>5</td><td>5.00</td><td>5.00</td><td>5.01</td><td>0.20%</td></tr><tr><td>60%</td><td>5.02</td><td>5.02</td><td>5.02</td><td>5.02</td><td>5.024</td><td>5.02</td><td>5.02</td><td>0.08%</td></tr><tr><td>80%</td><td>5.03</td><td>5.03</td><td>5.03</td><td>5.03</td><td>5.03</td><td>5.03</td><td>5.03</td><td>0.08%</td></tr><tr><td>100%</td><td>5.02</td><td>5.02</td><td>5.02</td><td>5.02</td><td>5.03</td><td>5.03</td><td>5.02</td><td>0.20%</td></tr><tr><td>平均值</td><td>5.00</td><td>5.00</td><td>5.00</td><td>5.00</td><td>5.03</td><td>5.01</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>1.60%</td><td>1.60%</td><td>1.60%</td><td>1.52%</td><td>1.40%</td><td>1.40%</td></tr></table>

◼ 计算方法：调整率=100%\*(最大值-最小值)/平均值  
测试条件：带1kΩ假负载（\~25mW）

## 输出电压纹波

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/643fcceb287d4ee21dfb25b2e9ea5e785e6014efe65a656a7938fd32363ade57.jpg)

85 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } } \mathsf { R i p p l e }$ $\mathbf { V } _ { \mathsf { P K - P K } } { = } 9 8 \mathsf { m V }$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/e854e383d050e1e2fff7edf6afd84727fc931677b5c7c5f9b91019692ab676ea.jpg)

115 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ Ripple $\mathsf { V } _ { \mathsf { P K - P K } } { = } 1 0 0 \mathsf { m V }$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/047f0fa9ce35c91ee0f7e9025c87fb48cfb6723e95881f09c5ac6bee5ccf0bdb.jpg)

230 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ Ripple $\mathsf { V } _ { \mathsf { P K - P K } } { = } 1 0 6 \mathsf { m V }$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/f388ceb3aec13cecfcf761a2afdc4a1f4b67bffe488af553c087ce9f127ff778.jpg)

265 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ Ripple $\mathsf { V } _ { \mathsf { P K - P K } } { = } 1 0 8 \mathsf { m V }$

## Test Condition:

➢ Full Load

## (50%-100%)

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/6fe26ab490de7d7aeac38a4c0c11ed380cde1f9113f3f0483abbe45f619d9cf3.jpg)

85 VAC

CH1 VOUT ${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ $\mathsf { V } _ { \mathsf { P K - P K } } { = } 1 4 1 \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ $0 . 5 { \tt A } { - } 1 { \tt A } { - } 0 . 5 { \tt A }$  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/59487981a91bdf37026d54a739082f1e319a69192a6d29e6d5dfbf54d9b06640.jpg)

230 VAC

CH1 VOUT $\mathsf { V } _ { \mathsf { O U T } }$ $v _ { p | x - P K } = 1 4 7 m v$  
$\mathsf { C H 4 } \mathsf { l } _ { \mathsf { O U T } }$

## Test Condition:

➢ $0 . 5 { \tt A } { - } 1 { \tt A } { - } 0 . 5 { \tt A }$  
➢ Slew Rate: 0.5 $\mathsf { A } / \mu \mathsf { S }$  
➢ Frequency: 100 Hz

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/6c4d4a28f2a8b3604a752ae41d506ca1b206aa4c1dc7cfe21771dfc4ef87bf25.jpg)

115 VAC

CH1 VOUT ${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ $v _ { p _ { k - P K } } = 1 4 5 m v$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ $0 . 5 { \tt A } { - } 1 { \tt A } { - } 0 . 5 { \tt A }$  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/561b686d697363e34b4fb299fed4d1a57c814e32206f52f172ff91e8032bd62d.jpg)

265 VAC

CH1 VOUT ${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ $\mathsf { V } _ { \mathsf { P K - P K } } { = } 1 5 3 \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.5A-1 A-0.5 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## (10%-90%)

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/adf6f5cbf6ef779e93c23d2b10bd4e6460f627498e62cee194605f98310036af.jpg)

85 VAC

CH1 VOUT $\mathsf { V } _ { \mathsf { O U T } }$ $\mathsf { V } _ { \mathsf { P K - P K } } { = } 1 7 2 \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ $0 . 1 \mathsf { A } \mathsf { - } 0 . 9 \mathsf { A } \mathsf { - } 0 . 1 \mathsf { A }$  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/7cfd8149cbcf1a14e10a22cdbad434a9d91f497fa1e2d930612af48e93d8f261.jpg)

115 VAC

CH1 VOUT ${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ $\mathsf { V } _ { \mathsf { P K - P K } } { = } 1 6 5 \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ $0 . 1 \mathsf { A } \mathsf { - } 0 . 9 \mathsf { A } \mathsf { - } 0 . 1 \mathsf { A }$  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/84a5d61a66b295f29cb8577faf9b1059f600923ca7fae9ffc721aa8fa5cfb402.jpg)

230 VAC

CH1 VOUT $\mathsf { V } _ { \mathsf { O U T } }$ $\mathsf { V } _ { \mathsf { P K - P K } } { = } 1 6 3 \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { l } _ { \mathsf { O U T } }$

## Test Condition:

➢ $0 . 1 \mathsf { A } \mathsf { - } 0 . 9 \mathsf { A } \mathsf { - } 0 . 1 \mathsf { A }$  
➢ Slew Rate: 0.5 $\mathsf { A } / \mu \mathsf { S }$  
➢ Frequency: 100 Hz

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/2fdfddb0dd6798040eb509abc9fc9fc12660705b36f37e84e491d6023fe30694.jpg)

265 VAC

CH1 VOUT ${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ $\mathsf { V } _ { \mathsf { P K - P K } } { = } 1 6 5 \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ $0 . 1 \mathsf { A } \mathsf { - } 0 . 9 \mathsf { A } \mathsf { - } 0 . 1 \mathsf { A }$  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## 输出电压开机波形

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/f72c746859a814b962e677c365363a341773e8acaaa2f2074fcb51fb25c25829.jpg)

85 VAC

CH1 VOUT TRISE: 30mS

## Test Condition:

➢ No Load

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/e0bc68927b410ee1c18ffcb1fef089ad11c8e4f65aaf6f006d3b0dbb058eecac.jpg)

230 VAC

CH1 VOUT TRISE: 30mS

## Test Condition:

➢ No Load

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/d1d5eb3b9925b001451cf5dd75f184cc9b2a4d7e57a93da48df17da59758653a.jpg)

115 VAC

CH1 VOUT TRISE: 30mS

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/8a26278b8fc991368a4fb2694fa739f5490f60331db4c173da259da5e2b5edd7.jpg)

265 VAC

CH1 VOUT TRISE: 30mS

## Test Condition:

➢ Full Load

## 漏源极电压和漏极电流开机波形

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/a07c1ff490eaadd622d2029b49713222e3a53cd5f6d91047c82b80ff7c0b62a6.jpg)

85 VAC

CH1 VDS  
CH4 IDIMAX: 322mA

Test Condition:  
➢ No Load  
![](./素材/images/BPA8505D参考设计_5V1A_Flyback/c644c7d4a6dc36d3c667372f868752ff06c99e2e679d667793a4123b186946e1.jpg)

115 VAC

CH1 VDS  
CH4 ID IMAX: 466mA

Test Condition:  
➢ Full Load  
![](./素材/images/BPA8505D参考设计_5V1A_Flyback/ad117753dd298219c935ac3f5282c848fd9a95cb0e0b58fe57dcbf5baa9ba85f.jpg)

230 VAC

CH1 VDS  
CH4 IDIMAX: 334mA

Test Condition:  
➢ No Load  
![](./素材/images/BPA8505D参考设计_5V1A_Flyback/6ee13d670cf5f0bde0b679308d24668af931ec21fe4246c611bbc2e93c2db538.jpg)

265 VAC

CH1 VDS  
CH4 IDIMAX: 480mA

Test Condition:

➢ Full Load

## MOSFET

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/bd02cc5282e0b50039e7715318a6b0e4b7a8a5bcf76643e6cbdd023b48bb3e9b.jpg)

85 VAC

CH2 VDS  
CH4 ID

Test Condition:  
➢ No Load  
![](./素材/images/BPA8505D参考设计_5V1A_Flyback/6c3433356b0e96b7094ff29e505692f43448ba6d6656306cda4179b60f5b9d9d.jpg)

85 VAC

CH2 VDS  
CH4 ID

Test Condition:  
➢ Full Load  
![](./素材/images/BPA8505D参考设计_5V1A_Flyback/ae488368424b3bd6e9548e2c82249cefd1b21a186891aabc1f226276ff7e4f28.jpg)

265 VAC

CH2 VDS  
CH4 ID

Test Condition:  
➢ No Load  
![](./素材/images/BPA8505D参考设计_5V1A_Flyback/02e1e551de29bf218badb82b53423ab6328b3069b00b4dc7a02ac1ffc6d364e6.jpg)

265 VAC

CH2 VDS  
CH4 ID

Test Condition:

➢ Full Load

## MOSFET

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/01f4f2d3e9d0af8dd377a2b6cbddc547b36a60473f189f40b85f7d7b6b404b95.jpg)

85 VAC

CH2 VDS  
CH4 ID

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/d47e28d193a10a029cfeceb615faa183dd7c4c894ee0f6235c66a6f956f3b3a4.jpg)

115 VAC

CH2 VDS  
CH4 ID

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/a7ced399b756e1df2b04325f539645b9909d6a1dc04092d1a80f69939a029cdb.jpg)

230 VAC

CH2 VDS  
CH4 ID

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/f995626fe1e5c6708ec9402c96b1de40f9eac51cde674844e4770f26beea0c71.jpg)

265 VAC

CH2 VDS  
CH4 ID

<table><tr><td rowspan="2">项目</td><td colspan="2">85VAC</td><td colspan="2">265VAC</td></tr><tr><td>温度(°C)</td><td>温升(°C)</td><td>温度(°C)</td><td>温升(°C)</td></tr><tr><td>环境温度</td><td colspan="2">51.23</td><td colspan="2">51.08</td></tr><tr><td>BPA8505D (U1)</td><td>88.32</td><td>37.09</td><td>85.44</td><td>34.36</td></tr><tr><td>变压器绕组(T1)</td><td>78.85</td><td>27.62</td><td>78.53</td><td>27.45</td></tr><tr><td>变压器磁芯(T1)</td><td>74.55</td><td>23.32</td><td>74.76</td><td>23.68</td></tr><tr><td>续流二极管(D3)</td><td>85.36</td><td>34.13</td><td>84.57</td><td>33.49</td></tr><tr><td>整流桥(DB1)</td><td>62.29</td><td>11.06</td><td>56.76</td><td>5.68</td></tr><tr><td>输入电解电容(C2)</td><td>63.47</td><td>12.24</td><td>61.92</td><td>10.12</td></tr><tr><td>输出电解电容(C8)</td><td>68.57</td><td>17.34</td><td>68.32</td><td>17.24</td></tr></table>

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/2fee3fde17cbc1782293b47c4453b2a96088ebbcf5895e6984736232e91789f5.jpg)

## 测试说明

➢ 在温箱中进行测试  
➢ 电路板放在一个封闭的盒子内  
➢ 热电偶连接到各个测量点  
➢ 等测量点温度达到稳定后记录数据

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/d5103eca059a50d656f056d66115a4a6ac8886f192e858ac1076d3d27cd57dc8.jpg)

115VAC Line

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/a47dc0cff25d79f02cef5fc3c18dab6c221fc88bf686d2800d7b0e838e64a519.jpg)

230VAC Line

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/732377c050ff90550a3db8115144f5472b86cb7285e897fccc9a422b360e3154.jpg)

115VAC Neutral

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/fa8799323df31450d41a7e9fc64c864f4b465cc72741699066e50d34cc24df1e.jpg)

230VAC Neutral

<table><tr><td>差模</td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>+2kV</td><td>0</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>0</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>90</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>90</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>180</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>180</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>270</td><td>2</td><td>10</td><td>Pass</td></tr></table>

## 测试说明

➢ 按照GB/T17626.5和IEC61000-4-5的最新版本要求进行测试  
➢ 室温环境，230VAC输入，满载条件  
➢ 输入1.2/50us组合波浪涌电压  
➢ 每个测试点重复10次  
➢ 每次间隔时间1分钟  
➢ 试验时样机输出正常（符合A类标准）视为Pass

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/612ce70dc540c2da3a7723b5ff7c1ab7ff290b6e490a34ede89e9f71009433f4.jpg)

<table><tr><td>差模</td><td>电压</td><td>脉冲群持续时间</td><td>脉冲频率</td><td>测试时间</td><td>测试结果</td></tr><tr><td>L to N</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr></table>

## 测试说明

➢ 按照GB/T17626.4和IEC61000-4-4的最新版本要求进行测试  
➢ 室温环境，230VAC输入满载条件  
➢ 分别测试5kHz/100kHz/38kHz脉冲频率  
➢ 脉冲群周期为300ms  
➢ 每个测试条件测试时间120s  
➢ 试验时样机输出正常（符合A类标准）视为Pass

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/66e5ebde4bdc55fddd99e5f46f20a13120f69988d106ce8cde2e3b714e60b98c.jpg)

<table><tr><td>测试点</td><td>电压(V)</td><td>放电类型</td><td>放电次数</td><td>测试结果</td></tr><tr><td>Vo</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>+20kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-20kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+20kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-20kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr></table>

## 测试说明

➢ 按照GB/T17626.2和IEC61000-4-2的最新版本要求进行测试  
➢ 室温环境，230VAC输入满载条件  
➢ 每个测试点重复10次  
➢ 分别对输出正端和地进行空气放电  
➢ 试验时样机输出正常（符合A类标准）视为Pass

![](./素材/images/BPA8505D参考设计_5V1A_Flyback/793746d8d44b7a6efc948cc7c0f6cdc32e53814599c77cea5279d6ece3d5f246.jpg)

## THANK YOU FOR WATCHING
