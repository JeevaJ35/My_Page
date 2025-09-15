import React from "react"
import ThemeToggle from "./ThemeToggle.jsx"

const items = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/60 border-b border-white/5">
      <nav className="container flex items-center justify-between h-16">
        <a href="#" className="font-semibold tracking-wide">Jeevanandham</a>
        <ul className="hidden md:flex gap-6 text-sm">
          {items.map(i => (
            <li key={i.href}><a className="hover:text-accent" href={i.href}>{i.label}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a className="btn" href="/resume.pdf" download>Download Resume</a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
