import { useState, useEffect } from "react";
import ResumeViewer from "./ResumeViewer";
import { Container } from "..";
import userAvatar from "../../public/images/avatar/avatar.png";
import myImg from "../../public/images/avatar/profile.png";
import usersInfo from "../../data/usersInfo.json";
import languages from "../../data/languages.json";
import Image from "next/image";
import SubHeading from "../SubHeading";

export default function Header({ children }) {
  const [resumeActive, setResumeActive] = useState(false);
  const [reposcount, setReposCount] = useState(0);
  const [avatar, setAvatar] = useState("");

  const userName = usersInfo.github_username;

  function openResume() {
    setResumeActive(!resumeActive);
  }

  // fetch github repos count
  async function getReposCount() {
    let res;
    if (localStorage.getItem("repo_counts") === null) {
      res = await fetch(`https://api.github.com/users/${userName}`);
      let data = await res.json();

      if (data && data.public_repos !== undefined) {
        const { public_repos, avatar_url } = data;
        localStorage.setItem("repo_counts", JSON.stringify(public_repos));
        // store github user avatar
        localStorage.setItem("github_avatar", JSON.stringify(avatar_url));
        setReposCount(public_repos);
      }
    }

    // get data from cahched localstorage
    let data = JSON.parse(localStorage.getItem("repo_counts"));
    let useravatar = JSON.parse(localStorage.getItem("github_avatar"));

    setReposCount(data);
    setAvatar(useravatar);

    return data;
  }

  useEffect(() => {
    (async () => {
      await getReposCount();
    })();
  }, []);

  useEffect;

  return (
    <>
      <div className="w-[100%] min-h-[100vh] ">
        {/* shows on desktop */}
        <div
          className={`max-w-[80%] sm:max-w-[70%] md:max-w-[60%] relative mx-auto mt-8 lmd:mt-[4rem]  min-h-[100vh] flex items-start space-y-14 lmd:flex-row lmd:max-w-[80%]  flex-col `}
        >
          <div className="relative ">
            <div className="">
              <div>
                <SubHeading title={"Introduction"} />
                <div className="mt-4">
                  <h1
                    data-aos="zoom-in-up"
                    className={` text-[2rem] font-bold`}
                  >
                    {usersInfo.greeting_type} <br /> I'm{" "}
                    <span className="text-yellow">Oluwaseun</span>.
                  </h1>
                </div>
              </div>
              {/* <div
                data-aos="fade-up"
                className="text-[2.0rem] xsm:text-[2.2rem] font-bold"
              >
                Frontend <span className="text-yellow ">Developer</span>
              </div> */}
              <div
                data-aos="fade-right"
                className="text-[1.2rem] lmd:max-w-[60%] mt-4"
              >
                A Frontend Developer with a passion for building scalable
                websites and webapps that provide solution to needs of people.
              </div>

              <span
                data-aos="fade-in"
                className="text-[1.2rem] mt-4 text-yellow"
              >
                {usersInfo.subTitle}
              </span>
            </div>

            <div className="flex items-center align-middle  mt-6">
              <div
                data-aos="zoom-in-left"
                className="flex items-center space-x-3"
              >
                <h1 className="text-[2.5rem] font-extrabold">
                  {new Date().getFullYear() - parseInt(usersInfo.tech_year)}
                </h1>
                <span className="text-white-300 w-[50%] text-[0.63rem]">
                  Years of Experience
                </span>
              </div>
              <div
                data-aos="zoom-in-left"
                className="flex items-center space-x-3"
              >
                <h1 className="text-[2.5rem] font-extrabold">{reposcount}</h1>
                <span className="text-white-300 w-[40%] text-[0.63rem]">
                  Projects/ Contributions
                </span>
              </div>
            </div>

            <div className="mt-5">
              <button
                className=" px-5 py-3 rounded-md bg-yellow scale-[.90] hover:scale-[.95] transition-all  "
                onClick={openResume}
              >
                View CV
              </button>
            </div>

            {resumeActive && <ResumeViewer openResume={openResume} />}
          </div>

          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className=" block "
          >
            <Image
              src={myImg}
              width={400}
              height={400}
              // layout="responsive"
              // style={{ marginLeft: "2rem" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div
                className={`img-cont w-[250px] h-[250px] p-[15vmin] flex flex-col items-center justify-center bg-cover bg-center  rounded-[50%] `}
              >
                <style jsx>{`
                  .img-cont {
                    background-image: url("${avatar}");
                  }
                `}</style>
               
              </div> */
}
