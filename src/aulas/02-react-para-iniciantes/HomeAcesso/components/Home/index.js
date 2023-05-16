import React from "react";
import Titulo from "./../../../../../components/Titulo";
import Header from "../Header";

const Home = () => {
  return (
    <div>
      <Titulo texto="Página Inicial de Acesso" />
      <p>{`Essa página gerencia e renderiza dinâmicamente (sem uso de biblioteca de rotas) as demais páginas desenvolvidas ao decorrer do curso`}</p>
      <Header />
    </div>
  );
};

export default Home;
