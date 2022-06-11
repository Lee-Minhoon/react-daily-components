import * as Style from "./style";

interface LoadingBarProps {
  spinnerSize?: number;
  spinnerBorderWidth?: number;
  spinnerBodyColor?: string;
  spinnerBarColor?: string;
  backgroundColor?: string;
  isBlockedBackground?: boolean;
  isFullScreen?: boolean;
}

const LoadingBar = ({
  spinnerSize = 50,
  spinnerBorderWidth = 5,
  spinnerBodyColor = "white",
  spinnerBarColor = "gray",
  backgroundColor = "rgba(0, 0, 0, 0.2)",
  isBlockedBackground = true,
  isFullScreen = true,
}: LoadingBarProps) => {
  return (
    <Style.LoadingBar
      backgroundColor={backgroundColor}
      isBlockedBackground={isBlockedBackground}
      isFullScreen={isFullScreen}
    >
      <Style.Spinner
        spinnerSize={spinnerSize}
        spinnerBorderWidth={spinnerBorderWidth}
        spinnerBodyColor={spinnerBodyColor}
        spinnerBarColor={spinnerBarColor}
      />
    </Style.LoadingBar>
  );
};

export default LoadingBar;
