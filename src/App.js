import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import * as React from "react"
import Register from "./Component/Register";
import Login from "./Component/Login";
import Chat from "./Component/Chat";
import  SetAvatar  from "./Component/Avatar";
import Header from "./Component/Header";
import ResponsiveAppBar from "./Component/Header";


function App() {
  return (
    <div>
 
  <ResponsiveAppBar/>

    
    <BrowserRouter>
      <Routes>
     
      
      <React.Fragment>
      <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setavatar" element={<SetAvatar/>} />
        <Route path="/chat" element={<Chat />} />

      </React.Fragment>
    
        
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;