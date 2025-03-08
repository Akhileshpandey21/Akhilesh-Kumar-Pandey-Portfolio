"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16" id="home">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Akhilesh",
                1000,
                "Web Developer",
                1000,
                "Android Developer",
                1000,
                "Data Analyst",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Hi, I&apos; m Akhilesh! A software developer with a passion for AI, web
            development, android development and problem-solving. Turning ideas
            into reality through clean and efficient code. Let&apos;s connect!
          </p>

          <div>
            <Link
              // href="/#contact"
              href={
                "https://wa.me/+919696292983?text=Hi%20there!%20I'm%20interested%20in%20working%20with%20you."
              }
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/Full_Stack_Developer_Akhilesh_Kumar_Pandey_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Full_Stack_Developer_Akhilesh_Kumar_Pandey_Resume.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0 "
        >
          {/* Rotating Animated Glowing Border */}
          <div className="absolute w-[280px] h-[280px] lg:w-[420px] lg:h-[420px] sm:w-[320px] sm:h-[320px] rounded-full border-[6px] border-transparent animate-rotate-gradient before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#ff6b6b] before:via-[#ffb142] before:to-[#ff6b6b] before:rounded-full before:blur-lg before:animate-border-spin"></div>

          {/* Main Image Container */}
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] sm:w-[280px] sm:h-[280px] relative flex items-center justify-center overflow-hidden">
          <Image
  src="/images/Ap.png"
  alt="hero image"
  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
  width={429}
  height={581}
  sizes="(max-width: 640px) 200px, 
         (max-width: 768px) 300px, 
         (max-width: 1024px) 380px, 
         429px"
  style={{ maxWidth: "100%", height: "auto" }}
/>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
