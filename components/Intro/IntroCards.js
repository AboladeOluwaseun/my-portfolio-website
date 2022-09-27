import React from "react";

const IntroCards = ({ data }) => {
  return (
    <>
      {data.map((skill, i) => {
        return (
          <div
            data-aos="zoom-in-up"
            key={i}
            className={` w-full h-40 p-5 rounded-lg bg-dark-200 relative transition-all mt-8 hover:shadow-2xl `}
          >
            <div className="flex flex-col justify-between">
              <p className="font-extrabold text-yellow">{skill.name}</p>
              <p className=" text-[0.75rem] text-white-300 mt-2">
                {skill.description}
              </p>
              <a
                className={` text-[14px] text-white-200 font-bold underline mt-4 `}
              >
                {skill.projects_completed} Projects
              </a>
            </div>

            {/* <ion-icon name="color-wand"></ion-icon> */}
          </div>
        );
      })}
    </>
  );
};

export default IntroCards;
