import styled from "@emotion/styled";

export const S = {};

S.Container = styled.div({
  display: "flex",
  "& > *:last-child": {
    flex: 1,
  },
  "@media (max-width:1024px)": {
    flexDirection: "column",
  },
});
