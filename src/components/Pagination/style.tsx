import styled from "@emotion/styled";

interface PaginationStyleProps {
  activate?: boolean;
  width?: number;
  gap?: number;
  fontSize?: number;
  color?: string;
}

export const Pagination = styled.nav<PaginationStyleProps>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  display: flex;
  justify-content: center;
  font-size: ${({ fontSize }) => `${fontSize}px`};
`;

export const List = styled.ul<PaginationStyleProps>`
  display: flex;
  list-style-type: none;
  gap: ${({ gap }) => `${gap}px`};
  align-items: center;
  margin: 0px;
  padding: 0px;
`;

export const SvgWrapper = styled.div<PaginationStyleProps>`
  width: 1em;
  height: 1em;
`;

export const Svg = styled.svg<PaginationStyleProps>`
  display: block;
  stroke: ${({ color }) => color};
  stroke-width: 1px;
  opacity: 0.5;
  &:hover {
    opacity: ${({ activate }) => (activate ? "initial" : 0.5)};
  }
`;

export const Item = styled.span<PaginationStyleProps>`
  display: block;
  width: 1em;
  color: ${({ color }) => color};
  font-weight: ${({ activate }) => (!activate ? "bold" : "initial")};
  opacity: ${({ activate }) => (!activate ? "initial" : 0.5)};
  &:hover {
    opacity: initial;
  }
`;

export const PageItem = styled.li<PaginationStyleProps>`
  &:hover {
    cursor: ${({ activate }) => (activate ? `pointer` : "initial")};
  }
`;
