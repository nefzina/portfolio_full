import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      .post(`${import.meta.env.VITE_BACKEND_URL}/tools`)
      .then((res) => {
        if (res.status === 201) setMsg("done");
      })
      .catch((err) => console.error(err));
  };

  const HandleDelete = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/tools`)
      .then((res) => {
        if (res.status === 201) setMsg("done");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="dashboard">
      <Link to="/Home">back</Link>
      <button className="onglet" type="button" onClick={() => setTab(1)}>
        Projects
      </button>
      <button className="onglet" type="button" onClick={() => setTab(2)}>
        Tools
      </button>

      <div className={tab === 1 ? "proj" : "hide"}>projets</div>
      <div className={tab === 2 ? "techno" : "hide"}>
        <table>
          <tr>
            <th>Tools List</th>
            <th> </th>
          </tr>

          {tools &&
            tools.map((tool) => (
              <tr key={tool.name}>
                <td>{tool.name}</td>
                <td>
                  <button type="button" onClick={(e) => HandleDelete(e)}>
                    X
                  </button>
                </td>
              </tr>
            ))}
        </table>

        <form onSubmit={(e) => HandlePost(e)}>
          <label htmlFor="newTech">Add language / framework / tool</label>
          <input
            type="text"
            id="newTech"
            value={language}
            placeholder="Pyhton ..."
            onChange={(e) => setLanguage(e.target.value)}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
}
