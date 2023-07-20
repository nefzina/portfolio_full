import { useEffect, useState } from "react";
import axios from "axios";
import Pdf from "../assets/AmaniNEFZI_Dev_Full_Stack_2023.pdf";

export default function Description() {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/tools`)
      .then((res) => setTools(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="description">
      <div className="titleWrapper">
        <p className="myName">Amani NEFZI</p>
        <h1 className="title">Full Stack Web Developer</h1>
      </div>

      <p className="myDescription">
        Currently developing my proficiency in Web Development within the Wild
        Code School bootcamp.
      </p>

      <div className="cards">
        <div className="flipCard">
          <div className="flipInner">
            <p className="objective front">
              I&apos;m looking for an apprenticeship in Toulouse
            </p>
            <div className="jobDetails back">
              <ul className="QandA">
                <li>When ? </li>
                <li>September</li>
              </ul>
              <ul className="QandA">
                <li>How Long ?</li>
                <li>1 year</li>
              </ul>

              <ul className="QandA">
                <li>Rythm ? </li>
                <li>
                  3 weeks in company <br /> 1 week in bootcamp
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flipCard">
          <div className="flipInner">
            <h3 className="front">Skills</h3>
            <ul className="back">
              {tools.map((tool) => (
                <li key={tool.name}>{tool.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <button type="button" onClick={() => window.open(Pdf, "_blank")}>
        My CV
      </button>

      {/* <div id="progressBar"></div>
      <p id='progress'>In progress ...</p> */}
    </div>
  );
}
