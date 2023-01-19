import React from "react";
import ReactDOM from "react-dom/client";

// AULAS
// JSX
import ExercicioJSX from "./aulas/JSX/ExercicioJSX";
import JSXArrays from "./aulas/JSX/JSXArrays";
import ExercicioJSXArrays from "./aulas/JSX/ExercicioJSXArrays";

// 02-10-components
import Header from "./aulas/02-10-componentes/Header";
import Footer from "./aulas/02-10-componentes/Footer";
import Form from "./aulas/02-10-componentes/Form/Form";
import DesafioComponentes from "./aulas/02-10-componentes/DesafioComponentes";

// 02-11-propriedades
import Titulo from "./aulas/02-11-propriedades/Titulo";
import FormProps from "./aulas/02-11-propriedades/FormProps";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* JSX */}
    {/* <ExercicioJSX /> */}
    {/* <JSXArrays /> */}
    {/* {<ExercicioJSXArrays />} */}

    {/* Componentes */}
    {/* <>
      <Header />
      <Form />
      <Footer />
    </> */}
    {/* <DesafioComponentes /> */}

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
  </React.StrictMode>
);
