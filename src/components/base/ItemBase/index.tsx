import styled from "@emotion/styled";
import { INSET_SHADOW } from "../../../constants/css";

export interface ItemBaseStyleProps {
  isSelected: boolean;
}

export const ItemBase = styled.li<ItemBaseStyleProps>`
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: ${INSET_SHADOW};
  }
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.primaryColor ?? "gray" : theme.defaultColor ?? "gray"};
`;
