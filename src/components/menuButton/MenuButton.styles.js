import styled from "@emotion/styled";
import theme from "../../theme";

import Button from "../button";

export const S = {};

S.Button = styled(Button)({
  width: 50,
  height: 50,
  position: "relative",
  marginLeft: 20,
  zIndex: 999,
  display: "none",
  "& span": {
    width: "60%",
    height: 3,
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: "auto",
    background: theme.colors.black,
    transition: "transform 300ms ease-in-out",
  },
  "& span:first-of-type": {
    transform: "translate3d(0,-8px,0)",
  },
  "& span:last-of-type": {
    transform: "translate3d(0,8px,0)",
  },
  "header.menuOpen & span:first-of-type,header.menuOpen & span:last-of-type": {
    transform: "translate3d(0,0,0)",
  },

  "@media (max-width:1024px)": {
    display: "block",
  },
  "@media (max-width:600px)": {
    marginLeft: 10,
  },
});
