import styled from "@emotion/styled";
import { ContainerProps } from "../../types/props";
import {
  getOutline,
  getFontSize,
  getTextColor,
  getBorderRadius,
  getFullVirtualElement,
  getWidth,
  getHeight,
  ellipsis,
} from "./../../utilities/css";

export interface SelectListStyleProps extends ContainerProps {
  isOpen?: boolean;
  isSelected?: boolean;
  placeholder?: string;
  maxItemCount?: number;
}

export const Container = styled.div<SelectListStyleProps>`
  width: ${(props) => getWidth(props)};
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: ${({ isOpen, height = 30, maxItemCount = 8, outlineWidth = 1 }) =>
      isOpen ? `${(maxItemCount + 1) * height + outlineWidth}px` : "100%"};
    top: 0;
    left: 0;
    outline: ${(props) => (props.isOpen ? getOutline(props) : "initial")};
    border-radius: ${(props) => getBorderRadius(props)};
    opacity: 0.5;
    box-shadow: ${({ isOpen }) =>
      isOpen ? "0 0 6px rgba(0, 0, 0, 0.4)" : "initial"};
  }
`;

export const SelectWrapper = styled.div<SelectListStyleProps>`
  display: flex;
  position: relative;
  align-items: center;
  height: ${(props) => getHeight(props)};
  &::after {
    ${getFullVirtualElement()}
    opacity: ${({ isOpen }) => (isOpen ? "initial" : 0.5)};
    outline: ${(props) => getOutline(props)};
    border-radius: ${(props) => getBorderRadius(props)};
    border-bottom-left-radius: ${({ isOpen, borderRadius }) =>
      isOpen ? "initial" : `${borderRadius}px`};
    border-bottom-right-radius: ${({ isOpen, borderRadius }) =>
      isOpen ? "initial" : `${borderRadius}px`};
  }
  padding: 0 10px;
`;

export const Input = styled.input<SelectListStyleProps>`
  z-index: 1;
  flex: 1;
  min-width: 0;

  font-size: ${(props) => getFontSize(props)};
  color: ${(props) => getTextColor(props)};

  ${ellipsis()};
  border: none;
  outline: none;
`;

export const List = styled.ul<SelectListStyleProps>`
  list-style-type: none;
  color: ${(props) => getTextColor(props)};
  padding: 0;
  margin: 0;
  margin-top: ${({ outlineWidth }) => `${outlineWidth}px`};
  max-height: ${({ height = 30, maxItemCount = 8 }) =>
    `${height * maxItemCount}px`};
  overflow-y: auto;
  position: absolute;
  background-color: white;
  width: 100%;
  font-size: ${(props) => getFontSize(props)};
  z-index: 2;
  border-bottom-left-radius: ${(props) => getBorderRadius(props)};
  border-bottom-right-radius: ${(props) => getBorderRadius(props)};
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background-color: whitesmoke;
    border-radius: ${(props) => getBorderRadius(props)};
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: ${(props) => getBorderRadius(props)};
    box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.1);
  }
`;

export const Item = styled.li<SelectListStyleProps>`
  height: ${(props) => getHeight(props)};
  padding: 0 10px;
  line-height: ${(props) => getHeight(props)};
  ${ellipsis()};
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
