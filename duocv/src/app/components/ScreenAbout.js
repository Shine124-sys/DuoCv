"use client";
import { motion } from "framer-motion";
import { useApp } from "./AppContext";

export default function ScreenAbout() {
  const { setScreen } = useApp();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="p-6 text-center"
    >
      <h2 className="text-xl font-bold mb-3 text-gray-900">About Me</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        I’m <b>Shine</b> — a Researcher & Engineer passionate about building
        advanced systems that connect <b>AI, IoT, and Material Science</b>.
      </p>
      <p className="text-gray-600 mb-6">
        I explore how intelligent algorithms and natural systems can merge
        to create new scientific and technological breakthroughs.
      </p>
      <button
        onClick={() => setScreen("home")}
        className="bg-black text-white px-4 py-2 rounded-xl"
      >
        Back
      </button>
    </motion.div>
  );
}
