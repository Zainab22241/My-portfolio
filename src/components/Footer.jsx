import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
 
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Zainab22241',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/zainab-murtaza-00ab24313/',
    },
    {
      icon: Mail,
      label: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&to=zainabmurtaza204@gmail.com',
   },
  ];

  return (
    <footer className="bg-gray-900/90 text-gray-300 py-14 border-t border-gray-700 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="container mx-auto px-6 flex flex-col items-center space-y-8"
      >
        {/* Brand Name */}
        <motion.h3
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          >
          <img
  src="assets/zainab--logo.png"
  alt="Zainab Logo"
  className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
/>

        </motion.h3>

        {/* Animated Navbar Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm uppercase tracking-wider">
  {navLinks.map((link, idx) => (
    <motion.a
      key={idx}
      href={link.href}
      whileHover={{ x: 4 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="relative text-gray-400 transition-all duration-300 
        after:content-[''] after:absolute after:left-0 after:-bottom-1 
        after:h-[2px] after:w-0 after:transition-all after:duration-500
        hover:after:w-full hover:after:bg-gradient-to-br 
        hover:after:from-blue-500 hover:after:to-purple-500
        hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br 
        hover:from-blue-500 hover:to-purple-500"
    >
      {link.name}
    </motion.a>
  ))}
</div>



        {/* Social Icons */}
        <div className="flex space-x-4">
{socialLinks.map((item, index) => (
  <motion.a
    key={index}
    href={item.href}
    aria-label={item.label}
    target={item.href.startsWith('mailto:') ? undefined : '_blank'}
    rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
    whileHover={{ scale: 1.15 }}
    transition={{ type: 'spring', stiffness: 250 }}
    className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full bg-gray-800/60 hover:bg-gray-700 shadow-md hover:shadow-blue-500/20 transition"
  >
    <item.icon className="w-5 h-5 text-gray-300" />
  </motion.a>
))}

        </div>

     
      </motion.div>
    </footer>
  );
};

export default Footer;
