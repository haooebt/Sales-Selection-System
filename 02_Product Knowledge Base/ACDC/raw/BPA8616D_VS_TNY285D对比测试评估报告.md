![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/8ae7664fcbb02e7456155a1839db15b9d7549ce93eee3f0d02e00c08c1000fde.jpg)

## BPA8616D 替换 TNY285D对比测试报告

(12V/0.3A 6V/0.05A -15V/0.1A)

上海晶丰明源半导体股份有限公司

Shanghai Bright Power Semiconductor Co., Ltd.

陈耀兵

2021/05/05

## 内容

电路及实物图  
性能测试对比  
结论

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/325a702874150cf2ed3d578a9ab2f6524db9ec3a925cb27e7a080cd4e26d429e.jpg)

BPA8616D还需更改了以下几点：

变压器设计更改  
R4 6.2K 0805  
R10 1K 0805  
IC7 PC817A (或不更改光耦，但 R11 0.1uF/50V 0805

## 元件面

## 贴片面

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/802155d0821a5980be8721115a9c6fe93b4d63ebc36204d2721ab6bd30bed4cf.jpg)

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/8c248f8e956304bb10b08a37fbe87276b2715cc981b880fd8f5cdb29d4310b99.jpg)

## 输入功率数据对比

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/d0d834a1baab0497eed13b9a2eee0e3a06dc4862cbf11ecd94bfb66a1a9d1117.jpg)

测试条件：带客户板上负载

效率曲线  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/acdc293e45b54ee12c311b998d7b0a12a676e659d1172b16776437ebb77f2be4.jpg)

测试时未考虑客户板本身的负载。

## 输出电压交叉调整率

◼ BPA8616D

<table><tr><td> $V_{IN}(VAC)$  $I_{OUT}(A)$ </td><td></td><td>12V</td><td>6V</td><td>-12V</td></tr><tr><td rowspan="4"> $I_{O12V}=0A$  $I_{O6V}=0A$  $I_{O-12V}=0A$ </td><td>85VAC</td><td>12.43</td><td>6.016</td><td>15.787</td></tr><tr><td>115VAC</td><td>12.43</td><td>6.017</td><td>15.772</td></tr><tr><td>230VAC</td><td>12.43</td><td>6.022</td><td>15.777</td></tr><tr><td>265VAC</td><td>12.43</td><td>6.018</td><td>15.805</td></tr><tr><td rowspan="4"> $I_{O12V}=0.3A$  $I_{O6V}=0A$  $I_{O-12V}=0A$ </td><td>85VAC</td><td>12.426</td><td>6.486</td><td>18.873</td></tr><tr><td>115VAC</td><td>12.426</td><td>6.492</td><td>18.652</td></tr><tr><td>230VAC</td><td>12.426</td><td>6.37</td><td>18.774</td></tr><tr><td>265VAC</td><td>12.425</td><td>6.3193</td><td>18.803</td></tr><tr><td rowspan="4"> $I_{O12V}=0A$  $I_{O6V}=0.05A$  $I_{O-12V}=0.1A$ </td><td>85VAC</td><td>12.429</td><td>5.969</td><td>14.966</td></tr><tr><td>115VAC</td><td>12.429</td><td>5.973</td><td>14.946</td></tr><tr><td>230VAC</td><td>12.43</td><td>5.929</td><td>14.937</td></tr><tr><td>265VAC</td><td>12.43</td><td>5.926</td><td>14.915</td></tr><tr><td rowspan="4"> $I_{O12V}=0.3A$  $I_{O6V}=0.05A$  $I_{O-12V}=0.1A$ </td><td>85VAC</td><td>12.425</td><td>6.235</td><td>15.814</td></tr><tr><td>115VAC</td><td>12.426</td><td>6.235</td><td>15.772</td></tr><tr><td>230VAC</td><td>12.425</td><td>6.205</td><td>15.757</td></tr><tr><td>265VAC</td><td>12.426</td><td>6.1917</td><td>15.759</td></tr></table>

测试条件：Io=0A为只带客户板上负载

TNY285D

