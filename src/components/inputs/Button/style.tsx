import styled from "@emotion/styled";
import { FULL_INSET_SHADOW, TRANSITION_NORMAL } from "../../../constants/css";
import { OUT_SHADOW } from "../../../constants/css";
import { getPrimaryColor } from "../../../utilities/css";

export interface ButtonStyleProps {}

export const Button = styled.button<ButtonStyleProps>`
  position: relative;
  padding: 0 15px;
  border-radius: 4px;
  height: 35px;
  font-size: 16px;
  &:hover {
    transition: box-shadow ${TRANSITION_NORMAL}s ease-in-out;
  }
  border: none;
  cursor: pointer;
`;

export const TextButton = styled(Button)<ButtonStyleProps>`
  color: ${({ theme }) => getPrimaryColor(theme)};
`;

export const ContainedButton = styled(Button)<ButtonStyleProps>`
  color: white;
  background-color: ${({ theme }) => getPrimaryColor(theme)};
  &:hover {
    box-shadow: ${OUT_SHADOW}, ${FULL_INSET_SHADOW};
  }
`;

export const OutlinedButton = styled(Button)<ButtonStyleProps>`
  color: ${({ theme }) => getPrimaryColor(theme)};
  background-color: white;
  border: 1px solid ${({ theme }) => getPrimaryColor(theme)};
  &:hover {
    box-shadow: ${OUT_SHADOW};
  }
`;
