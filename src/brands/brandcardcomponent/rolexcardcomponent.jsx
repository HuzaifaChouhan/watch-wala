import './cardcomponent.css';

export default function Rolexcardcomponent(props){
    return(
            <div className="card-box">
                <img src={props.cardphoto} alt="watch1" className='card-box-img'/>
                <p className='card-box-company'>{props.company}</p>
                <p className='card-box-name'>{props.name}</p>
                <p className='card-box-price'>{props.price}</p>
            </div>
    );
}