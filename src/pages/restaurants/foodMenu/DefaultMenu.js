import { IMAGE_URL } from "../../../config"

const DefaultMenu = (props) => {
    return (
        <>
            <div className="defaultCategory">
                {props?.itemCards?.map((item) => {
                    return (
                        <div key={item?.card?.info.id} className="resMenu">
                            <div className="menuLeft">

                                <span>{item?.card?.info?.name}</span>
                                <span>{item?.card?.info?.description}</span>
                            </div>
                            <div className="menuright">
                                <div className="imageSection">
                                    <img src={IMAGE_URL + item?.card?.info?.imageId} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default DefaultMenu