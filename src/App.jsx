import ClockHeading from "./components/ClockHeading";
import ClockMotive from "./components/ClockMotive";
import CurrentTime from "./components/CurrrentTime";
import IndiaDigitalClock from "../page/IndiaDigitalClock";
import DigitalWatch from "../page/DigitalClock";
import Header from "./components/Header";
import { Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="route-container">
        <Routes>
          <Route
            path="/"
            element={
              <div id="main-div">
                <center>
                  <ClockHeading></ClockHeading>
                  <ClockMotive></ClockMotive>
                  <CurrentTime></CurrentTime>
                  <Link to="/india-digital-clock" className="btn btn-primary">
                    Open Digital Clock Page
                  </Link>
                </center>
              </div>
            }
          />
          <Route
            path="/india-digital-clock"
            element={
              <>
                <div className="text-center mt-3">
                  <Link to="/" className="btn btn-secondary">
                    Back to Home
                  </Link>
                </div>
                <IndiaDigitalClock></IndiaDigitalClock>
              </>
            }
          />
          <Route
            path="/digital-watch"
            element={
              <>
                <div className="text-center mt-3">
                  <Link to="/" className="btn btn-secondary">
                    Back to Home
                  </Link>
                </div>
                <DigitalWatch />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
