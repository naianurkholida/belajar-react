import "./magazine.css"
import data from "../../data.json"

const magazine = () =>{
    // const {mainMagazine} ={
    //     mainMagazine:[
    //         {
    //             "img":"https://images.unsplash.com/photo-1695220539847-31f3a2453bdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //             "title":"Energi Infra 6th Edition",
    //         },
    //         {
    //             "img":"https://images.unsplash.com/photo-1646145927270-6e2c695d8e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    //             "title":"Energi Infra 5th Edition",
    //         },
    //         {
    //             "img":"https://images.unsplash.com/photo-1695457264636-f314b0027ca2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60z",
    //             "title":"Energi Infra 4th Edition",
    //         },
    //         {
    //             "img":"https://images.unsplash.com/photo-1693748961289-0790439528fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    //             "title":"Energi Infra 3th Edition",
    //         },


    //     ]
    // }
console.log(data)
    return(
        <>
        <div className="magazine">
            <h1>E-Magazine</h1>
            <div className="all-magazine">
                {data.mainMagazine.map((magazine, index)=>(
                    <div key = {index} className="magazine-wrapper">
                        <div className="image-magazine">
                            <img src={magazine.img} alt="" />

                        </div>
                        <div className="judul">{magazine.title}</div>
                    </div>
                ))}
            </div>
            <div className="loadmore-magazine">
                <button>Load More</button>
            </div>
        </div>
        </>



    )

}
export default  magazine;