import styled from "@emotion/styled";
import theme from "../../theme";

export const S = {};

S.Container = styled.div({
  height: 55,
  borderRadius: 27.5,
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  background: theme.colors.redLight,
  "& p": {
    padding: "0 15px",
  },
  "@media (max-width:600px)": {
    height: 40,
    "& p": {
      padding: "0 10px",
    },
  },
});

S.IconContianer = styled.div({
  width: 55,
  height: "100%",
  background: theme.colors.redDark,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& img": {
    height: "40%",
  },
  "@media (max-width:600px)": {
    width: 40,
  },
});
