![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/ed88f32529fdcdb70ebbb2340b0910a2a1ea8ca72d98914c42b356803df75e27.jpg)

## BPA8504D 参考设计

## (12V/150mA peak200mA)

上海晶丰明源半导体股份有限公司

Shanghai Bright Power Semiconductor Co., Ltd.

夏奇林

2021 2

## 内容

BPA8504D  
电源规格  
电路及实物图  
BOM  
PCB Layout  
性能测试数据

## 产品特点:

➢ 650V MOSFET  
》PWM控制模式，低输出纹波  
》内置软启动功能  
》集成高压启动、自供电电路  
〉低音频噪声

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/1d318b3c5704f48f3057b5cc9773839e4d0387b9b1ad54c45f94b7b40ac2ac1f.jpg)

## 应用领域:

》家用电器辅助电源  
》电机驱动辅助电源  
➢ IOT/ /  
》工业控制辅助电源

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/c88f402fec5779894cf446e4bdd625734046e57a040e4efe1f2c62ab18a8cba4.jpg)

## 电源规格

<table><tr><td>项目描述</td><td>符号</td><td>最小</td><td>典型</td><td>最大</td><td>单位</td><td>备注</td></tr><tr><td colspan="7">输入</td></tr><tr><td>电压</td><td> $V_{IN}$ </td><td>85</td><td>115/230</td><td>265</td><td> $V_{AC}$ </td><td></td></tr><tr><td>频率</td><td> $f_{LINE}$ </td><td>47</td><td>50/60</td><td>63</td><td>Hz</td><td></td></tr><tr><td colspan="7">输出</td></tr><tr><td>输出电压</td><td> $V_{OUT}$ </td><td>11.4</td><td>12</td><td>12.6</td><td>V</td><td>±5%</td></tr><tr><td>输出电流</td><td> $I_{OUT}$ </td><td>0</td><td>150</td><td>200</td><td>mA</td><td></td></tr><tr><td>输出电压纹波</td><td> $V_{RIPPLE}$ </td><td></td><td></td><td>100</td><td>mV</td><td>20MHz带宽</td></tr><tr><td>连续输出功率</td><td> $P_{OUT}$ </td><td></td><td>1.8</td><td></td><td>W</td><td></td></tr><tr><td colspan="7">效率</td></tr><tr><td>待机功耗</td><td> $P_{STDBY}$ </td><td></td><td></td><td>140</td><td>mW</td><td>230VAC,包含假负载</td></tr><tr><td>满载效率</td><td>η</td><td>69</td><td></td><td></td><td>%</td><td></td></tr><tr><td colspan="7">环境</td></tr><tr><td>传导EMI</td><td></td><td colspan="4">满足CISPR22/EN55022 Class B,至少6dB 裕量</td><td></td></tr><tr><td>Surge</td><td></td><td></td><td>2</td><td></td><td>kV</td><td>差模</td></tr><tr><td>EFT</td><td></td><td></td><td>4</td><td></td><td>kV</td><td>5kHz/100kHz/38kHz</td></tr><tr><td>ESD</td><td></td><td></td><td>15</td><td>20</td><td>kV</td><td>空气放电</td></tr><tr><td>工作环境温度</td><td> $T_{AMP}$ </td><td>0</td><td></td><td>50</td><td>°C</td><td></td></tr></table>

## 电路及实物图

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/1eff8bd6251886d9938a2506ac22af9ba75cff217a7275475c43a32c3838b914.jpg)

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/fbe32df841fa78c1a4eb48c83a3dc866da672db19417e3ef1ff4b114abe8d8d5.jpg)

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/f116efe7dfa21ba979346dddd15449c49e3bb4fa9114f2ff5f8406b97ddd34e7.jpg)

