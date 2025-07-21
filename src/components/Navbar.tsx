import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/logos/logo_color_website.png"
            alt="Logo"
            className="h-12 w-auto"
          />
        </Link>
        {/* Navigation and CTA */}
        <div className="flex items-center space-x-3 md:order-2">
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 mr-4">
            <Link to="/" className="text-black hover:font-bold">Home</Link>
            <Link to="/editions" className="text-black hover:font-bold">All Collectives</Link>
            <Link to="/about" className="text-black hover:font-bold">About</Link>
            <Link to="/contact" className="text-black hover:font-bold">Contact</Link>
          </div>
          <button
            onClick={() => window.open("https://link.com", "_blank")}
            className="text-white bg-[#A70039] hover:bg-[#56001D] font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            GET PUBLISHED
          </button>
          {/* Hamburger */}
          <button
            type="button"
            className="inline-flex items-center p-0 w-10 h-10 justify-center text-sm md:hidden focus:outline-none"
            aria-controls="navbar-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', boxShadow: 'none' }}
          >
            <span className="sr-only">Open main menu</span>
            {menuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {/* Menu */}
        <div
          className={`items-center justify-between w-full md:hidden ${menuOpen ? "block" : "hidden"}`}
          id="navbar-menu"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50">
            <li>
              <Link to="/" className="block py-2 px-3 text-black rounded hover:font-bold" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/editions" className="block py-2 px-3 text-black rounded hover:font-bold" onClick={() => setMenuOpen(false)}>
                All Collectives
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-3 text-black rounded hover:font-bold" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-3 text-black rounded hover:font-bold" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
