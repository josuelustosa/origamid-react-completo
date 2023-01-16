import React from "react";
import Button from "./Button";
import Input from "./Input";

const FormProps = () => {
  return (
    <div>
      <Input id="email" label="Email" type="email" required/>
      <Input id="senha" label="Senha" type="password" />
      <Button />
    </div>
  );
};

export default FormProps;
