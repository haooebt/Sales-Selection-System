---
schema_version: '2.1'
type: chip
part_number: BPA8620PD
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
  output_voltage_abs_v: null
  output_voltage_signed_v: null
  output_polarity: unknown
  output_current_ma: null
  output_power_w: null
  profile_type: datasheet_general_capability
  rail_role: unknown
  parent_profile_type: datasheet
  evidence:
  - BPA8620PD_CN_DS_Rev.1.0_BPS
  needs_manual_review: true
- name: "12V1.5A Flyback reference design"
  topology: Flyback
  isolation: isolated
  output_voltage_v: 12
  output_voltage_abs_v: 12
  output_voltage_signed_v: 12
  output_polarity: positive
  output_current_ma: 1500
  output_current_peak_ma: null
  output_power_w: null
  output_power_peak_w: null
  profile_type: reference_design
  rail_role: main_rail
  parent_profile_type: standalone
  condition_note: >-
    Reference design source indicates 12V/1.5A Flyback. Added as minimal
    reference_design profile during P1 triage. Board-level parameters
    (efficiency, ripple, thermal, EMI) require raw/source body review.
  evidence:
  - BPA8620PD_12V1.5A_参考设计V0.1
  needs_manual_review: true
internal_mos_rdson_mohm: 2400
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
- 家用电器辅助电源 (高海拔/高输入浪涌场景)
- PC待机电源
- 通信/工业控制辅助电源
- 适配器/充电器
key_features:
- 750V/2.4Ω 超低内阻 MOSFET (比 BPA8620P 的 700V 高 50V 安全裕量)
- Pin-to-Pin 兼容 BPA8620P (除 BVdss 外全参数一致, 可直接替换)
- 脉冲数控制 (ON/OFF, 132kHz 固定频率+8kHz 频率调制)
- 集成高压启动与自供电 (<150mW 高压自供电, <50mW 辅助绕组供电)
- 内置输入过压/欠压保护 (DRAIN 引脚检测, 免外置采样电阻, Brown-in=85V, Input OVP=600V)
- 全保护: SCP/Output OVP(VCC Isd=7.5mA)/OLP/反馈开路/逐周期限流/OTP(145°C/70°C迟滞)
- 软启动 (40% ILIMIT→192cyc→100%, 降低开机应力)
- tLEB=300ns, tOFF_Delay=100ns
- 1份参考设计+1份与BPA8620P的姊妹对比
- DS Rev.1.0 (2024/03): 含完整 Flyback 变压器设计指南
design_warnings: []
design_redline_tags: []
competitor_parts: []
datasheet_source:
- BPA8620PD_CN_DS_Rev.1.0_BPS
reference_design_sources:
- BPA8620PD_12V1.5A_参考设计V0.1
test_report_sources: []
comparison_sources:
- BPA8620PD&BPA8620P_Comparison_BPS
promotion_sources:
- BPA8620PD_12V1.5A_推广资料V0.1
source_documents:
- BPA8620PD_CN_DS_Rev.1.0_BPS
- BPA8620PD_12V1.5A_参考设计V0.1
- BPA8620PD_12V1.5A_推广资料V0.1
- BPA8620PD&BPA8620P_Comparison_BPS
evidence_required: true
confidence_level: medium
manual_review_required: true
manual_review_notes:
- protection fields all set to unknown — need datasheet cross-reference
- output_profiles need V/I/P parameters from body or reference designs
neon_ingest_status: pending
created: '2026-06-15'
updated: '2026-06-25'
---

# BPA8620PD — 750V 高压 Flyback 脉冲数控制芯片 (DIP-7)

## 📋 芯片概述

BPA8620PD 是 BPA8620P 的 **Pin-to-Pin 高压升级版**，将内置 MOSFET 耐压从 700V 提升至 **750V**，其余电气参数完全一致。采用脉冲数控制架构（132kHz + 8kHz 频率调制），DIP-7 封装。比 BPA8620P 晚 2 年发布（2024/03 vs 2022/05），为高海拔或高输入浪涌电压场景提供额外 50V 安全裕量。