<table><tr><td>序号</td><td>元件标号</td><td>参数描述</td><td>封装尺寸</td><td>数量</td></tr><tr><td>1</td><td>PCB</td><td>CEM-1, 单面板</td><td>81mm*28mm</td><td>1</td></tr><tr><td>2</td><td>F1</td><td>2W, 10R保险丝电阻</td><td>DIP</td><td>1</td></tr><tr><td>3</td><td>D1,D2,D3,D4</td><td>1N4007, 1A/1000V</td><td>DO-35</td><td>4</td></tr><tr><td>4</td><td>D5,D6</td><td>ES1J, 1A/600V, trr=35ns</td><td>SMA</td><td>2</td></tr><tr><td>5</td><td>L1</td><td>2.2mH, 工字电感</td><td>∅6*8mm</td><td>1</td></tr><tr><td>6</td><td>L3</td><td>1.5mH, 工字电感, IRMS=300mA</td><td>∅10*12mm</td><td>1</td></tr><tr><td>7</td><td>C2, C3</td><td>6.8uF/400V, 电解电容</td><td>∅8*12mm</td><td>2</td></tr><tr><td>8</td><td>C5</td><td>10uF/50V, 电解电容</td><td>∅5*12mm</td><td>1</td></tr><tr><td>9</td><td>C6</td><td>330uF/35V, 电解电容</td><td>∅10*16mm</td><td>1</td></tr><tr><td>10</td><td>C7</td><td>1uF/50V, X7R, 瓷片电容</td><td>SMD0805</td><td>1</td></tr><tr><td>11</td><td>C4,C8</td><td>100nF/50V, X7R, 瓷片电容</td><td>SMD0805</td><td>2</td></tr><tr><td>12</td><td>R1</td><td>2K, ±1%</td><td>SMD0805</td><td>1</td></tr><tr><td>13</td><td>R2</td><td>12.4K, ±1%</td><td>SMD0805</td><td>1</td></tr><tr><td>14</td><td>R3</td><td>3.9K, ±5%</td><td>SMD0805</td><td>1</td></tr><tr><td>15</td><td>U1</td><td>BPA8504D, SOP7</td><td>SOP7</td><td>1</td></tr><tr><td></td><td></td><td></td><td>Total</td><td>21</td></tr></table>

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/aaad1875ffe5a1de38a576f57f3806414edabd325b904d015f89ff4f07ad5450.jpg)

37mW  
![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/5fabba30b9a4bb0de3317322c55240c8f9b78bb08178b496b4589297babd1ee6.jpg)

输入电压

效率测试(100%负载为0.2A测试)  
![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/98d926421629b0b47095038cc4fa2528250aa97c855d4676906482425029d25a.jpg)

## 输出电压调整率

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>12.063</td><td>12.020</td><td>12.064</td><td>12.061</td><td>12.070</td><td>12.070</td><td>12.06</td><td>0.41%</td></tr><tr><td>20%</td><td>11.860</td><td>11.855</td><td>11.853</td><td>11.845</td><td>11.845</td><td>11.840</td><td>11.85</td><td>0.17%</td></tr><tr><td>40%</td><td>11.870</td><td>11.870</td><td>11.865</td><td>11.860</td><td>11.853</td><td>11.850</td><td>11.86</td><td>0.17%</td></tr><tr><td>60%</td><td>11.893</td><td>11.895</td><td>11.896</td><td>11.880</td><td>11.880</td><td>11.876</td><td>11.89</td><td>0.17%</td></tr><tr><td>80%</td><td>11.870</td><td>11.865</td><td>11.865</td><td>11.860</td><td>11.864</td><td>11.860</td><td>11.86</td><td>0.08%</td></tr><tr><td>100%</td><td>11.810</td><td>11.806</td><td>11.806</td><td>11.808</td><td>11.810</td><td>11.810</td><td>11.81</td><td>0.03%</td></tr><tr><td>平均值</td><td>11.89</td><td>11.89</td><td>11.89</td><td>11.89</td><td>11.89</td><td>11.88</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>2.13%</td><td>1.80%</td><td>2.17%</td><td>2.13%</td><td>2.19%</td><td>2.19%</td></tr></table>

◼ 计算方法：调整率=100%\*(最大值-最小值)/平均值,100%负载为Ipeak电流测试  
测试条件：带3.9kΩ假负载（\~37mW）

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>230</td><td>265</td></tr><tr><td>200mA</td><td>11.8V</td><td>11.8V</td><td>11.8V</td><td>11.8V</td></tr><tr><td>220mA</td><td>10.2V</td><td>10.4V</td><td>11.5V</td><td>11.7V</td></tr><tr><td>240mA</td><td>7.45V</td><td>7.75V</td><td>8.8V</td><td>9.3V</td></tr><tr><td>250mA</td><td>OCP</td><td>OCP</td><td>7.7V</td><td>8.2V</td></tr></table>

## 输出电压纹波

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/482a4598b1aa03e4d07452c1471e75819962b92ce23de55290beaac6ac8ab614.jpg)

