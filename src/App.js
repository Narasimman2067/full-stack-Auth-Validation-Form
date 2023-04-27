import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import * as React from "react"
import Register from "./Component/Register";
import Login from "./Component/Login";


import ResponsiveAppBar from "./Component/Header";
import Welcome from "./Component/Welcome";
import Home from "./Component/Home";


function App() {
  return (
    <div>
 
  <ResponsiveAppBar/>

    
    <BrowserRouter>
      <Routes>
     
      <Route path="/" element={<Home />} />
       
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
       


    
    
        
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;