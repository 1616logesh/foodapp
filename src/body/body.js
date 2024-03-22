import { useEffect, useState } from 'react';
import { IMAGE_URL, RESTAURANT_API_URL } from '../config.js';
import Loader from '../loader.js';
import { restaurantData } from '../restaurantData.js';
import './body.css';
const Body = () => {
    const [name,setName]= useState("Suresh");
    const [restaurantList,setRestaurantList]= useState([]);
    const handleClick = ()=>{
        setName("vignesh");
    }
    useEffect(()=>{
        fetchRestaurants()
    },[])

    const fetchRestaurants = async()=>{
        const resData = await fetch(RESTAURANT_API_URL);
        const resResult = await resData.json();
        setRestaurantList(resResult?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    if(restaurantList.length===0)
        return <Loader/>
    return (
        <div className="body">
            {console.log("Hi i have rendered")}
            <p>Restaurants with online food delivery in Chennai</p>
            <div className="content">
                <div>{name}</div>
                <button onClick={handleClick}>changeVale</button>
                {restaurantList?.map(({info})=>{
                    return(
                        <div className="item">
                    <img src={IMAGE_URL+info.cloudinaryImageId} alt="BOX8 Desi Meals"></img>
                    <div className="offer">50% OFF UPTO ₹100</div>
                    <div className="details">
                        <div>{info.name}</div>
                        <div className="rating">{info.avgRating} - {info.sla.slaString} mins</div>
                        <div className="cuisine">{info.cuisines.join(' ')}</div>
                        <div>{info.locality}</div>
                    </div>
                </div>
                    )
                })}
                {/* <div className="item">
                    <img src="box8-meal.jpg" alt="BOX8 Desi Meals"></img>
                    <div className="offer">50% OFF UPTO ₹100</div>
                    <div className="details">
                        <div>BOX8 - Desi Meals</div>
                        <div className="rating">⭐ 4.6 - 12–22 mins</div>
                        <div className="cuisine">Biryani, Thalis, Home Food</div>
                        <div>Parameswaran Nagar</div>
                    </div>
                </div>

                <div className="item">
                    <img src="red-box.jpg" alt="The Red Box"></img>
                    <div className="offer">40% OFF UPTO ₹75</div>
                    <div className="details">
                        <div>The Red Box</div>
                        <div className="rating">⭐ 3.9 - 20–30 mins</div>
                        <div className="cuisine">Chinese</div>
                        <div>Karapakkam</div>
                    </div> */}
                </div>
            </div>
        

    )
}

export default Body;