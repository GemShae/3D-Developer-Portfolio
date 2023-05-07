import {
    mobile,
    data,
    web,
    ai,
    html,
    css,
    javascript,
    reactjs,
    redux,
    tailwind,
    nodejs,
    threejs,
    git,
    mysql,
    java,
    python,
    ncb,
    reggae,
    harrison,
    truth,
    ecommerce, 
    gemshae,
    hilton
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Works",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer (Full Stack)",
      icon: web,
    },
    {
      title: "React Native Developer (Mobile)",
      icon: mobile,
    },
    {
      title: "Data Scientist Developer (Big Data)",
      icon: data,
    },
    {
      title: "AI/ML Developer",
      icon: ai,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "MySql",
      icon: mysql,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Administrative Assistant",
      company_name: "Reggae Tours",
      icon: reggae,
      iconBg: "#128394",
      date: "June 2019 - Present",
      points: [
        "Management of insurance for a fleet of over 30 vehicles.",
        "Document vehicle maintenance dates and details of repairs or upgrades performed.",
        "Prepare financial and fleet maintenance reports.",
      ],
    },
    {
      title: "Programming & Database Teacher",
      company_name: "Harrison Memorial High School",
      icon: harrison,
      iconBg: "#c1eef5",
      date: "Jan 2022 - Present",
      points: [
        "Developed and delivered engaging lesson plans and instructional materials to high school students, teaching programming and database concepts using the required programming languages, databases, and tools",
        "Provided hands-on guidance and support to students in learning and applying programming and database skills, including problem-solving, coding, debugging, and database design and management.",
        "Used a variety of teaching strategies and techniques to accommodate different learning styles and abilities, such as project-based learning, peer-to-peer collaboration, and individualized instruction.",
      ],
    },
    {
      title: "Innovation Intern",
      company_name: "National Commercial Bank Limited",
      icon: ncb,
      iconBg: "#128394",
      date: "July 2022 - August 2022",
      points: [
        "Collaborated with my team to identify and research emerging technologies and trends in the financial industry, and propose innovative solutions to improve business processes and customer experience.",
        "Assisted in conducting feasibility studies, proof of concepts, and pilot projects for new technology initiatives, evaluating their potential impact on the bank's operations, security, and compliance requirements.",
        "Assisted in the development of business cases, presentations, and reports to communicate the value proposition and potential benefits of innovative technology initiatives to senior management and stakeholders in the bank",
      ],
    },
    {
      title: "IT Intern",
      company_name: "Hilton Rose Hall Resort and Spa",
      icon: hilton,
      iconBg: "#c1eef5",
      date: "June 2022 - July 2022",
      points: [
        "Provided immediate and efficient technical help to hotel workers and guests, troubleshooting and fixing hardware and software issues.",
        "Assisted with the installation, configuration, and maintenance of IT systems, such as computers, servers, printers, and networking equipment.",
        "Assisted with managing user accounts and access permissions, ensuring proper authorization and authentication for hotel staff.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial: "Shanya's exceptional teaching of programming and database concepts at our high school has empowered our students with valuable technical skills and prepared them for success in their exams.",
      name: "Keisha Allen",
      designation: "Principal",
      company: "Harrison Memorial High School",
      image: harrison,
    },
    {
      testimonial: "Shanya's expertise in software engineering and development resulted in a cutting-edge mobile application for our company, enhancing our customer experience and streamlining our operations.",
      name: "Gregg Connell",
      designation: "CEO",
      company: "Reggae Tours",
      image: reggae,
    },
  ];
  
  const projects = [
    {
      name: "E-commerce Website",
      description:
        "Full Stack Web Application that allows a seamless shopping experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/GemShae/Ecommerce-Web-Application-Stripe-Sanity",
    },
    {
      name: "Guest and Driver Tour Management Application",
      description:
        "React Native Application that allows users to book tours on the go. Users can view their tour booking details and designated driver, and get updates on tour status in real-time",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "google-autocomplete",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: reggae,
      source_code_link: "https://github.com/GemShae/Uber-Clone-React-Native",
    },
    {
      name: "GemShae's GitHub Repositories",
      description:
        "More projects can be found on my GitHub pages.",
      tags: [
        {
          name: "github",
          color: "blue-text-gradient",
        },
        {
          name: "git",
          color: "green-text-gradient",
        },
        {
          name: "version-control",
          color: "pink-text-gradient",
        },
      ],
      image: gemshae,
      source_code_link: "https://github.com/GemShae",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };