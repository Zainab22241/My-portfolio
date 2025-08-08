import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
     _id: '1',
title: "Frontend Developer (React) & UI/UX Designer",
company: "Broshtech",
location: "Onsite",
startDate: "2025-06-01",
current: true,
description: "Designing and developing responsive, user-focused web interfaces using React. Collaborating closely with stakeholders to create intuitive UI/UX designs in Figma and implementing them with modern frontend development practices.",
achievements: [
  "Designed modern UI/UX layouts in Figma",
  "Built reusable and responsive React components",
  "Improved frontend performance and usability"
],
technologies: ["React", "Figma", "JavaScript", "Vite", "Git", "HTML5", "CSS3"],

  },
  {
_id: '2',
title: "Frontend Developer (React)",
company: "Technexus",
location: "Lahore, Pakistan",
startDate: "April 2025",
endDate: "June 2025",
description: "Built responsive interfaces using React and contributed to UI/UX design workflows in Figma. Worked closely with backend teams to deliver integrated web solutions.",
achievements: [
  "Developed reusable components with React",
  "Designed clean, modern layouts in Figma",
  "Enhanced responsiveness and cross-browser support"
],
technologies: ["React", "Figma", "JavaScript", "CSS3", "Git"],

  },
  {
    _id: '3',
    title: "Project Management Intern",
    company: "Excelerate",
    location: "Remote",
    startDate: "2025-03-01",
    endDate: "2025-04-30",
    description: "Assisted in managing digital projects, tracking timelines, coordinating tasks, and facilitating communication between stakeholders and developers.",
    achievements: [
      "Created project roadmaps and task boards",
      "Documented sprint planning and retrospectives",
      "Improved communication workflows using Notion and Slack"
    ],
    technologies: ["Clickup" ]
  },
  {
    _id: '4',
    title: "Full-stack Developer",
    company: "TECH-HUB",
    location: "On-site",
    startDate: "2024-04-01",
    endDate: "2024-08-31",
    description: "Completed a hands-on internship in full-stack development with a strong focus on building dynamic web applications using modern JavaScript frameworks.",
    achievements: [
      "Built full-featured CRUD applications using MERN stack",
      "Integrated third-party APIs and implemented user authentication",
      "Followed Git workflow and agile development cycles"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],
  },
];

const formatPeriod = (startDate, endDate, current) => {
  const start = new Date(startDate).getFullYear();
  if (current) return `${start} - Present`;
  const end = endDate ? new Date(endDate).getFullYear() : 'Present';
  return `${start} - ${end}`;
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp._id || index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative md:ml-16 bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="absolute -left-20 top-6 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 hidden md:block"></div>

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <div className="flex items-center space-x-3 text-blue-400 mb-1">
                        <span className="font-medium">{exp.company}</span>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{formatPeriod(exp.startDate, exp.endDate, exp.current)}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-3">{exp.description}</p>

                  <div className="mb-3">
                    <h4 className="text-base font-semibold text-white mb-1">Key Achievements</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2">
                          <ArrowRight className="w-3 h-3 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-xs text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
