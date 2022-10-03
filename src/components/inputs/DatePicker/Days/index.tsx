import * as Styled from "../style";
import { Date } from "../../../../types/date";
import _ from "lodash";
import { ListItemMouseEvent } from "../../../../types/props/tags/listItem";

interface DaysProps {
  calendar: Array<any>;
  date: Date;
  onClick: (e: ListItemMouseEvent, date: Date) => void;
  listStyle?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
}

const Days = (props: DaysProps) => {
  const { calendar, date, onClick, listStyle, itemStyle } = props;

  return (
    <Styled.Days style={listStyle}>
      {calendar.map((item, index) => (
        <Styled.Day
          key={index}
          active={date.isEqual(item)}
          onClick={(e) => onClick(e, item)}
          style={itemStyle}
        >
          {item.getDay()}
        </Styled.Day>
      ))}
    </Styled.Days>
  );
};

export default Days;
