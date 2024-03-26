import './header.css';
import { Link } from 'react-router-dom';
 const Header = () => {
    return(
    <>
        <div>
            <div>
                <img scr=""></img>
            </div>
            <div class="container">
                <a href="/search"> <input type="text" placeholder="Search"></input>
                    search</a>
                <Link to ="/offer">offer</Link>
                <a href="/help">help</a>
                <a href="/sign_in">sign in</a>
                <a href="/cart">cart</a>
            </div>
        </div>
    </>)
}

export default Header;