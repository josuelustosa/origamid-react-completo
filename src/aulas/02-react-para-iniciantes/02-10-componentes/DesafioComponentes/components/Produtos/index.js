import React from 'react';
import Titulo from '../Título';

import '../../assets/Table.css';

// Dados dos prdutos
import { PRODUTOS } from '../../mock/produtos.mock';

const Produtos = () => {
  return (
    <div>
      <Titulo texto="Produtos - Componentes" />
      <p>
        Confira a seguir nossos produtos ou retorne para&nbsp;
        <a href="/02-react-para-iniciantes/desafio-componentes">
          Página Inicial
        </a>
        .
      </p>
      <table id="customers">
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>RAM / Armazenamento</th>
          <th>Cores</th>
          <th>Preço</th>
        </tr>
        {PRODUTOS.map(({ nome, propriedades, cor, preco }, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{nome}</td>
            {propriedades.map((item) => (
              <td>
                {item.ram.toUpperCase()} / {item.armazenamento.toUpperCase()}
              </td>
            ))}
            <td>
              {cor.map((cor) => (
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: cor,
                    border: `2.5px solid ${
                      cor === '#ffffff' ? '#000000' : cor
                    }`,
                    display: 'inline-block',
                    marginRight: '4px',
                  }}
                ></div>
              ))}
            </td>
            <td>R$ {preco}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Produtos;
