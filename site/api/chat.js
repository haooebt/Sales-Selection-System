// api/chat.js — Vercel 无服务器函数：DeepSeek 聊天代理
// 密钥存 Vercel 环境变量 DEEPSEEK_API_KEY，不暴露给前端
module.exports = async (req, res) => {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'DEEPSEEK_API_KEY 未配置' });
    return;
  }
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { model, messages } = req.body || {};
  if (!model || !Array.isArray(messages) || !messages.length) {
    res.status(400).json({ error: '缺少 model 或 messages' });
    return;
  }

  const upstream = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ model, messages, stream: true }),
  });

  if (!upstream.ok) {
    // 透传上游状态码与错误信息
    const text = await upstream.text();
    res.status(upstream.status).json({ error: `上游错误 ${upstream.status}: ${text.slice(0, 300)}` });
    return;
  }

  // 流式透传：把 DeepSeek 的 SSE 原样转发给浏览器
  res.status(200);
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const reader = upstream.body.getReader();
  const decoder = new TextDecoder();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(decoder.decode(value, { stream: true }));
    }
  } catch (err) {
    res.write(`event: error\ndata: ${JSON.stringify({ error: String(err) })}\n\n`);
  } finally {
    reader.releaseLock();
  }
  res.end();
};
