import React, { useState } from "react";

export default function Navbar() {
  const [pastOpen, setPastOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // burger menu toggle

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-transparent">
      {/* Logo */}
      <img
        src="/images/logos/logo_color_website.png"
        alt="Logo"
        className="h-12 w-auto"
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-10">
        <button className="text-black bg-transparent hover:font-bold flex items-center gap-2">
          ALL COLLECTIVES
        </button>

        <button
          onClick={() => setPastOpen(!pastOpen)}
          className="text-black bg-transparent hover:font-bold flex items-center gap-2"
        >
          ABOUT
        </button>

        <button
          onClick={() => setPastOpen(!pastOpen)}
          className="text-black bg-transparent hover:font-bold flex items-center gap-2"
        >
          CONTACT
        </button>

        <button
          onClick={() => window.open("https://link.com", "_blank")}
          className="bg-[#A70039] hover:bg-[#56001D] text-white font-semibold py-3 px-6 rounded-full transition duration-200"
        >
          GET PUBLISHED
        </button>
      </div>

      {/* Burger Menu Button (mobile) */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 text-black hover:bg-gray-200 rounded"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        {/* Burger icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {menuOpen ? (
            // X icon when open
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            // Hamburger icon when closed
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col space-y-4 p-4 z-50">
          <button className="text-black bg-transparent hover:font-bold flex items-center gap-2 text-left w-full">
            ALL COLLECTIVES
          </button>

          <button
            onClick={() => setPastOpen(!pastOpen)}
            className="text-black bg-transparent hover:font-bold flex items-center gap-2 text-left w-full"
          >
            ABOUT
          </button>

          <button
            onClick={() => setPastOpen(!pastOpen)}
            className="text-black bg-transparent hover:font-bold flex items-center gap-2 text-left w-full"
          >
            CONTACT
          </button>

          <button
            onClick={() => window.open("https://link.com", "_blank")}
            className="bg-[#A70039] hover:bg-[#56001D] text-white font-semibold py-3 px-6 rounded-full transition duration-200 w-full"
          >
            GET PUBLISHED
          </button>
        </div>
      )}
    </nav>
  );
}
