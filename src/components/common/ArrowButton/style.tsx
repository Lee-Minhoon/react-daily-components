import styled from "@emotion/styled";
import { getDefaultColor } from "../../../utilities/css";

export const Button = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  :hover {
    cursor: pointer;
  }
  background-color: initial;
`;

export const Svg = styled.svg`
  display: block;
  stroke: ${({ theme }) => getDefaultColor(theme)};
  stroke-width: 1px;
`;
