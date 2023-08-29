import React from "react";

import Anwesha1 from "../assets/anwesha1.webp";
import Anwesha2 from "../assets/anwesha2.webp";
import Anwesha3 from "../assets/anwesha3.webp";
import Anwesha4 from "../assets/anwesha4.webp";

import Celesta1 from "../assets/celesta1.jpg";
import Celesta2 from "../assets/celesta2.jpg";
import Celesta3 from "../assets/celesta3.jpg";
import Celesta4 from "../assets/celesta4.jpg";

import Card from "./Card";

import { IoLogoGooglePlaystore } from "react-icons/io5";

function Projects() {
  return (
    <section id="portfolio">
      <h3 className="font-bungee mt-16 text-4xl text-bistre font-bold">
        Portfolio Projects
      </h3>

      <div className="flex flex-col gap-5 md:grid md:grid-cols-3 mt-3">
        <Card
          images={[Anwesha1, Anwesha2, Anwesha3, Anwesha4]}
          techStack={["Kotlin", "Django", "Firebase"]}
          title="Anwesha Application"
          desc={
            <>
              Built an Android application for the Anwesha Fest uploaded on
              <IoLogoGooglePlaystore
                size={16}
                href="https://play.google.com/store/apps/details?id=com.college.anwesha2k23&hl=en&gl=US"
                target="_blank"
                className="cursor-pointer"
              />
            </>
          }
        />
        <Card
          images={[Celesta1, Celesta2, Celesta4, Celesta3]}
          techStack={["React", "MongoDB", "ExpressJS"]}
          title="Celesta Website"
          desc={
            <>
              Built a responsive web application for the Celesta Fest uploaded
              on the{" "}
              <a
                href="https://celesta.iitp.ac.in"
                target="_blank"
                className="underline"
              >
                link
              </a>
            </>
          }
        />
      </div>
    </section>
  );
}

export default Projects;
