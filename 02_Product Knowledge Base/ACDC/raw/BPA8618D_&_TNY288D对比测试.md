![](./素材/images/BPA8618D_&_TNY288D对比测试/3e7204f9306240c4e0412ac94cea3c56009d9cad203465ac6d2b87e243f55daf.jpg)

## BPA8618D&TNY288D对比测试

## (12V/1A@85\~265Vac)

上海晶丰明源半导体股份有限公司

Shanghai Bright Power Semiconductor Co., Ltd.

WHX

时间：2021年4月

## 电气参数对比

<table><tr><td></td><td>BPA8618D</td><td>TNY288D</td></tr><tr><td>开关频率</td><td>132KHz</td><td>132KHz</td></tr><tr><td>Mosfet BV</td><td>700V</td><td>725V</td></tr><tr><td> $R_{DS\_ON}$ </td><td>4.7Ω</td><td>5.2Ω</td></tr><tr><td>限流点</td><td>550mA</td><td>550mA</td></tr><tr><td>软启动</td><td>有</td><td>无</td></tr><tr><td>输入过压保护</td><td>有</td><td>无</td></tr><tr><td>输入欠压保护</td><td>内置</td><td>外加</td></tr><tr><td>输出过压保护</td><td>自动重启</td><td>锁死</td></tr><tr><td>过载保护</td><td>有</td><td>有</td></tr><tr><td>恒功率输出</td><td>无</td><td>有</td></tr><tr><td>封装</td><td>DIP-7, SOP-7</td><td>DIP-7, SOP-7</td></tr></table>

## 测试数据对比

电源规格:85\~265Vac输入，12V/1A输出

<table><tr><td colspan="2"></td><td>BPA8618D</td><td>TNY288D</td><td></td></tr><tr><td colspan="2">待机功耗</td><td>49mW</td><td>67mW</td><td>包含输入电压检测电阻损耗</td></tr><tr><td rowspan="2">效率</td><td>115Vac</td><td>81.2%</td><td>81.4%</td><td></td></tr><tr><td>230Vac</td><td>82.6%</td><td>82.6%</td><td></td></tr><tr><td rowspan="2">输出电压纹波</td><td>85Vac</td><td>239mV</td><td>224mV</td><td></td></tr><tr><td>265Vac</td><td>208mV</td><td>184mV</td><td></td></tr><tr><td rowspan="2">动态负载性能</td><td>50%-100%</td><td> $263mV_{PK\_PK}$ </td><td> $267mV_{PK\_PK}$ </td><td></td></tr><tr><td>10%-90%</td><td> $315mV_{PK\_PK}$ </td><td> $364mV_{PK\_PK}$ </td><td></td></tr><tr><td rowspan="2">MOSFET应力</td><td> $V_{DS}$ </td><td>560V</td><td>550V</td><td></td></tr><tr><td> $I_{DS}$ </td><td>0.72A</td><td>0.97A</td><td></td></tr><tr><td rowspan="2">二极管应力</td><td>VRR</td><td>68.8V</td><td>74.5V</td><td></td></tr><tr><td> $I_{PK}$ </td><td>6.26A</td><td>7.54A</td><td></td></tr><tr><td colspan="2">温升测试(环温50°C)</td><td>110.46°C</td><td>108.27°C</td><td></td></tr><tr><td colspan="2">传导EMI</td><td>&gt;6dB裕量</td><td>&gt;6dB裕量</td><td></td></tr><tr><td colspan="2">Surge</td><td>Pass</td><td>Pass</td><td>共模2kV,差模4kV</td></tr><tr><td colspan="2">EFT群脉冲</td><td>Pass</td><td>Pass</td><td>4kV,5kHz/38kHz/100kHz</td></tr><tr><td colspan="2">ESD</td><td>Pass</td><td>Pass</td><td>8kV接触放电/15kV空气放电</td></tr></table>

## 电路及实物图

![](./素材/images/BPA8618D_&_TNY288D对比测试/ed034aa02abe798d8795ff937b20d1e117b8c4bed8966309129bf9a1b14ffd33.jpg)

