import styled from "@emotion/styled";
import { TRANSITION_FAST } from "../../constants/css";
import { ContainerProps } from "../../types/props";
import { getTextColor } from "./../../utilities/css";

export interface ButtonStyleProps extends ContainerProps {}

export const Button = styled.button<ButtonStyleProps>`
  position: relative;
  padding: 0 15px;
  border-radius: 4px;
  height: 30px;
  font-size: 16px;
  color: ${(props) => getTextColor(props)};

  &:hover {
    border-color: gray;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
  }

  border: 1px solid rgba(80, 80, 80, 0.5);
  background-color: initial;
  cursor: pointer;

  transition: border ${TRANSITION_FAST}s ease-in-out,
    box-shadow ${TRANSITION_FAST}s ease-in-out;
`;
