import React from "react";
import "../style/landing_page.scss";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { BsPersonLinesFill } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";
import Navbar from "../components/navbar";
import { Link, NavLink } from "react-router-dom";

const landing_page = () => {
  return (
    <>
    <Navbar />
      <div className="hero">
        <div className="intro-content">
          <h1>Find</h1> <br />
          <h2>Your Bus !</h2> <br />
          <p>
            A Bus Management System is a comprehensive software solution
            designed to streamline and optimize the operations of bus fleets,
            providing efficient management tools for fleet managers, drivers,
            and passengers. This system integrates various features to enhance
            the overall efficiency, safety, and reliability of bus
            transportation services. Here is an overview of what a Bus
            Management System entails along with the highlighted features :
          </p>
          <br />
          {/* <div className="features">
           <h3> <FaMapMarkerAlt />Live Location Tracking</h3>
           <FaRoute /><h3>Dynamic Bus Routing</h3>
           <IoInformationCircle /><h3>Bus Information Management</h3>
           <BsPersonLinesFill /><h3>Driver Information System</h3>
           <MdNotificationsActive /><h3>Smart Arrival Notification</h3>
            <HiMiniWrenchScrewdriver /><h3>Bus Maintenance Record Keeping</h3>
            </div> */}
          <div className="features">
            <div className="feature-item">
              <FaMapMarkerAlt />
              <h3>Live Location Tracking</h3>
            </div>
            <div className="feature-item">
              <FaRoute />
              <h3>Dynamic Bus Routing</h3>
            </div>
            <div className="feature-item">
              <IoInformationCircle />
              <h3>Bus Information Management</h3>
            </div>
            <div className="feature-item">
              <BsPersonLinesFill />
              <h3>Driver Information System</h3>
            </div>
            <div className="feature-item">
              <MdNotificationsActive />
              <h3>Smart Arrival Notification</h3>
            </div>
            <div className="feature-item">
              <HiMiniWrenchScrewdriver />
              <h3>Bus Maintenance Record Keeping</h3>
            </div>
          </div>
          <button className='btn' id="btn">
            <Link to="/feature1">Let's Explore</Link>
          </button>
        </div>
        
        <div className="img-wrapper">
          <img src={"../assets/introimg1.png"} alt="" />
        </div>
      </div>
    </>
  );
};

export default landing_page;
