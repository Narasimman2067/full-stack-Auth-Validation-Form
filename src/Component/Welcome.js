import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logout from "./Logout";

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
      <Logout/>Logout
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



