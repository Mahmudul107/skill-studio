import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaInfoCircle, FaPhone, FaSubway } from "react-icons/fa";
import logo from '../assets/skill.png'

const Dashboard = () => {
  return (
    <div className="bg-slate-100">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page Content */}

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet />
        </div>
        <div className="drawer-side bg-white shadow-2xl shadow-red-400">
            <img className="mx-auto my-8 rounded-md shadow-black shadow-2xl" src={logo} alt="" />
            {/* <div className="border w-64 mx-auto bg-red-200 mb-8 mt-8"></div> */}
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full text-base-content">
            {/* Sidebar content here */}
            <li>
              <NavLink to="home">
                <FaHome className=""/> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="information">
                <FaInfoCircle /> Information
              </NavLink>
            </li>
            <li>
              <NavLink to="contact">
                <FaPhone /> Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="guide">
                <FaSubway /> Guide
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
