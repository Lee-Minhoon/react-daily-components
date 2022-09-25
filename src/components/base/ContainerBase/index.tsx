import styled from "@emotion/styled";
import { getColorByStatus } from "utilities/css";
import { TRANSITION_NORMAL } from "constants/css";
import { OUT_SHADOW, VIRTUAL_ELEMENT } from "constants/css";

export interface ContainerBaseStyleProps {
  active: boolean;
}

export const ContainerBase = styled.div<ContainerBaseStyleProps>`
  display: flex;
  align-items: center;
  position: relative;
  height: 50px;
  border: 1px solid;
  border-radius: 4px;
  border-color: ${(props) => getColorByStatus(props)};
  box-shadow: ${({ active }) => (active ? OUT_SHADOW : "initial")};
  transition: border ${TRANSITION_NORMAL}s ease-in-out,
    box-shadow ${TRANSITION_NORMAL}s ease-in-out;
`;

export const ContainerAbsoluteBase = styled.div<ContainerBaseStyleProps>`
  &::after {
    ${VIRTUAL_ELEMENT};
    border: 1px solid;
    border-radius: 4px;
    border-color: ${(props) => getColorByStatus(props)};
    box-shadow: ${({ active }) => (active ? OUT_SHADOW : "initial")};
    transition: border ${TRANSITION_NORMAL}s ease-in-out,
      box-shadow ${TRANSITION_NORMAL}s ease-in-out;
  }
`;
