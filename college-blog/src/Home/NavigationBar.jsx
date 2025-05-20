import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Simple avatar icon (SVG)
const AvatarIcon = () => (
  <svg className="w-8 h-8 rounded-full bg-gray-300 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.657 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-200 text-black shadow">
      {/* Logo/Brand */}
      <h1 className="text-3xl font-bold cursor-pointer" onClick={() => navigate('/')}>
        VNIT NotesHub
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/Downloadednotes" className="hover:underline">Downloaded Notes</Link>
        <Link to="/UploadedNotes" className="hover:underline">Uploaded Notes</Link>
        {/* Account icon */}
        <button
          onClick={() => navigate('/StudentProfileEditSection')}
          aria-label="Edit profile"
        >
          <AvatarIcon />
        </button>
      </div>

      {/* Hamburger for mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded p-4 flex flex-col space-y-4 md:hidden z-50">
          <Link to="/downloaded-notes" onClick={() => setMenuOpen(false)}>Downloaded Notes</Link>
          <Link to="/uploaded-notes" onClick={() => setMenuOpen(false)}>Uploaded Notes</Link>
          <button
            onClick={() => { setMenuOpen(false); navigate('/StudentProfileEditSection'); }}
          >
            <div className="flex items-center space-x-2">
              <AvatarIcon />
              <span>Edit Profile</span>
            </div>
          </button>
        </div>
      )}
    </nav>
  );
}


