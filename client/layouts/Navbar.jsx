import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import LogoutBtn from "../pages/LogoutBtn";

function Navbar() {
  const { loggedIn } = useContext(AuthContext);//destructure loggedIn

  return (
    <div>
      <Link to={"/"}>Home</Link>
      {loggedIn === false && (
        <>
          <Link to={"/register"}>resgister</Link>
          <Link to={"/login"}>login</Link>
        </>
      )}
      {loggedIn === true && (
        <>
          <Link to={"/customer"}>customer</Link>
          <LogoutBtn />
        </>
      )}
    </div>
  );
}

export default Navbar;
