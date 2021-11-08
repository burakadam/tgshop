import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePrice, toggleSelectedCard } from "../../features/productSlice";

import Icons from "../icons";
import Tag from "../tag/Tag";
import Text from "../text";

import { S } from "./Card.styles";

export default function Card({ data, ...rest }) {
  const { id, label, price, discountLabel, firstPrice, details } = data;
  const productSelectedList = useSelector(
    (state) => state.product.selectedCards
  );

  const [isAdd, setAdd] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    setAdd(!productSelectedList.includes(id));
  }, []);

  function _handleAddRemove(price) {
    const result = isAdd ? price : -1 * price;

    dispatch(changePrice({ price: result }));
    dispatch(toggleSelectedCard({ isAdd: isAdd, id: id }));
    setAdd(!isAdd);
  }

  return (
    <S.Card {...rest}>
      <Text as="h3" size="xl" font="helvaticaBold">
        {label}
      </Text>
      <S.ImageContainer>
        <Icons icon="bitmap" />
      </S.ImageContainer>
      <>
        {details && (
          <S.Tags>
            {details.map((detail, idx) => {
              return <Tag key={idx} label={detail} />;
            })}
          </S.Tags>
        )}
      </>
      <S.CardFooter>
        <S.Price>
          <Text color="greyDark" underline>
            {firstPrice}
          </Text>
          <div>
            <Text color="redLight" font="helvaticaBold" size="lg">
              {price} TL
            </Text>
            {discountLabel && (
              <Text as="span" color="white">
                {discountLabel}
              </Text>
            )}
          </div>
        </S.Price>
        <S.PlusButton
          data-id={id}
          onClick={() => _handleAddRemove(price)}
          className={isAdd ? "" : "added"}
        >
          <span></span>
          <span></span>
        </S.PlusButton>
      </S.CardFooter>
    </S.Card>
  );
}
