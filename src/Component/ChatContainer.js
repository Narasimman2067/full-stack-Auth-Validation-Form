import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../Css/ChatContainer.css";
import Logout from "./Logout";
import ChatInput from "./ChatInput";

import axios from "axios";
import { getAllMessageRoute, sendMessageRoute } from "../utils/apihelpers";





function ChatContainer({ currentChat,currentUser}) {
  

  const [messages,setMessages] =useState([])


  useEffect(()=>{
     const response=async()=>{
        await axios.post(getAllMessageRoute,{
      from:currentUser._id,
      to:currentChat._id,
      })
    }
    setMessages(response.messages)

    console.log(currentUser)
  },[currentChat,currentUser])
  





  
const handleSendMsg = async (message) => {

await axios.post(sendMessageRoute,{

from:currentUser.id,
to:currentChat.id,
message:message,


});



  };

  return (
    <div>
      {currentChat && 
        <Container>
          <div className="chat-header">
            <div className="user-details">
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
            <Logout />
          </div>

         <div className="chat-messages">

{
   messages && messages.map((message)=>{
return(
  <div>
    <div className={`message ${message.fromself ? "sended" : "received"}`}>
          <div className="content" >
                <p>
                  {messages.message}
                </p>

          </div>
    </div>
  </div>
)
  })
}

         </div>
          <ChatInput handleSendMsg={handleSendMsg} />
        </Container>
      }
    </div>
  );
}
const Container = styled.div`
  padding-top: 1rem;
  overflow-x: hidden;
  overFlow-y:scroll;

`;

export default ChatContainer;
