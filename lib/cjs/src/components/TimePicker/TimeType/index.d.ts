/// <reference types="react" />
import { TIME_TYPE } from "../../../types/time";
interface TimeTypeProps {
    timeTypeRef: React.RefObject<HTMLUListElement>;
    timeType: TIME_TYPE;
    setTimeType: React.Dispatch<React.SetStateAction<TIME_TYPE>>;
    height?: number;
    listStyle?: React.CSSProperties;
    itemStyle?: React.CSSProperties;
}
declare const TimeType: ({ timeTypeRef, timeType, setTimeType, height, listStyle, itemStyle, }: TimeTypeProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default TimeType;
