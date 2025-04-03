import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  //let btnName = "Login"

  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={()=>{setBtnName(btnName === "Login" ? "Logout" : "Login")}}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
