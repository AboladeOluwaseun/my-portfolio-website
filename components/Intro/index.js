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
                  My name is <span className="text-yellow"> Oluwaseun</span>.{" "}
                  <br />I help startups and companies achieve
                  <span className=" text-yellow">
                    {" "}
                    seamless, high-performance{" "}
                  </span>
                  frontend solutions that bring their visions to life. My
                  approach combines technical skill with an eye for design, from
                  <span className=" text-yellow">
                    {" "}
                    building interactive applications
                  </span>{" "}
                  to <span className=" text-yellow">
                    integrating databases
                  </span>{" "}
                  for real-time data management. <br /> I also enjoy writing on
                  web development-related topics on my blog.
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
