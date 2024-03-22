import React from "react";
import "../style/search_page.scss";
import { FaArrowLeft } from "react-icons/fa6";
import { FaBus } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const search_page = () => {
  return (
    <>
      <div className="search-page">
        <div className="search-bar">
          <div className="back">
          <Link to="/mainsite"><FaArrowLeft /></Link>
            
          </div>
          <input type="text" placeholder="Search route name or bus number" />
        </div>
        <div className="recent-searches-list">
          <div className="recent-search-heading">
            <h1>Recent Searches</h1>
          </div>
          <div className="searches-list">
            <div className="bus1">
              <div className="bus-logo">
                <FaBus />
              </div>
              <div className="bus-no-route">
                <h1>29</h1>
                <p>SVVV campus to ujjain</p>
              </div>
            </div>
            <div className="bus1">
              <div className="bus-logo">
                <FaBus />
              </div>
              <div className="bus-no-route">
                <h1>29</h1>
                <p>SVVV campus to ujjain</p>
              </div>
            </div>
            <div className="bus1">
              <div className="bus-logo">
                <FaBus />
              </div>
              <div className="bus-no-route">
                <h1>29</h1>
                <p>SVVV campus to ujjain</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default search_page;
