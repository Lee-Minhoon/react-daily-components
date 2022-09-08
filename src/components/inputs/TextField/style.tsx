import styled from "@emotion/styled";
import {
  OUT_SHADOW,
  TRANSITION_FAST,
  TRANSITION_NORMAL,
} from "../../../constants/css";
import { getDefaultColor, getPrimaryColor } from "../../../utilities/css";

export const Container = styled.div`
  position: relative;
`;

export const Input = styled.input`
  padding: 0 10px;
  outline: none;
  height: 50px;
  border: 1px solid;
  border-radius: 4px;
  border-color: gray;
  transition: border ${TRANSITION_NORMAL}s ease-in-out,
    box-shadow ${TRANSITION_NORMAL}s ease-in-out;
  &:focus {
    border-color: ${(props) => getPrimaryColor(props)};
    box-shadow: ${OUT_SHADOW};
    &::placeholder {
      opacity: 1;
    }
  }
  &:focus + label {
    font-size: 0.8rem;
    top: 0%;
    color: ${(props) => getPrimaryColor(props)};
  }
  + label {
    font-size: ${(props) => (props.value === "" ? "1rem" : "0.8rem")};
    top: ${(props) => (props.value === "" ? "50%" : "0%")};
  }
  &::placeholder {
    opacity: 0;
    transition: opacity ${TRANSITION_NORMAL}s ease-in-out;
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
