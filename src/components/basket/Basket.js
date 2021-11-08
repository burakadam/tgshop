import React from "react";

import Icons from "../icons";
import Text from "../text";

import { S } from "./Basket.styles";

export default function Basket({ count = "0,00" }) {
  return (
    <S.Container>
      <S.IconContianer>
        <Icons icon="basket" iconalt="basket" />
      </S.IconContianer>
      <Text font="helvaticaBold" color="white">
        {count} TL
      </Text>
    </S.Container>
  );
}
