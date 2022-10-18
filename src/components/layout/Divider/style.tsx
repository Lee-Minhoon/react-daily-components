import styled from "@emotion/styled";
import { getDefaultColor } from "../../../utilities/css";

interface ContainerProps {
  height: number | undefined;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => `${height}px`};
`;

export const Label = styled.span`
  position: absolute;
  pointer-events: none;
  left: 50%;
  padding: 0 5px;
  transform: translateX(-50%);
  color: ${({ theme }) => getDefaultColor(theme)};
  background-color: white;
`;
