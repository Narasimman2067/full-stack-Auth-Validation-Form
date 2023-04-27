import React, { useEffect, useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import "../Css/Register.css";
import axios from "axios";
import { registerRoute } from "../utils/apihelpers";
import {useNavigate} from "react-router-dom"


function Register() {
  const navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem("chatapp-user")){
    
    navigate("/register")
    
    }
    },[])

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  //  to validate that form for errors using toastify
  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (username.length < 3) {
      toast.error(
        "Userusername should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }

    return true;
  };
  const handleSubmit = async(event) => {
    event.preventDefault();
    if(handleValidation()) {
      console.log("in validation",registerRoute)
      const { password,username, email } = values
      const {data} = await axios.post(registerRoute, {
        username,
        email,
        password,
        
      }
      );
      if(data.status === false){
          toast.error(data.message,toastOptions)
      }
      if(data.status === true){
        localStorage.setItem(process.env.REACT_APP_LOCALHOST_KEY,JSON.stringify(data.user))
      }
      navigate("/welcome")
      
     
    }
  };

  return (
    <div>
      <FormContainer className="auth-box">
        <form 
          className="controll-div"
          onSubmit={(event) => handleSubmit(event)}
        >
          <div className="brand-logo">
            <img
              src="https://play-lh.googleusercontent.com/zWhdpn-2_QjyoDmrnR1W8s2BZ1D6OvR3MDSCT5g1BX0aVrZB3B6Lw91gIzZ02UbF1ZGS"
              alt=""
            />
            <h1>Chat Freind</h1>
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="enter your username"
              name="username"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="email"
              placeholder="enter your email"
              name="email"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="password"
              placeholder="enter your password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="password"
              placeholder="enter Confirm password"
              name="confirmPassword"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="footer-box">
            <button type="submit" className="create-btn">
              Create User
            </button>

            <span>
              Already have an account ?
              <button>
                <a href="/login">Login</a>
              </button>
            </span>
          </div>
        </form>
      </FormContainer>
      <ToastContainer />
    </div>
  )
};

const FormContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center !important;
  padding: 30px;
  width: 100vw;
  height: 60vh;
  top: 10rem !important;
`;
export default Register;
