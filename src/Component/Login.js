import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import "../Css/Register.css";
import axios from "axios";
import { loginRoute, registerRoute } from "../utils/apihelpers";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
// use effect used to run the code operatin when first time is loaded
//   useEffect(()=>{
// if(localStorage.getItem("chatapp-user")){

// navigate("/chat")

// }
// },[])

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]:event.target.value});
  };

  //  to validate that form for errors using toastify
  const validateForm = () => {
    const { username,password} = values;
    if (username==="" || username.length<3) {
      toast.error("Incorrect username", toastOptions);
      return false;
    } else if (password==="") {
      toast.error("Incorrect username or password", toastOptions);
      return false;
    }

    return true;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("in validation",registerRoute)
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.message, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user,toastOptions)
        );

        navigate("/chat");
      }
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
              minLength={3}
            />
            <input
              type="password"
              placeholder="enter your password"
              name="password"
              onChange={(e) => handleChange(e)}
              minLength={8}
            />
          </div>
          <div className="footer-box">
            <button type="submit">
              Login
            </button>

            <span>
              Don't have an account ?
              <button>
                <a href="/Register">SignUp</a>
              </button>
            </span>
          </div>
        </form>
      </FormContainer>
      <ToastContainer />
    </div>
  );
}

const FormContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center !important;
  padding: 30px;
  width: 100vw;
  height: 60vh;
  top: 100px !important;
`;
export default Login;
