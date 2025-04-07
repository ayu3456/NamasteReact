import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import ResturantMenu from './components/ResturantMenu'
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";


import Error from "./components/Error";

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
      
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/", // this is the root of the route.
    element: <Applayout />,
    children: [
      {
        path:"/",
        element:<Body/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturants/:resId", // to give dynamic path. 
        element: <ResturantMenu/>
      },
    ],
    errorElement: <Error />,
  },
]); // which defines what will happens on the specific routes.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />); 

// whenever there is change in the path , this outlet will be filled with the children routes autometically. 


