import React, { useState } from "react";
import styled from "styled-components";
import { BsEmojiSmileFill } from "react-icons/bs";
import "../Css/ChatInput.css";

import Picker  from 'emoji-picker-react';
import { IoMdSend } from 'react-icons/io';
function ChatInput({handleSendMsg }) {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [msg, setMsg] = useState("");

    const handleEmojiPickerHideShow = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    const sendChat=(event)=>{
      event.preventDefault();
      if(msg.length > 0){
        handleSendMsg(msg);
        setMsg('');
      }
    }

    const handleEmojiClick =(event, emoji) => {
        let message = msg;
     message += emoji.emoji
        setMsg(message);
    };
    return (
      <div>
        <Container>
            <div className="button-container">
                <div className="emoji">
                    <BsEmojiSmileFill
                        onClick={handleEmojiPickerHideShow}
                        className="bs-emoji"
                    />
               {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick}/> }   
                </div>
            </div>

            <form className="input-container" onSubmit={(e)=>sendChat(e)}>
                <input
                    className="input"
                    type="text"
                    placeholder="type your message here"
                    value={msg}
                    onChange={(e)=>setMsg(e.target.value)}
                />
                <button className="btn-chatinput" type="submit">
                    <IoMdSend/>
                </button>
            </form>
        </Container>
        </div>
    );
}

const Container = styled.div`

display: grid;
align-items: center;
width:100vw !important;

background-color:orangered !important;
color:black;
grid-template-columns:5rem 95rem!important;
  
  //   display: flex;
  //   align-items: center;
  //   color: white;
  //   gap: 1rem;
  //   .emoji {
  //     position: relative;
  //     svg {
  //       font-size: 1.5rem;
  //       color: #ffff00c8;
  //       cursor: pointer;
  //     }
  //     .EmojiPickerReact{
  //       position: absolute;
  //       top: -500px;
  //       background-color:orangered;
  //       box-shadow: 0 5px 10px #9a86f3;
  //       border-color: #9a86f3;
  //       .emoji-scroll-wrapper::-webkit-scrollbar {
  //         background-color: #080420;
  //         width: 5px;
  //         &-thumb {
  //           background-color: #9a86f3;
  //         }
  //       }
  //       .emoji-categories {
  //         button {
  //           filter: contrast(0);
  //         }
  //       }
  //       .emoji-search {
  //         background-color: transparent;
  //         border-color: #9a86f3;
  //       }
  //       .emoji-group:before {
  //         background-color: #080420;
  //       }
  //     }
  //   }
  // }
  // .input-container {
  //   width: 100%;
  //   border-radius: 2rem;
  //   display: flex;
  //   align-items: center;
  //   gap: 2rem;
  //   background-color: #ffffff34;
  //   input {
  //     width: 90%;
  //     height: 60%;
  //     background-color: transparent;
  //     color: white;
  //     border: none;
  //     padding-left: 1rem;
  //     font-size: 1.2rem;
  //     &::selection {
  //       background-color: #9a86f3;
  //     }
  //     &:focus {
  //       outline: none;
  //     }
  //   }
  //   button {
  //     padding: 0.3rem 2rem;
  //     border-radius: 2rem;
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     background-color: #9a86f3;
  //     border: none;
  //     // @media screen and (min-width: 720px) and (max-width: 1080px) {
  //     //   padding: 0.3rem 1rem;
  //     //   svg {
  //     //     font-size: 1rem;
  //     //   }
  //     // }
  //     svg {
  //       font-size: 2rem;
  //       color: white;
  //     }
  //   }
  // }
`;
export default ChatInput;
