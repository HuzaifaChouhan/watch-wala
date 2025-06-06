import './footer.css';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import watchwalalogo from '../images/watchwala-logo.png';

export default function Footer(){
    return(
        <footer>
            <div id="footer" class="footer0">
            <img src={watchwalalogo} alt="watchwalalogo" />
            </div>
            <div class="footer1">Connect with us at
                <div class="social-media">
                    <a href="/"><FaInstagram/></a>
                    <a href="/"><FaWhatsapp/></a>   
                    <a href="/"><BiLogoGmail/></a>
                </div>
            </div>
            <div class="footer2">
                <div class="product">
                    <div class="heading">Products</div>
                    <div class="div">Sell your Products</div>
                    <div class="div">Advertise</div>
                    <div class="div">Pricing</div>
                    <div class="div">Product Buisness</div>
                </div>
                <div class="services">
                    <div class="heading">Services</div>
                    <div class="div">Return</div>
                    <div class="div">Cash Back</div>
                    <div class="div">Affiliate Marketing</div>
                    <div class="div">Others</div>
                </div> 
                <div class="Company">
                    <div class="heading">Company</div>
                    <div class="div">Complaint</div>
                    <div class="div">Careers</div>
                    <div class="div">Affiliate Marketing</div>
                    <div class="div">Support</div>
                </div>
                <div class="Get Help">
                    <div class="heading">Get Help</div>
                    <div class="div">Help Center</div>
                    <div class="div">Privacy Policy</div>
                    <div class="div">Terms</div>
                    {/* <div class="div">Login</div> */}
                </div>
            </div>
            <div class="footer3">Copyright © <h4>ShoPperZ</h4> 2021-2028</div>
        </footer>
    );
}