import React from "react";
import { Link } from "react-router-dom";
import { PROJECT_DB } from "../project/project-db";

const renderProjects = () => {
  const projectDb = PROJECT_DB;
  return (
    <section className="d-flex flex-wrap justify-content-center">
      {projectDb.map((item, index) => (
        <Link to={`/project/${item.path}`} className="card m-2">
          <img
            src={`/images/project/${item.img}`}
            className="card-img-top p-0"
            style={{
              maxWidth: "20rem",
              borderTopLeftRadius: "3px",
              borderTopRightRadius: "3px"
            }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
          </div>
        </Link>
      ))}
    </section>
  );
};
const Project = () => {
  return (
    <main id="projects" className="container pt-4">
      <h1 className="text-center">List of my React.js projects...</h1>
      {renderProjects()}
    </main>
  );
};

export default Project;
