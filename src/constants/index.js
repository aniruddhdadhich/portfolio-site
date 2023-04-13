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
  linkedin,
  githubimg,
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
    title: "Mail Me",
  },
];

const linkgit = [
  {
    title: "Github",
    link: "https://github.com/aniruddhdadhich",
    icon: githubimg,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/aniruddhdadhich/",
    icon: linkedin,
  },
];

const services = [
  {
    title: "JavaScript Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "NEXT JS",
    icon: "https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png",
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mysql-icon.png",
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
    name: "Python",
    icon: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
  },
];

const experiences = [
  {
    title: "Deep Learning Research Intern",
    company_name: "National Institute of Technology, Karnataka",
    icon: "https://scontent.fpnq16-1.fna.fbcdn.net/v/t39.30808-6/301998093_452050050278265_740798320161057717_n.png?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EtGc8MfWVlcAX_RpudX&_nc_oc=AQlBDFlnUa-cDHl-LmLbZdl_Ac2h4CwK4GozgTHm93XnaEQqmDrSzpGy02JTuJFTHio&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfCYsxA5O06qkkQsaBP66z00wXlFLrGopSI4xuYdvhuVRw&oe=643D95E0",
    iconBg: "E6DEDD",
    date: "May 2019 - Jul 2019",
    points: [
      "The project Semantic Segmentation ofH&Estained Histopathology Images funded by SERB,Department of Science and Technology in which U-NET was used to detect cancer cell images which increased the accuracy of the model from 82% to 92.1% as compared to regular CNNs.",
      "Subsequently used Depth-wise separable convolution with diff erent dilation factors in the standard U-NET to increase the accuracy to 96.91%",
    ],
  },
  {
    title: "Personal Career Break",
    company_name: "UPSC Civil Services Examination",
    icon: "https://e1.pxfuel.com/desktop-wallpaper/510/753/desktop-wallpaper-upsc-logo-upsc.jpg",
    iconBg: "#fff",
    date: "Sep 2020 - Sep 2022",
    points: [
      "Cleared UPSC CSE Prelims 2022 which has 1% success rate.",
      "Learnt valuable skills such as Time management, Stress management and Perseverance.",
      "Got the knowledge of topics ranging from Political systems, Economics and Environmental issues to Geopolitics, Anthropology and History of the world.",
    ],
  },
  {
    title: "R&D Engineer Intern",
    company_name: "Logy.AI",
    icon: "https://github.com/LogyAI/cdn/blob/main/logo_square.jpeg?raw=true",
    iconBg: "#fff",
    date: "Jan 2022 - Mar 2023",
    points: [
      "Gained valuable experience in both product management and development.",
      "My primary focuswas on creating chatbots for dental and cataract screening using Django dashboard and Whatsapp API, which utilized computer vision technology",
      "In addition to development, I also handledUser experience and Lead generat ion challenges.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Aniruddh consistently demonstrate an exceptional creativity, attention to detail and eagerness to learn, making him an asset to any team.",
    name: "Anand Panchbhai",
    designation: "Co-Founder and CTO",
    company: "LogyAI",
    image:
      "https://github.com/aniruddhdadhich/image-dumping/blob/master/Anand.jpg?raw=true",
  },
  {
    testimonial:
      "Having worked with Aniruddh on several projects, I can attest to their skills in JavaScript and React, as well as their ability to work collaboratively and adapt to new technologies.",
    name: "Astha Aggarwal",
    designation: "SDE",
    company: "Goldman Sachs",
    image:
      "https://pbs.twimg.com/profile_images/1345815551558389766/-5VxD4Ci_400x400.jpg",
  },
  {
    testimonial:
      "Aniruddh possesses a rare combination of creativity, visual skills, and a strong work ethic that make him an ideal candidate for any entry-level job opportunity.",
    name: "Anurag Kumar",
    designation: "SDE-2",
    company: "Accelya Group",
    image:
      "https://github.com/aniruddhdadhich/image-dumping/blob/master/anurag.jpg?raw=true",
  },
];

const projects = [
  {
    name: "Full-stack Netflix Clone",
    description:
      "Replication of Netflix which allows users to sign-up, login, add movies to watchlist and watch movies online. Used NextAuth provided by NextJS for authentication and MongoDB for the storing data.",

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
        name: "nextjs",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://github.com/aniruddhdadhich/image-dumping/blob/master/netflix.png?raw=true",
    source_code_link: "https://github.com/aniruddhdadhich/netflix-clone",
    link: "https://netflix-clone-aniruddhdadhich.vercel.app/",
  },
  {
    name: "Tinder UI Clone",
    description:
      "Created a responsive web app frontend based on Tinder, which allows functionalities such as swiping and chating. Used Firebase as the database for storing user images, name and descriptions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://github.com/aniruddhdadhich/image-dumping/blob/master/tinder.png?raw=true",
    source_code_link: "https://github.com/aniruddhdadhich/tinder-clone",
    link: "https://github.com/aniruddhdadhich/tinder-clone",
  },
  {
    name: "Personal 3D Portfolio",
    description:
      "Created a personal portfolio website using reactjs and Tailwind CSS also utilizing Threejs library which helped in deploying 3D models on the website. Framer-Motion is used to create motion animation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://github.com/aniruddhdadhich/image-dumping/blob/master/portfolio.png?raw=true",
    source_code_link: "https://github.com/aniruddhdadhich/portfolio-site",
    link: "https://aniruddhdadhich.com/",
  },
];

export { services, technologies, experiences, testimonials, projects, linkgit };
