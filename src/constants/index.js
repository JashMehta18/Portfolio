import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    kj,
    archi,
    neu,
    sagi,
    express,
    django,
    mysql,
    aiml,
    mihirbhai,
    jitenkaka,
    piyushuncle,
    ozbek,
    codent,
    priceprediction,
    editor,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Career",
    },
    {
      id:"projects",
      title:"Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: web,
    },
    {
      title: "Full Stack Developer",
      icon: mobile,
    },
    {
      title: "Java Developer",
      icon: backend,
    },
    {
      title: "UI/UX Designer",
      icon: creator,
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
      name: "React JS",
      icon: reactjs,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express.js",
      icon: express,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "AIML",
      icon: aiml,
    },
   
  ];
  
  const experiences = [
    {
      title: "B.Tech in Information Systems",
      company_name: "K J Somaiya College of Engineering",
      icon: kj,
      iconBg: "#FFFFFF",
      date: "May 2018 - May 2022",
      points: [
        "Courses",
        "-Web Development",
        "-Java Object Oriented Software Development",
        "-UI Programming and designing",
        "-Software Testing and Quality Assurance",
        "-Flutter and Database Management",
      ],
    },
    {
      title: "Full Stack Software Developer",
      company_name: "Archi Farming Equipment",
      icon: archi,
      iconBg: "#FFFFFF",
      date: "Jan 2021 - July 2022",
      points: [
        "-Developed responsive, user-friendly interfaces using React.js and Redux,resulting in 20% increase in user engagement",
        "-Integrated Socket.io for live chat, real-time notifications, and equipment status updates, boosting user engagement",
        "-Engineered high-performance RESTful APIs and server-side logic with Node.js and Express.js, leading to a 40% improvement in order processing speed",
        "-Managed MongoDB databases with strategic indexing and caching strategies, ensuring efficient storage and retrieval of data,particularly when handling large datasets",
      ],
    },
    {
      title: "MS in Information Systems",
      company_name: "Northeastern University",
      icon: neu,
      iconBg: "#FFFFFF",
      date: "September 2022 - May 2024",
      points: [
        "Courses",
        "-Application Engineering Development",
        "-Web Tools and Development",
        "-Programming Structures and Algorithms",
        "-Crypto Currency, and Smart Contracts",
        "-Design Patterns",
        "-Software Quality Assurance and Testing",    
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Sagitec Solutions",
      icon: sagi,
      iconBg: "#FFFFFF",
      date: "September 2022 - May 2023",
      points: [
        "-Enhanced retirement administration system efficiency by 20% through engineered C# and .NET software solutions",
        "-Improved client satisfaction by 15% by developing tailored software solutions for retirement administration",
        "-Collaborated across teams to streamline software requirements, reducing development time by 10% and ensuring industry compliance",
        "-Optimized company data with Microsoft SQL Server Management Studio, achieving 25% faster retrieval and 15% more efficient storage for large-scale datasets",
      ],
    },
    {
      title: "Software Engineer Intern (RA)",
      company_name: "Northeastern University",
      icon: neu,
      iconBg: "#FFFFFF",
      date: "May 2023 – July 2023",
      points: [
        "-Achieved a 30% reduction in response time by implementing Spring Boot powered RESTful APIs for enhanced data retrieval efficiency",
        "-Optimized MySQL database performance, boosting query speed by 20% for seamless data management",
        "-Automated testing procedures using JUnit and Selenium, cutting manual efforts by 50% while ensuring high-quality software",
        "-Developed a real-time data visualization dashboard with Spring Boot and Java, aiding informed decision-making for a research professor",
        "-Received 90% positive feedback for improving engagement using backend microservices",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Exemplary work ethic and professionalism, delivering consistently high-quality results on time",
      name: "Mihir Mehta",
      designation: "Engineering Leader",
      company: "Chewy",
      image: mihirbhai,
    },
    // {
    //   testimonial:
    //     "Exceptional developer with a knack for quick grasping, out-of-the-box thinking, and a relentless pursuit of innovative solutions",
    //   name: "Yusuf Ozbek",
    //   designation: "Professor",
    //   company: "Northeastern University",
    //   image: ozbek,
    // },
    {
      testimonial:
        "Unmatched dedication and hard work, consistently exceeding expectations with a focused approach",
      name: "Jiten Mehta",
      designation: "Global Program Director",
      company: "Citi Bank",
      image: jitenkaka,
    },
    {
      testimonial:
        "Proactive and collaborative, this developer embodies the spirit of a solution chaser, constantly pushing boundaries for optimal outcomes",
      name: "Piyush Jain",
      designation: "CEO",
      company: "Sagitec Solutions",
      image: piyushuncle,
    },
  ];
  
  const projects = [
    {
      name: "Editor Hive",
      description:
        "Innovative full-stack development of a real-time document collaboration web app utilizing React.js, Node.js, Socket.io, and MongoDB, enhancing productivity through advanced synchronization, document change storage, simultaneous editing, instant storage, and integrated chat rooms for seamless collaboration and communication.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Socket.io",
          color: "pink-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
      ],
      image: editor ,
      source_code_link: "https://github.com/JashMehta18/EditorHive.git",
    },
    {
      name: "AI-Enhanced Stock Analysis System",
      description:
        "Engineered an AI-powered Stock Analysis System utilizing RNN, LSTM, and Neural Networks, delivering notable accuracy rates for Large Cap and Mid Cap Stocks, and Penny Stocks on Indian Stock Data. The system offers precise price predictions and clear visual representations, facilitating informed decision-making",
      tags: [
        {
          name: "MLModels",
          color: "blue-text-gradient",
        },
        {
          name: "AI",
          color: "pink-text-gradient",
        },
        {
          name: "Deep Learning",
          color: "green-text-gradient",
        },
      ],
      image: priceprediction,
      source_code_link: "https://github.com/JashMehta18/Tradexa/",
    },
    {
      name: "Project Management System",
      description:
        "Crafted a robust Project Management System using SpringBoot, JSP, Hibernate, and MySQL, capable of handling 500 records seamlessly. The user-friendly interface, equipped with comprehensive CRUD operations, incorporates user management, project tracking, and reporting features, ensuring adaptability to diverse business needs.",
      tags: [
        {
          name: "SpringBoot",
          color: "green-text-gradient",
        },
        {
          name: "Hibernate",
          color: "pink-text-gradient",
        },
        {
          name: "MySql",
          color: "blue-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };