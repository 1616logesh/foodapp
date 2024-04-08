import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURNAT_DETAIL_URL } from "../../config";
import Loader from "../../loader";
import FoodMenu from "./foodMenu/foodMenu";
import './restaurantDetail.css';
import RestaurantInfo from "./restaurantMenu/restaurantMenu";
import TabComponent from "./tabComponent/tabComponent";
const Restaurantdetail = () => {
    const params = useParams();
    const [resData, setResData] = useState([]);
    const { id } = params;

    useEffect(() => {
        fetchRestaurantDetails();
    }, []);

    const fetchRestaurantDetails = async () => {
        try {
            const restaurantDetails = await fetch(RESTAURNAT_DETAIL_URL + id);
            const restaurantData = await restaurantDetails.json();

            setResData(restaurantData.data.cards);
        } catch (error) {
            console.error("Error fetching restaurant details:", error);
        }
    };

    if (resData.length === 0)
        return <Loader />

    return (
        <>
            <div className="resHeader">
                <h3>{resData[0].card.card.text}</h3>
            </div>
            <div className="tabSection">
                <TabComponent tabs={resData[1].card.card.tabs} />
            </div>
            <div className="restaurantMenuSection">
                <RestaurantInfo/>
            </div>
            {resData[1] && (
                <div className="infoCard">
                    <h4>Additional Information</h4>
                    <p>{resData[1].card.card.text}</p>
                </div>
                
                
            )}
                <div className="foodMenu">
                    {resData.map((card,index)=>{
                        return(
                            <div key={index} className="foodMenuSection">
                                <FoodMenu menuItems={card?.groupedCard?.cardGroupMap?.REGULAR?.cards}/>
                            </div>
                        )
                    })}
                </div>
        </>
    );
};

export default Restaurantdetail;
