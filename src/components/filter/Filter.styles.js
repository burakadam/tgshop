import styled from "@emotion/styled";
import theme from "../../theme";

export const S = {};

S.Aside = styled.aside({
  "& > button": {
    display: "none",
  },
  "@media (max-width:1024px)": {
    width: "100%",
    height: 50,

    "& > button": {
      width: 214,
      display: "flex",
      justifyContent: "space-between",
      height: 50,
      alignItems: "center",
      padding: "0 2em",
      background: theme.colors.white,
      borderRadius: 20,

      "& img": {
        height: 10,
        marginLeft: 10,
      },
    },
    "&.filter-open > button": {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      "& img": {
        transform: "rotate(180deg)",
      },
    },
  },
});

S.Filters = styled.div({
  width: 214,
  display: "flex",
  flexDirection: "column",
  borderRadius: 20,
  overflow: "hidden",
  position: "relative",
  zIndex: 100,
  "& button": {
    height: 70,
    textAlign: "left",
    background: theme.colors.redLight,
    borderRadius: 0,
    paddingLeft: "2em",
    flexShrink: 0,
  },
  "& button:not(:last-of-type)": {
    borderBottom: `1px solid ${theme.colors.white}`,
  },
  "& button.active": {
    background: theme.colors.redDark,
  },
  "@media (max-width:1024px)": {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    maxHeight: 0,

    ".filter-open &": {
      maxHeight: 300,
    },

    "& button": {
      height: 50,
    },
  },
});
