# 04_Competitor and Replacement 竞品与替代关系

这里存放竞品资料和替代表。

优先入口：

- `Competitive Replacement Playbook.md`: 竞品规格书替代分析流程和输出标准。
- `Replacement Tables/`: 已沉淀的替代关系。

推荐结构：

```text
品牌/
├─ 系列/
│  ├─ 01_Raw Materials/
│  ├─ 02_Competitor Cards/
│  └─ 03_Replacement Notes/
Replacement Tables/
```

替代等级：

| 等级 | 含义 |
|---|---|
| A | 高度匹配，可能接近 pin-to-pin 或直接替代 |
| B | 功能资源匹配，但 PCB 或软件需要调整 |
| C | 只能作为方案替代，不适合直接替换 |
| D | 不建议替代 |

注意：不要只根据 Flash/RAM 或封装判断替代。至少需要核对：

- 封装和 pinout
- 主频和内核
- Flash/RAM
- ADC/DAC/COMP/OPA
- Timer/PWM
- CAN/USB/UART/SPI/I2C
- 工作电压和温度
- 软件迁移难度
- 认证和可靠性要求
