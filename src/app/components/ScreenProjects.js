"use client";
import { motion } from "framer-motion";
import { useApp } from "./AppContext";

export default function ScreenProjects() {
  const { setScreen } = useApp();

  const projects = [
    { name: "CrossTalk", desc: "Live dubbing & translation platform" },
    { name: "FACT++", desc: "AI-driven graph traversal framework" },
    { name: "ExplorationPy", desc: "Scientific simulation engine" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="p-6"
    >
      <h2 className="text-xl font-bold mb-4 text-gray-900">Projects</h2>
      <ul className="space-y-3">
        {projects.map((p) => (
          <li key={p.name} className="bg-gray-100 p-3 rounded-xl text-left">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-gray-600 text-sm">{p.desc}</p>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setScreen("home")}
        className="mt-6 bg-black text-white px-4 py-2 rounded-xl"
      >
        Back
      </button>
    </motion.div>
  );
}
