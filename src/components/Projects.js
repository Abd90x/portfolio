import React from "react";
import { FaStar, FaEye, FaGithub } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
import { MdOutlineUpdate, MdCreateNewFolder } from "react-icons/md";
function Projects() {
  const [projects, setProjects] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.github.com/users/abd90x/repos")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const [count, setCount] = React.useState(6);
  function loadMore() {
    setCount((count) => count + 6);
  }

  const Project = () => {
    const projectsElement = projects.map((project) => {
      return (
        <div className="project-card" key={project.id}>
          <h2 className="project-title">{project.name.replace(/-/g, " ")}</h2>
          <div className="status">
            <span>
              <FaStar />
              {project.stargazers_count}
            </span>
            <span>
              <FaEye />
              {project.watchers_count}
            </span>
          </div>
          <div className="project-date">
            <span>
              <MdCreateNewFolder /> Created: {project.created_at.slice(0, 10)}
            </span>
            <span>
              <MdOutlineUpdate />
              Updated: {project.updated_at.slice(0, 10)}
            </span>
          </div>
          <div className="project-view">
            <a href={project.homepage} target="_blank" rel="noreferrer">
              View Demo <HiOutlineExternalLink />
            </a>
            <a href={project.html_url} target="_blank" rel="noreferrer">
              View on Github <FaGithub />
            </a>
          </div>
        </div>
      );
    });

    return projectsElement.slice(0, count);
  };

  return (
    <section className="projects" id="projects">
      <h1 className="section-header">
        <span>&lt;</span> Projects <span>/&gt;</span>
      </h1>
      <div className="container">
        <div className="projects-container">
          <Project />
        </div>

        <button
          className={`main-btn projects-btn ${
            count >= projects.length ? "allShown" : ""
          }`}
          onClick={loadMore}
        >
          {count >= projects.length ? "That is All" : "Show More"}
        </button>
      </div>
    </section>
  );
}

export default Projects;
