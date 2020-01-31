import React from "react";
import { Link } from "react-router-dom";

const ProjectLink = children => <Link className="project-list" {...children} />;

const Project = () => {
  return (
    <main className="main-container">
      <h1>PROJECT PAGE</h1>
      <div className="project-list-container">
        <ProjectLink to="/project/stopwatch">Stopwatch</ProjectLink>
        <ProjectLink to="/project/todo">Todo</ProjectLink>
        <ProjectLink to="/project/stopwatch">Stopwatch</ProjectLink>
        <ProjectLink to="/project/todo">Todo</ProjectLink>
        <ProjectLink to="/project/stopwatch">Stopwatch</ProjectLink>
        <ProjectLink to="/project/todo">Todo</ProjectLink>
        <ProjectLink to="/project/stopwatch">Stopwatch</ProjectLink>
        <ProjectLink to="/project/todo">Todo</ProjectLink>
        <ProjectLink to="/project/stopwatch">Stopwatch</ProjectLink>
        <ProjectLink to="/project/todo">Todo</ProjectLink>
        <ProjectLink to="/project/stopwatch">Stopwatch</ProjectLink>
        <ProjectLink to="/project/todo">Todo</ProjectLink>
        <ProjectLink to="/project/stopwatch">Stopwatch</ProjectLink>
        <ProjectLink to="/project/todo">Todo</ProjectLink>
        <ProjectLink to="/project/stopwatch">Stopwatch</ProjectLink>
        <ProjectLink to="/project/todo">Todo</ProjectLink>
      </div>
    </main>
  );
};

export default Project;