![](./素材/images/BPA8618D_&_TNY288D对比测试/477bb9b482d1081e0b46c87539d6ba77a378a22c8411729e2a519c6fe1f3297f.jpg)

![](./素材/images/BPA8618D_&_TNY288D对比测试/b8d45cd6ed8d6af05940cd4d59c94a92a120bbc5c4170b1914c98510efa41dee.jpg)

![](./素材/images/BPA8618D_&_TNY288D对比测试/3e55d08f1d3b6c4a5f9a0b67cc9d2448cbb999f803b7dec7521659c39c86154d.jpg)

备注：TNY288D在FB pin脚上拉一串电阻做UVL，阻值4M；BPA8618D内部集成UVL功能，无需外部电阻。

效率测试  
![](./素材/images/BPA8618D_&_TNY288D对比测试/a1d8272325663bf6951c669a06d8bf765224c7f3d84bec44e1d90269a2ce11f0.jpg)

负载

## 输出电压调整率

BPA8618D

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>12.073</td><td>12.071</td><td>12.071</td><td>12.070</td><td>12.069</td><td>12.069</td><td>12.07</td><td>0.03%</td></tr><tr><td>20%</td><td>12.070</td><td>12.070</td><td>12.070</td><td>12.069</td><td>12.069</td><td>12.066</td><td>12.07</td><td>0.03%</td></tr><tr><td>40%</td><td>12.069</td><td>12.069</td><td>12.069</td><td>12.069</td><td>12.068</td><td>12.065</td><td>12.07</td><td>0.03%</td></tr><tr><td>60%</td><td>12.069</td><td>12.069</td><td>12.068</td><td>12.068</td><td>12.066</td><td>12.063</td><td>12.07</td><td>0.05%</td></tr><tr><td>80%</td><td>12.068</td><td>12.068</td><td>12.068</td><td>12.065</td><td>12.063</td><td>12.061</td><td>12.07</td><td>0.06%</td></tr><tr><td>100%</td><td>12.065</td><td>12.068</td><td>12.065</td><td>12.064</td><td>12.061</td><td>12.060</td><td>12.06</td><td>0.07%</td></tr><tr><td>平均值</td><td>12.07</td><td>12.07</td><td>12.07</td><td>12.07</td><td>12.07</td><td>12.06</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>0.07%</td><td>0.02%</td><td>0.05%</td><td>0.05%</td><td>0.07%</td><td>0.07%</td></tr></table>

计算方法：调整率=100%\*(最大值-最小值)/平均值  
测试条件：无假负载

TNY288D

<table><tr><td> $V_{IN}(VAC)$ Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>12.075</td><td>12.075</td><td>12.076</td><td>12.076</td><td>12.075</td><td>12.074</td><td>12.08</td><td>0.02%</td></tr><tr><td>20%</td><td>12.074</td><td>12.074</td><td>12.075</td><td>12.074</td><td>12.073</td><td>12.069</td><td>12.07</td><td>0.05%</td></tr><tr><td>40%</td><td>12.074</td><td>12.073</td><td>12.074</td><td>12.073</td><td>12.071</td><td>12.069</td><td>12.07</td><td>0.04%</td></tr><tr><td>60%</td><td>12.073</td><td>12.071</td><td>12.073</td><td>12.071</td><td>12.069</td><td>12.068</td><td>12.07</td><td>0.04%</td></tr><tr><td>80%</td><td>12.069</td><td>12.069</td><td>12.070</td><td>12.069</td><td>12.066</td><td>12.063</td><td>12.07</td><td>0.06%</td></tr><tr><td>100%</td><td>12.065</td><td>12.065</td><td>12.066</td><td>12.064</td><td>12.063</td><td>12.060</td><td>12.06</td><td>0.05%</td></tr><tr><td>平均值</td><td>12.07</td><td>12.07</td><td>12.07</td><td>12.07</td><td>12.07</td><td>12.07</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>0.08%</td><td>0.08%</td><td>0.08%</td><td>0.10%</td><td>0.10%</td><td>0.12%</td></tr></table>

