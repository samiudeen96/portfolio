import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  angular,
  redux,
  tailwind,
  bootstrap,
  nodejs,
  mongodb,
  github,
  vercel,
  ilife,
  hasnatech,
  threejs,
  hotelGame,
  collection,
  WhatsApp,
  linkedin,
  gmail,
  teams,
  phone,
  location,
  crescent,
  jamal,
  portfolio,
  expTracker,
  todo,
  mysql,
} from "../assets";

//Navbar.jsx
const menu = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

//Sidebar.jsx
const socialMedia = [
  {
    img: linkedin,
    url: "https://www.linkedin.com/in/samiudeen/",
    type: "link",
  },
  {
    img: github,
    url: "https://github.com/samiudeen96",
    type: "link",
  },
  {
    img: gmail,
    size: "sm:w-7 sm:h-7 w-10 h-10",
    url: "mailto:samiudeen96amm@gmail.com",
    type: "mail",
  },
  {
    img: teams,
    size: "sm:w-7 sm:h-7 w-10 h-10",
    url: "https://teams.microsoft.com/l/chat/0/0?users=samiudeen96@outlook.com",
    type: "chat",
  },
  {
    img: WhatsApp,
    size: "sm:w-7 sm:h-7 w-10 h-10",
    url: "https://wa.me/918148837858",
    type: "chat",
  },
];

const details = [
  {
    name: "Contact",
    size: "w-5 h-5",
    img: phone,
    content: "+91 8148837858",
  },
  {
    name: "Location",
    size: "w-7 h-7",
    img: location,
    content: "Adirampattinam, India",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: "",
  },
  {
    title: "Full-Stack Developer",
    icon: "",
  },
];

const expIn = [
  {
    name: "Front-end Developer",
    desc: "I design and build beautiful, responsive interfaces with a focus on performance and accessibility.",
    points: [
      {
        list: "✔️ HTML / CSS / JavaScript / TypeScript",
      },
      {
        list: "✔️ React / Angular / Tailwind CSS",
      },
      {
        list: "✔️ UI/UX & Responsive Design",
      },
    ],
    textColor: "text-[#915eff]",
    borderColor: "border-indigo-100",
    fromColor: "from-indigo-100",
    bgColor: "bg-indigo-100",
    category: "frontend",
  },
  {
    name: "Full-stack Developer",
    desc: "I build robust backend systems, APIs, and database structures that power modern web applications.",
    points: [
      {
        list: "✔️ Node.js",
      },
      {
        list: "✔️ Express / MongoDb / MySQL",
      },
      {
        list: "✔️ API Integration & Security",
      },
    ],
    textColor: "text-green-700",
    borderColor: "border-green-100",
    fromColor: "from-green-100",
    bgColor: "bg-green-100",
    category: "fullstack",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "Vercel",
    icon: vercel,
  },
];

const experiences = [
  {
    id: 1,
    title: "Front-End Developer / Internship",
    name: "ILIFE Technologies",
    url: "https://ilifetech.in/",
    icon: ilife,
    iconBg: "#E6DEDD",
    date: "Apr 2019 - Dec 2019",
    points: [
      "Responsive Web Development - Built and optimized layouts using HTML5, CSS3, and JavaScript, improving mobile responsiveness across 100+ pages.",
      "Performance Optimization - Reduced load time by 40% for faster and more efficient user experiences.",
      "Front-End & Backend Integration - Collaborated with backend developers to ensure seamless server-side connectivity.",
      "Testing & Debugging - Identified and fixed issues to enhance website functionality and user experience.",
      "UI Consistency & Best Practices - Maintained design consistency, followed coding standards, and implemented interactive features for better engagement.",
    ],
  },
  {
    id: 2,
    title: "Front-End Developer | React Developer",
    name: "Hasna Technology",
    url: "https://hasnatech.com/",
    icon: hasnatech,
    iconBg: "#E6DEDD",
    date: "Nov 2021 – Feb 2025",
    points: [
      "Front-End Development - Built 20+ responsive UI components using React.js & Tailwind CSS, boosting engagement by 30%.",
      "LMS Features & Gamification - Developed quizzes, progress tracking, certifications, and leaderboards to enhance learning.",
      "Interactive & Accessible Design - Integrated animations, videos, and ensured WCAG compliance for a seamless experience.",
      "Collaboration & Communication - Added chat, forums, and live session features for better user interaction.",
      "Deployment & Optimization - Deployed on GitHub/Vercel with performance improvements and minimal downtime.",
    ],
  },
];

