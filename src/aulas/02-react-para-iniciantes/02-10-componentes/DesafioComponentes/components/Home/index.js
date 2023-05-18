import React from 'react';
import Titulo from '../Título';

const Home = () => {
  return (
    <div>
      <Titulo texto="Início - Componentes" />
      <p>
        Clique&nbsp;
        <a href="/02-react-para-iniciantes/desafio-componentes/produtos">
          aqui
        </a>
        &nbsp;ou no menu acima para acessar nossos produtos.
      </p>
    </div>
  );
};

export default Home;
