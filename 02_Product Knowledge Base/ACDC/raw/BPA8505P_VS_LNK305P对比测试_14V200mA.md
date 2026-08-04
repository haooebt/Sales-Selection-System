![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/5499c5d4d4caa250270e31eb22a2ce1883b12356feff7d1e8301122498ba8615.jpg)

## BPA8505P&LNK305P对比测试

## (14V/0.2A@85\~265Vac)

上海晶丰明源半导体股份有限公司

Shanghai Bright Power Semiconductor Co., Ltd.

文长川

时间： 2021年10月22日

## 电气特性对比

<table><tr><td></td><td>BPA8505P</td><td>LNK305P</td></tr><tr><td>开关频率</td><td>45KHz</td><td>66KHz</td></tr><tr><td>Mosfet BV</td><td>650V</td><td>700V</td></tr><tr><td> $R_{DS\_ON}$ </td><td>8.5Ω</td><td>12Ω</td></tr><tr><td>限流点</td><td>440mA</td><td>375mA</td></tr><tr><td>软启动</td><td>有</td><td>无</td></tr><tr><td>输出过压保护</td><td>有</td><td>有</td></tr><tr><td>输出短路保护</td><td>有</td><td>有</td></tr><tr><td>输出过载保护</td><td>有</td><td>有</td></tr><tr><td>反馈开路保护</td><td>有</td><td>有</td></tr><tr><td>过温保护</td><td>有</td><td>有</td></tr><tr><td>封装</td><td>DIP7</td><td>DIP7</td></tr></table>

## BPA8505P

多模式控制技术  
能有效降低系统待机功耗  
提高效率和改善动态性能  
减小系统工作在轻载时的音频噪声

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/0e8f0f51aa79a85ed527cd7d810ec3f97161679618cc93f510179ff47b1fba32.jpg)

## LNK305P

ON/OFF模式控制技术  
待机功耗更高  
效率更低  
轻载音频噪声较大

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/4fbd34cb45e72b67fce19e69c70cbde83ddf6cec6ba876ea18843954f0f7da16.jpg)

图8.控制模式

## 为什么BPA8505P的负载电压调整率会好？

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/8b0bcfa27e1b20667a4a867ef46ae1bc493179be1ade0295bdccb5e095980f32.jpg)

I1 =i2+i3

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/005a70796bd0448fd24ca5f4259c8b21eb2ad6e7ee33d93019b181673d226617.jpg)

I1 =i2+i3

电源规格：85\~265Vac输入，14V/0.2A输出

<table><tr><td colspan="2"></td><td>BPA8505P</td><td>LNK305P</td><td></td></tr><tr><td colspan="2">待机功耗@230Vac</td><td>300mW</td><td>304mW</td><td>自供电,相同负载MCU</td></tr><tr><td rowspan="2">效率</td><td>115Vac</td><td>75.8%</td><td>70%</td><td>满载效率</td></tr><tr><td>230Vac</td><td>73.1%</td><td>64.4%</td><td>满载效率</td></tr><tr><td rowspan="2">输出电压纹波</td><td>85Vac</td><td>85.65mV</td><td>108mV</td><td>满载</td></tr><tr><td>265Vac</td><td>89.3mV</td><td>124mV</td><td>满载</td></tr><tr><td rowspan="2">动态负载性能</td><td>50%-100%</td><td>391mVPK_PK</td><td>679mVPK_PK</td><td>@265Vac</td></tr><tr><td>10%-90%</td><td>776mVPK_PK</td><td>779mVPK_PK</td><td>@265Vac</td></tr><tr><td rowspan="2">MOSFET应力</td><td> $V_{DS}$ </td><td>400V</td><td>410V</td><td>@265Vac,满载启机</td></tr><tr><td> $I_{DS}$ </td><td>0.86A</td><td>0.9A</td><td>@265Vac,满载启机</td></tr><tr><td colspan="2">温升测试(环温50°C)</td><td>26.24°C</td><td>38.49°C</td><td>@265Vac,满载</td></tr><tr><td colspan="2">传导EMI</td><td>&gt;4dB裕量</td><td>&gt;1dB裕量</td><td></td></tr><tr><td colspan="2">Surge</td><td>Pass</td><td>Pass</td><td>共模2kV</td></tr><tr><td colspan="2">EFT群脉冲</td><td>Pass</td><td>Pass</td><td>4kV,5kHz/38kHz/100kHz</td></tr><tr><td colspan="2">ESD</td><td>Pass</td><td>Pass</td><td>15kV空气放电</td></tr></table>

