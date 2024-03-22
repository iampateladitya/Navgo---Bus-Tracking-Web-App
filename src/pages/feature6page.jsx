import React from 'react'
import Navbar from '../components/navbar'
import "../style/feature1page.scss"
import { Link, NavLink } from "react-router-dom";

const feature6page = () => {
  return (
    <>
    <Navbar />
    <div className="main">
        <div className="heading">
            <h1>Bus Maintenance Record Keeping</h1>
        </div>
        <div className="img-wrapper">
            <img src={"../assets/bus_maintenance.gif"} alt="" />
        </div>
        <button id="get_s_btn">
        <Link to="/mainsite">Get's Started</Link>
        </button>
    </div>
    </>
  )
}

export default feature6page
