import React from "react";
import { Container } from "..";
import Heading from "../Heading";
import SubHeading from "../SubHeading";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import userInfo from "../../data/usersInfo.json";

function Quote() {
  return (
    <div className=" mt-20 max-w-[80%] mx-auto">
      <div className="">
        <SubHeading title={"QUOTES"} />
        <Heading heading={"My favourite quotes"} />
      </div>

      <QuoteCard />
    </div>
  );
}

export default Quote;

function QuoteCard() {
  return (
    <div className="bg-dark-200 h-full mt-6 rounded-lg p-3">
      {/* <FaQuoteRight
        data-aos="fade-left"
        className="absolute top-[20px] right-[25px] text-[35px] text-white-300 opacity-[.3]"
      /> */}
      <p data-aos="zoom-in-up ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo incidunt
        sapiente omnis consequuntur nobis culpa laboriosam veritatis magnam, ut
        maxime!
      </p>
      <div className=" flex flex-row items-center justify-between mt-5">
        <StarRatings count={1} size={10} />
        <small className="ml-2 text-white-300 font-bold">
          {userInfo.github_username.charAt(0).toUpperCase() +
            userInfo.github_username.slice(1)}
        </small>
      </div>
    </div>
  );
}

function StarRatings() {
  return (
    <>
      <div className="flex items-center ">
        <div className="flex">
          <FaStar className={`text-green-200 text-[${10}px] `} />
          <FaStar className={`text-green-200 text-[${10}px] `} />
          <FaStar className={`text-green-200 text-[${10}px] `} />
          <FaStar className={`text-green-200 text-[${10}px] `} />
          <FaStar className={`text-green-200 text-[${10}px] `} />
        </div>

        <small className="ml-2 text-white-200">5.0</small>
      </div>
    </>
  );
}
