![](./素材/images/S7133S_EFT调试总结/0354c1c2e9c8f1c2422e0cf20e40ca7ca39ac88e89b6af956c03416ad61f6013.jpg)

## S7133SEFT调试总结

陈耀兵

上海晶丰明源半导体股份有限公司

## 内容

■问题描述  
原理图  
■了解清楚客户测试方法和指标  
■EFT是对整个系统的考核  
■有感保险丝电阻对EFT的影响  
■PCB设计对EFT的重要性  
■通过变压器设计优化EFT  
■共模电感并电阻改善EFT  
■芯片设计对EFT的影响

## 问题描述

电源规格

输入：90\~264VAC

输出：5V2A

应用：

适配器给摄像头供电

问题描述：

终端客户EFT测试时摄像头出现复位现象

## 电源原理图

![](./素材/images/S7133S_EFT调试总结/6179cb8aa45b028f2e6435da9f2b2f849e090d673d10802c1ca40a564b8ef048.jpg)

## 一、了解清楚客户测试方法和指标

◼ 对于不同的客户可能有不同的测试平台搭建要求和指标要求，需了解清楚（最好到测试现场了解），少走弯路  
◼ 测试平台搭建的不同可能导致测试结果的差异  
◼ 尽量按客户要求搭建平台或在客户端测试，提高整改的效率

## 客户测试平台

## EFT设备

![](./素材/images/S7133S_EFT调试总结/7e0d10cf30ef7a574e8eb934bb974db986496795563313651b2be6fcdaa90c8a.jpg)

## 客户测试设置：

电压：3.1KV（客户解释说设备输出到电源的线和插头形成衰减，通过在插头输出处点检电压为2KV）

耦合：L\N\PE\L+N+PE对GND，极性：正&负

频率：100kHz

脉冲数：75Sp

脉冲重复时间：T-Rep300ms,

测试时间：Test Duration 60s

## 判定标准：

判定标准为B。测试过程中允许画面卡死，卡死后通过电脑端软件操作可恢复是允许的，不允许重新开机恢复画面，测试过程中不允许摄像头出现复位。

## 二、EFT是对整个系统的考核

◼ EFT是不只是对电源，而是对整个系统，电源需注意自身是否掉电或重启，可通过优化减小传递到后端系统的干扰，不能消除；  
◼ 电源与后端系统的连接线对测试影响较大，无论是在设备内部或外部，均需谨慎处理。  
◼ 后端系统的设计对EFT的改善比电源部分更为重要，如果可以让客户后端系统优化可能事半功倍。

## 实例

![](./素材/images/S7133S_EFT调试总结/f99ab222712632ae7cb11116a051eed08df7225a3147667fdd01fca3ca8b6121.jpg)

线随意散开

![](./素材/images/S7133S_EFT调试总结/d6f21ac16d725f68c0a3b68e01199c9c0ec9b0fc5011432ba7ae1d1da59e1f8b.jpg)

![](./素材/images/S7133S_EFT调试总结/73d62d9f6265218f6ab45b38873f3758305fb97133e644566970504eb15c6da0.jpg)

2  
![](./素材/images/S7133S_EFT调试总结/2967a022e93d3849237f5151cf5aaef3bec06e6ecde815903e5756ca0bc81e1a.jpg)

![](./素材/images/S7133S_EFT调试总结/f1ffce84dcc2f28c4260f035f1f5cbd7bde2035abc65baa02352d1b17876045d.jpg)

线捆扎  
![](./素材/images/S7133S_EFT调试总结/697eded5f9c89183291863b4889ff265eb93d4485a6fc5990df15d02652f272e.jpg)

摄像头内部供电线与 网线同一连接器一起 走线，对EFT影响大 断开后单独走线变好

![](./素材/images/S7133S_EFT调试总结/d0910b9c93c33e7dc501a219b9431aa16c1e1a26129595161656a42f76b38ce1.jpg)

