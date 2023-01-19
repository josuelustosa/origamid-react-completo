import React from "react";

function Titulo({cor, texto, children}) {
  return (
    <section>
      <h1 style={{ color: cor }}>{texto} - {children}</h1>
    </section>
  );
}

export default Titulo;
