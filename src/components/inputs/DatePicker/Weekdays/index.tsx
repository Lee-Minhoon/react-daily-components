import * as Styled from "../style";
import _ from "lodash";
import { useTheme } from "@emotion/react";

export const WEEKDAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

interface WeekdaysProps {
  weekdays?: Array<string>;
  mondayFirst?: boolean;
  weekendColor?: boolean;
}

const Weekdays = (props: WeekdaysProps) => {
  const {
    weekdays = WEEKDAYS,
    mondayFirst = true,
    weekendColor = true,
  } = props;

  const theme = useTheme();

  if (!mondayFirst) {
    const LAST = weekdays.pop();
    LAST && weekdays.unshift(LAST);
  }

  return (
    <Styled.Weekdays>
      {weekdays.map((item, index) => {
        const saturday = mondayFirst ? index === 5 : index === 6;
        const sunday = mondayFirst ? index === 6 : index === 0;
        let color = theme.defaultColor ?? "gray";
        if (saturday && weekendColor) color = "rgba(0, 0, 255, 0.5)";
        if (sunday && weekendColor) color = "rgba(255, 0, 0, 0.5)";
        return (
          <Styled.Weekday key={index} style={{ color }}>
            {item}
          </Styled.Weekday>
        );
      })}
    </Styled.Weekdays>
  );
};

export default Weekdays;
