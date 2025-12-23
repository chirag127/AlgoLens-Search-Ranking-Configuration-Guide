// src/api/cloudflare.ts

const CLOUDFLARE_API_URL = "https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/@cf/meta/llama-3.1-405b-instruct";

export const callCloudflare = async (apiKey: string, accountId: string, prompt: string) => {
  const response = await fetch(CLOUDFLARE_API_URL.replace("{ACCOUNT_ID}", accountId), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!response.ok) {
    throw new Error(`Cloudflare API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.result.response;
};
