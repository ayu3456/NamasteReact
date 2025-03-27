import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement - JS Object => HTML Element(render)

const element = <span>React Element</span>

const title = 
<h1 className="heading">
    Heading using JSX
    {element}
</h1>;
//this title is also a normal js variable. if we want to use this variable inside the js
//use it inside the js.

// it is in single line. if it is in multiple line you have to wrap it with()
// jsx => React.createElement => ReactElement(JS Object) => HTML element

// React Component
// Class based component
// Functional component -> it is just a normal js function which return a react element

const number = 10000;

// This is Component Compostion
const HeadingComponent = () => (
  <div id="container">
    <h2>{number * 23}</h2>
    {title}
    <h1 className="heading">This is a react heading component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
