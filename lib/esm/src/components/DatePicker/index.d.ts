import React from "react";
import { ContainerProps } from "../../types/props";
interface DatePickerProps extends ContainerProps {
    handleSelect: (value: any) => void;
    isMondayFirst?: boolean;
    isWeekendColor?: boolean;
    itemWidth?: number;
    itemHeight?: number;
    containerActiveStyle?: React.CSSProperties;
    containerInactiveStyle?: React.CSSProperties;
    selectWrapperActiveStyle?: React.CSSProperties;
    selectWrapperInactiveStyle?: React.CSSProperties;
    listContainerStyle?: React.CSSProperties;
    listStyle?: React.CSSProperties;
    itemStyle?: React.CSSProperties;
}
declare const DatePicker: ({ handleSelect, isMondayFirst, isWeekendColor, width, height, itemWidth, itemHeight, fontSize, textColor, borderRadius, outlineWidth, outlineColor, containerActiveStyle, containerInactiveStyle, selectWrapperActiveStyle, selectWrapperInactiveStyle, listContainerStyle, listStyle, itemStyle, }: DatePickerProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default DatePicker;
