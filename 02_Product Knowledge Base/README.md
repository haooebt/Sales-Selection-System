# 02_Product Knowledge Base 公司产品资料库

这里存放公司产品资料和结构化选型知识。

优先入口：

- `Product Line Index.md`: 已入库产品线索引。
- `Product Quick Locator.md`: 按竞品类别快速定位我司候选产品线和关键筛选参数。
- `2025Q4 Product Catalog Digest.md`: 2025Q4 英文选型手册的全产品线摘要。
- `00_Intake Analysis.md`: 首轮资料内化分析。
- `MCU/MCU Family Overview.md`: MCU 系列梯度总览。

建议每个产品系列建立如下结构：

```text
产品系列/
├─ 00_Product Card.md
├─ 01_Raw Materials/
│  ├─ datasheet/
│  ├─ user_manual/
│  ├─ app_note/
│  ├─ presentation/
│  └─ other/
├─ 02_Structured Notes/
│  ├─ Parameter Matrix.xlsx
│  ├─ Model Differences.md
│  ├─ Package and Pinout.md
│  └─ Selection Notes.md
├─ 03_Applications/
└─ 04_Competitor Replacement/
```

产品资料库的重点不是保存 PDF，而是形成：

- 产品系列卡
- 参数矩阵
- 型号差异表
- 适合/不适合场景
- 选型注意事项
- 竞品替代关系
