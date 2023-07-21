import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import remove from "../assets/remove.png";

export default function ProjectModif({ msg = "", setMsg, tools }) {
  const [projects, setProjects] = useState();
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  // const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  // const [selected, setSelected] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projects`)
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, [msg]);

  const HandlePost = (e) => {
    e.preventDefault();
    setMsg("");
  };
  const HandleDelete = (e, id) => {
    e.preventDefault();
    console.warn(id);
  };
  const handleChange = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    console.warn(value);
  };

  return (
    <div className="proj">
      <button
        type="button"
        className="add"
        onClick={() => setOpenModal(!openModal)}
      >
        Add project
      </button>

      <form
        className={openModal ? "modal" : "hide"}
        onSubmit={(e) => HandlePost(e)}
      >
        <p className="modalTitle">Add a new project</p>
        <button
          type="button"
          className="close"
          onClick={() => setOpenModal(!openModal)}
        >
          <img src={remove} alt="close" />
        </button>
        <div className="flex">
          <div className="left">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={title}
              placeholder="DevMX ..."
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="image">screenshot</label>
            <input
              type="file"
              id="image"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="link">Link</label>
            <input
              type="text"
              id="link"
              value={link}
              placeholder="https:// ..."
              onChange={(e) => setLink(e.target.value)}
            />
            <label htmlFor="public">is Public</label>
            <input
              type="checkbox"
              id="public"
              value={isPublic}
              onChange={(e) => setIsPublic(e.target.value)}
            />
          </div>
          <div className="right">
            <label htmlFor="desc">Description</label>
            <textarea
              type="text"
              id="desc"
              value={description}
              placeholder="..."
              onChange={(e) => setDescription(e.target.value)}
            />

            <label htmlFor="public">Tools</label>
            <select
              placeholder="Type tool name"
              multiple
              onChange={(e) => handleChange(e)}
            >
              {tools && tools.map((t) => <option key={t.id}>{t.name}</option>)}
            </select>
          </div>
        </div>

        <input type="submit" value="Add" className="add" />
      </form>

      <table>
        <tr>
          <th className="col1">Projects</th>
          <th className="col2">Details</th>
          <th className="col3">Remove</th>
        </tr>
        {projects &&
          tools &&
          projects.map((project) => (
            <tr key={project.id}>
              <td>
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}${project.image}`}
                  alt="project"
                  className="appImg"
                />
              </td>
              <td>
                <ul>
                  <li className="dt">Title: {project.title}</li>
                  <li className="dt">Link: {project.link}</li>
                  <li className="dt">
                    Description:
                    <br />
                    {project.description}
                  </li>
                  <li className="dt">is Public: {project.isPublic}</li>
                  <li className="dt">Tools:</li>

                  <ul>
                    {tools.map((t) => (
                      <li>{t.name}</li>
                    ))}
                  </ul>
                </ul>
              </td>

              <td className="remove">
                <button
                  type="button"
                  value={project.id}
                  onClick={(e) => HandleDelete(e, project.id)}
                >
                  <img src={remove} alt="remove" />
                </button>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}

ProjectModif.propTypes = {
  msg: PropTypes.string.isRequired,
  setMsg: PropTypes.func.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
};
