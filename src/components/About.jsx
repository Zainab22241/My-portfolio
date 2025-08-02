import React from 'react';
import { User, Target, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: User,
      title: "Developer",
      description: "Passionate about creating elegant solutions to complex problems"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Strategic thinking meets technical execution"
    },
    {
      icon: Zap,
      title: "Innovator",
      description: "Always exploring cutting-edge technologies and methodologies"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="prose prose-lg text-gray-300">
                <p className="text-lg leading-relaxed">
                 I’m Zainab Murtaza, a Full Stack & WordPress Developer who loves turning ideas into functional, beautiful websites. I help businesses and entrepreneurs build online spaces that are fast, secure, and easy to use.
                 
                </p>
                <p className="text-lg leading-relaxed">
               I enjoy solving problems, learning new technologies, and working closely with clients to create sites that truly fit their needs. My goal is always to deliver clean, user-friendly, and reliable web solutions that help people grow online.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">2+</h3>
                  <p className="text-gray-300">Years of Experience</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">10+</h3>
                  <p className="text-gray-300">Projects Completed</p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-4 p-6 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:bg-gray-800/50"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <highlight.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{highlight.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;