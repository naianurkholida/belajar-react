import React, {useState, useEffect} from "react"
import "./publicContribution.css"
import data from "../../data.json"

const PublicContribution =()=>{
    const [images, setImages]= useState([]);
    const [activeImage, setActiveImage]=useState(0);

    useEffect(()=>{
        const imageData = [
                "https://images.unsplash.com/photo-1695582341851-8cc6eba24e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1682685796063-d2604827f7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1690476071985-4943f147a85e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            ];
            setImages(imageData);
    }, []);
    useEffect(()=>{
        const interval = setInterval(() => {
            setActiveImage((prevIndex) => (prevIndex+1)%images.length);
            
        }, 3000);

        return()=>clearInterval(interval);
    },[images]);

    return(
        <div>
            <div className="bgc">
                <div className="headings">
                    <h1>Public <span className="contri">Contribution</span></h1>
                </div>
                <div className="wrapper">
                    <div className="left">
                        <div className="berita">

                            <div className="tanggal">
                                <p>{data.mainPublic.date}</p>
                            </div>
                            <div className="isi-berita">{data.mainPublic.desc}</div>
                            <div className="penulis">

                            <p>{data.mainPublic.author}</p>
                            </div>
                        </div>
                        <div className="upnext">
                            <p>UP NEXT</p>
                            <div className="foto">
                                <img src={data.mainPublic.img} alt="" />
                            </div>
                            <div className="judul-sub">{data.mainPublic.title}</div>

                        </div>
                    </div>
                    <div className="sectionRight">
                        <div className="gambar-kanan">
                            <img src={images[activeImage]} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PublicContribution;