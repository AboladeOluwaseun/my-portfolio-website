import { useState } from "react";
import Link from "next/link";
import SubHeading from "../SubHeading";
import Heading from "../Heading";
import projects from "../../data/projects";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [selected, setIsSelected] = useState(0);

  const techs = [
    "All",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind",
    "Sass",
    "TypeScript",
    "MaterialUI",
    "FireBase",
    "Redux",
  ];

  const techsList = techs.map((tech, index) => {
    return (
      <button
        className={`${
          index === selected &&
          "px-5 py-1 text-[0.5rem] font-extrabold rounded-md bg-yellow  transition-all "
        } mr-4 mt-4`}
        key={index}
        onClick={() => {
          setIsSelected(index);
        }}
      >
        {tech}
      </button>
    );
  });

  const filteredData = (data, selectedIndex, techsArray) => {
    // find what the user is selected
    const selectedValueFromTechiesArray = techsArray[selectedIndex];

    // find it inside the array that we passed the fn
    const filteredArray = data.filter(
      (Project) =>
        Project.tags.includes(selectedValueFromTechiesArray) ||
        // if the user selects ALL we wanna return all the data
        (selectedValueFromTechiesArray === "All" && Project)
    );
    console.log(filteredArray);
    console.log(selectedValueFromTechiesArray);
    return filteredArray;
  };

  const filteredProjectsBasedOnTechSelected = filteredData(
    projects,
    selected,
    techs
  );

  const projectsDisplay = filteredProjectsBasedOnTechSelected
    .sort((a, b) => {
      a.created_at - b.created_at;
    })
    .map((project, index) => {
      return (
        <ProjectCard
          description={project.description}
          project={project}
          index={index}
        />
      );
    });

  return (
    <div className=" mt-40">
      <div className="max-w-[80%] mx-auto  ">
        <div className="sm:flex items-start">
          <div data-aos="fade-right" className={`w-full `}>
            <SubHeading title="MY RECENT WORK" />
            <Heading heading="Projects" />
          </div>
          <div
            data-aos="fade-left"
            className="flex mt-2 lmd:mt-0 items-center  lmd:flex-wrap max-w-[100%] lmd:max-w-[50%] flex-wrap "
          >
            {techsList}
          </div>
        </div>

        <div data-aos="zoom-in-up">
          <div className="mt-8 sm:flex  justify-start  flex-wrap -m-4">
            {projectsDisplay}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
