import React from "react";

import { DiGithubFull } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { BsFillTelephonePlusFill } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <h2 className="font-bold text-4xl text-bistre font-bungee mt-16">
        More about me
      </h2>

      <div className="flex gap-3 bg-vanilla rounded-md p-2">
        <div className="flex-1 border-r-2 border-bistre align-middle">
          some random desciption about me that no one cares about even more
          content than is neccesary and so much more;oaiosdkljhshlkjg
          akdkjfhflkjadshlkfjhlfghj
        </div>
        <div className="flex flex-col gap-2 items-center">
          <a
            className="cursor-pointer mix-blend-multiply"
            href="https://github.com/Maven-D"
            target="_blank"
          >
            <DiGithubFull size={38} />
          </a>
          <a
            className="mb-2 mix-blend-multiply cursor-pointer"
            href="https://linkedin.com/in/divit-ajmera"
            target="_blank"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            className="cursor-pointer mix-blend-multiply"
            href="tel:+918269654420"
          >
            <BsFillTelephonePlusFill size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
