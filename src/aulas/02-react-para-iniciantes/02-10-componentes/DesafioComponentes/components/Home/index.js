import React from "react";
import Titulo from "../Título";

const Home = () => {
  return (
    <div>
      <Titulo texto="Início - Componentes" />
      <p>
        {`Clique `}
        <a href="/DesafioComponentes/Produtos">aqui</a>
        {` ou no link acima para acessar nossos produtos...`}
      </p>
    </div>
  );
};

export default Home;
