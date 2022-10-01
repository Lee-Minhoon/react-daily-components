import * as Style from "../style";
import React from "react";

interface SecondsProps {
  secondsRef: React.RefObject<HTMLUListElement>;
  seconds: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  itemStyle?: React.CSSProperties;
}

const Seconds = ({
  secondsRef,
  seconds,
  setSeconds,
  itemStyle,
}: SecondsProps) => {
  return (
    <Style.List ref={secondsRef}>
      {Array.from(new Array(60)).map((item, index) => (
        <Style.Item
          key={index}
          active={seconds === index}
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
