import React from "react";
import Header from "./components/Header";
import HomeDeAcesso from "./components/Home";

// Componentes das Aulas
import JSXArrays from "../JSX/JSXArrays";
import ExercicioJSX from "../JSX/ExercicioJSX";
import ExercicioJSXArrays from "../JSX/ExercicioJSXArrays";
import DesafioComponentes from "../02-10-componentes/DesafioComponentes";
import Props from "../02-11-propriedades/FormProps";

const HomeAcesso = () => {
  const { pathname } = window.location;

  let ComponentSelected = HomeDeAcesso;

  // JSX
  if (pathname === "/JSX/JSXArrays") {
    ComponentSelected = JSXArrays;
  }
  if (pathname === "/JSX/ExercicioJSX") {
    ComponentSelected = ExercicioJSX;
  }
  if (pathname === "/JSX/ExercicioJSXArrays") {
    ComponentSelected = ExercicioJSXArrays;
  }

  // Compenentes
  if (pathname === "/DesafioComponentes/Home") {
    ComponentSelected = DesafioComponentes;
  }
  if (pathname === "/DesafioComponentes/Produtos") {
    ComponentSelected = DesafioComponentes;
  }

  // Propriedades
  if (pathname === "/Props") {
    ComponentSelected = Props;
  }

  return (
    <section>
      <div style={{ display: "flex" }}>
        <div style={{ width: "25%" }}>
          <Header />
        </div>
        <div style={{ width: "75%" }}>
          <ComponentSelected />
        </div>
      </div>
    </section>
  );
};

export default HomeAcesso;
