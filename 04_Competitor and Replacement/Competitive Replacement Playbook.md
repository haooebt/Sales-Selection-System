# Competitive Replacement Playbook

本文件用于指导竞品规格书替代分析。用户提供竞品规格书后，agent 应按本文流程输出结论和对比报告。

## 最终目标

当用户提供竞品规格书时，输出：

- 竞品类别判断：ACDC、MCU、IPM、Gate Driver 等。
- 我司主推替代型号。
- 我司备选替代型号。
- 替代等级：A/B/C/D。
- 关键参数对比表。
- 推荐理由。
- 不匹配项和风险点。
- 需要客户或内部进一步确认的问题。

## 处理流程

### 1. 读取输入资料

先识别用户提供的是：

- 竞品规格书
- 竞品型号名称
- 客户项目参数
- 竞品规格书加客户应用场景

若只有竞品型号，没有规格书，应先说明结论可信度较低，并要求补充规格书或关键参数。

### 2. 判断竞品类别

按关键词和关键参数判断类别：

| 类别 | 典型识别线索 |
|---|---|
| ACDC | offline、flyback、buck、HV startup、FB、CS、DRV、integrated MOS |
| MCU | CPU core、Flash、RAM、ADC、PWM、Timer、UART、SPI、I2C、CAN |
| IPM | Intelligent Power Module、3-phase inverter、HVIC、LVIC、FO、UVLO |
| Gate Driver | gate driver、high-side、low-side、bootstrap、HO/LO、HIN/LIN |
| LED Driver | LED current、dimming、PF、THD、constant current |
| DC/DC | buck、boost、input voltage、switching frequency、inductor |

### 3. 提取竞品关键参数

不同类别必须提取不同字段。

#### MCU

- 品牌和型号
- 内核和主频
- Flash/RAM
- 工作电压
- 工作温度
- 封装和 pin 数
- GPIO 数量
- ADC 精度、通道数、采样率
- Timer/PWM 数量和高级 PWM 能力
- OPA/COMP/DAC/PGA/QEP 等模拟或电机控制资源
- UART/SPI/I2C/CAN/USB 等通讯接口
- 时钟、安全、低功耗、boot、调试接口
- 软件迁移风险

#### ACDC

- 拓扑
- 输入电压范围
- 输出功率/电流能力
- 是否集成 MOS
- 开关频率
- 启动方式
- 反馈方式
- 保护功能
- 待机功耗
- 封装
- 应用场景

#### IPM

- 耐压
- 电流等级
- 桥臂结构
- 驱动逻辑
- 保护功能
- 温度检测/故障输出
- 封装尺寸和 pinout
- 散热条件
- 推荐应用功率段

#### Gate Driver

- 通道数和结构
- 高低侧耐压
- 驱动峰值电流
- 输入逻辑
- 保护功能
- 延迟和死区
- 自举要求
- 封装和 pinout

### 4. 查找我司候选产品

先读：

- `02_Product Knowledge Base/Product Quick Locator.md`
- `02_Product Knowledge Base/Product Line Index.md`

再按类别读取具体入口：

- MCU：`02_Product Knowledge Base/MCU/MCU Family Overview.md`
- IPM：`02_Product Knowledge Base/IPM/00_Product Card.md`
- Gate Driver：`02_Product Knowledge Base/Driver/00_Product Card.md`
- ACDC：`02_Product Knowledge Base/ACDC/00_Intake Notes.md`

筛选顺序：

1. 产品类别必须匹配。
2. 硬性参数必须满足。
3. 封装/pinout 越接近越优先。
4. 关键外设或保护功能必须覆盖客户应用。
5. 成本、供货、软件迁移难度作为排序依据。

### 5. 判定替代等级

| 等级 | 含义 | 典型情况 |
|---|---|---|
| A | 高度匹配 | 关键参数、封装、pinout、功能资源接近，可能直接替代或小改替代 |
| B | 功能匹配 | 功能资源可覆盖，但 PCB、软件、参数余量或外围电路需要调整 |
| C | 方案替代 | 产品类别或架构可满足应用，但不是直接替换，需要重新设计方案 |
| D | 不建议替代 | 核心参数、应用场景、安全余量或迁移成本不适合 |

### 6. 输出结论

结论必须先行，避免只堆参数。

推荐格式：

```text
结论：建议优先评估我司 XXX，替代等级 B。
原因：核心资源/功率/封装/应用场景基本覆盖，但存在 XXX 风险，需要确认 XXX。
备选：YYY，适合在 XXX 条件下使用。
```

### 7. 沉淀记录

处理完成后，至少更新以下一项：

- 竞品型号卡
- Replacement Tables
- 客户案件卡
- 产品线定位卡
- 案例复盘

## 对比报告必须包含的参数

### 通用字段

| 字段 | 说明 |
|---|---|
| 竞品品牌/型号 | 原始型号和品牌 |
| 竞品类别 | ACDC/MCU/IPM/Gate Driver 等 |
| 客户应用 | 若已知，写清楚终端场景 |
| 主推型号 | 我司优先推荐型号 |
| 备选型号 | 我司备选型号 |
| 替代等级 | A/B/C/D |
| 结论置信度 | 高/中/低 |
| 待确认问题 | 影响结论的缺口信息 |

### 参数对比表

参数表不追求完整复制 datasheet，而应覆盖影响替代判断的参数。

MCU 至少包含：

- 内核/主频
- Flash/RAM
- 工作电压
- 工作温度
- 封装/pin 数
- ADC
- PWM/Timer
- OPA/COMP/DAC/QEP
- 通讯接口
- 迁移风险

ACDC 至少包含：

- 拓扑
- 输入电压
- 输出功率
- MOS 集成情况
- 保护功能
- 待机功耗
- 封装
- 外围复杂度

IPM 至少包含：

- 耐压
- 电流
- 封装
- 保护功能
- 散热
- 应用功率段

Gate Driver 至少包含：

- 通道结构
- 耐压
- 驱动电流
- 输入逻辑
- 保护功能
- 封装

## 禁止事项

- 不要只按单个参数推荐型号。
- 不要在 pinout 未核对时宣称 pin-to-pin。
- 不要忽略客户应用场景。
- 不要把“功能可替代”说成“直接替代”。
- 对未读取到的参数，必须标注“待确认”。

