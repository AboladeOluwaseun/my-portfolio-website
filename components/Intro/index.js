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
    <div id="about" className="  mt-40 ">
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

            <motion.div className="flex items-center justify-between ">
              <IntroCards data={skills} />
            </motion.div>
          </div>

          <div data-aos="zoom-in-up">
            <div className="mt-16 w-full">
              <div>
                <SubHeading title={"WHO AM I?"} />
                <Heading heading={"About me"} />
              </div>

              <div className="mt-8 lmd:flex justify-between ">
                <p className="lmd:max-w-[40%] text-[1rem]">
                  I am a professional{" "}
                  <span className="text-yellow">front-end</span> developer,{" "}
                  <span className="text-yellow">UI/X</span> Designer,{" "}
                  <span className="text-yellow">Co-founder</span>, and
                  <span className="text-yellow"> freelancer</span> with alot of
                  experience in developing websites using various technologies
                  with a background in <span className="text-yellow">2D</span>{" "}
                  Animation and <span className="text-yellow">Videography</span>
                  .
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
