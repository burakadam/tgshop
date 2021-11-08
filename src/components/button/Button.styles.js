import styled from "@emotion/styled";

export const S = {};

S.Button = styled.button(({ backgroundColor }) => ({
  backgroundColor: backgroundColor || "transparent",
  border: "none",
  borderRadius: 5,
  outline: 0,
  cursor: "pointer",
}));
