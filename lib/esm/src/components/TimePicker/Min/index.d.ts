import React from "react";
interface MinProps {
    minRef: React.RefObject<HTMLUListElement>;
    min: number;
    setMin: React.Dispatch<React.SetStateAction<number>>;
    height?: number;
    listStyle?: React.CSSProperties;
    itemStyle?: React.CSSProperties;
}
declare const Min: ({ minRef, min, setMin, height, listStyle, itemStyle, }: MinProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Min;
