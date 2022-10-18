import styled from "@emotion/styled";
import { ELLIPSIS } from "../../../constants/css";
import { ContainerBase } from "../../base/ContainerBase";
import { InputEllipsisBase } from "../../base/InputBase";
import { ListBase } from "../../../components/base/ListBase";
import type { Property } from "csstype";
import EffectedItem from "../../common/EffectedItem";
import { getDefaultColor } from "../../../utilities/css";

export const Container = styled(ContainerBase)``;

export const Input = styled(InputEllipsisBase)``;

export interface ListStyleProps {
  itemHeight: Property.Height<string | number> | undefined;
  showItemCount: number;
}

export const List = styled(ListBase)<ListStyleProps>`
  color: ${({ theme }) => getDefaultColor(theme)};
  max-height: ${({ itemHeight, showItemCount }) =>
    `calc(${itemHeight} * ${showItemCount})`};
  overflow-y: auto;
  top: 55px;
`;

export const Option = styled.option``;

export const Item = styled(EffectedItem)`
  ${ELLIPSIS};
`;
