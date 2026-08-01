![](images/e587cb5d2cc4fab98f0c136233965002b1ecc142f45cacf3afbd45fa4e35f92a.jpg)  
南京凌鸥创芯电子有限公司

# LKS32MC45x

© 2019, 版权归凌鸥创芯所有

机密文件，未经许可不得扩散

## 目 录

目录....i
1 概述....1
2 看门狗....2
3 版本历史....3

## 表格目录

表 3-1 文档版本历史.....3

## 图片目录

错误！未找到图形项目表。

## 1 概述

此勘误表适用于LKS32MC45X系列芯片。

## 2 看门狗

IWDG 用的始终是全速时钟，而总线 matrix用的时钟是被 SYS\_CLK\_CFG 分频后的，导致看门狗模块写入配置/喂狗不成功。建议配置/喂狗前先切到全速时钟，喂狗完毕再切回分频时钟。

为了避免切换至全速时钟后，代码被高优先级中断打断，可以在切换时钟前先关闭中断，切换回分频时钟后，再开启中断。另一种避免中断打断的方式是将喂狗操作放置在最高优先级中断中，采样这种方式再无法在切换时钟前关闭中断。

以上问题，只有在使用 SYS\_CLK\_CFG=0x155，配置芯片主时钟为 48MHz 等分频时钟时存在。当 SYS\_CLK\_CFG=0，使用 HRC 时钟，或 SYS\_CLK\_CFG=0x1FF，实验 96MHz 全速时钟时无问题。

```c
代码示例如下：
int main (void)
{
    SYS_PROTECT = 0x7A83;
    SYS_CLK_CFG = 0; //0x1FF

    //Init IWDG
    IWDG_PSW = 0xA6B4;
    IWDG_RTH = 0x11b00;
    IWDG_PSW = 0xA6B4;
    IWDG_CLR = 0x798D;
    //Some of your code

    //Init Clock
    SYS_CLK_CFG = 0x155;

    __disable_irq();
    //Switch to 192MHz full speed clock
    SYS_CLK_CFG = 0x1FF;
    IWDG_PSW = 0xA6B4;
    IWDG_CLR = 0x798D;
    //Switch back to 96MHz clock
    SYS_CLK_CFG = 0x155;
    __enable_irq();

    // Some of your code
    DelayUs(10);
    PASS;
    return 0;
}
```

## 3 版本历史

表 3-1 文档版本历史

<table><tr><td>时间</td><td>版本号</td><td>说明</td></tr><tr><td>2023.09.18</td><td>1.1</td><td>细化分频时钟下看门狗喂狗流程</td></tr><tr><td>2023.03.11</td><td>1.0</td><td>初始版本</td></tr></table>

## 免责声明

LKS 和 LKO 为凌鸥创芯注册商标。

南京凌鸥创芯电子有限公司（以下简称：“Linko”）尽力确保本文档内容的准确和可靠，但是保留随时更改、更正、增强、修改产品和/或 文档的权利，恕不另行通知。用户可在下单前获取最新相关信息。

客户应针对应用需求选择合适的 Linko 产品，详细设计、验证和测试您的应用，以确保满足相应标准以及任何安全、安保或其它要求。客户应对此独自承担全部责任。

Linko在此确认未以明示或暗示方式授予Linko或第三方的任何知识产权许可。

Linko产品的转售，若其条款与此处规定不同，Linko对此类产品的任何保修承诺无效。

禁止用于军事用途或生命监护、维持系统。

如有更早期版本文档，一切信息以此文档为准。