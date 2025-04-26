import { motion } from "framer-motion";

const TimelineItem = ({ item, index }) => {
  return (
    <li className="timeline-item">
      <div className="w-[35px] h-[35px]  absolute -left-11 -top-2 flex justify-center items-center">
        <img src={item.icon} className="w-[22px] h-[22px]" alt="" />
      </div>
      <div className="flex flex-wrap items-center justify-between">
        <p className="text-md timeline-item-title text-[#915eff] font-semibold">
          {item.title}
        </p>
        <p className="w-52 md:w-52 lg:w-auto text_gray font-semibold">
          {item.name}
        </p>
      </div>
      <div className="flex items-start justify-between flex-wrap">
        <span className="font-semibold">{item.date}</span>
        <a
          className="text-blue-500 hover:underline cursor-pointer"
          href={item.url}
          target="_blank"
        >
          Learn more
        </a>
      </div>

      {item.points && (
        <ul className="mt-2 list-disc ml-5 space-y-1">
          {item.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-[14px pl-1 tracking-wider]"
            >
              {point}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default TimelineItem;
