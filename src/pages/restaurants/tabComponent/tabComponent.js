
const TabComponent = ({tabs})=>{
    return(
        <>
        <div className="tabSection">
            {tabs.map((tab)=>{
                return(<div key={tab.id} className="tabContent">
                    <span>{tab.title}</span>
                </div>)
            })}
        </div>
        </>
    )
}

export default TabComponent;