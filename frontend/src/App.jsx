import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import arrow from "./assets/right-arrow.png";

function App() {
  const [displayed, setDisplay] = useState(true);

  return (
    <BrowserRouter>
      <div className={displayed ? "onDisplay" : "notDisplayed"}>
        <div className="wrapper">
          <h1>
            Hello,
            <br /> I&apos;m Amani
          </h1>
          <div className="flex">
            <img src={arrow} alt="arrow" />
            <button type="button" onClick={() => setDisplay(false)}>
              <Link id="portfolio" to="/Home">
                Portfolio
              </Link>
            </button>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element="" />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
