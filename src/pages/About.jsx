import React from "react";
import dp from "../assets/dp2.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { expIn, technologies } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  const [text] = useTypewriter({
    words: ["Front-End Developer"],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 70,
  });
  return (
    <div className="relative">
      <div className="lg:hidden flex items-center">
        <img className="object-cover h-25 w-25 rounded-lg " src={dp} alt="" />
        <div className="ps-5">
          <h2 className="text-2xl mt-1 text-[#141414]">Samiudeen</h2>
          <p className="text-[#915eff] font-semibold">
            {text}
            <Cursor />
          </p>
          {/* <div className="rounded-md  bordermt-2 mt-2">Frontend Developer</div> */}
        </div>
      </div>

      <div className="text_gray text-md sm:mt-0 mt-8">
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
      </div>

      <div className="mt-10">
        <p className=" font-semibold text-lg">What I'm Doing</p>

        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-10 gap-5 mt-3">
          {expIn.map((item) => (
            <div
              key={item.name}
              className={`bg-white rounded-3xl shadow hover:shadow-lg transition-all duration-300 border ${item.borderColor} p-5 relative overflow-hidden`}
            >
              <div
                className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br ${item.fromColor} to-white rounded-br-3xl z-0`}
              ></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={`p-3 ${item.bgColor} ${item.textColor} rounded-xl`}
                  >
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
                  <h3 className={`text-xl font-bold text-${item.Color}`}>
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
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 overflow-hidden">
        <p className="font-semibold text-lg">Tech Stack</p>

        <div className="relative w-full pt-3">
          <motion.div
            className="flex flex-row gap-5"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 30, // Speed (lower = faster)
              ease: "linear",
            }}
          >
            {/* Duplicate the array to create a seamless loop */}
            {technologies.concat(technologies).map((tech, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="group card-container cursor-pointer w-20">
                  <div className="card group-hover:rotate-y-180">
                    <div className="front">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-12 h-12 object-contain mx-auto"
                      />
                    </div>
                    <div className="back text-center text_gray font-semibold">
                      {tech.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
