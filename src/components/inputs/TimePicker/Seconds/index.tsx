import * as Style from "../style";
import React from "react";

interface SecondsProps {
  secondsRef: React.RefObject<HTMLUListElement>;
  seconds: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  height?: number;
  listStyle?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
}

const Seconds = ({
  secondsRef,
  seconds,
  setSeconds,
  height,
  listStyle,
  itemStyle,
}: SecondsProps) => {
  return (
    <Style.List ref={secondsRef} style={listStyle}>
      {Array.from(new Array(60)).map((item, index) => (
        <Style.Item
          key={index}
          active={seconds === index}
          height={height}
          onClick={() => setSeconds(index)}
          style={itemStyle}
        >
          {index}
        </Style.Item>
      ))}
    </Style.List>
  );
};

export default Seconds;
