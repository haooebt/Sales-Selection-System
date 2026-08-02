// chat.js — AI 选型对话视图
window.ChatView = {
  messages: [],        // {role, content} 历史，保留最后 10 轮
  busy: false,

  render() {
    return `<h2 class="view-title">AI 选型助手</h2>
      <div class="view-sub">用自然语言描述需求，AI 基于本库产品数据推荐型号或竞品替代方案</div>
      <div class="chat-wrap">
        <div class="chat-examples">
          <span class="muted">试试：</span>
          <button class="chip chat-example" data-q="3KW 三相永磁同步电机控制，帮我选 MCU">3KW 电机控制选 MCU</button>
          <button class="chip chat-example" data-q="客户原来用 CY8C4147AZQ-T495，怎么替代？">CY8C4147 怎么替代</button>
          <button class="chip chat-example" data-q="家用空调外机双电机方案怎么配？">空调外机双电机方案</button>
          <button class="chip chat-example" data-q="48MHz、32KB Flash、内置 gate driver 的型号有哪些？">48MHz+GD 型号</button>
        </div>
        <div id="chat-log" class="chat-log"></div>
        <div class="chat-input-row">
          <input type="text" id="chat-input" placeholder="描述需求，如：客户要 24V 3A 的 LED 驱动，恒流…" autocomplete="off">
          <button id="chat-send" class="btn-primary">发送</button>
        </div>
      </div>`;
  },

  afterRender() {
    const input = document.getElementById('chat-input');
    const sendBtn = document.getElementById('chat-send');
    const examples = document.querySelectorAll('.chat-example');

    input.addEventListener('keydown', e => { if (e.key === 'Enter') this.send(); });
    sendBtn.addEventListener('click', () => this.send());
    examples.forEach(btn => btn.addEventListener('click', () => {
      input.value = btn.dataset.q;
      this.send();
    }));

    if (!this.messages.length) {
      this.showWelcome();
    } else {
      this.renderAll();
    }
  },

  showWelcome() {
    const log = document.getElementById('chat-log');
    if (!log) return;
    log.innerHTML = `<div class="msg assistant">
      <div class="msg-bubble">你好！我是晶丰明源 AI 选型助手。我可以帮你：<br>
      · 按需求参数推荐型号（主频/Flash/封装/内置外设等）<br>
      · 查竞品替代方案（型号 → 晶丰明源对应品）<br>
      · 按应用场景给整机方案（MCU + 驱动 + 电源）<br><br>
      直接描述你的需求即可，例如上方快捷问题。</div></div>`;
  },

  // ---------- 数据摘要 ----------
  summarizeData() {
    const V = window.VaultData;
    const parts = [];

    // 产品紧凑摘要
    const prods = (V.products || []).map(p => {
      if (p.pending_param) {
        return `${p.device}|${p.line}|族级|代表:${(p.representative_models || []).join('/')}`;
      }
      const row = [p.device, p.line, p.series, p.freq_mhz, p.flash_kb, p.ram_kb,
                   p.adc_channels ? 'ADC' + p.adc_channels : '',
                   p.gate_driver ? 'GD' + p.gate_driver : '',
                   p.package || '',
                   (p.positioning || '').slice(0, 22)];
      return row.filter(x => x != null && x !== '').join('|');
    });
    parts.push(`【产品库 ${prods.length} 条】每条: 型号|产品线|系列|主频MHz|FlashKB|RAMKB|ADC通道|内置GD|封装|定位\n${prods.join('\n')}`);

    // 竞品替代
    const comps = (V.competitors || []).map(c =>
      `${c.brand}|${c.model}→替代:${c.replacement}|等级:${c.grade || ''}|Pin兼容:${c.pin_compatible || ''}|软件难度:${c.sw_effort || ''}|风险:${c.risk || ''}`);
    if (comps.length) parts.push(`【竞品替代 ${comps.length} 条】\n${comps.join('\n')}`);

    // 应用场景
    const apps = (V.applications || []).map(a =>
      `${a.app}|MCU:${a.mcu || '—'}|驱动IPM:${a.driver_ipm || '—'}|电源:${a.power || '—'}|备注:${a.note || ''}`);
    if (apps.length) parts.push(`【应用场景 ${apps.length} 条】\n${apps.join('\n')}`);

    return parts.join('\n\n');
  },

  buildSystemPrompt() {
    return `你是「晶丰明源」技术销售选型助手。你的职责是帮销售人员根据客户需求，从下方产品库数据中推荐晶丰明源型号，或给出竞品替代方案。
规则：
1. 只基于给定数据回答；数据里没有的，明确说「库中暂无」，不要编造型号或参数。
2. 推荐时优先参数最匹配的型号，可列 2-3 个备选并说明差异。
3. 竞品替代时引用等级(A/B/C/D)、Pin 兼容性、软件改动难度、风险点。
4. 应用场景问题直接引用 MCU + 驱动IPM + 电源组合。
5. 型号全称写完整（如 LKS32MC031KLC6T8C），不要省略。
6. 参数不确定时提示「请以最新 datasheet 为准」。
7. 用简洁的中文回答，可用列表或表格，不要啰嗦。

以下是本库数据（产品为紧凑摘要，数值缺失即库中未记录）：

${this.summarizeData()}`;
  },

  // ---------- 消息渲染 ----------
  renderAll() {
    const log = document.getElementById('chat-log');
    if (!log) return;
    log.innerHTML = this.messages.map(m => {
      const cls = m.role === 'user' ? 'user' : 'assistant';
      return `<div class="msg ${cls}"><div class="msg-bubble">${esc(m.content)}</div></div>`;
    }).join('');
    log.scrollTop = log.scrollHeight;
  },

  appendMessage(role, content) {
    this.messages.push({ role, content });
    if (this.messages.length > 20) this.messages = this.messages.slice(-20);
    const log = document.getElementById('chat-log');
    if (log) {
      const div = document.createElement('div');
      div.className = 'msg ' + role;
      div.innerHTML = `<div class="msg-bubble">${esc(content)}</div>`;
      log.appendChild(div);
      log.scrollTop = log.scrollHeight;
    }
  },

  addTypingBubble() {
    const log = document.getElementById('chat-log');
    const div = document.createElement('div');
    div.className = 'msg assistant typing';
    div.id = 'chat-typing';
    div.innerHTML = `<div class="msg-bubble">…</div>`;
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
  },

  updateTyping(text) {
    const el = document.getElementById('chat-typing');
    if (!el) return;
    el.querySelector('.msg-bubble').innerHTML = esc(text) || '…';
    const log = document.getElementById('chat-log');
    log.scrollTop = log.scrollHeight;
  },

  removeTyping() {
    const el = document.getElementById('chat-typing');
    if (el) el.remove();
  },

  // ---------- 发送 ----------
  async send() {
    if (this.busy) return;
    const input = document.getElementById('chat-input');
    const sendBtn = document.getElementById('chat-send');
    const q = input.value.trim();
    if (!q) return;

    // 隐藏欢迎语
    const log = document.getElementById('chat-log');
    if (log && this.messages.length === 0) log.innerHTML = '';

    input.value = '';
    this.appendMessage('user', q);
    this.busy = true;
    sendBtn.disabled = true;
    sendBtn.textContent = '生成中…';
    this.addTypingBubble();

    // system + 历史（含刚发送的用户消息），保留最后 10 轮
    const history = this.messages.slice(-20);
    const messages = [{ role: 'system', content: this.buildSystemPrompt() }].concat(history);

    try {
      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: 'deepseek-chat', messages, stream: true }),
      });
      if (!resp.ok) {
        let errText = `请求失败 (${resp.status})`;
        try { const j = await resp.json(); if (j && j.error) errText = j.error; } catch (e) {}
        throw new Error(errText);
      }

      // 读取 SSE 流
      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let full = '';
      let buffer = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        // 按行切分 SSE
        const lines = buffer.split('\n');
        buffer = lines.pop();
        for (const line of lines) {
          if (!line.startsWith('data:')) continue;
          const data = line.slice(5).trim();
          if (data === '[DONE]') continue;
          try {
            const j = JSON.parse(data);
            const delta = j.choices && j.choices[0] && j.choices[0].delta;
            if (delta && delta.content) {
              full += delta.content;
              this.updateTyping(full);
            }
          } catch (e) { /* 忽略解析失败行 */ }
        }
      }
      this.removeTyping();
      this.appendMessage('assistant', full || '（无回复）');
    } catch (err) {
      this.removeTyping();
      this.appendMessage('assistant', `⚠️ ${err.message || '网络错误，请重试'}`);
    } finally {
      this.busy = false;
      sendBtn.disabled = false;
      sendBtn.textContent = '发送';
    }
  },
};
