// src/components/ApiKeyManager.tsx
import { signal } from "@preact/signals-react";

const apiKeys = signal(JSON.parse(localStorage.getItem("apiKeys") || "{}"));

const providers = [
  "Cerebras",
  "Gemini",
  "Groq",
  "Mistral",
  "NVIDIA",
  "Cloudflare",
];

export function ApiKeyManager() {
  const handleSave = () => {
    localStorage.setItem("apiKeys", JSON.stringify(apiKeys.value));
  };

  const handleChange = (provider: string, value: string) => {
    apiKeys.value = { ...apiKeys.value, [provider]: value };
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg mt-8">
      <h2 className="text-2xl font-semibold mb-4 tracking-tight">
        API Keys
      </h2>
      <div className="space-y-4">
        {providers.map((provider) => (
          <div key={provider}>
            <label className="block text-sm font-medium text-gray-400">
              {provider}
            </label>
            <input
              type="password"
              className="mt-1 block w-full bg-black/20 rounded-lg p-2 text-white"
              value={apiKeys.value[provider] || ""}
              onChange={(e) => handleChange(provider, e.target.value)}
            />
          </div>
        ))}
      </div>
      <button
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200"
        onClick={handleSave}
      >
        Save Keys
      </button>
    </div>
  );
}
