#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""table_extract.py — 通用表格解析器。

支持两种表格：
1. Markdown 管道表（| a | b |）
2. Markdown 内嵌 HTML <table>

返回 list[dict]：表头 → 行值。
"""

import re
import html as html_lib
from html.parser import HTMLParser


# ---------------------------------------------------------------- Markdown tables

_MD_ROW_RE = re.compile(r"^\s*\|(.+)\|\s*$")


def parse_markdown_tables(text):
    """解析文本中的所有 Markdown 管道表，返回 list[list[dict]]。"""
    tables = []
    lines = text.splitlines()
    i = 0
    while i < len(lines):
        line = lines[i]
        if not _MD_ROW_RE.match(line):
            i += 1
            continue
        # 收集连续的行
        rows = []
        while i < len(lines) and _MD_ROW_RE.match(lines[i]):
            rows.append(lines[i])
            i += 1
        if len(rows) < 2:
            continue
        header = _split_md_row(rows[0])
        if not header:
            continue
        # 跳过分隔行（|---|）
        body = []
        for r in rows[1:]:
            cells = _split_md_row(r)
            if cells and all(re.match(r"^:?-+:?$", c.strip()) for c in cells if c.strip()):
                continue
            body.append(cells)
        table = []
        for cells in body:
            row = {}
            for idx, h in enumerate(header):
                val = cells[idx].strip() if idx < len(cells) else ""
                row[h] = val
            table.append(row)
        tables.append(table)
    return tables


def _split_md_row(line):
    """拆 Markdown 行，处理转义竖线。"""
    cells = []
    buf = []
    i = 0
    while i < len(line):
        c = line[i]
        if c == "\\" and i + 1 < len(line) and line[i + 1] in "|`":
            buf.append(line[i + 1])
            i += 2
            continue
        if c == "|":
            cells.append("".join(buf).strip())
            buf = []
        else:
            buf.append(c)
        i += 1
    cells.append("".join(buf).strip())
    return cells


# ------------------------------------------------------------------ HTML tables

class _HTMLTableParser(HTMLParser):
    """提取 <table> 内所有行单元格。"""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.in_table = False
        self.in_row = False
        self.in_cell = False
        self.current_cell = []
        self.current_row = []
        self.tables = []
        self._table_stack = []

    def handle_starttag(self, tag, attrs):
        if tag == "table":
            self.in_table = True
            self._table_stack.append([])
        elif tag == "tr" and self.in_table:
            self.in_row = True
            self.current_row = []
        elif tag in ("td", "th") and self.in_row:
            self.in_cell = True
            self.current_cell = []

    def handle_endtag(self, tag):
        if tag == "table" and self.in_table:
            self.tables.append(self._table_stack.pop())
            self.in_table = bool(self._table_stack)
        elif tag == "tr" and self.in_row:
            self._table_stack[-1].append(self.current_row)
            self.in_row = False
        elif tag in ("td", "th") and self.in_cell:
            self.current_row.append("".join(self.current_cell).strip())
            self.in_cell = False

    def handle_data(self, data):
        if self.in_cell:
            self.current_cell.append(data)


def parse_html_tables(text):
    """解析文本中所有 HTML <table>，返回 list[list[list[str]]]（每表=行×列）。"""
    p = _HTMLTableParser()
    p.feed(text)
    return p.tables


def html_tables_to_dicts(html_tables):
    """把 HTML 表（行×列）转成 list[list[dict]]，首行当表头。"""
    result = []
    for table in html_tables:
        if not table:
            continue
        header = table[0]
        dicts = []
        for row in table[1:]:
            d = {}
            for idx, h in enumerate(header):
                d[h.strip()] = row[idx].strip() if idx < len(row) else ""
            dicts.append(d)
        result.append(dicts)
    return result


# ---------------------------------------------------------------- Public helper

def extract_tables(markdown_text):
    """综合入口：返回所有表格（list[list[dict]]），MD 表 + HTML 表合并。"""
    tables = parse_markdown_tables(markdown_text)
    tables += html_tables_to_dicts(parse_html_tables(markdown_text))
    return tables


if __name__ == "__main__":
    import sys

    if len(sys.argv) > 1:
        with open(sys.argv[1], encoding="utf-8") as f:
            content = f.read()
        for idx, t in enumerate(extract_tables(content)):
            print(f"--- Table {idx} ({len(t)} rows) ---")
            for r in t:
                print(r)
