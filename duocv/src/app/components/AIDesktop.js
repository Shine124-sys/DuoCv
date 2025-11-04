"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AIDesktop() {
  const [lines, setLines] = useState([
    "Initializing Neural System...",
    "Loading FACT++ traversal core...",
    "Establishing multimodal AI link...",
    "Running simulation modules...",
  ]);

  const [displayed, setDisplayed] = useState([]);
  const [index, setIndex] = useState(0);

  // Simulate terminal typing effect
  useEffect(() => {
    if (index < lines.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => [...prev, lines[index]]);
        setIndex(index + 1);
      }, 1800);
      return () => clearTimeout(timer);
    } else {
      // Loop
      const resetTimer = setTimeout(() => {
        setDisplayed([]);
        setIndex(0);
      }, 4000);
      return () => clearTimeout(resetTimer);
    }
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 180 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="w-[400px] h-[300px] bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl relative overflow-hidden"
    >
      {/* Header */}
      <div className="flex justify-between items-center bg-gray-800 text-gray-300 px-4 py-2 text-sm">
        <span>AI Terminal</span>
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* Animated Glow */}
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.02, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-800/10"
      ></motion.div>

      {/* Terminal Lines */}
      <div className="relative z-10 font-mono text-green-400 text-sm p-4 h-full overflow-y-auto">
        {displayed.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            ➜ {line}
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        >
          ▋
        </motion.div>
      </div>
    </motion.div>
  );
}
