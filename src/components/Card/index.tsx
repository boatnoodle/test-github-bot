import styled from "styled-components";

import { Card } from "antd";

export const StyledCard = styled(Card)`
  margin: 10;

  & .ant-card-cover img {
    width: auto;
    height: 100px;
    margin: 0 auto;
  }
`;
