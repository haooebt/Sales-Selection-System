![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/32c015ae03c7b1659bf53a86ae9b69608d3515aa79a6064ec47b0c0204cbbbed.jpg)

## BPA8505D tapped buck VS flyback(5V/1.2A)

上海晶丰明源半导体股份有限公司

Shanghai Bright Power Semiconductor Co., Ltd.

## 夏奇林

2021 1

## 内容

电路图  
电性能测试数据

## 电路及实物图

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/868c01c793dedea33b02aea48b3f6ff7db66f05e6d3112a11548a911a622ac21.jpg)

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/602149d1bad8c665870491a74262c05d93113f57e1f20684f7d4ed9563ee7889.jpg)

◼ Tapped buck 5V/1.2A

Flyback 5V/1.2A 比tapped buck 少C6(10uF/50V）， D2(M7）

共用一个变压器

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/068d49c2be6425558b99c3ef46a35b217253771dcecd493f7e4fd9f0f6c6f026.jpg)

Lp （1-3）= 2mH

## 待机功耗及效率

Tapped buck

<table><tr><td>输入电压</td><td>负载比例</td><td>输入功率 (W)</td><td>输出负载(A)</td><td>输出电压(V)</td><td>效率(%)</td></tr><tr><td>85vac</td><td>0</td><td>0.182</td><td>0</td><td>5.26</td><td>/</td></tr><tr><td>85vac</td><td>0.25</td><td>2.07</td><td>0.3</td><td>5.09</td><td>73.77</td></tr><tr><td>85vac</td><td>0.5</td><td>4</td><td>0.6</td><td>5.07</td><td>76.05</td></tr><tr><td>85vac</td><td>0.75</td><td>6.04</td><td>0.9</td><td>5.05</td><td>75.25</td></tr><tr><td>85vac</td><td>1</td><td>8.04</td><td>1.2</td><td>5.03</td><td>75.07</td></tr><tr><td>115vac</td><td>0</td><td>0.191</td><td>0</td><td>5.28</td><td>/</td></tr><tr><td>115vac</td><td>0.25</td><td>2.05</td><td>0.3</td><td>5.1</td><td>74.63</td></tr><tr><td>115vac</td><td>0.5</td><td>3.95</td><td>0.6</td><td>5.07</td><td>77.01</td></tr><tr><td>115vac</td><td>0.75</td><td>5.89</td><td>0.9</td><td>5.05</td><td>77.16</td></tr><tr><td>115vac</td><td>1</td><td>7.8</td><td>1.2</td><td>5.03</td><td>77.38</td></tr><tr><td>230vac</td><td>0</td><td>0.234</td><td>0</td><td>5.28</td><td>/</td></tr><tr><td>230vac</td><td>0.25</td><td>2.11</td><td>0.3</td><td>5.1</td><td>72.51</td></tr><tr><td>230vac</td><td>0.5</td><td>3.96</td><td>0.6</td><td>5.06</td><td>76.67</td></tr><tr><td>230vac</td><td>0.75</td><td>5.83</td><td>0.9</td><td>5.05</td><td>77.96</td></tr><tr><td>230vac</td><td>1</td><td>7.67</td><td>1.2</td><td>5.02</td><td>78.54</td></tr><tr><td>265vac</td><td>0</td><td>0.251</td><td>0</td><td>5.29</td><td>/</td></tr><tr><td>265vac</td><td>0.25</td><td>2.13</td><td>0.3</td><td>5.1</td><td>71.83</td></tr><tr><td>265vac</td><td>0.5</td><td>3.98</td><td>0.6</td><td>5.07</td><td>76.43</td></tr><tr><td>265vac</td><td>0.75</td><td>5.85</td><td>0.9</td><td>5.05</td><td>77.69</td></tr><tr><td>265vac</td><td>1</td><td>7.68</td><td>1.2</td><td>5.02</td><td>78.44</td></tr></table>

◼ Flyback

<table><tr><td>输入电压</td><td>负载比例</td><td>输入功率 (W)</td><td>输出负载(A)</td><td>输出电压(V)</td><td>效率(%)</td></tr><tr><td>85vac</td><td>0</td><td>0.171</td><td>0</td><td>4.9</td><td>/</td></tr><tr><td>85vac</td><td>0.25</td><td>2.04</td><td>0.3</td><td>4.94</td><td>72.65</td></tr><tr><td>85vac</td><td>0.5</td><td>4.02</td><td>0.6</td><td>4.97</td><td>74.18</td></tr><tr><td>85vac</td><td>0.75</td><td>6.01</td><td>0.9</td><td>4.97</td><td>74.43</td></tr><tr><td>85vac</td><td>1</td><td>7.99</td><td>1.2</td><td>4.97</td><td>74.64</td></tr><tr><td>115vac</td><td>0</td><td>0.182</td><td>0</td><td>4.89</td><td>/</td></tr><tr><td>115vac</td><td>0.25</td><td>2.04</td><td>0.3</td><td>4.94</td><td>72.65</td></tr><tr><td>115vac</td><td>0.5</td><td>3.94</td><td>0.6</td><td>4.97</td><td>75.69</td></tr><tr><td>115vac</td><td>0.75</td><td>5.88</td><td>0.9</td><td>4.96</td><td>75.92</td></tr><tr><td>115vac</td><td>1</td><td>7.76</td><td>1.2</td><td>4.96</td><td>76.70</td></tr><tr><td>230vac</td><td>0</td><td>0.248</td><td>0</td><td>4.9</td><td>/</td></tr><tr><td>230vac</td><td>0.25</td><td>2.11</td><td>0.3</td><td>4.94</td><td>70.24</td></tr><tr><td>230vac</td><td>0.5</td><td>3.97</td><td>0.6</td><td>4.97</td><td>75.11</td></tr><tr><td>230vac</td><td>0.75</td><td>5.83</td><td>0.9</td><td>4.96</td><td>76.57</td></tr><tr><td>230vac</td><td>1</td><td>7.68</td><td>1.2</td><td>4.96</td><td>77.50</td></tr><tr><td>265vac</td><td>0</td><td>0.285</td><td>0</td><td>4.9</td><td>/</td></tr><tr><td>265vac</td><td>0.25</td><td>2.16</td><td>0.3</td><td>4.94</td><td>68.61</td></tr><tr><td>265vac</td><td>0.5</td><td>4.02</td><td>0.6</td><td>4.96</td><td>74.03</td></tr><tr><td>265vac</td><td>0.75</td><td>5.87</td><td>0.9</td><td>4.97</td><td>76.20</td></tr><tr><td>265vac</td><td>1</td><td>7.72</td><td>1.2</td><td>4.96</td><td>77.10</td></tr></table>

## 输出电压调整率

Tapped buck

<table><tr><td> $V_{IN}(VAC)$ Load (%)</td><td>85</td><td>115</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>5.26</td><td>5.28</td><td>5.28</td><td>5.29</td><td>5.28</td><td>0.65%</td></tr><tr><td>25%</td><td>5.09</td><td>5.1</td><td>5.1</td><td>5.1</td><td>5.10</td><td>0.2%</td></tr><tr><td>50%</td><td>5.07</td><td>5.07</td><td>5.06</td><td>5.07</td><td>5.07</td><td>0.2%</td></tr><tr><td>75%</td><td>5.05</td><td>5.05</td><td>5.05</td><td>5.05</td><td>5.05</td><td>0.0%</td></tr><tr><td>100%</td><td>5.03</td><td>5.03</td><td>5.02</td><td>5.02</td><td>5.03</td><td>0.2%</td></tr><tr><td>平均值</td><td>5.10</td><td>5.11</td><td>5.10</td><td>5.11</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>4.5%</td><td>4.9%</td><td>5.1%</td><td>5.3%</td></tr></table>

◼ Flyback

<table><tr><td> $V_{IN}(VAC)$ Load (%)</td><td>85</td><td>115</td><td>230</td><td>265</td><td>平均值</td><td>线调整率</td></tr><tr><td>0</td><td>4.9</td><td>4.89</td><td>4.9</td><td>4.9</td><td>4.90</td><td>0.2%</td></tr><tr><td>25%</td><td>4.94</td><td>4.94</td><td>4.94</td><td>4.94</td><td>4.94</td><td>0.0%</td></tr><tr><td>50%</td><td>4.97</td><td>4.97</td><td>4.97</td><td>4.96</td><td>4.97</td><td>0.2%</td></tr><tr><td>75%</td><td>4.97</td><td>4.96</td><td>4.96</td><td>4.97</td><td>4.97</td><td>0.2%</td></tr><tr><td>100%</td><td>4.97</td><td>4.96</td><td>4.96</td><td>4.96</td><td>4.96</td><td>0.2%</td></tr><tr><td>平均值</td><td>4.95</td><td>4.94</td><td>4.95</td><td>4.95</td><td rowspan="2" colspan="2"></td></tr><tr><td>负载调整率</td><td>1.4%</td><td>1.6%</td><td>1.4%</td><td>1.4%</td></tr></table>

◼ 计算方法：调整率=100%\*(最大值-最小值)/平均值  
测试条件：带220Ω假负载（\~113mW）

## Flyback 输出电压纹波

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/b55c982e1b9be3a4e0d80e2564fea3b4d0f708239f0632199a059465507bfe37.jpg)

