import * as Style from "./style";

interface BackgroundProps {
  children: JSX.Element;
  isFullScreen?: boolean;
  isBlockedBackground?: boolean;
  backgroundColor?: string;
}

const Background = ({
  children,
  isFullScreen = true,
  isBlockedBackground = true,
  backgroundColor = "rgba(0, 0, 0, 0.2)",
}: BackgroundProps) => {
  return (
    <Style.Background
      backgroundColor={backgroundColor}
      isBlockedBackground={isBlockedBackground}
      isFullScreen={isFullScreen}
    >
      {children}
    </Style.Background>
  );
};

export default Background;
