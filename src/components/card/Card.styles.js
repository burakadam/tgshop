import styled from "@emotion/styled";

import theme from "../../theme";
import Button from "../button";

export const S = {};

S.Card = styled.div({
  background: theme.colors.white,
  borderRadius: 10,
  padding: 25,
  "& > h3": {
    textAlign: "center",
  },
});

S.ImageContainer = styled.div({
  width: "100%",
  height: 150,
  border: `1px solid ${theme.colors.greyLight}`,
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "25px 0",
  "& img": {
    width: "auto",
    height: "50%",
  },
});

S.Tags = styled.div({
  display: "flex",
  flexWrap: "wrap",
});

S.CardFooter = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginTop: 20,

  "@media (max-width:1024px)": {
    flexDirection: "column",
  },
});

S.Price = styled.div({
  "& > div": {
    display: "flex",
    alignItems: "center",
  },
  "& > div > span": {
    display: "inline-block",
    height: 26,
    lineHeight: "26px",
    background: theme.colors.redLight,
    borderRadius: 5,
    padding: "0 12px",
    marginLeft: 12,
  },
});

S.PlusButton = styled(Button)({
  background: theme.colors.redLight,
  height: 50,
  width: 50,
  borderRadius: "50%",
  position: "relative",
  "& span": {
    display: "block",
    width: 30,
    height: 4,
    background: theme.colors.white,
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: "auto",
    transition: "transform 250ms ease-in-out",
  },
  "& span:last-child": {
    transform: "rotate(-90deg)",
  },

  "&.added": {
    background: theme.colors.blueDark,
  },

  "&.added span:last-child": {
    transform: "rotate(0deg)",
  },

  "@media (max-width:1024px)": {
    width: "100%",
    borderRadius: 10,
    marginTop: 20,
  },
});
