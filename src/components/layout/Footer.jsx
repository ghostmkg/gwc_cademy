import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-4 text-sm mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12 border-b border-slate-800 pb-12">
        
        {/* Brand Column */}
        <div className="lg:col-span-2">
          <div className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2 mb-6">
            <span className="bg-blue-600 text-white p-1.5 rounded-lg">GWC</span> Academy
          </div>
          <p className="max-w-xs mb-6 text-base leading-relaxed text-slate-400">
            Building India's next generation of job-ready IT professionals. The educational branch of Vaptura Labs.
          </p>
          <p className="flex items-center gap-2 font-medium text-slate-300">
            <span>📍</span> Mumbai, Maharashtra, India
          </p>
        </div>
        
        {/* Programs Column */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Programs</h4>
          <ul className="space-y-4">
            <li><NavLink to="/programs/development" className="hover:text-white transition">Development</NavLink></li>
            <li><NavLink to="/programs/cybersecurity" className="hover:text-white transition">Cyber Security & VAPT</NavLink></li>
            <li><NavLink to="/programs/cloud" className="hover:text-white transition">Cloud & DevOps</NavLink></li>
            <li><NavLink to="/programs/foundation" className="hover:text-white transition">Programming Basics</NavLink></li>
          </ul>
        </div>

        {/* Career Column */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Career</h4>
          <ul className="space-y-4">
            <li><NavLink to="/internship" className="hover:text-white transition">Vaptura Internship</NavLink></li>
            <li><NavLink to="/career-support" className="hover:text-white transition">Career Support</NavLink></li>
            <li><NavLink to="/projects" className="hover:text-white transition">Live Projects</NavLink></li>
          </ul>
        </div>
        
        {/* Academy Column */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Academy</h4>
          <ul className="space-y-4">
            <li><NavLink to="/about" className="hover:text-white transition">About Us</NavLink></li>
            <li><NavLink to="/instructors" className="hover:text-white transition">Instructors</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-white transition">Contact Us</NavLink></li>
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Company & Legal</h4>
          <ul className="space-y-4">
            <li><a href="https://vapturalabs.com/" target="_blank" rel="noreferrer" className="hover:text-white transition font-medium text-blue-400">Vaptura Labs</a></li>
            <li><NavLink to="/privacy" className="hover:text-white transition">Privacy Policy</NavLink></li>
            <li><NavLink to="/terms" className="hover:text-white transition">Terms of Service</NavLink></li>
            <li><NavLink to="/refunds" className="hover:text-white transition">Refund Policy</NavLink></li>
          </ul>
        </div>

      </div>
      
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p>© {new Date().getFullYear()} GWC Academy. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition font-medium">YouTube</a>
          <a href="#" className="hover:text-white transition font-medium">LinkedIn</a>
          <a href="#" className="hover:text-white transition font-medium">Discord</a>
          <a href="#" className="hover:text-white transition font-medium">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;