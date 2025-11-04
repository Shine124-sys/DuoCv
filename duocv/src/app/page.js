"use client";
import { useState } from "react";
import PhoneFrame from "./components/PhoneFrame";
import RemotePanel from "./components/RemotePanel";
import AIDesktop from "./components/AIDesktop";
import { AppProvider } from "./components/AppContext";

export default function Page() {
  const [theme, setTheme] = useState("dark");

  return (
    <AppProvider>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-6">
        {/* Phone view */}
        <div className="flex flex-col items-center">
          <PhoneFrame />
          <RemotePanel theme={theme} setTheme={setTheme} />
        </div>

        {/* AI desktop beside phone */}
        <AIDesktop />
      </div>
    </AppProvider>
  );
}
