import './brand.css';

import {Link, Routes, Route} from 'react-router-dom';

import Brandlogocomponent from './brandlogocomponent/brandlogocomponent';

import leftarrow from '../images/left-arrow.png';

import brandlogo1 from '../images/brand-logo-1.jpg';
import brandlogo2 from '../images/brand-logo-2.jpg';

import rightarrow from '../images/right-arrow.png';

import Rolexcardcomponent from './brandcardcomponent/rolexcardcomponent';
import Hublotcardcomponent from './brandcardcomponent/hublotcardcomponent';

import watch1 from '../images/watch1.jpg';
import watch2 from '../images/watch2.JPG';

export default function Brand(){
   function slideleft(){
    let slide2 = document.querySelector(".brand-slide-2");
    slide2.style.display = "flex";
    let slide1 = document.querySelector(".brand-slide-1");
    slide1.style.display = "none";
   }
   function slideright(){
    let slide2 = document.querySelector(".brand-slide-2");
    slide2.style.display = "none";
    let slide1 = document.querySelector(".brand-slide-1");
    slide1.style.display = "flex";
   }
    return<>
        <div className="brand-main">
            <div className="brand-companies">
              <img src={leftarrow} alt="leftarrow" className='brand-rightarrow' onClick={slideright}/>
                <div className="brand-slide-1">            
                  <Link to="/brand/rolex"><Brandlogocomponent brandlogo={brandlogo1} /></Link>
                  <Link to="/brand/rolex"><Brandlogocomponent brandlogo={brandlogo1} /></Link>
                  <Link to="/brand/rolex"><Brandlogocomponent brandlogo={brandlogo1} /></Link>
                  <Link to="/brand/rolex"><Brandlogocomponent brandlogo={brandlogo1} /></Link>
                </div>
                <div className="brand-slide-2">            
                  <Link to="/brand/hublot"><Brandlogocomponent brandlogo={brandlogo2} /></Link>
                  <Link to="/brand/hublot"><Brandlogocomponent brandlogo={brandlogo2} /></Link>
                  <Link to="/brand/hublot"><Brandlogocomponent brandlogo={brandlogo2} /></Link>
                  <Link to="/brand/hublot"><Brandlogocomponent brandlogo={brandlogo2} /></Link>
                </div>
              <img src={rightarrow} alt="rightarrow" className='brand-leftarrow' onClick={slideleft}/>
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

