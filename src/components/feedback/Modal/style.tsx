import styled from "@emotion/styled";
import { ContainerPropsDeprecated } from "../../../types/props";
import { getDefaultColor } from "../../../utilities/css";

export interface ModalStyleProps extends ContainerPropsDeprecated {}

export const Container = styled.div<ModalStyleProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-color: white;
  outline: ${({ theme }) => getDefaultColor(theme)};
  border-radius: 4px;
  color: ${({ theme }) => getDefaultColor(theme)};
`;

export const Header = styled.div<ModalStyleProps>`
  height: 60px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.5);
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 1.2rem;
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
