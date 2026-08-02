![](./素材/images/BPA8604D&LNK364D对比测试/482022a1c02f40cca9f033263e5a24c58613ced16222511ebe869e475f2838ec.jpg)

## BPA8604D&LNK364D对比测试

## (12V/0.4A@85\~265Vac)

上海晶丰明源半导体股份有限公司

Shanghai Bright Power Semiconductor Co., Ltd.

WHX

时间：2021年8月

## 电气参数对比

<table><tr><td></td><td>BPA8604D</td><td>LNK364D</td></tr><tr><td>开关频率</td><td>132kHz</td><td>132kHz</td></tr><tr><td>Mosfet BV</td><td>700V</td><td>700V</td></tr><tr><td> $R_{DS\_ON}$ </td><td>20ohm</td><td>24ohm</td></tr><tr><td>限流点</td><td>250mA</td><td>250mA</td></tr><tr><td>软启动</td><td>有</td><td>无</td></tr><tr><td>输入过压保护</td><td>无</td><td>无</td></tr><tr><td>输入欠压保护</td><td>无</td><td>无</td></tr><tr><td>输出过压保护</td><td>无</td><td>无</td></tr><tr><td>过载保护</td><td>有</td><td>有</td></tr><tr><td>封装</td><td>SOP-7</td><td>SOP-7</td></tr></table>

## 测试数据对比

电源规格：85\~265Vac输入， 12V/0.4A输出

<table><tr><td colspan="2"></td><td>BPA8604D</td><td>LNK364D</td><td></td></tr><tr><td colspan="2">待机功耗</td><td>33.7mW</td><td>30.6mW</td><td></td></tr><tr><td rowspan="2">效率(满载整机)</td><td>115Vac</td><td>74.9%</td><td>74.6%</td><td></td></tr><tr><td>230Vac</td><td>76.8%</td><td>76.1%</td><td></td></tr><tr><td rowspan="2">输出电压纹波</td><td>85Vac</td><td>132mV</td><td>133mV</td><td></td></tr><tr><td>265Vac</td><td>142mV</td><td>164mV</td><td></td></tr><tr><td rowspan="2">动态负载性能</td><td>50%-100%</td><td> $142mV_{PK\_PK}$ </td><td> $171mV_{PK\_PK}$ </td><td></td></tr><tr><td>10%-90%</td><td> $143mV_{PK\_PK}$ </td><td> $170mV_{PK\_PK}$ </td><td></td></tr><tr><td rowspan="2">MOSFET应力</td><td> $V_{DS}$ </td><td>550V</td><td>550V</td><td></td></tr><tr><td> $I_{DS}$ </td><td>0.489A</td><td>0.338A</td><td></td></tr><tr><td rowspan="2">二极管应力</td><td>VRR</td><td>61.6V</td><td>61.6V</td><td></td></tr><tr><td> $I_{PK}$ </td><td>3.14A</td><td>2.98A</td><td></td></tr><tr><td colspan="2">温升测试(环温28°C)</td><td>103°C</td><td>OTP</td><td></td></tr><tr><td colspan="2">传导EMI</td><td>&gt;6dB裕量</td><td>&gt;6dB裕量</td><td></td></tr><tr><td colspan="2">Surge</td><td>Pass</td><td>Pass</td><td>共模2kV,差模4kV</td></tr><tr><td colspan="2">EFT群脉冲</td><td>Pass</td><td>Pass</td><td>4kV,5kHz/38kHz/100kHz</td></tr><tr><td colspan="2">ESD</td><td>Pass</td><td>Pass</td><td>8kV接触放电/15kV空气放电</td></tr></table>

## 电路及实物图

![](./素材/images/BPA8604D&LNK364D对比测试/92acec192cfb6c34a753210838d672ea9eebab89d22d5a30f9764118d9174b7f.jpg)

