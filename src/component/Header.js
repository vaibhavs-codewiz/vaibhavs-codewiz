import {logoUrl} from "../utils/constants"

export const Header = () => {
  
  return (
    <>
      <div className="main-Header">
        <div>
          <img
            className="logo"
            src= {logoUrl}
            alt="food app logo"
          ></img>
        </div>
        <div className="Headerpart2">
          <ul className="links">
            <li>Search</li>
            <li>About</li>
            <li>Home</li>
            <li>cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;