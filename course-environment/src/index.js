import React from "react";
import ReactDOM from "react-dom/client";

// Aulas
import ExercicioJSX from "./aulas/ExercicioJSX";
import JSXArrays from "./aulas/JSXArrays";
import ExercicioJSXArrays from "./aulas/ExercicioJSXArrays";
import Header from "./aulas/components/02-10-Components/Header";
import Footer from "./aulas/components/02-10-Components/Footer";
import Form from "./aulas/components/02-10-Components/Form/Form";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ExercicioJSX /> */}
    {/* <JSXArrays /> */}
    {/* {<ExercicioJSXArrays />} */}

    {/* Components */}
    <>
      <Header />
      <Form />
      <Footer />
    </>
  </React.StrictMode>
);