<table><tr><td> $V_{IN}(VAC)$  $I_{OUT}(A)$ </td><td></td><td>12V</td><td>6V</td><td>-12V</td></tr><tr><td rowspan="4"> $I_{O12V}=0A$  $I_{O6V}=0A$  $I_{O-12V}=0A$ </td><td>85VAC</td><td>12.43</td><td>6.02</td><td>15.84</td></tr><tr><td>115VAC</td><td>12.43</td><td>6.02</td><td>15.868</td></tr><tr><td>230VAC</td><td>12.43</td><td>6.014</td><td>15.899</td></tr><tr><td>265VAC</td><td>12.43</td><td>6.01</td><td>15.9</td></tr><tr><td rowspan="4"> $I_{O12V}=0.3A$  $I_{O6V}=0A$  $I_{O-12V}=0A$ </td><td>85VAC</td><td>12.426</td><td>6.241</td><td>18.227</td></tr><tr><td>115VAC</td><td>12.426</td><td>6.2406</td><td>18.18</td></tr><tr><td>230VAC</td><td>12.426</td><td>6.24</td><td>18.1</td></tr><tr><td>265VAC</td><td>12.425</td><td>6.2425</td><td>18.13</td></tr><tr><td rowspan="4"> $I_{O12V}=0A$  $I_{O6V}=0.05A$  $I_{O-12V}=0.1A$ </td><td>85VAC</td><td>12.429</td><td>5.985</td><td>15.03</td></tr><tr><td>115VAC</td><td>12.429</td><td>5.983</td><td>15.03</td></tr><tr><td>230VAC</td><td>12.43</td><td>5.975</td><td>15.008</td></tr><tr><td>265VAC</td><td>12.43</td><td>5.971</td><td>14.996</td></tr><tr><td rowspan="4"> $I_{O12V}=0.3A$  $I_{O6V}=0.05A$  $I_{O-12V}=0.1A$ </td><td>85VAC</td><td>12.425</td><td>6.169</td><td>15.8</td></tr><tr><td>115VAC</td><td>12.426</td><td>6.172</td><td>15.753</td></tr><tr><td>230VAC</td><td>12.425</td><td>6.173</td><td>15.73</td></tr><tr><td>265VAC</td><td>12.426</td><td>6.173</td><td>15.73</td></tr></table>

测试条件：Io=0A为只带客户板上负载

## 输出电压纹波 (12V)

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/ee9ef2f305afc29c609a10112a07f068c83916d9cb6977ea7b06cb1fd4f49f27.jpg)

BPA8616D

85 VAC  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/33a485ce7f87221fa7ec01607d2c0990bd5bb6d178005bff51cc8ff62ce2b594.jpg)  
Test Condition:  
➢ NO Load

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/5622b7fa206477652fd6602e2b09ec76378705af0524c7032dc26f8364f628ca.jpg)

BPA8616D

265 VAC  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/c65d10fbfb13825de023feb94bcd4479dea937237c0bd7a5604a95443e4705e4.jpg)  
Test Condition:  
➢ NO Load

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/8fee6f0c1b707558cd262254674d4a37eda34e23e788efbe37382386625e66b4.jpg)

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/3e373f0af6394e5aae2113bd672f9ff97bdc30d03234c43441e39cbaaa4277f7.jpg)

## TNY285D

85 VAC  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/14b40a34c454d6369e287a27ec551688d6f522d747d301700b2fc478995d9e4b.jpg)  
Test Condition:  
➢ NO Load

TNY285D  
265 VAC  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/db0411b8bea450f4730e9ab3c1faec88fd64ad08a52f99204981ae56c1c3eda9.jpg)  
Test Condition:  
➢ NO Load

## 输出电压纹波 (12V)

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/ff8d49639f9c1cbc43f4e8c655ee6dd7f9ca6f7536f14812f0662d26df1997f5.jpg)

BPA8616D

85 VAC  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/fc8d27c846d410dc4b395396db5c84ca0e1dff2387a8d70c825ec95ceff65122.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/1b61d9d04a3bd78d96916840f4b8551f0011ab26d9cf49aae74a945f198b9b20.jpg)

BPA8616D

265 VAC  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/abc182ebe8abe5b9c091dbab63a0d7b0620aa96e1b8fe4c607697dc3d4861416.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/4de370ba6cc16f530e7abade7badbf3ea72e059c431aa51370c6ad37491a5a29.jpg)

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/c96c597005f2899825480861c23f447106f3880eb8cfb79888099fd8177d4510.jpg)