![](./素材/images/BPA8604D&LNK364D对比测试/f662cd9128307e2ea9799343aecd3cd5f71689c32a513183eb65cdcde774d018.jpg)

效率曲线  
![](./素材/images/BPA8604D&LNK364D对比测试/578b188400b6b769bd51f84affde417d643fc526a65dddb6029b69f466d65512.jpg)

输入电压（VAC）

## 输出电压调整率

BPA8604D

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>12.053</td><td>12.051</td><td>12.051</td><td>12.051</td><td>12.055</td><td>12.056</td><td>12.05</td><td>0.04%</td></tr><tr><td>20%</td><td>12.046</td><td>12.048</td><td>12.048</td><td>12.046</td><td>12.050</td><td>12.050</td><td>12.05</td><td>0.03%</td></tr><tr><td>40%</td><td>12.044</td><td>12.044</td><td>12.045</td><td>12.045</td><td>12.046</td><td>12.046</td><td>12.05</td><td>0.02%</td></tr><tr><td>60%</td><td>12.043</td><td>12.043</td><td>12.045</td><td>12.043</td><td>12.044</td><td>12.043</td><td>12.04</td><td>0.02%</td></tr><tr><td>80%</td><td>12.040</td><td>12.043</td><td>12.043</td><td>12.041</td><td>12.043</td><td>12.043</td><td>12.04</td><td>0.02%</td></tr><tr><td>100%</td><td>12.039</td><td>12.041</td><td>12.040</td><td>12.040</td><td>12.040</td><td>12.041</td><td>12.04</td><td>0.02%</td></tr><tr><td>平均值</td><td>12.04</td><td>12.05</td><td>12.05</td><td>12.04</td><td>12.05</td><td>12.05</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>0.12%</td><td>0.08%</td><td>0.09%</td><td>0.09%</td><td>0.12%</td><td>0.12%</td></tr></table>

LNK364D

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>12.050</td><td>12.051</td><td>12.056</td><td>12.060</td><td>12.058</td><td>12.058</td><td>12.06</td><td>0.08%</td></tr><tr><td>20%</td><td>12.046</td><td>12.044</td><td>12.051</td><td>12.053</td><td>12.051</td><td>12.050</td><td>12.05</td><td>0.07%</td></tr><tr><td>40%</td><td>12.039</td><td>12.041</td><td>12.044</td><td>12.044</td><td>12.040</td><td>12.041</td><td>12.04</td><td>0.04%</td></tr><tr><td>60%</td><td>12.036</td><td>12.038</td><td>12.041</td><td>12.041</td><td>12.-038</td><td>12.038</td><td>12.04</td><td>0.04%</td></tr><tr><td>80%</td><td>12.034</td><td>12.036</td><td>12.036</td><td>12.038</td><td>12.036</td><td>12.035</td><td>12.04</td><td>0.03%</td></tr><tr><td>100%</td><td>12.030</td><td>12.034</td><td>12.031</td><td>12.034</td><td>12.033</td><td>12.033</td><td>12.03</td><td>0.03%</td></tr><tr><td>平均值</td><td>12.04</td><td>12.04</td><td>12.04</td><td>12.05</td><td>12.04</td><td>12.04</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>0.17%</td><td>0.14%</td><td>0.21%</td><td>0.22%</td><td>0.21%</td><td>0.21%</td></tr></table>

计算方法：调整率=100%\*(最大值-最小值)/平均值  
测试条件：无假负载

## 输出电压纹波

![](./素材/images/BPA8604D&LNK364D对比测试/1ccce9ea4e9a5ef604f9e5f458ebaeaa2a18b3779e63d322a5d002c3c2386801.jpg)

85 VAC

$\begin{array} { l l } { { \pmb { \mathbb { 1 } } } } & { { \mathsf { C H 3 } } { \mathsf { V } } _ { \mathsf { O U T } _ { - 1 2 \vee } } { \mathsf { R i p p l e } } } \\ & { { \mathsf { V } } _ { { \mathsf { P K - P K } } } { \pmb { \mathrm { 1 3 2 m V } } } } \end{array}$

