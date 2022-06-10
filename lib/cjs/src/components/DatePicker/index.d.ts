import React from "react";
interface DatePickerProps {
    handleSelect: (value: any) => void;
    isMondayFirst?: boolean;
    isWeekendColor?: boolean;
    containerWidth?: number;
    containerHeight?: number;
    itemWidth?: number;
    itemHeight?: number;
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
declare const DatePicker: ({ handleSelect, isMondayFirst, isWeekendColor, containerWidth, containerHeight, itemWidth, itemHeight, fontSize, textColor, borderRadius, outlineWidth, outlineColor, selectListActiveStyle, selectListInactiveStyle, selectWrapperActiveStyle, selectWrapperInactiveStyle, listContainerStyle, listStyle, itemStyle, }: DatePickerProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default DatePicker;