## 输出线对EFT影响分析

![](./素材/images/S7133S_EFT调试总结/7e62d126d4ab7307265b4f26205fed0bed7dadd7ed91df1f81b3b7f782b7add5.jpg)

◼ 上页中1和2图中线的摆放方式会导致C增大，从而使负载摄像头受到更大干扰  
◼ 由于EFT脉冲谐波成分丰富，最大辐射干扰频率可达到64MHz左右，相应波长5m左右，所以在此2m长供电线上会形成辐射干扰

## 三、有感保险丝电阻对EFT的影响(优化对芯片FB干扰)

![](./素材/images/S7133S_EFT调试总结/6f8d4a46df15ef7dc36d920848dc5196913f3964c868340cf723f280e7730289.jpg)

![](./素材/images/S7133S_EFT调试总结/1b50f1fc2a555ef60c7b363cf8f312bfddbc40c489dcf80d2f1c9df47fa31d8b.jpg)

保险丝电阻的寄生电感与后端到GND的电容形成谐振，从而在输入电解上形成的差模尖峰干扰增大

## 仿真对比

有感保险丝电阻  
![](./素材/images/S7133S_EFT调试总结/f1654e64c59443d2b60eded36ee29ddda56bd78637ed8cb712c5e70754742cc9.jpg)

## AB之间仿真电压波形

![](./素材/images/S7133S_EFT调试总结/48e87aad98fb98197da540f6b6f752a210d026a76e264b34dfb419ac90620693.jpg)

$\mathtt { V m a x } { = } { + } 2 . 1 \mathsf { K V }$

$\mathsf { V m i n } { = } { = } 1 . 4 1 \mathsf { K V }$

无感保丝电阻  
![](./素材/images/S7133S_EFT调试总结/3a4bcebb9ed3e1daeb1e357e2eb62b518ae5c5392657737e5a9fea27e108ea48.jpg)

![](./素材/images/S7133S_EFT调试总结/9ee31b19eea0febdfc1c48fa433c507384cdd8f7f398eb7bb6277f210a0185e7.jpg)

Vmax=+372V

Vmin=-143V

## 四、PCB设计对EFT的重要性(优化对芯片FB干扰)

![](./素材/images/S7133S_EFT调试总结/981341a52d54319e6efb8ce0764f20b845f410b8d131653548da92b01598ae03.jpg)

## 实例-改进前

![](./素材/images/S7133S_EFT调试总结/5749477e2bd9a4ddcd6f79ebe50192d4a51e20878d605f3a72331357e4ee7db0.jpg)

![](./素材/images/S7133S_EFT调试总结/8b2b44ae095c74d1b54d375f67edac74183a5514e01d1e5deda94243a8ba006c.jpg)

## 实例-改进后

![](./素材/images/S7133S_EFT调试总结/2551d446a0cea91a2077e62e37a68486859890ecd972823f87a3a1aea914c1f3.jpg)

BPS Confidential

晶丰明源  
![](./素材/images/S7133S_EFT调试总结/784a4a07381cae64de6af2528973f35ced03ea320466c26ced3ff263576039a3.jpg)

## 五、通过变压器设计优化EFT (优化对芯片FB干扰)

如何减小EFT对芯片反馈的干扰

能否减小EFT通过下图所示地线的干扰

修改变压器，减少EFT通过此地线的路径

## 改进思路

![](./素材/images/S7133S_EFT调试总结/b88a64f69a2c56e5b59eb46371363360b6c92c56b678d588ec2d7c0f22a241aa.jpg)

## 变压器EFT路径分析

老版变压器(T1)  
![](./素材/images/S7133S_EFT调试总结/9df1338369bdc513b2877802875f872305890504825443cea7ae7cbb607f10e1.jpg)

改进变压器1(T2)  
![](./素材/images/S7133S_EFT调试总结/c916275f63b8a9952068238cf71fcfcf3abb9bd6a8b5bce7f4655ca4252aff18.jpg)

