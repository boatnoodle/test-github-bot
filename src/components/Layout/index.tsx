import React from "react";
import { Layout, Menu } from "antd";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
const { Header, Content } = Layout;

const StyledContent = styled(Content)`
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  padding: 24;
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

  return (
    <>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["todo-list"]}
            onClick={handleMenu}
          >
            <Menu.Item key="home">Home</Menu.Item>
          </Menu>
        </Header>
        <Layout style={{ padding: "0 24px 24px" }}>
          <StyledContent className="site-layout-background">
            {children}
          </StyledContent>
        </Layout>
      </Layout>
    </>
  );
};
