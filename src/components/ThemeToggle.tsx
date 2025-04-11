
import React from "react";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  
  useEffect(() => {
    // Check if user prefers dark mode
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      setIsDarkMode(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    }
  }, []);
  
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };
  
  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleTheme} 
      className="rounded-full w-10 h-10 transition-all duration-300 neu-shadow"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-400 animate-scale-in" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700 animate-scale-in" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
