import React from "react";
import GlobalStyle from "global-styles";
import { Switch, Route } from "react-router-dom";
import { LayoutMain } from "components/Layout";
import { HomePage } from "pages/home";

function App() {
  return (
    <>
      <Switch>
        <LayoutMain>
          <Route exact path="/" component={HomePage} />
        </LayoutMain>
      </Switch>
      <GlobalStyle />
    </>
  );
}

export default App;
