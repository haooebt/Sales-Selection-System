![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/190c61561a73a60809a68e4f1b2d8c0b672c7089ad0a3560584f2cfd71027be6.jpg)

## BPA8504D&LNK304对比测试

## (5V/0.2A@85\~265Vac)

上海晶丰明源半导体股份有限公司

Shanghai Bright Power Semiconductor Co., Ltd.

YSM

时间：2021年1月

## 电气参数对比

<table><tr><td></td><td>BPA8504D</td><td>LNK304DG</td></tr><tr><td>开关频率</td><td>45KHz</td><td>66KHz</td></tr><tr><td>Mosfet BV</td><td>650V</td><td>700V</td></tr><tr><td> $R_{DS\_ON}$ </td><td>17Ω</td><td>24Ω</td></tr><tr><td>限流点</td><td>280mA</td><td>257mA</td></tr><tr><td>软启动</td><td>有</td><td>无</td></tr><tr><td>输入过压保护</td><td>无</td><td>无</td></tr><tr><td>输入欠压保护</td><td>无</td><td>无</td></tr><tr><td>输出过压保护</td><td>自动重启</td><td>无</td></tr><tr><td>过载保护</td><td>有</td><td>有</td></tr><tr><td>封装</td><td>SOP7</td><td>DIP8B, SMD8B, SO8C</td></tr></table>

## 测试数据对比

电源规格：85\~265Vac输入，5V/0.2A输出

<table><tr><td colspan="2"></td><td>BPA8504D</td><td>LNK304DG</td><td></td></tr><tr><td colspan="2">待机功耗</td><td>89mW</td><td>77mW</td><td>230Vac输入</td></tr><tr><td rowspan="2">满载效率</td><td>115Vac</td><td>64.8%</td><td>62.6%</td><td></td></tr><tr><td>230Vac</td><td>59.3%</td><td>57.3%</td><td></td></tr><tr><td rowspan="2">输出电压纹波</td><td>85Vac</td><td>41.4mV</td><td>52.8mV</td><td></td></tr><tr><td>265Vac</td><td>50.9mV</td><td>111.2mV</td><td></td></tr><tr><td rowspan="2">动态负载性能</td><td>50%-100%</td><td> $207mV_{PK\_PK}$ </td><td> $236mV_{PK\_PK}$ </td><td rowspan="2">265Vac输入</td></tr><tr><td>10%-90%</td><td> $299mV_{PK\_PK}$ </td><td> $303mV_{PK\_PK}$ </td></tr><tr><td rowspan="2">MOSFET应力</td><td> $V_{DS}$ </td><td>390V</td><td>390V</td><td rowspan="2">265Vac输入</td></tr><tr><td> $I_{DS}$ </td><td>0.6A</td><td>0.616A</td></tr><tr><td rowspan="2">续流二极管应力</td><td>VRR</td><td>380V</td><td>390V</td><td></td></tr><tr><td> $I_{PK}$ </td><td>0.388A</td><td>0.609A</td><td></td></tr><tr><td colspan="2">温升测试(环温50°C)</td><td>93.7°C</td><td>86.4°C</td><td></td></tr><tr><td colspan="2">传导EMI</td><td>&gt;6dB裕量</td><td>&gt;6dB裕量</td><td></td></tr><tr><td colspan="2">Surge</td><td>Pass</td><td>Pass</td><td>差模2kV</td></tr><tr><td colspan="2">EFT群脉冲</td><td>Pass</td><td>Pass</td><td>4kV,5kHz/38kHz/100kHz</td></tr><tr><td colspan="2">ESD</td><td>Pass</td><td>Pass</td><td>18kV空气放电</td></tr></table>

## 电路及实物图

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/aeabf07900a929797e966b5dc7cd5ceb0a77c50e231be983674e99de9183349c.jpg)

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/b76d0943120ba7a2b3dfcc2c94db5f5d084ad6ea9c386496aa4081238502f994.jpg)

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/86647d5c5a9c5aaf2ba69b535c94ecbf08e6f492d245619de2fdc7293bbcb67e.jpg)

