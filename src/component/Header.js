import { logoUrl } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  let [status, setState] = useState("Login");
  changeLogin = () => {
    if (status == "Login") setState("Logout");
    else setState("Login");
  };
  return (
    <>
      <div className="main-Header">
        <div>
          <img className="logo" src={logoUrl} alt="food app logo"></img>
        </div>
        <div className="Headerpart2">
          <ul className="links">
            <Link to="/About" className="links">
              About
            </Link>
            <Link to="/ContactUs" className="links">
              contact us
            </Link>

            {/* <li className="srchbtn" onClick={changeLogin}>
              {status}
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
