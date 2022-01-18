import React from "react";
import { useAppContext } from "@/context/appContext";
import ProjectItem from "./ProjectItem";
import Skeleton from "../Skeleton/Skeleton";

const Projects = () => {
  const { projects } = useAppContext();

  const renderItems = () => {
    if (!projects.length) {
      return new Array(4).fill("").map((_) => {
        return <Skeleton key={Math.random() * 1000} />;
      });
    }

    return projects.map((project) => <ProjectItem key={project.path} {...project} />);
  };

  return (
    <section id="projects" className="my-10">
      <div className="container px-5 max-w-7xl mx-auto">
        <h1 className="font-bold text-5xl text-center md:text-4xl uppercase">Projects</h1>
        <div className="grid my-8 gap-8 grid-cols-4 lg:grid-cols-2 lg:justify-items-center sm:grid-cols-1">
          {renderItems()}
        </div>
      </div>
    </section>
  );
};

export default Projects;
