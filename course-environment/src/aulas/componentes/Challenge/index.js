import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Produtos from "./components/Produtos";

const Challenge = () => {
  // Replique a interface como a apresentada na aula
  // Utilize a array abaixo para mostrar os produtos
  // Quebre em componentes o que precisar ser reutilizado
  // Dica: const { pathname } = window.location; (puxa o caminho do URL)

  const { pathname } = window.location;

  let ComponentSelected;
  if (pathname === "/Produtos") {
    ComponentSelected = Produtos;
  } else {
    ComponentSelected = Home;
  }

  return (
    <section>
      <Header />
      <ComponentSelected />
    </section>
  );
};

export default Challenge;
