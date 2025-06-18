import { NavLink } from "react-router-dom";
import { useState } from "react";
import { PiHamburgerDuotone } from "react-icons/pi";
import { GiCrossMark } from "react-icons/gi";
import "./Navbar.css";
export const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* <div className = "nav">
        <div className="logo_name">
            <img src="/avataaars.png" alt="c"/>
            <h1>Rachit Seth</h1>
        </div>
<div classsName="nav_links">
    <NavLink to="/home">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/blogs">Blogs</NavLink>
    <NavLink to="/contact">Contact</NavLink>
</div>
     </div> */}
      <div className="navbar">
        <div className="logo"></div>
        <div className="brand">Flow</div>
        <div className="navEss">
          <div className="support0">
            Need classy Website.check out our packages!
          </div>
          <div className="time">23:45 AM</div>
          <div className="location">UP,India</div>
          <div className="navlinks">
            <div className={show ? "links" : "nolinks"}>
              <span className="nav-span">
                <NavLink className="route_link" to="/home">
                  Home
                </NavLink>
              </span>
              <span className="nav-span">
                <NavLink className="route_link" to="/about">
                  About
                </NavLink>
              </span>
              <span className="nav-span">
                <NavLink className="route_link" to="/services">
                  Services
                </NavLink>
              </span>
              <span className="nav-span">
                <NavLink className="route_link" to="/contact">
                  Contact
                </NavLink>
              </span>
            </div>

            <div className="nav_context">DESIGN, </div>
            <div className="nav_context">BUILD, </div>
            <div className="nav_context">MAINTAIN</div>
          </div>
          <div className="message">Lets work Together</div>
          <div className="ham">
            {!show ? (
              <PiHamburgerDuotone
                onClick={() => {
                  setShow(true);
                }}
              />
            ) : (
              <GiCrossMark
                onClick={() => {
                  setShow(false);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