85 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ Ripple $V _ { \mathsf { P K - P K } } { = } 5 8 . 2 \mathsf { m V }$

## Test Condition:

➢ Peak Load

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/544ca8673878a9844f3fe63eb29f92c2616c24a81414528eb23a2c07223731bf.jpg)

230 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ Ripple VPK-PK=71.3mV

## Test Condition:

➢ Peak Load

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/c0cd699720732f80e2eb4a00317020ee0591100f84a0fb259aa0e62adb2c8875.jpg)

115 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ Ripple $V _ { P K - P K } = 6 5 . 2 m v$

## Test Condition:

➢ Peak Load

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/767c4a804dbd0f8e3a6c0556c72afa24ba9ff19369f6cfd15dbb1a4fa7daa051.jpg)

265 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ Ripple $V _ { P K - P K } = 7 8 . 1 m V$

## Test Condition:

➢ Peak Load

## (50%-100% 100% Ipeak)

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/56b4650cd3bbd1defa7eb9a7c4869e7a8cff859bd5ecf1257270fc81b906fd6f.jpg)

85 VAC

CH1 VOUT ${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ $V _ { \mathsf { P K - P K } } { = } 1 4 4 \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.1 A-0.2 A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/accf74dd0963c62e165aac6b289efd7c0e4e4f0a91bda15e991984e834d5810f.jpg)

230 VAC

CH1 VOUT $\mathsf { V } _ { \mathsf { O U T } }$ $\mathsf { V } _ { \mathsf { P K - P K } } \equiv 1 6 2 \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { l } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.1 A-0.2 A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/cea3849e8bd54c8358e5c6ea4e8656bc06fb0983af82d47cb539197479d68d49.jpg)

115 VAC

CH1 VOUT ${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 1 4 9 m v$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.1 A-0.2 A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/29b009072571bb2613137ef58bf037b3cf274946f4b6d46dd003053b806c6d4e.jpg)

265 VAC

CH1 VOUT ${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ $V _ { p | c - P K } = 1 6 4 m v$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.1 A-0.2 A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## (10%-90% 100% Ipeak)

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/c87a3560e5c66e92eb6583a6b9e7759342ee9e13d6579e52c2ae0e8a9044ba34.jpg)

85 VAC

CH1 VOUT $\mathsf { V } _ { \mathsf { O U T } }$ $\mathsf { V } _ { \mathsf { P K - P K } } { = } 2 6 5 \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.02A-0.18 A-0.02A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/02f8f6bad6be7c5007ec311f67ffa96da8ab433796638fc241b1cec829dcf455.jpg)

115 VAC

CH1 VOUT ${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ $\mathsf { V } _ { \mathsf { P K - P K } } { = } 2 7 9 \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.02A-0.18 A-0.02A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/cbf89c69f3b3ba94e2aab566b31cde140c6e1d2fb55865393f5882795d4615c9.jpg)

230 VAC

CH1 VOUT $\mathsf { V } _ { \mathsf { O U T } }$ $\mathsf { V } _ { \mathsf { P K - P K } } { = } 3 0 5 \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { l } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.02A-0.18 A-0.02A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/529f49065668335a580968bbed57bed3cf52113ede29a757635ad32dc5fe4713.jpg)

265 VAC

CH1 VOUT $\mathsf { V } _ { \mathsf { O U T } }$ $\mathsf { V } _ { \mathsf { P K - P K } } { = } 3 2 7 \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.02A-0.18 A-0.02A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## 输出电压开机波形

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/bbaa5c9b13923b6f36f37cb6765b6158bef747233fbecbf876360bbd590c7652.jpg)

85 VAC0

CH1 VOUT TRISE: 28mS

## Test Condition:

➢ No Load

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/46026c21bb6328336c2951f7655e8b6d1543839013249189f1a1168656df20cf.jpg)

230 VAC2

CH1 VOUT TRISE: 28 mS

## Test Condition:

➢ No Load

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/bfd2e222d8e426969ecccfdbb59ab7b795b6270ae383af9f7b1b73d0acd6d0c3.jpg)

115 VAC1

CH1 VOUT TRISE: 63 mS

## Test Condition:

➢ Peak Load

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/c22186398cfa421716ba7971bf44d23b373d8c481c669b710218a58419ef911a.jpg)

265 VAC3

CH1 VOUT TRISE: 48mS

## Test Condition:

➢ Peak Load

