import React from "react";
import ReactDOM from "react-dom/client";

/*
COMPONENT:
1): HEADER
    - LOGO 
    - LINKS (NAV ITEMS)

2): BODY: 
    -SEARCH
    -RESTURANT CONTAINER 
        -RESTURANT CARDS 
          -image , name of resturant ,star rating , cuisines etc 
          

3): FOOTER 
    -COPYRIGHT 
    -LINKS 
    -ADDRESS 

*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// const styleCard = {
//   backgroundColor: "#f0f0f0",
// };

// In-Line Style are given in the form of JS objects.

// you can do destructuring it 
const ResturantCard = ({resName,cuisine}) => {
  //console.log(resName,cuisine)
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg"
      />
      <h3>{resName}</h3>
      <h3>{cuisine}</h3>
      <h3>4.3 stars</h3>
      <h3>38 minutes</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResturantCard resName="Meghna Foods" cuisine="Biryani,North-Indian" />
        <ResturantCard resName="KFC" cuisine="Burger,Fast-Food" />
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
