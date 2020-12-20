import React from "react";
import useHover from "./components/Hooks/useHover";
// import Header from './Header';
import { BrowserRouter as  Router } from "react-router-dom";
import MainPage from './pages/MainPage';

function App() {
  const [hi, see] = useHover();

  return (
    <>
      <div ref={hi} id="start">
        {see ? (
          <Router>
           <MainPage />
           </Router>
        ) : (
          <div id="startpage" className="start-page">
          <h1>Hi</h1>
          <h3>Welcome to my Profile</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
