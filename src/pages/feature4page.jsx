import React from 'react'
import Navbar from '../components/navbar'
import "../style/feature1page.scss"
import { Link, NavLink } from "react-router-dom";

const feature4page = () => {
  return (
    <>
    <Navbar />
    <div className="main">
        <div className="heading">
            <h1>Driver Information System</h1>
        </div>
        <div className="img-wrapper">
            <img src={"../assets/driver_information.gif"} alt="" />
        </div>
        <button id="get_s_btn">
        <Link to="/feature5">Next</Link>
        </button>
    </div>
    </>
  )
}

export default feature4page
