import styled from "@emotion/styled";

export const S = {};

const centerFlex = {
  display: "flex",
  alignItems: "center",
};

S.Container = styled.div({
  ...centerFlex,
  padding: "20px 0",
  "& > div": {
    ...centerFlex,
  },
  "& img": {
    height: 15,
    margin: "0 15px",
  },
  "& div:last-of-type img": {
    display: "none",
  },
  " & div:last-of-type a": {
    textDecoration: "underline",
  },
});
