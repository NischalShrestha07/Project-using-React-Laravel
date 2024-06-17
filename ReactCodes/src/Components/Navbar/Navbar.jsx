import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {

  return (
    <>
      <nav className="navbar">
        <div className="left">
          <div className="logo">NewsPortalWebsite</div>
          <div className="navbar-links">

            <Link to={"/"}>Home</Link>
            <Link to={"/createpost"} > Create Post</Link>
            <Link to={"/readpost"}>Read Post</Link>
            <Link to={"/updatepost"} > Update Post</Link>
            <Link to={"/deletepost"}> Delete Post</Link>
          </div >
        </div >
        <div className="right">
          <Link to="#login">Login</Link>
        </div>
      </nav >



    </>
  )
}

export default Navbar