## TNY285D

85 VAC  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/ecf85497ace103e4158d449d8048e14c32e2abebe69497b6454c3f15f0218e80.jpg)  
Test Condition:  
➢ Full Load

TNY285D  
265 VAC  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/1fc936b7a85388aaaf7479ab6341b7cdbef4321f370f72a1679ae052a6769f9f.jpg)  
Test Condition:  
➢ Full Load

## 输出电压纹波 (6V)

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/a60e1c255bf658feaf99bbe1fe94436a8bace7458da76dec4dfe5369b4e6d157.jpg)

## BPA8616D

85 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ Ripple $V _ { P K - P K } = 4 4 . 6 m V$

## Test Condition:

➢ NO Load

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/06626e628071d963c44d6e198b1ce97c182cf3db4d9712e554e091281dd72649.jpg)

## BPA8616D

265 $\mathsf { v } _ { \mathsf { A C } }$

$\begin{array} { r } { \mathsf { C H 1 V _ { \mathsf { O U T } } R i p p l e } } \\ { \mathsf { V _ { P K - P K } } { = } 5 3 \mathsf { m V } } \end{array}$

## Test Condition:

➢ NO Load

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/c2a45707b3680735ea55d24401b01415f6b6fbed13c54ff30c55ff3a498be861.jpg)

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/23a48c750ed906134da98f7927de58a6c39e404fcc717be92c0268f717608ac0.jpg)

## TNY285D

85 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ Ripple $V _ { \mathsf { P K - P K } } = 3 9 . 8 \mathsf { m V }$

## Test Condition:

➢ NO Load

## TNY285D

265 $\mathsf { v } _ { \mathsf { A C } }$

$\begin{array} { r } { \mathsf { C H 1 V _ { o u T } R i p p l e } } \\ { \mathsf { V _ { P K - P K } } { = } 4 4 . 2 \mathsf { m v } } \end{array}$

## Test Condition:

➢ NO Load

## 输出电压纹波 (6V)

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/8fc39a2e59d320b888e7590b8277bec0b3d68152d79e742323c10c9d08be8fd9.jpg)

BPA8616D

85 VAC  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/22c7d887e2f8df7c57530070676979d4e8c13ee27f7b24f6d900b8c5c42e9fb1.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/ecb8b12323d2463f90a3da520983d61bc3e9c26ce33fd6c152d0bfc876dab4ca.jpg)

BPA8616D

265 VAC  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/15236ff5e83b4ca514363a4d87b0c8a13dad716acd9ee0fb26ecce8b57c8f031.jpg)  
Test Condition:  
➢ Full Load

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/b47d59238e5c8162b646ab771f59c2a61cf051081f914d4bfda4198521014925.jpg)

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/7fc953609deba2c652de8791fe7887e488c13fef79567a83f7c3ca90e655c998.jpg)

TNY285D  
85 VAC  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/c648b64a665308ac273adb72b28a029576996152a8e0c7b554f99314053e2118.jpg)  
Test Condition:  
➢ Full Load

TNY285D  
265 VAC  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/ff2ba842f86805a6a65037f6a24c5e50db26b2edd2d1e6469e469631a6d7ffe9.jpg)  
Test Condition:  
➢ Full Load

## 12V

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/2f510c583dcdd91402b65976965fd63de665d273ed4bdc12677fccccde0beedc.jpg)

## BPA8616D

85 VAC

${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ $V _ { \mathsf { P K - P K } } { = } 6 5 . 4 \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 12V 0 A-0.15 A-0 A  
➢ 6V -12V 0A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/88832e996e5e7581ec8bf61c316cffde752a7440f4fe306c410a1f7824b34444.jpg)

## BPA8616D

265 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { \mathsf { P K - P K } } { = } 6 6 . 2 \mathsf { m V }$  
CH4 ${ \mathsf I } _ { 0 \mathsf U \top }$

## Test Condition:

