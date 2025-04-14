import { useState } from "react";
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
          <li className="px-4 text-2xl hover:bg-pink-500 rounded-lg">
            Online Status:
            {onlineStatus ? '✅' : '❌'}
          </li>

          <li className="px-4 text-2xl  hover:bg-pink-500 rounded-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-2xl  hover:bg-pink-500 rounded-lg">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-2xl  hover:bg-pink-500 rounded-lg">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 text-2xl  hover:bg-pink-500 rounded-lg">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="text-2xl px-4  hover:bg-pink-500 rounded-lg">Cart</li>
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
