

const h1 = React.createElement("h1",{},"This is h1");
const h2 = React.createElement("h2",{},"This is h2");

const child1 = React.createElement("div",{id:"child1"},[h1,h2]);
const parent = React.createElement("div",{id:"parent"},[child1])

const heading = React.createElement(
  "div",
  {},
  React.createElement("div",{id:"heading"},React.createElement("h1"))
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// this is core of react. we will be using this for the last time.... 

// try to do this...  








