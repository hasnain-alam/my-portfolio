import React from "react";

function Projects() {
  const projects = [
    { id: 1, name: "Project 1", description: "A Blogging React App|| React, Typescript, Prisma, Serverless Backend." },
    { id: 2, name: "Project 2", description: "CONTACT APP || HTML, CSS, JavaScript, React." },
    { id: 3, name: "Project 3", description: "A portfolio website (this one!)." },
  ];

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="border p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;