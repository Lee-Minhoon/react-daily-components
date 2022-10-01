import * as Style from "../style";
import React from "react";
import { HOURS } from "../../../../types/time";
import { fillZero } from "../../../../utilities/number";

interface HourProps {
  hourRef: React.RefObject<HTMLUListElement>;
  hour: number;
  setHour: React.Dispatch<React.SetStateAction<number>>;
  itemStyle?: React.CSSProperties;
}

const Hour = ({ hourRef, hour, setHour, itemStyle }: HourProps) => {
  return (
    <Style.List ref={hourRef}>
      {HOURS.map((item, index) => (
        <Style.Item
          key={index}
          active={hour === item % 12}
          onClick={() => setHour(item % 12)}
          style={itemStyle}
        >
          {fillZero(item)}
        </Style.Item>
      ))}
    </Style.List>
  );
};

export default Hour;
