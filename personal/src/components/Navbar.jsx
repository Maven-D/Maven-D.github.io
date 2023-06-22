import React from "react";

import { HiOutlineMenuAlt2 } from "react-icons/hi";
// import Link from "react-router-dom";

function Navbar({ isMobile }) {
  const expandMenu = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("grid-rows-[0fr]");
    menu.classList.toggle("grid-rows-1");
    menu.classList.toggle("pt-3");
    menu.classList.toggle("mt-3");
    menu.classList.toggle("border-t-2");
    menu.classList.toggle("border-black");
  };

  return (
    <nav
      className={
        isMobile
          ? "flex flex-col pb-3 justify-center border-b-2 border-black"
          : "flex justify-between items-center pb-3 border-b-2 border-black mb-10"
      }
    >
      <div className="flex justify-between">
        <h3 className="font-bold text-xl font-bungee">Divit Ajmera</h3>
        {isMobile && (
          <HiOutlineMenuAlt2 className="pt-1" size={24} onClick={expandMenu} />
        )}
      </div>
      <div
        id="menu"
        className={
          isMobile && " grid grid-rows-[0fr] transition-all duration-700"
        }
      >
        <ul
          className={`flex gap-3 text-center ${
            isMobile ? "flex-col overflow-hidden " : ""
          }`}
        >
          <li className="bg-flame p-2 text-white rounded-xl hover:cursor-pointer hover:bg-slate-400">
            <a>About</a>
          </li>
          <li className="bg-flame p-2 text-white rounded-xl hover:cursor-pointer hover:bg-slate-400">
            <a className="">Portfolio</a>
          </li>
          <li className="bg-flame p-2 text-white rounded-xl hover:cursor-pointer hover:bg-slate-400">
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
