"use client"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute("data-theme", savedTheme)
    }
  }, [])

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <div className="theme-switch">
      <input type="checkbox" id="switch" checked={theme === "dark"} onChange={switchTheme} />
      <label className="toggle-icons" htmlFor="switch">
        <img className="moon" src="/moon.svg" alt="moon" />
        <img className="sun" src="/sun.svg" alt="sun" />
      </label>
    </div>
  )
}