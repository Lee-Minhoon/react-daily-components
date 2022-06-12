import styled from "@emotion/styled";

export interface InputStyleProps {
  isFocus?: boolean;
  labelLocation?: string;
  gap?: number;
  width?: number;
  height?: number;
  fontSize?: number;
  textColor?: string;
  borderRadius?: number;
  outlineWidth?: number;
  outlineColor?: string;
}

const getFlexDirection = (input: string) => {
  return input === "Left" || input === "Right" ? "row" : "column";
};

const getAlignItems = (input: string) => {
  const centerCondition =
    input === "Left" ||
    input === "Right" ||
    input === "TopCenter" ||
    input === "BotCenter";
  const rightCondition = input === "TopRight" || input === "BotRight";
  if (centerCondition) return "center";
  else if (rightCondition) return "flex-end";
  else return "initial";
};

export const Container = styled.div<InputStyleProps>`
  display: flex;
  flex-direction: ${({ labelLocation = "Left" }) =>
    getFlexDirection(labelLocation)};
  align-items: ${({ labelLocation = "Left" }) => getAlignItems(labelLocation)};
  width: ${({ width }) => `${width}px`};
  gap: ${({ gap }) => `${gap}px`};
`;

export const Label = styled.label<InputStyleProps>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: ${({ textColor }) => `${textColor}`};
  opacity: ${({ isFocus }) => (isFocus ? "initial" : 0.5)};
`;

export const InputContainer = styled.div<InputStyleProps>`
  min-width: 0;
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
