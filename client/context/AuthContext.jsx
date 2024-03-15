import React, { createContext, useEffect, useState } from "react";
import axios from "axios"

const AuthContext = createContext();

function AuthContextProvider(props) {
  /* create a funciton that sends a call to server asking for cookies.token  
    from client to server as http auth.route
    if it exists ? true : false 
    assign it to state loggedIn
    send it through a context provider*/
  const [loggedIn, setLoggedIn] = useState(undefined);

  //    make request
  async function getLoggedIn() {
    const loggedInResp = await axios.get(
      "http://localhost:2020/api/auth/loggedIn"
    );
    setLoggedIn(loggedInResp.data); // bool true/false
  }

  // on component start
  useEffect(() => {
    getLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {/* components has access to bool value and the function 
      in case is first time logged in or nned to rehydrate */}
      {props.children} {/*to render router*/}
    </AuthContext.Provider>
  );
}

export default AuthContext
export {AuthContextProvider};
