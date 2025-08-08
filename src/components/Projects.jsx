import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Coffee Shop",
    description:
      "A responsive website for a Coffee shop built with HTML,CSS and JavaScrip. ",
    category: "Full-stack",
    tags: ["Javascript", "CSS", "PHP", "HTML"],
    links: { demo: "https://coffee-shop-u37k.vercel.app/" },
    image: "assets/coffee.png",
  },
  {
    title: "Dental Clinic Site",
    description:
      "Personal developer portfolio showcasing projects, experience, and skills using React.",
    category: "Frontend",
    tags: ["React", "CSS", "Framer Motion"],
    links: { demo: "https://github.com/Zainab22241/Dental-Clinic" },
    image: "assets/dental-clinic.png",
  },
  {
    title: "Blood Donation Website",
    description:
      "A full-stack blood donation platform developed using the MERN stack,",
    category: "Full-stack",
    tags: ["PHP", "CSS", "Bootstrap", "Javascript", "HTML"],
    links: { demo: "https://blood-donation-pied.vercel.app/" },
    image: "assets/image.png",
  },
  {
    title: "Company Website",
    description:
       "User-focused web interface with clean aesthetics, designed in Figma. Use arrow keys to scroll.",
    category: "UI/UX Design",
    tags: ["Figma"],
    links: {
      demo:
        " https://www.figma.com/proto/g9jqrgC3Cyb5nb8YVX8a31/BizAxis?node-id=83-5966&t=9WnXSwv11tx9kADV-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    },
    image: "assets/bizaaxis.png",
  },
   {
  title:"SkillCraft",
  description:
    " A modern web design project focused on intuitive user experience and clean UI, crafted using Figma.",
  category: "UI/UX Design",
  tags: ["Figma"],
  links: {
    demo:
      " https://www.figma.com/proto/zbJwnQkT7RE3mBtai8oTFs/3d-desigin?node-id=30-2&t=KrecMkxfJtnBIDOD-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  image: " assets/skillcraft.png",
},
  {
  title: "Glow",
  description:
    "A sleek and minimal hero section concept designed for impactful first impressions, crafted with Figma.",
  category: "UI/UX Design",
  tags: ["Figma", "Hero Section"],
  links: {
    demo:
      " https://www.figma.com/proto/zbJwnQkT7RE3mBtai8oTFs/3d-desigin?node-id=97-421&t=KrecMkxfJtnBIDOD-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  image: "assets/glow.png",
},

 {
  title: "Clinic Appointment",
  description:
    "A streamlined online clinic appointment interface, professionally designed in Figma to enhance usability and patient experience.",
  category: "UI/UX Design",
  tags: ["Figma", "landing-page","Patient Dashboard","doctor Dashboard", "admin Dashboard"],
  links: {
    demo:
      "https://www.figma.com/proto/7JDAVVdmQJHxgNK5s37Hvr/Zainab-Murtaza-s-team-library?node-id=3494-8318&t=7KFMeZ82gAC5xYgw-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3494%3A6097&hide-ui=1",
  },
  image: "assets/appointment'.png",
},

 {
  title: "Colory",
  description:
    "A visually striking hero section design focused on clean layout and intuitive user engagement, crafted in Figma.",
  category: "UI/UX Design",
  tags: ["Figma", "Hero Section"],
  links: {
    demo:
      " https://www.figma.com/proto/zbJwnQkT7RE3mBtai8oTFs/3d-desigin?node-id=124-422&t=KrecMkxfJtnBIDOD-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  image: "assets/colory.png",
}

];

const ProjectSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {["All", "Frontend", "UI/UX Design", "Full-stack"].map((filter) => (
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
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="absolute bottom-3 left-4 bg-black/60 px-3 py-1 rounded text-white text-sm font-semibold">
                  {project.title}
                </div>
              </div>

              <div className="p-6 flex flex-col h-full justify-between">
                <div>
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
