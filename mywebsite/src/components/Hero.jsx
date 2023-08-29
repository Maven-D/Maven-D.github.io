import React from "react";

function Hero() {
  return (
    <section
      id="about"
      className="bg-[url('./assets/myimage.jpg')] bg-cover bg-center p-3 min-h-[28rem] rounded-md bg-opacity-70"
    >
      <h3 className="text-4xl font-tienne font-bold text-white max-sm:text-2xl">
        Welcome to my <span className="font-bold font-bungee">Portfolio</span>
      </h3>
      <p className="mt-3 text-white w-3/5">
        Hello Everyone! My name is <b>Divit Ajmera</b> and I am a{" "}
        <b>software developer</b>. I have done a range of projects (as listed
        below) and worked on many industry standard applications. I have a solid
        command on tons of in-demand programming languages. I am also a
        cybersecurity enthusiast. I am <b>open to work</b>.
      </p>
      <div className="mt-3 mb-4w-24 rounded-md">
        <button
          className="mt-3 mb-4 bg-flame rounded-lg text-white px-4 py-2 shadow-lg hover:cursor-pointer hover:bg-slate-400"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://drive.google.com/file/d/19OfqWsDIC__ONPbPiViZTXjlItns5DFs/view?usp=sharing",
              "_blank"
            );
          }}
        >
          Resume
        </button>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-4 md:w-4/6">
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
  );
}

export default Hero;
