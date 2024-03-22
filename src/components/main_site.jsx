import React from "react";
import "../style/main_site.scss";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { RiPassPendingFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const main_site = () => {
  return (
    <>
      <div className="header-container">
        <div className="top-header">
          <div className="profile-logo-wrapper">
            <div className="profile">
              <FaUser />
            </div>
            <div className="logo">
              <h1>NAVGO</h1>
            </div>
          </div>
        </div>
        <a href="#">
          <div className="search-bar">
            <FaSearch />
            <Link to="/searchpage">Enter destination or bus number</Link>
            
          </div>
        </a>
      </div>
      <div className="recent-search">
        <div className="heading-container">
          <h1>Recent Searches</h1>
        </div>
        <div className="searches-list">
          <div className="searches">
            <div className="bus-logo">
              <FaBus />
            </div>
            <div className="bus-no-route">
            <Link to="/buseslist"><h1>29</h1></Link>
              <p>SVVV campus to ujjain</p>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="bus-pass">
        <div className="heading-container" id="b-pass">
          <h1>Buy Bus Pass</h1>
        </div>
        <div className="bus-pass-wrapper">
          <div className="b-pass">
            <div className="bus-pass-logo"><RiPassPendingFill /></div>
            <div className="b-pass-heading">Bus Pass</div>
          </div>
        </div>
      </div>
      <div className="all-buses">
        <div className="heading-container">
          <h1>See All Routes And Buses</h1>
        </div>
        <div className="bus-list">
          <div className="bus1">
            <div className="bus-logo">
              <FaBus />
            </div>
            <div className="bus-no-arrival-time">
              <div className="bus-no-route">
              <Link to="/buseslist"><h1>29</h1></Link>
                <p>SVVV campus to ujjain</p>
              </div>
              <div className="arrival-time">In 15 min</div>
            </div>
          </div>
          <div className="line"></div>
          <div className="bus1">
          <div className="bus-logo">
              <FaBus />
            </div>
            <div className="bus-no-arrival-time">
              <div className="bus-no-route">
              <Link to="/buseslist"><h1>30</h1></Link>
                <p>SVVV campus to rau</p>
              </div>
              <div className="arrival-time">In 10 min</div>
            </div>
          </div>
          <div className="line"></div>
          <div id="all-buses-btn">
            <Link to="/buseslist"><h1>See all buses</h1></Link>
          </div>
        </div>
      </div>
      <div className="map-wrapper">
        <div className="heading-container">
          <h1>Nearby Buses</h1>
        </div>
        <div className="map-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.3996801259427!2d75.84705207603245!3d22.824697923682027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963039c587a8091%3A0x206d00d7a5e4afb3!2sShri%20Vaishnav%20Vidyapeeth%20Vishwavidyalaya!5e0!3m2!1sen!2sin!4v1710962385513!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default main_site;
