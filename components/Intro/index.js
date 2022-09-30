import Link from "next/link";
import skills from "../../data/skills";
import usersInfo from "../../data/usersInfo";
import IntroCards from "./IntroCards";
import Heading from "../Heading";
import SubHeading from "../SubHeading";
import Techs from "./Techs";
import { motion } from "framer-motion";

export default function Intro() {
  const titleVarient = {
    inView: { y: ["10%", "0%", "10%", "0%"], opacity: [0, 0.5, 1] },
  };

  return (
    <div id="about" className=" mt-40 ">
      <div className="max-w-[80%] lmd:max-w-[80%] mx-auto">
        <div className="  ">
          <div>
            <motion.div
              variants={titleVarient}
              whileInView={titleVarient.inView}
            >
              <SubHeading title={"WHAT I DO"} />
              <Heading heading={"My Skills"} />
            </motion.div>

            <motion.div className=" flex flex-col sm:flex-row items-center justify-between ">
              <IntroCards data={skills} />
            </motion.div>
          </div>

          <div data-aos="zoom-in-up">
            <div className="mt-16 w-full">
              <div>
                <SubHeading title={"WHO AM I?"} />
                <Heading heading={"About me"} />
              </div>

              <div className="mt-8 lmd:flex justify-between items-start ">
                <p className="lmd:max-w-[40%] text-[1rem]">
                  My name is{" "}
                  <span className="text-yellow"> Abolade Oluwaseun</span>. I'm a
                  self-taught Front End Developer from Nigeria. I have over{" "}
                  <span className="text-yellow"> 2 years</span> of experience
                  creating scalable and user-friendly websites. I'd describe
                  myself as a passionate developer who enjoys{" "}
                  <span className="text-yellow">coding</span> ,{" "}
                  <span className="text-yellow">open source</span>, and the web
                  platform. Aside from my job, I enjoy creating and contributing
                  to open source projects. That allows me to learn a lot of new
                  things, grow as a developer, and contribute to other open
                  source projects. <br /> I also enjoy writing on web
                  development-related topics on my blog.
                </p>
                <div className="mt-10 flex items-center justify-start  flex-wrap lmd:mt-0 lmd:max-w-[40%] ">
                  <Techs />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
