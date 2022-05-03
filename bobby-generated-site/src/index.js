import React from "react";
import ReactDOM from "react-dom/client";
import mollyPic from "./assets/molly.jpg";
import styleSheet from "./assets/style.css";
import { CatPicker } from "./cat-picker";

// Create the root React element in the "root" div on the page.
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render our React app.
root.render(
  <div>
    <link rel="stylesheet" href={styleSheet} />
    <img className="spin" src={mollyPic} />
    <br />
    <br />
    Hello world!
    <br />
    <br />
    <CatPicker />
  </div>
);
