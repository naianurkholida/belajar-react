import "./magazine.css"
import data from "../../data.json"

const magazine = () =>{

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