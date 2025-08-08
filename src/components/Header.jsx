import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Code, Home, User, Briefcase, Folder, Phone, Sparkles } from 'lucide-react';

const Header = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: Folder },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  // Track active section and scroll state
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        if (!section) return;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
      
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md py-2 shadow-xl border-b border-gray-800/50' 
          : 'bg-transparent py-4'
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-24 h-24 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <nav className="container mx-auto px-4 sm:px-6 relative">
        <div className="flex items-center justify-between">
          {/* Animated Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-gradient-xy"></div>
              <Code className="w-6 h-6 text-white z-10 transition-transform group-hover:scale-110" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse z-10"></div>
              <Sparkles className="absolute -bottom-2 -left-2 w-8 h-8 text-blue-300/20 animate-pulse-slow" />
            </div>
         <img
  src="/assets/zainab--Logo.png"
  alt="Zainab Logo"
  className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
/>

          </div>

          {/* Desktop Navigation with Floating Effect */}
          <div className="hidden md:flex items-center space-x-1 bg-gray-800/30 backdrop-blur-sm px-2 py-1 rounded-2xl border border-gray-700/50 shadow-inner">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`relative group px-4 py-2.5 rounded-xl transition-all duration-300 transform ${
                  activeSection === item.href.substring(1)
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 shadow-sm'
                    : 'hover:bg-gray-700/30'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <item.icon className={`w-4 h-4 ${
                    activeSection === item.href.substring(1) 
                      ? 'text-blue-400' 
                      : 'text-gray-400'
                  }`} />
                  <span className={`font-medium ${
                    activeSection === item.href.substring(1)
                      ? 'text-white'
                      : 'text-gray-300'
                  }`}>
                    {item.name}
                  </span>
                </div>
                <div className={`absolute inset-0 rounded-xl border ${
                  activeSection === item.href.substring(1)
                    ? 'border-blue-500/30'
                    : 'border-transparent group-hover:border-blue-400/20'
                }`}></div>
              </button>
            ))}
          </div>

          {/* Animated Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 relative group z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-6">
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-300 absolute inset-0" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300 absolute inset-0" />
              )}
            </div>
            <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-blue-400/20"></div>
          </button>
        </div>

        {/* Animated Mobile Navigation */}
        <div 
          ref={menuRef}
          className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isMenuOpen 
              ? 'max-h-[500px] opacity-100 mt-4' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-gray-800/95 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl divide-y divide-gray-700/50">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`flex items-center w-full px-6 py-5 text-left transition-all duration-300 group ${
                  activeSection === item.href.substring(1)
                    ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10'
                    : 'hover:bg-gray-700/20'
                }`}
              >
                <div className="relative">
                  <item.icon className={`w-5 h-5 mr-4 ${
                    activeSection === item.href.substring(1)
                      ? 'text-blue-400'
                      : 'text-gray-400 group-hover:text-blue-300'
                  }`} />
                  <div className={`absolute -inset-1 bg-blue-400/10 rounded-full blur-sm opacity-0 ${
                    activeSection === item.href.substring(1) ? 'opacity-100' : 'group-hover:opacity-50'
                  }`}></div>
                </div>
                <span className={`text-lg ${
                  activeSection === item.href.substring(1)
                    ? 'text-white font-medium'
                    : 'text-gray-300 group-hover:text-white'
                }`}>
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;



 
