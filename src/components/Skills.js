import React from "react";

function Skills() {
  const skills = ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Git"];

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <li key={index} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;