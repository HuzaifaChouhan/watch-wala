import './page2.css';
import Component from './component/component';
import Rolex1 from '../../images/Rolex-1.jpeg';
import Hublot1 from '../../images/Hublot-1.jpeg';
import Gshock1 from '../../images/G-steel-1.jpeg';
import Cartier1 from '../../images/Cartier-1.jpeg';
import PatekPhillipe1 from '../../images/Patek Phillipe-1.jpeg'
import Tissot1 from '../../images/Tissot-1.jpeg';

export default function Page2(){
    return(
        <div className="page2">
            <Component photo={Rolex1} name="Rolex"/>
            <Component photo={Hublot1} name="Hublot"/>
            <Component photo={Gshock1} name="G-shock"/>
            <Component photo={Cartier1} name="Cartier"/>
            <Component photo={PatekPhillipe1} name="Patek Phillipe"/>
            <Component photo={Tissot1} name="Tissot"/>
        </div>
    );
}