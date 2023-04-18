import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Buffer } from "buffer";

import "../Css/Avatar.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { setAvatarRoute } from "../utils/apihelpers";
// import { setAvatarRoute } from "../utils/APIRoutes";

export default function SetAvatar() {
  const api = "https://api.dicebear.com/6.x/adventurer/svg?seed=Bailey"
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
 

  useEffect(() =>async() =>{
    if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))
    navigate("/login");
  }, []);

  const setProfilePicture = async () => {;
    if (selectedAvatar === undefined) {
      toast.error("Please select an avatar", toastOptions);
    } else {
      const user = await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      );

      const { data } = await axios.post(`${setAvatarRoute}/${user._id}`, {
        image: avatars[selectedAvatar],
      });
console.log(data)
      if (data.isSet) {
        user.isAvatarImageSet = true;
        user.avatarImage = data.image;
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(user)
        );
        navigate("/chat");
      } else {
        toast.error("Error setting avatar. Please try again.", toastOptions);
      }
    }
  }

  
  const fetchData =async()=>{
    const data =[];
    //  await here
    for (let i = 0; i < 6; i++) {
    const image = await axios.get(`${api}/${Math.round(Math.random() * 1000)}`);
    // ...
    const buffer = new Buffer(image.data);
        data.push(buffer.toString("base64"));
  }
  setAvatars(data);
  setIsLoading(false);
}

  
  useEffect(() => {
  fetchData()
},[]);
  return (
    <div className="avatar-main">
<div >
      {isLoading ?
  (<Container className="container-div">
    <img src="https://cdn.dribbble.com/users/1223630/screenshots/8115260/media/8145a871d9c4d67ec06e047ccc6574b4.gif" alt="loader" className="loader" />
  </Container>) 
  :(
    <Container className="container-div">
        <div className="title-container">
          <h1>Pick an Avatar as your profile picture</h1>
        </div>
        <div className="avatars">
          {avatars.map((avatar, index) => {
            return (
              <div className={`avatar ${selectedAvatar === index ? "selected" : ""
                }`}
              key={index}

              >
                <img
                  src={`data:image/svg+xml;base64,${avatar}`}
                  alt="avatar"
                  onClick={() => setSelectedAvatar(index)}
                />
              </div>
            );
          })}
        </div>
        <div className="btn">
        <button onClick={setProfilePicture} className="submit-btn">
          Set as Profile Picture
        </button>

        </div>
       
        <ToastContainer />
      </Container>
   


  )
  
   }
      
   
      </div> 
    </div>
  );
        }

const Container = styled.div`

`;
