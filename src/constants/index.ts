import { HeaderProps, HeroProps, NavProps } from "@/types";

export const HeaderData: HeaderProps[] = [
  { name: "Find a store", link: "/find" },
  { name: "Help", link: "/help" },
  { name: "Join Us", link: "/join-us" },
  { name: "Sign In", link: "/signIn" },
];

export const NavData: NavProps[] = [
  { name: "New", link: "/new" },
  { name: "Men", link: "/men" },
  { name: "Women", link: "/women" },
  { name: "Kids", link: "/kids" },
  { name: "Jordan", link: "/jordan" },
  { name: "Sport", link: "/sport" },
];

export const HeroData: HeroProps[] = [
  {
    title: "Welcome to Sports",
    description: "Best sports gear online",
    btn1: "Shop Now",
    btn2: "Learn More",
    img: "/img/1.avif",
  },
  {
    title: "Welcome to Sports",
    description: "Best sports gear online",
    btn1: "Shop Now",
    img: "/img/2.png",
  },
  {
    title: "Welcome to Sports",
    description: "Best sports gear online",
    btn1: "Learn More",
    img: "/img/3.png",
  },
  {
    title: "Welcome to Sports",
    description: "Best sports gear online",
    btn1: "Learn More",
    img: "/img/4.png",
  },
];
