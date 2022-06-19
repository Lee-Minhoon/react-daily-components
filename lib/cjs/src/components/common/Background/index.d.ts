/// <reference types="react" />
interface BackgroundProps {
    children: JSX.Element;
    isFullScreen?: boolean;
    isBlockedBackground?: boolean;
    backgroundColor?: string;
}
declare const Background: ({ children, isFullScreen, isBlockedBackground, backgroundColor, }: BackgroundProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Background;
