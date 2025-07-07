import React from "react";
import dp from "../assets/dp2.jpg";
import { Cursor } from "react-simple-typewriter";
import { expIn, technologies } from "../constants";
import { motion } from "framer-motion";

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        duration: 1,
        delay,
      },
    },
  };
};

const About = ({ text }) => {


  return (
    <div className="relative">
      {/* Mobile Profile Section */}
      <motion.div
        className="lg:hidden flex items-center"
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
      >
        <img
          className="object-cover h-25 w-25 rounded-lg"
          src={dp}
          alt="Profile"
        />
        <div className="ps-5">
          <h2 className="text-2xl mt-1 text-[#141414]">Samiudeen</h2>
          <p className="text-[#915eff] font-semibold">
            {text}
            <Cursor />
          </p>
        </div>
      </motion.div>

      {/* About Text Section */}
      <motion.div
        className="text_gray text-md sm:mt-0 mt-8"
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
      >
        <p className=" leading-relaxed">
          I'm a <span className="font-semibold">passionate</span> and
          <span className="font-semibold">
            {" "}
            results-driven Front-End Developer
          </span>{" "}
          with over
          <span className="font-semibold"> 3 years</span> of experience building
          dynamic and responsive web applications. My core expertise lies in{" "}
          <span className="font-semibold">
            React.js, Context API, Redux, Tailwind CSS
          </span>
          , and
          <span className="font-semibold"> JavaScript</span>. I specialize in
          crafting intuitive user interfaces and optimizing performance for a
          seamless user experience.
        </p>
        <p className="mt-2 leading-relaxed">
          Having worked on both <span className="font-semibold">React</span> and
          <span className="font-semibold"> Angular</span> projects, I enjoy
          transforming ideas into digital products. I also have a strong grasp
          of <span className="font-semibold">Node.js, Express.js</span>, and
          <span className="font-semibold"> MongoDB</span> for full-stack
          development, and have successfully implemented secure and engaging
          applications like e-commerce platforms and gamified learning systems.
        </p>
      </motion.div>

      {/* What I'm Doing */}
      <div className="mt-10">
        <motion.p
          className="font-semibold text-lg"
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
        >
          What I'm Doing
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 sm:gap-10 gap-5 mt-3"
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          animate="show"
        >
          {expIn.map((item) => (
            <motion.div
              key={item.name}
              className="bg-white rounded-md  transition-all duration-300 p-5 relative overflow-hidden"
              whileHover={{ scale: 1.03 }}
            >
              <div
                className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br ${item.fromColor} to-white rounded-br-md z-0`}
              ></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={`p-3 ${item.bgColor} ${item.textColor} rounded-xl`}
                  >
                    {/* Icons based on category */}
                    {item.category === "frontend" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.75 17L4.5 12l5.25-5m4.5 10l5.25-5-5.25-5"
                        />
                      </svg>
                    )}
                    {item.category === "fullstack" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 7h18M3 12h18m-6 5H3"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className={`text-xl font-bold ${item.textColor}`}>
                    {item.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <ul className="text-sm text_gray space-y-1">
                  {item.points.map((li, index) => (
                    <li key={index}>{li.list}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Tech Stack Section */}
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        animate="show"
        className="mt-10"
      >
        <p className="font-semibold text-lg">Tech Stack</p>

        {/* <div className="relative w-full pt-3 overflow-hidden">
          <div className="flip_card flex-row gap-5">
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="group card-container cursor-pointer w-20 p-2">
                  <div className="card group-hover:rotate-y-180 shadow-sm rounded-md">
                    <div className="front">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-13 h-13 object-contain mx-auto"
                      />
                    </div>
                    <div className="back text-center text_gray font-semibold">
                      {tech.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="pt-3 mb-5">
          <div className="flip_card flex flex-wrap gap-5 justify-center">
            {technologies.map((tech, index) => (
              <div key={index} className="flex">
                <div className="group card-container cursor-pointer">
                  <div className="card group-hover:rotate-y-180 shadow-sm rounded-md">
                    <div className="front">
                      <motion.div
                        animate={{
                          y: index % 2 === 0 ? [0, -3, 0] : [0, 3, 0], // Alternate directions
                        }}
                        transition={{
                          duration: 2, // Time taken for one cycle
                          repeat: Infinity, // Infinite loop
                          ease: "easeInOut", // Smooth transition
                        }}
                      >
                        <img src={tech.icon} alt={tech.name} className="w-11 h-11 object-contain" />
                      </motion.div>
                    </div>
                    <div className="back text-center text_gray font-semibold">
                      {tech.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default About;
