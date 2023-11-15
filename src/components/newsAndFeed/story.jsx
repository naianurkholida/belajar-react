import "./story.css"
import data from "../../data.json"
import React from "react";

const wrapper = ()=>{
    return(   
      <div>
        {data.stories.map((story, index)=>(
            <div key={index} className='stories-wrapper'>

            <div className="gambar">
              <img src={story.img} alt="" />
            </div>
            <div className='all-story'>
              <div className="tanggal-story">{story.date} | <span className="story-category">{story.category}</span></div>
              <div className="judul-berita">
              {story.title}
              </div>
              <p className="story-author">{story.author}</p>
            </div>
          </div>
                        
        ))}



         

      </div>
    );
}

export default wrapper;