## 电路及实物图

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/a839a7b50d10c95878b42797ad7ef606e5d7e8115a6d3854c01c8a1af618da5e.jpg)

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/fce63b2a0a0dc25b1b47e7ff0db8031fe60fde8e66305fd5043e9bd07e8b0c5b.jpg)

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/c484788ad2ae04a7552a3f08463e47f0be1cf768522feca2a770f8a1897e686c.jpg)

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/f0ec524b35f055b0c1a1e2a2758be19a7c16a4c30853aca50a4c953c71fa1137.jpg)

空载功耗  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/34d678f1db2449c4d32d3416527cca448b4998f68807c1b8dcf80d085586cfa0.jpg)

输入电压

效率测试  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/9f0f6bf11995c91d089e90fc977b890d9b6ac1dcc3931cf990e5f723a2b1ada8.jpg)

负载

## 输出电压调整率

BPA8505P

<table><tr><td> $V_{IN} (VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>13.70</td><td>13.69</td><td>13.69</td><td>13.68</td><td>13.68</td><td>13.67</td><td>13.69</td><td>0.22%</td></tr><tr><td>20%</td><td>13.59</td><td>13.58</td><td>13.58</td><td>13.57</td><td>13.57</td><td>13.57</td><td>13.58</td><td>0.15%</td></tr><tr><td>40%</td><td>13.50</td><td>13.50</td><td>13.52</td><td>13.52</td><td>13.50</td><td>13.50</td><td>13.51</td><td>0.15%</td></tr><tr><td>60%</td><td>13.49</td><td>13.48</td><td>13.47</td><td>13.46</td><td>13.45</td><td>13.44</td><td>13.47</td><td>0.37%</td></tr><tr><td>80%</td><td>13.42</td><td>13.40</td><td>13.40</td><td>13.38</td><td>13.36</td><td>13.36</td><td>13.39</td><td>0.45%</td></tr><tr><td>100%</td><td>13.33</td><td>13.31</td><td>13.30</td><td>13.27</td><td>13.26</td><td>13.25</td><td>13.29</td><td>0.60%</td></tr><tr><td>平均值</td><td>13.51</td><td>13.49</td><td>13.49</td><td>13.48</td><td>13.47</td><td>13.47</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>2.74%</td><td>2.82%</td><td>2.89%</td><td>3.04%</td><td>3.12%</td><td>3.12%</td></tr></table>

◼ 计算方法：调整率=100%\*(最大值-最小值)/平均值  
测试条件：假负载为MCU电流

LNK305P

<table><tr><td> $V_{IN} (VAC)$ Load (%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>14.03</td><td>14.03</td><td>14.02</td><td>14.02</td><td>14.01</td><td>14</td><td>14.02</td><td>0.21%</td></tr><tr><td>20%</td><td>13.88</td><td>13.87</td><td>13.868</td><td>13.86</td><td>13.86</td><td>13.85</td><td>13.86</td><td>0.22%</td></tr><tr><td>40%</td><td>13.78</td><td>13.77</td><td>13.77</td><td>13.76</td><td>13.76</td><td>13.75</td><td>13.77</td><td>0.22%</td></tr><tr><td>60%</td><td>13.67</td><td>13.65</td><td>13.64</td><td>13.63</td><td>13.62</td><td>13.62</td><td>13.64</td><td>0.37%</td></tr><tr><td>80%</td><td>13.43</td><td>13.41</td><td>13.41</td><td>13.4</td><td>13.4</td><td>13.42</td><td>13.41</td><td>0.22%</td></tr><tr><td>100%</td><td>13.23</td><td>13.19</td><td>13.16</td><td>13.12</td><td>13.12</td><td>13.14</td><td>13.16</td><td>0.84%</td></tr><tr><td>平均值</td><td>13.67</td><td>13.65</td><td>13.64</td><td>13.63</td><td>13.63</td><td>13.63</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>5.85%</td><td>6.15%</td><td>6.30%</td><td>6.60%</td><td>6.53%</td><td>6.31%</td></tr></table>

◼ 计算方法：调整率=100%\*(最大值-最小值)/平均值  
测试条件：假负载为MCU电流

## 输出电压纹波

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/768077cd3476eb8800a774de6250ec87938667ed06b2714892bb09276d99fd9a.jpg)

85 VAC  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/e028f908e33ee1a7702b5a7ae5af222e19f9c5882e1431bc34d99a26edbad7d7.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/6e2d0fb25ffaca0a10350a0f66af999696d1355695aa00579d2480412f06dec0.jpg)

