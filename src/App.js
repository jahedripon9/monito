import "./App.css";
import React from "react";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";


function App() {

  return (
    <div className="App">

      <Router>
        <Routes>
        
          <Route exact path="/" element={<Home />} />
          <Route exact path="home" element={<Home />} />
        </Routes>
      </Router>

    </div>
  );
}





export default App;
