import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Coffee Shop",
    description:
      "A responsive Shopify store built with Liquid and JavaScript, featuring a custom theme and dynamic product filters.",
    category: "Full-stack",
    tags: ["Javascript", "CSS", "PHP", "HTML"],
    
    links: { demo: "https://coffee-shop-u37k.vercel.app/" },
    image: "assets/coffee.png ",
  },
  {
    title: "Dental Clinic Site",
    description:
      "Personal developer portfolio showcasing projects, experience, and skills using React and Tailwind.",
    category: "Frontend",
    tags: ["React", "CSS", "Framer Motion"],
  
    links: { demo: "https://github.com/Zainab22241/Dental-Clinic" },
    image: "assets/dental-clinic.png",
  },
  {
    title: "Blood Donation Website",
    description:
      "A full-stack admin panel built with the MERN stack for managing users, data, and analytics.",
    category: "Full-stack",
    tags: ["PHP", "CSS", "Bootstrap", "Javascript", "HTML"],
  
    links: { demo: " https://blood-donation-pied.vercel.app/" },
    image: " assets/image.png  ",
  },
];

const ProjectSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {["All", "Frontend", "Backend", "Full-stack"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "bg-gray-800 border-gray-700 text-gray-300 hover:border-blue-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-gray-800/40 border border-gray-700 rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 flex flex-col overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />

              <div className="p-6 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs text-blue-400 border border-blue-400/30 bg-blue-500/10 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Button */}
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block w-full text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  View Project <ExternalLink className="inline w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

// import React, { useState, useEffect } from 'react';
// import { ExternalLink, Github, Zap, Users, TrendingUp } from 'lucide-react';
// import { projectsAPI } from '../services/api';

// const Projects = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await projectsAPI.getAll({ featured: true });
//         setProjects(response.data.projects);
//       } catch (err) {
//         setError('Failed to load projects');
//         console.error('Error fetching projects:', err);
//         // Fallback to static data if API fails
//         setProjects([
//           {
//             _id: '1',
//             title: "E-Commerce Platform",
//             description: "A full-stack e-commerce solution with modern UI, secure payments, and admin dashboard. Built with React, Node.js, and PostgreSQL.",
//             image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
//             tags: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
//             features: ["Real-time inventory", "Payment processing", "Admin dashboard", "Mobile responsive"],
//             metrics: {
//               users: "10K+",
//               performance: "98%",
//               uptime: "99.9%"
//             },
//             links: {
//               github: "#",
//               demo: "#"
//             }
//           },
//           {
//             _id: '2',
//             title: "AI-Powered Analytics Dashboard",
//             description: "Data visualization platform with machine learning insights. Features real-time data processing and interactive charts.",
//             image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
//             tags: ["React", "Python", "TensorFlow", "D3.js", "Docker"],
//             features: ["Real-time analytics", "ML predictions", "Interactive charts", "Custom reports"],
//             metrics: {
//               users: "5K+",
//               performance: "95%",
//               uptime: "99.8%"
//             },
//             links: {
//               github: "#",
//               demo: "#"
//             }
//           },
//           {
//             _id: '3',
//             title: "Social Media Management Tool",
//             description: "Multi-platform social media scheduler with analytics and team collaboration features. Supports all major social platforms.",
//             image: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800",
//             tags: ["Vue.js", "Node.js", "MongoDB", "Redis", "Socket.io"],
//             features: ["Multi-platform posting", "Team collaboration", "Analytics dashboard", "Automated scheduling"],
//             metrics: {
//               users: "15K+",
//               performance: "97%",
//               uptime: "99.5%"
//             },
//             links: {
//               github: "#",
//               demo: "#"
//             }
//           }
//         ]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   if (loading) {
//     return (
//       <section id="projects" className="py-20 bg-gray-900/50 relative">
//         <div className="container mx-auto px-6">
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto"></div>
//             <p className="text-gray-300 mt-4">Loading projects...</p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section id="projects" className="py-20 bg-gray-900/50 relative">
//       <div className="container mx-auto px-6">
//         <div className="max-w-6xl mx-auto">
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//               Featured Projects
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
//           </div>

//           {/* Projects Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <div
//                 key={project._id || index}
//                 className="group bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
//               >
//                 {/* Project Image */}
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
//                   <div className="absolute top-4 right-4 flex space-x-2">
//                     <a
//                       href={project.links?.github || '#'}
//                       className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-blue-500/20 transition-colors"
//                     >
//                       <Github className="w-4 h-4 text-white" />
//                     </a>
//                     <a
//                       href={project.links?.demo || '#'}
//                       className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-blue-500/20 transition-colors"
//                     >
//                       <ExternalLink className="w-4 h-4 text-white" />
//                     </a>
//                   </div>
//                 </div>

//                 {/* Project Content */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
//                   <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>

//                   {/* Features */}
//                   <div className="mb-4">
//                     <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features</h4>
//                     <ul className="text-sm text-gray-300 space-y-1">
//                       {project.features.map((feature, featureIndex) => (
//                         <li key={featureIndex} className="flex items-center space-x-2">
//                           <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
//                           <span>{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Metrics */}
//                   <div className="grid grid-cols-3 gap-4 mb-4">
//                     <div className="text-center">
//                       <div className="flex items-center justify-center mb-1">
//                         <Users className="w-4 h-4 text-blue-400 mr-1" />
//                       </div>
//                       <div className="text-sm font-bold text-white">{project.metrics.users}</div>
//                       <div className="text-xs text-gray-400">Users</div>
//                     </div>
//                     <div className="text-center">
//                       <div className="flex items-center justify-center mb-1">
//                         <Zap className="w-4 h-4 text-purple-400 mr-1" />
//                       </div>
//                       <div className="text-sm font-bold text-white">{project.metrics.performance}</div>
//                       <div className="text-xs text-gray-400">Performance</div>
//                     </div>
//                     <div className="text-center">
//                       <div className="flex items-center justify-center mb-1">
//                         <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
//                       </div>
//                       <div className="text-sm font-bold text-white">{project.metrics.uptime}</div>
//                       <div className="text-xs text-gray-400">Uptime</div>
//                     </div>
//                   </div>

//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-2">
//                     {(project.tags || project.technologies || []).map((tag, tagIndex) => (
//                       <span
//                         key={tagIndex}
//                         className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded text-xs text-blue-300"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
