import React from "react";

import { S } from "./MenuButton.styles";

export default function MenuButton({ ...rest }) {
  return (
    <S.Button {...rest}>
      <span />
      <span />
      <span />
    </S.Button>
  );
}
