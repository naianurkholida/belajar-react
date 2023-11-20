import "./story.css"
import data from "../../data.json"
import React, { useState } from "react";
import DetailStories from "../DetailStories/detailStories";

const Wrapper = ()=>{
  const [selectedStory, setSelectedStory] = useState(null);

  const handleImageClick = (story)=>{
    setSelectedStory(story);
  };

  const handleCloseDetail = ()=>{
    setSelectedStory(null);
  };
    return(   
      <div>
        {data.stories.map((story, index)=>(
            <div key={index} className='stories-wrapper'>

            <div className="gambar" onClick={()=>handleImageClick(story)}>
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
        {selectedStory &&(
          <DetailStories story={selectedStory} onClose={handleCloseDetail}/>
        )}
      </div>
    );
}

export default Wrapper;