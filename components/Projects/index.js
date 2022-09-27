import { useEffect, useState } from "react";
import Link from "next/link";
import { FaStar, FaArrowRight, FaQuoteRight } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import SubHeading from "../SubHeading";
import Heading from "../Heading";
import projects from "../../data/projects";
import usersInfo from "../../data/usersInfo";
import Image from "next/image";

function Projects() {
  const [repo, setRepo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selected, setIsSelected] = useState(0);
  const techs = [
    "All",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind",
    "Sass",
    "TypeScript",
  ];

  const techsDisplay = techs.map((tech, index) => {
    return (
      <button
        className={`${
          index === selected &&
          "px-5 py-1 mt-2 rounded-md bg-yellow scale-[.90] hover:scale-[.95] transition-all "
        } mr-2`}
        key={index}
        onClick={() => {
          setIsSelected(index);
        }}
      >
        {tech}
      </button>
    );
  });
  async function fetchRepos() {
    let res;
    let url = `https://api.github.com/users/${usersInfo.github_username}/repos`;
    if (localStorage.getItem("user_repos") === null) {
      try {
        setLoading(true);
        res = await fetch(url);
        let data = await res.json();
        setLoading(false);
        if (data && data.length > 0) {
          localStorage.setItem("user_repo", JSON.stringify(data));
          setRepo(data);
          return;
        }
        setLoading(false);
        setError(`No github repos found.`);
      } catch (err) {
        console.error(`FAILED: ${err.message}`);
        setLoading(false);
        setError(`Failed fetching repo: ${err.message}`);
      }
    }

    let userReopos = JSON.parse(localStorage.getItem("user_repos"));

    setRepo(userReopos);
  }

  useEffect(() => {
    (async () => {
      await fetchRepos();
    })();
  }, []);
  console.log(repo);

  return (
    <div className="max-w-[90%] mx-auto mt-16">
      <div className="sm:flex items-start">
        <div className={`w-full `}>
          <SubHeading title="MY RECENT WORK" />
          <Heading heading="Projects" />
        </div>
        <div className="flex mt-2 lmd:mt-0 items-center  lmd:flex-nowrap max-w-[100%] lmd:max-w-[50%] flex-wrap ">
          {techsDisplay}
        </div>
      </div>

      <div data-aos="zoom-in-up">
        <div className="mt-8 md:flex  justify-start  flex-wrap -m-4">
          {projects
            .sort((a, b) => {
              a.created_at - b.created_at;
            })
            .map((project, index) => {
              console.log(project);
              return (
                <Link href={project.project_url}>
                  <div
                    key={index}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className=" cursor-pointer max-h-full w-[90%] md:w-[30%] overflow-hidden border-2   mx-auto mt-6 border-white-100 hover:border-yellow border-solid rounded-lg"
                  >
                    <Image
                      width={544}
                      height={350}
                      className="object-cover object-center border-b border-solid lg:h-48 md:h-36"
                      src={project.imageUrl}
                    />
                    <div className="max-w-[100%]  p-6">
                      <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight text-white-100 dark:text-white">
                        {project.title}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="ml-0.5 h-4 w-4 cursor-pointer  inline-block fill-current"
                        >
                          <g data-name="Layer 2">
                            <g data-name="external-link">
                              <rect width="24" height="24" opacity="0" />
                              <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                              <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                            </g>
                          </g>
                        </svg>
                      </h2>
                      <p className="text-[0.8rem] mb-3 prose text-white-100 max-w-none  ">
                        An app that helps you calculate your income and expenses
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