## 输出电压纹波

![](./素材/images/BPA8618D_&_TNY288D对比测试/0d5a676ae2307a2e88ba57b29226aaeb0d95aedbf53eabf8335d779e997f5236.jpg)

85 VAC  
![](./素材/images/BPA8618D_&_TNY288D对比测试/420bae6b8684f32e3eabf6e550a9277153912ea153bee99bc3b7b5cc255f9e5c.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8618D_&_TNY288D对比测试/d5649d1a2e271c3792956eb8732eed7a946c613e9aa653eaba4b546293c15064.jpg)

85 VAC  
![](./素材/images/BPA8618D_&_TNY288D对比测试/d883bd032f46653c405476319d5a93c7121db6a32b350134c9f197f2343ac51c.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8618D_&_TNY288D对比测试/0af021b6edd15099f9833a1cc207c490df99c3dbca1522862d6eec49ee04ac1c.jpg)

265 VAC  
![](./素材/images/BPA8618D_&_TNY288D对比测试/8473d376234a1e5ebbfba27c5bc377f5febd715525592f3c2ef42f88748eece2.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8618D_&_TNY288D对比测试/70d1f17ab1928d0cea4cba187bef2f0744101fd4cd8c425ffb4f741b8445c30f.jpg)

265 VAC  
![](./素材/images/BPA8618D_&_TNY288D对比测试/fb21139653a88fc1da82be66423853022a43c19684ec1f8a322404ae6762d4e1.jpg)  
Test Condition:  
➢ Full Load

## (50%-100%)

![](./素材/images/BPA8618D_&_TNY288D对比测试/9b24cd3559c6b0f1c2af95c2e2a46444224928aa4645099caa5f626d47ed6179.jpg)

85 VAC

CH4 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 2 6 3 ~ \mathsf { m V }$  
CH3 ${ \mathsf I } _ { 0 \mathsf U \top }$

## Test Condition:

➢ 0.5 A-1 A-0.5 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8618D_&_TNY288D对比测试/72da65aaee26b89279ec3acdaa769f22ce8c6e0d0a8406f977d050e1aa7b37c1.jpg)

85 VAC

$\mathsf { C H } 4 \mathsf { V } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 2 6 7 ~ \mathsf { m V }$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.5 A-1 A-0.5 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8618D_&_TNY288D对比测试/02e17d8db2157cf012559b1fd7cdc14df508eae050dee78655d15628c24cb465.jpg)

265 VAC

CH4 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { \mathsf { P K - P K } } = 2 3 6 ~ \mathsf { m V }$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.5 A-1 A-0.5 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8618D_&_TNY288D对比测试/66fa68982dbb6b0ebd7133932ff3408795970b2705a36de3ccaa93a2e156c11a.jpg)

265 VAC

$\mathsf { C H } 4 \mathsf { V } _ { \mathsf { O U T } }$ $v _ { p _ { \vert k - P K } } = 2 2 8 ~ \mathsf { m V }$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.5 A-1 A-0.5 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## (10%-90%)

![](./素材/images/BPA8618D_&_TNY288D对比测试/d4de0fa86868c9cedee28f755d276b4f5bf540b29ee831af88296bf3aa94681b.jpg)

85 VAC

CH4 VOUT $\mathsf { V } _ { \mathsf { O U T } }$ $\mathsf { V } _ { \mathsf { P K - P K } } { = } 3 1 5 \mathsf { m V }$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U } \mathsf { T } } }$

## Test Condition:

➢ 0.1A-0.9 A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8618D_&_TNY288D对比测试/a3adc367e0fc9df73b6a37973cd2a0ecdc14215db4b8302b53bcb9f4f7216a1a.jpg)

85 VAC

CH4 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { \mathsf { P K - P K } } { = } 3 6 4 ~ \mathsf { m V }$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.1A-0.9 A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8618D_&_TNY288D对比测试/14b228eccd11b0f7e86b8d4287a63581b02070e90126114be0dca262e8ee81ea.jpg)  
265 VAC

