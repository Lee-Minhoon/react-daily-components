import React from "react";
interface TextProps {
    children: string;
    fontSize?: number;
    textColor?: string;
    textStyle?: React.CSSProperties;
}
declare const Word: ({ children, fontSize, textColor, textStyle, }: TextProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Word;
