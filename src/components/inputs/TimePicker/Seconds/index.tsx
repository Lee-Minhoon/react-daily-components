import * as Styled from "../style";
import React from "react";
import { UNIT } from "../../../../types/time";
import { ListItemMouseEvent } from "../../../../types/props/tags/listItem";

interface SecondsProps {
  secondsRef: React.RefObject<HTMLUListElement>;
  seconds: number;
  onClick: (e: ListItemMouseEvent, value: number, unit: UNIT) => void;
  itemStyle?: React.CSSProperties;
}

const Seconds = ({ secondsRef, seconds, onClick, itemStyle }: SecondsProps) => {
  return (
    <Styled.List ref={secondsRef}>
      {Array.from(new Array(60)).map((item, index) => (
        <Styled.Item
          key={index}
          active={seconds === index}
          onClick={(e) => onClick(e, index, UNIT.SECONDS)}
          style={itemStyle}
        >
          {index}
        </Styled.Item>
      ))}
    </Styled.List>
  );
};

export default Seconds;
