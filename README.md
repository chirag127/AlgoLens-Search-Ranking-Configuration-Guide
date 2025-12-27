# AlgoLens: A Frontend for Search Ranking Customization

<!-- BADGES START -->
<!-- This section will be automatically updated by a GitHub Action -->
<p align="center">
  <a href="https://creativecommons.org/licenses/by-nc/4.0/">
    <img src="https://img.shields.io/badge/license-CC%20BY--NC%204.0-blue.svg" alt="License">
  </a>
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/vite-^7.2.4-blue.svg" alt="Vite">
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/typescript-^6.0.0--beta-blue.svg" alt="TypeScript">
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/tailwind%20css-^4.1.18-blue.svg" alt="Tailwind CSS">
  </a>
  <a href="https://reactjs.org/">
    <img src="https://img.shields.io/badge/react-^19.2.3-blue.svg" alt="React">
  </a>
   <a href="https://biomejs.dev/">
    <img src="https://img.shields.io/badge/biome-^1.8.3-blue.svg" alt="Biome">
  </a>
</p>
<!-- BADGES END -->

## 🚀 Project Overview

AlgoLens is a modern, **frontend-only** application for viewing and managing Brave Goggles. It provides a clean, "Spatial Glass" and "Bento Grid" inspired interface for browsing and inspecting `.goggle` files, which are custom search ranking configurations for the Brave Search ecosystem.

This project is built with a cutting-edge tech stack and adheres to the Dec 2025 standards for frontend development, ensuring a high-velocity, zero-defect, and future-proof codebase.

## 🏛️ Architecture

AlgoLens follows a strict frontend-only architecture, running entirely in the browser. It leverages direct REST API calls to various AI providers, with users providing their own API keys at runtime.

```
+---------------------------------+
|         Browser (UI)            |
|  (React, Tailwind, Signals)     |
+---------------------------------+
              |
              | (User-provided API Keys)
              v
+---------------------------------+
|      API Service Layer          |
| (Cerebras, Gemini, Groq, etc.)  |
+---------------------------------+
```

## 🛠️ Tech Stack

- **Framework:** [Vite](https://vitejs.dev/) ^7.2.4
- **Language:** [TypeScript](https://www.typescriptlang.org/) ^6.0.0-beta
- **UI:** [React](https://reactjs.org/) ^19.2.3, [Tailwind CSS](https://tailwindcss.com/) ^4.1.18
- **State Management:** [@preact/signals-react](https://preactjs.com/guide/v10/signals/)
- **Linting/Formatting:** [Biome](https://biomejs.dev/) ^1.8.3

## ⚡ Quickstart

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/chirag127/AlgoLens-Search-Ranking-Configuration-Guide.git
    cd AlgoLens-Search-Ranking-Configuration-Guide
    ```
2.  **Install dependencies:**
    ```sh
    npm install
    ```
3.  **Run the development server:**
    ```sh
    npm run dev
    ```

## ✨ Features

- **Goggle Viewer:** Browse and inspect `.goggle` files.
- **AI Integration:** Leverage multiple AI providers for advanced features (coming soon).
- **Modern UI:** A sleek, "Spatial Glass" and "Bento Grid" inspired interface.
- **Frontend-Only:** Runs entirely in the browser with no backend dependencies.

## 🤝 Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](./CONTRIBUTING.md) file for details on how to get started.

## 📄 License

This project is licensed under the [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) license.
