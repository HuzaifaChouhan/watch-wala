import './brandcomponent.css';

export default function Brandcomponent(props){
    return<>
        <div className="brand-logo-circle">
            <img src={props.brandlogo} className='brand-logo'/>
        </div>
    </>;
}