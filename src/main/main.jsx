import './main.css';
import Page1 from './page1/page1';
import Page2 from './page2/page2';
import Heropage from '../header/heropage/heropage';

export default function Main(){
    return(
        <main>
             <Heropage/>
            <Page1/>
            <Page2/>
        </main>
    );
}