import styled from "@emotion/styled";
import { ContainerProps } from "../../types/props";

export interface ButtonStyleProps extends ContainerProps {}

export const Button = styled.button<ButtonStyleProps>`
  color: ${({ textColor }) => textColor};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  padding: 0 10px;
  border: none;
  background-color: initial;
  cursor: pointer;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    outline: ${({ outlineWidth, outlineColor }) =>
      `${outlineWidth}px solid ${outlineColor}`};
    border-radius: ${({ borderRadius }) => `${borderRadius}px`};
    opacity: 0.5;
  }
  &:hover {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
    &::after {
      opacity: 1;
    }
  }
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
