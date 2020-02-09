import React from "react";
import { Link } from "react-router-dom";

const ProjectLink = children => (
  <Link className="project-list-item" {...children} />
);

const Project = () => {
  return (
    <main id="projects" className="main-container">
      <div className="main-container-wrapper">
        <h1>List of my projects...</h1>
        <section className="project-list-container">
          <ProjectLink to="/project/basic-counter">Basic Counter</ProjectLink>
          <ProjectLink to="/project/stopwatch">Stopwatch</ProjectLink>
          <ProjectLink to="/project/artists">Artist</ProjectLink>
          <ProjectLink to="/project/todo-app">To-do App</ProjectLink>
          <ProjectLink to="/project/stopwatch">TODO</ProjectLink>
          <ProjectLink to="/project/todo">TODO</ProjectLink>
          <ProjectLink to="/project/stopwatch">TODO</ProjectLink>
          <ProjectLink to="/project/todo">TODO</ProjectLink>
        </section>
      </div>
    </main>
  );
};

export default Project;
