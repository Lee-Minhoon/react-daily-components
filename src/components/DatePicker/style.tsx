import styled from "@emotion/styled";

export interface DatePickerStyleProps {
  isOpen?: boolean;
  isSelected?: boolean;
  width?: number;
  height?: number;
  fontSize?: number;
  textColor?: string;
  borderRadius?: number;
  outlineWidth?: number;
  outlineColor?: string;
}

export const Container = styled.div<DatePickerStyleProps>`
  width: ${({ width }) => `${width}px`};
  position: relative;
`;

export const SelectWrapper = styled.div<DatePickerStyleProps>`
  display: flex;
  position: relative;
  align-items: center;
  height: ${({ height }) => `${height}px`};
  &::after {
    opacity: ${({ isOpen }) => (isOpen ? "initial" : 0.5)};
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    outline: ${({ outlineWidth, outlineColor }) =>
      `${outlineWidth}px solid ${outlineColor}`};
    border-radius: ${({ borderRadius }) => `${borderRadius}px`};
    box-shadow: ${({ isOpen }) =>
      isOpen ? "0 0 6px rgba(0, 0, 0, 0.4)" : "initial"};
  }
  padding: 0 10px;
`;

export const Input = styled.input<DatePickerStyleProps>`
  flex: 1;
  min-width: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  color: ${({ textColor }) => textColor};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

export const ListContainer = styled.div<DatePickerStyleProps>`
  color: ${({ textColor }) => textColor};
  margin-top: ${({ outlineWidth = 1 }) => `${outlineWidth * 5}px`};
  text-align: center;
  font-size: ${({ fontSize }) => `${fontSize}px`};
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
    border-radius: ${({ borderRadius }) => `${borderRadius}px`};
    outline: ${({ isOpen, outlineWidth, outlineColor }) =>
      isOpen ? `${outlineWidth}px solid ${outlineColor}` : "initial"};
    opacity: 0.5;
    box-shadow: ${({ isOpen }) =>
      isOpen ? "0 0 6px rgba(0, 0, 0, 0.4)" : "initial"};
  }
`;

export const YearMonth = styled.div<DatePickerStyleProps>`
  height: ${({ height }) => `${height}px`};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  line-height: ${({ height }) => `${height}px`};
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
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  line-height: ${({ height }) => `${height}px`};
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
  border-bottom-left-radius: ${({ borderRadius }) => `${borderRadius}px`};
  border-bottom-right-radius: ${({ borderRadius }) => `${borderRadius}px`};
`;

export const Item = styled.li<DatePickerStyleProps>`
  z-index: 1;
  font-size: ${({ fontSize = 16 }) => `${fontSize * 0.75}px`};
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
  line-height: ${({ height }) => `${height}px`};
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
