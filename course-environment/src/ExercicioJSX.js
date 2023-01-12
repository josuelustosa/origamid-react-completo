import React from "react";

const vitoria = {
  cliente: "Vitória",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  status: true,
};

const lucas = {
  cliente: "Lucas",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  status: false,
};

const ExercicioJSX = () => {
  const dados = lucas;
  const total = dados.compras
    .map((item) => Number(item.preco.replace("R$ ", "")))
    .reduce((a, b) => a + b);

  const spanDestaque = {
    fontWeight: 700,
  };

  return (
    <>
      <h1>Meu App React</h1>
      <hr />
      <h3>Exercício JSX</h3>

      <div>
        <p>
          <span style={spanDestaque}>Nome: </span>
          {dados.cliente}
        </p>
        <p>
          <span style={spanDestaque}>Idade: </span>
          {dados.idade}
        </p>
        <p>
          <span style={spanDestaque}>Situação: </span>
          <span style={{ color: dados.status ? "green" : "red" }}>
            {dados.status ? "Ativa" : "Inativa"}
          </span>
        </p>
        <p>
          <span style={spanDestaque}>Total gasto: </span>
          R$ {total}{" "}
          {total > 10000 && (
            <i>
              {`(`}Você está gastando muito.{`)`}
            </i>
          )}
        </p>
      </div>
    </>
  );
};

export default ExercicioJSX;
