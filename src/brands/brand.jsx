import './brand.css';
import {Link, Routes, Route} from 'react-router-dom';
import Brandlogocomponent from './brandlogocomponent/brandlogocomponent';
import brandlogo1 from '../images/brand-logo-1.jpg';
import brandlogo2 from '../images/brand-logo-2.jpg';
import Rolexcardcomponent from './brandcardcomponent/rolexcardcomponent';
import Hublotcardcomponent from './brandcardcomponent/hublotcardcomponent';
import watch1 from '../images/watch1.jpg';
import watch2 from '../images/watch2.JPG';
// import brandlogo3 from '../images/brand-logo-3.jpg';

export default function Brand(){
    return<>
        <div className="brand-main">
            <div className="brand-companies">               
                <Link to="/brand/rolex"><Brandlogocomponent brandlogo={brandlogo1} /></Link>
                <Link to="/brand/hublot"><Brandlogocomponent brandlogo={brandlogo2} /></Link>
            </div>
            <div className="brand-card">
              <Routes>
                <Route path="rolex" element={
                  <>
                    <Rolexcardcomponent cardphoto={watch1} company="Rolex" name="GT-III" price="$700"/>
                    <Rolexcardcomponent cardphoto={watch1} company="Rolex" name="GT-III" price="$700"/>
                    <Rolexcardcomponent cardphoto={watch1} company="Rolex" name="GT-III" price="$700"/>
                    <Rolexcardcomponent cardphoto={watch1} company="Rolex" name="GT-III" price="$700"/>
                  </>
                }/>
                <Route path="hublot" element={
                  <>
                    <Hublotcardcomponent cardphoto={watch2} company="Rolex" name="GT-III" price="$700"/>
                    <Hublotcardcomponent cardphoto={watch2} company="Rolex" name="GT-III" price="$700"/>
                    <Hublotcardcomponent cardphoto={watch2} company="Rolex" name="GT-III" price="$700"/>
                    <Hublotcardcomponent cardphoto={watch2} company="Rolex" name="GT-III" price="$700"/>
                  </>
                }/>
              </Routes>
            </div>
        </div>
    </>;
}

