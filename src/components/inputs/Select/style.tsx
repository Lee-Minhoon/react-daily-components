import styled from "@emotion/styled";
import { SizePropsDeprecated } from "../../../types/props";
import {
  ELLIPSIS,
  VIRTUAL_ELEMENT,
  INSET_SHADOW,
} from "../../../constants/css";
import { ContainerAbsoluteBase } from "../../base/ContainerBase";
import { InputEllipsisBase } from "../../base/InputBase";
import { ItemBase } from "../../base/ItemBase";

export interface SelectListStyleProps extends SizePropsDeprecated {
  isOpen?: boolean;
  isSelected?: boolean;
  placeholder?: string;
  maxItemCount?: number;
}

export const Container = styled(ContainerAbsoluteBase)<SelectListStyleProps>`
  width: ${({ width = 200 }) => `${width}px`};
  position: relative;
  &::after {
    height: ${({ isActive, height = 35, maxItemCount = 8 }) =>
      isActive ? `${height + 1 + maxItemCount * height}px` : "100%"};
  }
`;

export const SelectWrapper = styled.div<SelectListStyleProps>`
  display: flex;
  position: relative;
  align-items: center;
  height: ${({ height = 35 }) => `${height}px`};
  &::after {
    ${VIRTUAL_ELEMENT};
    border-bottom: ${({ isOpen, theme }) =>
      isOpen ? `1px solid ${theme.primaryColor}` ?? "gray" : "initial"};
  }
  padding: 0 10px;
`;

export const Input = styled(InputEllipsisBase)<SelectListStyleProps>`
  z-index: 1;
`;

export const List = styled.ul<SelectListStyleProps>`
  list-style-type: none;
  color: ${({ theme }) => theme.defaultColor ?? "gray"};
  padding: 0;
  margin: 0;
  max-height: ${({ height = 35, maxItemCount = 8 }) =>
    `${height * maxItemCount}px`};
  overflow-y: auto;
  position: absolute;
  background-color: white;
  width: calc(100% - 2px);
  left: 1px;
  z-index: 2;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background-color: whitesmoke;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    box-shadow: ${INSET_SHADOW};
  }
`;

export const Item = styled(ItemBase)<SelectListStyleProps>`
  height: ${({ height }) => `${height}px`};
  line-height: ${({ height }) => `${height}px`};
  padding: 0 10px;
  ${ELLIPSIS};
`;
