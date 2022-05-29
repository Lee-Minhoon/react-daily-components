import React from "react";
interface DatePickerProps {
    handleSelect: (value: any) => void;
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
declare const DatePicker: ({ handleSelect, width, height, fontSize, textColor, borderRadius, outlineWidth, outlineColor, selectListActiveStyle, selectListInactiveStyle, selectWrapperActiveStyle, selectWrapperInactiveStyle, listContainerStyle, listStyle, itemStyle, }: DatePickerProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default DatePicker;
