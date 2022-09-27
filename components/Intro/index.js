import Link from "next/link";
import skills from "../../data/skills.json";
import usersInfo from "../../data/usersInfo.json";
import IntroCards from "./IntroCards";
import Heading from "../Heading";
import SubHeading from "../SubHeading";
import Techs from "./Techs";

export default function Intro() {
  return (
    <div className="mt-8">
      <div className="max-w-[80%] lmd:max-w-[90%] mx-auto">
        <div className=" mt-16 ">
          <div>
            <SubHeading title={"WHAT I DO"} />
            <Heading heading={"My Skills"} />
            <div className="lmd:flex items-center justify-between lmd:space-x-4">
              <IntroCards data={skills.skill} />
            </div>
          </div>

          <div data-aos="zoom-in-up">
            <div className="mt-16 w-full">
              <div>
                <SubHeading title={"WHO AM I?"} />
                <Heading heading={"About me"} />
              </div>

              <div className="mt-8 lmd:flex justify-between ">
                <p className="lmd:max-w-[40%]">
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
