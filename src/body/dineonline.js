import React, { useState } from 'react';

const RestaurantPage = ({ card }) => {
    const [showOrderOnline, setShowOrderOnline] = useState(true);

    const handleOrderOnlineClick = () => {
        setShowOrderOnline(true);
    };

    const handleDineOutClick = () => {
        setShowOrderOnline(false);
    };

    return (
        <div className="container">
            <input type="text" placeholder="Search..." />
            <div className="toggleBar">
                <button className={showOrderOnline ? "active" : ""} onClick={handleOrderOnlineClick}>Order Online</button>
                <button className={!showOrderOnline ? "active" : ""} onClick={handleDineOutClick}>Dine Out</button>
            </div>

            {showOrderOnline ? (
                <div id="orderOnlineView" className="view">
                    <p>Order Online View</p>
                    <p>{card.gridElements.infoWithStyle.restaurants[0].info.costForTwo}</p>
                    <p>{card.gridElements.infoWithStyle.restaurants[0].info.locality} {card.gridElements.infoWithStyle.restaurants[0].info.areaName} ⚑</p>
                    <p>A delivery fee will apply</p>
                    <p className="discount">15% Off Upto ₹100 USE HSBCMANIA</p>
                </div>
            ) : (
                <div id="dineoutView" className="view">
                    <p>Dine Out View</p>
                </div>
            )}
        </div>
    );
};

export default RestaurantPage;