85 VAC  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/72325b9b3f91b753f4d6598741015012d0616710de9f421745a3461ce1a67f37.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/4e0bd296b3cf734ac13c708408781b77600506285fedf76acae7223c24d2cf91.jpg)

265 VAC  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/abaf024c9aa1a71cb7559ced7ae03fd9ce58a9f923480f105c1c0e24f0080688.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/b45afd388c1fe2d206a1d82cf0300c2d8ac521f255709ed6ea8575cdabbcc32a.jpg)

265 VAC  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/8a5ff03f93662ecb102e9132d4f3cb8e25b500eefcb2e5c2fc8715a82dbad8c2.jpg)  
Test Condition:  
➢ Full Load

## 动态负载(50%-100%)

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/0a67a1b82eca4d88ae19ce868f146491515d8fcfae0b10820be31c5bac290016.jpg)

85 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 7 3 6 ~ \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.1 A-0.2 A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/da9b6171227849401be41362e5a4bcbc3514591ab703bf786d8c6fca4b269764.jpg)

85 VAC

$\mathsf { C H 1 } \mathsf { V } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 5 7 2 m v$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.1 A-0.2 A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/b6bd0015562abb2dad4fca6194e509e6b3c89184d5090822798ed851db6e0542.jpg)

265 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { \mathsf { P K - P K } } = 8 0 7 ~ \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { l } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.1 A-0.2 A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/b77698dd682a1d828285d56c2e4a8d9ff2682f553b653a0eb3c4da55b79521a7.jpg)

265 VAC

${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 6 7 9 m v$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.1 A-0.2 A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## 动态负载(10%-90%)

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/444d31e6a3fd4f7d654eb189507b4b73b13626487a6260791cd5c9a636c4546d.jpg)

85 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $\mathtt { V } _ { \mathtt { P K - P K } } = 1 0 8 0 \mathtt { m v }$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.02A-0.18 A-0.02 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/17de69c390bd10db928a825d870fb8dcf4647c21c2fcb718219bf7e3226c4d60.jpg)

85 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $\mathsf { V } _ { \mathsf { P K - P K } } { = } 6 9 4 \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.02A-0.18 A-0.02 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/56942fb44728cd973589a74d3033c1e78997ca4430973edaf88326a00fb53653.jpg)  
265 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $\mathsf { V } _ { \mathsf { P K - P K } } { = } 1 2 0 0 \mathsf { m v }$  
$\mathsf { C H 4 } \mathsf { l } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.02A-0.18 A-0.02 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/41121bfa793a8b0d192d032b0db8306c53fad93b8808d7512ba140cf294c7c58.jpg)

265 VAC

CH1 VOUT $V _ { P K - P K } { = } 7 7 9 m v$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.02A-0.18 A-0.02 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## 输出电压开机波形

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/f42591dc968b7bae5f76549b04f80e07de39086cb427990afbb2bc3256005499.jpg)

85 VAC  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/b85fe0fdfa0d176f2e14b48246f40b0217f01b311fd3822d662c3747699c9d92.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/d53362b92962cf7579231dec230f2e6b76be4cf9abf8c47ba0f3ea5da9752a8a.jpg)

85 VAC  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/773ce18f449578c2d3707576a2976149ad6999c62d702b23ebf0b898e1e64f40.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/5bd14e633191d4a243c59bf55b822eeeafdaff77296527ca8ccbce70246de7d5.jpg)

265 VAC  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/9159fbdcd2a62c2808cb38bb9b2264204dbb13e93c5fb39534e0feae4dcc140f.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/50d7a1758d522eb29b98ffa12c78bdb948dd43a5011206bb36b656060d9492c1.jpg)

265 VAC  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/34ee460c92a2355144865da1dba8fb6bb23d07dbc3b9121faef6d6681783dae4.jpg)  
Test Condition:  
➢ Full Load  
不能满载启机

## MOSFET开机波形

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/bb5539196919f2184013ca59809368d7ce9c78593dd1640c0abb99554d0d9be9.jpg)

