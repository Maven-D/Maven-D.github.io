import React, { useState } from "react";

import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";

function Card(props) {
  const [index, setIndex] = useState(0);
  const images = props.images;
  const techStack = props.techStack;
  function goLeft() {
    if (index == 0) return;
    setIndex((index) => index - 1);
  }

  function goRight() {
    if (index == images.length - 1) return;
    setIndex((index) => index + 1);
  }
  return (
    <div className="border-2 rounded-xl p-3 bg-earth-yellow">
      <div className="flex items-center gap-1">
        <AiOutlineLeft
          size={25}
          className="hover:cursor-pointer"
          onClick={goLeft}
        />
        <div className="w-11/12 h-60  gap-2 flex overflow-hidden items-center">
          <div className="flex justify-center w-full">
            <img
              src={images[index]}
              className="object-scale-down max-h-60  rounded-md h-fit"
            ></img>
          </div>
        </div>
        <AiOutlineRight
          size={25}
          className="hover:cursor-pointer"
          onClick={goRight}
        />
      </div>
      <h5 className=" mt-2 text-2xl font-tienne text-center underline">
        {props.title}
      </h5>
      <p className="mt-2">{props.desc}</p>
      <div className="flex gap-2 mt-4 justify-center md:gap-4">
        {techStack.map((tech) => (
          <div className="bg-vanilla rounded-lg p-1 md:p-2">{tech}</div>
        ))}
      </div>
    </div>
  );
}

export default Card;
