import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

 function LogoutBtn() {
  // call auth context function & get token from cookie
  const { getLoggedIn } = useContext(AuthContext);
  let  navigate= useNavigate();

    
  async function logout() {
    // return empty cookie
    await axios.get("http://localhost:2020/api/auth/logout");
    await getLoggedIn(); // refresh boolean
    navigate('/')
  }
  return (<><button onClick={logout}>Logout</button></>);
}

export default LogoutBtn;
