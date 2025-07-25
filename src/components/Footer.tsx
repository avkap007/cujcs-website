// import React, { useState } from 'react';

// Social media icons
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkTreeIcon = () => (
  <img src="/images/logos/logo_color_website.png" alt="LinkTree" className="w-8 h-8" />
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full justify-start items-start bg-[#A70039] py-8 font-ibm text-white mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-6">
          <img
            src="/images/logos/logo_color_website.png"
            alt="Logo"
            className="h-12 w-auto"
          />
          <span className="text-white text-xl font-bold">
            Canadian Undergraduate Journal of Cognitive Science
          </span>
        </div>
        <hr className="my-6 border-white opacity-50" />
        <div className="flex flex-col space-y-8 text-sm md:grid md:grid-cols-4 md:space-y-0 md:gap-8">
          <div>
            <h3 className="mb-2">All Collectives</h3>
            <ul className="space-y-5">
              <li><a href="/editions#journals" className="text-white hover:underline">JOURNALS</a></li>
              <li><a href="/editions#art" className="text-white hover:underline">ART</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2">Get Published</h3>
            <ul className="space-y-5">
              <li><a href="#" className="text-white hover:underline">OVERVIEW</a></li>
              <li><a href="#" className="text-white hover:underline">2025 THEMES</a></li>
              <li><a href="#" className="text-white hover:underline">SUBMISSION CHECKLISTS</a></li>
              <li><a href="#" className="text-white hover:underline">WHAT HAPPENS NEXT?</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2">About</h3>
            <ul className="space-y-5">
              <li><a href="/about" className="text-white hover:underline">ABOUT CUJCS</a></li>
              <li><a href="#" className="text-white hover:underline">LEADERSHIP</a></li>
              <li><a href="#" className="text-white hover:underline">CUJCS POLICIES</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2">Connect</h3>
            <ul className="space-y-5">
              <li><a href="#" className="text-white hover:underline">CONTACT FORM</a></li>
              <li><a href="#" className="text-white hover:underline">EDITORIAL EMAIL</a></li>
              <li><a href="#" className="text-white hover:underline">LINKEDIN</a></li>
              <li><a href="#" className="text-white hover:underline">INSTAGRAM</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <hr className="my-6 border-white opacity-50" />
          <div className="text-center text-xs text-white"></div>
        </div>
        <div className="flex flex-col items-center md:items-start mt-8">
          <h2 className="mb-6">Connect with Us!</h2>
          <div className="flex space-x-4 mb-6">
            <a 
              href="https://www.linkedin.com/company/cujcs-ca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-brightOrange transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a 
              href="https://www.instagram.com/cujcs.ca/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-brightOrange transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a 
              href="https://linktr.ee/cogsss" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-brightOrange transition-colors"
              aria-label="LinkTree"
            >
              <LinkTreeIcon />
            </a>
            <a 
              href="mailto:editorial@cujcs.ca" 
              className="text-white hover:text-brightOrange transition-colors"
              aria-label="Email"
            >
              <EmailIcon />
            </a>
          </div>
        </div>
        <div className="text-center text-xs text-white mt-4">
          Copyright © 2002-{new Date().getFullYear()} Canadian Undergraduate Journal of Cognitive Science All Rights Reserved
        </div>
      </div>
    </footer>
  );
}