"use client";
import { useApp } from "./AppContext";

export default function RemotePanel({ theme, setTheme }) {
  const { setScreen } = useApp();

  return (
    <div className="flex gap-4 mt-2">
      <button onClick={() => setScreen("home")} className="bg-gray-700 px-4 py-2 rounded-xl">
        🏠
      </button>
      <button onClick={() => setScreen("projects")} className="bg-gray-700 px-4 py-2 rounded-xl">
        💻
      </button>
      <button onClick={() => setScreen("contact")} className="bg-gray-700 px-4 py-2 rounded-xl">
        ✉️
      </button>
       <button onClick={() => setScreen("about")} className="bg-gray-700 px-4 py-2 rounded-xl">ℹ️</button>
  <button onClick={() => setScreen("skills")} className="bg-gray-700 px-4 py-2 rounded-xl">⚙️</button>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="bg-gray-700 px-4 py-2 rounded-xl"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    </div>
  );
}
