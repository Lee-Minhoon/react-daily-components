import styled from "@emotion/styled";
import { SizePropsDeprecated } from "types/props";
import { ELLIPSIS, OUT_SHADOW } from "constants/css";
import { ContainerBase } from "../../base/ContainerBase";
import { InputEllipsisBase } from "../../base/InputBase";
import { ItemBase } from "../../base/ItemBase";
import { ListBase } from "components/base/ListBase";
import type { Property } from "csstype";

export interface SelectListStyleProps extends SizePropsDeprecated {
  isOpen?: boolean;
  isSelected?: boolean;
  placeholder?: string;
  maxItemCount?: number;
}

export const Container = styled(ContainerBase)<SelectListStyleProps>``;

export const Input = styled(InputEllipsisBase)<SelectListStyleProps>``;

interface ListStyleProps {
  itemHeight: Property.Height<string | number> | undefined;
  showItemCount: number;
}

export const List = styled(ListBase)<ListStyleProps>`
  color: ${({ theme }) => theme.defaultColor ?? "gray"};
  max-height: ${({ itemHeight, showItemCount }) =>
    `calc(${itemHeight} * ${showItemCount})`};
  overflow-y: auto;
  width: 100%;
  top: 55px;
  border-radius: 4px;
  box-shadow: ${OUT_SHADOW};
`;

export const Option = styled.option``;

export const Item = styled(ItemBase)<SelectListStyleProps>`
  height: 35px;
  line-height: 35px;
  padding: 0 10px;
  ${ELLIPSIS};
`;
