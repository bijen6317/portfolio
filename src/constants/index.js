import {
  mobile,
  creator,
  web,
  javascript,
  html,
  css,
  git,
 flutter,
  carrent,
  figma,
  plant
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
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: figma,
  },
  {
    title: "Web Developer Frontend",
    icon: html,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "HTML ",
    icon: html,
  },
  {
    name: "CSS ",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Flutter Developer",
    company_name: "WebSoft",
    icon: flutter,
    iconBg: "#383E56",
    date: "March 2024",
    points: [
      "Developing and maintaining cross-platform mobile applications using Flutter and Dart.",
"Collaborating with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless user experiences.",
"Implementing responsive and adaptive UI designs to ensure functionality across a wide range of devices and screen sizes.",
"Participating in code reviews to ensure code quality, readability, and adherence to best practices.",
    ],
  },
  {
    title: "UI/UX Designer",
    company_name: "Self",
    icon: figma,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
     "Designing and prototyping user interfaces for web and mobile applications to ensure seamless user experiences.",
      "Collaborating with cross-functional teams, including developers and product managers, to translate requirements into design solutions.",
      "Conducting user research and usability testing to gather insights and refine designs based on feedback.",
      "Creating wireframes, mockups, and interactive prototypes using industry-standard tools like Figma, Adobe XD, or Sketch.",
      "Ensuring consistency in design and branding across all platforms and devices.",
        ],
  },
  {
    title: "Web Developer",
    company_name: "Self",
    icon: html,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Bijen proved me wrong.",
    name: "Jasmine Thapa",
    designation: "Flutter Developer",
    company: "Websoft",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a Flutter developer who truly cares about their clients' success like Bijen does.",
    name: "Manish Timilsina",
    designation: "CEO",
    company: "Websoft",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Bijen optimized our App, our traffic increased by 50%. We can't thank them enough!",
    name: "Shikhar Thapa",
    designation: "Laravel Developer",
    company: "Websoft",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
"Mobile application that enables users to search, book, and manage car rentals from various providers, offering a seamless and efficient solution for on-the-go transportation needs.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/bijen6317",
  },
  {
    name: "Plantopia",
    description:
"Web application that allows users to browse and purchase a wide variety of plants, access detailed care instructions, and discover nearby nurseries and gardening resources based on their location.",    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: plant,
    source_code_link: "https://github.com/bijen6317",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
