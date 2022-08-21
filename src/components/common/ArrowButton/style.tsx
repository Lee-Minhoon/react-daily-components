import styled from "@emotion/styled";

interface ArrowButtonStyleProps {
  isOpen?: boolean;
  outlineColor?: string;
  outlineWidth?: number;
}

export const Button = styled.button<ArrowButtonStyleProps>`
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

export const Svg = styled.svg<ArrowButtonStyleProps>`
  display: block;
  stroke: ${(props) => props.theme.defaultColor ?? "gray"};
  stroke-width: 1px;
`;

// export const ArrowButton = styled.button<SelectListStyleProps>`
//   font-size: ${({ fontSize }) => `${fontSize}px`};
//   width: 1em;
//   height: 1em;
//   padding: 0;
//   border: none;
//   :hover {
//     cursor: pointer;
//   }
//   background-color: initial;
//   z-index: 1;
// `;
