import styled from "@emotion/styled";
import { ELLIPSIS } from "../../../constants/css";
import { getDefaultColor } from "../../../utilities/css";

export const InputBase = styled.input`
  flex: 1;

  height: 100%;
  min-width: 0;

  padding: 0 10px;

  border-radius: 4px;

  font-size: 1rem;
  color: ${({ theme }) => getDefaultColor(theme)};

  border: none;
  outline: none;
`;

export const InputEllipsisBase = styled(InputBase)`
  ${ELLIPSIS};
`;
