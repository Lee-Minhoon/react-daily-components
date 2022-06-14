import * as Style from "../style";
import React from "react";
import { HOURS } from "../../../types/time";

interface HourProps {
  hourRef: React.RefObject<HTMLUListElement>;
  hour: number;
  setHour: React.Dispatch<React.SetStateAction<number>>;
  is24Hour: boolean;
  height?: number;
  listStyle?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
}

const Hour = ({
  hourRef,
  hour,
  setHour,
  is24Hour,
  height,
  listStyle,
  itemStyle,
}: HourProps) => {
  return (
    <Style.List ref={hourRef} style={listStyle}>
      {(is24Hour ? Array.from(new Array(24)) : HOURS).map((item, index) => (
        <Style.Item
          key={index}
          isSelected={is24Hour ? hour === index : hour === item}
          height={height}
          onClick={() => setHour(is24Hour ? index : item)}
          style={itemStyle}
        >
          {is24Hour ? index : item}
        </Style.Item>
      ))}
    </Style.List>
  );
};

export default Hour;