➢ 12V 0 A-0.15 A-0 A  
➢ 6V -12V 0A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/c729a78b706c84fbf2cbca32a70505af42354f95c5824a91cb3d48c73dea4f56.jpg)

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/1e5100b38df06db7b7f063f1a6a602e9216aafb2e6998a9a2fd8433ca7335ecb.jpg)

## TNY285D

85 VAC

${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ $V _ { \mathsf { P K - P K } } = 8 2 . 1 \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 12V 0 A-0.15 A-0 A  
➢ 6V -12V 0A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## TNY285D

265 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $V _ { p | c - P K } = 6 4 . 6 m v$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 12V 0 A-0.15 A-0 A  
➢ 6V -12V 0A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## 动态负载 (6V)

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/4ffc08b6e77303f84e9d2e5b53a91908d0c4ea5bada0f9f4ebd39fcb5efd9282.jpg)

## BPA8616D

85 VAC

${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ $V _ { \mathsf { P K - P K } } { = } 3 0 5 ~ \mathsf { m V }$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 12V 0 A-0.15 A-0 A  
➢ 6V -12V 0A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/d2d28868be65dc82ce0a2cc09ca9984821483ec092af02c77bc8e42623e548ee.jpg)

## BPA8616D

265 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $v _ { p _ { \vert k - P K } } = 2 3 2 m v$  
CH4 ${ \mathsf I } _ { 0 \mathsf U \top }$

## Test Condition:

➢ 12V 0 A-0.15 A-0 A  
➢ 6V -12V 0A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/de0851daa7a5a9cf374b3f4ae9f37c416003ca6da011ee6f6a49a3407c7d14cd.jpg)

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/fd798154dfa315c96881d007515a62b5ff4d455f3917ebe4d6e732f177633f71.jpg)

## TNY285D

85 VAC

${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ $v _ { p _ { \vert k - P K } } = 2 0 0 ~ \mathsf { m v }$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 12V 0 A-0.15 A-0 A  
➢ 6V -12V 0A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## TNY285D

265 VAC

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ $v _ { p _ { \mathrm { K - P K } } } = 2 0 6 ~ \mathsf { m v }$  
$\mathsf { C H 4 } \mathsf { I } _ { \mathsf { O U T } }$

## Test Condition:

➢ 12V 0 A-0.15 A-0 A  
➢ 6V -12V 0A  
➢ Slew Rate: 0.5 A/μS  
➢ Frequency: 100 Hz

## 输出电压开机波形(12V)

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/9103b46cdf2b3e10a8dfc54f5a36a8973417f8e87b00b92501a75c67d8812739.jpg)

BPA8616D  
85 VAC  
CH1 V trise=29.9mS  
➢ NO Load

Test Condition:

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/9dbae35a4fc0b0dfa83d3c872160faf52e41f9e9a9c29b0824cfbc08f9ecd745.jpg)

BPA8616D  
265 VAC  
CH1 VOUT t =30.4mS  
➢ NO Load

Test Condition:  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/34314880b0816bbb36f6f8244aae2d4fc5a5555618a10563f8a7210bd1efc083.jpg)

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/fbff7166eafab2963d102ce011bd58e7b3a6ed307e0f5e7f8e2711b00cc7a9b1.jpg)

TNY285D  
85 VAC  
CH1 VOUT trise= 16.6 mS  
Test Condition:  
➢ NO Load

TNY285D

265 VAC

CH1 VOUT trise=16.6mS

Test Condition:

➢ NO Load

## 输出电压开机波形(12V)

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/2b888d80aa22832492efd5d4c3424d982871e9959c05d392390ae1bdbf23874a.jpg)

BPA8616D  
85 VAC  
CH1 VOUT trise= 31.9 mS  
➢ Full Load

Test Condition:

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/9d60beb4708df53ec1738d8e1ccbd6e35c14822e8cd78a70b583abf1741aa2b9.jpg)

BPA8616D  
265 VAC  
CH1 VOUT t =30.7mS  
➢ Full Load

Test Condition:  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/8cd6653bb210c6290158814371f98061dca7dc57e56a00f34b543e29b1597928.jpg)

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/5c8ff4ac9bbb592e10a61975a17036f6337ef6b44b4533d1b5cdf826b154dec1.jpg)

TNY285D  
85 VAC  
CH1 VOUT trise= 20.1 mS  
Test Condition:  
➢ Full Load

