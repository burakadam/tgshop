import React from "react";

import { S } from "./Text.styles";

export default function Text({
  color = "blueDark",
  font = "helvaticaLight",
  size = "md",
  children,
  underline = false,
  ...rest
}) {
  return (
    <S.Text
      color={color}
      font={font}
      size={size}
      {...rest}
      underline={underline}
    >
      {children}
    </S.Text>
  );
}
