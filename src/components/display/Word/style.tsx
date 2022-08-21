import styled from "@emotion/styled";

interface WordStyleProps {
  fontSize?: number;
  textColor?: string;
}

export const Word = styled.span<WordStyleProps>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: ${({ textColor }) => textColor};
`;
