import React from "react";
import { motion } from "framer-motion";
import WebsiteIcom from "../assets/website.svg";
import { useDarkMode } from "../context/DarkModeContext";

function ProjectPanel() {
  const { darkMode } = useDarkMode();
  const Projects = [
    {
      title: "Full-Stack Blogging Platform",
      description:
        "A full-stack blogging platform that allows users to create, edit, and manage blogs with secure authentication, rich text editing, image uploads, and an interactive commenting system.",
      live: "https://blogs-w49k.onrender.com/", // replace with actual link
      image: "/blogs.png", // replace with your project image
      tags: [
        "React.js",
        "Vite",
        "Node.js",
        "JWT Authentication",
        "Cloudinary",
        "Tailwind CSS",
      ],
    },

    {
      title: "Restaurant Reservation System",
      description:
        "A full-stack restaurant management platform enabling users to browse menus, make reservations, and manage bookings through a secure and scalable web application.",
      live: "https://sizzlers-restaurant.vercel.app/",
      image: "/sizzlers.png",
      tags: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MVC Architecture",
      ],
    },
    {
      title: "AI-Powered FinTech Platform",
      description:
        "A full-stack AI-driven finance platform enabling secure authentication, financial data management, transaction workflows, and event-driven automation with a scalable, production-ready architecture.",
      live: "https://welth-fawn.vercel.app/",
      image: "/welth.png",
      tags: [
        "Next.js",
        "Supabase",
        "Prisma ORM",
        "Inngest",
        "Tailwind CSS",
        "AI Automation",
        "FinTech",
      ],
    },
    {
      title: "PSPL Website",
      description:
        "A responsive static business website designed to showcase company information, services, and branding with a clean UI and optimized user experience.",
      live: "https://pspl.vercel.app/",
      image: "/pspl.png",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
    },
    {
      title: "Travel & Tour Website",
      description:
        "A dynamic travel and tour booking website built with JavaScript, allowing users to explore destinations, view tour packages, and interact with travel content through an engaging and responsive interface.",
      live: "https://travel-tour-opal.vercel.app/",
      image: "/travel.png",
      tags: [
        "JavaScript",
        "HTML",
        "CSS",
        "Dynamic UI",
        "Responsive Design",
        "Travel & Tourism",
      ],
    },
    {
      title: "Movements Web Platform",
      description:
        "A PHP-based web application designed to manage and track organizational movements and activities, providing dynamic content rendering, form handling, and structured data management through a server-side architecture.",
      live: "https://monuments-web.vercel.app/",
      image: "/moments.png",
      tags: [
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "Server-Side Scripting",
        "Web Application",
      ],
    },
  ];

  return (
    <section
      className={`w-full bg-gradient-to-b ${
        darkMode ? "from-gray-900 to-gray-800" : "from-white to-blue-50"
      } py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold ${
              darkMode ? "text-gray-100" : "text-gray-900"
            } mb-4`}
          >
            My{" "}
            <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            } max-w-2xl mx-auto`}
          >
            Showcasing my skills through real-world applications and solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} darkMode={darkMode} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ project, darkMode }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`${
        darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
      } rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border`}
    >
      {/* Image with gradient overlay */}
      <div className="relative aspect-video overflow-hidden">
        <img
          loading="lazy"
          src={project.image}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          alt={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className={`${
                  darkMode ? "bg-blue-600/90" : "bg-blue-500/80"
                } text-white text-xs px-2 py-1 rounded`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3
          className={`text-xl font-bold ${
            darkMode ? "text-gray-100" : "text-gray-900"
          } mb-2`}
        >
          {project.title}
        </h3>
        <p
          className={`${
            darkMode ? "text-gray-300" : "text-gray-600"
          } mb-4 flex-grow`}
        >
          {project.description}
        </p>

        {/* Action buttons */}
        <div className="flex justify-between items-center">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <img
              src={WebsiteIcom}
              alt="Live Demo"
              className="w-5 h-5"
              style={{ filter: darkMode ? "invert(1)" : "none" }}
            />
            <span>View Live</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPanel;
