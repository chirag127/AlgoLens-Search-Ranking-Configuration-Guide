import { useState, useEffect } from 'react';
import './style.css';
import goggles from './goggles.json';

function App() {
  const [selectedGoggle, setSelectedGoggle] = useState<string | null>(null);
  const [goggleContent, setGoggleContent] = useState('');

  useEffect(() => {
    if (selectedGoggle) {
      fetch(`/goggles/${selectedGoggle}`)
        .then((res) => res.text())
        .then((text) => setGoggleContent(text));
    }
  }, [selectedGoggle]);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col font-sans">
      <header className="bg-gray-800 p-4 shadow-md">
        <h1 className="text-3xl font-bold">AlgoLens</h1>
      </header>
      <main className="flex flex-1 p-4">
        <aside className="w-1/4 bg-gray-800 rounded-lg p-4 mr-4">
          <h2 className="text-xl font-semibold mb-4">Goggles</h2>
          <ul>
            {goggles.map((goggle) => (
              <li
                key={goggle}
                className={`cursor-pointer p-2 rounded ${
                  selectedGoggle === goggle ? 'bg-gray-700' : ''
                }`}
                onClick={() => setSelectedGoggle(goggle)}
              >
                {goggle}
              </li>
            ))}
          </ul>
        </aside>
        <section className="flex-1 bg-gray-800 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">
            {selectedGoggle ? selectedGoggle : 'Select a goggle to view its content'}
          </h2>
          <pre className="whitespace-pre-wrap">{goggleContent}</pre>
        </section>
      </main>
    </div>
  );
}

export default App;
