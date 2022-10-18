import styled from "@emotion/styled";
import { getColorByStatus } from "../../../utilities/css";
import { TRANSITION_NORMAL } from "../../../constants/css";
import { OUT_SHADOW } from "../../../constants/css";

export interface ContainerBaseStyleProps {
  active: boolean;
}

export const ContainerBase = styled.div<ContainerBaseStyleProps>`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 10px 0 0;
  height: 50px;
  border: 1px solid;
  border-radius: 4px;
  border-color: ${({ active, theme }) => getColorByStatus(active, theme)};
  box-shadow: ${({ active }) => (active ? OUT_SHADOW : "initial")};
  background-color: white;
  transition: border ${TRANSITION_NORMAL}s ease-in-out,
    box-shadow ${TRANSITION_NORMAL}s ease-in-out;
`;