Test Condition:

➢ Full Load

![](./素材/images/BPA8604D&LNK364D对比测试/c51f1fe59e40ff592b1a74ff2a1f9d11b1a7c9ac2c2354479fa694f5c72e4736.jpg)

85 VAC

CH3 $\mathsf { V } _ { \mathsf { O U T } \_ 1 2 \mathsf { V } }$ Ripple $\mathsf { V } _ { \mathsf { P K - P K } } { = } \pm 3 3 \mathsf { m V }$

Test Condition:

➢ Full Load

![](./素材/images/BPA8604D&LNK364D对比测试/8f7415fe4a06487902e03e08d917f309f2b38f1fd83be6e6e3dc3c585e58179f.jpg)

265 VAC

CH3 $\mathsf { V } _ { \mathsf { O U T } \_ 1 2 \mathsf { V } }$ Ripple $V _ { p | k - P K } = \pm 4 2 m v$

Test Condition:

➢ Full Load

![](./素材/images/BPA8604D&LNK364D对比测试/f84f2e93b76bc0fd67eff4c494179c7815aa9d9d1b4401ef7b687a11e87fd04d.jpg)

265 VAC

CH3 $\mathsf { V } _ { \mathsf { o u r \_ 1 2 v } }$ Ripple $V _ { p | k - P K } = 1 6 4 m v$

Test Condition:

➢ Full Load

## (50%-100%)

![](./素材/images/BPA8604D&LNK364D对比测试/98b70f23f6deddde03128dbb6f7ad62fad7a4542db478a4c339b1b96b56f8059.jpg)

85 VAC

CH3 VOUT\_12V $\mathsf { V } _ { \mathsf { O U T } \_ 1 2 \mathsf { V } }$ $v _ { p _ { k - P K } } { = } 1 3 9 \mathsf { m V }$  
CH4 IOUT\_12V $\mathsf { I } _ { \mathsf { O U T } \_ 1 2 \mathsf { V } }$

## Test Condition:

➢ 0.2A-0.4A-0.2A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8604D&LNK364D对比测试/b9704ba638d56a9b8c880b4628f2b863d33346c074131bd29d136f8b1778d921.jpg)

85 VAC

CH3 VOUT\_12V $\mathsf { V } _ { \mathsf { O U T } \_ 1 2 \mathsf { V } }$ $V _ { p | c - P K } = 1 4 6 ~ \mathsf { m V }$  
CH4 IOUT\_12V $\mathsf { C H } 4 \mathsf { I } _ { \mathsf { O U T } _ { - } 1 2 \mathsf { V } }$

## Test Condition:

➢ 0.2A-0.4A-0.2A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8604D&LNK364D对比测试/15f5a8df9ea197d31c02c2461763cd579eb196a9f9554dd04147959fdfd775da.jpg)

265 VAC

CH3 V $\mathsf { V } _ { \mathsf { O U T } \_ 1 2 \mathsf { V } }$ $V _ { \mathsf { P K - P K } } = 1 4 2 ~ \mathsf { m V }$  
CH4 IOUT\_12V $\mathsf { I } _ { 0 \mathsf { U T } _ { - } 1 2 \mathsf { V } }$

## Test Condition:

➢ 0.2A-0.4A-0.2A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8604D&LNK364D对比测试/3a2d419b995ad3722c29d8f8a0e026538fae25ee41d7b1ff3978fe32bd8ad76c.jpg)

265 VAC

CH3 V $\mathsf { V } _ { \mathsf { o u r \_ 1 2 v } }$ $\mathsf { V } _ { \mathsf { P K - P K } } \mathsf { = } \mathsf { 1 } \bar { 7 } \mathsf { 1 } m v$  
CH4 IOUT\_12V $\mathsf { C H } 4 \mathsf { I } _ { \mathsf { O U T } _ { - } 1 2 \mathsf { V } }$

