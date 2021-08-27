import { Table } from "antd";
import React from "react";
import { GetPokemons_pokemons_attacks_fast } from "../../__generated__/GetPokemons";

interface Props {
  datas: GetPokemons_pokemons_attacks_fast[];
}

export const AttacTable: React.FC<Props> = ({ datas }) => {
  return (
    <Table
      dataSource={datas?.map((each, index) => ({ ...each, key: index }))}
      columns={columns}
      pagination={false}
    />
  );
};

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Dmg.",
    dataIndex: "damage",
    key: "damage",
  },
];
