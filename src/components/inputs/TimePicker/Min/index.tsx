import * as Styled from "../style";
import React from "react";
import { UNIT } from "../../../../types/time";
import { ListItemMouseEvent } from "../../../../types/props/tags/listItem";

interface MinProps {
  minRef: React.RefObject<HTMLUListElement>;
  min: number;
  onClick: (e: ListItemMouseEvent, value: number, unit: UNIT) => void;
  itemStyle?: React.CSSProperties;
}

const Min = ({ minRef, min, onClick, itemStyle }: MinProps) => {
  return (
    <Styled.List ref={minRef}>
      {Array.from(new Array(60)).map((item, index) => (
        <Styled.Item
          key={index}
          active={min === index}
          onClick={(e) => onClick(e, index, UNIT.MIN)}
          style={itemStyle}
        >
          {index}
        </Styled.Item>
      ))}
    </Styled.List>
  );
};

export default Min;