85 VAC

CH3 VDS  
CH4 IDS

$$
\begin{array}{r l} & V _ {D S \_ M A X} = 1 4 0 \mathrm{V} \\ & I _ {D S \_ M A X} = 1 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/648d3838cec63298681d6e8907c0230bbd6e9457b12a38ec0412925baa863000.jpg)

85 VAC

CH3 VDS  
CH4 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 1 4 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 6 6 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/6ae506d3d9d0b2ab31347c090467ff086f69df595b9e43bf92a0b6761ba49956.jpg)

265 VAC

CH3 VDS  
CH4 IDS

$$
\begin{array}{l} V _ {D S \_ M A X} = 4 0 0 V \\ I _ {D S \_ M A X} = 1. 0 3 0 A \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/60ed82c82bd2a2615fc80a3671760735c7a9420016a400654e4c998e57c43539.jpg)

265 VAC

CH3 VDS  
CH4 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 4 1 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 9 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

## MOSFET稳态波形

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/f4a6394dc7c9687820af1b24734306c6ddbe8fc41906836f38d0d16d2d30df16.jpg)

85 VAC

CH3 VDS  
CH4 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 1 5 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 5 3 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/88e9d5b0054dc266b24639ff52bcbf3c59d419a35535e86e2e6ad4923637494c.jpg)

85 VAC

CH3 VDS  
CH4 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 1 1 5. 4 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 4 7 6 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/ec60d13c3016356af452e91f809015712a5801f1284962f9290167f45fae338f.jpg)

265 VAC

CH3 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 3 7 4. 8 V
$$

$$
I _ {D S \_ M A X} = 0. 5 7 0 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/44abbd8e652f379451af3a35f6dce75afbd43674f39ac85662ff67985196b8e2.jpg)

265 VAC

CH3 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 4 0 0 V
$$

$$
I _ {D S \_ M A X} = 0. 5 6 \mathrm{A}
$$

## Test Condition:

➢ Full Load

## 电感电流开机波形

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/ec8fe3c91f0f1abf74a18a05dc15c0f76419f5bf00b6fff0a2ce26b30e5d9a52.jpg)

85 VAC  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/5720f688303342a9f947b7dc158a94598da61ad7832329ce965c7c104995a686.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/188a51d4421588165d07afd41908230119c2a068b3d18ff813c0aa841c22edf9.jpg)

85 VAC  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/7f3fac47dc152bc625319db381235a4a27feb04cbd264c3229a9079b67606747.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/2880c2dc9a5e6ff36cb46a3e21bd324acba94e79c7b3d0285e5fe30c94e65e1e.jpg)

265 VAC  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/e1460be217170321823be153b7a96715dd8175035cad81016df24d6763ee4d65.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/286c30d21146ccaa5fb355d8b85b9c4ba5736e40f256549e636be1842af18b77.jpg)

265 VAC  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/c6c925391ad171109b699f407d548fcb0026a56676dfa450b4f0c384bbecb2d4.jpg)  
Test Condition:  
➢ Full Load

## 电感电流工作稳态波形

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/9d95ea53b732a718c67b129f20736c243f4c70fee3e9f360d8ca544f0f0de5d9.jpg)

85 VAC  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/cdd747a70c255d4040dfabda5eee1e1f5a1f708d40cbe9f4d6147faf14f4d2a6.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/a54e79609ecc91d0752be223c842aa19da4c53a0e5c29cc66c9793255d469738.jpg)

85 VAC  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/7ac46a8edb126f3e79c6b17040661741f2e1ca4b4c3381bc309493930f96dcab.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/0d65fea9d89a1ac3891b6388aa04e86d1f5c376e41da42f66a4242647769d678.jpg)

265 VAC  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/ce2ff846025c6920cfa0be6231dc909c3a198715ae9b87ced23f49a1df2e3bd6.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/e987b5c94937c77377efa57d58843015053950eaf60df37c440cd2c1e7557cdf.jpg)

265 VAC  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/59290aed47e5c051506744bf168a86b25bb7365b22c0134397138e65cbabb544.jpg)  
Test Condition:  
➢ Full Load

## 输出短路保护（MOSFET波形）

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/2a88c5b04a98270c49020a79f6c9e3684e9826e2369440693735f889324a3baa.jpg)

85 VAC