注：T1、T2、T3对应变压器绕制见下页

老版变压器(T1)

<table><tr><td>序号</td><td>起始脚</td><td>终止脚</td><td>绕制规则</td><td>匝数</td><td>绕线方式</td></tr><tr><td>N1</td><td>4</td><td>5</td><td>2UEWφ0.21*1P</td><td>83Ts</td><td>密绕三层(PIN脚朝外)</td></tr><tr><td>胶带</td><td></td><td></td><td></td><td>2Ts</td><td></td></tr><tr><td>N2</td><td>1</td><td>3</td><td>2UEWφ0.21*1P</td><td>10Ts</td><td rowspan="2">两个绕组同层绕制,各均匀间绕半层(PIN脚朝外)</td></tr><tr><td>N3</td><td>3</td><td>NC</td><td>2UEWφ0.21*1P</td><td>14Ts</td></tr><tr><td>胶带</td><td></td><td></td><td></td><td>2Ts</td><td></td></tr><tr><td>N4</td><td>6</td><td>7</td><td>TEX-Eφ0.7*1P</td><td>5Ts</td><td>均匀间绕一层(PIN脚朝外)</td></tr><tr><td>胶带</td><td></td><td></td><td></td><td>3Ts</td><td></td></tr><tr><td colspan="6">磁芯接地(PIN1)</td></tr></table>

## 变压器绕制

改进变压器1(T2)

<table><tr><td>序号</td><td>起始脚</td><td>终止脚</td><td>绕制规则</td><td>匝数</td><td>绕线方式</td></tr><tr><td>N1</td><td>1</td><td>3</td><td>2UEWφ0.2*3P</td><td>10Ts</td><td>密绕一层(PIN脚朝外)</td></tr><tr><td>胶带</td><td></td><td></td><td></td><td>2Ts</td><td></td></tr><tr><td>N2</td><td>4</td><td>5</td><td>2UEWφ0.21*1P</td><td>83Ts</td><td>密绕三层(PIN脚朝外)</td></tr><tr><td>胶带</td><td></td><td></td><td></td><td>2Ts</td><td></td></tr><tr><td>N3</td><td>5</td><td>NC</td><td>2UEWφ0.21*1P</td><td>17Ts</td><td>均匀间绕一层(PIN脚朝外)</td></tr><tr><td>胶带</td><td></td><td></td><td></td><td>2Ts</td><td></td></tr><tr><td>N4</td><td>6</td><td>7</td><td>TEX-Eφ0.7*1P</td><td>5Ts</td><td>均匀间绕一层(PIN脚朝外)</td></tr><tr><td>胶带</td><td></td><td></td><td></td><td>3Ts</td><td></td></tr><tr><td colspan="6">磁芯接PIN5</td></tr></table>

改进变压器2(T3)

<table><tr><td>序号</td><td>起始脚</td><td>终止脚</td><td>绕制规则</td><td>匝数</td><td>绕线方式</td></tr><tr><td>N1</td><td>4</td><td>5</td><td>2UEWφ0.21*1P</td><td>83Ts</td><td>密绕三层(PIN脚朝外)</td></tr><tr><td>胶带</td><td></td><td></td><td></td><td>2Ts</td><td></td></tr><tr><td>N2</td><td>1</td><td>3</td><td>2UEWφ0.21*1P</td><td>10Ts</td><td rowspan="2">两个绕组同层绕制,各均匀间绕半层,N2绕制完后先缠一层绝缘胶带再绕制N3(PIN脚朝外)</td></tr><tr><td>N3</td><td>5</td><td>NC</td><td>2UEWφ0.21*1P</td><td>14Ts</td></tr><tr><td>胶带</td><td></td><td></td><td></td><td>2Ts</td><td></td></tr><tr><td>N4</td><td>6</td><td>7</td><td>TEX-Eφ0.7*1P</td><td>5Ts</td><td>均匀间绕一层(PIN脚朝外)</td></tr><tr><td>胶带</td><td></td><td></td><td></td><td>3Ts</td><td></td></tr></table>

