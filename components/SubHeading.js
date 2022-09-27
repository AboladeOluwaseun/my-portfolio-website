import React from "react";

const SubHeading = ({ title }) => {
  return (
    <>
      <div className="flex items-center">
        <div className=" w-[30px] mt-2 h-[2px] bg-yellow mr-3"></div>
        <div className=" font-bold text-[0.8rem] text-white-200">{title}</div>
      </div>
    </>
  );
};

export default SubHeading;
