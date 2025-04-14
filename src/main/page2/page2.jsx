import './page2.css';
import Component from './component/component';
import watch1 from '../../images/watch1.jpg';

export default function Page2(){
    return(
        <div className="page2">
            <Component photo={watch1} name="Rolex"/>
            <Component photo={watch1} name="Rolex"/>
            <Component photo={watch1} name="Rolex"/>
            <Component photo={watch1} name="Rolex"/>
            <Component photo={watch1} name="Rolex"/>
            <Component photo={watch1} name="Rolex"/>
        </div>
    );
}