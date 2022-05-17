interface LoadingBarProps {
    spinnerSize?: number;
    spinnerBorderWidth?: number;
    spinnerBodyColor?: string;
    spinnerBarColor?: string;
    backgroundColor?: string;
    isBlockedBackground?: boolean;
    isFullScreen?: boolean;
}
declare const LoadingBar: ({ spinnerSize, spinnerBorderWidth, spinnerBodyColor, spinnerBarColor, backgroundColor, isBlockedBackground, isFullScreen, }: LoadingBarProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default LoadingBar;
