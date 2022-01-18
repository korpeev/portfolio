import React, { useEffect } from "react";
import imgSelector from "@/utils/imgSelector";
import { useAppContext } from "@/context/appContext";
import { IconSelector } from "@/components";

const Project = () => {
  const { currentProject: project, setCurrentProject } = useAppContext();
  useEffect(() => {
    const itemOnLocalStroage = localStorage.getItem("project");
    setCurrentProject(JSON.parse(itemOnLocalStroage as string));
  }, []);

  return (
    <section className="my-16 h-screen">
      <div className="container px-5 max-w-7xl mx-auto">
        {project && Object.keys(project).length > 0 && (
          <div className="flex flex-col max-w-[500px] mx-auto space-y-5">
            <h1 className="text-5xl text-center pt-5 md:text-4xl font-bold">
              {project.name}
            </h1>
            <div className="max-w-[500px] max-h-[250px] pt-10 overflow-hidden">
              <img
                className="shadow-md max-h-full max-w-full"
                src={imgSelector[project?.path]}
                alt="project photo"
              />
            </div>
            <div className="shadow-lg p-6 mt-10 max-w-[500px] rounded-lg">
              <div className="py-4">
                <span>{project.description}</span>
              </div>
              <div className="text-left self-start ">
                <span className=" font-bold py-4 uppercase text-lg">Stacklist</span>
                <ol>
                  {project.stackList.map((list) => (
                    <li key={list}>{list}</li>
                  ))}
                </ol>
              </div>
              <div className="pt-3 flex justify-between">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    className="flex p-2 bg-black text-white rounded-md hover:translate-x-2 transition-transform duration-150 ease-out"
                    href={link.url}
                    target="_blank">
                    <span className="mr-2">{link.linkName}</span>
                    <IconSelector id={link.linkName === "Github" ? "github" : "demo"} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
