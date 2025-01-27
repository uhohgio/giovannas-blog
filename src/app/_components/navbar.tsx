import React from "react";

const NavBar: React.FC = () => {
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
            background-color: rgba(78, 187, 187, 0.5);
            box-shadow: 0px 5px 5px rgba(78, 187, 187, 0.5); 
            position: sticky;
            top: 0;
          }

          li {
            float: left;
          }

          li a {
            display: block;
            color: rgb(200, 220, 220);
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            text-shadow: #181911 1px 2px 5px, #00ffff 1px 0 20px;
          }

          li a:hover {
            background-color: #111;
            border-radius: 5px;
            padding: 14px 16px;
          }

          .active {
            border-radius: 5px;
            padding: 14px 16px;
            background-color:rgba(30, 41, 59, 0.5);
          }
        `}
      </style>

      {/* Navbar */}
      <ul>
        <li>
          <a className="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#news"> Tech Stack </a>
        </li>
        <li>
          <a href="#contact"> My Projects </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
