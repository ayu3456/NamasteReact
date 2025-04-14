import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import "./styles.css"; // or whatever your CSS file is named

import ResturantMenu from "./components/ResturantMenu";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";

import Error from "./components/Error";
import UserContext from "../utils/UserContext";
// import Grocery from "./components/grocery";
// we can import Grocery using lazy loading. to reduce the bundle size.

// initially it will not the load the code of Grocery but when we click on grocery it will load the grocery Component.

const Grocery = lazy(() => import("./components/grocery"));

const About = lazy(() => import("./components/About"));
//these both import are different
// function given to us by react.





const Applayout = () => {

  const [userName,setUserName]  = useState(null);

  useEffect(()=>{
    const data = {
      name:"Ayush Gupta"
    }
    setUserName(data.name)
  },[])





  return (
    <UserContext.Provider value={{ loggedInUser: userName ,setUserName}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/", // this is the root of the route.
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturants/:resId", // to give dynamic path.
        element: <ResturantMenu />,
      },
      {
        path: "/grocery", // to give dynamic path.
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]); // which defines what will happens on the specific routes.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

// whenever there is change in the path , this outlet will be filled with the children routes autometically.
