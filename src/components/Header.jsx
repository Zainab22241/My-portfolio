import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Code, Home, User, Briefcase, Folder, Phone, Sparkles } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: Folder },
  { name: "Contact", href: "#contact", icon: Phone },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      navItems.forEach(({ href }) => {
        const section = document.querySelector(href);
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
        }
      });
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setIsMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const NavButton = ({ item, mobile }) => {
    const active = activeSection === item.href.substring(1);
    return (
      <button
        onClick={() => handleNavClick(item.href)}
        className={`flex items-center ${mobile ? "w-full px-6 py-5" : "px-4 py-2.5"} rounded-xl transition-all ${
          active ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20" : "hover:bg-gray-700/30"
        }`}
      >
        <item.icon className={`w-5 h-5 ${active ? "text-blue-400" : "text-gray-400"}`} />
        <span className={`${mobile ? "ml-4 text-lg" : "ml-2"} ${active ? "text-white font-medium" : "text-gray-300"}`}>
          {item.name}
        </span>
      </button>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? "bg-gray-900/95 backdrop-blur-md py-2 shadow-xl border-b border-gray-800/50" : "bg-transparent py-4"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
              <Code className="w-6 h-6 text-white z-10" />
              <Sparkles className="absolute -bottom-2 -left-2 w-8 h-8 text-blue-300/20" />
            </div>
            <img src="/assets/zainab--Logo.png" alt="Zainab Logo" className="h-20 w-auto object-contain" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 bg-gray-800/30 backdrop-blur-sm px-2 py-1 rounded-2xl">
            {navItems.map((item) => (
              <NavButton key={item.name} item={item} />
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2.5 rounded-xl bg-gray-800/50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6 text-gray-300" /> : <Menu className="w-6 h-6 text-gray-300" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div ref={menuRef} className="md:hidden mt-4 bg-gray-800/95 rounded-2xl shadow-2xl">
            {navItems.map((item) => (
              <NavButton key={item.name} item={item} mobile />
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
























 