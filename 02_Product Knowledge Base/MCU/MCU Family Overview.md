# MCU 产品族总览

资料来源：当前 `MCU` 目录下各系列 Excel 选型表和 PDF 资料。

## 1. 系列梯度

| 系列 | 型号数 | 主频 | Flash | RAM | ADC 通道 | 关键特征 | 初步定位 |
|---|---:|---:|---:|---:|---:|---|---|
| LKS03x | 27 | 48 MHz | 32 KB | 4 KB | 5-10 | 小封装，部分内置 6N/3P3N gate driver | 入门/低成本电机控制 |
| LKS05x | 9 | 96 MHz | 32 KB | 2.5 KB | 4-12 | 12-bit ADC，部分内置 6N/3P3N gate driver | 低成本 96 MHz 电机控制 |
| LKS06x | 3 | 96 MHz | 32 KB | 4 KB | 12 | 当前型号少，资源略高于 LKS05x | 小中资源电机控制 |
| LKS07x | 14 | 96 MHz | 64/128 KB | 12 KB | 4-14 | QEP 全覆盖，部分 CAN，部分内置 gate driver | 中端电机控制，适合带位置/通讯需求 |
| LKS08x | 14 | 96 MHz | 32/64 KB | 8 KB | 5-13 | 覆盖 LQFP64/TQFP48/QFN/SSOP，部分 CAN/QEP/gate driver | 小中资源多封装覆盖 |
| LKS45x | 10 | 192 MHz | 256 KB | 40 KB | 15-27 | 资源最高，双三相、多 ADC/COMP/OPA，CAN/QEP | 高性能电机控制 MCU |

## 2. 快速选型思路

| 客户需求 | 优先考虑 |
|---|---|
| 极低成本、小 Flash、小封装、简单三相电机 | LKS03x / LKS05x |
| 需要 96 MHz，仍然控制成本 | LKS05x / LKS06x / LKS08x |
| 需要 QEP 或 CAN | LKS07x / LKS08x / LKS45x |
| 需要 128 KB Flash | LKS07x |
| 需要 256 KB Flash、40 KB RAM、高 ADC/COMP/OPA 资源 | LKS45x |
| 需要内置 6N gate driver | LKS03x / LKS05x / LKS07x / LKS08x / LKS45x 部分型号 |
| 需要 3P3N gate driver | LKS03x / LKS05x / LKS07x / LKS08x 部分型号 |

## 3. 系列侧重点

### LKS03x

- 48 MHz, 32 KB Flash, 4 KB RAM。
- 封装覆盖很广：TSSOP20/QFN20/SOP16/SSOP24/QFN24/QFN32/QFN40/LQFP48 等。
- 内置 gate driver 型号较多，适合低成本、集成度要求高的电机控制。
- 不适合大代码量、复杂通讯或高性能控制项目。

### LKS05x

- 96 MHz, 32 KB Flash, 2.5 KB RAM。
- 12-bit DAC，ADC 通道最多 12。
- 部分型号内置 6N 或 3P3N gate driver。
- RAM 较小，复杂算法和大缓冲要谨慎。

### LKS06x

- 96 MHz, 32 KB Flash, 4 KB RAM。
- 当前表内仅 3 个型号，均为 12 ADC 通道。
- 可作为 LKS05x 与 LKS08x 之间的补充系列。
- 当前资料较少，正式推荐前建议优先核对 datasheet。

### LKS07x

- 96 MHz, 64/128 KB Flash, 12 KB RAM。
- QEP 全覆盖，适合有编码器/位置反馈的电机项目。
- 部分型号支持 CAN，部分型号内置 6N/3P3N gate driver。
- 是中端电机控制选型的重要系列。

### LKS08x

- 96 MHz, 32/64 KB Flash, 8 KB RAM。
- 封装覆盖 LQFP64/TQFP48/QFN/SSOP。
- 部分型号支持 CAN/QEP，部分型号内置 6N/3P3N gate driver。
- 可用于小中资源、封装受限、成本敏感项目。

### LKS45x

- 192 MHz, 256 KB Flash, 40 KB RAM。
- ADC 15-27 通道，DAC `12bitx2`，COMP 6，OPA 2-6。
- 支持 CAN/QEP，适合高资源电机控制或竞品替代。
- 部分型号有 `5V Supply` 版本；`LKS32MC452FPCT8` 带 6N gate driver。

## 4. 待补充