## 漏源极电压和漏极电流开机波形

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/2634135df204a16b1967cde704b7a2848132b692f361761b7bfbf44b091bd5ab.jpg)

85 VAC

CH3 VDS  
CH4 IDIMAX: 487mA

Test Condition:  
➢ No Load  
![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/904ecab3c6b3191caa2b3c46bba81155189f52b522f8e8427f611e58994f909b.jpg)

115 VAC

CH3 $\mathsf { V } _ { \mathsf { D } \mathsf { S } }$  
CH4 ID IMAX: 530m A

Test Condition:  
➢ Peak Load  
![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/172872b3e94bcb9a0020430b6614cdab601012befe11d5e23a2d34be3a976f96.jpg)

230 VAC

CH3 VDS  
CH4 IDIMAX: 522m A

Test Condition:  
➢ No Load  
![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/d34b8bbf587e0f6879a89b06e2a4a6a2ede6e4d7d40da66d9f7c3fbbf2ca4440.jpg)

265 VAC

CH3 VDS  
CH4 IDIMAX: 682m A

Test Condition:

➢ Peak Load

## 电感电流开机波形

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/1f464d05c7e7bc10014aaad346a73a01a73bb092f71babee9390659437857eba.jpg)

85 VAC

➢ CH4 IL  
IMAX : 342mA

Test Condition:

➢ No Load

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/34bfef0abddd5f7521fbf03abad77f2943f1c49e6d06d9e80607a21771182997.jpg)

115 VAC

CH4 IL IMAX : 369mA

Test Condition:

➢ Peak Load

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/1da028b514bba47f71db967ff0c40500007efda565c2226a0e4a6e26ac0ab05a.jpg)

230 VAC

CH4 IL IMAX : 377mA

Test Condition:

➢ No Load

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/b53aa03ffe5e43b0be8ba631b134c279259ce0b65ec83f761d026aedb4426050.jpg)

265 VAC

CH4 IL IMAX : 490mA

Test Condition:

➢ Peak Load

## 电感电流波形

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/a76d5d1b077e25c23b81b42c00e0e6cbc8c9244d90a120631795e3460ce70b9f.jpg)

85 VAC

CH4 IL

Test Condition:

➢ No Load

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/bd5aabdef58967548c6aa44c18875f6f0730db3d8a21b1440e514cc9bc131205.jpg)

85 VAC

CH4 IL

Test Condition:

➢ Peak Load

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/9012c952622776319cac2b402209bc5249f603977428ca911070e51b1134134e.jpg)

230 VAC

CH4 IL

Test Condition:

➢ No Load

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/ef26337a90d5621416d9e13fc164abf9e5f6b1028ace784827c609bc80632214.jpg)

265 VAC

CH4 IL

Test Condition:

➢ Peak Load

## MOSFET

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/a0d4bcd0ad08d0e12e0f9f92cf2b942e95b936510b798713e0e25548db385bc9.jpg)

85 VAC

CH3 VDS  
CH4 ID

Test Condition:  
➢ No Load  
![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/9d8b4d0255906bd1229a6e89f072652bf46e0319ff77e22cbd342ef2848a3a0b.jpg)

85 VAC

CH3 VDS  
CH4 ID

Test Condition:  
➢ Peak Load  
![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/6d1ec6fe96ea01dfa9135219ff6028346e751127e6421bbca56227e25d89fdca.jpg)

230 VAC

CH3 VDS  
CH4 ID

Test Condition:  
➢ No Load  
![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/5848e19a73101674b2737f4fcbf9615bfab71563c775b264849c158d2db04f20.jpg)

265 VAC

CH3 VDS  
CH4 ID

Test Condition:

➢ Peak Load

## MOSFET

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/e2f9921584d1d9410a10e13226d80ba36403f64d5163107d5e5f23014b2783da.jpg)

85 VAC

CH3 VDS  
CH4 ID

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/01b54407f3d3223135a82503cd7c757cc9a12e2a83731400775a7c83be6fd5fc.jpg)

230 VAC

CH3 VDS  
CH4 ID

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/e5ccedd0f024331ca026aa3333f0bb9bfe5e66ba4a5cd8704912cce2e91280b8.jpg)

115 VAC

CH3 VDS  
CH4 ID

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/e3452748f9dc18b33c22056efdfea63a569eb5907a559b5ff27e9c8bbaa6bb7a.jpg)

265 VAC

CH3 VDS  
CH4 ID

## 温升测试

