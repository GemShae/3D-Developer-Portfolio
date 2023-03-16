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
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
      name: "git",
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
      iconBg: "#3a5859",
      date: "June 2019 - Present",
      points: [
        "Management of insurance for a fleet of over 30 vehicles.",
        "Documented vehicle maintenance dates and details of repairs or upgrades performed.",
        "Prepared financial and fleet maintenance reports.",
      ],
    },
    {
      title: "Innovation Intern",
      company_name: "National Commercial Bank Limited",
      icon: ncb,
      iconBg: "#dfeff0",
      date: "July 2022 - August 2022",
      points: [
        "Completed an innovation SWOT analysis on the current state of play for NCB.",
        "Developed a concept/solution to help the business differentiate from competitors.",
        "Developed a wire frame prototype of the proposed solution.",
      ],
    },
    {
      title: "Programming Teacher",
      company_name: "Harrison Memorial High School",
      icon: harrison,
      iconBg: "#416263",
      date: "Jan 2022 - March 2023",
      points: [
        "Develop and deliver a comprehensive curriculum for high school students to learn programming through the use of pascal, pseudocode and flowchart.",
        "Engage and motivate students by creating a positive and supportive classroom environment that fosters critical thinking, problem-solving, and creativity.",
        "Use a variety of teaching strategies and techniques to accommodate different learning styles and abilities, such as project-based learning, peer-to-peer collaboration, and individualized instruction.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as my brand, but Shanya proved me wrong.",
      name: "Nickoy Connell",
      designation: "CEO",
      company: "Truth Brand Limited",
      image: truth,
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
          name: "Github",
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