/// <reference types="react" />
interface ArrowButtonStyleProps {
    isOpen?: boolean;
    outlineColor?: string;
    outlineWidth?: number;
}
export declare const Button: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & ArrowButtonStyleProps, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
export declare const Svg: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & ArrowButtonStyleProps, import("react").SVGProps<SVGSVGElement>, {}>;
export {};
