import * as Styled from "../style";
import React from "react";
import { HOURS, UNIT } from "../../../../types/time";
import { fillZero } from "../../../../utilities/number";
import { ListItemMouseEvent } from "../../../../types/props/tags/listItem";

interface HourProps {
  hourRef: React.RefObject<HTMLUListElement>;
  hour: number;
  onClick: (e: ListItemMouseEvent, value: number, unit: UNIT) => void;
  itemStyle?: React.CSSProperties;
}

const Hour = ({ hourRef, hour, onClick, itemStyle }: HourProps) => {
  return (
    <Styled.List ref={hourRef}>
      {HOURS.map((item, index) => (
        <Styled.Item
          key={index}
          active={hour === item % 12}
          onClick={(e) => onClick(e, item % 12, UNIT.HOUR)}
          style={itemStyle}
        >
          {fillZero(item)}
        </Styled.Item>
      ))}
    </Styled.List>
  );
};

export default Hour;
