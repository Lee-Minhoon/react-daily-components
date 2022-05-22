import styled from "@emotion/styled";

export interface SelectListStyleProps {
  isOpen?: boolean;
  isSelected?: boolean;
  maxItemCount?: number;
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
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: ${({ isOpen, height = 30, maxItemCount = 8 }) =>
      isOpen ? `${(maxItemCount + 1) * height}px` : "100%"};
    top: 0;
    left: 0;
    outline: ${({ isOpen, outlineWidth, outlineColor }) =>
      isOpen ? `${outlineWidth}px solid ${outlineColor}` : "initial"};
    border-radius: ${({ borderRadius }) => `${borderRadius}px`};
    opacity: 0.5;
    box-shadow: ${({ isOpen }) =>
      isOpen ? "0 0 6px rgba(0, 0, 0, 0.1)" : "initial"};
  }
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
    border-bottom-left-radius: ${({ isOpen, borderRadius }) =>
      isOpen ? "initial" : `${borderRadius}px`};
    border-bottom-right-radius: ${({ isOpen, borderRadius }) =>
      isOpen ? "initial" : `${borderRadius}px`};
    z-index: 3;
  }
  padding: 0 10px;
`;

export const Input = styled.input<SelectListStyleProps>`
  flex: 1;
  min-width: 0;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  color: ${({ textColor }) => textColor};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

export const Button = styled.button<SelectListStyleProps>`
  z-index: 4;
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
  max-height: ${({ height = 30, maxItemCount = 8 }) =>
    `${height * maxItemCount}px`};
  position: absolute;
  display: flex;
  background-color: white;
  width: 100%;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  z-index: 2;
  border-bottom-left-radius: ${({ borderRadius }) => `${borderRadius}px`};
  border-bottom-right-radius: ${({ borderRadius }) => `${borderRadius}px`};
`;

export const List = styled.ul<SelectListStyleProps>`
  padding: 0;
  margin: 0;
  flex: 1;
  overflow-y: auto;
  list-style-type: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.li<SelectListStyleProps>`
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