CH3 VDS  
CH4 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 1 4 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 1. 0 8 \mathrm{A} \end{array}
$$

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/10b567f5e617a1fa0bc3d17b1d466fe061a95e15f79c2d57e7b64116b80d1fa3.jpg)

85 VAC

CH3 VDS  
CH4 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 1 4 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 8 8 \mathrm{A} \end{array}
$$

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/416a940e29260c5565d29271dd887279251087bec813e0c3b71dfd63eabc832d.jpg)

265 VAC

CH3 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 4 0 0 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 1. 2 \mathrm{A}
$$

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/dda6845b0f86da0cf6c85e66ad502cf4d3323ba972fce58aad4b67f717ec864e.jpg)

265 VAC

CH3 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 4 0 0 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 1. 0 8 \mathrm{A}
$$

D17,D18由原来的US1M更改为ES1J

效率测试  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/d5b51e0586ff82217b94a579c6ed1a94ac3952c07de74b3d86ca9dea35d7202c.jpg)

坐标轴标题

## 输出电压调整率

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>13.8</td><td>13.79</td><td>13.78</td><td>13.78</td><td>13.77</td><td>13.77</td><td>13.78</td><td>0.22%</td></tr><tr><td>20%</td><td>13.72</td><td>13.72</td><td>13.71</td><td>13.71</td><td>13.7</td><td>13.7</td><td>13.71</td><td>0.15%</td></tr><tr><td>40%</td><td>13.69</td><td>13.7</td><td>13.7</td><td>13.7</td><td>13.69</td><td>13.69</td><td>13.70</td><td>0.07%</td></tr><tr><td>60%</td><td>13.72</td><td>13.71</td><td>13.71</td><td>13.70</td><td>13.7</td><td>13.69</td><td>13.71</td><td>0.22%</td></tr><tr><td>80%</td><td>13.70</td><td>13.71</td><td>13.71</td><td>13.70</td><td>13.7</td><td>13.69</td><td>13.70</td><td>0.15%</td></tr><tr><td>100%</td><td>13.7</td><td>13.7</td><td>13.71</td><td>13.7</td><td>13.7</td><td>13.7</td><td>13.70</td><td>0.07%</td></tr><tr><td>平均值</td><td>13.72</td><td>13.72</td><td>13.72</td><td>13.72</td><td>13.71</td><td>13.71</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>0.80%</td><td>0.66%</td><td>0.58%</td><td>0.58%</td><td>0.58%</td><td>0.58%</td></tr></table>

◼ 计算方法：调整率=100%\*(最大值-最小值)/平均值  
测试条件：带MCU为假负载

## 输出电压纹波

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/4d1321a1a99086a067d70cc2fdaff764547501eea302da4c4704f9636d1d83fb.jpg)

85 VAC

$\begin{array} { r l } { \mathbf { \Pi } } & { { } \mathsf { C H 1 } \mathsf { V _ { \mathsf { o u T } } R i p p l e } } \\ { \mathbf { \Pi } } & { { } \mathsf { V _ { P K - P K } } = 8 5 . 6 \mathsf { m v } } \end{array}$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/6c1afc18008ee4e9bd2597a46e757c130f8ceb7f5e2507163da30e514a188e48.jpg)

115 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ Ripple VPK-PK=75.7mV

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/31c496586d5b9ff45f92d2afccd6662abdceb78ebe462e9ac22a31d550c2ad85.jpg)

230 VAC

$\begin{array} { r l } { \mathbf { \Pi } } & { { } \mathsf { C H 1 } \mathsf { V _ { \mathsf { O U T } } R i p p l e } } \\ { \mathbf { \Pi } } & { { } \mathsf { V _ { P K - P K } } = \pm \pmb { 9 1 . 9 m v } } \end{array}$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/bbc3cf02a1810eefced2bdac927703179f35b0cf63cbd9311d8f3cb1ef83565b.jpg)

265 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ Ripple VPK-PK=89.3mV

## Test Condition:

➢ Full Load

## 动态负载(50%-100%)

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/f9521ffa54ff9608b413ee842f29cf8d0f0167838aebb75e44c1434255ca0dd8.jpg)

85 VAC

CH1 VOUT $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 3 6 3 ~ \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ $0 . 1 \mathsf { A } \mathsf { - } 0 . 2 \mathsf { A } \mathsf { - } 0 . 1 \mathsf { A }$  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/63611124328c0076b0486812c746b78e264ad5cffe84ffb6634f81dc5a08d9fe.jpg)

