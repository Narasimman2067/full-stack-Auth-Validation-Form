// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// import styled from "styled-components";
// import { allUsersRoute } from "../utils/apihelpers";

// import Contacts from "../Component/Contacts";


// export default function Chat() {
//   const navigate = useNavigate();
 
//   const [contacts, setContacts] = useState([]);
//   const [currentChat, setCurrentChat] = useState(undefined);
//   const [currentUser, setCurrentUser] = useState(undefined);
//   useEffect(()=>async () => {
//     if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
//       navigate("/login");
//     } else {
//       setCurrentUser(
//         await JSON.parse(
//           localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
//         )
//       );
//     }
//   }, []);
//   // useEffect(() => {
//   //   if (currentUser) {
//   //     socket.current = io(host);
//   //     socket.current.emit("add-user", currentUser._id);
//   //   }
//   // }, [currentUser]);

//   useEffect(()=>async () => {
//     if (currentUser) {
//       if (currentUser.isAvatarImageSet) {
//         const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
//         setContacts(data.data);
//       } else {
//         navigate("/setAvatar");
//       }
//     }
//   }, [currentUser]);
//   const handleChatChange = (chat) => {
//     // setCurrentChat(chat);
//   };
//   return (
//     <>
//       <Container>
//         <div className="container">
//           <Contacts contacts={contacts} changeChat={handleChatChange} />
//           {/* {currentChat === undefined ? (
//             <Welcome />
//           ) : (
//             <ChatContainer currentChat={currentChat} socket={socket} />
//           )} */}
//         </div>
//       </Container>
//     </>
//   );
// }

// const Container = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 1rem;
//   align-items: center;
//   background-color: #131324;
//   .container {
//     height: 85vh;
//     width: 85vw;
//     background-color: #00000076;
//     display: grid;
//     grid-template-columns: 25% 75%;
//     @media screen and (min-width: 720px) and (max-width: 1080px) {
//       grid-template-columns: 35% 65%;
//     }
//   }
// `;



import React, { useEffect, useState } from "react";
// import "../Css/Chat.css";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

import Contacts from "./Contacts";
import axios from "axios";
import { allUsersRoute } from "../utils/apihelpers";
import ResponsiveAppBar from "./Header";

function Chat() {
const navigate =useNavigate()
const [contacts,setContacts]=useState([]);

const[currentUser,setCurrentUser]=useState(undefined)
const[user,setUser]=useState(undefined)

useEffect(()=>async () => {
      if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
        navigate("/login");
      } else {
        setCurrentUser(
          await JSON.parse(
            localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
          )
        );
      }
    }, []);




// useEffect(()=>async()=>{
//   console.log(currentUser)
//   if(!localStorage.getItem("chatapp-user")){
  
//       navigate("/login")
//   }
 
//   else{
//     setCurrentUser(await JSON.parse((localStorage.getItem("chatapp-user"))))
//   }
// },[])



useEffect(()=>async()=>{
  if(currentUser){
    if(currentUser.isAvatarImageSet){
      const data =await axios.get(`${allUsersRoute}/${user._id}`)
      setContacts(data.message)
    }
  else{
    navigate("/setavatar")
  }
  }
  
  
  },[currentUser,user])
 
    
    
   
  
  



  return (
  
<div>
  <Container>
    <div className="container">
    <Contacts contacts={contacts} currentUser={currentUser}/>
    </div>
  </Container>
</div>

  

  );
} 


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
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
      grid-template-columns: 45% 55%;
    }
  }
`;
export default Chat


// // import React, { useEffect, useState, useRef } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // // import { io } from "socket.io-client";
// // import styled from "styled-components";
// // import { allUsersRoute } from "../utils/apihelpers";
// // // import ChatContainer from "../components/ChatContainer";
// // import Contacts from "../Component/Contacts";
// // // import Welcome from "../components/Welcome";
// // import "../Css/Chat.css"
// //  function Chat() {
// //   const navigate = useNavigate();
// //   // const socket = useRef();
// //   const [contacts, setContacts] = useState([]);
// //   const [currentChat, setCurrentChat] = useState(undefined);
// //   const [currentUser, setCurrentUser] = useState(undefined);
// //   useEffect(()=>async () => {
// //     if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
// //       navigate("/login");
// //     } else {
// //       setCurrentUser(
// //         await JSON.parse(
// //           localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
// //         )
// //       );
// //     }
// //   }, []);
// //   // useEffect(() => {
// //   //   if (currentUser) {
// //   //     socket.current = io(host);
// //   //     socket.current.emit("add-user", currentUser._id);
// //   //   }
// //   // }, [currentUser]);

// //   useEffect(()=>async () => {
// //     if (currentUser) {
// //       if (currentUser.isAvatarImageSet) {
// //         const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
// //         setContacts(data.data);
// //       } else {
// //         navigate("/setAvatar");
// //       }
// //     }
// //   }, [currentUser]);
// //   const handleChatChange = (chat) => {
// //     setCurrentChat(chat);
// //   };
// //   return (
// //     <>
// //       <Container>
// //         <div className="container">
// //           <Contacts contacts={contacts} changeChat={handleChatChange} />
// //           {/* {currentChat === undefined ? (
// //             <Welcome />
// //           ) : (
// //             <ChatContainer currentChat={currentChat} socket={socket} />
// //           )} */}
// //         </div>
// //       </Container>
// //     </>
// //   );
// // }


// // const Container=styled.div`
// // width:100vw;
// // height:100vh;
// // justify-content:center;
// // align-items:center;
// // display:flex;
// // flex-direction:column;
// // background-color:#131324;
// // gap:1rem;
// // `;