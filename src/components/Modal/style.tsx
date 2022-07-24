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

export interface ModalStyleProps extends ContainerProps {}

export const Container = styled.div<ModalStyleProps>`
  width: ${(props) => getWidth(props)};
  height: ${(props) => getHeight(props)};
  background-color: white;
  outline: ${(props) => getOutline(props)};
  border-radius: ${(props) => getBorderRadius(props)};
  font-size: ${(props) => getFontSize(props)};
  color: ${(props) => getTextColor(props)};
`;

export const Header = styled.div<ModalStyleProps>`
  height: 60px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.5);
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: ${(props) =>
    `${props.fontSize ?? props.theme.fontSize ?? 16 * 1.2}px`};
`;

export const Content = styled.div<ModalStyleProps>`
  padding: 20px;
  white-space: pre-line;
`;

export const Footer = styled.div<ModalStyleProps>`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  padding: 0 20px;
`;

// export const Input = styled.input<InputStyleProps>`
//   flex: 1;
//   min-width: 0;
//   z-index: 1;
//   background-color: rgba(0, 0, 0, 0);
//   border: none;
//   outline: none;
//   color: ${({ textColor }) => textColor};
//   font-size: ${({ fontSize }) => `${fontSize}px`};
//   overflow-x: hidden;
//   text-overflow: ellipsis;
// `;
