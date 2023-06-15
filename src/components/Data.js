import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";
import tour5 from "../images/tour-5.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const pageIcons = [
  {
    id: 1,
    href: "https://www.facebook.com",
    target: "_blank",
    css: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    target: "_blank",
    css: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://www.twitter.com",
    target: "_blank",
    css: "fab fa-squarespace",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    tdate: "august 26th, 2020",
    title: "Tibet Adventure",
    country: "china",
    days: 6,
    from: 2100,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 2,
    img: tour2,
    tdate: "october 1th, 2020",
    title: "best of java",
    country: "indonesia",
    days: 11,
    from: 1400,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 3,
    img: tour3,
    tdate: "september 15th, 2020",
    title: "explore hong kong",
    country: "hong kong",
    days: 8,
    from: 5000,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 4,
    img: tour4,
    tdate: "december 5th, 2019",
    title: "kenya highlights",
    country: "kenya",
    days: 20,
    from: 3300,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 5,
    img: tour5,
    tdate: "december 5th, 2019",
    title: "kenya highlights",
    country: "kenya",
    days: 20,
    from: 3300,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
];