空载功耗  
![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/ca5bc87be4b32d8e8c406819be9f32c51abe30268ca7474acc60a59a3ef688b0.jpg)

输入电压 (Vac)

效率测试  
![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/7f2668c04b271eb99fff0b00a317519f48be471932b391f21d18462b4fe85839.jpg)

负载

## 输出电压调整率

BPA8504D

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>5.26</td><td>5.27</td><td>5.27</td><td>5.27</td><td>5.27</td><td>5.28</td><td>5.27</td><td>0.21%</td></tr><tr><td>20%</td><td>5.06</td><td>5.06</td><td>5.06</td><td>5.06</td><td>5.06</td><td>5.05</td><td>5.06</td><td>0.20%</td></tr><tr><td>40%</td><td>5.03</td><td>5.03</td><td>5.04</td><td>5.03</td><td>5.04</td><td>5.03</td><td>5.03</td><td>0.18%</td></tr><tr><td>60%</td><td>5.02</td><td>5.02</td><td>5.03</td><td>5.01</td><td>5.03</td><td>5.02</td><td>5.02</td><td>0.38%</td></tr><tr><td>80%</td><td>5.01</td><td>5.01</td><td>5.02</td><td>5.01</td><td>5.03</td><td>5.02</td><td>5.02</td><td>0.44%</td></tr><tr><td>100%</td><td>5.00</td><td>5.01</td><td>5.02</td><td>5.01</td><td>5.03</td><td>5.02</td><td>5.01</td><td>0.62%</td></tr><tr><td>平均值</td><td>5.06</td><td>5.06</td><td>5.07</td><td>5.07</td><td>5.07</td><td>5.07</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>5.32%</td><td>5.14%</td><td>4.89%</td><td>5.05%</td><td>4.83%</td><td>5.09%</td></tr></table>

计算方法：调整率=100%\*(最大值-最小值)/平均值  
测试条件： $\mathsf { R } _ { \mathrm { d u m m y } } = 1 . 8 mathsf { K o h m }$

LNK304DG

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>5.74</td><td>5.74</td><td>5.74</td><td>5.75</td><td>5.76</td><td>5.77</td><td>5.75</td><td>0.59%</td></tr><tr><td>20%</td><td>5.27</td><td>5.27</td><td>5.27</td><td>5.27</td><td>5.27</td><td>5.27</td><td>5.27</td><td>0.04%</td></tr><tr><td>40%</td><td>5.23</td><td>5.23</td><td>5.23</td><td>5.22</td><td>5.23</td><td>5.22</td><td>5.22</td><td>0.10%</td></tr><tr><td>60%</td><td>5.21</td><td>5.21</td><td>5.20</td><td>5.20</td><td>5.20</td><td>5.20</td><td>5.20</td><td>0.10%</td></tr><tr><td>80%</td><td>5.20</td><td>5.20</td><td>5.20</td><td>5.19</td><td>5.20</td><td>5.19</td><td>5.20</td><td>0.21%</td></tr><tr><td>100%</td><td>5.17</td><td>5.18</td><td>5.18</td><td>5.18</td><td>5.17</td><td>5.18</td><td>5.17</td><td>0.12%</td></tr><tr><td>平均值</td><td>5.30</td><td>5.30</td><td>5.30</td><td>5.30</td><td>5.30</td><td>5.30</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>10.75%</td><td>10.56%</td><td>10.64%</td><td>10.77%</td><td>11.14%</td><td>11.24%</td></tr></table>

## 输出电压纹波

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/c90142095c8edf1ad2225ab26201dc98608ba6514f8809447ca1c8e04e516849.jpg)

