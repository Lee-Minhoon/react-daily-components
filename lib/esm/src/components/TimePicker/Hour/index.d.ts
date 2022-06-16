import React from "react";
interface HourProps {
    hourRef: React.RefObject<HTMLUListElement>;
    hour: number;
    setHour: React.Dispatch<React.SetStateAction<number>>;
    is24Hour: boolean;
    height?: number;
    listStyle?: React.CSSProperties;
    itemStyle?: React.CSSProperties;
}
declare const Hour: ({ hourRef, hour, setHour, is24Hour, height, listStyle, itemStyle, }: HourProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Hour;
