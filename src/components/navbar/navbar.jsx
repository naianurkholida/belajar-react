import React from "react";
import './navbar.css'

const navbar = ()=>{


    return(
        <>
            <div className="line">
                <div className="all-navbar">
                <div className="logo"></div>
                <div className="item">
                    <div className="menu">
                        <div className="home">
                            <button className="btn-home">Home</button>
                        </div>
                        <div className="profile">
                            <button className="btn-profile">Profile</button>
                        </div>
                        <div className="business">
                            <button className="btn-business">Business</button>
                        </div>
                        <div className="feeds">
                            <button className="btn-feeds">Feeds</button>
                        </div>
                        <div className="contacts">
                            <button className="btn-contacts">Contacts</button>
                        </div>
                        <div className="language">
                            <div className="eng"></div>
                            <div className="garis">
                                <svg width="1" height="32" viewBox="0 0 1 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.1" y1="4.37114e-09" x2="0.0999986" y2="32" stroke="black" stroke-width="0.2"/>
                                </svg>          
                            </div>
                            <div className="ind"></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
        
    )
}

export default navbar;