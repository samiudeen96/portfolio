// pages/Portfolio.jsx
import React, { useEffect, useState, lazy, Suspense } from "react";
import { projects } from "../constants";

// Lazy load ProjectCard
const ProjectCard = lazy(() => import("../components/ProjectCard"));

const tabHeader = [
  { name: "All" },
  { name: "Frontend Development" },
  { name: "FullStack Development" },
];

const Portfolio = () => {
  const [tab, setTab] = useState("All");
  const [content, setContent] = useState([]);

  useEffect(() => {
    if (tab === "All") {
      setContent(projects);
    } else {
      const filtered = projects.filter((item) => item.category === tab);
      setContent(filtered);
    }
  }, [tab]);

  const onTabHandler = (tabItem) => setTab(tabItem.name);

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-3 text-sm">
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

      {/* Project Cards */}
      <div className="mt-5 flex flex-wrap gap-7 pb-10">
        <Suspense fallback={<p>Loading projects...</p>}>
          {content.length === 0 ? (
            <p>No projects found.</p>
          ) : (
            content.map((project, index) => (
              <ProjectCard key={`project-${index}`} {...project} />
            ))
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default Portfolio;
