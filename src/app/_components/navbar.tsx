"use client";

import React, { useState, useEffect } from "react";
import { ThemeSwitcher } from "./theme-switcher";
import { usePathname } from "next/navigation";

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close menu when screen is resized beyond 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <style>
        {`
          :root {
            --accent-color: rgba(235, 0, 255, 0.5);
            --text-color: #cee;
            --nav-bg: rgba(40, 10, 50, 0.5);
            --menu-bg: rgba(40, 10, 50, 0.5); /* Dark mode background for mobile */
          }

          /* Light Mode Adjustments */
          @media (prefers-color-scheme: light) {
            :root {
              --accent-color: rgba(200, 100, 200, 0.5);
              --text-color: #266;
              // text-shadow: 1px 1px 2px #cee;
              --nav-bg: rgba(255, 255, 255, 0.7);
              --menu-bg: rgba(120, 0, 200, 0.7); /* Light mode background for mobile */
            }
          }

          body {
            font-size: 28px;
          }

          nav {
            background-color: var(--nav-bg);
            box-shadow: 0px 5px 5px rgba(40, 10, 50, 0.3);
            position: sticky;
            top: 0;
            width: 100%;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 20px;
          }

          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            gap: 15px;
          }

          li {
            font-family: 'Orbitron', "sans-serif";
          }

          li a {
            display: block;
            color: var(--text-color);
            text-align: center;
            padding: 10px 15px;
            text-decoration: none;
            text-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);
            transition: all 0.3s ease;
          }

          li a:hover, .active {
            background-color: var(--accent-color);
            border-radius: 10px;
            padding: 10px 18px;
            transform: scale(1.1);
          }

          /* Center Theme Switcher */
          .theme-container {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-right: 20px;
          }

          /* Hamburger Menu */
          .menu-icon {
            display: none;
            font-size: 30px;
            cursor: pointer;
            padding: 10px;
            color: var(--text-color);
          }

          /* Mobile Dropdown Menu */
          .mobile-menu {
            display: none;
            flex-direction: column;
            background: rgba(120, 0, 200, 0.5); /* Using the menu-bg variable */
            position: absolute;
            width: 100%;
            top: 85px;
            left: 0;
            text-align: center;
            padding: 10px 0;
            box-shadow: 0px 5px 5px rgba(40, 10, 50, 0.3);
          }

          .mobile-menu.open {
            display: flex;
          }

          .mobile-menu a {
            padding: 15px;
            font-size: 24px;
            color: var(--text-color);
            text-decoration: none;
            transition: all 0.3s ease;
          }

          .mobile-menu a:hover, .mobile-menu a:active {
            background-color: var(--accent-color);
            box-shadow: 0px 0px 5px var(--accent-color);
            border-radius: 20px;
            transform: scale(1.1);
          }

          @media (max-width: 768px) {
            ul {
              display: none;
            }

            .menu-icon {
              display: block;
            }

            .mobile-menu {
              display: none;
              background: var(--menu-bg); /* Ensuring menu background is variable */
              // background: rgba(40, 10, 50, 0.3); /* Ensuring menu background is variable */
              // rgba(40, 10, 50, 0.3);
            }

            .mobile-menu.open {
              display: flex;
            }

            /* Ensure hover effect works on mobile */
            .mobile-menu a {
              display: block;
              width: 100%;
              text-align: center;
            }
          }
        `}
      </style>

      <nav>
        {/* Hamburger Menu */}
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>

        {/* Desktop Menu */}
        <ul className="desktop-menu">
          {[
          { name: "Home", href: "/" }, 
          { name: "Tech Stack", href: "/tech_stack" }, 
          { name: "My Projects", href: "/my_projects" }, 
          { name: "Blog", href: "/my_blog"} // Uncomment this line to add the Blog link back, taken down because it's a little useless
        ].map(
            (link) => (
              <li key={link.href}>
                <a href={link.href} className={pathname === link.href ? "active" : ""}>
                  {link.name}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Centered Theme Switcher */}
        <div className="theme-container">
          <ThemeSwitcher />
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {[{ name: "Home", href: "/" }, { name: "Tech Stack", href: "/tech_stack" }, { name: "My Projects", href: "/my_projects" }, { name: "Blog", href: "/my_blog" }].map(
            (link) => (
              <a key={link.href} href={link.href} className={pathname === link.href ? "active" : ""} onClick={toggleMenu}>
                {link.name}
              </a>
            )
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
