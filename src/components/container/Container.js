import React from "react";

import { S } from "./Container.styles";

export default function Container({ children }) {
  return <S.Container>{children}</S.Container>;
}
