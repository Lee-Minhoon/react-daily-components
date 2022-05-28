import styled from "@emotion/styled";

export interface SelectListStyleProps {
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

export const SelectList = styled.div<SelectListStyleProps>`
  width: ${({ width }) => `${width}px`};
  position: relative;
`;

export const SelectWrapper = styled.div<SelectListStyleProps>`
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

export const Input = styled.input<SelectListStyleProps>`
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

export const Button = styled.button<SelectListStyleProps>`
  z-index: 1;
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  :hover {
    cursor: pointer;
  }
  background-color: initial;
`;

export const Svg = styled.svg<SelectListStyleProps>`
  display: block;
  stroke: ${({ outlineColor }) => outlineColor};
  opacity: ${({ isOpen }) => (isOpen ? "initial" : 0.5)};
  stroke-width: ${({ outlineWidth }) => outlineWidth};
`;

export const ListContainer = styled.div<SelectListStyleProps>`
  color: ${({ textColor }) => textColor};
  margin-top: ${({ outlineWidth = 1 }) => `${outlineWidth * 5}px`};
  text-align: center;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  position: absolute;
  background-color: white;

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

export const YearMonth = styled.div<SelectListStyleProps>`
  height: ${({ height }) => `${height}px`};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  line-height: ${({ height }) => `${height}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1em;
`;

export const ArrowButton = styled.button<SelectListStyleProps>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  width: 1em;
  height: 1em;
  padding: 0;
  border: none;
  :hover {
    cursor: pointer;
  }
  background-color: initial;
  z-index: 1;
`;

export const List = styled.ul<SelectListStyleProps>`
  padding: 0;
  margin: 0;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  list-style-type: none;
`;

export const Item = styled.li<SelectListStyleProps>`
  z-index: 1;
  font-size: ${({ fontSize = 16 }) => `${fontSize * 0.75}px`};
  height: ${({ height }) => `${height}px`};
  padding: 0 10px;
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
