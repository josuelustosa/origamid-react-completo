import React from "react";
import ReactDOM from "react-dom/client";

// Página de Acesso que renderiza os componentes dinâmicamente
import HomeAcesso from "./aulas/HomeAcesso";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HomeAcesso />
  </React.StrictMode>
);