TNY285D

265 VAC

CH1 VOUT t = 17.4 mS

Test Condition:

➢ Full Load

## MOSFET

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/234a0d085628961988adad1ee4af965a24bab677e63e2aa4dc55a74145c27161.jpg)

BPA8616D

85 VAC  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/00404fc2b3b0f22abbcf177a3832a863de72c9c1c39d665db3600ee0dab4f14c.jpg)

Test Condition:

➢ Full Load  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/822c5266aad0d49cc7f06a98499719a15d06085fc2b7412f8ded8426372f000f.jpg)

BPA8616D

265 VAC  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/3ba66e4265346e4ef58da1479b385dfbf4234d41bd4cb9e33cad80283c4789bb.jpg)

Test Condition:  
➢ Full Load

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/bc117e2b7ed761c3cad03357d358086a4d1ca98c08dc3e4e0655da47c84208d1.jpg)

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/2c42825d890922d2f38b53a99f12cd4874146181bf3dd863d741188d3ba4a1cd.jpg)

## TNY285D

85 VAC  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/7f90751ed982b166d99e8911ff248032deea8662e8c662d9f425093ca3452af6.jpg)

Test Condition:  
➢ Full Load

TNY285D  
265 VAC  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/14729f14d98068893b769749d33fd68af5406f1de70fa1ea873fed2afcf829a5.jpg)

Test Condition:  
➢ Full Load

## MOSFET

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/a7309c7b8c3b92eeb3019400e0c838aa0df795536670648bd29ba683a93072bf.jpg)

BPA8616D

85 VAC  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/16490cae2d80e26614d4a7a40b225b169d364540d0546f59c3d7771bb30314ef.jpg)

Test Condition:

➢ Full Load  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/000bf8964e9ac41b6eef3c647fc31d2ba38ce2f64d08ade1b1af7cb468fe4afc.jpg)

BPA8616D

265 VAC  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/f0e4b8b1f400ca2ccc9e196a6849125be4cdded78e9bc652945de692b1559e98.jpg)

Test Condition:  
➢ Full Load

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/bc81c23f5f0882f8dc7048d523e452740af07b18597d2a6b9009ed8a01439377.jpg)

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/23ea349cea1c2417d97fec9a96aa47419cae1dfff78c8d4b5d4e54fee495bf0a.jpg)

## TNY285D

85 VAC  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/011ee75b6487910e396a971257fdf9d8c03eb9e0f4fb0ef16e0929db43cd236d.jpg)

Test Condition:  
➢ Full Load

TNY285D  
265 VAC  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/337472e6fa63d27dac9362fd78609caa13e9827ff874572c9f7437ff7fbb83d8.jpg)

Test Condition:  
➢ Full Load

## 输出二极管开机电压波形（D7)

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/322675a48527bdf26b442c84ca3c0f0c196fdb03ca0433658d1865f6f57f2d48.jpg)

BPA8616D  
85 VAC  
CH2 VD  
$V _ { \mathsf { D } \_ M A X } = 3 8 V$  
➢ Full Load

Test Condition:

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/f2296dada26c6c82e4472e6943f0c2b11587a90cfa985c2fb6446393a4b7a923.jpg)

BPA8616D  
265 VAC  
CH2 VD  
$\mathsf { V } _ { \mathsf { D } \_ \mathsf { M A X } } { = } 8 1 . 2 \mathsf { V }$  
➢ Full Load

Test Condition:  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/a0c5649b5c8c652a402883d4698cee159fd85c70676d69403f47904cac9e9a3c.jpg)

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/11ab877928a338ece45ba2f0ddf78eb52d20e9453d690d52f253235b5bb7048e.jpg)

TNY285D  
85 VAC  
$ { \mathbb { ~ \mathbf { u } } } \quad \mathsf { C H 2 }  { \mathsf { V } } _ { \mathsf { D } }$  
$V _ { \mathsf { D } \_ \mathsf { M A X } } = 3 4 . 4 \mathsf { V }$  
Test Condition:  
➢ Full Load

TNY285D

$2 6 5 \ : \mathsf { V } _ { \mathsf { A C } }$

CH2 VD

$V _ { \mathsf { D } \_ \mathsf { M A X } } { = } 6 6 . 4 \mathsf { V }$

