import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row"
      id="about"
    >
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I'm a dedicated full-stack developer with a strong foundation in
          React.js, Node.js, and MySQL. I take pride in building scalable,
          intuitive software solutions that align with business goals and
          enhance user experience.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          My professional journey began in 2016, and over the years, I've led
          cloud migrations, developed robust accounting and front office
          systems, and supported over 500 businesses across the Philippines. I
          specialize in modern tools like TypeScript, Express.js, and Vite,
          always aiming to stay updated with current technologies.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Outside of coding, I enjoy fitness, nature, gaming—especially Dota
          2—and following new trends in tech and software development.
        </p>
      </motion.div>
    </div>
  );
}
