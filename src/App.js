
import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { Routes ,Route} from "react-router-dom";




function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/Contact" element={<Contact/>}  />
      <Route path="/Project" element={<Project />}  />
      <Route path="/About" element={<About />}  />


    </Routes>
    
    
    
    
    
    </>
  );
}

export default App;
