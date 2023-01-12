import React from "react";
import ReactDOM from "react-dom/client";

// Aulas
import ExercicioJSX from "./aulas/ExercicioJSX";
import JSXArrays from "./aulas/JSXArrays";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ExercicioJSX /> */}
    <JSXArrays />
  </React.StrictMode>
);
