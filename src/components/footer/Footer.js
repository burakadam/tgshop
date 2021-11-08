import React from "react";

import Icons from "../icons";
import Link from "../link";
import Safe from "../safe";
import Text from "../text";

import footerList from "../../constants/footer";

import { S } from "./Footer.styles";
import ToggleList from "../toggleList/ToggleList";

export default function Footer() {
  return (
    <S.Footer>
      <Safe>
        <S.StoreAndSocial>
          <S.Store>
            <Link to="/" isExternal>
              <Icons icon="ios" />
            </Link>
            <Link to="/" isExternal>
              <Icons icon="android" />
            </Link>
          </S.Store>
          <S.Social>
            <Link to="/" isExternal>
              <Icons icon="instagram" />
            </Link>
            <Link to="/" isExternal>
              <Icons icon="facebook" />
            </Link>
            <Link to="/" isExternal>
              <Icons icon="twitter" />
            </Link>
          </S.Social>
        </S.StoreAndSocial>
        <S.ListContainer>
          <div>
            <Icons icon="bitmap" />
            <S.Seperator />
            <Link to="mailto:lipsum@tiklagelsin.com" isExternal>
              <Text color="greyDark">lipsum@tiklagelsin.com</Text>
            </Link>
          </div>
          <>
            {footerList.map((item, idx) => {
              return (
                <S.List key={idx}>
                  <Text as="h4" font="helvaticaBold">
                    {item.label}
                  </Text>
                  <S.Seperator isList />
                  {item.list.map((el, index) => {
                    return (
                      <>
                        {el.data ? (
                          <ToggleList
                            title={el.label}
                            data={el.data}
                            key={index}
                          />
                        ) : (
                          <Text
                            color="greyDark"
                            font={
                              el.isBold ? "helvaticaBold" : "helvaticaLight"
                            }
                            key={index}
                          >
                            {el.label}
                          </Text>
                        )}
                      </>
                    );
                  })}
                </S.List>
              );
            })}
          </>
        </S.ListContainer>
        <S.Brands>
          <Icons icon="bitmap" />
          <S.Seperator isHorizantal />
          <Icons icon="bitmap" />
          <S.Seperator isHorizantal />
          <Icons icon="bitmap" />
        </S.Brands>
        <Text as="h2" size="xl" font="helvaticaBold">
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </Safe>
    </S.Footer>
  );
}
