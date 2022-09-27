import React from "react";

const Heading = ({ heading }) => {
  let whiteHeading = "";
  let orangeHeading = " ";

  // if it icnludes space
  if (heading.includes(" ")) {
    // take the first part
    whiteHeading = heading.split(" ")[0];

    // takt the rest of it, if it containts multple spaces and joing them to with spac to remove the comma, + sign menas concatitnae the strings with space betwen them
    const [, ...yellow] = heading.split(" ");
    orangeHeading += yellow.join(" ");
  } else {
    // if there is no space the sentence
    whiteHeading = heading.substring(0, heading.length / 2);
    orangeHeading = heading.substring(heading.length / 2);
  }
  return (
    <div className="text-[1.6rem] font-bold">
      {whiteHeading}
      <span className="text-yellow ">{orangeHeading}</span>
    </div>
  );
};

export default Heading;
