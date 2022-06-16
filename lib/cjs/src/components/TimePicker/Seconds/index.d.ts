import React from "react";
interface SecondsProps {
    secondsRef: React.RefObject<HTMLUListElement>;
    seconds: number;
    setSeconds: React.Dispatch<React.SetStateAction<number>>;
    height?: number;
    listStyle?: React.CSSProperties;
    itemStyle?: React.CSSProperties;
}
declare const Seconds: ({ secondsRef, seconds, setSeconds, height, listStyle, itemStyle, }: SecondsProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Seconds;
