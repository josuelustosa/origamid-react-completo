import React from "react";
import Titulo from "../Titulo";
import Button from "./Button";
import Input from "./Input";

const FormProps = () => {
  return (
    <div>
      <Titulo texto="Propriedades (Props)" cor="#018" />
      <Input id="email" label="Email" type="email" required />
      <Input id="senha" label="Senha" type="password" />
      <Button />
    </div>
  );
};

export default FormProps;
