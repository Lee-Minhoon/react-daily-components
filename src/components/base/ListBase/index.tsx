import styled from "@emotion/styled";
import { OUT_SHADOW, TRANSITION_NORMAL } from "../../../constants/css";

export interface ListBaseStyleProps {
  active: boolean;
}

export const ListBase = styled.ul<ListBaseStyleProps>`
  width: 100%;
  position: absolute;
  background-color: white;
  list-style-type: none;
  padding: 0;
  margin: 0;
  z-index: 1;
  box-shadow: ${OUT_SHADOW};
  border-radius: 4px;
  opacity: ${({ active }) => (active ? "1" : "0")};
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
  transition: opacity ${TRANSITION_NORMAL}s linear,
    visibility ${TRANSITION_NORMAL}s linear;
`;

export const ListContainerBase = styled.div<ListBaseStyleProps>`
  width: 100%;
  position: absolute;
  background-color: white;
  z-index: 1;
  box-shadow: ${OUT_SHADOW};
  border-radius: 4px;
  opacity: ${({ active }) => (active ? "1" : "0")};
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
  transition: opacity ${TRANSITION_NORMAL}s linear,
    visibility ${TRANSITION_NORMAL}s linear;
`;
