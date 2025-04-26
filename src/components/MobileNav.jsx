import React from "react";
import { Link } from "react-router-dom";

import { socialMedia, details, menu } from "../constants";

const MobileNav = ({ setVisible, page }) => {

  return (
    <div className="px-5 flex flex-col justify-between h-[calc(100vh-64px)]">
      <div className="flex flex-col mt-5">
        {menu.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setVisible(false)}
            className={`mb-6 text-lg ${
              item.path === page ? "text-[#915eff] " : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div>
        <div className="social_media flex gap-5 mb-4">
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
        <div className="space-y-4 mt-5 mb-35">
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
                <p className="text-sm">{item.name}</p>
                <p className="text-sm font-semibold text-[#141414]">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
