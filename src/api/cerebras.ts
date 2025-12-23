// src/api/cerebras.ts

const CEREBRAS_API_URL = "https://api.cerebras.ai/v1/chat/completions";

export const callCerebras = async (apiKey: string, prompt: string) => {
  const response = await fetch(CEREBRAS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "qwen-3-235b-a22b-instruct-2507",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!response.ok) {
    throw new Error(`Cerebras API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
};
