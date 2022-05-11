/// <reference types="react" />
interface SelectListProps {
    itemList: Array<any>;
    value: any;
    handler: (value: any) => void;
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
declare const SelectList: ({ itemList, value, handler, placeholder, maxItemCount, width, height, fontSize, textColor, borderRadius, outlineWidth, activeColor, inactiveColor, selectListActiveStyle, selectListInactiveStyle, selectWrapperActiveStyle, selectWrapperInactiveStyle, listActiveStyle, listInactiveStyle, itemActiveStyle, itemInactiveStyle, }: SelectListProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default SelectList;
