---
schema_version: '2.1'
type: chip
part_number: BPA8618PD
vendor: BPS
product_family: null
category: ACDC
device_type: MOSFET
package:
- DIP-7
package_normalized:
- DIP-7
topology_support:
- Flyback
control_mode:
- PWM
- PFM
- Peak_Current
working_mode:
- CCM
- DCM
input_type: AC
input_voltage_min_vac: null
input_voltage_max_vac: null
input_voltage_min_vdc: null
input_voltage_max_vdc: null
output_voltage_min_v: null
output_voltage_max_v: null
output_current_max_ma: null
output_power_max_w: null
switching_frequency_min_hz: 124000
switching_frequency_max_hz: 140000
output_profiles:
- name: Flyback output
  topology: Flyback
  isolation: null
  output_voltage_v: null
  output_current_ma: null
  output_power_w: null
  output_voltage_abs_v: null
  output_voltage_signed_v: null
  output_polarity: unknown
  profile_type: datasheet_general_capability
  rail_role: unknown
  parent_profile_type: datasheet
  evidence:
  - 2025-01_BPA8618PD_CN_DS_Rev.1.1_BPS
  needs_manual_review: true
internal_mos_rdson_mohm: 4500
internal_mos_rdson_status: known
internal_mos_vdss_v: 750
internal_mos_vdss_status: known
mos_bvdss_v: null
mos_bvdss_status: not_applicable
bjt_vcbo_v: null
bjt_vcbo_status: not_applicable
bjt_ic_max_ma: null
bjt_ic_max_status: not_applicable
integrated_diodes: []
internal_diode_vrrm_v: null
internal_diode_vrrm_status: not_integrated
scp_support: unknown
ovp_support: unknown
ocp_support: unknown
olp_support: unknown
otp_support: unknown
uvlo_support: unknown
thermal_shutdown: unknown
open_loop_protection: unknown
short_led_protection: not_applicable
protection_features: []
thermal:
  theta_ja_c_per_w: null
  theta_jc_c_per_w: null
  pdmax_w: null
  otp_threshold_c: null
  otp_hysteresis_c: null
application_scenarios:
- 家用电器辅助电源
- PC待机电源
- 通信/工业控制辅助电源
- 适配器/充电器
- 电机驱动辅助电源
- IoT/智能家居/智能照明
key_features:
- 750V/4.5Ω 超低内阻 MOSFET, IDS_MAX=1290mA (2430mA@VDS<400V)
- 脉冲数控制 (ON/OFF, 132kHz 固定频率+8kHz 频率调制)
- 集成高压启动与自供电 (<150mW 高压自供电, <50mW 辅助绕组供电)
- 内置输入过压/欠压保护 (DRAIN 引脚检测, 免外置采样电阻)
- 全保护: SCP/Output OVP/OLP/反馈开路/逐周期限流/OTP(145°C/70°C迟滞)/输入OVP/UV
- 软启动 (40% ILIMIT→192cyc→100%)
- DS Rev.1.1 (2025/01)：Rev.1.0 首次发布 2024/05，Rev.1.1 更新电气参数
- 独立于 BPA8618P/BPA8618D 的 750V 平台芯片
- 冰箱变频主控板参考设计 (隔离12V/1A+非隔离18V/0.15A, 14.7W Peak)
design_warnings: []
design_redline_tags: []
competitor_parts: []
datasheet_source:
- 2025-01_BPA8618PD_CN_DS_Rev.1.1_BPS
reference_design_sources:
- BPA8618PDIso12V1ANonIso18V0.15A_14.7W_Peak_12W_TypeFridgeInverter电源方案设计&TestReport_BPS
test_report_sources: []
comparison_sources: []
promotion_sources: []
source_documents:
- 2025-01_BPA8618PD_CN_DS_Rev.1.1_BPS
- BPA8618PDIso12V1ANonIso18V0.15A_14.7W_Peak_12W_TypeFridgeInverter电源方案设计&TestReport_BPS
evidence_required: true
confidence_level: medium
manual_review_required: true
manual_review_notes:
- protection fields all set to unknown — need datasheet cross-reference
- output_profiles need V/I/P parameters from body or reference designs
- Reference design source exists (fridge inverter power supply) but requires human review to extract output profiles from the multi-rail design
- Fridge inverter source is dual-output (Iso12V/1A + NonIso18V/0.15A). Per §38.3 multi-output rule, this is schema-safe-held: signed-voltage schema (v2.2) required for proper profiling. Not split into standalone profiles during P2 coverage completion.
neon_ingest_status: pending
created: '2026-06-15'
updated: '2026-06-25'
---

