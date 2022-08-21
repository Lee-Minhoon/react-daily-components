import styled from "@emotion/styled";
import { SizeProps } from "../../../types/props";
import { VIRTUAL_ELEMENT } from "../../../constants/css";
import { ContainerAbsoluteBase } from "../../base/ContainerBase";
import { ItemBase } from "../../base/ItemBase";

export interface TimePickerStyleProps extends SizeProps {
  isOpen?: boolean;
  isSelected?: boolean;
  maxItemCount?: number;
}

export const Container = styled(ContainerAbsoluteBase)<TimePickerStyleProps>`
  width: ${({ width = 200 }) => `${width}px`};
  position: relative;
  &::after {
    height: ${({ isActive, height = 35, maxItemCount = 8 }) =>
      isActive ? `${height + 1 + maxItemCount * height}px` : "100%"};
  }
`;

export const SelectWrapper = styled.div<TimePickerStyleProps>`
  display: flex;
  position: relative;
  align-items: center;
  height: ${({ height }) => `${height}px`};
  &::after {
    ${VIRTUAL_ELEMENT};
    border-bottom: ${({ isOpen, theme }) =>
      isOpen ? `1px solid ${theme.primaryColor}` ?? "gray" : "initial"};
  }
  padding: 0 10px;
`;

export const Input = styled.input<TimePickerStyleProps>`
  z-index: 1;
  flex: 1;
  min-width: 0;

  font-size: 1rem;
  color: ${({ theme }) => theme.defaultColor ?? "gray"};

  border: none;
  outline: none;
`;

export const ListContainer = styled.div<TimePickerStyleProps>`
  color: ${({ theme }) => theme.defaultColor ?? "gray"};
  max-height: ${({ height = 35, maxItemCount = 8 }) =>
    `${height * maxItemCount}px`};
  position: absolute;
  overflow: hidden;
  display: flex;
  background-color: white;
  width: calc(100% - 2px);
  left: 1px;
  font-size: 1rem;
  z-index: 2;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const List = styled.ul<TimePickerStyleProps>`
  padding: 0;
  margin: 0;
  flex: 1;
  overflow-y: auto;
  list-style-type: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled(ItemBase)<TimePickerStyleProps>`
  height: ${({ height }) => `${height}px`};
  padding: 0 10px;
  line-height: ${({ height }) => `${height}px`};
`;
