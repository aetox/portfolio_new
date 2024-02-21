"use client";
import React from "react";
import "./globals.css"; // Add the import statement for the CSS file

import { useState } from "react";
import Navbar from "./components/navbar"; // Import the Navbar component

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <Navbar /> {/* Use the Navbar component */}
      <div className="p-4">
        <p>Ceci est un exemple de page d'accueil avec Next.js.</p>
      </div>
    </div>
  );
};

export default Home;
