import React from 'react'
import Navbar from '../components/navbar'
import "../style/feature1page.scss"
import { Link, NavLink } from "react-router-dom";

const feature1page = () => {
  return (
    <>
    <Navbar />
    <div className="main">
        <div className="heading">
            <h1>Live Track Your College Bus</h1>
        </div>
        <div className="img-wrapper">
            <img src={"../assets/mapgif.gif"} alt="" />
        </div>
        <button id="get_s_btn">
          <Link to="/feature2">Next</Link>
        </button>
    </div>
    </>
  )
}

export default feature1page
