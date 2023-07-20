import axios from "axios";
import { useEffect, useState } from "react";
import inProgress from "../assets/construction_page.jpg";

export default function Projects() {
  const [projects, setProjects] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projects`)
      .then((res) => {
        if (res.status === 200) {
          res.data.map((project) =>
            axios
              .get(
                `${import.meta.env.VITE_BACKEND_URL}/toolsProject/${project.id}`
              )
              .then((response) => {
                if (response.status === 200) {
                  const toolsList = [];
                  response.data.map((tool) =>
                    axios
                      .get(
                        `${import.meta.env.VITE_BACKEND_URL}/tools/${
                          tool.tool_id
                        }`
                      )
                      .then((result) => {
                        toolsList.push(result.data.name);
                      })
                      .catch((err) => console.error(err))
                  );
                  project.tools = toolsList; // eslint-disable-line no-param-reassign
                }
              })
              .catch((err) => console.error(err))
          );
        }
        setProjects(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="wrapper">
        {projects &&
          projects.map((project) => (
            <div className="project" key={project.id}>
              <div className="imgBx">
                {project.image == null ? (
                  <img src={inProgress} alt="In progress" />
                ) : (
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}${project.image}`}
                    alt={project.title}
                  />
                )}
              </div>
              <div className="showDetails">
                <h2 className="projectTitle">{project.title}</h2>
                <p className="projectDescription">{project.description}</p>
                <h4>Tools</h4>
                <ul>
                  {project.tools &&
                    project.tools.forEach((x) => {
                      <li key={x}>{x}</li>;
                    })}

                  {/* {project.tools?.map((x) => <li key={x}>{x}</li>)} */}
                </ul>
                <button
                  type="button"
                  onClick={() => window.open(`${project.link}`, "_blank")}
                >
                  Click to visit
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
