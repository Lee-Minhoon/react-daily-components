import styled from "@emotion/styled";

interface LoadingBarStyleProps {
  spinnerSize?: number;
  spinnerBorderWidth?: number;
  spinnerBodyColor?: string;
  spinnerBarColor?: string;
  backgroundColor?: string;
  isBlockedBackground?: boolean;
  isFullScreen?: boolean;
}

export const LoadingBar = styled.span<LoadingBarStyleProps>`
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

export const Spinner = styled.span<LoadingBarStyleProps>`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  border: ${({ spinnerBorderWidth, spinnerBodyColor }) =>
    `${spinnerBorderWidth}px solid ${spinnerBodyColor}`};
  border-radius: 50%;
  border-top: ${({ spinnerBorderWidth, spinnerBarColor }) =>
    `${spinnerBorderWidth}px solid ${spinnerBarColor}`};
  width: ${({ spinnerSize }) => `${spinnerSize}px`};
  height: ${({ spinnerSize }) => `${spinnerSize}px`};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  animation: spin 1s infinite linear;
`;
