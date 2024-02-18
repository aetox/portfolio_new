import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { DarkModeContext } from "./context/DarkModeContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = React.useContext(DarkModeContext);

  return (
    <nav
      className={`flex items-center justify-between p-4 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="mr-4 h-8" />
        <a
          href="/"
          className={`mr-4 font-bold text-xl ${darkMode ? "underline" : ""}`}
        >
          Accueil
        </a>
        <a
          href="/projets"
          className={`mr-4 hover:underline-none ${darkMode ? "" : ""}`}
        >
          Projets
        </a>
        <a
          href="/contact"
          className={`mr-4 hover:underline-none ${darkMode ? "" : ""}`}
        >
          Contact
        </a>
      </div>
      <button
        className="flex items-center p-2 rounded-md"
        onClick={toggleDarkMode}
      >
        {darkMode ? <FiSun className="mr-2" /> : <FiMoon className="mr-2" />}
        {darkMode ? "Mode clair" : "Mode sombre"}
      </button>
    </nav>
  );
};

export default Navbar;
