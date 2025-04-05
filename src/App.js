import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom"; 
import About from "./components/About";
import Contact from "./components/Contact";

import Error from "./components/Error";





const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    errorElement: <Error/>
  },
  {
    path:"/about",
    element: <About/>
  },
  {
    path:"/contact",
    element: <Contact/>
  },
  
]) // which defines what will happens on the specific routes. 


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);
