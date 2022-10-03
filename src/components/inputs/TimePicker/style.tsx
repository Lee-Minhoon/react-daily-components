import styled from "@emotion/styled";
import { ContainerBase } from "../../base/ContainerBase";
import { EffectedItemBase } from "../../base/ItemBase";
import { InputBase } from "../../base/InputBase";
import type { Property } from "csstype";
import { ListContainerBase } from "../../base/ListBase";

export const Container = styled(ContainerBase)``;

export const Input = styled(InputBase)``;

export interface ListStyleProps {
  itemHeight: Property.Height<string | number> | undefined;
  showItemCount: number;
}

export const ListContainer = styled(ListContainerBase)<ListStyleProps>`
  display: flex;
  max-height: ${({ itemHeight, showItemCount }) =>
    `calc(${itemHeight} * ${showItemCount})`};
  top: 55px;
`;

export const List = styled.ul`
  flex: 1;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  padding: 0;
  margin: 0;
`;

export const Item = styled(EffectedItemBase)`
  text-align: center;
`;
