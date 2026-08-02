#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""field_map.py — 字段别名与单位归一化映射。

将各产品线原始表头/单元格值映射为统一字段模型（对齐
`_Product Parameter Matrix Fields.md`），并做单位剥离与数值归一化。
"""

import re


# ------------------------------------------------------------------ 字段别名

# 原始表头关键词 → 统一字段名（按优先级匹配，先匹配的优先）
HEADER_ALIASES = {
    "型号": "device",
    "device": "device",
    "part": "device",
    "model": "device",

    "耐压": "voltage",
    "电压": "voltage",
    "vbus": "voltage",
    "工作电压": "supply",
    "供电": "supply",
    "power": "supply",

    "电流": "current",
    "电流能力": "current",
    "output current": "current",
    "io+": "io_plus",
    "io-": "io_minus",

    "导通电阻": "rdson",
    "rdson": "rdson",

    "封装": "package",
    "package": "package",

    "集成自举": "bootstrap",
    "自举": "bootstrap",

    "温度检测": "temp_sense",
    "保护功能": "protection",
    "protection": "protection",

    "状态": "status",
    "主频": "freq_mhz",
    "flash": "flash_kb",
    "ram": "ram_kb",
    "adc": "adc",
    "dac": "dac",
    "comp": "comp",
    "opa": "opa",
    "can": "can",
    "uart": "uart",
    "spi": "spi",
    "i2c": "i2c",
    "iic": "i2c",
    "usb": "usb",
    "gate driver": "gate_driver",
    "gate driver": "gate_driver",

    "floating voltage": "floating_voltage",
    "控制逻辑": "control_logic",
    "uvlo": "uvlo",
    "turn-on/off delay": "delay",
    "dead time": "dead_time",
    "温度": "temperature",
    "输入电平": "input_level",
}

# 产品线默认值
LINE_NAMES = {
    "MCU": "MCU",
    "ACDC": "ACDC",
    "ACDC/BP": "ACDC-BP",
    "ACDC/BPA": "ACDC-BPA",
    "Driver": "Gate Driver",
    "IPM": "IPM",
    "DC-DC": "DC-DC",
    "LED Driver": "LED Driver",
    "Power Device": "Power Device",
}


# ------------------------------------------------------------------ 值归一化

_EMPTY_PATTERNS = (
    "-", "--", "—", "N/A", "n/a", "NA", "待确认", "TBD", "无", "暂无",
    "null", "None", "~", "…", "", "  ",
)


def clean(val):
    """去空白/引号，返回规范化字符串；空值返回空串。"""
    if val is None:
        return ""
    v = str(val).strip().strip("`").strip('"').strip("'").strip()
    if v in _EMPTY_PATTERNS or v.isspace():
        return ""
    return v


def to_num(val):
    """把 '48 MHz' / '5-10' / '0.75Ω' 等转为数值；无法解析返回 None。

    范围值返回 dict {min, max}；单值返回 float/int。
    """
    v = clean(val)
    if not v:
        return None
    # 去掉单位词
    v = re.sub(r"(MHz|kHz|Hz|KB|kB|kb|K|A|V|Ω|ohm|Ohm|ns|us|μs|ms|degC|℃|W|mA|mV|%)\b", "", v)
    v = v.replace(" ", "").replace(",", "")
    if not v:
        return None
    # 范围 5-10
    m = re.match(r"^(\d+(?:\.\d+)?)-(\d+(?:\.\d+)?)$", v)
    if m:
        lo, hi = float(m.group(1)), float(m.group(2))
        return {"min": lo, "max": hi}
    m = re.match(r"^(\d+(?:\.\d+)?)$", v)
    if m:
        f = float(m.group(1))
        return int(f) if f == int(f) else f
    return None


def normalize_key_strengths(text):
    """把产品卡「关键资源/初步适合场景」等文本拆成 list。"""
    v = clean(text)
    if not v:
        return []
    # 按换行/句号/分号拆
    parts = re.split(r"[\n；;。]", v)
    return [p.strip("-• .") for p in parts if p.strip() and p.strip() not in _EMPTY_PATTERNS]


def extract_sections(text, section_titles):
    """按标题提取 Markdown 小节文本，返回 {title_key: text}。

    标题匹配兼容「## 一句话定位」与「## 1. 一句话定位」两种格式（忽略编号）。
    """
    result = {}
    # 规范化标题：去 # 前缀、去编号，用于匹配两种格式
    def norm(t):
        s = t.strip().lstrip("#").strip()
        return re.sub(r"^\d+\.?\s*", "", s)

    targets = {norm(t): t for t in section_titles}
    lines = text.splitlines()
    for idx, line in enumerate(lines):
        s = line.strip()
        if not s.startswith("#"):
            continue
        heading_text = s.lstrip("#").strip()
        key = norm(heading_text)
        if key in targets:
            title = targets[key]
            buf = []
            for l in lines[idx + 1:]:
                if l.strip().startswith("#"):
                    break
                buf.append(l)
            result[title] = "\n".join(buf).strip()
    return result


def parse_positioning(text):
    """从一句话定位节提取定位文本。"""
    for line in text.splitlines():
        s = line.strip()
        if s and not s.startswith("#") and not s.startswith("|") and not s.startswith("-"):
            return s
    return ""
