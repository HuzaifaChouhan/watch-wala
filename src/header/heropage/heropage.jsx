import './heropage.css';
import heropagevideo from '../../images/heropage-video.MP4';

export default function Heropage(){
    return(
        <div className="heropage">
            <video src={heropagevideo} autoPlay loop muted className='heropage-video'></video>
        </div>
    );
}