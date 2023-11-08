import "./newsAndFeeds.css"
import Story from "./newsAndFeed/story"
import PublicContribution from './publicContribution/publicContribution';
import data from "../data.json"

const newsAndFeeds = ()=>{
  console.log(data);

    return (
        <div className="container">
          <div className="judul">
            <h2>News & Feeds</h2>
          </div>
          <div className='wrapper'>
            <div className='section-left'>
              <div className="img">
                <img src={data.mainNews.img} alt="" />
              </div>
              <div className="tanggal">
                <p>{data.mainNews.date} | {data.mainNews.category}</p>
              </div>
              <div className="berita">
                <h4>{data.mainNews.title}</h4>
                <div className="isi">{data.mainNews.description}</div>
                <p>{data.mainNews.author}</p>
            </div>
            </div>
            <div className="section-right">
              <h3>Recent Stories</h3>
                <Story/>
            </div>
    
          </div>
        </div>
      );
}

export default newsAndFeeds