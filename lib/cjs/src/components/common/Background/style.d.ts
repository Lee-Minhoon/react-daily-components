/// <reference types="react" />
import { ContainerProps } from "../../../types/props";
export interface BackgroundStyleProps extends ContainerProps {
    isFullScreen?: boolean;
    isBlockedBackground?: boolean;
    backgroundColor?: string;
}
export declare const Background: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & BackgroundStyleProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
