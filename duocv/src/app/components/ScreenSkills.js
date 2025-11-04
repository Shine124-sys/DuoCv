"use client";
import { motion } from "framer-motion";
import { useApp } from "./AppContext";

export default function ScreenSkills() {
  const { setScreen } = useApp();

  const skills = [
    { category: "Programming", items: ["Python", "JavaScript", "Kotlin", "C++"] },
    { category: "Frameworks", items: ["Next.js", "FastAPI", "React", "TensorFlow"] },
    { category: "Domains", items: ["AI Systems", "Graph Algorithms", "IoT", "Material Simulation"] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="p-6 text-center"
    >
      <h2 className="text-xl font-bold mb-4 text-gray-900">Skills</h2>
      <div className="space-y-4 text-left">
        {skills.map((s) => (
          <div key={s.category} className="bg-gray-100 p-3 rounded-xl">
            <h3 className="font-semibold text-gray-800 mb-1">{s.category}</h3>
            <p className="text-gray-600 text-sm">{s.items.join(", ")}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => setScreen("home")}
        className="mt-6 bg-black text-white px-4 py-2 rounded-xl"
      >
        Back
      </button>
    </motion.div>
  );
}
