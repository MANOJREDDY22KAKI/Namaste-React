import React from "react";
import ReactDOM from "react-dom/client"
const heading = React.createElement("div", { id: "parent" }, 
  React.createElement("div", { id: "child" }, 
    React.createElement("h1", {}, "Hello from Manoj Reddy "),
  ),
);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);

//console.log(root)

root.render(heading);