# BPA8618PD — 750V 平台隔离反激芯片 (DIP-7)

## 📋 芯片概述

BPA8618PD 是 BPS 在 **750V 高压平台**上的隔离 Flyback 芯片，采用脉冲数控制架构（132kHz, 频率调制）。与 BPA8618P (700V) 和 BPA8618D (SOP-7) **不是同 Die 关系**——BPA8618PD 拥有独立的 750V 高压 MOSFET 平台和专属 DS Rev.1.1 (2025/01)。

DS 版本演变：Rev.1.0 (2024/05 首次发布) → **Rev.1.1 (2025/01 更新电气参数)**。

## 📐 与 BPA8618P 的核心差异

| 参数 | BPA8618PD | BPA8618P | 差异 |
|------|-----------|----------|------|
| **BVdss** | **750V** | 700V | **+50V (7.1%)** |
| ESD(HBM) | 2kV | — | 新披露 |
| θJC | 20°C/W | — | 新披露 |
| Rds(on) | 4.5Ω | 4.5Ω | 相同 |
| ILIMIT | 550mA | 550mA | 相同 |
| fosc | 132kHz | 132kHz | 相同 |
| 控制架构 | 脉冲数控制 | 脉冲数控制 | 相同 |
| 封装 | DIP-7 | DIP-7 | 相同 |
| DS | Rev.1.1 (2025/01) | Rev.1.0 (2022/04) 共用 | 独立 DS |

> BPA8618PD 与 BPA8618P 共享相同的 Rds(on)/ILIMIT/fosc/控制架构，区别在于 **750V vs 700V 高压 MOSFET 平台**和**独立规格书**。

## 📊 参考设计

| 参考设计 | 输出 | 拓扑 | 变压器 | Lp | 效率 | BOM | 关键特征 |
|----------|------|------|--------|-----|------|-----|----------|
| **冰箱变频主控板** | 12V/1A(隔离)+18V/0.15A(非隔离) (14.7W) | 隔离Flyback | EE19 890μH | 890μH | 80.3~82.5% | ~42 | 🔥90-264VAC, 交叉调整率18V飘56.8%, Surge±2k/±4kV, EFT±4kV, ESD±8k/±15kV |

## 📊 冰箱变频方案实测数据

- **效率**：80.3%@90V, 82.2%@115V, 82.5%@230V, 82.0%@264V (avg 80.6%)
- **待机**：164mW@90V, 193mW@230V, 247mW@264V
- **纹波 12V**：34mVpk(空载) → 170.5mVpk(满载@90V)
- **动态 12V**：199.5mVpk(50-100%), 251mVpk(10-100%)
- **开机过冲**：12.43V(空载)/12.99V(满载)@90V——无过冲
- **OLP**：12V 1.06A@90V → 1.36A@264V
- **VDS**：505V@90V, 510V@264V (满载) —— **67.3% BVdss 降额，裕量充足**
- **IDS**：569.5mA@90V, 889.5mA@264V (满载)
- **12V 肖特基 SR5200**：Vr_max=67.3V (33.7% 降额)
- **18V 快恢复 ES1D**：Vr_max=100.05V

### ⚠️ 交叉调整率 (致命缺陷)

| 12V负载 | 18V电压范围 | 调整率 |
|---------|-------------|--------|
| 1A / 18V空载 | 27.3~28.1V | **56.8%!** |
| 1A / 18V 0.15A | 19.1~19.2V | 0.56% |

> 18V 空载时电压飘至 28V，远超 7815 LDO 最大输入耐压——必须保证 18V 最小负载。

### 🛡️ 可靠性

- **Surge**：DM ±2kV, CM ±4kV — Pass
- **EFT**：±4kV@5k/38k/100kHz — Pass
- **ESD**：±8kV 接触/±15kV 空气 — Pass
- **EMI**：EN55022 Class B

## 🔧 工程注意要点

1. **750V BVdss 提供 +50V 额外安全裕量**——比 BPA8618P (700V) 在高压输入场景更安全
2. **冰箱变频方案需 TL431 AK 间加 10μF 软启动电容**——不加只能启动 13W，加后可达 14.7W
3. **变压器推荐三明治绕线结构**以降低 VDS 漏感尖峰和 IDS LEB 尖峰
4. **建议变压器加打底屏蔽**减少磁芯对大地噪声路径
5. **BPA8619P (750V/3.0Ω/650mA) 是 BPA8618PD 的功率升级版**——同一 750V 平台，继续降低 Rds(on) 和提升 ILIMIT
