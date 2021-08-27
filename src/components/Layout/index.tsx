import React from "react";
import { Layout, Menu } from "antd";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  const handleMenu = ({ key }) => {
    switch (key) {
      case "home":
        history.push("/");
        break;
      default:
        break;
    }
  };

  return <Container>{children}</Container>;
};