磁芯接PIN5

T2变压器VCC电压偏高，所以改到T3

## 变压器T1和T2 EFT测试对比

<table><tr><td>序号</td><td>电源编号</td><td>电源状态</td><td>变压器T1测试情况</td><td>变压器T2测试情况</td><td>对比</td></tr><tr><td>1</td><td>1#-HK</td><td>原始基础上更改如下三点:1、VCC加0.1uF; 2、保险丝电阻改低感量(F16,感量0.5uH); 3、共模电感并20K电阻</td><td>±3.3kV-Pass±3.4kV-Fail</td><td>±3.7kV-Pass未继续往上测试</td><td>提升400V以上</td></tr><tr><td>2</td><td rowspan="2">2-338(0E0)</td><td>原始基础上更改如下三点:1、VCC加0.1uF; 2、保险丝电阻改低感量(F16,感量0.5uH); 3、共模电感并20K电阻</td><td>±3.4kV-Pass±3.5kV-Fail</td><td>±3.7kV-Pass未继续往上测试</td><td>提升300V以上</td></tr><tr><td>3</td><td>原始基础上只更改保险丝电阻为低感量(F16,感量0.5uH);</td><td>±3.1kV-Fail(原始状态)</td><td>±3.7kV-Pass未继续往上测试</td><td>提升600V以上</td></tr></table>

## 变压器T3 EFT测试

<table><tr><td>序号</td><td>电源编号</td><td>电源状态</td><td>变压器T3测试情况</td></tr><tr><td>1</td><td>1#-新2#-新3#-新4#-新5#-新</td><td>原始基础上更改如下三点:1、VCC加0.1uF; 2、保险丝电阻改低感量(F16,感量0.5uH); 3、共模电感并20K电阻;4、变压器换T3</td><td>±3.5kV-Pass每只样品均测试3次</td></tr></table>

## 六、共模电感并电阻改善EFT

![](./素材/images/S7133S_EFT调试总结/cef2564c6807b394c3bebf6744ca961e0d7040556a94c1a4e147ce1cbb7a6137.jpg)

EFT脉冲信号会在芯片反馈或其他控制脚形成干扰，如果芯片的这些控制脚位接受到干扰后产生误动作可能造成输出电压跌落甚至重启

## 实例-输出电压波形

![](./素材/images/S7133S_EFT调试总结/16a7324025b7d8b49d032a9bf5defdca69a96adbd7182a7476bf42fbf9a09167.jpg)

S713X芯片输出电 压有ms级跌落

![](./素材/images/S7133S_EFT调试总结/abd9be94fcaad64472e649e6daa1acefeb3f6e67ac5d23a5175eb0b47590965d.jpg)

友商芯片输出电压 无跌落， 只有ns 级干扰尖刺

![](./素材/images/S7133S_EFT调试总结/5300a5ddee1b946ccba94d0b266b75650a3394f6637fe84da76904384e0cade9.jpg)

从芯片FB脚波形可看出芯片有一段时间停振，DE反馈芯片可能受干扰进入空载状态

## THANK YOU FOR WATCHING

上海市浦东新区申江路 弄星创科技广场 号楼 层

+86-21-51870166

sales@bpsemi.com

www.bpsemi.com

![](./素材/images/S7133S_EFT调试总结/77165161fc918808f9aded5bcbbb49e9ed49da95d54807d2e5071a757a3016e6.jpg)  
微信公众号

![](./素材/images/S7133S_EFT调试总结/ff5ab7cfee9348e6f0d39a2b3b1fdbfdfb3c3e41113755824c60cde592a5886e.jpg)  
微信视频号
