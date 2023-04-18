import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { BiPowerOff } from 'react-icons/bi';
import { IconBase } from "react-icons/lib";
import "../Css/Logout.css";




function Logout() {

  const navigate=useNavigate()
const handleClick =async()=>{
  localStorage.clear();
  navigate("/login")
}

  return (
  
  <Button onClick={handleClick}>
    <IconBase>
        <BiPowerOff/>

    </IconBase>



  </Button>
  )
}
const Button = styled.button`
display:flex;
justify-content:center;
align-items:center;
padding:0.5rem;
border-radius:0.5rem;
background-color:#9a8024;
border:none;
cursor:pointer;

`;
export default Logout;
