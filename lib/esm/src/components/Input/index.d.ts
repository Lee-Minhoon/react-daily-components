/// <reference types="react" />
import { ContainerProps } from "../../types/props";
export declare const REGULAR_EXPRESSIONS: {
    readonly korean: "ㄱ-ㅎ가-힣";
    readonly number: "0-9";
    readonly letter: "a-zA-Z";
    readonly lowerCase: "a-z";
    readonly upperCase: "A-Z";
    readonly blank: " ";
};
export declare type RegularExpressions = keyof typeof REGULAR_EXPRESSIONS;
export declare const LABEL_LOCATIONS: {
    readonly topLeft: "topLeft";
    readonly topCenter: "topCenter";
    readonly topRight: "topRight";
    readonly totLeft: "botLeft";
    readonly botCenter: "botCenter";
    readonly botRight: "botRight";
    readonly left: "left";
    readonly right: "right";
};
export declare type LabelLocations = typeof LABEL_LOCATIONS[keyof typeof LABEL_LOCATIONS];
interface InputProps extends ContainerProps {
    value: string;
    handleChange: (value: string) => void;
    regex?: Array<RegularExpressions> | RegExp;
    label?: string;
    labelLocation?: LabelLocations;
    gap?: number;
    containerStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
}
declare const Input: ({ value, handleChange, regex, label, labelLocation, gap, width, height, fontSize, textColor, borderRadius, outlineWidth, outlineColor, containerStyle, labelStyle, inputStyle, }: InputProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Input;
