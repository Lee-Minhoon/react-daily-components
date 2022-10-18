import styled from "@emotion/styled";
import { getColorByStatus } from "../../../utilities/css";

export interface ItemBaseStyleProps {
  // focus: boolean;
  active: boolean;
}

export const ItemBase = styled.li<ItemBaseStyleProps>`
  position: relative;
  cursor: pointer;
  color: ${({ active, theme }) => getColorByStatus(active, theme)};
  height: 35px;
  line-height: 35px;
  padding: 0 10px;
`;
