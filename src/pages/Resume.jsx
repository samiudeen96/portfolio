import React from "react";
import TimelineItem from "../components/TimelineItem";
import { experiences, education } from "../constants";
import exp from "../assets/exp.svg";
// import edu from '../assets/edu.svg'
import degree from "../assets/degree.svg";
import degree1 from "../assets/degree1.svg";


import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div className="relative">

      {/* Experience Timeline */}
      <div className="timeline relative">
        {/* Animated Line */}
        <motion.div
          className="absolute left-4 top-7 w-[2px] bg-gray-300"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* Timeline Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        >
          <div className="title-wrapper">
            <div className="w-[35px] h-[35px] rounded-md flex justify-center items-center">
              <img src={exp} className="w-7 h-7" alt="Experience Icon" />
            </div>
            <p className="text-lg font-semibold">Experience</p>
          </div>
          <ol className="timeline-list">
            {experiences.map((item, index) => (
              <TimelineItem key={index} item={item} />
            ))}
          </ol>
        </motion.div>
      </div>

      {/* Education Timeline */}
      <div className="timeline mt-10 relative">
        {/* Animated Line */}
        <motion.div
          className="absolute left-4 top-7 w-[2px] bg-gray-300"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* Timeline Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        >
          <div className="title-wrapper">
            <div className="w-[35px] h-[35px] rounded-md flex justify-center items-center">
              <img src={degree1} className="w-7 h-7" alt="Education Icon" />
            </div>
            <p className="text-lg font-semibold">Education</p>
          </div>
          <ol className="timeline-list">
            {education.map((item, index) => (
              <TimelineItem key={index} item={item} />
            ))}
          </ol>
        </motion.div>
      </div>

    </div>
  );
};

export default Resume;

