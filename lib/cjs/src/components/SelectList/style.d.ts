/// <reference types="react" />
export interface SelectListStyleProps {
    isOpen?: boolean;
    placeholder?: string;
    maxItemCount?: number;
    width?: number;
    height?: number;
    fontSize?: number;
    textColor?: string;
    borderRadius?: number;
    outlineWidth?: number;
    activeColor?: string;
    inactiveColor?: string;
    selectListActiveStyle?: React.CSSProperties;
    selectListInactiveStyle?: React.CSSProperties;
    selectWrapperActiveStyle?: React.CSSProperties;
    selectWrapperInactiveStyle?: React.CSSProperties;
    listActiveStyle?: React.CSSProperties;
    listInactiveStyle?: React.CSSProperties;
    itemActiveStyle?: React.CSSProperties;
    itemInactiveStyle?: React.CSSProperties;
}
export declare const SelectList: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & SelectListStyleProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const SelectWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & SelectListStyleProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const Input: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & SelectListStyleProps, import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {}>;
export declare const Button: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & SelectListStyleProps, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
export declare const List: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & SelectListStyleProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, {}>;
export declare const Item: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & SelectListStyleProps, import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, {}>;
