import React from "react";
import Projects from "./pages/Project";
import useHover from "./components/Hooks/useHover";
// import Header from './Header';
import { BrowserRouter as  Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [hi, see] = useHover();

  return (
    <div >
      <div ref={hi} id="start">
        {see ? (
          <Router>
           <Navbar />
           </Router>
        ) : (
          <div className="main-page">
          <h1>Hi...</h1>
          </div>
        )}
      </div>
      <div id="blank"> </div>
      <div id="Project" className="proj">
        <Projects />{" "}
      </div>
    </div>
  );
}

export default App;
