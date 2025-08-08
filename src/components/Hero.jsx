import React from "react";
import { ChevronDown, Github, Linkedin, Mail, FileText } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Full-Stack Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Crafting digital experiences through innovative code and creative
              problem-solving
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Specialized in modern web technologies, cloud architecture, and
              scalable solutions that drive business growth and user engagement.
            </p>
          </div>

          {/* Social Links including CV */}
          <div className="flex justify-center space-x-6 mb-12">
            {[
              {
                icon: Github,
                href: "https://github.com/Zainab22241",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/zainab-murtaza-00ab24313/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "https://mail.google.com/mail/?view=cm&to=zainabmurtaza204@gmail.com",
                label: "Email",
              },
              { icon: FileText, href: "/assets/Zainab_CV_Web Developer..pdf" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:bg-blue-500/10 group"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <span>Discover My Work</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </button>

            <a
              href="/assets/Zainab_CV_Web Developer..pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-gray-500 rounded-full font-semibold text-gray-300 hover:text-white hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <FileText className="w-5 h-5" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rotate-45 animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-6 h-6 border-2 border-purple-400 rotate-12 animate-spin"
          style={{ animationDuration: "8s" }}
        ></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce"></div>
      </div>
    </section>
  );
};

export default Hero;
