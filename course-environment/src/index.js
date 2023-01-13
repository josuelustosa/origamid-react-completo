import React from "react";
import ReactDOM from "react-dom/client";

// Aulas
import ExercicioJSX from "./aulas/ExercicioJSX";
import JSXArrays from "./aulas/JSXArrays";
import ExercicioJSXArrays from "./aulas/ExercicioJSXArrays";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ExercicioJSX /> */}
    {/* <JSXArrays /> */}
    {<ExercicioJSXArrays />}
  </React.StrictMode>
);
