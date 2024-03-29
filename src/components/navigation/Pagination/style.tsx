import styled from "@emotion/styled";
import { getDefaultColor } from "../../../utilities/css";

interface PaginationStyleProps {
  activate?: boolean;
  width?: number;
  gap?: number;
  color?: string;
}

export const Container = styled.nav<PaginationStyleProps>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  display: flex;
  justify-content: center;
`;

export const List = styled.ul<PaginationStyleProps>`
  display: flex;
  list-style-type: none;
  gap: ${({ gap }) => `${gap}px`};
  align-items: center;
  margin: 0px;
  padding: 0px;
`;

export const Svg = styled.svg<PaginationStyleProps>`
  width: 1em;
  height: 1em;
  display: block;
  stroke: ${({ color }) => color};
  stroke-width: 1px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

export const PageItem = styled.li<PaginationStyleProps>`
  cursor: ${({ activate }) => (activate ? `pointer` : "initial")};
  width: 1em;
  color: ${({ theme }) => getDefaultColor(theme)};
  font-weight: ${({ activate }) => (!activate ? "bold" : "initial")};
  opacity: ${({ activate }) => (!activate ? "initial" : 0.5)};
  &:hover {
    opacity: initial;
  }
`;
