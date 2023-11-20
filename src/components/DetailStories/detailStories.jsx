import React from "react";
import './detailStories.css'

const DetailStories = ({story, onClose})=>{
    return(
        <>
        <div className="detail-overlay">
            <div className="detail-container">
                <div className="detail-content">
                    <div className="detail-close">
                        <button onClick={onClose}>x</button>
                    </div>
                    <div className="detail-on">
                        <div className="detail-img">
                            <img src={story.img} alt="" />
                        </div>
                    </div>
                    <div className="detail-title"><h1>title</h1></div>
                    <div className="detail-desc"><p>blablabalala</p></div>
                </div>
            </div>
        </div>

        </>
    )
}

export default DetailStories;