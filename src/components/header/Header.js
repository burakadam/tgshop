import React, { useState } from "react";

import Safe from "../safe";
import Link from "../link";
import Icons from "../icons";
import Input from "../input";
import Text from "../text";
import Basket from "../basket";
import MenuButton from "../menuButton";

import { S } from "./Header.styles";
import { useSelector } from "react-redux";

export default function Header() {
  const productPriceState = useSelector((state) => state.product.price);

  const [isMenuOpen, setMenuOpen] = useState(false);

  function _hanleMenuButton() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <S.Header className={isMenuOpen ? "menuOpen" : ""}>
      <Safe>
        <S.HeaderContainer>
          <Link to="/" id="header__logo">
            <Icons icon="bitmap" />
          </Link>
          <S.Menu>
            <S.MenuContainer>
              <S.Search>
                <Input placeholder="Search" icon="search" />
              </S.Search>
              <Link icon="notification" iconalt="Ipsum" to="/">
                <Text>Ipsum</Text>
              </Link>
              <Link icon="settings" iconalt="Ipsum" to="/">
                <Text>Ipsum</Text>
              </Link>
              <Link icon="bell" iconalt="bell" to="/" />
            </S.MenuContainer>
          </S.Menu>
          <S.BasketAndMenuButton>
            <Basket count={productPriceState} />
            <MenuButton
              onClick={() => {
                _hanleMenuButton();
              }}
            />
          </S.BasketAndMenuButton>
        </S.HeaderContainer>
      </Safe>
    </S.Header>
  );
}
