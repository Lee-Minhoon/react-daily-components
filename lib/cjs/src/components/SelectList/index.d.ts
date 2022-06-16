import React from "react";
import { ContainerProps } from "../../types/props";
interface SelectListProps extends ContainerProps {
    itemList: Array<string>;
    value: string;
    handleSelect: (value: string) => void;
    isSearchable?: boolean;
    placeholder?: string;
    maxItemCount?: number;
    containerActiveStyle?: React.CSSProperties;
    containerInactiveStyle?: React.CSSProperties;
    selectWrapperActiveStyle?: React.CSSProperties;
    selectWrapperInactiveStyle?: React.CSSProperties;
    listStyle?: React.CSSProperties;
    itemStyle?: React.CSSProperties;
}
declare const SelectList: ({ itemList, value, handleSelect, isSearchable, placeholder, maxItemCount, width, height, fontSize, textColor, borderRadius, outlineWidth, outlineColor, containerActiveStyle, containerInactiveStyle, selectWrapperActiveStyle, selectWrapperInactiveStyle, listStyle, itemStyle, }: SelectListProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default SelectList;
