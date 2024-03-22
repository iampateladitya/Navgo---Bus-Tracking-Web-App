import React from 'react'
import Navbar from '../components/navbar'
import "../style/feature1page.scss"
import { Link, NavLink } from "react-router-dom";

const feature2page = () => {
  return (
    <>
    <Navbar />
    <div className="main">
        <div className="heading">
            <h1>Dynamic Bus Routing</h1>
        </div>
        <div className="img-wrapper">
            <img src={"../assets/bus_routing.gif"} alt="" />
        </div>
        <button id="get_s_btn">
        <Link to="/feature3">Next</Link>
        </button>
    </div>
    </>
  )
}

export default feature2page
