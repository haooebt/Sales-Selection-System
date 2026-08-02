// functions/api/chat.js — EdgeOne Pages 边缘函数：DeepSeek 聊天代理
// 部署到 EdgeOne Pages 后，URL /api/chat 路由到此函数
// 环境变量 DEEPSEEK_API_KEY 在 EdgeOne Pages 控制台配置（不写入代码）

export async function onRequestPost(context) {
  const apiKey = context.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'DEEPSEEK_API_KEY 未配置' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body;
  try {
    body = await context.request.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: '请求体不是合法 JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { model, messages } = body;
  if (!model || !Array.isArray(messages) || !messages.length) {
    return new Response(JSON.stringify({ error: '缺少 model 或 messages' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // 请求 DeepSeek，流式返回
  const upstream = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ model, messages, stream: true }),
  });

  if (!upstream.ok) {
    const text = await upstream.text();
    return new Response(JSON.stringify({ error: `上游错误 ${upstream.status}: ${text.slice(0, 300)}` }), {
      status: upstream.status,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // SSE 流式透传：把 DeepSeek 的 SSE 原样转发给浏览器
  const contentType = upstream.headers.get('Content-Type') || 'text/event-stream';
  return new Response(upstream.body, {
    status: 200,
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}

// 非 POST 请求统一返回 405
export function onRequest(context) {
  return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
    status: 405,
    headers: { 'Content-Type': 'application/json' },
  });
}
