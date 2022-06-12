import styled from "@emotion/styled";

export interface InputStyleProps {
  isFocus?: boolean;
  width?: number;
  height?: number;
  fontSize?: number;
  textColor?: string;
  borderRadius?: number;
  outlineWidth?: number;
  outlineColor?: string;
}

export const Container = styled.div<InputStyleProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  position: relative;
  padding: 0 10px;
  display: flex;
  align-items: center;
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
    opacity: ${({ isFocus }) => (isFocus ? "initial" : 0.5)};
  }
`;

export const Input = styled.input<InputStyleProps>`
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
