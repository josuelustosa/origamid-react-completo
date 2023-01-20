import React from "react";

function Titulo({ cor, texto, children }) {
  return (
    <h1 style={{ color: cor, fontSize: "24px" }}>
      {texto}
      {children}
    </h1>
  );
}

export default Titulo;
