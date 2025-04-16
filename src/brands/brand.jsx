import './brand.css';
import Brandcomponent from './brandcomponent/brandcomponent';
import brandlogo1 from '../images/brand-logo-1.jpg';
// import brandlogo2 from '../images/brand-logo-2.jpg';
// import brandlogo3 from '../images/brand-logo-3.jpg';

export default function Brand(){
    return<>
        <div className="brand-main">
            <div className="brand-companies">                
                <Brandcomponent brandlogo={brandlogo1}/>
                {/* <Brandcomponent brandlogo={brandlogo2}/>
                <Brandcomponent brandlogo={brandlogo3}/>
                <Brandcomponent brandlogo={brandlogo1}/> */}
            </div>
        </div>
    </>;
}