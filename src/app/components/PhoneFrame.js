"use client";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { useApp } from "./AppContext";
import ScreenHome from "./ScreenHome";
import ScreenProjects from "./ScreenProjects";
import ScreenContact from "./ScreenContact";
import ScreenAbout from "./ScreenAbout";
import ScreenSkills from "./ScreenSkills";

export default function PhoneFrame() {
  const { screen } = useApp();

  return (
    <div className="w-[400px] h-[800px] bg-black rounded-[40px] shadow-2xl relative overflow-hidden border-4 border-gray-700">
      <Navbar />
      <div className="bg-white h-full overflow-hidden rounded-[32px]">
        <AnimatePresence mode="wait">
          {screen === "home" && <ScreenHome key="home" />}
          {screen === "projects" && <ScreenProjects key="projects" />}
          {screen === "contact" && <ScreenContact key="contact" />}
           {screen === "about" && <ScreenAbout key="about" />}       {/* new */}
           {screen === "skills" && <ScreenSkills key="skills" />} 
        </AnimatePresence>
      </div>
    </div>
  );
}
