import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Welcome() {
  const [userName, setUserName] = useState("");

const fetchName = async () => {
  setUserName(
    await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    ).username
  );
}




  useEffect(()=>{
    fetchName();
  }, []);
  return (
    <Container>
      <img src="https://i.pinimg.com/originals/84/8c/34/848c342a56e7854dec45b9349c21dfe5.gif" alt="robot" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h1>Have a Nice Day</h1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top:5rem !important
  ;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color:blue;
    font-size:5rem;
  }
`;




// import React from 'react';
// import styled from 'styled-components'
// import "../Css/Welcome.css"

// function Welcome({currentUser,contacts}) {
//   return (
// <div>
//     <Container>

  
//     <div className='logo-welcome'>
//       <img className='logo-robot' src="https://i.pinimg.com/originals/84/8c/34/848c342a56e7854dec45b9349c21dfe5.gif" alt='Robot' />

// <h1 className='h1-welcome'> 
//   Welcome,
//   <span>{contacts.username}</span>
//   </h1> 
//   </div>
  
//   <h4 className='h4-welcome'> 
//     Please select a chat to Start the chat
//   </h4>
 
   
//    </Container>
//    </div>
//   )
// }
// const Container  =  styled.div`
// display:flex;
// justify-content:center;
// align-items:center;
// color:white;
// flex-direction:column;






// `;
// export default Welcome