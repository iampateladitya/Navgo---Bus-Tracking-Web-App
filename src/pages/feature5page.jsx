import React from 'react'
import Navbar from '../components/navbar'
import "../style/feature1page.scss"
import { Link, NavLink } from "react-router-dom";

const feature5page = () => {
  return (
    <>
    <Navbar />
    <div className="main">
        <div className="heading">
            <h1>Smart arrival notification</h1>
        </div>
        <div className="img-wrapper">
            <img src={"../assets/bus_arrival_notify.gif"} alt="" />
        </div>
        <button id="get_s_btn">
        <Link to="/feature6">Next</Link>
        </button>
    </div>
    </>
  )
}

export default feature5page