- 各系列 pinout 与封装兼容关系。
- 各系列 datasheet 中的工作电压、温度等级和关键电气参数。
- 同系列普通版/L 版/内置 driver 版的命名规则。
- 典型竞品替代表。

## 5. 家电方案资料补充

资料来源：`03_Solutions and Applications/Home Appliance/凌鸥创芯产品介绍(大家电应用)-Mar V2.3.pdf`。

### 家电应用定位

| 系列 | 家电定位 | 典型应用 |
|---|---|---|
| LKS32MC45x | 高性能，多电机/PFC/高资源 | 空调外机、干衣机热泵+PFC、洗衣机双电机、PFC 高压风机、高压双电机 |
| LKS32MC07x / MC09x | 中端主流，96MHz，适合主变一体和中高资源电机控制 | 滚筒洗衣机、波轮洗衣机、干衣机、空调外机/内机、家用/商用冰箱、高压风机 |
| LKS32MC08x | 进阶方案，适合洗衣机和冰箱平台 | 滚筒 BLDC/DD 洗衣机、家用/商用冰箱、集成高压预驱冰箱 |
| LKS32MC03x | 性价比和小封装，适合低成本风机/泵类 | 空调内机、冰箱、水泵、风机、厨热/油烟机、洗碗机、强排风机 |

### 已识别家电方案包

| 应用 | 方案线索 |
|---|---|
| 空调外机 | LKS32MC453RCT8 高性能方案；LKS32MC070/071 低成本方案 |
| 洗衣机 | LKS32MC08x/07x 滚筒 BLDC/DD；LKS32MC07x 波轮 DDM |
| 干衣机 | LKS32MC453RCT8 PFC 单变频/双电机/热泵；LKS32MC071CBT8 低成本 PFC 单变频；LKS32MC07x 主变一体 |
| 冰箱 | LKS32MC037M6S8B / LKS32MC077MBS8 家用压缩机；LKS32MC088K / LKS32MC031K 集成高压预驱；LKS32MC072 / LKS32MC057 商用冰箱；LKS32MC034DO / LKS32AT086N8Q9 低压车载冰箱 |
| 厨热/油烟机 | LKS32MC037M / LKS32MC077M 变频油烟机；LKS32MC071C8T8 无电解油烟机 |
| 洗碗机 | LKS32MC037M6S8B + LKS1D5007D + BP86213 + BPA8504D |
| 强排风机/水泵 | LKS32MC034FLF 集成预驱；LKS32MC037L + LKS563 分立；LKS32MC070RBT8 + LKS563 主变一体 |

更多应用级组合见 `03_Solutions and Applications/Home Appliance/Home Appliance Solution Map.md`。

## 6. 2025Q4 英文选型手册补充

资料来源：`../2025Q4晶丰明源选型手册EN (1).pdf`。

### 工业级 MCU 系列确认

2025Q4 手册覆盖以下工业级系列：

- `03 Series`: 48MHz、32KB Flash、4KB RAM，覆盖大量小封装和内置 6N/3P3N Gate Driver 型号。
- `05 Series`: 96MHz、32KB Flash、2.56KB RAM，低成本 96MHz 电机控制。
- `08 Series`: 96MHz、32/64KB Flash、8KB RAM，部分型号带 CAN/QEP/内置 6N。
- `07 Series`: 96MHz、64/128KB Flash、12KB RAM，MCPWM 12/6，适合中端电机控制。
- `09 Series`: 手册出现 `LKS32MC091CBT8`，96MHz、128KB Flash、8KB RAM、TQFP48。
- `45 Series`: 192MHz、256KB Flash、40KB RAM，高性能电机控制，部分型号支持 CAN FD。

### Auto Grade MCU

手册出现 Auto Grade MCU：

| 系列/型号线索 | 初步定位 |
|---|---|
| LKS32AT037 / LKS32AT039 | 48MHz、32KB Flash，小资源车规方向 |
| LKS32AT075 / LKS32AT077 | 96MHz、128KB Flash，中端车规方向 |
| LKS32AT085 / LKS32AT086 / LKS32AT089 | 96MHz、64KB Flash，部分内置 6N Gate Driver |
| LKS32AT453 / LKS32AT455 | 192MHz、256KB Flash，高性能车规方向 |

### 选型提醒

- Auto Grade 与 Industrial Grade 不可混用承诺；替代时需确认温度等级、认证要求和供货策略。
- 手册中的 09 Series 和 Auto Grade 需要后续单独建产品卡或参数矩阵。