## Test Condition:

➢ 0.2A-0.4A-0.2A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## (10%-90%)

![](./素材/images/BPA8604D&LNK364D对比测试/d9d4e85ff9aa9c70d1a0d5fbf9532cd81beea6e5bc8ff5b346f965ae5ea8d7c3.jpg)

85 VAC

CH3 VOUT\_12V $\mathsf { V } _ { \mathsf { O U T } \_ 1 2 \mathsf { V } }$ $V _ { p | c - P K } = 1 4 2 m v$  
CH4 IOUT\_12V $\mathsf { I } _ { \mathsf { O U T } \_ 1 2 \mathsf { V } }$

## Test Condition:

➢ 0.04A-0.36A-0.04A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8604D&LNK364D对比测试/11a25372b437eee1484e768046fda1f65dc6c80f597f807cb56911895403b776.jpg)

85 VAC

CH3 VOUT\_12V $\mathsf { V } _ { \mathsf { O U T } \_ 1 2 \mathsf { V } }$ $V _ { p | c - P K } = 1 4 7 ~ \mathsf { m V }$  
CH4 IOUT\_12V $\mathsf { C H } 4 \mathsf { I } _ { \mathsf { O U T } _ { - } 1 2 \mathsf { V } }$

## Test Condition:

➢ 0.04A-0.36A-0.04A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8604D&LNK364D对比测试/e5ff2aebb50530eae2787fe86a2237e5ee6e7090459a0beb925b5003e312a816.jpg)

265 VAC

CH3 V $\mathsf { V } _ { \mathsf { O U T } \_ 1 2 \mathsf { V } }$ $V _ { p | c - P K } = 1 4 3 ~ \mathsf { m V }$  
CH4 IOUT\_12V

## Test Condition:

➢ 0.04A-0.36A-0.04A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8604D&LNK364D对比测试/4774cd45b524b5db7b5e516be3ee24f8dd924e4d4f4ceeb26653000c4630a252.jpg)

265 VAC

CH3 V $v _ { p _ { \mathrm { K - P K } } } = 1 7 0 \ m v$  
CH4 IOUT\_12V $\mathsf { C H } 4 \mathsf { I } _ { \mathsf { O U T } _ { - } 1 2 \mathsf { V } }$

## Test Condition:

➢ 0.04A-0.36A-0.04A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## 输出电压开机波形

![](./素材/images/BPA8604D&LNK364D对比测试/69d98f47764475b21a113515b6d46e4e61a0528b728fa924f5064efadd2ebe48.jpg)

85 VAC  
![](./素材/images/BPA8604D&LNK364D对比测试/3735477e28d098e8e71c6b8c0027e9d81683344bdc8fb64583b32d4308da1f06.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8604D&LNK364D对比测试/c64c4423a3836bf79c6072f077659027ceb6ce88639eb7f27101114a22885910.jpg)

85 VAC  
![](./素材/images/BPA8604D&LNK364D对比测试/42240a55e66364f2021c5408e77a94705ef4cc968c05eec6d332b0e48c105f53.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8604D&LNK364D对比测试/146cbf69beddad2f7b53c22d36c3601674a6ce2a9875b4e843966ef1ce52f1ca.jpg)

265 VAC  
![](./素材/images/BPA8604D&LNK364D对比测试/630d8b02ec09c82d131761670b6edc67239a0de109ce329c875bc0d2527ccc26.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8604D&LNK364D对比测试/d83cf6afdfece24e6fa21b0929c123784bc050d547e4f9dbe28d1b3cdb558527.jpg)

265 VAC  
![](./素材/images/BPA8604D&LNK364D对比测试/02c42d1c78cfbc6c689cd998d72dc9ae0792e08489142f6cf57aa626535e9724.jpg)  
Test Condition:  
➢ Full Load

## MOSFET

