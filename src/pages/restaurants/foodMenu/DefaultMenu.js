
const DefaultMenu = (props)=>{
    return(
        <>
           <div className="defaultCategory">
            {props?.itemCards?.map((item)=>{
                return(
                    <div key={item?.card?.info.id} className="resMenu">
                        <span>{item?.card?.info?.name}</span>
                    </div>
                )
            })}
           </div>
        </>
    )
}
export default DefaultMenu