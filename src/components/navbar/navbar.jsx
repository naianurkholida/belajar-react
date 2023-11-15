import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'

const Navbar =()=>{
    const [menuOpen, setMenuOpen]=useState(false)

    return(
        <nav className="all-navbar">
            <div className="logo"></div>
            <div className="menu" onClick={()=>{
                setMenuOpen(!menuOpen)
            }}>
                
                
            </div>
        <ul className={menuOpen ? "open":""}>
            <li>
                <NavLink to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
                <NavLink to="/business">Our Business</NavLink>
            </li>
            <li>
                <NavLink to="/">Feeds</NavLink>
            </li>
            <li>
                <NavLink to="/contacts">Contacts</NavLink>
            </li>
            {/* <li>
                <div className="eng"></div>
            </li>
            <li>
                <div className="line">
                <svg width="1" height="32" viewBox="0 0 1 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.1" y1="4.37114e-09" x2="0.0999986" y2="32" stroke="black" stroke-width="0.2"/>
                </svg>
                </div>
            </li>
            <li>
                <div className="ind"></div>
            </li> */}
        </ul>
    </nav>
    )

}

export default Navbar