import { Button } from "@mui/material";
import React from "react";
import "../Css/Home.css";
function Home() {
  return (
    <div
      className="home-div"
      style={{
        display: "flex",
        flexDirection: "column",
        border: "5px solid white",
        justifyContent: "center",
        alignItems: "center",
        gap: "3rem",
        color: "white",
        margin: "5rem",
        padding: "5rem 2rem",
        borderRadius: "5rem",
        fontSize: "2rem",
        fontFamily: "Helvetica Neuv",
      }}
    >
      <div
        style={{
          background: "blue",
          padding: "1rem 1rem",
          marginTop: "0",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          borderRadius:"2rem",
        }}
      >
        <h1>Welcome to OUr App,</h1>

        <h2>Register or login </h2>
      </div>

      <a href="/register">
        <Button variant="contained" color="primary">
          {" "}
          Register
        </Button>
      </a>
      <a href="/login">
        <Button variant="contained" color="secondary">
          {" "}
          Login
        </Button>
      </a>
    </div>
  );
}

export default Home;
