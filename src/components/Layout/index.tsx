import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid;
  max-width: 1024px;
  margin: 0 auto;
  padding: 24px;
  min-height: 100vh;
`;

export const LayoutMain: React.FC<any> = ({ children }) => {
  return <Container>{children}</Container>;
};