85 VAC  
![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/0cd69cd78dface55861f0130f95ad6bcc813a6d75d3dc4fd00f12cbfca7a64f6.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/aa18f10cfadd24da3da5aa46a21b918e008f6f3c4d92950f3493ae37a300facd.jpg)

85 VAC  
![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/31606e66e76e57437d4ec00dac75af50be7287ae80968bc7085d3839e3e74f3f.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/c39b6d41f1a9e5280e78369cfb692e1610e11af85f970573c0dc07ac61e306cf.jpg)

265 VAC  
![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/86fccba1564119b2ac2f7ab5d1df96b4c9455ff81ad8c3171f01a38c57ec2470.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/2177401bdf48e812301f53e95ebf94f8fb6d1955423d00309c08e03cb0cb59ef.jpg)

265 VAC  
![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/444754d661c882d25aeab4da84d5c602230563475d30df5de78cb7faef110a93.jpg)  
Test Condition:  
➢ Full Load

## (50%-100%)

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/1e94ea5d0d9c00625627d344132f763af848b6c9403eeb65b08a0266977dbc3d.jpg)

85 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 1 9 9 m v$  
CH3 ${ \mathsf I } _ { 0 \mathsf U \top }$

## Test Condition:

➢ 0.1 A-0.2 A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/9b1ca9b61021a9c040063a3a27ec2a45aedb0a52dc11a1e634ab57c7db676491.jpg)

265 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $v _ { p _ { \vert k - P K } } = 2 0 7 ~ \mathsf { m V }$

$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.1 A-0.2 A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/7e9361a1acceb87f66b772a7bb2a2ae7d0d3e32ba40c1b244333bdb73f9fde4c.jpg)

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/1a0a76391aacb2f7c9aaf88adbb422936807d0cbda249407db5768d68649ecca.jpg)

85 VAC

$\mathsf { C H 1 } \mathsf { V } _ { \mathsf { O U T } }$ $\mathsf { V } _ { \mathsf { P K - P K } } { = } 1 4 1 \mathsf { m V }$

$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.1 A-0.2 A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

265 VAC

${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ $V _ { \mathsf { P K - P K } } = 2 3 6 ~ \mathsf { m V }$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.1 A-0.2 A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## (10%-90%)

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/28362261f9c46b77856e9b1f0d5d48b30edfd7a17f83e7fd2811637a054bd99e.jpg)

85 VAC

CH1 VOUT $\mathsf { C H 1 } \mathsf { V } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 2 8 9 m v$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U } \mathsf { T } } }$

## Test Condition:

➢ 0.02A-0.2 A-0.02 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/fec726ffc17a132674a9e162c4ce36f365e2233dfe33659dd2c8b2de57700d40.jpg)

85 VAC

${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ CH1 VOUT $V _ { P K - P K } = 2 0 3 ~ \mathsf { m V }$  
CH3 IOUT $\mathsf { C H 3 } \mathsf { I _ { O U T } }$

## Test Condition:

➢ 0.02A-0.2 A-0.02 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/dceead9e06151f39ca4a9f5eb20019e48dd13c008fc31bcc4b267055bd88b328.jpg)

265 VAC

CH1 V $V _ { P K - P K } = 2 9 9 m v$  
CH3 IOUT

## Test Condition:

➢ 0.018A-0.16 A-0.018 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/6322aaa11173a9b64888476de00062739393388574846c638062040fcb1f7096.jpg)

265 VAC

${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 3 0 3 ~ \mathsf { m V }$  
CH3 IOUT

## Test Condition:

➢ 0.02A-0.2 A-0.02 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## 输出电压开机波形

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/704736bcc2d2935836253f24830fad8e24a05bb350f22200111fbe2ea3cb75ff.jpg)

85 VAC  
![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/630aaf75af535309e1d35939626ca18504772df0934de4e8ea9ff0e8f8d040fc.jpg)

Test Condition:  
➢ Full Load

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/5005ed16b872b2e132acf92011957a09524776714e2ed2ed9c5f1c459345b463.jpg)

