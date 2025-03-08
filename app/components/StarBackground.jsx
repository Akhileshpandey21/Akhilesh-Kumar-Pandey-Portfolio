"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const generateStars = (numStars) => {
  return Array.from({ length: numStars }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));
};

const StarsBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(generateStars(100));
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-[-10] overflow-hidden bg-[#121212]">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: 0, y: "-10%" }}
          animate={{ opacity: [0, 1, 0], y: ["-10%", "100%"] }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bg-white rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;
