import React from "react";
import Header from "./components/Header";
import HomeDeComponentes from "./components/Home";
import Produtos from "./components/Produtos";

const DesafioComponentes = () => {
  // Replique a interface como a apresentada na aula
  // Utilize a array abaixo para mostrar os produtos
  // Quebre em componentes o que precisar ser reutilizado
  // Dica: const { pathname } = window.location; (puxa o caminho do URL)

  const { pathname } = window.location;

  let ComponentSelected = HomeDeComponentes;

  if (pathname === "/DesafioComponentes/Produtos") {
    ComponentSelected = Produtos;
  }

  return (
    <section>
      <Header />
      <ComponentSelected />
    </section>
  );
};

export default DesafioComponentes;
