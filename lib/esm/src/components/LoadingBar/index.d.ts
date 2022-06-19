interface LoadingBarProps {
    isFullScreen?: boolean;
    isBlockedBackground?: boolean;
    spinnerSize?: number;
    spinnerBorderWidth?: number;
    spinnerBodyColor?: string;
    spinnerBarColor?: string;
    backgroundColor?: string;
}
declare const LoadingBar: ({ isFullScreen, isBlockedBackground, spinnerSize, spinnerBorderWidth, spinnerBodyColor, spinnerBarColor, backgroundColor, }: LoadingBarProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default LoadingBar;
