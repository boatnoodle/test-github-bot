import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { waitFor } from "@testing-library/dom";
import { PokemonSearchPage } from "../pages/PokemonSearchPage";
import { ApolloProvider } from "@apollo/client";
import { client } from "graphql-client/client";
import "@testing-library/jest-dom";

describe("<PokemonSearch />", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  test("should render correctly pokemon type ", async () => {
    const { getByTestId } = render(
      <ApolloProvider client={client}>
        <PokemonSearchPage />
      </ApolloProvider>
    );

    await waitFor(() => {
      fireEvent.change(getByTestId("searchTextInput"), {
        target: { value: "Pikachu" },
      });

      expect(getByTestId("types")).toHaveTextContent("Electric");
    });
  });
});
