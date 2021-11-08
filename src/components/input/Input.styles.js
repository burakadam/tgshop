import styled from "@emotion/styled";

import theme from "../../theme";

export const S = {};

S.Container = styled.div({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  "& label": {
    display: "none",
  },
  "& .input-icon": {
    height: 25,
    position: "absolute",
    right: 15,
    top: 0,
    bottom: 0,
    margin: "auto",
  },
});

S.Input = styled.input({
  border: `1px solid ${theme.colors.greyDark}`,
  borderRadius: 10,
  height: 55,
  padding: "0 50px 0 22px",
  fontSize: 16,
  width: "100%",
});