CH4 V $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { P K - P K } = 2 7 2 m v$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.1A-0.9 A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8618D_&_TNY288D对比测试/1db449f8a25ccb756ab9629aede614396360c4222b497767e8612d1f9f90a20d.jpg)

265 VAC

CH4 VOUT $v _ { p _ { \mathrm { K - P K } } } { = } 2 8 8 ~ \mathsf { m V }$  
$\mathsf { C H 3 } \mathsf { I _ { 0 \mathsf { U T } } }$

## Test Condition:

➢ 0.1A-0.9 A-0.1 A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## 输出电压开机波形

![](./素材/images/BPA8618D_&_TNY288D对比测试/fae22b3ee79fc0a313e7a2dc63dc536472a3eaaee6298182e96949a606ec7250.jpg)

85 VAC  
![](./素材/images/BPA8618D_&_TNY288D对比测试/3091be31e18378c9b6a69b189d132f6fa8cadfe21b6d79c5dc3ca855aa66fc7c.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8618D_&_TNY288D对比测试/b7b01a3996c9e801d9545a53b71e5482d2713157408c1fda2cf707cfb8330a1b.jpg)

85 VAC  
![](./素材/images/BPA8618D_&_TNY288D对比测试/b3545debf9b38b55b93d1fcbd9a83296835782a20050dbba823378aa7686b61c.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8618D_&_TNY288D对比测试/eb264547430f825724b45880013688c2994bfdfe18c0dda1a09842e5954af85a.jpg)

265 VAC  
![](./素材/images/BPA8618D_&_TNY288D对比测试/d23f68ac92368c5889e7ca227d37b3f8c8114c6a8d079a8f7c62da24593ccf4f.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8618D_&_TNY288D对比测试/060e83716dc41975d4c5fb937a32de767d52df2eae750654054266a286244c2a.jpg)

265 VAC  
![](./素材/images/BPA8618D_&_TNY288D对比测试/07872c8817bada0ef201b4d446cdb6c257fe22fac34fd8950f43f407d0fc2103.jpg)  
Test Condition:  
➢ Full Load

## MOSFET

![](./素材/images/BPA8618D_&_TNY288D对比测试/844c1702edef2021135bb76703336856021877a8672042822303ebf620fb1980.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 3 0 8 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 6 4 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618D_&_TNY288D对比测试/87e78c022aef15e323457cdfb2b5c403bae91a0ca793f5504fd30d1ea2a5fc53.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 3 0 6 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 6 5 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618D_&_TNY288D对比测试/8afafaf027e3b591aeda9d4887b1105bd678dfe3b5e8030f5e987856f661d866.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} V _ {D S \_ M A X} = 5 6 0 V \\ I _ {D S \_ M A X} = 0. 7 2 3 A \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618D_&_TNY288D对比测试/497ad32d4cf9ae51961ade460f2d2d8e9167366be71bf9f4831ab94c6c71151f.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} V _ {D S \_ M A X} = 5 5 0 V \\ I _ {D S \_ M A X} = 0. 9 7 A \end{array}
$$

## Test Condition:

➢ Full Load

## MOSFET

![](./素材/images/BPA8618D_&_TNY288D对比测试/5e8af47aa7fc18d08e5619bf2593d684d305011ceede29a9cb543f8f72256ff3.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 7 1 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 6 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618D_&_TNY288D对比测试/fd03e954eec9c23e0486aa6c61d90eac4a7ba540f81eb7b574f5d57895a99f31.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 2 6 9 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 6 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618D_&_TNY288D对比测试/7d6aa4dd81b064161151b78c9f96c29cf6d85c1f59130a83cb8890bf93441e35.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
V _ {D S \_ M A X} = 5 5 0 V
$$

$$
I _ {D S \_ M A X} = 0. 6 4 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618D_&_TNY288D对比测试/273d063764c5bd646a48176caf705f2feafc6470c8b3c55cd2394d1bc6dc36ec.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
V _ {D S \_ M A X} = 5 5 0 V
$$

$$
I _ {D S \_ M A X} = 0. 5 6 \mathrm{A}
$$

## Test Condition:

➢ Full Load

## 输出二极管开机波形

![](./素材/images/BPA8618D_&_TNY288D对比测试/58df2b829e98ae21815c83f5ac970c141c0f3a27d2bc686287884b07f01fd243.jpg)

85 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 3 2. 8 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 6. 2 8 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618D_&_TNY288D对比测试/8916e210996e0a23188832a4f241c4f6416c4d81957ade7989ea2f5a145457a2.jpg)

