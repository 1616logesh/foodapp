import React, { useEffect, useState } from 'react';
import { RESTAURANT_API_URL } from '../config.js';
import Loader from '../loader.js';
import Restaurant from '../restaurants/restaurant.js';
import './body.css';

const Body = () => {
    const [name, setName] = useState("Suresh");
    const [restaurantList, setRestaurantList] = useState([]);
    const [loading, setLoading] = useState(true); 

    const handleClick = () => {
        setName("vignesh");
    }

    useEffect(() => {
        fetchRestaurants()
    }, [])

    const fetchRestaurants = async () => {
        try {
            const resData = await fetch(RESTAURANT_API_URL);
            const resResult = await resData.json();
            setRestaurantList(resResult?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching restaurants:", error);
        }
    }

    if (loading) 
        return (
            <div className="loading-bar">
                <div className="progress"></div>
            </div>
        );

    return (
        <div className="body">
            <p>Restaurants with online food delivery in Chennai</p>
            <div className="content">
                <div>{name}</div>
                <button onClick={handleClick}>changeValue</button>
                {restaurantList?.map(({ info }) => {
                    return (
                        <div className='item' key={info.id}>
                            <Restaurant {...info} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Body;
