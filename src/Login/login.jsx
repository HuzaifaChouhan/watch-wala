import './login.css';
import loginbg from '../images/login-bg.webp';

export default function Login(){
    return(
        <div className="login-main">
            <img src={loginbg} alt="login-bg" className='login-bg'/>
            <div className="login-box"></div>
        </div>
    );
}