Test Condition:

➢ Full Load

## 输出二极管稳态电压波形 (D7)

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/b6a8da94da9f854124cafebbc672c5ae7047f902b548b24a3bf1a1b6c2861a8f.jpg)

BPA8616D  
85 VAC  
CH2 VD  
$V _ { \mathsf { D } \_ M A X } = 3 8 V$  
➢ Full Load

Test Condition:

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/312071c33ddc4edf53f846fb29927b601cebf4537b3444bc5d306fd457c1bda4.jpg)

BPA8616D  
265 VAC  
CH2 VD  
$\mathsf { V } _ { \mathsf { D } \_ \mathsf { M A X } } { = } 8 1 . 2 \mathsf { V }$  
➢ Full Load

Test Condition:  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/0c223ded87241ed64c2ed1819ef1f1fb809c08eb237b37c703c24fbfc5051f97.jpg)

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/0962abab0e7a1f5c2e2e464f0b74100b432d77e1cfc0e04b26ed4d153f8a439e.jpg)

TNY285D  
${ \tt S 5 V } _ { \sf A C }$  
CH2 VD  
$V _ { \mathsf { D } \_ \mathsf { M A X } } = 3 4 . 4 \mathsf { V }$  
Test Condition:  
➢ Full Load

TNY285D

$2 6 5 \ : \mathsf { V } _ { \mathsf { A C } }$

CH2 VD

$V _ { \sf D _ { \sf D } , M A X } = 6 6 . 2 \sf V$

Test Condition:

➢ Full Load

## 输出二极管电压波形（D13)

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/7ec44073d01612905b1dc447a9baba17ec25fd4468d0eb30783cfa0ebb129776.jpg)

BPA8616D  
265 VAC  
$ { \mathtt { \_ m } } _ { \mathtt { D } 1 3 }$  
$V _ { \mathsf { D } \_ \mathsf { M A X } } { = } 3 9 . 4 \mathsf { V }$  
➢ Full Load  
稳态

Test Condition:

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/740d391dd455370749d48529537817a6652ab87c13c7c39308ff0bac0313affd.jpg)

BPA8616D  
265 VAC  
CH2 VD13  
$V _ { \mathsf { D } \_ \mathsf { M A X } } = 3 9 . 4 \mathsf { V }$  
➢ Full Load  
➢ 开机

Test Condition:  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/a9f8f0c306c3c6fad3502e6a32e4ff28b52a498c1531467c7c2bfa2c3fcb911b.jpg)

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/984a793cc5cc1ffc2ff82de19a6e6791dbf9277218329a88f96df59094a922c3.jpg)

TNY285D  
$2 6 5 \mathsf { V } _ { \mathsf { A C } }$  
CH2 VD13  
$V _ { \mathsf { D } \_ M A X } = 3 2 . 4 \mathsf { V }$  
Test Condition:  
➢ Full Load  
稳态

TNY285D

265 VAC

$ { \mathtt { \_ m } } _ { \mathtt { D } 1 3 }$

$V _ { \mathsf { D } \_ M A X } = 3 2 . 4 \mathsf { V }$

Test Condition:

➢ Full Load

➢ 开机

## 输出二极管电压波形-D8

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/6731d137462f62596643476393fadd8961e75687668d8bf482f908a600af3bcb.jpg)

BPA8616D  
265 VAC  
CH2 VD13  
$V _ { \sf D , \sf M A X } { = } 9 6 . 9 \sf V$  
➢ Full Load  
稳态

Test Condition:

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/09ceb3603a296f101d34f3b1940eb6804970aad07183fabe939cc9e714becce4.jpg)

BPA8616D  
265 VAC  
CH2 VD13  
$V _ { \sf D _ { \sf D } , M A X } = 9 6 . 5 V$  
➢ Full Load  
➢ 开机

Test Condition:  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/ccab4b138816e5ea1097c4f11963112e2153b091647d5383698c29efe23807fa.jpg)

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/8f2366157280211fcf4f73ffc2983247e77714c1842ecaaa9c4a428469a77b4e.jpg)

