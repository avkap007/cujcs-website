import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [pastOpen, setPastOpen] = useState(false);

  return (
    <nav className="w-full flex justify-end px-10 py-4 bg-deepRed space-x-8">
      {/* About Us */}
      <div className="relative">
        <button
          onClick={() => setAboutOpen(!aboutOpen)}
          className="text-white bg-deepRed font-bold hover:underline flex items-center gap-1"
        >
          About Us
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {aboutOpen && (
          <div className="absolute top-full mt-2 w-52 bg-white border rounded">
            <ul className="text-sm text-gray-700">
              <li>
                <Link to="/about/cujcs" onClick={() => setAboutOpen(false)} className="block px-4 py-2 hover:bg-deepRed">
                  About CUJCS
                </Link>
              </li>
              <li>
                <Link to="/about/leadership" onClick={() => setAboutOpen(false)} className="block px-4 py-2 hover:bg-deepRed">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/about/policies" onClick={() => setAboutOpen(false)} className="block px-4 py-2 hover:bg-deepRed">
                  CUJCS Policies
                </Link>
              </li>
              <li>
                <Link to="/about/contact" onClick={() => setAboutOpen(false)} className="block px-4 py-2 hover:bg-deepRed">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Past Collectives */}
      <div className="relative">
        <button
          onClick={() => setPastOpen(!pastOpen)}
          className="text-white bg-deepRed font-bold hover:underline flex items-center gap-1"
        >
          Past Collectives
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {pastOpen && (
          <div className="absolute top-full mt-2 w-52 bg-white border border-gray-200 rounded shadow z-50">
            <ul className="text-sm text-gray-700">
              <li>
                <Link to="/past/journals" onClick={() => setPastOpen(false)} className="block px-4 py-2 hover:bg-deepRed">
                  Past Journals
                </Link>
              </li>
              <li>
                <Link to="/past/art-collectives" onClick={() => setPastOpen(false)} className="block px-4 py-2 hover:bg-deepRed">
                  Art Collectives
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Get Published */}
      <div>
        <button
          onClick={() => window.open("https://link.com", "_blank")}
          className="bg-pink hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
        >
          Get Published! 
        </button>
      </div>
    </nav>
  );
}
 