85 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 4 0. 8 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 5. 9 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618D_&_TNY288D对比测试/74a4b302b47a8c46d165c065d68f6a7878861372b2b723a7522d5b2f609e2cad.jpg)

265 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 6 8. 8 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 6. 2 6 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618D_&_TNY288D对比测试/c9c086da807ec6899337f86811ebf7d4ee19f76da58d685c888163f7b51cac2c.jpg)

265 VAC

CH2 VR  
CH3 IF

$$
\begin{array}{l} \mathrm {V_ {R\_MAX}} = 7 4. 5 \mathrm{V} \\ \mathrm {I_ {F\_MAX}} = 7. 5 4 \mathrm{A} \end{array}
$$

## Test Condition:

➢ Full Load

## 输出二极管稳态波形

![](./素材/images/BPA8618D_&_TNY288D对比测试/db2b22953bc2a684d9e3eab4e3e31c553fdddf061c8ab0ecd9e0c78e8b8c9ae9.jpg)

85 VAC

CH2 VR  
CH3 IF

$$
V _ {R \_ M A X} = 3 5. 6 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 5. 9 8 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618D_&_TNY288D对比测试/55fae7b61ac62bfe48569410f3aa9f22e733e324267a6c7f86d950c266e3b3a6.jpg)

85 VAC

CH2 VR  
CH3 IF

$$
V _ {R \_ M A X} = 4 4. 6 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 5. 8 1 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618D_&_TNY288D对比测试/8924939561693195638ea307a81778a4636a25d7cd905a2cf077af195828111f.jpg)

265 VAC

CH2 VR  
CH3 IF

$$
V _ {R \_ M A X} = 6 8. 2 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 6. 1 6 \mathrm{A}
$$

## Test Condition:

➢ Full Load

![](./素材/images/BPA8618D_&_TNY288D对比测试/6387dcf1dc26ba58e1915428cbbcf8e63e44ceb8d832aa5ae8934ede5c95190e.jpg)

265 VAC

CH2 VR  
CH3 IF

$$
V _ {R \_ M A X} = 7 0. 7 \mathrm{V}
$$

$$
I _ {F \_ M A X} = 5. 5 7 \mathrm{A}
$$

## Test Condition:

➢ Full Load

## MOSFET

BPA8618D  
![](./素材/images/BPA8618D_&_TNY288D对比测试/f447b15c6fa8f417f9ae7b15cf52f3c467d7d5eb8e6fa907b35ac49c0f51b132.jpg)

CH1 VDS  
CH2 VDC\_IN  
CH4 VO

$$
V _ {D S \_ M A X} = 7 0 0 \mathrm{V}
$$

$$
V _ {D C I N} = 5 7 0 \mathrm{V}
$$

Test Condition:

➢ Full Load

TNY288D  
![](./素材/images/BPA8618D_&_TNY288D对比测试/4817144b1fce3f8915fe294f971ae240ed67a6d29e0a9400372db6eca0d97627.jpg)

CH1 VDS  
CH2 VDC\_IN  
CH4 VO

$$
V _ {D S \_ M A X} = 7 4 0 \mathrm{V}
$$

$$
V _ {D C \_ I N} = 5 7 0 V
$$

Test Condition:

➢ Full Load

BPA8618D  
![](./素材/images/BPA8618D_&_TNY288D对比测试/3f417f704d1597147b999f005a5ee1da1c68d5ca879f219325f65cd6eb571916.jpg)

CH1 VAC\_IN  
CH4 Vo

VAC\_IN\_STARTUP=65 V

