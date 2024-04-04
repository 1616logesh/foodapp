import React, { useState } from 'react';

const RestaurantPage = () => {
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
            <button id="orderOnlineBtn" onClick={handleOrderOnlineClick}>Order Online</button>
            <button id="dineoutBtn" onClick={handleDineOutClick}>Dine Out</button>

            {showOrderOnline ? (
                <div id="orderOnlineView" className="view">
                    <p>Order Online View</p>
                    <p>₹400 for two</p>
                    <p>Rajiv Gandhi Salai Road OMR ⚑</p>
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