85VAC 满载 $\mathsf { V } _ { \mathsf { P K - P K } } { = } 1 1 2 \mathsf { m V }$

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/1fd4fc602fc8923d83aa6682d50c90ba821649e6dc3a991740858e9920676377.jpg)

115VAC 满载 $V _ { P K - P K } = 1 0 8 m V$

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/2792bd5c58abff79b46e11dab16e053e2bbcc2f465b27ea88dbaf46108dc6244.jpg)

230VAC 满载 $\mathsf { V } _ { \mathsf { P K - P K } } { = } \pmb { 1 } \pmb { 4 } \mathsf { m } \mathsf { v }$

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/d490af489a51a82b6930ebac746991d7a766d6de6c72e988239293c8a9424f8d.jpg)

265VAC 满载 $\mathsf { V } _ { \mathsf { P K - P K } } = 1 1 6 \mathsf { m V }$

## Flyback 动态负载(50%-100%) 10mS 80mA/uS

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/581544ff4a3c4fee3ec55604f45a518537a5579b1e3845d80a52f6ef6ca28ddd.jpg)

$$
\begin{array}{l} 8 5 \mathrm{VAC} \\ \mathrm {CH3/ V _ {PK - }} \\ \mathrm{PK=182mV} \end{array}
$$

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/949fbd04b530510c8d0d78db0e4e8141f1cace3ef9c72537c07b96c073cd0183.jpg)

