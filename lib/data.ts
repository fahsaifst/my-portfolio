import React from "react";
import Image from 'next/image'


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
  
] as const;

export const projectsData = [
  {
    id: 1,
    title: "Haan R Haan",
    description: "A mobile application that allows users to create parties and split bills together. The app helps users efficiently manage their expenses during group outings, parties, or any shared activities.",
    image: "/images/projects/haanrhaan/hrh.png",
    tags: ["Dart","Flutter"],
    gitUrl: "https://github.com/fahsaifst/Haan-R-Haan.git",
    page: "/haanrhaan"
  },
  {
    id: 2,
    title: "GetGoods",
    description: "A platform for new merchants and farmers to sell local and processed products, offering benefits, expanding customer base, and protecting against competition.",
    image: "/images/projects/getgoods/gg.png",
    tags: ["Dart", "Flutter"],
    gitUrl: "https://github.com/fahsaifst/getgoods.git",
    page: "/getgoods"
  },
  {
    id: 3,
    title: "Helmet Detector",
    description: "An AI project designed to enhance safety within the KMUTT area by identifying riders without helmets and triggering a sound alert for immediate awareness.",
    image: "/images/projects/ai/helmet.jpeg",
    tags: ["Python", "OpenCV", "Yolov8"],
    gitUrl: "https://github.com/fahsaifst/Helmet-detector.git",
    page: "/helmet-detector"
  },
] as const;

export const languagesData = [
  {
    image: "/images/skills/java.svg",
    name:"Java"
  },
  {
    image: "/images/skills/dart.svg",
    name:"Dart"
  },
  {
    image: "/images/skills/python.svg",
    name:"Python"
  },
  {
    image: "/images/skills/javascript.svg",
    name:"JavaScript"
  },
  {
    image: "/images/skills/typescript.svg",
    name:"TypeScript"
  },
  
] as const;

export const developmentData = [
  {
    image:"/images/skills/html.svg",
    name:"HTML"
  },
  {
    image:"/images/skills/css.svg",
    name:"CSS"
  },
  {
    image:"/images/skills/reactjs.svg",
    name:"ReactJS"
  },
  {
    image:"/images/skills/nextjs.svg",
    name:"NextJS"
  },
  {
    image:"/images/skills/flutter.svg",
    name:"Flutter"
  },
  
] as const;

export const librariesData = [
  {
    image:"/images/skills/tailwind-css.svg",
    name:"Tailwind"
  },
  {
    image:"/images/skills/framer.svg",
    name:"Framer Motion"
  },
] as const;

export const toolData = [
  {
    image:"/icons/github.svg",
    name:"Github"
  },
  {
    image:"/images/skills/figma.svg",
    name:"Figma"
  },
  {
    image:"/images/skills/roboflow.png",
    name:"Roboflow"
  },
  {
    image:"/images/skills/vscode.svg",
    name:"Vscode"
  },
  {
    image:"/images/skills/opencv.svg",
    name:"OpenCV"
  },

]


