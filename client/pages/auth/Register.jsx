import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';


function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const{getLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate();


  async function register(e) {
    e.preventDefault();
    try {
      const registerData = { email, username, password, passwordVerify };
      await axios.post("http://localhost:2020/api/auth/signup", registerData);
      await getLoggedIn()
      navigate('/')
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={register}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="password"
          placeholder="repeat password"
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
