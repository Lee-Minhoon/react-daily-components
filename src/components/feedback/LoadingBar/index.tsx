import * as Style from "./style";
import Background from "../../common/Background/index";

interface LoadingBarProps {
  isFullScreen?: boolean;
  isBlockedBackground?: boolean;
  spinnerSize?: number;
  spinnerBorderWidth?: number;
  spinnerBodyColor?: string;
  spinnerBarColor?: string;
  backgroundColor?: string;
}

const LoadingBar = ({
  isFullScreen = true,
  isBlockedBackground = true,
  spinnerSize = 50,
  spinnerBorderWidth = 5,
  spinnerBodyColor = "white",
  spinnerBarColor = "gray",
  backgroundColor = "rgba(0, 0, 0, 0.2)",
}: LoadingBarProps) => {
  return (
    <Background
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
    </Background>
  );
};

export default LoadingBar;
