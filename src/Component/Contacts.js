import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import "../Css/Contacts.css";


function Contacts({ contacts, currentUser }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  useEffect(()=> {
    // const data = await JSON.parse(
    //   localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    // );
    console.log(currentUser)
    console.log(contacts)
    if(currentUser){
      setCurrentUserName(currentUser.username);
      setCurrentUserImage(currentUser.avatarImage);
    }
    // setCurrentSelected(contacts.length>0)
  
  }, [currentUser]);

  const changeCurrentChat = (index, contact) => {};

  return (
    
    <>
       {currentUserImage && currentUserName && (
        <Container1 >
          <div className="brand-img">
            <img
            className="brand-img-logo"
              src="https://play-lh.googleusercontent.com/zWhdpn-2_QjyoDmrnR1W8s2BZ1D6OvR3MDSCT5g1BX0aVrZB3B6Lw91gIzZ02UbF1ZGS"
              alt="logo"
            />
            <h2>ChatFriend</h2>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  className={`contact ${
                    index === currentSelected ?"selected ": ""
                  }`}
                  key={index}
                >

                  <div className="avatar1">
                  <img
                  className={`avatar1-img${
                    index === currentSelected ?"selected ": ""
                  }`}
                  key={index}
                  src={`data:image/svg+xml;base64,${currentSelected}`}
                  alt="avatar"
                  />
                  </div>
                  <div className="username1">
                    <h1>{contact.username}</h1>
                  </div>
                </div>
              );
            })}
              <div className="current-user2">
           <div className="avatar2">
            <img
            className="img"
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username2">
              <h1>{currentUserName}</h1>
            </div>
          </div>
          <div className="current-user2">
           <div className="avatar2">
            <img
            className="img"
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username2">
              <h1>{currentUserName}</h1>
            </div>
          </div>
          <div className="current-user2">
           <div className="avatar2">
            <img
            className="img"
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username2">
              <h1>{currentUserName}</h1>
            </div>
          </div>
          <div className="current-user2">
           <div className="avatar2">
            <img
            className="img"
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username2">
              <h1>{currentUserName}</h1>
            </div>
          </div>
          <div className="current-user2">
           <div className="avatar2">
            <img
            className="img"
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username2">
              <h1>{currentUserName}</h1>
            </div>
          </div> <div className="current-user2">
           <div className="avatar2">
            <img
            className="img"
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username2">
              <h1>{currentUserName}</h1>
            </div>
          </div> <div className="current-user2">
           <div className="avatar2">
            <img
            className="img"
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username2">
              <h1>{currentUserName}</h1>
            </div>
          </div>
          <div className="current-user2">
           <div className="avatar2">
            <img
            className="img"
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username2">
              <h1>{currentUserName}</h1>
            </div>
          </div>
          <div className="current-user2">
           <div className="avatar2">
            <img
            className="img"
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username2">
              <h1>{currentUserName}</h1>
            </div>
          </div>
          <div className="current-user2">
           <div className="avatar2">
            <img
            className="img"
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username2">
              <h1>{currentUserName}</h1>
            </div>
          </div>
          </div>
        </Container1>
      )} 
  
    </>
  );
}

const Container1 = styled.div`
display: grid;
grid-template-rows: 10% 75% 15%;
overflow: hidden !important;
background-color: #080420;
color:whitesmoke;
.brand-img {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  .brand-img-logo{
    height: 2rem;
  }
  h2 {
    color: white;
    text-transform: uppercase;
  }
}
.contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  gap: 0.8rem;
  .contact {
    background-color: #ffffff34;
    min-height: 5rem;
    cursor: pointer;
    width: 90% !important;
    border-radius: 0.2rem;
    padding: 0.4rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    transition: 0.5s ease-in-out;
   
    .avatar1 {
      .avatar1-img{
        height: 5rem;
      }
    }
    .username1 {
      h1 {
        color: white;
       
      }
    }
  }
  
  
}
.current-user2 {
  background-color:#ffffff34;
  display: flex;
  justify-content:left;
  align-items: center;
  gap: 1rem !important;
  height:10vh;
  padding:0.5rem;
  border-radius:0rem 1rem ;
  justify-items:left !important;
 overflow:hidden !important;
  width:18rem;
  .avatar2 {
  
    .img {
      display:flex;
      height: 3rem;      
      max-inline-size: 100%;
      
     
     
    }
    // .selected {
    //   background-color:orangered !important;
    //   border:5px solid black;
    // }
    
  }
 .username2 {
   h1{
      color: white;
        font-size:1.5rem;
        align-items:center;
        display:flex;
        justify-content:center;
        text-transform:capitalize;
    }
    .selected {
      background-color:#0123420 !important;
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    gap: 0.5rem;
    .username {
      h1 {
        font-size: 1rem;
      }
    }
  }
}
`;

export default Contacts;
// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import Logo from "../Images/loader.png"
// import "../Css/Contacts.css";


// function Contacts({ contacts, changeChat }) {
//   const [currentUserName, setCurrentUserName] = useState(undefined);
//   const [currentUserImage, setCurrentUserImage] = useState(undefined);
//   const [currentSelected, setCurrentSelected] = useState(undefined);
//   useEffect(()=>async () => {
//     const data = await JSON.parse(
//       localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
//     );
//     setCurrentUserName(data.username);
//     setCurrentUserImage(data.avatarImage);
//   }, []);
//   const changeCurrentChat = (index, contact) => {
//     setCurrentSelected(index);
//     changeChat(contact);
//   };
//   return (
//     <>
//       {currentUserImage && currentUserImage && (
        
//         <Container>
//           <div className="brand-img">
//             <img src={Logo} alt="logo" />
//             <h3>Chat Fr</h3>
//           </div>
//           <div className="contacts">
//             {contacts.map((contact, index) => {
//               return (
//                 <div
//                   key={contact._id}
//                   className={`contact ${
//                     index === currentSelected ? "selected" : ""
//                   }`}
//                   onClick={() => changeCurrentChat(index, contact)}
//                 >
//                   <div className="avatar">
//                     <img
//                       src={`data:image/svg+xml;base64,${contact.avatarImage}`}
//                       alt=""
//                     />
//                   </div>
//                   <div className="username">
//                     <h3>{contact.username}</h3>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <div className="current-user">
//             <div className="avatar">
//               <img
//                 src={`data:image/svg+xml;base64,${currentUserImage}`}
//                 alt="avatar"
//               />
//             </div>
//             <div className="username">
//               <h2>{currentUserName}</h2>
//             </div>
//           </div>
//         </Container>
//       )}
//     </>
//   );
// }
// const Container = styled.div`
//   display: grid;
//   grid-template-rows:10% 75% 15% !important;
//   overflow: hidden;
//   background-color: #080420;
//  `;

