import { Button, Card, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import { StyledCard } from "components/Card";
import React from "react";
import { MonitorOutlined } from "@ant-design/icons";
import {
  GetPokemons_pokemons,
  GetPokemons_pokemons_evolutions,
} from "../../__generated__/GetPokemons";
import { PokemonDetail } from "./PokemonDetail";

interface Props {
  pokemon: GetPokemons_pokemons;
  onClickLink: (name: string) => void;
  onCLickEvolutionDetail: (
    evolutions: GetPokemons_pokemons_evolutions[]
  ) => void;
}

export const PokemonCard: React.FC<Props> = ({
  pokemon,
  onClickLink,
  onCLickEvolutionDetail,
}) => {
  return (
    <StyledCard
      title={
        <a type="link" onClick={() => onClickLink(pokemon?.name)}>
          {pokemon?.name}
        </a>
      }
      hoverable
      cover={<img alt="pokemon-image" src={pokemon?.image} />}
    >
      <Meta
        description={
          <>
            <PokemonDetail pokemon={pokemon} />
            {pokemon?.evolutions?.length > 0 && (
              <Row>
                <Button
                  type="primary"
                  icon={<MonitorOutlined />}
                  onClick={() => onCLickEvolutionDetail(pokemon?.evolutions)}
                >
                  Evolutions Detail
                </Button>
              </Row>
            )}
          </>
        }
      />
    </StyledCard>
  );
};
