import { Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import Modal from "antd/lib/modal/Modal";
import { StyledCard } from "components/Card";
import React from "react";
import { GetPokemons_pokemons } from "../../__generated__/GetPokemons";
import { PokemonDetail } from "./PokemonDetail";
import { ArrowRightOutlined } from "@ant-design/icons";
import { StyledLink } from "components/Link";

interface Props {
  evolutions: GetPokemons_pokemons[];
  visible: boolean;
  onCancel: () => void;
  onClickLink: (name: string) => void;
}

export const EvolutionDetailModal: React.FC<Props> = ({
  evolutions,
  visible,
  onCancel,
  onClickLink,
}) => {
  return (
    <Modal
      title="Evolutions Detail"
      width={860}
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Row justify="center" align="middle">
        {evolutions?.map((eachPokemon, index) => (
          <React.Fragment key={eachPokemon?.id}>
            <Col span={8}>
              <StyledCard
                title={
                  <StyledLink onClick={() => onClickLink(eachPokemon?.name)}>
                    {eachPokemon?.name}
                  </StyledLink>
                }
                hoverable
                cover={<img alt="pokemon" src={eachPokemon?.image} />}
              >
                <Meta description={<PokemonDetail pokemon={eachPokemon} />} />
              </StyledCard>
            </Col>
            {index !== evolutions?.length - 1 && (
              <Col>
                <ArrowRightOutlined style={{ fontSize: "2rem" }} />
              </Col>
            )}
          </React.Fragment>
        ))}
      </Row>
    </Modal>
  );
};