$$
\begin{array}{l} 1 1 5 \mathrm{VAC} \\ \mathrm {CH3/ V _ {PK - }} \\ \mathrm{PK=184mV} \end{array}
$$

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/68c2fc4d338e9b48e67e5c3306b24cc2bc787db6b93fed39ff16c3e5e35b1e12.jpg)

$$
\begin{array}{l} 2 3 0 \mathrm{VAC} \\ \mathrm {CH3/ V _ {PK - }} \\ \mathrm{PK=184mV} \end{array}
$$

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/f08d3408312b959f31d89c0a580b8cce6f3829f2fd5b0477fbaf9c97d2f971b1.jpg)

$$
\begin{array}{l} 2 6 5 \mathrm{VAC} \\ \mathrm {CH3/ V _ {PK - }} \\ \mathrm{PK=182mV} \end{array}
$$

## Flyback 动态负载(10%-90%) 10mS 80mA/uS

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/5986bc312929b8628bf84f773bdd433090741b824ad8e72fe54d9c5a822bdf4d.jpg)

85VAC $\mathsf { C H 3 } / \mathsf { V } _ { \mathsf { P K } }$ $\scriptstyle \mathtt { p } \kappa ^ { = 2 1 6 \mathsf { m } \mathsf { V } }$

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/04b55238e96682e5e49034549cb7fb0a6896045d1b52f888e5c9e8f3e0c0c827.jpg)

