import React from "react";
import Icons from "../icons";
import { S } from "./Input.styles";

export default function Input({ type = "text", icon, label, placeholder }) {
  const inputID = Date.now();
  return (
    <S.Container>
      <label htmlFor={inputID}>{label}</label>
      <S.Input type={type} placeholder={placeholder} id={inputID} />
      {icon && <Icons className="input-icon" alt={placeholder} icon={icon} />}
    </S.Container>
  );
}