![](./素材/images/BPA8604D&LNK364D对比测试/130f3b2791dae345fcd24217b5fd2e69d3f1b2c590cbf841525b70639ec8dbfa.jpg)

85 VAC

CH1 VDS  
CH4 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 8 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 2 8 8 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8604D&LNK364D对比测试/fb3939432fec4e0d5099dce5faea88496733ea7e8f6a645e3d5f62d71a16bafc.jpg)

85 VAC

CH1 VDS  
CH4 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 7 6 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 2 8 6 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8604D&LNK364D对比测试/922e9a280ddb38a0685ef0d942026b8dd6522291e4f6291100371f5699b0a765.jpg)

265 VAC

CH1 VDS  
CH4 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 5 5 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 4 8 9 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8604D&LNK364D对比测试/039e39f91c82c3849020befaeb6a9ffe0d873c57fd8331c1dc9be1d3db27035a.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} V _ {D S \_ M A X} = 5 5 0 V \\ I _ {D S \_ M A X} = 0. 3 3 8 A \end{array}
$$

## Test Condition:

➢ Full Load

## MOSFET

![](./素材/images/BPA8604D&LNK364D对比测试/ee0fe809b9075c6517f1ebdc1b0e54a5050a4deb6856069fc8e9f97dc5e653c8.jpg)

85 VAC

CH1 VDS  
CH4 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 8 2 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 2 9 2 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8604D&LNK364D对比测试/9ee0037ee82984e54ee2fe335acef0ae1435d1e0fd4f51b49c611f558f9b9086.jpg)

85 VAC

CH1 VDS  
CH4 IDS

$$
\begin{array}{l} V _ {D S \_ M A X} = 2 7 4 V \\ I _ {D S \_ M A X} = 0. 2 5 0 A \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8604D&LNK364D对比测试/1565353ec4a3cb734ddb908448daac003f933a965faa56e49c0ccc5de3e5fece.jpg)

265 VAC

CH1 VDS  
CH4 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 5 6 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 3 8 6 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8604D&LNK364D对比测试/1adbcbc5620644d470c98a1579dafddf1bd53420ecf85e5d274fc87368f2d311.jpg)

265 VAC

CH1 VDS  
CH4 IDS

$$
\begin{array}{l} V _ {D S \_ M A X} = 5 5 0 V \\ I _ {D S \_ M A X} = 0. 2 8 3 A \end{array}
$$

## Test Condition:

➢ Full Load

## 输出二极管开机波形

![](./素材/images/BPA8604D&LNK364D对比测试/cf7c52052f78cfb2ac652592df62c50b7db34f12f0b37ddf7799b1da1c618852.jpg)

85 VAC

CH2 VR  
CH4 IF

$$
V _ {R \_ M A X} = 3 0. 4 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 2. 9 4 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8604D&LNK364D对比测试/7b1776e091201f2419cce5fea3eb83ca41f2b4e0833d1e4e44eacbecc74235f1.jpg)

85 VAC

CH2 VR  
CH4 IF

$$
V _ {R \_ M A X} = 2 9. 2 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 2. 7 6 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8604D&LNK364D对比测试/af977ac3be83c8acfa993bdd59c6afc07d73f6a243981bd1e27ae8a7e7b55faf.jpg)

265 VAC

CH2 VR  
CH4 IF

$$
V _ {R \_ M A X} = 6 1. 6 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 3. 1 4 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8604D&LNK364D对比测试/191cbf4571144ec87d00a3a8195604a35807137c6f02dffb64260b940dca7dab.jpg)  
265 VAC

CH2 VR  
CH4 IF

$$
V _ {R \_ M A X} = 6 1. 6 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 2. 9 8 \mathrm{A}
$$

## Test Condition:

➢ Full Load

## 输出二极管稳态波形

![](./素材/images/BPA8604D&LNK364D对比测试/4f97a9801da0c8b62a11ba6f17cf7f7e77ff05e3d97c107f3521dadb01dc683c.jpg)

