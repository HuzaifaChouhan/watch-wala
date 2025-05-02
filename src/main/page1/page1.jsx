import './page1.css';
import page1img from '../../images/page1-image.webp';
import watchsvg from '../../images/watch-svg.svg';
import diamondsvg from '../../images/diamond-svg.svg';
import moneysvg from '../../images/money-svg.svg';

export default function Page1(){
    return<>
        <div className="page1">
            <div className="page1-start">
                <div className="page1-r">
                    <img src={watchsvg} alt="watchsvg" className='svg'/>
                    <p className='page1-start-r1'>More than a watch, its a statement.</p>
                </div>
                <div className="page1-r">
                    <img src={diamondsvg} alt="diamondsvg" className='svg'/>
                    <p className='page1-start-r1'>You dont even have to <br/> speak your wrist does the talking.</p>
                </div>
                <div className="page1-r">
                    <img src={moneysvg} alt="moneysvg" className='svg'/>
                    <p className='page1-start-r1'>Its something you can pass <br/> down, not just wear.</p>
                </div>
            </div>
            <div className="page1-img-box">
                <img src={page1img} alt="page1-image" className='page1-img'/>
                <h2 className='page1-h2'>Welcome</h2>
            </div>
        </div>
    </>;
}