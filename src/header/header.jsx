import './header.css';
import Nav from './navbar/nav';
import Heropage from './heropage/heropage';

export default function Header(){
    return(
        <header>
            <Nav/>
            <Heropage/>
        </header>
    );
}
