import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="flex justify-between bg-pink-400 shadow-xl">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-2xl">
            Online Status:
            {onlineStatus ? '✅' : '❌'}
          </li>

          <li className="px-4 text-2xl">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-2xl">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-2xl">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 text-2xl">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="text-2xl px-4">Cart</li>
          <button
            className="text-2xl bg-green-200 rounded-lg px-4 py-1 "
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
