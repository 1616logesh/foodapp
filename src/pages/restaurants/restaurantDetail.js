import { useParams } from "react-router-dom";
const Restaurantdetail = ()=>{
    const params = useParams();
    const {id} = params;
    return(
        <>
            This is the Restaurant Detail Component
        </>
    )
}

export default Restaurantdetail;