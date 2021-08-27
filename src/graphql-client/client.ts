import apolloLogger from "apollo-link-logger";
import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    // Handle Errors
    console.log("operation::", operation);
    console.log("graphql errors::", graphQLErrors);
  }

  forward(operation);
});

const uri = process.env.REACT_APP_GRAPHQL_API;

const httpLink = new HttpLink({
  uri,
});

const apolloHttpLink = from([apolloLogger, errorLink, httpLink]);

export const client = new ApolloClient({
  link: apolloHttpLink,
  cache: new InMemoryCache(),
});