115VAC $\mathsf { C H 3 } / \mathsf { V } _ { \mathsf { P K } }$ $\scriptstyle \mathtt { p } \mathtt { k } ^ { = 2 1 7 \mathsf { m V } }$

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/1c0304db467dc13852fbd3dbf7923e3e406a6f54a993d13ed794029a1e428209.jpg)

230VAC $\mathsf { C H 3 } / \mathsf { V } _ { \mathsf { P K } }$ $\scriptstyle \mathtt { p } \mathtt { k } ^ { = 2 1 1 \mathsf { m V } }$

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/a7eafe67d266c77307c3457d652d382e2aea372e2f6faa3bff32674c6b7e734a.jpg)

265VAC $\mathsf { C H 3 } / \mathsf { V } _ { \mathsf { P K } }$ $\scriptstyle \mathtt { p } \mathtt { k } ^ { = 2 1 7 \mathsf { m V } }$

## Flyback 漏源极电压和漏极电流开机波形

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/d2549250ad1f38f9f5cf322c0a409d098019e06b06e41a08b953be7bc5a60083.jpg)

85VAC开机

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/397e8ec3deb8d52cd8359f643045d7bdbd5f8adca012b9fb1e3a1d774ade0312.jpg)

85VAC开机

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/530b89dca1c4bc28c50774ff1782cd3010bcb56b1e417f5b556325880f5af860.jpg)

265VAC开机

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/ce485d650b29642b1ea570532efda7af9a5f5d81bdd2b83b820df3bb59a1b993.jpg)

265VAC开机

## Flyback 正常工作MOSFET波形

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/9bce2c04cc4c507f24e32356baa128292c218b3c16470864d7add66ecbf8b750.jpg)

85VAC

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/cecdce6a70c9dbaf415f0c204abe71dea4eb0d78f7d3a9d5665e8ad9f08bd461.jpg)

85VAC

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/4f6774ae5547a6d4f2320f54f5ffa8d02f90262ffed8de6a7af7541a783a6c36.jpg)

265VAC

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/90144a283b80296a96bbb451658c302413101edbf3e636712f0b67507f8a283a.jpg)

265VAC

## Flyback短路保护(MOSFET波形)

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/6a4db9964a99c330e6cd4fd96a7ea05795a10501b15c956664d69d19c6268ed1.jpg)

85VAC

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/9c08ea3408655bb2818831df2b42a82b6053017386290c0b7e98c263ac34cf71.jpg)

115VAC

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/b32ebc8cc8be2db15452d68b2e61a50a392d76d0780e8fb937d6c99a46fd0b81.jpg)

230VAC

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/cee89648ad33e16f253c534ff1678721d9a16f0d324b9032ce528d5d40463d45.jpg)

265VAC

## Flyback过流保护(MOSFET波形)及输出电压波形

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/78adbba56a500d1cde6f417b271545d402667e815da54439851dc6e91292b595.jpg)

85VAC  
OCP 2.0A

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/1f5688f44f6cd556622df995971ac2b43948dd9f5d0a9b7f95367a8e1f26fb94.jpg)

115VAC  
OCP 2.1A

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/0de0588150aca2f756a9c1a2e302e03f6e105918b941486e3b003c552642a481.jpg)

