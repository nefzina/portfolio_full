import Pdf from "../assets/AmaniNEFZI_Dev_Full_Stack_2023.pdf";

export default function Description() {
  return (
    <div className="description">
      <h1>Amani NEFZI</h1>
      <h2>Full Stack Web Developer</h2>
      <div className="flex">
        <div className="professionalProject">
          <p>
            Currently developing my proficiency in Web Development within the
            Wild Code School bootcamp.
          </p>
          <p>I&apos;m looking for an apprenticeship in Toulouse</p>
          <ul>
            <li>Start : September</li>
            <li>Duration : 1 year</li>
            <li>Rythm : 3 weeks company / 1 week bootcamp</li>
          </ul>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li>HTML</li>
            <li>Css</li>
            <li>React</li>
            <li>Scss</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MySql</li>
            <li>Python</li>
          </ul>
          <button type="button" onClick={() => window.open(Pdf, "_blank")}>
            My CV
          </button>
        </div>
      </div>
      {/* <div id="progressBar"></div>
      <p id='progress'>In progress ...</p> */}
    </div>
  );
}
