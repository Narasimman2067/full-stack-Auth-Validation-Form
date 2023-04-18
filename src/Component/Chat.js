


import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { allUsersRoute } from "../utils/apihelpers";

import Contacts from "../Component/Contacts";

import "../Css/Chat.css"
import Welcome from './Welcome';
import ChatContainer from "./ChatContainer";


const  Chat=()=>{


  const navigate = useNavigate();
  // const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  
  
 
  const fetchData =async()=>{
    if (!localStorage.getItem("chatapp-user")) {
      navigate("/login");
    } else {
      setCurrentUser(
        await JSON.parse(
          localStorage.getItem("chatapp-user")
        )
      );
      setIsLoaded(true)
    }
  }
  useEffect(() => {
    fetchData()
   }, []);

  const userData=async () => {
    if (currentUser) {
      if (currentUser.isAvatarImageSet) {
        const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
        setContacts(data.data);
      } else {
        navigate("/setavatar");
      }
    }
  }
   useEffect(() => {
userData();
   },
    [currentUser]
  );

  const handleChangeChat = (chat) => {
    setCurrentChat(chat);
  };
  return (
    <>
      <Container>
        <div className="container">
          <Contacts contacts={contacts} currentUser={currentUser} changeChat={handleChangeChat} />
          {isLoaded && currentChat === undefined ? (
            <Welcome currentUser={currentUser}/>
            ):(
            <ChatContainer  currentUser={currentUser} currentChat={currentChat} />
           )}
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
position:fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow-y:scroll !impportant;
  top:2rem;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 45% 65%;
    }
  }
`;
export default Chat;
