import styled from "@emotion/styled";
import { ContainerProps } from "../../../types/props";
import { ItemBase } from "../../base/ItemBase";
import { VIRTUAL_ELEMENT, OUT_SHADOW } from "../../../constants/css";
import { ContainerBase } from "../../base/ContainerBase";
import { InputBase } from "../../base/InputBase";

export interface DatePickerStyleProps extends ContainerProps {
  isOpen?: boolean;
  isSelected?: boolean;
}

export const Container = styled.div<DatePickerStyleProps>`
  width: ${({ width = 200 }) => `${width}px`};
  position: relative;
`;

export const SelectWrapper = styled(ContainerBase)<DatePickerStyleProps>`
  display: flex;
  position: relative;
  align-items: center;
  height: ${({ height = 35 }) => `${height}px`};
  padding: 0 10px;
`;

export const Input = styled(InputBase)<DatePickerStyleProps>`
  z-index: 1;
`;

export const ListContainer = styled.div<DatePickerStyleProps>`
  margin-top: 5px;
  text-align: center;
  position: absolute;
  background-color: white;
  z-index: 2;

  &::after {
    ${VIRTUAL_ELEMENT};
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.primaryColor ?? "gray"};
    box-shadow: ${OUT_SHADOW};
  }
`;

export const YearMonth = styled.div<DatePickerStyleProps>`
  color: ${({ theme }) => theme.defaultColor ?? "gray"};
  height: ${({ height = 30 }) => `${height}px`};
  line-height: ${({ height = 30 }) => `${height}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1em;
`;

export const WeekdayList = styled.ul<DatePickerStyleProps>`
  padding: 0;
  margin: 0;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  list-style-type: none;
`;

export const WeekdayItem = styled.li<DatePickerStyleProps>`
  z-index: 1;
  width: ${({ width = 40 }) => `${width}px`};
  height: ${({ height = 30 }) => `${height}px`};
  line-height: ${({ height = 30 }) => `${height}px`};
  font-size: 0.75rem;
`;

export const DateList = styled.ul<DatePickerStyleProps>`
  padding: 0;
  margin: 0;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  list-style-type: none;
`;

export const DateItem = styled(ItemBase)<DatePickerStyleProps>`
  z-index: 1;
  width: ${({ width = 40 }) => `${width}px`};
  height: ${({ height = 30 }) => `${height}px`};
  line-height: ${({ height = 30 }) => `${height}px`};
`;
