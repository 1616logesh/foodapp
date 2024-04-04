import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURNAT_DETAIL_URL } from "../../config";
import TabComponent from "./tabComponent/tabComponent";
import Loader from "../../loader";
import './restaurantDetail.css';
import RestaurantMenu from "./restaurantMenu/restaurantMenu";
import RestaurantPage from "../../body/dineonline";

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
                <RestaurantMenu />
            </div>
            {resData[1] && (
                <div className="infoCard">
                    <h4>Additional Information</h4>
                    <p>{resData[1].card.card.text}</p>
                </div>
                
                
            )}
        </>
    );
};

export default Restaurantdetail;
