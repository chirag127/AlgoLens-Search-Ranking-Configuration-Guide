import { signal, effect } from "@preact/signals-react";
import goggles from "./goggles.json";
import { ApiKeyManager } from "./components/ApiKeyManager";

const selectedGoggle = signal<string | null>(null);
const goggleContent = signal("");

effect(() => {
  if (selectedGoggle.value) {
    fetch(`/goggles/${selectedGoggle.value}`)
      .then((res) => res.text())
      .then((text) => (goggleContent.value = text));
  }
});

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen font-sans">
      <main className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <header className="md:col-span-3 bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg">
          <h1 className="text-4xl font-bold tracking-tighter">AlgoLens</h1>
          <p className="text-gray-400 mt-1">
            A modern viewer for Brave Goggles.
          </p>
        </header>

        <aside className="md:col-span-1 bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 tracking-tight">Goggles</h2>
          <ul className="space-y-2">
            {goggles.map((goggle) => (
              <li
                key={goggle}
                className={`cursor-pointer p-3 rounded-lg transition-all duration-200 ${
                  selectedGoggle.value === goggle
                    ? "bg-white/20 shadow-md"
                    : "hover:bg-white/5"
                }`}
                onClick={() => (selectedGoggle.value = goggle)}
              >
                {goggle}
              </li>
            ))}
          </ul>
          <ApiKeyManager />
        </aside>

        <section className="md:col-span-2 bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 tracking-tight">
            {selectedGoggle.value
              ? selectedGoggle.value
              : "Select a goggle"}
          </h2>
          <pre className="whitespace-pre-wrap bg-black/20 rounded-lg p-4 text-gray-300">
            {goggleContent.value}
          </pre>
        </section>
      </main>
    </div>
  );
}

export default App;