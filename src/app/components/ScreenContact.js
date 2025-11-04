"use client";
import { motion } from "framer-motion";
import { useApp } from "./AppContext";

export default function ScreenContact() {
  const { setScreen } = useApp();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="p-6 text-center"
    >
      <h2 className="text-xl font-bold mb-4 text-gray-900">Contact</h2>
      <p className="text-gray-700 mb-2">📧 shine@example.com</p>
      <p className="text-gray-700 mb-6">🌐 linkedin.com/in/shine</p>
      <button
        onClick={() => setScreen("home")}
        className="bg-black text-white px-4 py-2 rounded-xl"
      >
        Back
      </button>
    </motion.div>
  );
}