Test Condition:

➢ No Load

TNY288D  
![](./素材/images/BPA8618D_&_TNY288D对比测试/844fb9a352287c9aa8e90997370c4384a57eb91017543a0a28d74d3f05aba0cc.jpg)

CH1 VAC\_IN  
CH4 Vo

VAC\_IN\_STARTUP=73 V

Test Condition:

➢ No Load

备注：TNY288D在FB pin脚上拉一串电阻做UVL，阻值4M；BPA8618D内部集成UVL功能，无需外部电阻。

## MOSFET

![](./素材/images/BPA8618D_&_TNY288D对比测试/3a379baf109adcc5c95fce0c6ad93c6dfc71c55bd87e2baa67a544429d934825.jpg)

85 VAC

${ \mathsf { C H 1 } } \mathsf { V _ { D S } }$  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 3 0 4 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 6 3 \mathrm{A} \end{array}
$$

![](./素材/images/BPA8618D_&_TNY288D对比测试/d735d1513d77b5d19a47bb19d19424b8ec4b688908bbd1bab9c4a429c1daeed4.jpg)

85 VAC

CH1 VDS  
CH3 IDS

$$
\begin{array}{l} \mathrm {V_ {DS\_MAX}} = 3 0 3 \mathrm{V} \\ \mathrm {I_ {DS\_MAX}} = 0. 6 \mathrm{A} \end{array}
$$

![](./素材/images/BPA8618D_&_TNY288D对比测试/e43ccaf292df1d2ccf0b1ea82868445f97b21432c6d6d67ba59e434d081c896c.jpg)

265 VAC

CH1 VDS  
CH3 IDS

$$
V _ {D S \_ M A X} = 5 6 0 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 0. 8 7 \mathrm{A}
$$

![](./素材/images/BPA8618D_&_TNY288D对比测试/e9cbd79196dcf0dfb60117b28546266c5f8708b35c4bd012d8bfca3c30aed240.jpg)

265 VAC

CH1 VDS

$$
V _ {D S \_ M A X} = 5 6 0 \mathrm{V}
$$

$$
I _ {D S \_ M A X} = 0. 7 8 \mathrm{A}
$$

## 温升测试

BPA8618D

<table><tr><td rowspan="2">项目</td><td>85VAC</td><td>115VAC</td><td>230VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>50</td><td>50</td><td>50</td><td>50</td></tr><tr><td>BPA8618D (U2)</td><td>110.46</td><td>96.06</td><td>91.7</td><td>93.22</td></tr><tr><td>变压器绕组(T1)</td><td>83.4</td><td>82.05</td><td>83.81</td><td>84.24</td></tr><tr><td>变压器磁芯(T1)</td><td>83.35</td><td>82</td><td>84.22</td><td>84.84</td></tr><tr><td>整流二极管(D3)</td><td>87.97</td><td>88.12</td><td>89.7</td><td>89.8</td></tr><tr><td>整流桥(D1)</td><td>66.98</td><td>61.8</td><td>56.54</td><td>55.38</td></tr><tr><td>输入电解电容(C6)</td><td>70.37</td><td>66.67</td><td>64.41</td><td>63.98</td></tr><tr><td>输出电解电容(C3)</td><td>69.09</td><td>69.31</td><td>70.7</td><td>70.62</td></tr></table>

TNY288D

<table><tr><td rowspan="2">项目</td><td>85VAC</td><td>115VAC</td><td>230VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>50</td><td>50</td><td>50</td><td>50</td></tr><tr><td>TNY288D (U2)</td><td>108.27</td><td>94.66</td><td>92.28</td><td>95.43</td></tr><tr><td>变压器绕组(T1)</td><td>85.32</td><td>82.51</td><td>83.2</td><td>84.42</td></tr><tr><td>变压器磁芯(T1)</td><td>86.48</td><td>83.69</td><td>85.07</td><td>86.47</td></tr><tr><td>整流二极管(D3)</td><td>90.9</td><td>90.03</td><td>90.41</td><td>91.04</td></tr><tr><td>整流桥(D1)</td><td>68.04</td><td>62.77</td><td>57.05</td><td>56.52</td></tr><tr><td>输入电解电容(C6)</td><td>71.07</td><td>66.91</td><td>64.12</td><td>64.42</td></tr><tr><td>输出电解电容(C3)</td><td>70.21</td><td>69.69</td><td>69.96</td><td>70.35</td></tr></table>

