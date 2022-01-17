import imgSelector from "@/utils/imgSelector";
import React from "react";
import { useAppContext } from "../context/appContext";
import { ProjectList } from "../types";

const Projects = () => {
  const { projects } = useAppContext();
  return (
    <section id="projects" className="mt-10">
      <div className="container px-5 max-w-7xl mx-auto">
        <h1 className="font-bold text-5xl text-center md:text-4xl uppercase">Projects</h1>
        <div className="grid my-8 gap-8 grid-cols-4 lg:grid-cols-2 lg:justify-items-center sm:grid-cols-1">
          {projects.map((p) => (
            <div
              key={p.path}
              className="max-w-[250px] h-[300px] flex flex-col items-center justify-between shadow-md p-5 shadow-black bg-neutral-100">
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
