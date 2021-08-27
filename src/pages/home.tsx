import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "graphql-client/graphql";
import { Card, Col, Row, Typography, Button } from "antd";
import { InputText } from "components/Input";
import {
  GetPokemons,
  GetPokemons_pokemons,
  GetPokemons_pokemons_evolutions,
} from "../../__generated__/GetPokemons";
import styled from "styled-components";
import Meta from "antd/lib/card/Meta";
import { useDebounce } from "hooks/useDebounce";
import Modal from "antd/lib/modal/Modal";
import { PokemonDetail } from "containers/PokemonDetail";
import { PokemonCard } from "containers/PokemonCard";
import { EvolutionDetailModal } from "containers/EvolutionDetailModal";

const { Title } = Typography;

export const HomePage = () => {
  const [pokemons, setPokemons] = useState<GetPokemons_pokemons[]>();
  const [pokemonFiltered, setPokemonFiltered] = useState<
    GetPokemons_pokemons[]
  >([]);
  const [evolutions, setEvolutions] = useState([]);

  const [searchText, setSearchText] = useState("");
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

  const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchText(e?.target?.value);

  const handleOpenEvolutionsModal = (
    evolutions: GetPokemons_pokemons_evolutions[]
  ) => {
    setVisibleModal(!visibleModal);
    setEvolutions(evolutions);
  };

  const handleCloseEvolutionsModal = () => {
    setVisibleModal(!visibleModal);
    setEvolutions([]);
  };

  const handleClickLinkEvolutionsModal = (name: string) => {
    setVisibleModal(!visibleModal);
    setSearchText(name);
  };

  const handleClickLink = (name: string) => setSearchText(name);

  return (
    <div style={{ minHeight: "100vh" }}>
      <EvolutionDetailModal
        visible={visibleModal}
        evolutions={evolutions}
        onCancel={handleCloseEvolutionsModal}
        onClickLink={handleClickLinkEvolutionsModal}
      />
      <Row justify="center" align="middle" gutter={16}>
        <Col flex="auto">
          <InputText
            onChange={handleChangeSearchInput}
            placeholder="Find your pokemon here..."
            value={searchText}
          />
        </Col>
        <Col>
          <Button danger={true} onClick={() => setSearchText("")} size="large">
            Clear
          </Button>
        </Col>
      </Row>
      {debounceSearchText && (
        <Row justify="center" style={{ marginTop: 24 }}>
          <Col>
            <Title level={3}>Your keyword: {debounceSearchText || "-"}</Title>
          </Col>
        </Row>
      )}
      {pokemonFiltered?.length === 0 ? (
        <Row justify="center" align="middle" style={{ marginTop: 24 }}>
          <Col>
            <Title level={1}>Not found your pokemon.</Title>
          </Col>
        </Row>
      ) : (
        <Row justify="center" gutter={[16, 16]}>
          {pokemonFiltered?.map((eachPokemon) => (
            <Col span={8} key={eachPokemon?.id}>
              <PokemonCard
                pokemon={eachPokemon}
                onClickLink={handleClickLink}
                onCLickEvolutionDetail={handleOpenEvolutionsModal}
              />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};