备注：增大芯片Source散热铜箔面积可以降低芯片温度。

![](./素材/images/BPA8618D_&_TNY288D对比测试/ff2b397f4a78b49130480ea4245b1fd7c5a1037e891585aa7678686ab258f442.jpg)

115Vac Line  
![](./素材/images/BPA8618D_&_TNY288D对比测试/9dc6c0bd9a2292fb9a0cc1b33a7b5ddb4d868dadcb93e70e73988dab5c2df96b.jpg)

230Vac Line

![](./素材/images/BPA8618D_&_TNY288D对比测试/9ece446b5710b651281a169cadc24199bc4b0badf3fb44743578f06ccbf832e5.jpg)

115Vac Neutral

![](./素材/images/BPA8618D_&_TNY288D对比测试/178e2f87af2347428eacb39f90b1899c48b94552d8854574be440b72260a48cc.jpg)

230Vac Neutral

![](./素材/images/BPA8618D_&_TNY288D对比测试/fc4b2200673fb72d7532c959181b0df4d91f3d57a8bb36103eb2df09ba592988.jpg)

115Vac Line  
![](./素材/images/BPA8618D_&_TNY288D对比测试/b67feb98e46afeddf00bdcdff1210cfbe4890ade2095690e94ed547711d23382.jpg)

230Vac Line

![](./素材/images/BPA8618D_&_TNY288D对比测试/7a0f98637cd378b1f78f523c9e307a4ed60f27a0f8b1a6b5a5a17c6493c5e14d.jpg)

115Vac Neutral

![](./素材/images/BPA8618D_&_TNY288D对比测试/e6c0b92e6e053806550c283578097f1dad4412a02e1324a6c35f76dcb57c63a4.jpg)

230Vac Neutral

## Surge

BPA8618D

<table><tr><td>差模</td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>+2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to PE</td><td>+4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>L to PE</td><td>-4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>N to PE</td><td>+4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>N to PE</td><td>-4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr></table>

TNY288D

<table><tr><td>差模</td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>+2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>0/90/180/270</td><td>2</td><td>10</td><td>Pass</td></tr><tr><td>L to PE</td><td>+4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>L to PE</td><td>-4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>N to PE</td><td>+4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr><tr><td>N to PE</td><td>-4kV</td><td>0/90/180/270</td><td>12</td><td>10</td><td>Pass</td></tr></table>

## EFT

BPA8618D

<table><tr><td>差模</td><td>电压</td><td>脉冲群持续时间</td><td>脉冲频率</td><td>测试时间</td><td>测试结果</td></tr><tr><td>L to N</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr></table>

TNY288D

<table><tr><td>差模</td><td>电压</td><td>脉冲群持续时间</td><td>脉冲频率</td><td>测试时间</td><td>测试结果</td></tr><tr><td>L to N</td><td>+4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>15ms</td><td>5kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>0.75ms</td><td>100kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-2kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>+4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr><tr><td>L to N</td><td>-4kV</td><td>2ms</td><td>38kHz</td><td>120s</td><td>Pass</td></tr></table>

BPA8618D

<table><tr><td>测试点</td><td>电压(V)</td><td>放电类型</td><td>放电次数</td><td>测试结果</td></tr><tr><td>Vo</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr></table>

TNY288D

<table><tr><td>测试点</td><td>电压(V)</td><td>放电类型</td><td>放电次数</td><td>测试结果</td></tr><tr><td>Vo</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-8kV</td><td>接触放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>Vo</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>+15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr><tr><td>GND</td><td>-15kV</td><td>空气放电</td><td>10</td><td>Pass</td></tr></table>

## THANK YOU FOR WATCHING
