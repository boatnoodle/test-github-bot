import { Col, Collapse, Row, Typography } from "antd";
import React from "react";
import { GetPokemons_pokemons } from "../../__generated__/GetPokemons";
import { AttacTable } from "./AttacTable";

const { Title } = Typography;
const { Panel } = Collapse;

interface Props {
  pokemon: GetPokemons_pokemons;
}

export const PokemonDetail: React.FC<Props> = ({ pokemon }) => {
  return (
    <div>
      <Row>
        <Col>Number: </Col>
        <Col>
          <Title level={5}>{pokemon?.number}</Title>
        </Col>
      </Row>
      <Row>
        <Col>Classification: </Col>
        <Col>
          <Title level={5}>{pokemon?.classification}</Title>
        </Col>
      </Row>
      <Row>
        <Col>Attack Fast</Col>
        <Col span={24}>
          <AttacTable datas={pokemon?.attacks?.fast} />
        </Col>
      </Row>
      <Row>
        <Col>Attack Special</Col>
        <Col span={24}>
          <AttacTable datas={pokemon?.attacks?.special} />
        </Col>
      </Row>
      <Row>
        <Col>Max HP: </Col>
        <Col>
          <Title level={5}>{pokemon?.maxHP}</Title>
        </Col>
      </Row>
      <Row>
        <Col>Max CP: </Col>
        <Col>
          <Title level={5}>{pokemon?.maxCP}</Title>
        </Col>
      </Row>
      <Row>
        <Col>Height (Min): </Col>
        <Col>
          <Title level={5}>{pokemon?.height?.minimum}</Title>
        </Col>
      </Row>
      <Row>
        <Col>Height (Max): </Col>
        <Col>
          <Title level={5}>{pokemon?.height?.maximum}</Title>
        </Col>
      </Row>
      <Row>
        <Col>Weight (Min): </Col>
        <Col>
          <Title level={5}>{pokemon?.weight?.minimum}</Title>
        </Col>
      </Row>
      <Row>
        <Col>Weight (Max): </Col>
        <Col>
          <Title level={5}>{pokemon?.weight?.maximum}</Title>
        </Col>
      </Row>
      <Row>
        <Col>Resistence: </Col>
        <Col>
          <Title level={5}>{pokemon?.resistant?.join(" , ")}</Title>
        </Col>
      </Row>
      <Row>
        <Col>Weaknesses: </Col>
        <Col>
          <Title level={5}>{pokemon?.weaknesses?.join(" , ")}</Title>
        </Col>
      </Row>
      <Row>
        <Col>Types: </Col>
        <Col>
          <Title data-testid="types" level={5}>
            {pokemon?.types?.join(" , ")}
          </Title>
        </Col>
      </Row>
    </div>
  );
};