> [!NOTE] 增量广播对齐
> BPA8620PD 与 BPA8620P 的关系不同于 BPA8618PD→BPA8619P 的升级路径。BPA8620 系列中，PD 后缀仅改变了 BVdss（700→750V），保持相同的 Rds(on)=2.4Ω 和 ILIMIT=750mA。而 BPA8618 系列中，PD→P 升级同时改变了 BVdss(750→750V 不变)、Rds(on)(4.5→3.0Ω) 和 ILIMIT(550→650mA)。**BPA8620PD 是纯粹的耐压升级，非功率升级。**

## ⚡ 核心电气参数

| 参数 | 值 |
|------|-----|
| BVdss | **750V** (vs BPA8620P 700V) |
| Rds(on) | **2.4Ω** typ / 2.8Ω max |
| ILIMIT_MAX | **750mA** (695~805mA) |
| ILIMIT_MIN | 0.4×ILIMIT_MAX = ~300mA |
| IDS_MAX | 1410mA (2650mA@VDS<400V) |
| Idss 测试 | VDS=600V (vs BPA8620P VDS=560V) |
| fsw | 132kHz typ (124~140kHz), 8kHz 调制 |
| DMAX | 65% |
| tLEB | 300ns |
| tOFF_Delay | 100ns |

## 🔌 VCC 供电系统

与 BPA8620P 完全一致：
- VCC_ON=5.8V, UVLO=4.9V, VCC_SHUNT=6.3V
- Isd=7.5mA (输出 OVP 触发)
- 自供电空载 <150mW, 辅助供电空载 <50mW

## 🛡️ 保护功能

与 BPA8620P 完全一致的保护方案：
- 输入 OVP: V_DRAIN_OV=600V typ, 迟滞 150V
- 输入 UV (Brown-in): V_IN_BR=85V typ
- 输出 OVP: VCC Isd=7.5mA, 自动重启
- SCP/OLP/逐周期限流/OTP(145°C/70°C迟滞)/反馈开路

## 📊 输出功率表

| 输入电压 | 适配器 | 开放式 |
|----------|--------|--------|
| 85~265VAC | **14W** | **25W** |
| 230VAC ±15% | **20W** | **32W** |

注：与 BPA8620P 完全相同的功率等级。

## 🔧 参考设计

### [[wiki/来源/2023-09_BPA8620PD_12V1.5A_参考设计_BPS | 12V/1.5A 参考设计 V0.1]]
- 85-265VAC 全电压输入, 12V/1.5A (18W)
- EE25 变压器, Lp=760μH±10%, CEM-1 单面板
- 39 元件 BOM, 光耦 PC817A + TL431
- 满载效率: 84.6%@115V / 85.3%@230V
- 待机功耗: 49mW @230VAC
- 全 EMI/Surge/EFT/ESD 测试 PASS

## 🔄 姊妹芯片对比

| 参数 | BPA8620PD | BPA8620P |
|------|-----------|----------|
| BVdss | **750V** | 700V |
| Rds(on) | 2.4Ω | 2.4Ω |
| ILIMIT | 750mA | 750mA |
| fsw | 132kHz | 132kHz |
| θJC | 未标注 | 20°C/W |
| DS 日期 | 2024/03 | 2022/05 |
| 兼容性 | **可完美兼容 BPA8620P** | 基准型号 |

> 详细对比见 [[wiki/对比/BPA8620PD_vs_BPA8620P_12V1.5A_Flyback]]

## 🔗 相关芯片

- [[wiki/实体/BPA8620P]] — 700V 基准型号，BPA8620PD 的直系前代
- [[wiki/实体/BPA8618P]] — 700V/4.5Ω/550mA, 更小功率 Flyback
- [[wiki/实体/BPA8619P]] — 750V/3.0Ω/650mA, BPS Flyback 最高功率旗舰
