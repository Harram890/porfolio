import React from "react";
import "./Skills.scss";

const Skills = () => {
  return (
    <section className="skills">

      <div className="skills-heading">
        <h2>My Skills</h2>

        <p>
          Here are the technologies and tools I use to build
          modern and responsive websites.
        </p>
      </div>

      <div className="skills-container">

        <div className="skill-card">
          <h3>HTML</h3>
          <p>Building the structure of websites.</p>
        </div>

        <div className="skill-card">
          <h3>CSS</h3>
          <p>Designing responsive and attractive layouts.</p>
        </div>

        <div className="skill-card">
          <h3>JavaScript</h3>
          <p>Adding functionality and interactivity.</p>
        </div>

        <div className="skill-card">
          <h3>React</h3>
          <p>Building modern interactive user interfaces.</p>
        </div>

        <div className="skill-card">
          <h3>Git</h3>
          <p>Managing and tracking project changes.</p>
        </div>

        <div className="skill-card">
          <h3>GitHub</h3>
          <p>Hosting and managing code repositories.</p>
        </div>

      </div>

    </section>
  );
};

export default Skills;
