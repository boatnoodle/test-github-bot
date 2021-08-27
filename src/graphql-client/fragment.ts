import gql from "graphql-tag";

export const POKEMON = gql`
  fragment pokemon on Pokemon {
    id
    number
    name
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
    classification
    types
    resistant
    weaknesses
    fleeRate
    maxCP
    maxHP
    image
  }
`;
