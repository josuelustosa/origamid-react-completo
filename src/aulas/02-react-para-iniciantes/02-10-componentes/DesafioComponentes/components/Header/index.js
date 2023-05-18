import React from 'react';
import './style.css';

const Header = () => {
  return (
    <header>
      <ul class="header-componentes">
        <li>
          <a href="/02-react-para-iniciantes/desafio-componentes">
            Início
          </a>
        </li>
        <li>
          <a href="/02-react-para-iniciantes/desafio-componentes/produtos">
            Produtos
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
