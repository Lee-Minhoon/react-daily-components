import * as Styled from "../style";
import React from "react";
import { Date } from "../../../../types/date";
import _ from "lodash";
import ArrowButton from "../../../common/ArrowButton";

interface MonthProps {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

const Month = (props: MonthProps) => {
  const { date, setDate } = props;

  return (
    <Styled.Month>
      <ArrowButton
        onClick={() =>
          setDate((date) => {
            const newDate = _.cloneDeep(date);
            newDate.plus({ month: -1 });
            return newDate;
          })
        }
        direction="Left"
      />
      {date.getString().slice(0, 7)}
      <ArrowButton
        onClick={() =>
          setDate((date) => {
            const newDate = _.cloneDeep(date);
            newDate.plus({ month: 1 });
            return newDate;
          })
        }
        direction="Right"
      />
    </Styled.Month>
  );
};

export default Month;
