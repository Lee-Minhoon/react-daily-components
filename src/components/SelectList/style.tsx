import styled from "@emotion/styled";

export interface SelectListStyleProps {
  isOpen?: boolean;
  isSelected?: boolean;
  placeholder?: string;
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
    height: ${({ isOpen, height = 30, maxItemCount = 8, outlineWidth = 1 }) =>
      isOpen ? `${(maxItemCount + 1) * height + outlineWidth}px` : "100%"};
    top: 0;
    left: 0;
    outline: ${({ isOpen, outlineWidth, outlineColor }) =>
      isOpen ? `${outlineWidth}px solid ${outlineColor}` : "initial"};
    border-radius: ${({ borderRadius }) => `${borderRadius}px`};
    opacity: 0.5;
    box-shadow: ${({ isOpen }) =>
      isOpen ? "0 0 6px rgba(0, 0, 0, 0.4)" : "initial"};
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

export const List = styled.ul<SelectListStyleProps>`
  list-style-type: none;
  color: ${({ textColor }) => textColor};
  padding: 0;
  margin: 0;
  margin-top: ${({ outlineWidth }) => `${outlineWidth}px`};
  max-height: ${({ height = 30, maxItemCount = 8 }) =>
    `${height * maxItemCount}px`};
  overflow-y: auto;
  position: absolute;
  background-color: white;
  width: 100%;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  z-index: 2;
  border-bottom-left-radius: ${({ borderRadius }) => `${borderRadius}px`};
  border-bottom-right-radius: ${({ borderRadius }) => `${borderRadius}px`};
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background-color: whitesmoke;
    border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: ${({ borderRadius }) => `${borderRadius}px`};
    box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.1);
  }
`;

export const Item = styled.li<SelectListStyleProps>`
  height: ${({ height }) => `${height}px`};
  padding: 0 10px;
  line-height: ${({ height }) => `${height}px`};
  overflow-x: hidden;
  text-overflow: ellipsis;
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