115 VAC

CH1 VOUT ${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 3 8 8 ~ \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.1 A-0.2 A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/4d8bc80ebb2ada5c8259c988d16fdf57c01bdb81ac41878f55c628b656999829.jpg)

230 VAC

CH1 VOUT ${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 4 0 0 m V$  
$\mathsf { C H 4 } \mathsf { l } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.1 A-0.2 A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/dcf0aa4e6606362fa19199bf94ddce6436db3bea44c3db7aa87119b824dda0e2.jpg)

265 VAC

CH1 VOUT ${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ $\mathsf { V } _ { \mathsf { P K - P K } } \mathsf { = } 3 9 1 \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.1 A-0.2 A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## 动态负载(10%-90%)

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/fbe679cd3eddbc3b8cfae4314dcbedfb1e4d6ce8d2f05b7399d30b0aff02450f.jpg)

85 VAC

CH1 VOUT $\mathsf { V } _ { \mathsf { O U T } }$ $\mathsf { V } _ { \mathsf { P K - P K } } { = } 7 7 6 \mathsf { m V }$  
CH4 IOUT $\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.02A-0. 18 A-0.02A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/aea962f85a48edc8be1591c04158b60a0235721a9b41e3c5a11e525195491827.jpg)

115 VAC

${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ CH1 VOUT $\mathsf { V } _ { \mathsf { P K - P K } } { = } 7 6 8 \mathsf { m V }$  
CH4 IOUT $\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.02A-0. 18 A-0.02A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/3eec87d18d21e5e426112da4e3cc7d265e3daddcb47b671e36180a9b6811ed8c.jpg)

230 VAC

CH1 VOUT $\mathsf { V } _ { \mathsf { O U T } }$ $\mathsf { V } _ { \mathsf { P K - P K } } { = } 7 5 2 \mathsf { m V }$  
CH4 IOUT $\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.02A-0. 18 A-0.02A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/2b69a16aafadcbb00643e9975fd062fb6dcc1dce0f1eae0900a7096a1a91d5df.jpg)

265 $\mathsf { v } _ { \mathsf { A C } }$

CH1 VOUT ${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ $\mathsf { V } _ { \mathsf { P K - P K } } { = } 7 7 6 \mathsf { m V }$ VPK-PK=776mV  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 0.02A-0. 18 A-0.02A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## 输出电压开机波形

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/73827bfefc547ebf340fa41de3bef28e3ccec4a0c790e2041dea3a7ba404430a.jpg)

85 VAC

CH1 VOUT TRISE: 7.09 mS

## Test Condition:

➢ No Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/3fcf72ee5f527d035cede63cac835fd78a381790945231bd4043d6b1f214b9c2.jpg)

115 VAC

CH1 VOUT TRISE: 18.34 mS

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/227ffe966fa13c3ae27f47c08739f77e5b117d7ca6009f80cf92bf182f97d882.jpg)

230 VAC

CH1 VOUT TRISE: 6.75 mS

## Test Condition:

➢ No Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/66ebe19cebe1b78f7ce71620c399dd98b6bcc31212943d70bd31fa5b3507d820.jpg)

265 VAC

CH1 VOUT TRISE: 16.34 mS

## Test Condition:

➢ Full Load

## 电感电流开机波形

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/7042380bd0f3238b6b5ad3a25716364996a40e4ff9d1aa3a915072551e7b5b9c.jpg)

85 VAC

➢ CH4 IL IMAX : 0.537 A

## Test Condition:

➢ No Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/b34dae68a1b9b696c7ef4e4310a389f8ef8f35c5d48bb2b050e7154f75490c29.jpg)

115 VAC

CH4 IL IMAX : 0.552 A

## Test Condition:

➢ Full Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/baf14e88407bbc458c26c4bc3a09037f6152d4c6193f9a0eb60d1eff64f6f0b7.jpg)

230 VAC

CH4 IL IMAX : 0.584 A

## Test Condition:

➢ No Load

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/3328cf89a301005bd9018df75a565a24e5b5989da0cb2e5ba9a35826435f10e7.jpg)

265 VAC

CH4 IL IMAX : 0.603 A

## Test Condition:

➢ Full Load