85 VAC  
![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/4658e9c1f0c51461a3f68a82802b1847e3edcc06aad99b57ad6a1ba0ebceaf51.jpg)

Test Condition:  
➢ Full Load

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/2c6d4cede22910e716eab1aafd4a11cfd5ec0e8bde35221ef02b97b55b517430.jpg)

265 VAC  
![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/6b1d263eb23430cc0421e36d37693895d2b80ae9fb49798cf57015ba1d2edc39.jpg)

Test Condition:  
➢ Full Load

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/48e0f8c676f104ab214fe58654e492ed1c826eba10b93a33b5d353cf91ac327a.jpg)

265 VAC  
![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/9afd11d67b28ddb46f2209f7d90754bd24367b951c0a5b21bd66804bb129efb2.jpg)

Test Condition:  
➢ Full Load

## MOSFET

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/649d3217d4486fd34d0686d5253c912a589dd8f9ef0d875358261c6dc11a6f8b.jpg)

85 VAC  
![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/019dadd7d252464098a9fc9ace3b9964ca6440ef66ea78d47c4177460ece092e.jpg)

Test Condition:  
➢ Full Load

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/143d8a124fb4189cc51795912c0767d2ec4e88e73e5376385d510af5cecd4173.jpg)

85 VAC  
![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/e05dc87bac1783aae82e3c1f705314d3df2d98471d0f154ad0aa9cd394c40066.jpg)

Test Condition:  
➢ Full Load

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/d839dfacac027d5f699d9cfaf57fbfc3d2351edd781c30f4b8e0d168a77cea6a.jpg)

265 VAC  
![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/c70ac717c649cb9c2ad7cb2482b51523c81b32500d575492d22d98ca6a650c55.jpg)

Test Condition:  
➢ Full Load

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/f1f2c7a5791e26dc4e6ac51dac5a76a9e64aa92bc6b319147cd6a618224988a3.jpg)

265 VAC  
![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/68bf38f3cfa666c9f8fbe0bf6278bde07716122c690eb7645ffa3a4e75181219.jpg)

Test Condition:  
➢ Full Load

## MOSFET

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/595259495682ac547a8b58074c5875fd6f64ed31c81c2602b74f614fe1a505e5.jpg)

85 VAC  
![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/72cd17d07ea06dec6f8eb237d292d9193ac25083faebc8dd8891e948e4a13c8e.jpg)

Test Condition:  
➢ Full Load

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/de1a3b0a9f1d817d1b54da4f2351a5d0d30e72590456773f7c9697f2346ed8f5.jpg)

85 VAC  
![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/98a15a1da4c3c3d507017b8fa9c3aefecaa8c16eff36970f34d067b77562c679.jpg)

Test Condition:  
➢ Full Load

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/784b3a65f095c6dd2b2aaba8f315746e9c22d2abee8b086edcf6f2dd27289883.jpg)

265 VAC  
![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/8f0ae7208af34949ce36c16e7e5186dc821a572865f4344b9e96e5207c867c2a.jpg)

Test Condition:  
➢ Full Load

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/82c1c509b24d2cffe058556520e5def8bd82eea4ff0a3d993c89cbf1eba7ae2a.jpg)

265 VAC  
![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/5ff0d77ddacbad298202711379e2c18529172a259884f74191730f1441c2d5e2.jpg)

Test Condition:  
➢ Full Load

## 续流二极管开机波形

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/5659644f258a426f1b3c20a115657d13e5e843a987fe98852380e223b6f7150a.jpg)

85 VAC

CH4 VR  
CH3 IF

$$
V _ {R \_ M A X} = 1 2 0 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 0. 3 2 4 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/ee759636393cc70ef39623875edb16642f684ac5f00cf5c593cb8ffa89024851.jpg)

85 VAC

CH4 VR  
CH3 IF

