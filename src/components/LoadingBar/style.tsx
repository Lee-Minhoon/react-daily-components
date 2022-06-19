import styled from "@emotion/styled";

interface LoadingBarStyleProps {
  spinnerSize?: number;
  spinnerBorderWidth?: number;
  spinnerBodyColor?: string;
  spinnerBarColor?: string;
}

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
  animation: spin 1s infinite linear;
`;
