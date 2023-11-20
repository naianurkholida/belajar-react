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
        </ul>
    </nav>
    )

}

export default Navbar