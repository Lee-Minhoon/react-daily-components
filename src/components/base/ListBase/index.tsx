import styled from "@emotion/styled";
import { OUT_SHADOW, VIRTUAL_ELEMENT } from "../../../constants/css";

export interface ListBaseStyleProps {}

export const ListBase = styled.ul<ListBaseStyleProps>`
  width: 100%;
  position: absolute;
  background-color: white;
  z-index: 1;
  box-shadow: ${OUT_SHADOW};
  border-radius: 4px;
`;
