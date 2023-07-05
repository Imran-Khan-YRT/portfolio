import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useState } from "react";

const Tech = () => {
  const [isMouseOver, setisMouseOver] = useState("");
  return (
    <div className="grid  grid-cols-6 sm:gap-10 gap-1 ">
      {technologies.map((technology) => (
        <div
          className="sm:w-24 w-12 sm:h-24 h-12 flex flex-col justify-items-center"
          key={technology.name}
          onMouseOver={() => setisMouseOver(technology.name)}
          onMouseLeave={() => setisMouseOver("")}
        >
          <BallCanvas icon={technology.icon} />
          {isMouseOver === technology.name && (
            <p className="sm:text-[14px] text-[8px] mx-auto">{isMouseOver}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
