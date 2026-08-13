import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper function for active link styling
  const navLinkStyles = ({ isActive }) => 
    `transition-all font-medium pb-1 border-b-2 ${
      isActive 
        ? "text-blue-700 border-blue-700" 
        : "text-slate-600 border-transparent hover:text-blue-700 hover:border-blue-300"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-extrabold text-blue-700 tracking-tight flex items-center gap-2">
          <span className="bg-blue-700 text-white p-1.5 rounded-lg">GWC</span>
          Academy
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLink to="/" className={navLinkStyles}>Home</NavLink>
          <NavLink to="/courses" className={navLinkStyles}>Courses</NavLink>
          <NavLink to="/about" className={navLinkStyles}>About Us</NavLink>
          <NavLink to="/contact" className={navLinkStyles}>Contact</NavLink>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
            Enroll Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-4 shadow-lg">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={({isActive}) => `block font-medium ${isActive ? "text-blue-700" : "text-slate-600"}`}>Home</NavLink>
          <NavLink to="/courses" onClick={() => setIsOpen(false)} className={({isActive}) => `block font-medium ${isActive ? "text-blue-700" : "text-slate-600"}`}>Courses</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={({isActive}) => `block font-medium ${isActive ? "text-blue-700" : "text-slate-600"}`}>About Us</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({isActive}) => `block font-medium ${isActive ? "text-blue-700" : "text-slate-600"}`}>Contact</NavLink>
          <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700">
            Enroll Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;