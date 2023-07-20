import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import arrow from "./assets/right-arrow.png";
import "./App.scss";

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
                Check my portfolio
              </Link>
            </button>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element="" />
        <Route path="/Home" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
