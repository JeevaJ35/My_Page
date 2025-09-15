import React, { useState, useEffect } from "react"

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved) {
      setIsDark(saved === "dark")
      document.documentElement.classList.toggle("dark", saved === "dark")
    } else {
      // default: dark mode
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  return (
    <button className="btn" onClick={toggle}>
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  )
}

export default ThemeToggle
