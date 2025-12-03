"use client";

import { useEffect, useState } from "react";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      {/* <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 border rounded"
      >
        Toggle Theme
      </button> */}

      {children}
    </>
  );
}