$$
V _ {R \_ M A X} = 1 1 8 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 0. 3 8 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/efdd277c8cd0bf29f0e41b49eb9ec52c817dc5581af8a10f2f7020712239dbe7.jpg)

265 VAC

CH4 VR  
CH3 IF

$$
V _ {R \_ M A X} = 3 8 0 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 0. 3 8 8 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/104622fc5762cbb728cc10d428e4e814779abaf959abe5efb3f11edde7aef56f.jpg)

265 VAC

CH4 VR  
CH3 IF

$$
V _ {R \_ M A X} = 3 9 0 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 0. 6 0 9 \mathrm{A}
$$

## Test Condition:

➢ Full Load

## 续流二极管稳态波形

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/1b21e7e014a27ac8518f367f8f02f7382564621881349d101b2aa4efb77fb53e.jpg)

85 VAC

CH4 VR  
CH3 IF

$$
V _ {R \_ M A X} = 1 2 7 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 0. 2 8 7 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/55fcd1709bc3441a156e9a46589b408c31578699d34c4b7f8c2eeb712f7f5cb7.jpg)

85 VAC

CH4 VR  
CH3 IF

$$
V _ {R \_ M A X} = 1 2 2 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 0. 2 7 3 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/df6944a18455793495579942766defa8aa4215b8b9067a687ef3305d3b675bcf.jpg)

265 VAC

CH4 VR  
CH3 IF

$$
V _ {R \_ M A X} = 3 9 0 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 0. 2 9 4 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/64a1f17299ba700a0d855706b091eb6da7aab6acb462195c4659754fa60b12ee.jpg)

265 VAC

CH4 VR  
CH3 IF

$$
V _ {R \_ M A X} = 3 9 0 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 0. 3 9 9 \mathrm{A}
$$

## Test Condition:

➢ Full Load

## MOSFET

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/0ce546ab06a20049a0c5a8d9f18757e748c2aa8d9a4ee13ab08b06263e427116.jpg)

85 VAC

CH4 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 1 3 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 5 1 1 \mathrm{A} \end{array}
$$

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/ea5d0a3f737690def508458e8f155af82bcace1c52baef122e396e99ec651634.jpg)

85 VAC

CH4 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 1 2 8 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 5 0 2 \mathrm{A} \end{array}
$$

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/2ff2f597f6c24a91f5bb34aab69b3edadd914529d3a684b5e0ba1de031f55841.jpg)

265 VAC

CH4 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 3 9 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 6 2 9 \mathrm{A} \end{array}
$$

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/a335dd56990a7838efa512827b8be00213fd25084dd860766589266492cc683a.jpg)

265 VAC

CH4 VDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 3 9 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 6 7 8 \mathrm{A} \end{array}
$$

## 温升测试

BPA8504D

<table><tr><td rowspan="2">项目</td><td>85VAC</td><td>115VAC</td><td>230VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>50</td><td>50</td><td>50</td><td>50</td></tr><tr><td>BPA8504D (U1)</td><td>73.25</td><td>75.71</td><td>89.41</td><td>93.78</td></tr><tr><td>变压器绕组(L2)</td><td>71.28</td><td>72.36</td><td>75.81</td><td>78.11</td></tr><tr><td>变压器磁芯(L2)</td><td>70.3</td><td>71.32</td><td>75.45</td><td>76.62</td></tr><tr><td>整流二极管(D5)</td><td>70.93</td><td>72.47</td><td>79.82</td><td>81.81</td></tr><tr><td>整流桥(D1)</td><td>53.28</td><td>53.15</td><td>53.68</td><td>53.67</td></tr><tr><td>输入电解电容(C2)</td><td>59.83</td><td>60.47</td><td>64.15</td><td>65.08</td></tr><tr><td>输出电解电容(C6)</td><td>57.73</td><td>58.33</td><td>60.47</td><td>60.98</td></tr></table>

LNK304DG

