import styled from "@emotion/styled";

export const S = {};

S.Toggle = styled.div({
  "& > button": {
    display: "flex",
    alignItems: "center",
    "& img": {
      width: 16,
      height: 10,
      marginLeft: 16,
    },
  },
  "&.active > button img": {
    transform: "rotate(180deg)",
  },

  "& > div": {
    maxHeight: 0,
    overflow: "hidden",
    margin: "6px 0",
    paddingLeft: 10,
  },

  "&.active > div": {
    maxHeight: 500,
  },

  "@media (max-width:1024px)": {
    "& > div": {
      textAlign: "center",
    },
  },
});
