import React from "react";
import ReactDOM from "react-dom/client";

// Aulas
import ExercicioJSX from "./aulas/ExercicioJSX";
import JSXArrays from "./aulas/JSXArrays";
import ExercicioJSXArrays from "./aulas/ExercicioJSXArrays";
import Header from "./aulas/componentes/02-10-Components/Header";
import Footer from "./aulas/componentes/02-10-Components/Footer";
import Form from "./aulas/componentes/02-10-Components/Form/Form";
import Titulo from "./aulas/props/Titulo";
import FormProps from "./aulas/props/FormProps";
import Challenge from "./aulas/componentes/Challenge";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ExercicioJSX /> */}
    {/* <JSXArrays /> */}
    {/* {<ExercicioJSXArrays />} */}

    {/* Components */}
    {/* <>
      <Header />
      <Form />
      <Footer />
    </> */}

    {/* Props */}
    {/* <>
      <Titulo texto="Meu Primeiro Título com Props" cor="red" />
      <Titulo texto="Meu Segundo Título com Props" cor="blue" />
      <Titulo texto="Meu Terceiro Título com Props e Children" cor="green">
        Isso é o Children do elemento h1 utilizando Props.
        <p>Passando um elemento "P" HTML por Children.</p>
      </Titulo>
    </> */}
    {/* <>
      <FormProps />
    </> */}

    {/* Challenge */}
    <Challenge />
  </React.StrictMode>
);
