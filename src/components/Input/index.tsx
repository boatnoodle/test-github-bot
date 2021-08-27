import styled from "styled-components";

import { Input } from "antd";

export const InputText = styled(Input)`
  && {
    padding: 16px 10px;
    font-size: 2rem;
    border-radius: 8px;
  }
`;

export const InputPassword = styled(Input.Password)`
  && {
    border-radius: 8px;
    font-size: 0.8rem;
  }
`;
