import styled from "@emotion/styled";
import theme from "../../theme";

export const S = {};

S.Tag = styled.div({
  border: `1px solid ${theme.colors.greyLight}`,
  display: "flex",
  alignItems: "center",
  padding: 12,
  borderRadius: 10,
  marginRight: 10,
  marginBottom: 10,
  "& img": {
    height: 20,
    marginRight: 10,
  },
});
