"use client";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll event to make header sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isSticky ? "fixed top-0 left-0 w-full z-50 bg-white shadow-md" : "relative"
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-4 md:px-6 py-2 flex justify-between items-center">
        {/* v_hd text */}
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl">v_hd</h1>
        </div>

        {/* Menu toggle button */}
        <button
          onClick={toggleMenu}
          className="flex items-center text-xl border px-4 py-2 rounded"
        >
          <span>{isMenuOpen ? "✖" : "☰"}</span>
        </button>
      </div>

      {/* Dropdown menu */}
      {isMenuOpen && (
        <div className="absolute left-0 w-full bg-black text-white z-20">
          <ul className="flex flex-col items-start p-6 space-y-4">
            <li>
              <a href="#" className="text-lg underline">
                Kezdőlap
              </a>
            </li>
            <li>
              <a href="#" className="text-lg">
                Rólam
              </a>
            </li>
            <li>
              <a href="#" className="text-lg underline">
                Munkáim
              </a>
            </li>
            <li>
              <a href="#" className="text-lg">
                Kapcsolat
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
