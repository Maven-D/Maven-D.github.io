import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { AiOutlineCode } from "react-icons/ai";
import { DiGithubFull } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { BsFillTelephonePlusFill } from "react-icons/bs";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => setIsMobile(window.innerWidth < 425);

  // create an event listener
  useEffect(() => {
    setIsMobile(window.innerWidth < 425);
    window.addEventListener("resize", handleResize);
  });
  const contactForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="px-10 py-3 bg-straw">
      <Navbar isMobile={isMobile}></Navbar>
      <section>
        <div>// my image</div>
        <h3 className="text-4xl text-bistre font-tienne font-bold">
          Welcome to my <span className="font-bold font-bungee">Portfolio</span>
        </h3>
        <p className="mt-3">
          lorem30akjjhdgkh ;siihhffgkjlh\ lkjsjdhgflkjhkljhdf lkahdlkjgfkljabve
          lkjhdslkjfhlkhkejh
        </p>
        <div className="mt-3 mb-4w-24 rounded-md">
          <button className="mt-3 mb-4 bg-flame rounded-lg text-white px-4 py-2 shadow-lg hover:cursor-pointer hover:bg-slate-400">
            Resume
          </button>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-4">
          <div className="shadow-md rounded-md text-base p-1 bg-bistre text-white text-center">
            C
          </div>
          <div className="shadow-md rounded-md text-base p-1 bg-bistre text-white text-center">
            C++
          </div>
          <div className="shadow-md rounded-md text-base p-1 bg-bistre text-white text-center">
            Java
          </div>
          <div className="shadow-md rounded-md text-base p-1 bg-bistre text-white text-center">
            JS
          </div>
          <div className="shadow-md rounded-md text-base p-1 bg-bistre text-white text-center">
            Python
          </div>
          <div className="shadow-md rounded-md text-base p-1 bg-bistre text-white text-center">
            PHP
          </div>
          <div className="shadow-md rounded-md text-base p-1 bg-bistre text-white text-center">
            React
          </div>
          <div className="shadow-md rounded-md text-base p-1 bg-bistre text-white text-center">
            Django
          </div>
        </div>
      </section>
      <section>
        <h3 className="font-bungee mt-16 text-4xl text-bistre font-bold">
          Portfolio Projects
        </h3>
        // add projects as cards
        <div className="flex flex-col gap-5">
          <div className="border-2 rounded-xl p-3 bg-earth-yellow">
            <AiOutlineCode size="1x" />
            <h5 className="text-2xl font-tienne text-center underline">
              Project Title
            </h5>
            <p className="mt-2">
              about the project aljdfkh ;ahdlkjhkjh lorenalhdflkkn lorem
              alkdhglkjh20 akkhdskjhj
            </p>
            <div className="flex gap-4 mt-4 justify-center">
              <div className="bg-vanilla rounded-lg p-2">tech</div>
              <div className="bg-vanilla rounded-lg p-2">stack</div>
              <div className="bg-vanilla rounded-lg p-2">used</div>
            </div>
          </div>
          <div className="border-2 rounded-xl p-3 bg-earth-yellow">
            <AiOutlineCode size="1x" />
            <h5 className="text-2xl font-tienne text-center underline">
              Project Title
            </h5>
            <p className="mt-2">
              about the project aljdfkh ;ahdlkjhkjh lorenalhdflkkn lorem
              alkdhglkjh20 akkhdskjhj
            </p>
            <div className="flex gap-4 mt-4 justify-center">
              <div className="bg-vanilla rounded-lg p-2">tech</div>
              <div className="bg-vanilla rounded-lg p-2">stack</div>
              <div className="bg-vanilla rounded-lg p-2">used</div>
            </div>
          </div>
          <div className="border-2 rounded-xl p-3 bg-earth-yellow">
            <AiOutlineCode size="1x" />
            <h5 className="text-2xl font-tienne text-center underline">
              Project Title
            </h5>
            <p className="mt-2">
              about the project aljdfkh ;ahdlkjhkjh lorenalhdflkkn lorem
              alkdhglkjh20 akkhdskjhj
            </p>
            <div className="flex gap-4 mt-4 justify-center">
              <div className="bg-vanilla rounded-lg p-2">tech</div>
              <div className="bg-vanilla rounded-lg p-2">stack</div>
              <div className="bg-vanilla rounded-lg p-2">used</div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="font-bungee text-4xl text-bistre font-bold mt-16">
          Contact Details
        </h2>
        // contact details and form
        <div>
          <form
            className="flex flex-col [&>*]:mt-3"
            method="post"
            onSubmit={contactForm}
          >
            <div className="grid grid-cols-2 gap-3 [&>*]:border-2">
              <input
                type="text"
                placeholder="First Name"
                className="pl-3 rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="pl-3 rounded-md"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="pl-3 border-2 rounded-md"
            />
            <input
              type="phone"
              placeholder="Phone"
              className="pl-3 border-2 rounded-md"
            />
            <textarea
              type="text"
              placeholder="Feedback (max 1000 characters)"
              maxLength={1000}
              rows={8}
              className="pl-3 border-2 rounded-md resize-none"
            />

            <input
              type="submit"
              placeholder="Submit"
              className="rounded-md border-2 bg-flame text-white hover:bg-slate-300 hover:cursor-pointer "
            />
          </form>
        </div>
      </section>
      <footer>
        <h2 className="font-bold text-4xl text-bistre font-bungee mt-16">
          More about me
        </h2>
        // footer for the website kjdjsfkj
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
    </div>
  );
}

export default App;
