import { Link } from 'react-router-dom';
import './header.css';
 const Header = () => {
    return(
    <>
        
        <div class=" p-[150px] shadow-xl ">
            <div class="max-w-[1200px] mx-auto border border-red-500">
                <img scr=""></img>
           
            <div class="container">
                <a href="/search"> <input type="text" placeholder="Search"></input>
                    search</a>
                <Link to ="/offer">offer</Link>
                <Link to="/help">help</Link>
                <a href="/sign_in">sign in</a>
                <a href="/cart">cart</a>
            </div>
            </div>
        </div>
       
    </>)
}

export default Header;