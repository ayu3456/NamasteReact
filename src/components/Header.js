import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {

  console.log("Header render");

  const [btnName, setBtnName] = useState("Login");

  useEffect(()=>{
    console.log("UseEffect called")
  });

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
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
