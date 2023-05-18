import React from 'react';
import Header from './components/Header';
import HomeDeAcesso from './components/Home';

// Componentes das Aulas
import JSXArrays from '../02-react-para-iniciantes/JSX/JSXArrays';
import ExercicioJSX from '../02-react-para-iniciantes/JSX/ExercicioJSX';
import ExercicioJSXArrays from '../02-react-para-iniciantes/JSX/ExercicioJSXArrays';

import DesafioComponentes from '../02-react-para-iniciantes/02-10-componentes/DesafioComponentes';
import DesafioComponentesProdutos from '../02-react-para-iniciantes/02-10-componentes/DesafioComponentes/components/Produtos';

import Props from '../02-react-para-iniciantes/02-11-propriedades/FormProps';

import Index from '../03-react-hooks'

const PaginaInicial = () => {
  const { pathname } = window.location;

  let ComponentSelected = HomeDeAcesso;

  // JSX
  if (pathname === '/02-react-para-iniciantes/jsx/jsx-arrays') {
    ComponentSelected = JSXArrays;
  }

  if (pathname === '/02-react-para-iniciantes/jsx/exercicio-jsx') {
    ComponentSelected = ExercicioJSX;
  }

  if (pathname === '/02-react-para-iniciantes/jsx/exercicio-jsx-arrays') {
    ComponentSelected = ExercicioJSXArrays;
  }

  // Compenentes
  if (pathname === '/02-react-para-iniciantes/desafio-componentes') {
    ComponentSelected = DesafioComponentes;
  }
  
  if (pathname === '/02-react-para-iniciantes/desafio-componentes/produtos') {
    ComponentSelected = DesafioComponentesProdutos;
  }

  // Propriedades
  if (pathname === '/02-react-para-iniciantes/propriedades') {
    ComponentSelected = Props;
  }

  if (pathname === '/03-react-hooks/index') {
    ComponentSelected = Index;
  }

  return (
    <section>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '25%' }}>
          <Header />
        </div>
        <div style={{ width: '75%' }}>
          <ComponentSelected />
        </div>
      </div>
    </section>
  );
};

export default PaginaInicial;
