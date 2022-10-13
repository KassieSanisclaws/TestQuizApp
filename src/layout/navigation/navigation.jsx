import { Link } from "react-router-dom";
import "./navigation.css";
import QuizLogo from "../../images/iconImages/site-icon2.png";
import TestIcon from "../../images/iconImages/testIcon.png";
import PricingIcon from "../../images/iconImages/priceIcon.png";

export default function Navigation(){
    return (
       <nav className="navigation-body">
           <Link to="/" className="site-logo">
               <img src={QuizLogo} alt="quiz-logo"/>
           </Link>
             <ul>
                <li><Link to="/tests"><img src={TestIcon} alt="testIcon"/><span>Tests</span></Link></li>      
                <li> <Link to="/pricing"><img src={PricingIcon} alt="pricingIcon"/><span>Pricing</span></Link></li>               
             </ul>
             <button className="navigation-btn glass"><span>TryForFree</span></button>
       </nav>
    );
}

