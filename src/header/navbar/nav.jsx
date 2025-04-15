import './nav.css';
import watchwalalogo from '../../images/watchwala-logo.png';

export default function Nav(){
    function showsidebar(){
        let menu = document.querySelector(".sidebar");
        menu.style.display = "flex";
    }
    function hidesidebar(){
        let menu = document.querySelector(".sidebar");
        menu.style.display = "none";
    }
    return(
        <nav>
            <ul className='sidebar'>
                <li onClick={hidesidebar}><a href="/"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                <li><a href="/">Brands</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Contact Us</a></li>
                <li><a href="/">Login</a></li>
            </ul>
            <ul>
                <li><a href="/brand" className='hideonmobile'>Brands</a></li>
                <li><a href="/aboutus" className='hideonmobile'>About Us</a></li>
                <li><a href="/contactus" className='hideonmobile'>Contact Us</a></li>
                <a href="/" className='watchwala-logo'><img src={watchwalalogo}  className='watchwala-logo-a' alt="watchwala-logo"/></a>
                <li className='login'><a href="/login" className='hideonmobile'>Login</a></li>
                <li onClick={showsidebar}><a href="#" className='hideburger'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
            </ul>
        </nav>
    );
}