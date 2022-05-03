import React from "react";
import ReactDOM from "react-dom/client";
import mollyPic from "./assets/molly.jpg";

// Create the root React element in the "root" div on the page.
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render our React app.
root.render(
  <div>
    <img src={mollyPic} />
    Hello React world!
  </div>
);
