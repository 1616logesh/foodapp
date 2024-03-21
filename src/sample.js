
export const Sample1 = ()=>{
    return(
        <>
            <div>This is the Sample1 Component</div>
        </>
    )
}
const Sample = (props)=>{
    const {name,age,skills}=props;
    console.log(props)
    
    return(
        <>
        {console.log(skills)}
            <span>This is the sample Component {props.children}</span>
            <span>My name is {name} and my age is {age} and my skills are {skills.join()}</span>
            {skills.map((ele)=>{
                return(
                    <span>{ele}</span>
                )
            })}
        </>
    )
}
export default Sample;