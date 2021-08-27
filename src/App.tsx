import React from "react";
import GlobalStyle from "global-styles";
import { Switch, Route } from "react-router-dom";
import { LayoutMain } from "components/Layout";
import { HomePage } from "pages/home";
import { ApolloProvider } from "@apollo/client";
import { client } from "graphql-client/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <Switch>
        <LayoutMain>
          <Route exact path="/" component={HomePage} />
        </LayoutMain>
      </Switch>
      <GlobalStyle />
    </ApolloProvider>
  );
}

export default App;
