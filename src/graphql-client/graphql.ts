import gql from "graphql-tag";
import { POKEMON } from "./fragment";

export const GET_POKEMONS = gql`
  query GetPokemons($first: Int!) {
    pokemons(first: $first) {
      ...pokemon
      evolutions {
        id
        number
        name
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        evolutions {
          ...pokemon
        }
        maxHP
        image
      }
    }
  }
  ${POKEMON}
`;

export const GET_POKEMON = gql`
  query GetPokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      ...pokemon
    }
  }
  ${POKEMON}
`;
