import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "graphql-client/graphql";
import { Card, Col, Row, Typography } from "antd";
import { InputText } from "components/Input";
import {
  GetPokemons,
  GetPokemons_pokemons,
} from "../../__generated__/GetPokemons";
import styled from "styled-components";
import Meta from "antd/lib/card/Meta";
import { useDebounce } from "hooks/useDebounce";
import Modal from "antd/lib/modal/Modal";
import { Button } from "antd/lib/radio";

const { Title } = Typography;

const StlyedWrapper = styled.div`
  display: grid;
  padding: 20px;
`;

const StyledCard = styled(Card)`
  width: 400;
  margin: 10;

  & .ant-card-cover img {
    width: auto;
    height: 100px;
    margin: 0 auto;
  }
`;

export const HomePage = () => {
  const [pokemons, setPokemons] = useState<GetPokemons_pokemons[]>();
  const [pokemonFiltered, setPokemonFiltered] = useState<
    GetPokemons_pokemons[]
  >([]);
  const [evolutions, setEvolutions] = useState([]);

  const [searchText, setSearchText] = useState("C");
  const [visibleModal, setVisibleModal] = useState(false);
  const debounceSearchText = useDebounce(searchText, 200);

  //graphql
  //! It's not a good idea to fix 1000 but this api does not support pagination.
  const { data, loading } = useQuery<GetPokemons>(GET_POKEMONS, {
    variables: { first: 1000 },
  });

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (data && !loading) setPokemons(data?.pokemons);
    }

    return () => {
      isSubscribed = false;
    };
  }, [data, loading]);

  useEffect(() => {
    if (pokemons) {
      if (debounceSearchText)
        setPokemonFiltered(
          pokemons?.filter((eachPokemon) =>
            eachPokemon?.name
              ?.toLocaleLowerCase()
              .includes(debounceSearchText?.toLocaleLowerCase())
          )
        );
      else setPokemonFiltered([]);
    }
  }, [debounceSearchText, pokemons]);

  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e?.target?.value);
  };

  console.log(pokemonFiltered, "xxx");

  return (
    <StlyedWrapper>
      <Modal
        title="Evolutions Detail"
        width={860}
        visible={visibleModal}
        onCancel={() => {
          setVisibleModal(!visibleModal);
          setEvolutions([]);
        }}
      >
        <Row justify="center" align="middle">
          {evolutions?.map((eachPokemon, index) => (
            <>
              <Col span={8} key={eachPokemon?.id}>
                <StyledCard
                  title={eachPokemon?.name}
                  hoverable
                  cover={<img alt="pokemon-image" src={eachPokemon?.image} />}
                >
                  <Meta
                    description={
                      <>
                        <Row>
                          <Col>Number: </Col>
                          <Col>{eachPokemon?.number}</Col>
                        </Row>
                        <Row>
                          <Col>Classification: </Col>
                          <Col>{eachPokemon?.classification}</Col>
                        </Row>
                        <Row>
                          <Col>Max HP: </Col>
                          <Col>
                            <Title level={5}>{eachPokemon?.maxHP}</Title>
                          </Col>
                        </Row>
                        <Row>
                          <Col>Max CP: </Col>
                          <Col>
                            <Title level={5}>{eachPokemon?.maxCP}</Title>
                          </Col>
                        </Row>
                        <Row>
                          <Col>Height (Min): </Col>
                          <Col>
                            <Title level={5}>
                              {eachPokemon?.height?.minimum}
                            </Title>
                          </Col>
                        </Row>
                        <Row>
                          <Col>Height (Max): </Col>
                          <Col>
                            <Title level={5}>
                              {eachPokemon?.height?.maximum}
                            </Title>
                          </Col>
                        </Row>
                        <Row>
                          <Col>Weight (Min): </Col>
                          <Col>
                            <Title level={5}>
                              {eachPokemon?.weight?.minimum}
                            </Title>
                          </Col>
                        </Row>
                        <Row>
                          <Col>Weight (Max): </Col>
                          <Col>
                            <Title level={5}>
                              {eachPokemon?.weight?.maximum}
                            </Title>
                          </Col>
                        </Row>
                        <Row>
                          <Col>Resistence: </Col>
                          <Col>
                            <Title level={5}>
                              {eachPokemon?.resistant?.join(" , ")}
                            </Title>
                          </Col>
                        </Row>
                        <Row>
                          <Col>Weaknesses: </Col>
                          <Col>
                            <Title level={5}>
                              {eachPokemon?.weaknesses?.join(" , ")}
                            </Title>
                          </Col>
                        </Row>
                        <Row>
                          <Col>Types: </Col>
                          <Col>
                            <Title level={5}>
                              {eachPokemon?.types?.join(" , ")}
                            </Title>
                          </Col>
                        </Row>
                      </>
                    }
                  />
                </StyledCard>
              </Col>
              {index !== evolutions?.length - 1 && <Col span={2}> {"=>"} </Col>}
            </>
          ))}
        </Row>
      </Modal>
      <Row justify="center" gutter={[0, 24]}>
        <Col span={24}>
          <InputText
            onChange={handleSearchText}
            placeholder="Find your pokemon here..."
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Title level={4}>Your keyword: {debounceSearchText || "-"}</Title>
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 16]}>
        {pokemonFiltered?.length > 0 ? (
          pokemonFiltered?.map((eachPokemon) => (
            <Col span={8} key={eachPokemon?.id}>
              <StyledCard
                title={eachPokemon?.name}
                hoverable
                cover={<img alt="pokemon-image" src={eachPokemon?.image} />}
              >
                <Meta
                  description={
                    <>
                      <Row>
                        <Col>Number: </Col>
                        <Col>{eachPokemon?.number}</Col>
                      </Row>
                      <Row>
                        <Col>Classification: </Col>
                        <Col>{eachPokemon?.classification}</Col>
                      </Row>
                      <Row>
                        <Col>Max HP: </Col>
                        <Col>
                          <Title level={5}>{eachPokemon?.maxHP}</Title>
                        </Col>
                      </Row>
                      <Row>
                        <Col>Max CP: </Col>
                        <Col>
                          <Title level={5}>{eachPokemon?.maxCP}</Title>
                        </Col>
                      </Row>
                      <Row>
                        <Col>Height (Min): </Col>
                        <Col>
                          <Title level={5}>
                            {eachPokemon?.height?.minimum}
                          </Title>
                        </Col>
                      </Row>
                      <Row>
                        <Col>Height (Max): </Col>
                        <Col>
                          <Title level={5}>
                            {eachPokemon?.height?.maximum}
                          </Title>
                        </Col>
                      </Row>
                      <Row>
                        <Col>Weight (Min): </Col>
                        <Col>
                          <Title level={5}>
                            {eachPokemon?.weight?.minimum}
                          </Title>
                        </Col>
                      </Row>
                      <Row>
                        <Col>Weight (Max): </Col>
                        <Col>
                          <Title level={5}>
                            {eachPokemon?.weight?.maximum}
                          </Title>
                        </Col>
                      </Row>
                      <Row>
                        <Col>Resistence: </Col>
                        <Col>
                          <Title level={5}>
                            {eachPokemon?.resistant?.join(" , ")}
                          </Title>
                        </Col>
                      </Row>
                      <Row>
                        <Col>Weaknesses: </Col>
                        <Col>
                          <Title level={5}>
                            {eachPokemon?.weaknesses?.join(" , ")}
                          </Title>
                        </Col>
                      </Row>
                      <Row>
                        <Col>Types: </Col>
                        <Col>
                          <Title level={5}>
                            {eachPokemon?.types?.join(" , ")}
                          </Title>
                        </Col>
                      </Row>
                      {eachPokemon?.evolutions?.length > 0 && (
                        <Row>
                          <Button
                            onClick={() => {
                              setVisibleModal(!visibleModal);
                              setEvolutions(eachPokemon?.evolutions);
                            }}
                          >
                            Evalutions
                          </Button>
                        </Row>
                      )}
                    </>
                  }
                />
              </StyledCard>
            </Col>
          ))
        ) : (
          <Title level={5}>Not found your pokemon.</Title>
        )}
      </Row>
    </StlyedWrapper>
  );
};
