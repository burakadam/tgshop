import React from "react";
import { S } from "./Button.styles";

export default function Button({
  type = "button",
  className,
  children,
  backgroundColor,
  ...rest
}) {
  return (
    <S.Button
      type={type}
      className={className}
      {...rest}
      backgroundColor={backgroundColor}
    >
      {children}
    </S.Button>
  );
}
