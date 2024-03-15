import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);

  async function login(e) {
    e.preventDefault();
    try {
      const loginData = { email, password };
      await axios.post("http://localhost:2020/api/auth/login", loginData);
      getLoggedIn();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
