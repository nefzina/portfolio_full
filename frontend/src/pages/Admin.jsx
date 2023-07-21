import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import left from "../assets/left-arrow.png";
import remove from "../assets/remove.png";
import ProjectModif from "../components/ProjectModif";

export default function Admin() {
  const [tab, setTab] = useState(1);
  const [tools, setTools] = useState();
  const [language, setLanguage] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/tools`)
      .then((res) => setTools(res.data))
      .catch((err) => console.error(err));
  }, [msg]);

  const HandlePost = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/tools`, { name: language })
      .then((res) => {
        if (res.status === 201) setMsg("done");
      })
      .catch((err) => {
        console.error(err);
        setMsg("error");
      });

    setLanguage("");
    setTimeout(() => setMsg(""), 4000);
  };

  const HandleDelete = (e, id) => {
    e.preventDefault();
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/tools/${id}`)
      .then((res) => {
        if (res.status === 204) setMsg("done");
      })
      .catch((err) => {
        console.error(err);
        setMsg("error");
      });

    setTimeout(() => setMsg(""), 4000);
  };

  return (
    <div className="dashboard">
      <button className="back" type="button">
        <Link to="/Home">
          <img src={left} alt="back-arrow" />
        </Link>
      </button>
      <p className={msg === "done" ? "pop" : "hide"}>
        Modification are successfully applied !
      </p>
      <p className={msg === "error" ? "pop" : "hide"}>Error! Try again !</p>

      <div className="tabs">
        <button className="tab" type="button" onClick={() => setTab(1)}>
          Projects
        </button>
        <button className="tab" type="button" onClick={() => setTab(2)}>
          Tools
        </button>
      </div>
      {tab === 1 && <ProjectModif msg={msg} setMsg={setMsg} tools={tools} />}

      <div className={tab === 2 ? "techno" : "hide"}>
        <form onSubmit={(e) => HandlePost(e)}>
          <label htmlFor="newTech">Add language / framework / tool</label>
          <div>
            <input
              type="text"
              id="newTech"
              value={language}
              placeholder="Pyhton ..."
              onChange={(e) => setLanguage(e.target.value)}
            />
            <input type="submit" value="Add" className="add" />
          </div>
        </form>

        <table>
          <tr>
            <th>Tool Name</th>
            <th>Remove</th>
          </tr>
          {tools &&
            tools.map((tool) => (
              <tr key={tool.name}>
                <td>{tool.name}</td>
                <td className="remove">
                  <button
                    type="button"
                    value={tool.id}
                    onClick={(e) => HandleDelete(e, tool.id)}
                  >
                    <img src={remove} alt="remove" />
                  </button>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}
