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
    if (index == images.length - 3) return;
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
        <div className="w-11/12 max-h-60 grid grid-cols-3 overflow-hidden gap-2">
          <div>
            <img src={images[index]} className="rounded-md h-full"></img>
          </div>
          <div>
            <img src={images[index + 1]} className="rounded-md h-full"></img>
          </div>
          <div>
            <img src={images[index + 2]} className="rounded-md h-full"></img>
          </div>
        </div>
        <AiOutlineRight
          size={25}
          className="hover:cursor-pointer"
          onClick={goRight}
        />
      </div>
      <h5 className=" mt-2 text-2xl font-tienne text-center underline">
        Project Title
      </h5>
      <p className="mt-2">
        about the project aljdfkh ;ahdlkjhkjh lorenalhdflkkn lorem alkdhglkjh20
        akkhdskjhj
      </p>
      <div className="flex gap-4 mt-4 justify-center">
        {techStack.map((tech) => (
          <div className="bg-vanilla rounded-lg p-2">{tech}</div>
        ))}
      </div>
    </div>
  );
}

export default Card;
