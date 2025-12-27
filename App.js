import React from "react";
import ReactDOM from "react-dom/client";
/*
<div id="parent">
    <div id="child1">
    <h1></h1>
    </div>
    <div id="child2">
    <h1></h1>
    </div>
    <div>

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World From React!"
// );
const heading = React.createElement(
  "div",
  {
    id: "parent",
  },"Hello Brother");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
root.render(heading);
*/
// const heading = React.createElement("h1", { id: "heading" }, "Hello World!");
// const jsxHeading = <h1 id="heading">Using JSX</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// React Element
const heading=<h1 className="heading">Hello World!</h1>

// React Component

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

 