import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { menu } from "../constants";
import menu_icon from "../assets/menu_icon.png";
import left_arrow from "../assets/left_arrow.svg";
import MobileNav from "./MobileNav";
// import Sidebar from "../components/Sidebar"
const Navbar = () => {
  const [page, setPage] = useState("");
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const current = menu.find((item) => item.path === location.pathname);
    if (current) setPage(current.name);
  }, [location.pathname]);

  return (
    <div className="flex justify-between sm:items-end items-center sm:px-0 sm:py-0 px-5 py-4">
      <h3 className="sm:px-5 font-bold text-2xl">{`${
        page === "About" ? "About Me" : page
      }`}</h3>
      <div className="shadow py-3 px-10 rounded-bl-md text-black hidden sm:flex gap-10">
        {menu.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setPage(item.name)}
            className={`font-semibold ${
              item.path === location.pathname ? "text-[#915eff] " : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      {/* mobile menu */}
      <div className="sm:hidden block">
        <div className="shadow p-3 rounded-bl-md">
          <img
            onClick={() => setVisible(true)}
            src={menu_icon}
            className="w-5 cursor-pointer sm:hidden"
            alt=""
          />
        </div>
        <div
          className={`fixed top-0 right-0 bottom-0 h-screen bg-white transition-all z-30 ${
            visible ? "w-full " : "w-0"
          }`}
        >
          <div
            className="flex items-center gap-1 p-5"
            onClick={() => setVisible(false)}
          >
            <img src={left_arrow} className="h-5" alt="" />
            <p>Back</p>
          </div>

          <div className="">
            <MobileNav setVisible={setVisible} page={page} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