85 VAC

CH2 VR  
CH4 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 3 0. 4 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 2. 7 2 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8604D&LNK364D对比测试/f2d9d13a53164e3477d0c3cb83364f3a6ed3c812d6a7ef5c225c1f2f665427fa.jpg)

85 VAC

CH2 VR  
CH4 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 2 9. 3 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 2. 4 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8604D&LNK364D对比测试/9996eba645bab2f83bd27006ba751a5b55c06b43073740fdc78b1ac9d703131f.jpg)

265 VAC

CH2 VR  
CH4 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 6 1. 9 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 3. 0 1 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8604D&LNK364D对比测试/07e168921a1018fb248ff6c95793f9a6fc07c2ee386850cd413fcc8948a6aac1.jpg)

265 VAC

CH2 VR  
CH4 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 6 1. 9 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 2. 9 5 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

## MOSFET

![](./素材/images/BPA8604D&LNK364D对比测试/c244f9feafc57131c4f48d51ef84e46e34ee2290ef5a7a2881f99e7dfb5081e3.jpg)

85 VAC

CH1 VDS  
CH4 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 7 9 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 3 4 1 \mathrm{A} \end{array}
$$

![](./素材/images/BPA8604D&LNK364D对比测试/e708826e5f60233da7a8583d8f047e8ea4ed920774fbafde5272c9ca1272dc1e.jpg)

85 VAC

CH1 VDS  
CH4 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 7 2 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 2 6 5 \mathrm{A} \end{array}
$$

![](./素材/images/BPA8604D&LNK364D对比测试/746192d870d86633399b6065fed167e86da387f884e678f501317a49b7659be0.jpg)

265 VAC

CH1 VDS  
CH4 IDS

$$
V _ {D S \_ M A X} = 5 5 0 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 0. 4 7 \mathrm{A}
$$

