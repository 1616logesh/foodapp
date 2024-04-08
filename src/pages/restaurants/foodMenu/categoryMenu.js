

import DefaultMenu from "./DefaultMenu";
const CategoryMenu = (props)=>{
    return(
        <>
            <div className="categorySection">
                {
                    props?.category?.map((card)=>{
                        return(
                            <div className="categoryMenu">
                                <span>{card?.title}</span>
                                <div className="categoryFood">
                                    <DefaultMenu itemCards={card?.itemCards}/>
                                    </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )

}
export default CategoryMenu;

