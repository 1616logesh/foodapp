import CategoryMenu from "./categoryMenu";
import DefaultMenu from "./DefaultMenu";
const FoodMenu = (props) => {
    return (
        <>
            <div className="Items">
                {props?.menuItems?.map((item, index) => {
                    return (
                        <div key={index} className="menuSection">
                            <h3>{item?.card?.card?.title}</h3>
                            {item?.card?.card?.categories ?
                                <CategoryMenu category={item?.card?.card?.categories} /> : <DefaultMenu itemCards={item?.card?.card?.itemCards} />}
                        </div>
                    )


                })}
            </div>
        </>
    )
}
export default FoodMenu;