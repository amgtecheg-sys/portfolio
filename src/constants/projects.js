import { Smartphone, Globe, Monitor } from "lucide-react";

export const IMAGES = {
  appStore:    "/Images/App Store.svg",
  googlePlay:  "/Images/Google Play.svg",
  huawei:      "/Images/AppGallery.svg",
  coreAcademy: "/Images/core-academy.jpg",
  ons:         "/Images/ons.png",
  islamic:     "/Images/islamic.png",
  yalaMatch:   "/Images/yala-match.png",
  baba:        "/Images/BABa.png",
  babaDash1:   "/Images/Baba_dachboard.png",
  babaDash2:   "/Images/Baba_dachboard2.png",
};

// Hex value used in JS string concatenation (e.g. `${color}15` for opacity tricks).
// var(--color-brand-green) can't be concatenated — only works as a standalone CSS value.
const GREEN = "#3AB54A";

export const TAG_STYLES = {
  Sports:        { color: GREEN,      bg: "rgba(58,181,74,0.12)",   border: "rgba(58,181,74,0.3)" },
  EdTech:        { color: "#60a5fa",  bg: "rgba(96,165,250,0.12)",  border: "rgba(96,165,250,0.3)" },
  "Super App":   { color: "#c084fc",  bg: "rgba(192,132,252,0.12)", border: "rgba(192,132,252,0.3)" },
  Service:       { color: GREEN,      bg: "rgba(58,181,74,0.12)",   border: "rgba(58,181,74,0.3)" },
  "E-commerce":  { color: "#f9a8d4",  bg: "rgba(249,168,212,0.12)", border: "rgba(249,168,212,0.3)" },
  Dashboard:     { color: "#c084fc",  bg: "rgba(192,132,252,0.12)", border: "rgba(192,132,252,0.3)" },
};

export const CATEGORIES = [
  {
    id: "mobile",
    label: "Mobile Apps",
    icon: Smartphone,
    color: GREEN,
    projects: [
      {
        id: 1,
        name: "BaBa App",
        tag: "Super App",
        description: "A multi-service super app connecting users with vendors for ordering, booking, and real-time delivery tracking.",
        image: IMAGES.baba,
        appStore:       "https://apps.apple.com/eg/app/baba-%D8%A8%D8%A7%D8%A8%D8%A7/id6756750299",
        googlePlay:     "https://play.google.com/store/apps/details?id=app.superbaba",
        huaweiAppStore: "https://appgallery.huawei.com/app/C117147745",
      },
      {
        id: 2,
        name: "Islamic Brand",
        tag: "E-commerce",
        description: "A modern mobile app for modest fashion — explore high-quality Islamic clothing with elegant contemporary designs.",
        image: IMAGES.islamic,
        googlePlay:     "https://play.google.com/store/apps/details?id=com.islamic.brand",
        appStore:       "https://apps.apple.com/eg/app/islamic-brand/id6760112874",
        huaweiAppStore: "https://appgallery.huawei.com/app/C117105149",
      },
      {
        id: 3,
        name: "Yala Match",
        tag: "Sports",
        description: "Football field booking app with owner and admin dashboards for managing bookings and monitoring activities.",
        image: IMAGES.yalaMatch,
        googlePlay:     "https://play.google.com/store/apps/details?id=app.yalamatch",
        appStore:       "https://apps.apple.com/eg/app/yalamatch/id6751447545",
        huaweiAppStore: "https://appgallery.huawei.com/app/C117202075",
      },
      {
        id: 4,
        name: "CoreAcademy",
        tag: "EdTech",
        description: "Educational platform for a programming academy with dedicated interfaces for students and teachers.",
        image: IMAGES.coreAcademy,
        googlePlay: "https://play.google.com/store/apps/details?id=com.core.academy.student",
        appStore:   "https://apps.apple.com/eg/app/core-academy-student/id6747823762",
      },
      {
        id: 5,
        name: "OnNextStay",
        tag: "Service",
        description: "Cleaning service app with separate roles for admin, clients, and cleaners — easy booking and management.",
        image: IMAGES.ons,
      },
    ],
  },
  {
    id: "web",
    label: "Websites",
    icon: Globe,
    color: "#60a5fa",
    projects: [],
  },
  {
    id: "systems",
    label: "Systems",
    icon: Monitor,
    color: "#a78bfa",
    projects: [
      {
        id: 20,
        name: "BaBa Dashboard",
        tag: "Dashboard",
        description: "Full admin dashboard for the BaBa super app — vendors, orders, delivery agents, and real-time analytics.",
        image: IMAGES.babaDash1,
      },
      {
        id: 21,
        name: "BaBa Dashboard II",
        tag: "Dashboard",
        description: "Extended admin panel — detailed order management, delivery tracking, and vendor performance reports.",
        image: IMAGES.babaDash2,
      },
    ],
  },
];
