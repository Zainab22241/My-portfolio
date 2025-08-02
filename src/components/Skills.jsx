import React, { useState } from "react";
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  Layers,
  GitBranch,
  Star,
  Zap,
  Award,
  TrendingUp,
  MoreHorizontal,
} from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 85, yearsOfExperience: 2 },
        { name: "Bootstrap CSS", level: 85, yearsOfExperience: 2 },
        { name: "JavaScript", level: 95, yearsOfExperience: 3 },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 75, yearsOfExperience: 1 },
        { name: "MongoDB", level: 82, yearsOfExperience: 2 },
        { name: "Express.js", level: 70, yearsOfExperience: 1 },
        { name: "PHP", level: 90, yearsOfExperience: 3 },
        { name: "SQL", level: 90, yearsOfExperience: 3 },
      ],
    },
    {
      icon: MoreHorizontal,
      title: "Other",
      skills: [
        { name: "Figma", level: 75, yearsOfExperience: 1 },
        { name: "WordPress", level: 78, yearsOfExperience: 2 },
        { name: "Shopify", level: 79, yearsOfExperience: 0.6 },
      ],
    },
  ];

  const tools = [
    {
      name: "Git & GitHub",
      icon: GitBranch,
      color: "from-orange-400 to-red-400",
    },
    { name: "VS Code", icon: Code, color: "from-blue-400 to-purple-400" },
    { name: "Figma", icon: Layers, color: "from-pink-400 to-purple-400" },
    { name: "Vercel", icon: Zap, color: "from-orange-400 to-yellow-400" },
    { name: "WordPress", icon: TrendingUp, color: "from-blue-400 to-cyan-400" },
    {
      name: "MongoDB Compass",
      icon: Star,
      color: "from-purple-400 to-pink-400",
    },
  ];

  const getSkillIcon = (level) => {
    if (level >= 90) return Star;
    if (level >= 80) return Award;
    if (level >= 70) return TrendingUp;
    return Zap;
  };

  const getSkillColor = (level) => {
    if (level >= 90) return "from-yellow-400 to-orange-400";
    if (level >= 80) return "from-blue-400 to-purple-400";
    if (level >= 70) return "from-green-400 to-blue-400";
    return "from-purple-400 to-pink-400";
  };

  const getSkillLevelName = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  return (
    <section id="skills" className="py-20 bg-gray-900/50 relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks that
              I use to build exceptional digital experiences.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full border transition-all duration-300 ${
                  activeCategory === index
                    ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/50 text-white"
                    : "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-blue-400/30 hover:bg-gray-800/70"
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-medium">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Skill Cards */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => {
                const SkillIcon = getSkillIcon(skill.level);
                const skillColor = getSkillColor(skill.level);

                return (
                  <div
                    key={index}
                    className="group bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:bg-gray-800/50"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div
                        className={`p-2 bg-gradient-to-r ${skillColor} rounded-lg`}
                      >
                        <SkillIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {skill.yearsOfExperience} years
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-700 text-white">
                        {getSkillLevelName(skill.level)}
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-600/20 text-blue-300">
                        {skill.yearsOfExperience} yrs experience
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tools */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Development Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="group bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 hover:bg-gray-800/50"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <tool.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-white text-center">
                    {tool.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid md:grid-cols-4 gap-8">
            <StatCard value="15+" label="Technologies" color="text-blue-400" />
            <StatCard value="2+" label="Years Experience" color="text-purple-400" />
            <StatCard value="10+" label="Projects Built" color="text-green-400" />
            <StatCard value="2+" label="Certifications" color="text-yellow-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ value, label, color }) => (
  <div className="text-center bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
    <div className={`text-3xl font-bold mb-2 ${color}`}>{value}</div>
    <div className="text-gray-300">{label}</div>
  </div>
);

export default Skills;
