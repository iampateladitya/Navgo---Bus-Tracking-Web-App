import React from 'react';
import '../style/navbar.scss';
import { Link, NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <nav>
        <div className="logo">
          <img src={"../assets/logo.jpeg"} alt="" />
            <Link to="/">NAVGO</Link>
        </div>
        <div className="nav-btn">
            <button className='btn'>Login</button>
            <button className='btn'>Signup</button>
        </div>
    </nav>
  )
}

export default navbar
