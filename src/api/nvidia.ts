// src/api/nvidia.ts

const NVIDIA_API_URL = "https://api.nvidia.com/nim/v1/chat/completions";

export const callNvidia = async (apiKey: string, prompt: string) => {
  const response = await fetch(NVIDIA_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "meta/llama-3.1-405b-instruct",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!response.ok) {
    throw new Error(`NVIDIA API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
};
