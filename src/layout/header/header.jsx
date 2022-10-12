import "./header.css";
import { Link } from "react-router-dom";
import webIcon from "../../images/iconImages/web-icon2.png";
import helpIcon from "../../images/iconImages/help-icon.png";
import signinIcon from "../../images/iconImages/user_login_icon2.png";

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