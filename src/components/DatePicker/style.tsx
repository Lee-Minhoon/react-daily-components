import styled from "@emotion/styled";
import { ContainerProps } from "../../types/props";
import {
  getOutline,
  getOulineWidth,
  getFontSize,
  getTextColor,
  getBorderRadius,
  getFullVirtualElement,
  getWidth,
  getHeight,
  ellipsis,
} from "./../../utilities/css";

export interface DatePickerStyleProps extends ContainerProps {
  isOpen?: boolean;
  isSelected?: boolean;
}

export const Container = styled.div<DatePickerStyleProps>`
  width: ${(props) => getWidth(props)};
  position: relative;
`;

export const SelectWrapper = styled.div<DatePickerStyleProps>`
  display: flex;
  position: relative;
  align-items: center;
  height: ${(props) => getHeight(props)};
  &::after {
    opacity: ${({ isOpen }) => (isOpen ? "initial" : 0.5)};
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    outline: ${(props) => getOutline(props)};
    border-radius: ${(props) => getBorderRadius(props)};
    box-shadow: ${({ isOpen }) =>
      isOpen ? "0 0 6px rgba(0, 0, 0, 0.4)" : "initial"};
  }
  padding: 0 10px;
`;

export const Input = styled.input<DatePickerStyleProps>`
  flex: 1;
  min-width: 0;
  z-index: 1;

  font-size: ${(props) => getFontSize(props)};
  color: ${(props) => getTextColor(props)};

  border: none;
  outline: none;
`;

export const ListContainer = styled.div<DatePickerStyleProps>`
  color: ${(props) => getTextColor(props)};
  margin-top: ${(props) =>
    `${props.outlineWidth ?? props.theme.outlineWidth ?? 1 * 5}px`};
  text-align: center;
  font-size: ${(props) => getFontSize(props)};
  position: absolute;
  background-color: white;
  z-index: 2;

  &::after {
    content: "";

    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: ${(props) => getBorderRadius(props)};
    outline: ${(props) => (props.isOpen ? getOutline(props) : "initial")};
    opacity: 0.5;
    box-shadow: ${({ isOpen }) =>
      isOpen ? "0 0 6px rgba(0, 0, 0, 0.4)" : "initial"};
  }
`;

export const YearMonth = styled.div<DatePickerStyleProps>`
  height: ${(props) => getHeight(props)};
  font-size: ${(props) => getFontSize(props)};
  line-height: ${(props) => getHeight(props)};
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
  width: ${(props) => getWidth(props)};
  height: ${(props) => getHeight(props)};
  line-height: ${(props) => getHeight(props)};
  font-size: ${({ fontSize = 16 }) => `${fontSize * 0.75}px`};
`;

export const List = styled.ul<DatePickerStyleProps>`
  padding: 0;
  margin: 0;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  list-style-type: none;
  overflow: hidden;
  border-bottom-left-radius: ${(props) => getBorderRadius(props)};
  border-bottom-right-radius: ${(props) => getBorderRadius(props)};
`;

export const Item = styled.li<DatePickerStyleProps>`
  z-index: 1;
  font-size: ${(props) => getFontSize(props)};
  width: ${(props) => getWidth(props)};
  height: ${(props) => getHeight(props)};
  line-height: ${(props) => getHeight(props)};
  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.1);
  }
  background-color: ${({ isSelected }) =>
    isSelected ? "rgba(0, 0, 0, 0.1)" : "initial"};
  box-shadow: ${({ isSelected }) =>
    isSelected ? "inset 0 0 4px rgba(0, 0, 0, 0.1)" : "initial"};
`;
