import { ListItemMouseEvent } from "../../../../types/props/tags/listItem";
import { TIMES_OF_DAY, UNIT } from "../../../../types/time";
import * as Styled from "../style";

interface TimeTypeProps {
  timeType: TIMES_OF_DAY;
  onClick: (e: ListItemMouseEvent, value: number, unit: UNIT) => void;
  itemStyle?: React.CSSProperties;
}

const TimeType = ({ timeType, onClick, itemStyle }: TimeTypeProps) => {
  return (
    <Styled.List>
      {Object.values(TIMES_OF_DAY).map((item, index) => (
        <Styled.Item
          key={index}
          active={timeType === item}
          onClick={(e) => onClick(e, index, UNIT.TIMES_OF_DAY)}
          style={itemStyle}
        >
          {item}
        </Styled.Item>
      ))}
    </Styled.List>
  );
};

export default TimeType;
