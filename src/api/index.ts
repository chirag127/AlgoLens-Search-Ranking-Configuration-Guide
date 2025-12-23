// src/api/index.ts
import { callCerebras } from "./cerebras";
import { callGemini } from "./gemini";
import { callGroq } from "./groq";
import { callMistral } from "./mistral";
import { callNvidia } from "./nvidia";
import { callCloudflare } from "./cloudflare";

const providers = [
  { name: "Cerebras", func: callCerebras },
  { name: "Gemini", func: callGemini },
  { name: "Groq", func: callGroq },
  { name: "Mistral", func: callMistral },
  { name: "NVIDIA", func: callNvidia },
  { name: "Cloudflare", func: callCloudflare },
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const callAi = async (prompt: string) => {
  const apiKeys = JSON.parse(localStorage.getItem("apiKeys") || "{}");

  for (const provider of providers) {
    const apiKey = apiKeys[provider.name];
    if (!apiKey) {
      console.warn(`${provider.name} API key not found.`);
      continue;
    }

    let retries = 0;
    while (retries < 5) {
      try {
        if (provider.name === "Cloudflare") {
          const [key, accountId] = apiKey.split(":");
          return await (provider.func as (key: string, accountId: string, prompt: string) => Promise<string>)(key, accountId, prompt);
        }
        return await (provider.func as (apiKey: string, prompt: string) => Promise<string>)(apiKey, prompt);
      } catch (error) {
        console.error(`Error calling ${provider.name}:`, error);
        retries++;
        const delay = Math.pow(2, retries -1) * 1000;
        console.log(`Retrying ${provider.name} in ${delay}ms...`);
        await sleep(delay);
      }
    }
  }

  throw new Error("All AI providers failed.");
};
