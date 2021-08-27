/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPokemons
// ====================================================

export interface GetPokemons_pokemons_weight {
  __typename: "PokemonDimension";
  /**
   * The minimum value of this dimension
   */
  minimum: string | null;
  /**
   * The maximum value of this dimension
   */
  maximum: string | null;
}

export interface GetPokemons_pokemons_height {
  __typename: "PokemonDimension";
  /**
   * The minimum value of this dimension
   */
  minimum: string | null;
  /**
   * The maximum value of this dimension
   */
  maximum: string | null;
}

export interface GetPokemons_pokemons_attacks_fast {
  __typename: "Attack";
  /**
   * The name of this Pokémon attack
   */
  name: string | null;
  /**
   * The type of this Pokémon attack
   */
  type: string | null;
  /**
   * The damage of this Pokémon attack
   */
  damage: number | null;
}

export interface GetPokemons_pokemons_attacks_special {
  __typename: "Attack";
  /**
   * The name of this Pokémon attack
   */
  name: string | null;
  /**
   * The type of this Pokémon attack
   */
  type: string | null;
  /**
   * The damage of this Pokémon attack
   */
  damage: number | null;
}

export interface GetPokemons_pokemons_attacks {
  __typename: "PokemonAttack";
  /**
   * The fast attacks of this Pokémon
   */
  fast: (GetPokemons_pokemons_attacks_fast | null)[] | null;
  /**
   * The special attacks of this Pokémon
   */
  special: (GetPokemons_pokemons_attacks_special | null)[] | null;
}

export interface GetPokemons_pokemons_evolutions_weight {
  __typename: "PokemonDimension";
  /**
   * The minimum value of this dimension
   */
  minimum: string | null;
  /**
   * The maximum value of this dimension
   */
  maximum: string | null;
}

export interface GetPokemons_pokemons_evolutions_height {
  __typename: "PokemonDimension";
  /**
   * The minimum value of this dimension
   */
  minimum: string | null;
  /**
   * The maximum value of this dimension
   */
  maximum: string | null;
}

export interface GetPokemons_pokemons_evolutions_attacks_fast {
  __typename: "Attack";
  /**
   * The name of this Pokémon attack
   */
  name: string | null;
  /**
   * The type of this Pokémon attack
   */
  type: string | null;
  /**
   * The damage of this Pokémon attack
   */
  damage: number | null;
}

export interface GetPokemons_pokemons_evolutions_attacks_special {
  __typename: "Attack";
  /**
   * The name of this Pokémon attack
   */
  name: string | null;
  /**
   * The type of this Pokémon attack
   */
  type: string | null;
  /**
   * The damage of this Pokémon attack
   */
  damage: number | null;
}

export interface GetPokemons_pokemons_evolutions_attacks {
  __typename: "PokemonAttack";
  /**
   * The fast attacks of this Pokémon
   */
  fast: (GetPokemons_pokemons_evolutions_attacks_fast | null)[] | null;
  /**
   * The special attacks of this Pokémon
   */
  special: (GetPokemons_pokemons_evolutions_attacks_special | null)[] | null;
}

export interface GetPokemons_pokemons_evolutions {
  __typename: "Pokemon";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The identifier of this Pokémon
   */
  number: string | null;
  /**
   * The name of this Pokémon
   */
  name: string | null;
  /**
   * The minimum and maximum weight of this Pokémon
   */
  weight: GetPokemons_pokemons_evolutions_weight | null;
  /**
   * The minimum and maximum weight of this Pokémon
   */
  height: GetPokemons_pokemons_evolutions_height | null;
  /**
   * The classification of this Pokémon
   */
  classification: string | null;
  /**
   * The type(s) of this Pokémon
   */
  types: (string | null)[] | null;
  /**
   * The type(s) of Pokémons that this Pokémon is resistant to
   */
  resistant: (string | null)[] | null;
  /**
   * The type(s) of Pokémons that this Pokémon weak to
   */
  weaknesses: (string | null)[] | null;
  fleeRate: number | null;
  /**
   * The maximum CP of this Pokémon
   */
  maxCP: number | null;
  /**
   * The maximum HP of this Pokémon
   */
  maxHP: number | null;
  image: string | null;
  /**
   * The attacks of this Pokémon
   */
  attacks: GetPokemons_pokemons_evolutions_attacks | null;
}

export interface GetPokemons_pokemons {
  __typename: "Pokemon";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The identifier of this Pokémon
   */
  number: string | null;
  /**
   * The name of this Pokémon
   */
  name: string | null;
  /**
   * The minimum and maximum weight of this Pokémon
   */
  weight: GetPokemons_pokemons_weight | null;
  /**
   * The minimum and maximum weight of this Pokémon
   */
  height: GetPokemons_pokemons_height | null;
  /**
   * The classification of this Pokémon
   */
  classification: string | null;
  /**
   * The type(s) of this Pokémon
   */
  types: (string | null)[] | null;
  /**
   * The type(s) of Pokémons that this Pokémon is resistant to
   */
  resistant: (string | null)[] | null;
  /**
   * The type(s) of Pokémons that this Pokémon weak to
   */
  weaknesses: (string | null)[] | null;
  fleeRate: number | null;
  /**
   * The maximum CP of this Pokémon
   */
  maxCP: number | null;
  /**
   * The maximum HP of this Pokémon
   */
  maxHP: number | null;
  image: string | null;
  /**
   * The attacks of this Pokémon
   */
  attacks: GetPokemons_pokemons_attacks | null;
  /**
   * The evolutions of this Pokémon
   */
  evolutions: (GetPokemons_pokemons_evolutions | null)[] | null;
}

export interface GetPokemons {
  pokemons: (GetPokemons_pokemons | null)[] | null;
}

export interface GetPokemonsVariables {
  first: number;
}
