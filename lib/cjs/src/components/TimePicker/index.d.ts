import React from "react";
import { ContainerProps } from "../../types/props";
interface TimePickerProps extends ContainerProps {
    handleSelect: (value: any) => void;
    is24Hour?: boolean;
    isSelectHour?: boolean;
    isSelectMin?: boolean;
    isSelectSeconds?: boolean;
    maxItemCount?: number;
    selectListActiveStyle?: React.CSSProperties;
    selectListInactiveStyle?: React.CSSProperties;
    selectWrapperActiveStyle?: React.CSSProperties;
    selectWrapperInactiveStyle?: React.CSSProperties;
    listContainerStyle?: React.CSSProperties;
    listStyle?: React.CSSProperties;
    itemStyle?: React.CSSProperties;
}
declare const TimePicker: ({ handleSelect, is24Hour, isSelectHour, isSelectMin, isSelectSeconds, maxItemCount, width, height, fontSize, textColor, borderRadius, outlineWidth, outlineColor, selectListActiveStyle, selectListInactiveStyle, selectWrapperActiveStyle, selectWrapperInactiveStyle, listContainerStyle, listStyle, itemStyle, }: TimePickerProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default TimePicker;
