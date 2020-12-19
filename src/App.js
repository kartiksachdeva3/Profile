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
          <div className="start-page">
          <h1>Hi...</h1>
          <h2>My Name is Kartik Sachdeva</h2>
          <h3>Welcome to my Profile</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
