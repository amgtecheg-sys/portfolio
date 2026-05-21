export const TEAM_MEMBERS = [
  {
    name:           "Ahmed Ezz",
    role:           "Senior Mobile Developer & iOS",
    leader:         true,
    avatar:         "/team/ezz.jpg",
    objectPosition: "center top",
    linkedin:       "https://www.linkedin.com/in/ahmedezz242/",
  },
  {
    name:           "Abdelrahman Montaser",
    role:           "Mid Level Flutter Developer & Backend (Node.js)",
    avatar:         "/team/image.png",
    objectPosition: "center top",
    linkedin:       "https://www.linkedin.com/in/abdelrahman-montaser-839600280",
  },
  {
    name:           "Mohamed Gabr",
    role:           "Mid Level Full Stack Developer",
    avatar:         "/team/Gabr.jpeg",
    objectPosition: "center top",
    linkedin:       "https://www.linkedin.com/in/mohamed-gbr-222776278/",
  },
  {
    name:           "Rawan Nada",
    role:           "UI/UX Designer",
    avatar:         "/team/Rawan.jpeg",
    objectPosition: "center top",
    linkedin:       "https://www.linkedin.com/in/rawannada/",
  },
  {
    name:           "Ahmed Elnabawy",
    role:           "Data Entry & Data Analysis",
    avatar:         "/team/elnabawy.jpeg",
    objectPosition: "center top",
    linkedin:       "https://www.linkedin.com/in/ahmed-elnabawy-459597218/",
  },
  {
    name:           "Ahmed Elnghonemy",
    role:           "Senior Graphic Designer",
    avatar:         "/team/ghonemy.jpeg",
    objectPosition: "center top",
    linkedin:       null,
  },
  {
    name:           "Ahmed Elmarakby",
    role:           "Video Editor & Motion Graphics",
    avatar:         "/team/elmarakby.jpeg",
    objectPosition: "center top",
    linkedin:       null,
  },
];

export const CARD_VARIANTS = {
  hidden:  { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const CONTAINER_VARIANTS = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};
