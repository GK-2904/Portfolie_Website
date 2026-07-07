import React, { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X, ShieldAlert } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Subjects", href: "#subjects" },
    { name: "Activities", href: "#activities" },
    { name: "Impact & Stats", href: "#dashboard" },
    { name: "Gallery", href: "#gallery" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/80 dark:bg-navy-900/90 backdrop-blur-md shadow-lg py-3 border-b border-gray-200/50 dark:border-navy-800/50" 
        : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" onClick={(e) => handleNavClick(e, '#root')}>
            <div className="p-2 bg-rescue-600 rounded-lg text-white group-hover:scale-105 transition-transform duration-200 shadow-md shadow-rescue-600/20">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black tracking-tight text-lg sm:text-xl text-navy-800 dark:text-white leading-none">
                Om Naganath Sapar
              </span>
              <span className="font-sans text-[9px] sm:text-[10px] tracking-widest text-rescue-600 dark:text-rescue-400 font-bold uppercase mt-0.5">
                Rescue Trainer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-600 dark:text-gray-300 hover:text-rescue-600 dark:hover:text-rescue-400 font-medium text-sm transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-navy-800 dark:hover:bg-navy-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-rescue-600 hover:bg-rescue-700 text-white font-medium text-sm py-2 px-4 rounded-lg shadow-md hover:shadow-rescue-600/25 transition-all duration-200"
            >
              Join Training
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-navy-800 dark:hover:bg-navy-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-rescue-600 dark:hover:text-rescue-400 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-navy-900 border-b border-gray-200 dark:border-navy-800 overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-rescue-600 dark:hover:text-rescue-400 hover:bg-gray-50 dark:hover:bg-navy-800 rounded-md transition-all"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="block text-center w-full bg-rescue-600 hover:bg-rescue-700 text-white font-medium py-3 rounded-lg shadow-md mt-4"
              >
                Join Training
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