TNY285D  
$2 6 5 \mathsf { V } _ { \mathsf { A C } }$  
${ \mathsf { C H } } 2 { \mathsf { V } } _ { { \mathsf { D } } 1 3 }$  
$V _ { \sf D \_ M A X } { = } 7 6 . 8 V$  
Test Condition:  
➢ Full Load  
稳态

TNY285D

265 VAC

${ \mathsf { C H } } 2 { \mathsf { V } } _ { { \mathsf { D } } 1 3 }$

$V _ { \sf D \_ M A X } = 7 7 . 6 V$

Test Condition:

➢ Full Load

➢ 开机

## 输入过压保护 MOS

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/c1114121cee5a44998505ff0e2551b743778346425e9a5e9a429d5cddef7b4e8.jpg)

## BPA8616D

CH1 VDC\_IN  
CH2 $\mathsf { V } _ { \mathsf { d } s }$  
CH3 VO

$$
\begin{array}{l} \mathrm {V_ {ds\_MAX}} = 6 5 1 \mathrm{V} \\ \mathrm {V_ {DC\_IN}} = 5 5 0 \mathrm{V} \end{array}
$$

Test Condition:

➢ real Load

触发过压保护， MOS最高电压651V

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/f7238b6c300732e8a96509c9ff06ed89369eb0531817615f9af81fa70b05cfe9.jpg)

## TNY285D

CH1 VDC\_IN  
CH2 $\mathsf { V } _ { \mathrm { d } s }$  
CH3 ${ \sf V } _ { 0 }$

$$
\begin{array}{l} \mathrm {V_ {ds\_MAX}} = 7 1 0 \mathrm{V} \\ \mathrm {V_ {DC\_IN}} = 5 5 0 \mathrm{V} \end{array}
$$

Test Condition:

➢ real Load

无过压保护， MOS最高电压710V， 超过额定值

## 输入欠压保护

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/53068e39583077656a7bb14a7a2a2754f486623c8d718f98a258a360f2165527.jpg)

BPA8616D

CH1 ${ \sf V } _ { 0 }$  
CH3 VAC\_IN $\mathsf { V } _ { \mathsf { A C \_ I N } }$  
$\mathsf { V } _ { \mathsf { A C \_ I N \_ s t a r t } } { = } 6 0 \mathsf { V }$

Test Condition:

➢ real Load

内置欠压保护， 启机电压60VAC

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/efae8d4baa6cd13952e905301af7a0114c3ad94248e14b24bdbb979f95a54a81.jpg)

## TNY285D

CH1 ${ \sf V } _ { 0 }$  
CH3 VAC\_IN $\mathsf { C H 3 } \mathsf { V _ { A C \_ I N } }$

$\mathsf { V } _ { \mathsf { A C \_ I N \_ s t a r t } } { = } 1 6 \mathsf { V }$

Test Condition:

➢ real Load

无输入欠压保护， 16VAC左右就启机

◼ BPA8616D

<table><tr><td rowspan="2">项目</td><td>85VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>85.3</td><td>86.2</td></tr><tr><td>BPA8616D (IC6)</td><td>99.1</td><td>106.5</td></tr><tr><td>变压器绕组(T1)</td><td>93.4</td><td>96.4</td></tr><tr><td>变压器磁芯(T1)</td><td>92.6</td><td>95.7</td></tr><tr><td>整流二极管(D7)</td><td>95.6</td><td>99.5</td></tr></table>

备注：增大芯片Source散热铜箔面积可以降低芯片温度  
12V 0.1A 6V -15V

TNY285D

<table><tr><td rowspan="2">项目</td><td>85VAC</td><td>265VAC</td></tr><tr><td>温度(°C)</td><td>温度(°C)</td></tr><tr><td>环境温度</td><td>86.6</td><td>85.1</td></tr><tr><td>BPA8616D (IC6)</td><td>99</td><td>105.5</td></tr><tr><td>变压器绕组(T1)</td><td>92.4</td><td>95.3</td></tr><tr><td>变压器磁芯(T1)</td><td>92.3</td><td>95.2</td></tr><tr><td>整流二极管(D7)</td><td>95.9</td><td>98.6</td></tr></table>

备注：增大芯片Source散热铜箔面积可以降低芯片温度  
12V 0.1A 6V -15V

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/6e68cdba68159d3589c1e9a9dcfbb9b63ec039a7a2ecbdba7ef972bc6f22ce72.jpg)