## 电感电流波形

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/c586b0d764b9650e9646b678319ab272b4e5aabedfbea4529075b9177076da23.jpg)

85 VAC  
CH4 IL  
➢ No Load

Test Condition:

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/cdd5079b61ef9b5f80a8549daf92bd8ee8c9ddf708e8083e2d6165dfec3a4ff2.jpg)

85 VAC  
CH4 IL  
➢ Full Load

Test Condition:

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/80e1fcd9da5139614b564873a6f282e405da80b8b2aae8d804d292f9c8146596.jpg)

265 VAC  
CH4 IL  
➢ No Load

Test Condition:

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/1e5a6e900952d0fd57bccca1a2faea37f5d8b1e57dac724f676029c721892cac.jpg)

265 VAC  
CH4 IL  
➢ Full Load

Test Condition:

## 漏源极电压和漏极电流开机波形

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/0c35ab65d031db21a51b92fa48b91aea95162e6bcd9168430d7dd5c1eee702c4.jpg)

85 VAC

CH1 $\mathsf { V } _ { \mathsf { D } \mathsf { S } }$  
CH4 IDIMAX: 0.76 A

Test Condition:  
➢ No Load  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/bd3552747b979b4d45a24c5587ce3d575af73dbcdf7b87caa32c524102926db8.jpg)

115 VAC

CH1 $\mathsf { V } _ { \mathsf { D } \mathsf { S } }$  
CH4 IDIMAX: 0.82 A

Test Condition:  
➢ Full Load  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/41fe0ba2b253f4d99b3a7383a5256efa4f91a3d9ae8b6e63c3ef42072035ea3c.jpg)

230 VAC

CH1 VDS  
CH4 IDIMAX: 0.76 A

Test Condition:  
➢ No Load  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/65188fd02b1d28aacb3bec4aeb192471932daa0b9f6dd2bfc21283873ec9bdd8.jpg)

265 VAC

CH1 VDS  
CH4 IDIMAX: 0.86 A

Test Condition:

➢ Full Load

## MOSFET波形

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/7c27b6d1fce823069d21eab631b2811c958c3e0810f22f49cf1ff2661c46f72a.jpg)

85 VAC

CH3 VDS  
CH4 ID

Test Condition:  
➢ No Load  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/ce460f511f05b3e0eb7b69285408419ff4c44908904f1b4a3a12e5e1863c6341.jpg)

85 VAC

CH3 VDS  
CH4 ID

Test Condition:  
➢ Full Load  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/fc35ab532c1b5a7dcd3c141451d7f2f74a311e85d1fefd78d1a891ace539e6db.jpg)

265 VAC

CH3 VDS  
CH4 ID

Test Condition:  
➢ No Load  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/777005953453b3ff9e0ddce6c0be3e30370c2ba85d63e008e36cf41c35038532.jpg)

265 VAC

CH3 VDS  
CH4 ID

Test Condition:

➢ Full Load

## 短路保护 （MOSFET波形）

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/453d6b04e641bdd32e64bd9d84cfe8bf0f178223a92e92590ea676a616c078c8.jpg)

85 VAC

CH2 VDS  
CH4 ID

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/469d494ef8dd501df210c33cb01fcb4979b9de6e76c81a9ec8bc1ac159726707.jpg)

115 VAC

CH2 VDS  
CH4 ID

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/7c6f0ad47f759fac5bbe2efa8df24da893f6cfb0fa4b13f40da48aaea9edab99.jpg)

230 VAC

CH2 VDS  
CH4 ID

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/174494737d068e264ac1d4d7b25fffa00ae58798388b489845147170cbafe55b.jpg)

265 VAC

CH2 VDS  
CH4 ID

## 温升测试

BPA8505P

<table><tr><td rowspan="2">项目</td><td>85VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>27.26</td><td>27.28</td></tr><tr><td>BPA8505P(U1)</td><td>47.58</td><td>53.52</td></tr><tr><td>电感磁芯(L2)</td><td>40.72</td><td>46.13</td></tr><tr><td>电感线包(L2)</td><td>40.23</td><td>45.56</td></tr><tr><td>输出电解电容(E15)</td><td>34.77</td><td>36.58</td></tr><tr><td>续流二极管(D17)</td><td>43.07</td><td>46.18</td></tr></table>

备注：增大芯片Source散热铜箔面积可以降低芯片温度

LNK305P

