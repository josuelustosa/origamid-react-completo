import React from "react";
import ReactDOM from "react-dom/client";

// Página de Acesso que renderiza os componentes dinâmicamente
import PaginaInicial from "./aulas/PaginaInicial";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PaginaInicial />
  </React.StrictMode>
);
