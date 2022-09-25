import { TIME_TYPE } from "../../../../types/time";
import * as Style from "../style";

interface TimeTypeProps {
  timeTypeRef: React.RefObject<HTMLUListElement>;
  timeType: TIME_TYPE;
  setTimeType: React.Dispatch<React.SetStateAction<TIME_TYPE>>;
  height?: number;
  listStyle?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
}

const TimeType = ({
  timeTypeRef,
  timeType,
  setTimeType,
  height,
  listStyle,
  itemStyle,
}: TimeTypeProps) => {
  return (
    <Style.List ref={timeTypeRef} style={listStyle}>
      {Object.values(TIME_TYPE).map((item, index) => (
        <Style.Item
          key={index}
          active={timeType === item}
          height={height}
          onClick={() => setTimeType(item)}
          style={itemStyle}
        >
          {item}
        </Style.Item>
      ))}
    </Style.List>
  );
};

export default TimeType;
