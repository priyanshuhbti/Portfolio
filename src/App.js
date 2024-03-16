
import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Form  from "./components/Form";
import { Routes ,Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import BusiReg from "./components/BusiRegi";
import UserProfile from "./components/UserProf";




function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/Contact" element={<Contact/>}  />
      <Route path="/Project" element={<Project />}  />
      <Route path="/About" element={<About />}  />
      <Route path="/Form" element={<Form />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/Busy" element={<BusiReg/>} />
      <Route path="/User" element={<UserProfile/>} />

      

    </Routes>
    
    
    
    
    
    </>
  );
}

export default App;
