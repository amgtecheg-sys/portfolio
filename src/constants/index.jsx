import { FaLinkedin, FaWhatsapp, FaTelegram, FaMobileAlt, FaBullhorn, FaPaintBrush, FaGlobe, FaRobot, FaChartBar } from "react-icons/fa";
import { Zap, Award, TrendingUp } from "lucide-react";

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
  // { to: "/harmonic",   label: "هارمونك" },
];

export const TECH_STACK = [{ label: "Mobile Apps" }, { label: "Web & Systems" }, { label: "ERP / CRM" }, { label: "Marketing" }, { label: "Automation" }];

export const TYPEWRITER_WORDS = ["Mobile App Development", "Web Development", "ERP & CRM Systems", "Digital Marketing", "Automation Solutions", "Creative Design"];

export const CONTACT_INFO = {
  email: "amgtech.eg@gmail.com",
  phone: "+201275835080",
  phoneDisplay: "+20 127 583 5080",
  whatsapp: "https://wa.me/201275835080",
  telegram: "https://t.me/+201275835080",
  linkedin: "https://www.linkedin.com/company/amg-tech-official/",
};

export const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, delay: 0.1 },
};

export const services = [
  {
    icon: <FaMobileAlt className="text-brand-green text-2xl" />,
    title: "Mobile App Development",
    desc: "High-performance cross-platform mobile apps for iOS and Android using Flutter, with clean architecture and smooth user experience.",
  },
  {
    icon: <FaGlobe className="text-brand-green text-2xl" />,
    title: "Web Development",
    desc: "Modern, responsive websites and web applications built with the latest technologies — from landing pages to full-scale platforms.",
  },
  {
    icon: <FaChartBar className="text-brand-green text-2xl" />,
    title: "ERP & CRM Systems",
    desc: "Custom enterprise resource planning and customer relationship management systems tailored to streamline your business operations.",
  },
  {
    icon: <FaRobot className="text-brand-green text-2xl" />,
    title: "Automation Solutions",
    desc: "Smart automation tools and workflows that save time, reduce errors, and boost productivity across your business processes.",
  },
  {
    icon: <FaBullhorn className="text-brand-green text-2xl" />,
    title: "Digital Marketing & Ads",
    desc: "Strategic digital marketing campaigns — social media, paid ads, SEO, and content — that grow your brand and convert audiences.",
  },
  {
    icon: <FaPaintBrush className="text-brand-green text-2xl" />,
    title: "Creative Design",
    desc: "Eye-catching brand identities, UI/UX design, and visual content that make your business memorable and professional.",
  },
];

export const stats = [
  { value: "2+", label: "Years of Experience", icon: <Award className="h-5 w-5 text-brand-green" /> },
  { value: "10+", label: "Projects Delivered", icon: <TrendingUp className="h-5 w-5 text-brand-green" /> },
  { value: "6", label: "Services", icon: <Zap className="h-5 w-5 text-brand-green" /> },
  { value: "100%", label: "Client Satisfaction", icon: <FaMobileAlt className="text-brand-green text-lg" /> },
];

export const socials = [
  {
    href: CONTACT_INFO.linkedin,
    icon: <FaLinkedin />,
    label: "LinkedIn",
    hoverClass: "hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-500/5",
  },
  {
    href: CONTACT_INFO.whatsapp,
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    hoverClass: "hover:text-brand-green hover:border-brand-green/30 hover:bg-brand-green/5",
  },
  {
    href: CONTACT_INFO.telegram,
    icon: <FaTelegram />,
    label: "Telegram",
    hoverClass: "hover:text-sky-400 hover:border-sky-400/30 hover:bg-sky-500/5",
  },
];

export const socialsFooter = [
  { href: CONTACT_INFO.linkedin, icon: <FaLinkedin />, color: "hover:text-blue-400" },
  { href: CONTACT_INFO.whatsapp, icon: <FaWhatsapp />, color: "hover:text-brand-green" },
  { href: CONTACT_INFO.telegram, icon: <FaTelegram />, color: "hover:text-sky-400" },
];
