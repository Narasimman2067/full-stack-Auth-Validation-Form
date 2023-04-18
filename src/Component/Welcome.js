import React from 'react';
import styled from 'styled-components'
import "../Css/Welcome.css"

function Welcome({currentUser}) {
  return (
<div>
    <Container>

  
    <div className='logo-welcome'>
      <img className='logo-robot' src="https://i.pinimg.com/originals/84/8c/34/848c342a56e7854dec45b9349c21dfe5.gif" alt='Robot' />

<h1 className='h1-welcome'> 
  Welcome,
  <span>{currentUser.username}</span>
  </h1> 
  </div>
  
  <h4 className='h4-welcome'> 
    Please select a chat to Start the chat
  </h4>
 
   
   </Container>
   </div>
  )
}
const Container  =  styled.div`
display:flex;
justify-content:center;
align-items:center;
color:white;
flex-direction:column;






`;
export default Welcome