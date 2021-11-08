import React, { useState } from "react";

import Button from "../button";
import Icons from "../icons";
import Text from "../text";

import { S } from "./ToggleList.styles";

export default function ToggleList({ title, data, ...rest }) {
  const [isListOpen, setListOpen] = useState(false);

  function _handleClick() {
    setListOpen(!isListOpen);
  }

  return (
    <S.Toggle className={isListOpen ? "active" : ""} {...rest}>
      <Button
        onClick={() => {
          _handleClick();
        }}
      >
        <Text color="greyDark">{title}</Text>
        <Icons icon="arrowdown" />
      </Button>
      <div>
        {data.map((item, idx) => {
          return <Text key={idx}>{item}</Text>;
        })}
      </div>
    </S.Toggle>
  );
}
