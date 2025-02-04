"use client"

import React, { useState } from "react";
import { ThemeSwitcher } from "./theme-switcher";
import { usePathname } from "next/navigation";

const NavBar: React.FC = () => {
  const pathname = usePathname();

  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div>
      {/* Styles */}
      <style>
        {`
          body {
            font-size: 28px;
          }

          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: rgba(40, 10, 50, 0.3);
            box-shadow: 0px 5px 5px rgba(40, 10, 50, 0.3);
            position: sticky;
            top: 0;
          }

          li {
            float: left;
            font-family: 'Orbitron', "sans-serif";
            // background-color: rgba(48, 9, 69, 0.3);
            // box-shadow: 0px 5px 5px rgba(48, 9, 69, 0.3);
          }

          li a {
            display: block;
            color: #cee;
            text-align: center;
            padding: 7px 10px;
            text-decoration: none;
            text-shadow: #181911 1px 2px 5px, #f0f 1px 0 20px;
          }

          li a:hover {
            background-color: rgba(235, 0, 255, 0.7); 
            position: sticky;;
            border-radius: 10px;
            padding: 7px 14px;
            transform: scale(1.1);
          }

          .active {
            border-radius: 5px;
            padding: 7px 14px;
            background-color:rgba(255, 0, 255, 0.4);
          }
        `}
      </style>

      {/* Navbar */}
      <nav>
        <ul>
          {[
            { name: "Home", href: "/" },
            { name: "Tech Stack", href: "/tech_stack" },
            { name: "My Projects", href: "/my_projects" },
          ].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={pathname === link.href ? "active" : ""}
                onClick={() => handleClick(link.href)} // for some reason home doesn't work without this
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
