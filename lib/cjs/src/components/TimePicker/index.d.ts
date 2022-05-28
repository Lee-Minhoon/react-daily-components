import React from "react";
interface SelectListProps {
    handleSelect: (value: any) => void;
    is24Hour?: boolean;
    isSelectHour?: boolean;
    isSelectMin?: boolean;
    isSelectSeconds?: boolean;
    maxItemCount?: number;
    width?: number;
    height?: number;
    fontSize?: number;
    textColor?: string;
    borderRadius?: number;
    outlineWidth?: number;
    outlineColor?: string;
    selectListActiveStyle?: React.CSSProperties;
    selectListInactiveStyle?: React.CSSProperties;
    selectWrapperActiveStyle?: React.CSSProperties;
    selectWrapperInactiveStyle?: React.CSSProperties;
    listContainerStyle?: React.CSSProperties;
    listStyle?: React.CSSProperties;
    itemStyle?: React.CSSProperties;
}
declare const TimePicker: ({ handleSelect, is24Hour, isSelectHour, isSelectMin, isSelectSeconds, maxItemCount, width, height, fontSize, textColor, borderRadius, outlineWidth, outlineColor, selectListActiveStyle, selectListInactiveStyle, selectWrapperActiveStyle, selectWrapperInactiveStyle, listContainerStyle, listStyle, itemStyle, }: SelectListProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default TimePicker;
