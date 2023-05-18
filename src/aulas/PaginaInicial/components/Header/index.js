import React from 'react';

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <a href="/pagina-inicial">Página Inicial</a>
        </li>
      </ul>

      <h4>React para Iniciantes</h4>
      <ul>
        <li>
          <a href="/02-react-para-iniciantes/jsx/jsx-arrays">JSX: Arrays</a>
        </li>
        <li>
          <a href="/02-react-para-iniciantes/jsx/exercicio-jsx">
            Exercicio: JSX
          </a>
        </li>
        <li>
          <a href="/02-react-para-iniciantes/jsx/exercicio-jsx-arrays">
            Exercício: JSX Arrays
          </a>
        </li>
        <li>
          <a href="/02-react-para-iniciantes/desafio-componentes">
            Componentes
          </a>
        </li>
        <li>
          <a href="/02-react-para-iniciantes/propriedades">Propriedades</a>
        </li>
      </ul>

      <h4>React Hooks</h4>
      <ul>
        <li>
          <a href="/03-react-hooks/index">Link 1 React Hooks</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
