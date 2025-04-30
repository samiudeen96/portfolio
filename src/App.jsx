import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { useTypewriter } from "react-simple-typewriter";


const App = () => {
  const [text] = useTypewriter({
    words: ["Front-End Developer"],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 70,
  });
  return (
    <div className=" bg-[#dbdbdb] lg:px-10 lg:py-5 sm:p-2 relative">
      <div className="flex gap-5 mx-auto ">
        <div className="w-60 lg:flex hidden">
          <Sidebar text={text} />
        </div>

        <div className="flex-1 sm:shadow-sm rounded-lg bg-white lg:h-[calc(100vh-40px)] min-h-full overflow-hidden">
          <Navbar  />
          <Content text={text} />
        </div>
      </div>
    </div>
  );
};

export default App;
