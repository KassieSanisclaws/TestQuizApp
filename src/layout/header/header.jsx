import "./header.css";
import { Link } from "react-router-dom";
import webIcon from "../../images/iconImages/webIcon.png";
import helpIcon from "../../images/iconImages/helpIcon.png";
import signinIcon from "../../images/iconImages/loginIcon.png";

function Header(){
    return (
      <div className="header-body">
                          
          <div className="header-web-icon"><img src={webIcon} alt="webIcon"/><span>EN</span></div>
                 
            <ul className="header-links">
              <li><Link to="/helpPage"><img src={helpIcon} alt="helpIcon"/><span>Help</span></Link></li>
              <li><Link to="/signin"><img src={signinIcon} alt="signinIcon"/><span>SignIn</span></Link></li>
            </ul>
              
      </div>
    );
}

export default Header;