230VAC  
OCP 2.3A

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/5c52ce5753e4f8eadb61f781d6d7f4b60a4d9ada0dbc14ee9b1f3ef3691ae671.jpg)

265VAC  
OCP 2.3A

## Tapped Buck 输出电压纹波

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/9b9f1762513b728058f9a738032b754e57d1754a12f3d6070bb53291f1c0a3a0.jpg)

85VAC 满载 $V _ { P K - P K } = 1 8 3 m V$

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/44bec86edaa4ea25fce19ddce3eb566e20ffe38955bf4974d98da632a813bb8d.jpg)

115VAC 满载 $\mathsf { V } _ { \mathsf { P K - P K } } = 1 6 8 \mathsf { m V }$

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/010d142378f1af18e25979e8a6d53c0f541f576007e5567418b9be0f4bb899b2.jpg)

230VAC 满载 $\mathsf { V } _ { \mathsf { P K - P K } } { = } \mathsf { 1 } 4 \mathsf { 1 } \mathsf { m } \mathsf { v }$

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/252b63c469e5c87b40bdb98e3b5092645f05676a0c58aaf5b058aeba92ebce2f.jpg)

265VAC 满载 $V _ { P K - P K } = 1 3 6 m V$

## Tapped Buck 动态负载(50%-100%) 10mS 80mA/uS

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/84c1c1f31547a296b7dc8b0ce60ba9902109981c5e00c20da05c84e7c598e026.jpg)

$$
\begin{array}{l} 8 5 \mathrm{VAC} \\ \mathrm {CH3/ V _ {PK - }} \\ \mathrm{PK=360mV} \end{array}
$$

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/0c3ed75cc259e255c1219cbce9be7d5970eb180d5101715193fd19886f5916ac.jpg)

$$
\begin{array}{l} 1 1 5 \mathrm{VAC} \\ \mathrm {CH3/ V _ {PK - }} \\ \mathrm{PK=356mV} \end{array}
$$

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/f6c9718dabf38ba5960fc3cdb3e17e074458be9665c8079ee406ed17c00ce815.jpg)

$$
\begin{array}{l} 2 3 0 \mathrm{VAC} \\ \mathrm {CH3/ V _ {PK - }} \\ \mathrm{PK=355mV} \end{array}
$$

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/d84b60afa14792566253789ec77bf65267dbd7a8aa5f9875f991017db12bd660.jpg)

$$
\begin{array}{l} 2 6 5 \mathrm{VAC} \\ \mathrm {CH3/ V _ {PK - }} \\ \mathrm{PK=352mV} \end{array}
$$

## Tapped Buck动态负载(10%-90%) 10mS 80mA/uS

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/a7a47cefae10fc4e6001fc76bf1d59e85a0bed162d7e631be3e21ca881180815.jpg)

85VAC $\mathsf { C H 3 } / \mathsf { V } _ { \mathsf { P K } }$ $\scriptstyle \mathtt { p } \mathtt { k } ^ { = 5 2 7 \mathsf { m V } }$

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/7cf9c0264c5d50dc3fc63e0ba8e9beb73252560c12265737242dd4c0d33d39d2.jpg)

115VAC CH3/VPK-$\scriptstyle \mathtt { p } \mathtt { K } ^ { = 5 4 7 \mathsf { m V } }$

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/447792d25157c6a5434041256c2409f0312b43c103124d83a21978e7d1156795.jpg)

230VAC CH3/VPK-PK=548mV

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/49fef0f891bc59ab354d7a91946b8c1e302382202bbc2ab956fa462e77c7e251.jpg)

265VAC CH3/VPK-$\scriptstyle \mathtt { p } \kappa = 5 3 4 \mathsf { m } \lor$

## Tapped Buck 漏源极电压和漏极电流开机波形

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/81ad0bbf79218ffc8042b11108b0ad8e7811a0edd69192d14f1a29c9ff53b37b.jpg)

