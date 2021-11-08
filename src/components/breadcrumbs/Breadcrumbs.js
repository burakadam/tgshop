import React from "react";

import Icons from "../icons";
import Link from "../link";
import Text from "../text";

import { S } from "./Breadcrumbs.styles";

const urls = [
  { url: "/", title: "Ipsum1" },
  { url: "/", title: "Ipsum2" },
];

export default function Breadcrumbs() {
  return (
    <S.Container>
      {urls.map((item, idx) => {
        return (
          <div key={idx}>
            <Link to={item.url}>
              <Text color="blueDark">{item.title}</Text>
            </Link>
            <Icons icon="arrowright" iconalt="arrow right" />
          </div>
        );
      })}
    </S.Container>
  );
}
