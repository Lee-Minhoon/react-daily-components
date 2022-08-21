import styled from "@emotion/styled";
import { SizeProps } from "../../../types/props";
import { ContainerBase } from "../../base/ContainerBase";
import { InputBase } from "../../base/InputBase";

export interface InputStyleProps extends SizeProps {}

export const InputContainer = styled(ContainerBase)<InputStyleProps>`
  display: flex;
  min-width: 0;
  padding: 0 10px;
  width: ${({ width = 200 }) => `${width}px`};
  height: ${({ height = 35 }) => `${height}px`};
`;

export const Input = styled(InputBase)<InputStyleProps>``;
