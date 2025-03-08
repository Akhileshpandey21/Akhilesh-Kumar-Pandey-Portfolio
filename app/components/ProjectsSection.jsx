"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Nextjs Portfolio Website",
    description: "A personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion, featuring animations, project showcases, and contact forms.",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Akhileshpandey21/Portfolio-Website",
    previewUrl: "https://portfolio-website-five-red-34.vercel.app/",
  },
  {
    id: 2,
    title: "Movie Recommendation System",
    description: "A machine learning-based system that suggests movies based on user preferences, leveraging collaborative filtering and content-based filtering techniques.",
    image: "/images/projects/movie.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Akhileshpandey21/Movie-Recommendation_System",
    previewUrl: "https://github.com/Akhileshpandey21/Movie-Recommendation_System",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "A full-stack e-commerce platform with user authentication, product listings, a shopping cart, and a secure checkout process using modern web technologies.",
    image: "/images/projects/ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Akhileshpandey21/Shopcool_ecommerceWebsite",
    previewUrl: "https://github.com/Akhileshpandey21/Shopcool_ecommerceWebsite",
  },
  {
    id: 4,
    title: "EvaChatAP",
    description: "A real-time AI-powered chatbot application designed for mobile devices, integrating natural language processing (NLP) for intelligent conversations.",
    image: "/images/projects/chat.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Akhileshpandey21/EvaChatAP",
    previewUrl: "https://github.com/Akhileshpandey21/EvaChatAP",
  },
  {
    id: 5,
    title: "Attendance System Using OpenCV",
    description: "A face recognition-based attendance system using OpenCV and Python, allowing automated attendance marking with real-time detection and authentication.",
    image: "/images/projects/face.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Akhileshpandey21/Attendance-system",
    previewUrl: "https://github.com/Akhileshpandey21/Attendance-system",
  },
  {
    id: 6,
    title: "Real Estate Price Predictor",
    description: "A machine learning model that predicts real estate prices based on various factors such as location, square footage, and market trends.",
    image: "/images/projects/real.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Akhileshpandey21/Real-Estate-Price-Predictor",
    previewUrl: "https://github.com/Akhileshpandey21/Real-Estate-Price-Predictor",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 mt-5">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
