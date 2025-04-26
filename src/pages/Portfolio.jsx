import React, { useEffect, useState } from "react";
import { projects } from "../constants";
import { github, live } from "../assets";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <div className="group relative">
      <div className="rounded-lg sm:w-[340px] w-full overflow-hidden transform transition duration-500 group-hover:scale-105 bg-[#dbdbdb] p-2 cursor-pointer">
        {/* Image */}
        <div className="relative w-full h-[200px] overflow-hidden rounded-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition duration-500"
          />

          {/* Hover Content Overlay */}
          <div className="absolute inset-0 bg-white bg-opacity-60 p-4 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-[20px] mb-1">{name}</h3>
              <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* GitHub */}
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="shadow-md bg-opacity-80 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={github}
                    alt="github"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>

                {/* Live */}
                <div
                  onClick={() => window.open(live_link, "_blank")}
                  className="bg-green-600 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={live}
                    alt="live"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </div>
            <p className="text-sm my-2">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] font-semibold ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [tab, setTab] = useState("All");
  const [content, setContent] = useState([]);

  useEffect(() => {
    if (tab === "All") {
      setContent(projects);
    } else {
      const filteredTabName = projects.filter((item) => item.category === tab);
      setContent(filteredTabName);
    }
  }, [tab]);

  const onTabHandler = (tabName) => {
    setTab(tabName.name);
  };

  return (
    <div>
      <div className="flex gap-5 text-sm">
        {tabHeader.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer ${
              item.name === tab ? "text-[#915eff] font-semibold" : ""
            }`}
            onClick={() => onTabHandler(item)}
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-7 pb-10">
        {content.map((project, index) => (
          <ProjectCard key={`project ${index}`} {...project} />
        ))}
      </div>
    </div>
  );
};

const tabHeader = [
  {
    name: "All",
  },
  {
    name: "Frontend Development",
  },
  {
    name: "FullStack Development",
  },
];

export default Portfolio;
