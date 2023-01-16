import React from "react";
import Titulo from "../Título";

const Home = () => {
  return (
    <div>
      <Titulo text="Página Inicial" />
      <p>
        {`Olá, seja bem-vindo(a)! Clique `}
        <a href="/Produtos">aqui</a>
        {` ou no link acima para acessar nossos produtos...`}
      </p>
    </div>
  );
};

export default Home;
