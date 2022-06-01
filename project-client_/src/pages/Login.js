import "../cssFiles/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import decode from "jwt-decode";

import axios from "axios";

export const Login = () => {
  useEffect(() => {
    localStorage.removeItem("token");
  }, []);
  const navigate = useNavigate();
  const [formData, setFromData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let data = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://localhost:5001/api/auth",
        data,
        config
      );
      console.log(response);
      localStorage.setItem("token", response.data.token);
      console.log(decode(response.data.token));
      window.location.replace("http://localhost:3000/browse");

      // navigate("/browse");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="login-page">
      <div className="form">
        <h1>Login</h1>
        <form action="signin" onSubmit={(e) => onSubmit(e)} id="signin">
          <h4>Username:</h4>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            placeholder="Enter your email"
          />
          <div id="usernameerr"></div>
          <h4>Password:</h4>
          <input
            type="password"
            id="pass"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            placeholder="Enter your password"
          />
          <div id="passeerr"></div>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};
