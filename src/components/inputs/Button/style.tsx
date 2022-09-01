import styled from "@emotion/styled";
import { TRANSITION_NORMAL } from "../../../constants/css";
import { OUT_SHADOW, VIRTUAL_ELEMENT } from "../../../constants/css";

export interface ButtonStyleProps {}

export const Button = styled.button<ButtonStyleProps>`
  position: relative;
  padding: 0 15px;
  border-radius: 4px;
  height: 35px;
  font-size: 16px;
  &::after {
    ${VIRTUAL_ELEMENT};
    z-index: -2;
    border-radius: inherit;
    opacity: 0.7;
    transition: opacity ${TRANSITION_NORMAL}s ease-in-out,
      box-shadow ${TRANSITION_NORMAL}s ease-in-out;
  }
  &:hover {
    &::after {
      opacity: 1;
    }
  }
  border: none;
  background-color: initial;
  cursor: pointer;
`;

export const TextButton = styled(Button)<ButtonStyleProps>`
  color: ${({ theme }) => theme.primaryColor ?? "gray"};
`;

export const ContainedButton = styled(Button)<ButtonStyleProps>`
  color: white;
  &::after {
    background-color: ${({ theme }) => theme.primaryColor ?? "gray"};
  }
  &:hover {
    &::after {
      box-shadow: ${OUT_SHADOW};
    }
  }
`;

export const OutlinedButton = styled(Button)<ButtonStyleProps>`
  color: ${({ theme }) => theme.primaryColor ?? "gray"};
  &::after {
    border: 1px solid ${({ theme }) => theme.primaryColor ?? "gray"};
  }
  &:hover {
    &::after {
      box-shadow: ${OUT_SHADOW};
    }
  }
`;
