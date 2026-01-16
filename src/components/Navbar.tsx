import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Delivery', href: '#delivery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100/50'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-2 rounded-xl shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/30 transition-all duration-300">
              <Terminal size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 font-display">
              Code<span className="text-purple-600">&</span>Pixels
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-all duration-300 shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 hover:-translate-y-0.5"
            >
              Let's Talk
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200"
              onClick={handleNavClick}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-4">
            <a
              href="#contact"
              className="block w-full text-center px-6 py-3 text-base font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all duration-300 shadow-lg shadow-slate-900/20"
              onClick={handleNavClick}
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}