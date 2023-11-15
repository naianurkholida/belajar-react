import "./event.css"
import data from "../../data.json"

const event =()=>{

    return(
        <>
        <div className="event">

            <h1 className="title-event">Events</h1>
            <div className="contain">
            {data.mainEvent.map((event, index)=>(
                <div key = {index} className="event-wrapper">
                    <div className="image">
                        <img src={event.img} alt="" />
                    </div>
                    <div className="head">{event.title}</div>
                    <div className="tgl">{event.date} • {event.author} • {event.toll}</div>
                    <div className="isi">{event.desc}</div>
                    <div className="read-more">{event.read}</div>
                </div>
                ))}

            </div>
            <div className="load-more">
                <button>Load More</button>
            </div>
        </div>
        </>
    )
}
export default event;