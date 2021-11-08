import styled from "@emotion/styled";

import theme from "../../theme";

export const S = {};

S.Header = styled.header({
  background: theme.colors.white,
  position: "relative",
  zIndex: 150,
});

S.HeaderContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: 117,
  "& #header__logo": {
    height: 60,
    "& img": {
      height: "100%",
    },
  },
  "@media (max-width:1024px)": {
    height: 90,
    "& #header__logo": {
      height: 40,
    },
  },
});

S.Menu = styled.div({
  flex: 1,
  "@media (max-width:1024px)": {
    position: "fixed",
    left: "100%",
    top: 0,
    width: "100%",
    height: "100%",
  },
});

S.MenuContainer = styled.div({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  "& a": {
    marginRight: 20,
  },
  "@media (max-width:1024px)": {
    height: "100%",
    background: theme.colors.white,
    zIndex: 90,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    padding: "90px 20px 0 20px",
    transition: "transform 300ms ease-in-out",
    "header.menuOpen & ": {
      transform: "translate3d(-100%,0,0)",
    },
    "& a": {
      marginRight: 0,
      marginBottom: 20,
    },
  },
});

S.Search = styled.div({
  flex: 1,
  maxWidth: 710,
  margin: "0 50px",
  "@media (max-width:1024px)": {
    flex: "unset",
    width: "100%",
    maxWidth: "unset",
    margin: 0,
    marginBottom: 20,
  },
});

S.BasketAndMenuButton = styled.div({
  display: "flex",
  alignItems: "center",
});
