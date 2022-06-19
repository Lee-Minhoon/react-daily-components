/// <reference types="react" />
import { ContainerProps } from "../../types/props";
interface ButtonProps extends ContainerProps {
    children: JSX.Element | string;
    handleClick: () => void;
    debounce?: number;
    throttle?: number;
    buttonStyle?: React.CSSProperties;
}
declare const Button: ({ children, handleClick, debounce, throttle, width, height, fontSize, textColor, borderRadius, outlineWidth, outlineColor, buttonStyle, }: ButtonProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Button;
