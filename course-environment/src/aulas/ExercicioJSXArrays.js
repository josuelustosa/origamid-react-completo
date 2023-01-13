import React from "react";

const ExercicioJSXArrays = () => {
  const produtos = [
    {
      id: 1,
      nome: "Smartphone",
      preco: "R$ 2000",
      cores: ["#29d8d5", "#252a34", "#fc3766"],
    },
    {
      id: 2,
      nome: "Notebook",
      preco: "R$ 3000",
      cores: ["#ffd045", "#d4394b", "#f37c59"],
    },
    {
      id: 3,
      nome: "Tablet",
      preco: "R$ 1500",
      cores: ["#365069", "#47c1c8", "#f95786"],
    },
    {
      id: 4,
      nome: "Xbox Series S",
      preco: "R$ 2000",
      cores: ["#ffffff"],
    },
    {
      id: 5,
      nome: "Controle Xbox S|X",
      preco: "R$ 499",
      cores: ["#d4394b", "#08f26e"],
    },
  ];

  return (
    <section>
      <h2>Array de Objetos</h2>
      <hr />

      <div>
        {produtos
          .filter((produto) => Number(produto.preco.replace("R$ ", "") > 1500))
          .map((produto) => (
            <div key={produto.id}>
              <h3>{produto.nome}</h3>
              <p>Preço: {produto.preco}</p>
              <ul>
                {produto.cores.map((cor) => (
                  <li
                    key={cor}
                    style={{
                      listStyleType: "none",
                      backgroundColor: cor,
                      color: cor === "#ffffff" ? "black" : "white",
                      borderStyle: cor === "#ffffff" ? "solid" : "none",
                      borderColor: cor === "#ffffff" ? "black" : "white",
                    }}
                  >
                    {cor}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ExercicioJSXArrays;
