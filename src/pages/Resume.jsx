import React from "react";
import TimelineItem from "../components/TimelineItem";
import { experiences, education } from "../constants";
import exp from "../assets/exp.svg";
// import edu from '../assets/edu.svg'
import degree from "../assets/degree.svg";
import degree1 from "../assets/degree1.svg";


const Resume = () => {
  return (
    <div className="relative">
      <div className="timeline">
        <div className="title-wrapper">
          <div className=" w-[35px] h-[35px] rounded-md flex justify-center items-center">
            {/* <FaBookReader /> */}
            <img src={exp} className="w-7 h-7" alt="" />
          </div>
          <p className="text-lg font-semibold">Experience</p>
        </div>
        <ol className="timeline-list">
          {experiences.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </ol>
      </div>

      <div className="timeline mt-10">
        <div className="title-wrapper">
          <div className=" w-[35px] h-[35px] rounded-md flex justify-center items-center">
            {/* <FaBookReader /> */}
            <img src={degree1} className="w-7 h-7" alt="" />
          </div>
          <p className="text-lg font-semibold" >Education</p>
        </div>
        <ol className="timeline-list">
          {education.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Resume;
