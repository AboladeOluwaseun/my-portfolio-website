import { useState, useEffect, useRef } from "react";
import ResumeViewer from "./ResumeViewer";
import myImg from "../../public/images/avatar/profile.png";
import usersInfo from "../../data/usersInfo";
import Image from "next/image";
import SubHeading from "../SubHeading";
import { motion } from "framer-motion";
import {
  containerVariant,
  imageVariant,
  childVariant,
  buttonVariant,
} from "./motion";

const Hero = ({ children }) => {
  const [resumeActive, setResumeActive] = useState(false);
  const [reposcount, setReposCount] = useState(0);

  const userName = usersInfo.github_username;

  function openResume() {
    setResumeActive(!resumeActive);
  }
  // fetch github repos count
  // async function getReposCount() {
  //   let res;
  //   if (localStorage.getItem("repo_counts") === null) {
  //     res = await fetch(`https://api.github.com/users/${userName}`);
  //     let data = await res.json();

  //     if (data && data.public_repos !== undefined) {
  //       const { public_repos, avatar_url } = data;
  //       localStorage.setItem("repo_counts", JSON.stringify(public_repos));
  //       setReposCount(public_repos);
  //     }
  //   }
  //   // get data from cahched localstorage
  //   let data = JSON.parse(localStorage.getItem("repo_counts"));
  //   let useravatar = JSON.parse(localStorage.getItem("github_avatar"));

  //   setReposCount(data);

  //   return data;
  // }

  // useEffect(() => {
  //   (async () => {
  //     await getReposCount();
  //   })();
  // }, []);

  return (
    <>
      <div
        className={`max-w-[80%] sm:max-w-[70%] md:max-w-[80%] relative mx-auto mt-16 py-4 lmd:mt-14 min-h-[70vh] md:min-h-[40vh] lmd:min-h-[70vh] flex items-start  space-y-14 md:flex-row lmd:max-w-[80%]  flex-col `}
      >
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="relative md:max-w-[60%]"
        >
          <div className="">
            <div>
              <SubHeading title={"Introduction"} />
              <motion.div
                transition={{ duration: 0.5 }}
                variants={childVariant}
                className="mt-4"
                whileInView={{ y: ["30%", "0%"], opacity: [0, 0.5, 1] }}
              >
                <h1 className={` text-[2rem] font-bold`}>
                  {usersInfo.greeting_type} <br /> I'm{" "}
                  <span className="text-yellow">Oluwaseun</span>.
                </h1>
              </motion.div>
            </div>
            <motion.div
              transition={{ duration: 2 }}
              variants={childVariant}
              whileInView={{ y: ["30%", "0%"], opacity: [0, 0.5, 1] }}
              className="text-[1rem] lmd:max-w-[60%] mt-4"
            >
              I enjoy creating frontend solutions that are reliable, scalable,
              and have excellent user experiences.
            </motion.div>

            <motion.div
              transition={{ duration: 2 }}
              variants={childVariant}
              whileInView={{
                x: ["60%", "0%"],
                opacity: [0, 0.2, 0.3, 0.5, 0.6, 0.9, 1],
              }}
              className="text-[1.2rem] mt-4 text-yellow"
            >
              {usersInfo.subTitle}
            </motion.div>
          </div>

          {/* <div data-aos="fade-left" className="flex items-center  mt-6">
            <motion.div
              transition={{ duration: 4 }}
              variants={childVariant}
              className="flex items-center space-x-3"
            >
              <h1 className="text-[2.5rem] font-extrabold">
                {new Date().getFullYear() - parseInt(usersInfo.tech_year)}
              </h1>
              <span className="text-white-300 w-[50%] text-[0.63rem]">
                Years of Experience
              </span>
            </motion.div>
            <motion.div
              transition={{ duration: 4.5 }}
              variants={childVariant}
              className="flex items-center space-x-3"
            >
              <h1 className="text-[2.5rem] font-extrabold">{reposcount}</h1>
              <span className="text-white-300 w-[40%] text-[0.63rem]">
                Projects/ Contributions
              </span>
            </motion.div>
          </div> */}

          <motion.div
            transition={{ duration: 5.5 }}
            variants={childVariant}
            className="mt-5"
          >
            <motion.a
              variants={buttonVariant}
              whileHover="hover"
              className=" px-5 py-3 rounded-md bg-yellow scale-[.90] hover:scale-[.95] transition-all  "
              href="/CV/UpdatedResume.pdf"
            >
              View CV
            </motion.a>
          </motion.div>

          {resumeActive && <ResumeViewer openResume={openResume} />}
        </motion.div>

        <motion.div
          variants={imageVariant}
          whileInView={{
            y: ["20%", "0%"],
            opacity: [0, 0.2, 0.3, 0.5, 0.6, 0.9, 1],
          }}
          initial="hidden"
          animate="visible"
          className=" "
        >
          <Image
            width={400}
            height={400}
            className=" mb-4 w-full h-full"
            src="/images/avatar/profile.png"
          />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
