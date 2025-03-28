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

const styleCard = {
  backgroundColor: "#f0f0f0"
}

// InLine Style are given in the form of JS objects.

const ResturantCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <h3> Meghna Foods </h3>
    </div>
  )

}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div> 
      <div className="res-container"></div>
        <ResturantCard/>
    </div>
  )

}



const Applayout = () => {
  return <div className="app">
    <Header/>
    <Body/>

  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Applayout/>);