115VAC Line BPA8616D  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/911879811f88b44dd08118d610b697ce5e06b182d593968d6d2248156c1a978d.jpg)

115VAC Neutral BPA8616D

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/5e84871aab6519bb9288e2d5fd3d0fd1a5fb6c40776527531650427070009f6b.jpg)

115VAC Line TNY285D

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/6f4db0720af2fa9053badc75fa4e3d99277ccc6e4f97cfff97d0ea363e0a5b17.jpg)

115VAC Neutral TNY285D

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/fba7e0513a004dfa5b4341dc63724138b0a9d3b2a3ffbff0c13d095b8fc75ae6.jpg)

230VAC Line BPA8616D  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/854d5f71c54c48fef3e3f984b7cef3183d17d8d6b0d4cf7be8c8c34cf3d08091.jpg)

230VAC Neutral BPA8616D

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/b8116fb2aed1a542bbecf29bfabfa6df18441d3eddee34a4c4546040e49e5cf5.jpg)

230VAC Line TNY285D

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/13871360ca5333193b1d9925d77630ce7bec8468375c09b1363d76a2621e8bac.jpg)

230VAC Neutral TNY285D

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/a50669bd6166b09bea28f064ce280799d9f6450547ecf1b1f8c97080db80bf15.jpg)

115VAC BPA8616D  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/882aa8c2df9e72f2d94de61758e90d5ca59998751bf42d357b5c6fd6131e6c37.jpg)

230VAC BPA8616D

![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/7141bb5d6c7f95efb85b1885b409570742011be8023a751fbd3b69fd349b7c86.jpg)

115VAC TNY285D  
![](./素材/images/BPA8616D_VS_TNY285D对比测试评估报告/f370011b0c53caab6b019c7429077efce7e0b1c760d1ef44beb22e1ae914abbf.jpg)

230VAC TNY285D

BPA8616D

<table><tr><td></td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>±2kV</td><td>0,90,180,270</td><td>2</td><td>5</td><td>Pass</td></tr><tr><td>L to PE</td><td>±4kV</td><td>0,90,180,270</td><td>12</td><td>5</td><td>Pass</td></tr><tr><td>N to PE</td><td>±4kV</td><td>0,90,180,270</td><td>12</td><td>5</td><td>Pass</td></tr><tr><td>L+N to PE</td><td>±4kV</td><td>0,90,180,270</td><td>12</td><td>5</td><td>Pass</td></tr></table>

## 测试说明

➢ 按照GB/T17626.5和IEC61000-4-5的最新版本要求进行测试  
➢ 室温环境，230VAC输入，板上负载条件

TNY285D

<table><tr><td></td><td>电压</td><td>相位角</td><td>发生器阻抗</td><td>测试次数</td><td>测试结果</td></tr><tr><td>L to N</td><td>±2kV</td><td>0,90,180,270</td><td>2</td><td>5</td><td>Pass</td></tr><tr><td>L to PE</td><td>±4kV</td><td>0,90,180,270</td><td>12</td><td>5</td><td>Pass</td></tr><tr><td>N to PE</td><td>±4kV</td><td>0,90,180,270</td><td>12</td><td>5</td><td>Pass</td></tr><tr><td>L+N to PE</td><td>±4kV</td><td>0,90,180,270</td><td>12</td><td>5</td><td>Pass</td></tr></table>

## 测试说明

➢ 按照GB/T17626.5和IEC61000-4-5的最新版本要求进行测试  
➢ 室温环境，230VAC输入，板上负载条件

## ❑ 结论

BPA8616D TNY285D EMIBPA8616D CPS004-CALECA-V1.2保护，有重启现象。  
BPA8616D Pin to Pin TNY285D  
⚫ 需对应更改变压器设计 (不更改变压器型号，只更改内部绕制结构和电感量)  
R4 6.2K 0805  
R10 1K 0805  
PC817A R11 0.1uF/50V 0805  
D8 150V ( DSK115)  
➢ PCB设计问题已将更改建议提供给客户，但目前由于更改流程复杂暂未进行。

## THANK YOU FOR WATCHING
