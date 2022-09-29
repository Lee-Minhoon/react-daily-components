import styled from "@emotion/styled";
import { ContainerBase } from "../../base/ContainerBase";
import { ItemBase } from "../../base/ItemBase";
import { ListBase } from "../../base/ListBase";
import { InputBase } from "../../base/InputBase";
import type { Property } from "csstype";

export const Container = styled(ContainerBase)``;

export const Input = styled(InputBase)``;

interface ListContainerStyleProps {
  itemHeight: Property.Height<string | number> | undefined;
  showItemCount: number;
}

export const ListContainer = styled(ListBase)<ListContainerStyleProps>`
  display: flex;
  max-height: ${({ itemHeight, showItemCount }) =>
    `calc(${itemHeight} * ${showItemCount})`};
  top: 55px;
`;

export const List = styled.ul`
  flex: 1;
  overflow-y: auto;
  list-style-type: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled(ItemBase)``;
