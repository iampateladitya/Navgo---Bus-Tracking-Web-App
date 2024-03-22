import React from 'react'
import Navbar from '../components/navbar'
import "../style/feature1page.scss"
import { Link, NavLink } from "react-router-dom";

const feature3page = () => {
  return (
    <>
    <Navbar />
    <div className="main">
        <div className="heading">
            <h1>Bus Information Management</h1>
        </div>
        <div className="img-wrapper">
            <img src={"../assets/bus_information.gif"} alt="" />
        </div>
        <button id="get_s_btn">
        <Link to="/feature4">Next</Link>
        </button>
    </div>
    </>
  )
}

export default feature3page
