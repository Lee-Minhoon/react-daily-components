import styled from "@emotion/styled";
import { InputBase } from "components/base/InputBase";
import { TRANSITION_FAST, TRANSITION_NORMAL } from "../../../constants/css";
import { getDefaultColor, getPrimaryColor } from "utilities/css";
import { ContainerBase } from "components/base/ContainerBase";

export const Container = styled(ContainerBase)``;

export const Input = styled(InputBase)`
  // placeholder style
  &::placeholder {
    opacity: 0;
    transition: opacity ${TRANSITION_NORMAL}s ease-in-out;
  }
  &:focus {
    &::placeholder {
      opacity: 1;
    }
  }
  // label style
  + label {
    font-size: ${(props) => (props.value === "" ? "1rem" : "0.8rem")};
    top: ${(props) => (props.value === "" ? "50%" : "0%")};
  }
  &:focus + label {
    font-size: 0.8rem;
    top: 0%;
    color: ${(props) => getPrimaryColor(props)};
  }
`;

export const Label = styled.label`
  position: absolute;
  pointer-events: none;
  left: 5px;
  padding: 0 5px;
  top: 50%;
  color: ${(props) => getDefaultColor(props)};
  background-color: white;
  transform: translateY(-50%);
  transition: top ${TRANSITION_FAST}s linear,
    font-size ${TRANSITION_FAST}s linear, color ${TRANSITION_FAST}s linear;
`;
