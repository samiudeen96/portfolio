import React from "react";
import dp from "../assets/dp2.jpg";

import { socialMedia, details } from "../constants";

const Sidebar = () => {
  return (
    <div className="fixed top-5 md:h-[calc(100vh-40px)] w-60">
      <div className="h-full px-5 py-10 flex flex-col justify-between shadow-sm rounded-lg bg-white">
        <div className="flex flex-col items-center">
          <img className="object-cover h-30 w-30 rounded-lg " src={dp} alt="" />
          <h2 className="text-2xl mt-1 text-[#141414]">Samiudeen</h2>
          <div className="rounded-md px-2 bordermt-2">Frontend Developer</div>
        </div>

        <div>
          <div className="social_media flex justify-between mb-4">
            {socialMedia.map((media, index) => (
              <div
                key={index}
                className="shadow-md w-8 h-8 rounded-md flex justify-center items-center hover:bg-slate-300"
              >
                <a href={media.url} target="_blank">
                  <img
                    className={`${media.size || "w-6 h-6"} cursor-pointer`}
                    src={media.img}
                    alt=""
                  />
                </a>
              </div>
            ))}
          </div>

          <hr className="border border-[#915eff]" />
          <div className="space-y-4 mt-5">
            {details.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className=" w-8 h-8 rounded-md flex justify-center items-center">
                  <img
                    className={`${item.size || "w-6 h-6"}`}
                    src={item.img}
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="text-xs">{item.name}</p>
                  <p className="text-xs font-semibold text-[#141414]">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
