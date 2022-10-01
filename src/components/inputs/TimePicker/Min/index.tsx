import * as Style from "../style";
import React from "react";

interface MinProps {
  minRef: React.RefObject<HTMLUListElement>;
  min: number;
  setMin: React.Dispatch<React.SetStateAction<number>>;
  itemStyle?: React.CSSProperties;
}

const Min = ({ minRef, min, setMin, itemStyle }: MinProps) => {
  return (
    <Style.List ref={minRef}>
      {Array.from(new Array(60)).map((item, index) => (
        <Style.Item
          key={index}
          active={min === index}
          onClick={() => setMin(index)}
          style={itemStyle}
        >
          {index}
        </Style.Item>
      ))}
    </Style.List>
  );
};

export default Min;
