import { useAppContext } from "@/context/appContext";
import { ProjectList } from "@/types";
import imgSelector from "@/utils/imgSelector";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectItem = ({ path, name, description, links, stackList }: ProjectList) => {
  const { setCurrentProject } = useAppContext();
  const navigate = useNavigate();
  const handleOnClick = (project: ProjectList) => {
    return () => {
      navigate(`projects/${project.path}`);
      localStorage.setItem("project", JSON.stringify(project));
    };
  };
  return (
    <div
      key={path}
      className="max-w-[250px] h-[300px] flex flex-col items-center justify-between shadow-md rounded-md p-5 shadow-gray-400 pt-5 bg-neutral-100">
      <div className="w-40 h-20">
        <img
          className="w-full h-full hover:scale-110 cursor-pointer transition-transform duration-150 ease-linear"
          src={imgSelector[path]}
          alt=""
        />
      </div>
      <span className="font-bold text-[20px]">{name}</span>
      <span className="text-center">{description}</span>
      <div className="grid grid-cols-2">
        <button
          onClick={handleOnClick({ name, description, links, path, stackList })}
          className="bg-gray-800  text-white py-1 px-2 rounded-md col-end-3 transition-transform duration-200 ease-linear hover:translate-x-2 sm:col-span-2">
          Show More
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
