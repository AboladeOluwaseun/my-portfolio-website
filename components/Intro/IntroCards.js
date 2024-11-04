import React from "react";

const IntroCards = ({ data }) => {
  return (
    <>
      {data.map((skill, i) => {
        return (
          <div
            data-aos="fade-right"
            key={i}
            className={`max-w-[60%] sm:max-w-[40%] lmd:max-w-[45%]  p-5 rounded-lg bg-dark-200 relative transition-all mt-8 hover:shadow-2xl cursor-pointer `}
          >
            <div className="flex flex-col justify-between">
              <p className="font-extrabold text-yellow">{skill.name}</p>
              <p className=" text-[0.75rem] text-white-200 mt-2">
                {skill.description}
              </p>
            </div>

            {/* <ion-icon name="color-wand"></ion-icon> */}
          </div>
        );
      })}
    </>
  );
};

export default IntroCards;
