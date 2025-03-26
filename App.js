import React from "react";
import ReactDOM from "react-dom/client";

import React from "react";
import ReactDOM from "react-dom/client";

const h1 = React.createElement("h1", { key: "h1" }, "This is h1");
const h2 = React.createElement("h2", { key: "h2" }, "This is h2");
const h3 = React.createElement("h3", { key: "h3" }, "This is h3");
const h4 = React.createElement("h4", { key: "h4" }, "This is h4");
const h5 = React.createElement("h5", { key: "h5" }, "This is h5");
const h6 = React.createElement("h6", { key: "h6" }, "This is h6");


const child1 = React.createElement("div", { id: "child1", key: "child1" }, [h1, h2, h3]);
const child2 = React.createElement("div", { id: "child2", key: "child2" }, [h4, h5, h6]);


const parent = React.createElement("div", { id: "parent" }, [child1, child2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


// this is core of react. we will be using this for the last time.... 










