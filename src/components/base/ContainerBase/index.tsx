import styled from "@emotion/styled";
import { TRANSITION_NORMAL } from "../../../constants/css";
import { OUT_SHADOW, VIRTUAL_ELEMENT } from "../../../constants/css";

interface ContainerBaseStyleProps {
  isActive: boolean;
}

export const ContainerBase = styled.div<ContainerBaseStyleProps>`
  border: 1px solid;
  border-radius: 4px;
  border-color: ${({ isActive, theme }) =>
    isActive ? theme.primaryColor ?? "gray" : theme.defaultColor ?? "gray"};
  box-shadow: ${({ isActive }) => (isActive ? OUT_SHADOW : "initial")};
  transition: border ${TRANSITION_NORMAL}s ease-in-out,
    box-shadow ${TRANSITION_NORMAL}s ease-in-out;
`;

export const ContainerAbsoluteBase = styled.div<ContainerBaseStyleProps>`
  &::after {
    ${VIRTUAL_ELEMENT};
    border: 1px solid;
    border-radius: 4px;
    border-color: ${({ isActive, theme }) =>
      isActive ? theme.primaryColor ?? "gray" : theme.defaultColor ?? "gray"};
    box-shadow: ${({ isActive }) => (isActive ? OUT_SHADOW : "initial")};
    transition: border ${TRANSITION_NORMAL}s ease-in-out,
      box-shadow ${TRANSITION_NORMAL}s ease-in-out;
  }
`;
