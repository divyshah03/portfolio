"use client"
import { useState } from "react"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <h1 id="logo">
          <a href="/">
            <img src="/svg/logo.png" alt="Your Logo" />
          </a>
        </h1>

        {/* Navbar links */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li><a className="nav-link" onClick={closeMenu} href="#projects">PROJECTS</a></li>
          <li><a className="nav-link" onClick={closeMenu} href="#contact">CONTACT</a></li>
          <li><a className="nav-link" onClick={closeMenu} href="#blog">BLOG</a></li>
          <li>
            <a className="nav-link btn btn-primary" href="/resume.pdf" target="_blank">
              RESUME
            </a>
          </li>
        </ul>

        {/* Theme toggle */}
        <ThemeToggle />

        {/* Hamburger menu */}
        <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}