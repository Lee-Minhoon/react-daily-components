import styled from "@emotion/styled";
import { SizePropsDeprecated } from "../../../types/props";
import { ELLIPSIS, OUT_SHADOW } from "../../../constants/css";
import { ContainerBase } from "../../base/ContainerBase";
import { InputEllipsisBase } from "../../base/InputBase";
import { ItemBase } from "../../base/ItemBase";
import { ListBase } from "../../../components/base/ListBase";
import type { Property } from "csstype";

export const Container = styled(ContainerBase)``;

export const Input = styled(InputEllipsisBase)``;

interface ListStyleProps {
  itemHeight: Property.Height<string | number> | undefined;
  showItemCount: number;
}

export const List = styled(ListBase)<ListStyleProps>`
  color: ${({ theme }) => theme.defaultColor ?? "gray"};
  max-height: ${({ itemHeight, showItemCount }) =>
    `calc(${itemHeight} * ${showItemCount})`};
  overflow-y: auto;
  top: 55px;
`;

export const Option = styled.option``;

export const Item = styled(ItemBase)`
  ${ELLIPSIS};
`;
