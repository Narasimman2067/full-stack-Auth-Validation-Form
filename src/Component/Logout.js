// import React from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import styled from "styled-components";
// import { BiPowerOff } from 'react-icons/bi';
// import { IconBase } from "react-icons/lib";
// import "../Css/Logout.css";




// function Logout() {

//   const navigate=useNavigate()
// const handleClick =async()=>{
//   localStorage.clear();
//   navigate("/login")
// }

//   return (
  
//   <Button onClick={handleClick}>
//     <IconBase>
//         <BiPowerOff/>

//     </IconBase>



//   </Button>
//   )
// }
// const Button = styled.button`
// display:flex;
// justify-content:center;
// align-items:center;
// padding:0.5rem;
// border-radius:0.5rem;
// background-color:#9a8024;
// border:none;
// cursor:pointer;

// `;
// export default Logout;





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
