import React from "react";
import dp from "../assets/dp2.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";


const About = () => {
    const [text] = useTypewriter({
      words: ["Front-End Developer"],
      loop: {},
      typeSpeed: 70,
      deleteSpeed: 70,
    });
  return (
    <div className="relative">

      <div className="lg:hidden flex items-center">
        <img className="object-cover h-25 w-25 rounded-lg " src={dp} alt="" />
        <div className="ps-5">
          <h2 className="text-2xl mt-1 text-[#141414]">Samiudeen</h2>
          <p className="text-[#915eff] font-semibold">{text}<Cursor /></p>
          {/* <div className="rounded-md  bordermt-2 mt-2">Frontend Developer</div> */}
        </div>
      </div>

      <div className="text_gray text-md mt-8">
        <p className=" leading-relaxed">
          I'm a <span className="font-semibold">passionate</span> and
          <span className="font-semibold">
            {" "}
            results-driven Front-End Developer
          </span>{" "}
          with over
          <span className="font-semibold"> 3 years</span> of experience building
          dynamic and responsive web applications. My core expertise lies in{" "}
          <span className="font-semibold">
            React.js, Context API, Redux, Tailwind CSS
          </span>
          , and
          <span className="font-semibold"> JavaScript</span>. I specialize in
          crafting intuitive user interfaces and optimizing performance for a
          seamless user experience.
        </p>
        <p className="mt-2 leading-relaxed">
          Having worked on both <span className="font-semibold">React</span> and
          <span className="font-semibold"> Angular</span> projects, I enjoy
          transforming ideas into digital products. I also have a strong grasp
          of <span className="font-semibold">Node.js, Express.js</span>, and
          <span className="font-semibold"> MongoDB</span> for full-stack
          development, and have successfully implemented secure and engaging
          applications like e-commerce platforms and gamified learning systems.
        </p>
      </div>

      <div className="">
        <p className="mt-10 font-semibold text-lg">What I'm Doing</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-3">
          <div className="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-indigo-100 p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-indigo-100 to-white rounded-br-3xl z-0"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 bg-indigo-100 text-[[#915eff]] rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.75 17L4.5 12l5.25-5m4.5 10l5.25-5-5.25-5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[[#915eff]]">
                  Frontend Developer
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                I design and build beautiful, responsive interfaces with a focus
                on performance and accessibility.
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-6">
                <li>✔️ HTML / CSS / JavaScript</li>
                <li>✔️ React / Angular / Tailwind CSS</li>
                <li>✔️ UI/UX & Responsive Design</li>
              </ul>
              {/* <a
                href="#frontend-projects"
                className="inline-block px-4 py-2 text-sm font-medium text-white bg-[[#915eff]] rounded-lg hover:bg-[[#915eff]] transition"
              >
                View Projects
              </a> */}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-green-100 p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-green-100 to-white rounded-br-3xl z-0"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7h18M3 12h18m-6 5H3"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-700">
                  Backend Developer
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                I build robust backend systems, APIs, and database structures
                that power modern web applications.
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-6">
                <li>✔️ Node.js</li>
                <li>✔️ Express / MongoDb / MySQL</li>
                <li>✔️ API Integration & Security</li>
              </ul>
              {/* <a
                href="#backend-projects"
                className="inline-block px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
              >
                View Projects
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
