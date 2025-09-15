import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import AIWidget from "./components/AIWidget.jsx";

const App = () => {
  // Theme state
  const [theme, setTheme] = useState("light");

  // Load saved theme or default to dark
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Update theme when changed
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </header>

      <Navbar />

      <main className="container mx-auto px-4">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <AIWidget />
      <Footer />
    </div>
  );
};

export default App;
