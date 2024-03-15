import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <Link to={"/"} >Home</Link>
      <Link to={"/register"} >resgister</Link>
      <Link to={"/login"} >login</Link>
      <Link to={"/customer"} >customer</Link>
    </div>
  )
}

export default Navbar
