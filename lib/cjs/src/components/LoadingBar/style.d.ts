/// <reference types="react" />
interface LoadingBarStyleProps {
    spinnerSize?: number;
    spinnerBorderWidth?: number;
    spinnerBodyColor?: string;
    spinnerBarColor?: string;
    backgroundColor?: string;
    isBlockedBackground?: boolean;
    isFullScreen?: boolean;
}
export declare const Container: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & LoadingBarStyleProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export declare const Spinner: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & LoadingBarStyleProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export {};