![](./素材/images/BPA8604D&LNK364D对比测试/06617632bcfe976f555e1cdf87c3fd7d569398e9fbfe3a0cbb6b47572eccb55e.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 5 4 0 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 4 1 \mathrm{A} \end{array}
$$

## 温升测试

BPA8604D

<table><tr><td rowspan="2">项目</td><td>85VAC</td><td>115VAC</td><td>230VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>30.04</td><td>29.46</td><td>29.16</td><td>29.17</td></tr><tr><td>BPA8604P (U2)</td><td>103.2</td><td>72.93</td><td>90.48</td><td>97.34</td></tr><tr><td>变压器绕组(T1)</td><td>52.84</td><td>51.06</td><td>53.55</td><td>54.47</td></tr><tr><td>变压器磁芯(T1)</td><td>48.45</td><td>47.32</td><td>49.62</td><td>50.37</td></tr><tr><td>整流二极管(D3)</td><td>52.93</td><td>52</td><td>52.84</td><td>53.27</td></tr><tr><td>整流桥(D1)</td><td>45.51</td><td>40.51</td><td>38.83</td><td>39.12</td></tr><tr><td>输入电解电容(C6)</td><td>48.49</td><td>44.02</td><td>43.77</td><td>44.33</td></tr><tr><td>输出电解电容(C3)</td><td>39.35</td><td>38.66</td><td>39.16</td><td>39.34</td></tr></table>

LNK364D

<table><tr><td rowspan="2">项目</td><td>85VAC</td><td>115VAC</td><td>230VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td></td><td>30.19</td><td>30.1</td><td>30.15</td></tr><tr><td>LNK364P (U2)</td><td>OTP</td><td>68.42</td><td>86.48</td><td>92.21</td></tr><tr><td>变压器绕组(T1)</td><td></td><td>49.89</td><td>52.28</td><td>53.02</td></tr><tr><td>变压器磁芯(T1)</td><td></td><td>47.91</td><td>50.18</td><td>50.83</td></tr><tr><td>整流二极管(D3)</td><td></td><td>51.25</td><td>52.13</td><td>52.35</td></tr><tr><td>整流桥(D1)</td><td></td><td>37.94</td><td>36.37</td><td>36.32</td></tr><tr><td>输入电解电容(C6)</td><td></td><td>42.56</td><td>42.56</td><td>42.87</td></tr><tr><td>输出电解电容(C3)</td><td></td><td>38</td><td>38.46</td><td>38.57</td></tr></table>

备注：增大芯片Source散热铜箔面积可以降低芯片温度。

![](./素材/images/BPA8604D&LNK364D对比测试/f4014632015dcfccfe6306dbe449a17e24054feb7603a374b5e6c34c5ce66325.jpg)

115Vac Line  
![](./素材/images/BPA8604D&LNK364D对比测试/6c9ccad8e092398a0983c7aa9569e6d8e5f96347fb98490c0c4ca3c095fc4026.jpg)

230Vac Line

![](./素材/images/BPA8604D&LNK364D对比测试/926a53bb882d6f892a4dd46b219f621e856aadbd05ba4ed9a13c9d2cb01344eb.jpg)

115Vac Neutral

![](./素材/images/BPA8604D&LNK364D对比测试/6132a0b5f243420db54942b68d98ef59c055bfff1affc54336fefcebca3ed2dd.jpg)

230Vac Neutral

![](./素材/images/BPA8604D&LNK364D对比测试/2c31e5969750c76700843ddc3f54d7a3284c34d6845351b2021f92d4192597e1.jpg)

115Vac Line

![](./素材/images/BPA8604D&LNK364D对比测试/54311430aa23ba43b38ae628277a42afc3d0b5c956d70411bf96e06db7f1c818.jpg)

230Vac Line

![](./素材/images/BPA8604D&LNK364D对比测试/ed4e9c900c2ae9a2bbd4d0f1f58c4b4541b7c9c588515930982478bf4263194a.jpg)

115Vac Neutral

![](./素材/images/BPA8604D&LNK364D对比测试/1b208607e078bdda9c4197e5328a16c537d7e025a1a458f6a951101e3111283d.jpg)

230Vac Neutral

![](./素材/images/BPA8604D&LNK364D对比测试/90208fa88f37dee649a81930a768790722e5ee54605a1e24b1356325a2847421.jpg)

115Vac Horizontal

![](./素材/images/BPA8604D&LNK364D对比测试/879753f4ec6b17016d592c2930683b7381a68a0bc9ec307df60f542ce013e30f.jpg)

230Vac Horizontal

![](./素材/images/BPA8604D&LNK364D对比测试/4f985eff534d60b224682cd0407864c8a61071c0fbb06fed09f1f17b153f30d0.jpg)

115Vac vertical

![](./素材/images/BPA8604D&LNK364D对比测试/b24454c5522bdaaeb1d8e3dcfeeeb20d4f3ea69f57740b69afb71d3d791ab91d.jpg)

230Vac Vertical

![](./素材/images/BPA8604D&LNK364D对比测试/1576f0ad52b4b2674263eb3b26ffde78f198382572d68941cf054473e89e6cfb.jpg)

115Vac Horizontal

![](./素材/images/BPA8604D&LNK364D对比测试/1d0932abe9e5ee9f65f65fe35fcdcf80bbf057a858fcb0a008868b3995a535ff.jpg)

115Vac Vertical

![](./素材/images/BPA8604D&LNK364D对比测试/9a26e84e3e084cd13001785c483e22f6f12ec42abf534c2fa24286bc4084ee8f.jpg)

230Vac Horizontal

![](./素材/images/BPA8604D&LNK364D对比测试/cca10c16fad4dfb8bfe7cbddd0fbda357e85f264626f8755e8dff38792124db0.jpg)

230Vac Vertical

## THANK YOU FOR WATCHING
