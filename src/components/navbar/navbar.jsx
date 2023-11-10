import React from "react";
import './navbar.css'

const navbar = ()=>{


    return(
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
                </div>
                
            
                <div className="language">
                    <div className="eng"></div>
                <   div className="ind"></div>
            </div>
            </div>
        </div>
    )
}

export default navbar;