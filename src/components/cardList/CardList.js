import React, { useEffect, useState } from "react";

import Card from "../card/Card";

import { getCards } from "../../helpers/CardHelper";
import { S } from "./CardList.styles";

import { useSelector } from "react-redux";

export default function CardList() {
  const productState = useSelector((state) => state.product);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(getCards(productState.filter, productState.productList));
  }, [productState.filter]);

  return (
    <S.List>
      {cards.map((item) => {
        return <Card data={item} key={item.id} />;
      })}
    </S.List>
  );
}
