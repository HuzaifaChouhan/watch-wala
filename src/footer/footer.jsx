import './footer.css';
import footerlogo from '../images/watchwala-logo.png';

export default function Footer(){
    return(
        <footer>
            <div className="footer-start">
                <img src={footerlogo} alt="footer-logo" className='footer-logo'/>
            </div>
            <div className="footer-r">
                <h2 className="footer-h2">Links</h2>
                <p><a href="#" className="footer-p">Instagram</a></p><br/>
                <p><a href="#" className="footer-p">Whatsapp</a></p>
            </div>            
            <div className="footer-r">
                <h2 className="footer-h2">Contact Us</h2>
                <p><a href="#" className="footer-p">+91259024914590</a></p>
                <p><a href="#" className="footer-p">watchwala@gmail.com</a></p>
            </div>            
        </footer>
    );
}