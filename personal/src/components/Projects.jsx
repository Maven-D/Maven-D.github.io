import React from "react";

import MyImage from "../assets/myimage.jpg";

import Card from "./Card";

function Projects() {
  return (
    <section>
      <h3 className="font-bungee mt-16 text-4xl text-bistre font-bold">
        Portfolio Projects
      </h3>

      <div className="flex flex-col gap-5 md:grid md:grid-cols-3 mt-3">
        <Card
          images={[
            MyImage,
            "https://plus.unsplash.com/premium_photo-1668241683684-c65571f89df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            MyImage,
            "https://plus.unsplash.com/premium_photo-1668241683684-c65571f89df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          ]}
          techStack={["tech", "stack", "used"]}
        />
        <Card
          images={[
            MyImage,
            "https://plus.unsplash.com/premium_photo-1668241683684-c65571f89df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            MyImage,
            "https://plus.unsplash.com/premium_photo-1668241683684-c65571f89df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          ]}
          techStack={["tech", "stack", "used"]}
        />
        <Card
          images={[
            MyImage,
            "https://plus.unsplash.com/premium_photo-1668241683684-c65571f89df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            MyImage,
            "https://plus.unsplash.com/premium_photo-1668241683684-c65571f89df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          ]}
          techStack={["tech", "stack", "used"]}
        />
        <Card
          images={[
            MyImage,
            "https://plus.unsplash.com/premium_photo-1668241683684-c65571f89df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            MyImage,
            "https://plus.unsplash.com/premium_photo-1668241683684-c65571f89df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          ]}
          techStack={["tech", "stack", "used"]}
        />
      </div>
    </section>
  );
}

export default Projects;