<table><tr><td rowspan="2">项目</td><td>85VAC</td><td>115VAC</td><td>230VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>50</td><td>50</td><td>50</td><td>50</td></tr><tr><td>LNK304DG (U1)</td><td>85.06</td><td>85.66</td><td>84.92</td><td>86.49</td></tr><tr><td>变压器绕组(L2)</td><td>74.83</td><td>75.68</td><td>76.58</td><td>77.59</td></tr><tr><td>变压器磁芯(L2)</td><td>73.52</td><td>74.36</td><td>75.21</td><td>76.13</td></tr><tr><td>整流二极管(D5)</td><td>76.91</td><td>77.59</td><td>77.32</td><td>78.08</td></tr><tr><td>整流桥(D1)</td><td>54.58</td><td>54.57</td><td>54.03</td><td>53.98</td></tr><tr><td>输入电解电容(c2)</td><td>62.96</td><td>63.27</td><td>62.98</td><td>63.33</td></tr><tr><td>输出电解电容(c6)</td><td>60.09</td><td>60.75</td><td>61.12</td><td>61.33</td></tr></table>

备注：增大芯片Source散热铜箔面积可以降低芯片温度

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/17f40c7f97399de10a18a9aa2828ac44e36f03f37ae1a60e851ac6066c9b6f05.jpg)

115Vac Line  
![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/ae9b443c5f15e1e6cf41cda9d39e82e94a0dce18d9c1515824db4e2f31c9782a.jpg)

230Vac Line

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/dd79ca1cd34839db52a6f6850eb815d3e0d89ac0ee033a780247b3dfe8cc636e.jpg)

115Vac Neutral

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/3a3c0ed8b3d7893e4b913c0da72e4753db1d83ec3426e92c482bec196bfc275e.jpg)

230Vac Neutral

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/56a91062bd3c92609659fbe84f295a433475f94c883e6b3f19a17f8130d81a4e.jpg)

115Vac Line

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/9d32377741ef82958491969a1fd0b0e07edd26240a87817a94b85bc72c7ee89c.jpg)

230Vac Line

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/6dc8f403daf3a7c7ab78c6e11c3c0a85d980283d06a6f304777df56f6c0f21c0.jpg)

115Vac Neutral

![](./素材/images/BPA8504D_VS_LNK304对比测试_5V200mA/3d0f6a248445b04a56439e423b8fbbf0d77371f1c9fbdacc0ec253b14a0701d6.jpg)

230Vac Neutral

BPA8504D

<table><tr><td>差模</td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>+1.5kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-1.5kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr></table>

LNK304DG

<table><tr><td>差模</td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>+1.5kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-1.5kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr></table>

## EFT

BPA8504D

<table><tr><td>差模</td><td>电压</td><td>脉冲群持续时间</td><td>脉冲频率</td><td>测试时间</td><td>测试结果</td></tr><tr><td>L to N</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr></table>

LNK304DG

<table><tr><td>差模</td><td>电压</td><td>脉冲群持续时间</td><td>脉冲频率</td><td>测试时间</td><td colspan="2">测试结果</td></tr><tr><td>L to N</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td><td></td></tr><tr><td>L to N</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td><td></td></tr><tr><td>L to N</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td><td></td></tr><tr><td>L to N</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td><td></td></tr><tr><td>L to N</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td><td></td></tr><tr><td>L to N</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td><td></td></tr><tr><td>L to N</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td><td></td></tr><tr><td>L to N</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td><td></td></tr></table>

BPA8504D

<table><tr><td>测试点</td><td>电压(V)</td><td>放电类型</td><td>放电次数</td><td>测试结果</td></tr><tr><td>Vo</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>+18kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-18kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+18kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-18kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr></table>

LNK304DG

<table><tr><td>测试点</td><td>电压(V)</td><td>放电类型</td><td>放电次数</td><td>测试结果</td></tr><tr><td>Vo</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>+18kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-18kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+18kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-18kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr></table>

## THANK YOU FOR WATCHING
