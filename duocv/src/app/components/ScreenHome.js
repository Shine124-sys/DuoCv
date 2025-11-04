"use client";
import { motion } from "framer-motion";
import { useApp } from "./AppContext";

export default function ScreenHome() {
  const { setScreen } = useApp();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="p-6 text-center"
    >
      <h1 className="text-2xl font-bold mb-2 text-gray-900">Shoriful Shine</h1>
      <p className="text-gray-600 mb-6">Researcher & Engineer</p>
      <div className="flex flex-col gap-3">
        <button
          onClick={() => setScreen("projects")}
          className="bg-black text-white py-2 rounded-xl"
        >
          View Projects
        </button>
        <button
          onClick={() => setScreen("contact")}
          className="bg-gray-200 text-black py-2 rounded-xl"
        >
          Contact Me
        </button>
        <button onClick={() => setScreen("about")} className="bg-gray-200 text-black py-2 rounded-xl">
    About Me
  </button>
  <button onClick={() => setScreen("skills")} className="bg-gray-200 text-black py-2 rounded-xl">
    Skills
  </button>
      </div>
    </motion.div>
  );
}
