import React from 'react';
import RestaurantPage from './RestaurantPage';

const App = () => {
    const card = {
        gridElements: {
            infoWithStyle: {
                restaurants: [
                    {
                        info: {
                            costForTwo: '₹1200',
                            locality: 'Koramangala',
                            areaName: '4th Block',
                        },
                    },
                ],
            },
        },
    };

    return <RestaurantPage card={card} />;
};

export default App;