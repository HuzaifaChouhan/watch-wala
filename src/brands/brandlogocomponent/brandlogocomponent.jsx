import './brandlogocomponent.css';

export default function Brandlogocomponent(props){
    return<>
        <div className="brand-logo-circle">
            <img src={props.brandlogo} className='brand-logo' alt='brand-logo'/>
        </div>
    </>;
}