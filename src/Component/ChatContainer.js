import React from 'react'
import styled from "styled-components";
import "../Css/ChatContainer.css";
import Logout from './Logout';
import ChatInput from './ChatInput';
import Messages from './Messages';


function ChatContainer({currentChat}) {


const  handleSendMsg =async(msg)=>{

}








  return (
    <div>

        {currentChat && (
 <Container>
 <div className='chat-header'>
     <div className='user-details'>
         <div className="avatar">
         <img
 className="img"
 key={currentChat}
     src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
     alt="avatar"

   />
             <div className="username">
                 <h3>{currentChat.username}</h3>
             </div>
         </div>
     </div>
     <Logout/>
     
 </div>
<div className='chat-messages'></div>
<Messages/>
<ChatInput handleSendMsg={handleSendMsg}   />




<div className='chat-input'></div>



</Container>


        )}
       
    </div>
    
  
  )
}
const Container =styled.div`
padding-top:1rem;
overflow-x:hidden;



`;

export default ChatContainer