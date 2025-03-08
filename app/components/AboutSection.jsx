"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import {
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaPython,
  FaJava,
  FaCode,
  FaFileExcel,
  FaFileWord,
} from "react-icons/fa";
import { SiC,SiExpress, SiPostgresql, SiSequelize ,SiCplusplus,SiNumpy,SiPandas,SiScikitlearn,SiMysql,SiSqlite , SiTableau, SiPowerbi} from "react-icons/si";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <motion.div
     className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full sm:text-xs md:text-xs lg:text-xs sm:gap-2 md-gap-3 lg:gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {[
          { icon: <FaNodeJs />, name: "Node" },
          { icon: <SiExpress />, name: "Express" },
          { icon: <SiMysql />, name: "MySQL" },
          { icon: <SiC />, name: "C" },
          { icon: <SiCplusplus />, name: "C++" },
          { icon: <FaJava />, name: "Java" },
          { icon: <FaPython />, name: "Python" },
          { icon: <FaPhp />, name: "PHP" },
          { icon: <FaHtml5 />, name: "HTML" },
          { icon: <FaCss3Alt />, name: "CSS" },
          { icon: <SiNumpy />, name: "NumPy" },
          { icon: <SiPandas />, name: "Pandas" },
          { icon: <SiScikitlearn />, name: "Sklearn" },
          { icon: <FaJsSquare />, name: "Js" },
          { icon: <FaReact />, name: "React" },
          { icon: <SiTableau />, name: "PowerBI" },
          { icon: <FaFileWord />, name: "Word" },
          { icon: <FaFileExcel />, name: "Excel"},
        ].map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg shadow-md hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-blue-400 text-2xl">{skill.icon}</span>
            <p className="text-lg font-medium text-white">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <motion.ul
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full text-white"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {[
          { degree: "10th (UP Board)", year: "2018", score: "73.16%", link: "https://drive.google.com/file/d/16IaItJL33Vfi4PChkRayTN7xuauU8Tqm/view" },
          { degree: "12th (UP Board)", year: "2020", score: "73%", link: "https://drive.google.com/file/d/1zu4vQfKpqk4BfdkVcAO41r9UebWsM5OD/view" },
          { degree: "B.C.A (UG)", year: "2023", university: "DDU Gorakhpur, UP", score: "77.93%", link: "https://drive.google.com/file/d/16LOlHUKIwbSKblu_s0REuqi5LuiWJFTn/view" },
          { degree: "M.C.A (PG)", year: "2025", university: "DHSGSU Sagar, MP", score: "Pursuing", link: "#" },
        ].map((edu, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold">{edu.degree}</h3>
            <p className="text-sm sm:text-base">📍 {edu.university || "UP Board"}</p>
            <p className="text-sm sm:text-base">🎓 Year: {edu.year}</p>
            <p className="text-sm sm:text-base">📊 Score: {edu.score}</p>
            <a href={edu.link} className="text-blue-400 underline mt-2"  target="_blank" rel="noopener noreferrer">
              View Details
            </a>
          </motion.div>
        ))}
      </motion.ul>
    ),
  }
,  
{
  title: "Experience",
  id: "experience",
  content: (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Experience 1 */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-white">
          Company: YBI Foundation, India
          <a
            href="https://www.ybifoundation.org/certificate-validation?credentialId=LJLZINNTN9TNX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline ml-2 text-sm"
          >
            Live Link
          </a>
        </h3>
        <p className="text-gray-300 text-sm">📅 09/2024 – 10/2024</p>
        <p className="text-white font-medium mt-2">Role: Big Data Analytics Intern</p>
        <ul className="list-disc pl-4 text-gray-300 text-sm mt-2 space-y-1">
          <li>Improved data processing efficiency by 30% using Hadoop and Apache Spark.</li>
          <li>Reduced data cleaning time by 25% through optimized data transformation techniques.</li>
          <li>Integrated SQL & NoSQL databases, improving query performance by 20%.</li>
          <li>Created interactive dashboards using Tableau & Power BI, speeding up decision-making by 15%.</li>
          <li>Enhanced data-driven strategies, increasing operational efficiency by 10%.</li>
        </ul>
      </div>

      {/* Experience 2 */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-white">
          Company: YBI Foundation, India
          <a
            href="https://www.ybifoundation.org/certificate-validation?credentialId=6HDRCFAL788JC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline ml-2 text-sm"
          >
            Live Link
          </a>
        </h3>
        <p className="text-gray-300 text-sm">📅 08/2024 – 09/2024</p>
        <p className="text-white font-medium mt-2">Role: Data Science & AI/ML Intern</p>
        <ul className="list-disc pl-4 text-gray-300 text-sm mt-2 space-y-1">
          <li>Developed & deployed ML/Deep Learning models using Python, TensorFlow, Scikit-learn.</li>
          <li>Reduced data processing errors by 20% through effective data cleaning & visualization.</li>
          <li>Automated data analytics pipelines, cutting manual work by 40%.</li>
          <li>Delivered insights improving business strategies, boosting efficiency by 15%.</li>
          <li>Collaborated with teams to develop insights from large datasets.</li>
        </ul>
      </div>
    </motion.div>
  ),
}
,
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      className="text-white bg-gradient-to-b from-gray-900 to-black py-16 "
      id="about"
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-6 xl:gap-16 sm:py-16 xl:px-16">
        {/* Image with Animated Hover Effect */}
        <motion.div
          className="relative rounded-lg overflow-hidden shadow-xl shadow-gray-800"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/images/about.png"
            alt="Description of image"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </motion.div>

        {/* Text & Tabs Section */}
        <motion.div
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am always looking to expand my
            knowledge and work with amazing teams.
          </p>

          {/* Tabs Navigation */}
          <div className="flex flex-row justify-start mt-8 space-x-4">
            {TAB_DATA.map((item) => (
              <TabButton
                key={item.id}
                selectTab={() => handleTabChange(item.id)}
                active={tab === item.id}
              >
                {item.title}
              </TabButton>
            ))}
          </div>

          {/* Animated Tab Content */}
          <motion.div
            key={tab}
            className="mt-8 bg-gray-800 p-4 rounded-lg shadow-lg shadow-gray-900"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
