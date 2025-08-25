"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Переключить тему"
      className="ml-2 p-2 rounded-full border border-stroke bg-card hover:bg-muted transition-colors"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
  {/* Show Moon when dark, Sun when light to reflect current visual theme */}
  {isDark ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
