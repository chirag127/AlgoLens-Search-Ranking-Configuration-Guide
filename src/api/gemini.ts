// src/api/gemini.ts

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemma-3-27b-instruct:generateContent";

export const callGemini = async (apiKey: string, prompt: string) => {
  const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  });

  if (!response.ok) {
    throw new Error(`Gemini API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
};
