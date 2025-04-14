import './component.css';

export default function Component(props){
    return(
        <div className="p1-box">
            <img src={props.photo} alt="watch1" className='box-img'/>
            <h3 className='p1-h3'>{props.name}</h3>
        </div>
    );
}