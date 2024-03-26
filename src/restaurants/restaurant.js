import { IMAGE_URL } from "../config";

const Restaurant = ({id,cloudinaryImageId,avgRating,sla,cuisines,name,locality})=>{
    return(
        <>
                      
                    <img src={IMAGE_URL+cloudinaryImageId} alt="BOX8 Desi Meals"></img>
                    <div className="offer">50% OFF UPTO ₹100</div>
                    <div className="details">
                        <div>{name}</div>
                        <div className="rating">{avgRating} - {sla.slaString} mins</div>
                        <div className="cuisine">{cuisines.join(' ')}</div>
                        <div>{locality}</div>
                    </div>
        </>
    )
}

export default Restaurant;