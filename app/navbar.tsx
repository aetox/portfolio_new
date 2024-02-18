"use client";
import { useState } from "react";

function ThemeModeScript() {
  const [theme, setTheme] = useState("system");

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
        (function() {
          const theme = localStorage.getItem("theme");
          if (theme) {
            document.documentElement.classList.add(theme);
          } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.documentElement.classList.add("dark");
          }
        })();
      `,
      }}
    />
  );
}

export default function NavBar() {
  return (
    <nav>
      <ThemeModeScript />
      <button
        onClick={() => {
          const html = document.documentElement;
          if (html.classList.contains("dark")) {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
          } else {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
          }
        }}
      >
        Toggle theme
      </button>
    </nav>
  );
}
