import styled from "@emotion/styled";
import { ContainerProps } from "../../../types/props";

export interface BackgroundStyleProps extends ContainerProps {
  isFullScreen?: boolean;
  isBlockedBackground?: boolean;
  backgroundColor?: string;
}

export const Background = styled.span<BackgroundStyleProps>`
  width: 100%;
  height: 100%;
  display: flex;
  position: ${({ isFullScreen }) => (isFullScreen ? "fixed" : "initial")};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  z-index: ${({ isBlockedBackground }) => (isBlockedBackground ? 9999 : -1)};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
