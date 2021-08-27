import React from "react";
import GlobalStyle from "global-styles";
import { Switch, Route } from "react-router-dom";
import { LayoutMain } from "components/Layout";
import { ApolloProvider } from "@apollo/client";
import { client } from "graphql-client/client";
import { PokemonSearchPage } from "pages/PokemonSearchPage";

function App() {
  return (
    <ApolloProvider client={client}>
      <Switch>
        <LayoutMain>
          <Route exact path="/" component={PokemonSearchPage} />
        </LayoutMain>
      </Switch>
      <GlobalStyle />
    </ApolloProvider>
  );
}

export default App;
