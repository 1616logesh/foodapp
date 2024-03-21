import './footer.css';
import playStore from './img/playstore.png';
const Footer=()=>{
return(
    <><footer>
    <div className="footer-container">
        <div className="footer-section">
            <h3>Company</h3>
            <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Team</li>
                <li>Swiggy One</li>
                <li>Swiggy Instamart</li>
                <li>Swiggy Genie</li>
            </ul>
        </div>
        <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
                <li>Help & Support</li>
                <li>Partner with Us</li>
                <li>Ride with Us</li>
            </ul>
        </div>
        <div className="footer-section">
            <h3>Legal</h3>
            <ul>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-section app-download">
            <a href="#" className="app-link">Download our app now!</a>

            <img src={playStore} alt="Get it on Google Play"></img>
        </div>
    </div>
</footer>
</>
)
}

export default Footer;