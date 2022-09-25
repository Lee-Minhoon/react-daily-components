import styled from "@emotion/styled";
import { getColorByStatus } from "utilities/css";
import { INSET_SHADOW } from "../../../constants/css";

export interface ItemBaseStyleProps {
  active: boolean;
}

export const ItemBase = styled.li<ItemBaseStyleProps>`
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: ${INSET_SHADOW};
  }
  color: ${(props) => getColorByStatus(props)};
`;
