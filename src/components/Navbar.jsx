"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [otherDropdown, setOtherDropdown] = useState(false);
  const location = usePathname();
  const isHomePage = location.pathname === '/';
  
  const aboutRef = useRef(null);
  const otherRef = useRef(null);

  const aboutLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Resume', to: 'resume' },
  ];

  const otherLinks = [
    { name: 'Projects', path: '/ProjectsPage' },
    { name: 'Blog', path: '/BlogPage' },
    { name: 'Study Materials', path: '/StudyMaterialsPage' },
  ];

  const navLinkClasses = `cursor-pointer hover:text-primary transition-colors ${
    scrolled ? 'text-dark' : 'text-white'
  }`;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setAboutDropdown(false);
      }
      if (otherRef.current && !otherRef.current.contains(event.target)) {
        setOtherDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (dropdown, setDropdown) => {
    // Close other dropdown when opening one
    if (dropdown === 'about') {
      setOtherDropdown(false);
    } else {
      setAboutDropdown(false);
    }
    setDropdown(prev => !prev);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="cursor-pointer">
          <h1 className={`font-kaushan text-2xl ${scrolled || !isHomePage ? 'text-primary' : 'text-white'}`}>
            Pritee Badgujar
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {isHomePage ? (
            <div className="flex items-center space-x-6">
              <ScrollLink
                to="header"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={navLinkClasses}
                activeClass="text-primary"
              >
                Home
              </ScrollLink>

              {/* About Dropdown */}
              <div className="relative" ref={aboutRef}>
                <button 
                  className={navLinkClasses}
                  onClick={() => toggleDropdown('about', setAboutDropdown)}
                >
                  About
                  <span className={`ml-1 inline-block transition-transform duration-200 ${aboutDropdown ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {aboutDropdown && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {aboutLinks.map((link) => (
                        <ScrollLink
                          key={link.name}
                          to={link.to}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          activeClass="text-primary"
                          onClick={() => setAboutDropdown(false)}
                        >
                          {link.name}
                        </ScrollLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={navLinkClasses}
                activeClass="text-primary"
              >
                Contact
              </ScrollLink>

              {/* Other Dropdown */}
              <div className="relative" ref={otherRef}>
                <button 
                  className={navLinkClasses}
                  onClick={() => toggleDropdown('other', setOtherDropdown)}
                >
                  Other
                  <span className={`ml-1 inline-block transition-transform duration-200 ${otherDropdown ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {otherDropdown && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {otherLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setOtherDropdown(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Other Pages Navigation */
            <div className="flex items-center space-x-6">
              <Link
                href="/"
                className={navLinkClasses}
              >
                Home
              </Link>
              <div className="relative" ref={otherRef}>
                <button 
                  className={navLinkClasses}
                  onClick={() => toggleDropdown('other', setOtherDropdown)}
                >
                  Other
                  <span className={`ml-1 inline-block transition-transform duration-200 ${otherDropdown ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {otherDropdown && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {otherLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.path}
                          className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                            location.pathname === link.path ? 'text-primary' : ''
                          }`}
                          onClick={() => setOtherDropdown(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none ${scrolled || !isHomePage ? 'text-dark' : 'text-white'}`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {isHomePage ? (
              <>
                <ScrollLink
                  to="header"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-dark hover:text-primary transition-colors"
                  activeClass="text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </ScrollLink>
                
                {/* Mobile About Section */}
                <div className="pl-4 border-l-2 border-gray-200">
                  <h3 className="text-gray-500 mb-2">About</h3>
                  {aboutLinks.map((link) => (
                    <ScrollLink
                      key={link.name}
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="block py-2 text-dark hover:text-primary transition-colors"
                      activeClass="text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </ScrollLink>
                  ))}
                </div>

                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-dark hover:text-primary transition-colors"
                  activeClass="text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </ScrollLink>

                {/* Mobile Other Section */}
                <div className="pl-4 border-l-2 border-gray-200">
                  <h3 className="text-gray-500 mb-2">Other</h3>
                  {otherLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.path}
                      className="block py-2 text-dark hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/"
                  className="text-dark hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                
                {/* Mobile Other Section */}
                <div className="pl-4 border-l-2 border-gray-200">
                  <h3 className="text-gray-500 mb-2">Other</h3>
                  {otherLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`block py-2 text-dark hover:text-primary transition-colors ${
                        location.pathname === link.path ? 'text-primary' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;