#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""build_data.py — 把选型系统数据转换为 site/data/*.json。

读取源：
  - 产品卡（00_Product Card.md）— 系列定位/适合/不适合 + 型号矩阵
  - Excel 选型表（LKSxx系列.xlsx、Gate Driver.xlsx、IPM.xlsx）— 型号级参数
  - 解析 datasheet（03_Parsed_Markdown/*.md）— ACDC 概述补缺
  - Product Quick Locator.md — 竞品→产品线、场景→产品线
  - 竞品替代表（Replacement Tables/*.md）— 竞品→推荐替代
  - Home Appliance Solution Map.md — 应用场景→产品组合
  - product_apps.json — 型号→已量产应用（脱敏自案例复盘，客户敏感信息不进入）

隐私红线：绝不读取 01_Customer Cases / 07_Case Reviews / 99_Archive / 00_Workbench。
"""

import json
import re
import sys
from pathlib import Path

try:
    import openpyxl
except ImportError:
    print("缺少 openpyxl，请先运行: py -3 -m pip install openpyxl", file=sys.stderr)
    sys.exit(1)

import field_map as fm
import table_extract as te

# ------------------------------------------------------------------ 路径

REPO = Path(__file__).resolve().parents[2]  # 选型系统仓库根
PKG = REPO / "02_Product Knowledge Base"
COMP = REPO / "04_Competitor and Replacement"
SOLUTIONS = REPO / "03_Solutions and Applications"
OUT = REPO / "site" / "data"

# 隐私红线：这些目录绝不进入站点
FORBIDDEN = ("01_Customer Cases", "07_Case Reviews", "99_Archive", "00_Workbench")


def assert_no_forbidden():
    for f in FORBIDDEN:
        p = REPO / f
        if p.exists():
            print(f"[隐私] 发现敏感目录，跳过: {p.name}")
    # 断言这些目录不会被遍历进数据


# ------------------------------------------------------------------ 通用

def read_md(relpath):
    p = REPO / relpath
    if not p.exists():
        return ""
    try:
        return p.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        return p.read_text(encoding="gbk", errors="replace")


def find_files(root, pattern):
    return [p for p in (REPO / root).rglob(pattern) if not any(f in str(p) for f in FORBIDDEN)]


# ------------------------------------------------------------------ 产品卡解析

def parse_product_card(text, line, series_name):
    """从产品卡提取定位/适合/不适合 + 型号矩阵。返回 (series_meta, product_records)。"""
    sections = fm.extract_sections(text, [
        "## 1. 一句话定位", "## 一句话定位",
        "## 1. 定位", "## 定位",
        "## 1. 系列定位", "## 系列定位",
        "## 2. 型号矩阵", "## 型号矩阵",
        "## 2. 型号选型表", "## 型号选型表",
        "## 2. 型号", "## 型号",
    ])
    positioning = fm.parse_positioning(sections.get("## 1. 一句话定位", "")) \
        or fm.parse_positioning(sections.get("## 一句话定位", "")) \
        or fm.parse_positioning(sections.get("## 1. 定位", "")) \
        or fm.parse_positioning(sections.get("## 定位", "")) \
        or fm.parse_positioning(sections.get("## 1. 系列定位", "")) \
        or fm.parse_positioning(sections.get("## 系列定位", ""))

    # 适合/不适合场景（在定位小节后）
    suitable, unsuitable = [], []
    for sec_title in ("## 初步适合场景", "## 1. 初步适合场景", "## 适合场景"):
        m = re.search(re.escape(sec_title), text)
        if m:
            chunk = text[m.end(): m.end() + 800]
            suitable = [l.strip("-• ") for l in chunk.splitlines()
                        if l.strip().startswith(("-", "•"))][:20]
            break
    for sec_title in ("## 初步不适合场景", "## 1. 初步不适合场景", "## 不适合场景"):
        m = re.search(re.escape(sec_title), text)
        if m:
            chunk = text[m.end(): m.end() + 800]
            unsuitable = [l.strip("-• ") for l in chunk.splitlines()
                          if l.strip().startswith(("-", "•"))][:20]
            break

    # 型号矩阵表：取包含 device 的表格
    tables = te.extract_tables(text)
    products = []
    for t in tables:
        for row in t:
            dev = fm.clean(row.get("型号", row.get("Device", "")))
            if dev and re.match(r"^[A-Za-z]+\d", dev):
                products.append({
                    "line": line,
                    "series": series_name,
                    "device": dev,
                    "positioning": positioning,
                    "suitable": suitable,
                    "raw": {k: v for k, v in row.items() if k},
                })
    return {
        "line": line,
        "series": series_name,
        "positioning": positioning,
        "suitable": suitable,
        "unsuitable": [],
    }, products


# ------------------------------------------------------------------ Excel 选型表

def excel_rows(path):
    """读取 xlsx 所有行（dict），返回 list[dict]。"""
    wb = openpyxl.load_workbook(path, data_only=True)
    result = []
    for ws in wb.worksheets:
        rows = list(ws.iter_rows(values_only=True))
        if not rows:
            continue
        header = [str(c).strip() if c is not None else "" for c in rows[0]]
        for r in rows[1:]:
            d = {}
            for idx, h in enumerate(header):
                if h:
                    d[h] = r[idx] if idx < len(r) else ""
            result.append(d)
    return result


# ------------------------------------------------------------------ 主流程

def build_products():
    products = []
    series_meta = []
    meta = {"lines": {}, "gaps": [], "conflicts": []}

    # --- MCU：每个 LKSxx 系列一个 Excel + 产品卡 ---
    mcu_dir = PKG / "MCU"
    mcu_series = []
    if mcu_dir.exists():
        for series_dir in sorted(mcu_dir.iterdir()):
            if series_dir.is_dir() and not str(series_dir).endswith("__pycache__"):
                mcu_series.append(series_dir)
    for sdir in mcu_series:
        series = sdir.name  # e.g. LKS05x
        xls = list(sdir.glob("*.xlsx"))
        card_text = read_md(f"02_Product Knowledge Base/MCU/{series}/00_Product Card.md")
        card_meta, card_products = parse_product_card(card_text, "MCU", series)
        for p in card_products:
            products.append(_finalize_mcu(p, series))
        # 从 Excel 补型号级参数
        for x in xls:
            for row in excel_rows(x):
                dev = fm.clean(row.get("Device", ""))
                if not dev:
                    continue
                rec = _mcu_from_excel(row, series)
                _merge_into(products, rec, "MCU", series)
        series_meta.append({
            "line": "MCU", "series": series,
            "positioning": card_meta["positioning"],
            "suitable": card_meta["suitable"],
            "source": f"02_Product Knowledge Base/MCU/{series}",
        })

    # --- ACDC BP / BPA：从产品卡 + 解析 datasheet ---
    for sub in ("BP", "BPA"):
        acdc_dir = PKG / "ACDC" / sub
        if not acdc_dir.exists():
            continue
        card_text = read_md(f"02_Product Knowledge Base/ACDC/{sub}/00_Product Card.md")
        line_name = f"ACDC-{sub}"
        for s in ("BP", "BPA"):
            pass
        # 产品卡型号矩阵
        card_meta, card_products = parse_product_card(card_text, line_name, sub)
        for p in card_products:
            _finalize_acdc(p, sub)
            products.append(p)
        # 解析 datasheet 概述补缺
        parsed_dir = acdc_dir / "03_Parsed_Markdown"
        if parsed_dir.exists():
            for md in parsed_dir.glob("*.md"):
                dev = md.name.split("_CN")[0].split("_DS")[0]
                if not re.match(r"^[A-Za-z]+\d", dev):
                    continue
                txt = md.read_text(encoding="utf-8", errors="replace")
                overview = _extract_acdc_overview(txt, dev)
                _merge_into(products, {
                    "device": dev, "line": line_name, "series": sub,
                    "overview": overview,
                }, line_name, sub)
        series_meta.append({
            "line": line_name, "series": sub,
            "positioning": card_meta["positioning"],
            "source": f"02_Product Knowledge Base/ACDC/{sub}",
        })

    # --- Gate Driver：Driver 产品卡 + Gate Driver.xlsx ---
    driver_dir = PKG / "Driver"
    if driver_dir.exists():
        card_text = read_md("02_Product Knowledge Base/Driver/00_Product Card.md")
        card_meta, card_products = parse_product_card(card_text, "Gate Driver", "Driver")
        for p in card_products:
            products.append(p)
        gd = driver_dir / "Gate Driver.xlsx"
        if gd.exists():
            for row in excel_rows(gd):
                dev = fm.clean(row.get("Device", row.get("型号", "")))
                if dev:
                    products.append(_driver_from_excel(row))
        series_meta.append({"line": "Gate Driver", "series": "Driver",
                            "positioning": card_meta["positioning"],
                            "source": "02_Product Knowledge Base/Driver"})

    # --- IPM：IPM 产品卡 + IPM.xlsx ---
    ipm_dir = PKG / "IPM"
    if ipm_dir.exists():
        card_text = read_md("02_Product Knowledge Base/IPM/00_Product Card.md")
        card_meta, card_products = parse_product_card(card_text, "IPM", "IPM")
        for p in card_products:
            products.append(p)
        ipm = ipm_dir / "IPM.xlsx"
        if ipm.exists():
            for row in excel_rows(ipm):
                dev = fm.clean(row.get("Device", row.get("型号", "")))
                if dev:
                    products.append(_ipm_from_excel(row))
        series_meta.append({"line": "IPM", "series": "IPM",
                            "positioning": card_meta["positioning"],
                            "source": "02_Product Knowledge Base/IPM"})

    # --- DC-DC / LED Driver / Power Device：产品族快速索引（族级记录） ---
    for line_name, folder in (("DC-DC", "DC-DC"), ("LED Driver", "LED Driver"), ("Power Device", "Power Device")):
        card_path = PKG / folder / "00_Product Card.md"
        if not card_path.exists():
            continue
        card_text = read_md(f"02_Product Knowledge Base/{folder}/00_Product Card.md")
        card_meta, _ = parse_product_card(card_text, line_name, folder)
        fam_products, positioning = _parse_family_index(card_text, line_name, folder)
        products.extend(fam_products)
        series_meta.append({"line": line_name, "series": folder,
                            "positioning": positioning or card_meta["positioning"],
                            "source": f"02_Product Knowledge Base/{folder}"})

    # 去重前兜底：确保每条记录都有 line/device/series 字段
    for p in products:
        p.setdefault("line", "Unknown")
        p.setdefault("series", "Unknown")
        p.setdefault("device", "")
        p.setdefault("source", "")

    # 去重（同 line+device 保留第一个，记录冲突）
    seen = {}
    dedup = []
    for p in products:
        key = (p["line"], p["device"])
        if key in seen:
            meta["conflicts"].append({
                "line": key[0], "device": key[1],
                "reason": "重复记录，保留先出现的来源",
                "sources": [seen[key]["source"], p.get("source", "")],
            })
            continue
        seen[key] = p
        dedup.append(p)
    products = dedup

    # 注入已量产应用（来自脱敏 product_apps.json，客户敏感信息不进入）
    apply_product_apps(products, load_product_apps())

    # 按线统计
    from collections import Counter
    line_counts = Counter(p["line"] for p in products)
    meta["lines"] = dict(line_counts)
    return products, series_meta, meta


def _parse_family_index(text, line, series):
    """从「产品族快速索引」表提取族级记录。

    每族生成一条记录：device 用族名，列出代表型号清单。
    """
    tables = te.extract_tables(text)
    records = []
    positioning = ""
    for t in tables:
        for row in t:
            fam = fm.clean(row.get("产品族", ""))
            if not fam:
                continue
            models = fm.clean(row.get("代表型号", ""))
            first_filters = fm.clean(row.get("第一轮筛选参数", ""))
            positioning = fm.clean(row.get("初步定位", ""))
            rec = {
                "line": line, "series": series, "device": fam,
                "family": fam,
                "representative_models": [m.strip() for m in models.replace("、", ",").split(",") if m.strip()],
                "first_filters": first_filters,
                "positioning": positioning,
                "pending_param": True,
                "source": f"02_Product Knowledge Base/{series}/00_Product Card.md",
                "data_quality": {"gaps": ["族级记录：型号级参数待补充"]},
            }
            records.append(rec)
    return records, positioning


def _finalize_mcu(p, series):
    p["line"] = "MCU"
    p["series"] = series
    p["source"] = f"02_Product Knowledge Base/MCU/{series}"
    p.setdefault("data_quality", {})
    return p


def _mcu_from_excel(row, series):
    rec = {
        "device": fm.clean(row.get("Device", "")),
        "line": "MCU", "series": series,
        "freq_mhz": fm.to_num(row.get("Freq(MHz)")),
        "flash_kb": fm.to_num(row.get("Flash(kB)")),
        "ram_kb": fm.to_num(row.get("RAM(kB)")),
        "adc_channels": fm.to_num(row.get("ADC Ch.")),
        "dac": fm.clean(row.get("DAC")),
        "comp": fm.clean(row.get("Comp")),
        "opa": fm.clean(row.get("OPA")),
        "spi": fm.clean(row.get("SPI")),
        "i2c": fm.clean(row.get("IIC")),
        "uart": fm.clean(row.get("UART")),
        "can": fm.clean(row.get("CAN")),
        "qep": fm.clean(row.get("QEP")),
        "gate_driver": fm.clean(row.get("Gate driver")),
        "package": fm.clean(row.get("Package")),
        "source": f"02_Product Knowledge Base/MCU/{series}/LKS{series}系列.xlsx",
        "data_quality": {},
    }
    # 负值占位 → null
    for k in ("freq_mhz", "flash_kb", "ram_kb"):
        v = rec.get(k)
        if isinstance(v, (int, float)) and v < 0:
            rec[k] = None
            rec["data_quality"].setdefault("gaps", []).append(f"{k}: 负值占位")
    return rec


def _driver_from_excel(row):
    return {
        "device": fm.clean(row.get("Device", row.get("型号", ""))),
        "line": "Gate Driver", "series": "Driver",
        "package": fm.clean(row.get("Package", row.get("封装", ""))),
        "supply": fm.clean(row.get("Supply", row.get("供电", ""))),
        "source": "02_Product Knowledge Base/Driver/Gate Driver.xlsx",
        "data_quality": {},
    }


def _ipm_from_excel(row):
    return {
        "device": fm.clean(row.get("Device", row.get("型号", ""))),
        "line": "IPM", "series": "IPM",
        "voltage": fm.clean(row.get("耐压", row.get("Voltage", ""))),
        "current": fm.clean(row.get("电流能力", row.get("Current", ""))),
        "rdson": fm.clean(row.get("导通电阻", row.get("Rdson", ""))),
        "package": fm.clean(row.get("封装", row.get("Package", ""))),
        "source": "02_Product Knowledge Base/IPM/IPM.xlsx",
        "data_quality": {},
    }


def _finalize_acdc(p, sub):
    p["line"] = f"ACDC-{sub}"
    p["series"] = sub
    p.setdefault("source", f"02_Product Knowledge Base/ACDC/{sub}/00_Product Card.md")
    p.setdefault("data_quality", {})
    return p


def _extract_acdc_overview(text, dev):
    """从解析 datasheet 提取概述（首段）与关键特性。"""
    overview = ""
    for line in text.splitlines():
        s = line.strip()
        if s and not s.startswith("#") and not s.startswith("!"):
            overview = s
            break
    return overview


def _merge_into(products, rec, line, series):
    """把 rec 合并进 products 中同 line+device 的记录（补缺不覆盖）。"""
    for i, p in enumerate(products):
        if p["line"] == line and p["device"] == rec["device"]:
            for k, v in rec.items():
                if k in ("device", "line", "series"):
                    continue
                if not p.get(k) and v:
                    p[k] = v
            return i
    products.append(rec)
    return len(products) - 1


def load_product_apps():
    """读取脱敏的型号→已量产应用映射（product_apps.json，不含客户敏感信息）。"""
    p = SOLUTIONS / "Home Appliance" / "product_apps.json"
    if not p.exists():
        return {}
    try:
        data = json.loads(p.read_text(encoding="utf-8"))
    except Exception as e:
        print(f"[warn] product_apps.json 解析失败: {e}", file=sys.stderr)
        return {}
    if not isinstance(data, dict):
        return {}
    apps = {}
    for dev, lst in data.items():
        if isinstance(lst, list):
            apps[dev] = [str(x).strip() for x in lst if str(x).strip()]
    return apps


def apply_product_apps(products, apps):
    """为已收录型号注入『已量产应用』字段（新增字段，不覆盖已有）。"""
    for p in products:
        dev = p.get("device", "")
        if dev in apps and apps[dev]:
            p["applications"] = apps[dev]


# ------------------------------------------------------------------ 竞品/定位/场景

def build_locator():
    """解析 Product Quick Locator.md → locator.json。"""
    text = read_md("02_Product Knowledge Base/Product Quick Locator.md")
    lines = text.splitlines()
    categories = []   # 竞品类别 → 产品线
    apps = []         # 应用场景 → 产品线
    current_section = None
    for line in lines:
        s = line.strip()
        if s.startswith("| 竞品类别"):
            current_section = "category"
        elif s.startswith("| 应用场景"):
            current_section = "app"
        elif s.startswith("|") and not s.startswith("|--") and current_section:
            cells = [c.strip() for c in s.strip("|").split("|")]
            if current_section == "category" and len(cells) >= 5:
                categories.append({
                    "category": cells[0], "line": cells[1],
                    "primary": cells[2], "aux": cells[3], "filters": cells[4],
                })
            elif current_section == "app" and len(cells) >= 3:
                apps.append({"app": cells[0], "products": cells[1], "lines": cells[2]})
    return {"categories": categories, "applications": apps}


def build_competitors():
    """解析竞品替代表 → competitors.json。"""
    comps = []
    files = find_files("04_Competitor and Replacement/Replacement Tables", "*.md")
    for f in files:
        text = f.read_text(encoding="utf-8", errors="replace")
        for table in te.parse_markdown_tables(text):
            for row in table:
                brand = fm.clean(row.get("竞品品牌", row.get("Brand", "")))
                model = fm.clean(row.get("竞品型号", row.get("Model", "")))
                if not brand or not model:
                    continue
                comps.append({
                    "brand": brand, "model": model,
                    "replacement": fm.clean(row.get("我司推荐型号", "")),
                    "grade": fm.clean(row.get("替代等级", "")),
                    "pin_compatible": fm.clean(row.get("pin 兼容", row.get("Pin compatible", ""))),
                    "sw_effort": fm.clean(row.get("软件难度", "")),
                    "risk": fm.clean(row.get("风险点", "")),
                    "note": fm.clean(row.get("备注", "")),
                    "source": f.relative_to(REPO).as_posix(),
                })
    return comps


def build_applications():
    """解析 Home Appliance Solution Map → applications.json。"""
    text = read_md("03_Solutions and Applications/Home Appliance/Home Appliance Solution Map.md")
    apps = []
    for table in te.extract_tables(text):
        for row in table:
            app = fm.clean(row.get("应用场景", row.get("应用", row.get("Application", ""))))
            if not app:
                continue
            apps.append({
                "app": app,
                "mcu": fm.clean(row.get("MCU", "")),
                "driver_ipm": fm.clean(row.get("Driver/IPM", row.get("IPM/Driver", row.get("IPM", "")))),
                "power": fm.clean(row.get("辅助电源", row.get("Power", ""))),
                "note": fm.clean(row.get("备注", row.get("典型产品线", ""))),
            })
    return apps


def build_product_lines():
    """从 Product Line Index.md 建立产品线清单。"""
    text = read_md("02_Product Knowledge Base/Product Line Index.md")
    lines = []
    for table in te.parse_markdown_tables(text):
        for row in table:
            name = fm.clean(row.get("产品线", ""))
            if name:
                lines.append({
                    "name": name,
                    "entry": fm.clean(row.get("首选入口", "")),
                    "status": fm.clean(row.get("当前状态", "")),
                })
    if not lines:
        lines = [
            {"name": n, "entry": "", "status": ""}
            for n in ("MCU", "ACDC-BP", "ACDC-BPA", "Gate Driver", "IPM", "DC-DC", "LED Driver", "Power Device")
        ]
    return lines


# ------------------------------------------------------------------ main

def main():
    assert_no_forbidden()
    OUT.mkdir(parents=True, exist_ok=True)

    print("构建产品数据...", file=sys.stderr)
    products, series_meta, meta = build_products()
    print(f"  {len(products)} 个产品型号", file=sys.stderr)

    print("构建定位/竞品/场景数据...", file=sys.stderr)
    locator = build_locator()
    competitors = build_competitors()
    applications = build_applications()
    product_lines = build_product_lines()

    data = {
        "products": products,
        "series": series_meta,
        "product_lines": product_lines,
        "competitors": competitors,
        "applications": applications,
        "locator": locator,
    }
    for name, payload in data.items():
        (OUT / f"{name}.json").write_text(
            json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8"
        )
        print(f"  写入 {name}.json ({len(payload) if isinstance(payload, list) else 'obj'})", file=sys.stderr)

    meta.update({"product_count": len(products), "competitor_count": len(competitors)})
    (OUT / "meta.json").write_text(json.dumps(meta, ensure_ascii=False, indent=2), encoding="utf-8")
    print("构建完成 → site/data/", file=sys.stderr)


if __name__ == "__main__":
    main()
