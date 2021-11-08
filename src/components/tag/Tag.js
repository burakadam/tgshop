import React from "react";

import Icons from "../icons";
import Text from "../text";

import { S } from "./Tag.styles";

export default function Tag({ label }) {
  return (
    <S.Tag>
      <Icons icon="burger" />
      <Text color="greyDark" size="sm">
        {label}
      </Text>
    </S.Tag>
  );
}
