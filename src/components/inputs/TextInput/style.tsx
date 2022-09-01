import styled from "@emotion/styled";
import {
  OUT_SHADOW,
  TRANSITION_FAST,
  TRANSITION_NORMAL,
} from "../../../constants/css";

export const Container = styled.div`
  position: relative;
`;

export const TextInput = styled.input`
  padding: 0 10px;
  outline: none;
  height: 50px;
  border: 1px solid;
  border-radius: 4px;
  border-color: gray;
  transition: border ${TRANSITION_NORMAL}s ease-in-out,
    box-shadow ${TRANSITION_NORMAL}s ease-in-out;
  &:focus {
    border-color: ${({ theme }) => theme.primaryColor ?? "gray"};
    box-shadow: ${OUT_SHADOW};
  }
  &:focus + label {
    font-size: 0.8rem;
    top: 0%;
    color: ${({ theme }) => theme.primaryColor ?? "gray"};
  }
  + label {
    font-size: ${(props) => (props.value === "" ? "1rem" : "0.8rem")};
    top: ${(props) => (props.value === "" ? "50%" : "0%")};
  }
`;

export const Label = styled.label`
  position: absolute;
  pointer-events: none;
  left: 5px;
  padding: 0 5px;
  top: 50%;
  color: ${({ theme }) => theme.defaultColor ?? "gray"};
  background-color: white;
  transform: translateY(-50%);
  transition: top ${TRANSITION_FAST}s linear,
    font-size ${TRANSITION_FAST}s linear, color ${TRANSITION_FAST}s linear;
`;
