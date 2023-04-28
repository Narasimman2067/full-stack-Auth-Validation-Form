


import React from "react";

import { BiPowerOff } from "react-icons/bi";
import styled from "styled-components";
import axios from "axios";
import { logoutRoute } from "../utils/apihelpers";
import "../Css/Logout.css"

export function Logout() {
 
  const handleClick = async () => {
    const id = await JSON.parse(
      localStorage.getItem("chatapp=user")
    )._id;
    const data = await axios.get(`${logoutRoute}/${id}`);
    if (data.status === 200) {
      localStorage.clear();
     
    }
   
  };
  return (
    <Button onClick={handleClick}>
      <a href="/login"> <BiPowerOff /></a>
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;

export default Logout;