<table><tr><td rowspan="2">项目</td><td>85VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>26.85</td><td>26.94</td></tr><tr><td>LNK305P(U1)</td><td>56.15</td><td>65.43</td></tr><tr><td>电感磁芯(L2)</td><td>39.05</td><td>45.12</td></tr><tr><td>电感线包(L2)</td><td>38.65</td><td>44.57</td></tr><tr><td>输出电解电容(E15)</td><td>33.06</td><td>35.37</td></tr><tr><td>续流二极管(D17)</td><td>44.02</td><td>47.84</td></tr></table>

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/50ae3d5dd6f5360f7e49a4ce09052ba1858514fca2eb578ebd995cff4c3861b2.jpg)

115Vac Line  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/ac6d0aca311f1f16f58fac209ba0bcde3b32647092b7eb100dc4f7a049e9d86a.jpg)

230Vac Line

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/27bfa3341b053ad805148ab08e2498b4cd5ac640bb604ab192ca87ddf31eafe7.jpg)

115Vac Neutral

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/d2dd58d3579cdf7c19772655cf5c64f3d842d2e4b9c27714727028dd47eebdb2.jpg)

230Vac Neutral

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/02e483b0244f0514b3735f7359d4b07cec70059337015f64e135c0f471f52618.jpg)

115Vac Line  
![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/bfa19db8734c4c45a8972ac4610b39e8ee51245c64568fda452aa43054d1ebf3.jpg)

230Vac Line

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/f7c4471fda755da70d47da2906321e5b8e25aacc677fd101963a4ca30cfea922.jpg)

115Vac Neutral

![](./素材/images/BPA8505P_VS_LNK305P对比测试_14V200mA/a9ed3b36ec92bf01bc113819c806557320c3e0bfcd353d9e74cb1b5fd9f6a6a4.jpg)

230Vac Neutral

BPA8505P

<table><tr><td>差模</td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>+2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr></table>

LNK305P

<table><tr><td>差模</td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>+2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr></table>

## EFT 群脉冲测试

BPA8505P

<table><tr><td>差模</td><td>电压</td><td>脉冲群持续时间</td><td>脉冲频率</td><td>测试时间</td><td>测试结果</td></tr><tr><td>L to N</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr></table>

LNK305P

<table><tr><td>差模</td><td>电压</td><td>脉冲群持续时间</td><td>脉冲频率</td><td>测试时间</td><td colspan="2">测试结果</td></tr><tr><td>L to N</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td><td></td></tr><tr><td>L to N</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td><td></td></tr><tr><td>L to N</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td><td></td></tr><tr><td>L to N</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td><td></td></tr><tr><td>L to N</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td><td></td></tr><tr><td>L to N</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td><td></td></tr><tr><td>L to N</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td><td></td></tr><tr><td>L to N</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td><td></td></tr></table>

BPA8505P

<table><tr><td>测试点</td><td>电压(V)</td><td>放电类型</td><td>放电次数</td><td>测试结果</td></tr><tr><td>Vo</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr></table>

LNK305P

<table><tr><td>测试点</td><td>电压(V)</td><td>放电类型</td><td>放电次数</td><td>测试结果</td></tr><tr><td>Vo</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr></table>

## 调整二极管前后数据对比

<table><tr><td>序号</td><td>型号</td><td>更改前后</td><td>50%-100%动态纹波</td><td>10%-90%动态纹波</td><td>最大电压调整率</td><td>短路输出 $I_{DS}$ </td><td>开机过冲</td></tr><tr><td>1</td><td>BPA8505P</td><td>D17,D18改前US1M</td><td>807(mV)</td><td>1200(mV)</td><td>3.12%</td><td>1.2A</td><td>有</td></tr><tr><td>2</td><td>LNK305P</td><td>D17,D18改前US1M</td><td>679(mV)</td><td>779(mV)</td><td>6.31%</td><td>1.08A</td><td>有</td></tr><tr><td>3</td><td>BPA8505P</td><td>D17,D18改后ES1J</td><td>391(mV)</td><td>779(mV)</td><td>0.58%</td><td>0.95A</td><td>无</td></tr></table>

◼ 建议D17,D18由US1M更换为ES1J或者是反向恢复时间在30ns以下的快恢复二极管  
◼ 更换后对比参数电流应力，动态相应都会更优

## THANK YOU FOR WATCHING