<table><tr><td rowspan="2">项目</td><td colspan="2">85VAC</td><td colspan="2">265VAC</td></tr><tr><td>温度(°C)</td><td>温升(°C)</td><td>温度(°C)</td><td>温升(°C)</td></tr><tr><td>环境温度</td><td colspan="2">36.18</td><td colspan="2">37.23</td></tr><tr><td>BPA8504D (U1)</td><td>61.99</td><td>25.81</td><td>76.82</td><td>39.59</td></tr><tr><td>电感绕组(L3)</td><td>50.4</td><td>14.22</td><td>57.29</td><td>20.06</td></tr><tr><td>电感磁芯(L3)</td><td>48.88</td><td>12.7</td><td>55.3</td><td>18.07</td></tr><tr><td>续流二极管(D5)</td><td>58.16</td><td>21.98</td><td>66.98</td><td>29.75</td></tr><tr><td>整流桥(D1-D4)</td><td>39.94</td><td>3.76</td><td>39.78</td><td>2.55</td></tr><tr><td>输入电解电容(C3)</td><td>46.97</td><td>10.79</td><td>50.83</td><td>13.6</td></tr><tr><td>输出电解电容(C6)</td><td>44.82</td><td>8.64</td><td>48.47</td><td>11.24</td></tr></table>

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/dc7cc78a5a326dc7aa4845b42bcf295abc006c1e189243bb340760f556156cbe.jpg)

## 测试说明

➢ 在密闭纸箱中进行测试  
➢ 输出接60Ω水泥负载  
➢ 热电偶连接到各个测量点  
➢ 等测量点温度达到稳定后记录数据

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/68948600429246ef93516401508e384e10eba96312167bbbea421db6526cd649.jpg)

115VAC Line

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/38a9b75fc23a115791725d99bc242a2195c97b828897b0286c8cfd91d4e087d7.jpg)

230VAC Line

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/0e99f02bfdaec383f5b2d1712e3b87bd54f453a08182fe761c7ce1df4d3f8106.jpg)

115VAC Neutral

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/eaf6c800d5c5535c9898d84ff370ddb3bc81b36cfc63d9ef5cdfbd17e8247095.jpg)

230VAC Neutral

<table><tr><td>差模</td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>+2kV</td><td>0</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>0</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>90</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>90</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>180</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>180</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>270</td><td>2</td><td>10</td><td>Pass</td></tr></table>

## 测试说明

➢ 按照GB/T17626.5和IEC61000-4-5的最新版本要求进行测试  
➢ 室温环境，230VAC输入，满载条件  
➢ 输入1.2/50us组合波浪涌电压  
➢ 每个测试点重复10次  
➢ 每次间隔时间1分钟  
➢ 试验时样机输出正常（符合A类标准）视为Pass

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/88ab81848aa58d467c4c0215685461bfcbf59eed43d36e4a86a02504a99c1962.jpg)

<table><tr><td>差模</td><td>电压</td><td>脉冲群持续时间</td><td>脉冲频率</td><td>测试时间</td><td>测试结果</td></tr><tr><td>L to N</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr></table>

## 测试说明

➢ 按照GB/T17626.4和IEC61000-4-4的最新版本要求进行测试  
➢ 室温环境，230VAC输入满载条件  
➢ 分别测试5kHz/100kHz/38kHz脉冲频率  
➢ 脉冲群周期为300ms  
➢ 每个测试条件测试时间120s  
➢ 试验时样机输出正常（符合A类标准）视为Pass

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/56ad0860d93e32a719b64b23a0bfb277b418d665f6e63bb3bcd0ff29b406c116.jpg)

<table><tr><td>测试点</td><td>电压(V)</td><td>放电类型</td><td>放电次数</td><td>测试结果</td></tr><tr><td>Vo</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>+20kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-20kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+20kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-20kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr></table>

## 测试说明

➢ 按照GB/T17626.2和IEC61000-4-2的最新版本要求进行测试  
➢ 室温环境，230VAC输入满载条件  
➢ 每个测试点重复10次  
➢ 分别对输出正端和地进行空气放电  
➢ 试验时样机输出正常（符合A类标准）视为Pass

![](./素材/images/BPA8504D参考设计_12V150mA_Peak200mA/4874f2e93ee4e9b2f1dcb65b160192dee735a8ecdbb18a52a86e82804ba2c970.jpg)

## THANK YOU FOR WATCHING