85VAC开机

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/60ab979808e811876a3c63f68c6f7e2fc5905b6e879ded1264c50558f394a4b7.jpg)

85VAC开机

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/1778a233c5bda2fd625c5f5138aa95fcd5a25c0a4ba29b4ced79de57d970da22.jpg)

265VAC开机

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/2944a75d9c7e47536e0fbfc2920f6f6f439186ac6fcf428a43fff344f9dfd11d.jpg)

265VAC开机

## Tapped Buck 正常工作MOSFET波形

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/6024b7827ae0435dbece6388fae6461edfe3a14123c30c988a2add1f98b56562.jpg)

85VAC

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/5fed050fb97ee512d1db77fbe361f0f76df91f3cccb1e1e19bfa7f8b5a35107e.jpg)

85VAC

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/f76664703b53f7586ba072dca48977c25d0a7865d859ace23a2474c1a9da7f2a.jpg)

265VAC

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/77b186371467b27cf8b331850683f0c527a6dcadefbd546a13c6dd3694363384.jpg)

265VAC

## Tapped Buck 短路保护(MOSFET波形)

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/b93596801310aedccf2634e29a3e027421def68a8f93dc748c57a3024bdbcdc3.jpg)

85VAC

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/1010bc9f32682dfc98b4aa0a6175020696e35817f34e3773fcd671219627e490.jpg)

115VAC

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/ba71aafcc5fe11abe0b801967a8dd4586d22aa4bc9e23a0de52011ea8ee32a4e.jpg)

230VAC

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/89d48175b17068d8065ef85a9d6dbd9ddd290adb8702ec1a9c3cbf3d28306025.jpg)

265VAC

## Tapped Buck 过流保护(MOSFET波形)及输出电压波形

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/96ed5f773478b81491befa88f4ca6d9465b5f88a1f027969568dfb1bb72f40c3.jpg)

85VAC  
OCP 2.2A

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/a71b87be92294d4b17e4f076153809e3c960af02513fed1cb9aaf3398ac5d907.jpg)

115VAC  
OCP 2.1A

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/b6559d9e2f3119dc69e2cff619b3a8e76a8e2c7c3cc1aa7c8e3cd6c1a877bca2.jpg)

230VAC  
OCP 2.5A

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/c29e4acc634d80d66bc7e6be757ce8781e55e84feb5d266d7be75d81a9fda45b.jpg)

265VAC  
OCP 2.6A

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/2ef0b00f93692ab7bfaa63230d92f2995ebe325e0048571bd9704de876623dc2.jpg)

tapped buck 230VAC Line

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/37ea7675cdf1573ab9fa91ea9e9a4ff5b22f9179cf9ab5522a2891b36dbe5556.jpg)

Flyback 230VAC Line

![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/1c393d1bab523f57336dd0c036c480d5783d32d451e27be73b2f61284cc15d86.jpg)

tapped buck 230VAC Neutral  
![](./素材/images/BPA8505D_tapped_buck_对比_flyback测试报告_5V1.2A/d4e9806d68e9cc6e5b7f767546f7aa44b48e47922f5e1f5f5942f0befa4756d5.jpg)

Flyback 230VAC Neutral

<table><tr><td>项目拓扑</td><td>效率</td><td>负载调整率</td><td>纹波及动态响应</td><td>待机功耗</td><td>设计难度</td></tr><tr><td>tappedbuck</td><td>好</td><td>差</td><td>差</td><td>差</td><td>难(1,变压器估算,难相对准确的计算。2,计算出电感值为两个绕组的串联电感和,实际生产测试需要短接再测试,增加人工成本)</td></tr><tr><td>flyback</td><td>差</td><td>好</td><td>好</td><td>差(论上会好,但是芯片有最小工作频率,优势不明显)</td><td>容易(传统flyback变压器计算方法)</td></tr></table>

## THANK YOU FOR WATCHING
