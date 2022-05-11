import styled from "@emotion/styled";

export interface SelectListStyleProps {
  isOpen?: boolean;
  placeholder?: string;
  maxItemCount?: number;
  width?: number;
  height?: number;
  fontSize?: number;
  textColor?: string;
  borderRadius?: number;
  outlineWidth?: number;
  activeColor?: string;
  inactiveColor?: string;
  selectListActiveStyle?: React.CSSProperties;
  selectListInactiveStyle?: React.CSSProperties;
  selectWrapperActiveStyle?: React.CSSProperties;
  selectWrapperInactiveStyle?: React.CSSProperties;
  listActiveStyle?: React.CSSProperties;
  listInactiveStyle?: React.CSSProperties;
  itemActiveStyle?: React.CSSProperties;
  itemInactiveStyle?: React.CSSProperties;
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
    outline: ${({
      isOpen,
      outlineWidth,
      inactiveColor: inactiveOutlineColor,
    }) =>
      isOpen ? `${outlineWidth}px solid ${inactiveOutlineColor}` : "initial"};
    border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  }
`;

export const SelectWrapper = styled.div<SelectListStyleProps>`
  display: flex;
  position: relative;
  align-items: center;
  height: ${({ height }) => `${height}px`};
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    outline: ${({
      isOpen,
      outlineWidth,
      activeColor: activeOutlineColor,
      inactiveColor: inactiveOutlineColor,
    }) =>
      isOpen
        ? `${outlineWidth}px solid ${activeOutlineColor}`
        : `${outlineWidth}px solid ${inactiveOutlineColor}`};
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

export const List = styled.ul<SelectListStyleProps>`
  list-style-type: none;
  color: ${({ textColor }) => textColor};
  padding: 0;
  margin: 0;
  max-height: ${({ height = 30, maxItemCount = 8 }) =>
    `${height * maxItemCount}px`};
  overflow-y: scroll;
  position: absolute;
  background-color: white;
  width: 100%;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  z-index: 2;
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: #efefef;
    border-radius: ${({ borderRadius }) => `${borderRadius}px`};
    box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: ${({ borderRadius }) => `${borderRadius}px`};
    box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.1);
  }
`;

export const Item = styled.li<SelectListStyleProps>`
  height: ${({ height }) => `${height}px`};
  padding: 0 10px;
  line-height: 30px;
  :hover {
    cursor: pointer;
    background-color: gainsboro;
  }
`;
