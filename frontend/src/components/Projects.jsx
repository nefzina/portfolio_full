import axios from "axios";
import { useEffect, useState } from "react";
import inProgress from "../assets/construction_page.jpg";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projects`)
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="wrapper">
        {projects.map((project) => (
          <div className="project">
            {project.image == null ? (
              <img src={inProgress} alt="In progress" />
            ) : (
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}${project.image}`}
                alt={project.title}
              />
            )}
            <div className="projectDetails">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <h4>Tools</h4>
              <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Scss</li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => window.open(`${project.link}`, "_blank")}
            >
              Play our game
            </button>
          </div>
        ))}
        {/* 
        <div className="project">
          <img src={hackathon_1} alt="ToDo Wild" />
          <div className="projectDetails"></div>
          <button
            onClick={() =>
              window.open(
                "https://wildcodeschool.github.io/2023-02-JS-RemoteFR-DeVMX-P1-G2/",
                "_blank"
              )
            }
          >
            Visit Page
          </button>
        </div>

        <div className="project">
          <img src={project_1} alt="ToDo Wild" />
          <div className="projectDetails">
            <h3>To-Do Wild</h3>
            <p>A To-Do List where you can note your tasks</p>
            <h4>Tools</h4>
            <ul>
              <li>HTML</li>
              <li>Css</li>
              <li>JavaScript</li>
            </ul>
          </div>

          <button
            onClick={() =>
              window.open(
                "https://wildcodeschool.github.io/2023-02-JS-RemoteFR-DeVMX-P1-G2/",
                "_blank"
              )
            }
          >
            Take notes
          </button>
        </div>

        <div className="project">
          <img src={project_3} alt="website under construction" />
          <div className="projectDetails">
            <h3>ViViD</h3>
            <p>
              ViViD is a video plateform where you can enjoy watching
              aerial scenary
            </p>
            <h4>Tools</h4>
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>Scss</li>
            </ul>
          </div>
          <button>Not yet ...</button>
        </div> */}
      </div>
    </div>
  );
}
