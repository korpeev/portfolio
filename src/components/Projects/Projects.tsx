import imgSelector from "@/utils/imgSelector";
import React from "react";
import { ProjectList } from "../types";

const project: ProjectList[] = [
  {
    name: "MERN Todo App",
    description: "MERN stack Todo App With JWT Token Authentificate",
    path: "mern_todo_app",
    stackList: ["React", "Typescript", "MongoDB", "Express", "NodeJS"],
    links: [
      {
        linkName: "Github",
        url: "https://github.com/korpeev/mern-todo-app",
      },
      {
        linkName: "Demo",
        url: "https://my-mern-todolist.herokuapp.com/",
      },
    ],
  },
  {
    name: "React Rolls Shop",
    description: "React Rolls Shop With Firebase/Firestore",
    path: "react_rolls_app",
    stackList: ["React", "Typescript", "Mobx", "React-Router-Dom", "Firebase"],
    links: [
      {
        linkName: "Github",
        url: "https://github.com/korpeev/react-rolls",
      },
      {
        linkName: "Demo",
        url: "https://react-rolls.netlify.app/",
      },
    ],
  },
  {
    name: "Aviasales Test",
    description: "Aviasales ticket test application, sort and filter options",
    path: "react_aviasales_app",
    stackList: ["React", "Typescript", "Redux/Toolkit"],
    links: [
      {
        linkName: "Github",
        url: "https://github.com/korpeev/avaisales-test",
      },
      {
        linkName: "Demo",
        url: "https://priceless-mcclintock-6294f2.netlify.app/",
      },
    ],
  },
  {
    name: "Hexlet Frontend lvl 3",
    description: "Hexlet frontend lvl 3 Website, parsing and aggregating rss feeds",
    path: "hexlet_frontend_lvl3",
    stackList: ["Javascript", "HTML", "CSS", "Bootstrap"],
    links: [
      {
        linkName: "Github",
        url: "https://github.com/korpeev/frontend-project-lvl3",
      },
      {
        linkName: "Demo",
        url: "https://frontend-project-lvl3-psi-five.vercel.app/",
      },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mt-10">
      <div className="container px-5 max-w-7xl mx-auto">
        <h1 className="font-bold text-5xl text-center md:text-4xl uppercase">Projects</h1>
        <div className="grid my-8 gap-8 grid-cols-4 lg:grid-cols-2 lg:justify-items-center sm:grid-cols-1">
          {project.map((p) => (
            <div className="max-w-[250px] h-[300px] flex flex-col items-center justify-between shadow-md p-5 shadow-black bg-neutral-100">
              <div className="w-40 h-20">
                <img
                  className="w-full h-full hover:scale-110 cursor-pointer transition-transform duration-150 ease-linear"
                  src={imgSelector[p.path]}
                  alt=""
                />
              </div>
              <span className="font-bold text-[20px]">{p.name}</span>
              <span className="text-center">{p.description}</span>
              <div className="grid grid-cols-2">
                <button className="bg-gray-800 flex-shrink text-white py-1 px-2 rounded-md col-end-3 transition-transform duration-200 ease-linear hover:translate-x-2">
                  Show More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
