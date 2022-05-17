import styled from "@emotion/styled";

interface TextStyleProps {
  fontSize?: number;
  textColor?: string;
}

export const Word = styled.span<TextStyleProps>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: ${({ textColor }) => textColor};
`;
