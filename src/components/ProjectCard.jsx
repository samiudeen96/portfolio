// components/ProjectCard.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { github, live } from "../assets";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    if (window.innerWidth >= 640) return;
    setIsClicked(!isClicked);
  };

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      viewport={{ once: true }}
      className="group relative sm:w-[350px] w-full cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="bg-white shadow-sm rounded-md overflow-hidden transform transition duration-300 group-hover:scale-105">
        <div className="relative h-[200px] w-full p-2 bg-[#dbdbdb]">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover transition duration-300 group-hover:scale-110 relative"
          />
          <div className={`absolute inset-0 bg-white bg-opacity-60 transition-opacity duration-300  p-5 flex flex-col justify-between ${
            isClicked ? "opacity-100" : "opacity-0"
          } sm:opacity-0 sm:group-hover:opacity-100`}>
            <div>
            <div className="flex justify-between">
                  <h3 className="text-xl font-bold">{name}</h3>
                <div className="flex gap-3">
                <button
                  title="GitHub"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(source_code_link, "_blank");
                  }}
                  className="w-8 h-8 bg-white bg-opacity-10 border-2 cursor-pointer border-black rounded-full flex items-center justify-center hover:bg-opacity-30"
                >
                  <img src={github} alt="GitHub" className="w-4 h-4" />
                </button>
                <button
                  title="Live Demo"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(live_link, "_blank");
                  }}
                  className="w-8 h-8 bg-green-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-green-600"
                >
                  <img src={live} alt="Live" className="w-4 h-4" />
                </button>
              </div>
            </div>
              <p className="text-sm mt-2">{description}</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span
                    key={`${tag.name}-${i}`}
                    className={`text-xs font-medium ${tag.color}`}
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
