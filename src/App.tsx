import React from "react";
import NavBar from "./components/navbar";
import Person from "./components/Person";
// import closePage from"./components/closingPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Person />
      {/* <closePage/> */}
    </div>
  );
}

export default App;