const education = [
  {
    id: 1,
    title: "Master of Computer Application (MCA)",
    name: "B.S. AbdurRahman Crescent Institute of Science and Technology",
    url: "https://crescent.education/",
    icon: crescent,
    iconBg: "#E6DEDD",
    date: "Apr 2017 - Dec 2019",
  },
  {
    id: 2,
    title: "Bachelor of Computer Application (BCA) ",
    name: "Jamal Mohamed College",
    url: "https://jmc.edu/",
    icon: jamal,
    iconBg: "#E6DEDD",
    date: "Apr 2014 - Dec 2017",
  },
];

const projects = [
  {
    name: "Expense Tracker",
    description:
      "Built a finance tracking app to manage income and expenses with real-time balance updates and category-wise summaries.",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
      {
        name: "tailwind",
        color: "text-blue-500",
      },
      {
        name: "node.js",
        color: "text-green-500",
      },
      {
        name: "MySQL",
        color: "text-blue-900",
      },
    ],
    category: "FullStack Development",
    image: expTracker,
    source_code_link: "https://github.com/samiudeen96/ExpenseTracker",
    live_link: "https://expensetracker-samiudeen.vercel.app/",
  },
  {
    name: "Ecommerce",
    description:
      "Web-based platform for buying and selling products or services. It includes features like product listings, shopping carts, secure payments, and order management.",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
      {
        name: "tailwind",
        color: "text-blue-500",
      },
      {
        name: "node.js",
        color: "text-green-500",
      },
      {
        name: "mongodb",
        color: "text-green-600",
      },
    ],
    category: "FullStack Development",
    image: collection,
    source_code_link: "https://github.com/samiudeen96/collection",
    live_link: "https://collection-plum.vercel.app/",
  },
  {
    name: "Hotel Game",
    description:
      "Web page is likely based on a hotel management simulation game where players manage a hotel, handle bookings, and optimize services to grow their business.",
    tags: [
      {
        name: "angular",
        color: "text-red-500",
      },
      {
        name: "typeScript",
        color: "text-blue-500",
      },
      {
        name: "bootstarp",
        color: "text-violet-600",
      },
    ],
    category: "Frontend Development",
    image: hotelGame,
    source_code_link: "https://github.com/samiudeen96/hotelGame",
    live_link: "https://hasnatech.github.io/hotel_game/",
  },
  {
    name: "3D Portfolio",
    description:
      "An immersive 3D portfolio experience by Samiudeen, blending modern web technologies with interactive design to showcase development skills and personal projects.",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
      {
        name: "javascript",
        color: "text-yellow-500",
      },
      {
        name: "tailwind",
        color: "text-blue-500",
      },
      {
        name: "three.js",
        color: "",
      },
    ],
    category: "Frontend Development",
    image: portfolio,
    source_code_link: "https://github.com/samiudeen96/3D_portfolio",
    live_link: "https://samiudeen96.github.io/3D_portfolio/",
  },
  {
    name: "ToDo App",
    description:
      "Simple and clean To-Do web app that lets users create, view, filter, edit, and delete tasks based on their status.",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
      {
        name: "javascript",
        color: "text-yellow-500",
      },
      {
        name: "tailwind",
        color: "text-blue-500",
      },
    ],
    category: "Frontend Development",
    image: todo,
    source_code_link: "https://github.com/samiudeen96/todo",
    live_link: "",
  },
];

export {
  services,
  technologies,
  experiences,
  projects,
  menu,
  socialMedia,
  details,
  education,
  expIn,
};
