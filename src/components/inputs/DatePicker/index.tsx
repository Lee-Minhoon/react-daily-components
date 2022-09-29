import * as Style from "./style";
import React, { useCallback, useRef, useState } from "react";
import {
  Date,
  DATE_FORMAT,
  getCalendarDate,
  WEEK_DAY_ABBR,
} from "../../../types/date";
import { DateTime } from "luxon";
import _ from "lodash";
import { replaceAt } from "../../../utilities/string";
import { quotient } from "../../../utilities/math";
import useClickOutside from "../../../hooks/useClickOutside";
import useCursor from "../../../hooks/useCursor";
import useModal from "../../../hooks/useModal";
import { SizeProps } from "../../../types/props";
import ArrowButton from "../../common/ArrowButton";
import { useTheme } from "@emotion/react";
import { getSizeProps } from "../../../utilities/props";
import useActive from "../../../hooks/useActive";

interface DatePickerProps extends SizeProps {
  handleSelect: (value: any) => void;
  isMondayFirst?: boolean;
  isWeekendColor?: boolean;
  style?: React.CSSProperties;
  listContainerStyle?: React.CSSProperties;
  listStyle?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
}

const DatePicker = (props: DatePickerProps) => {
  const {
    handleSelect,
    isMondayFirst = true,
    isWeekendColor = true,
    listContainerStyle,
    listStyle,
    itemStyle,
  } = props;
  const theme = useTheme();
  const { active, setActive, handleActive } = useActive();
  const [date, setDate] = useState<Date>(new Date(DateTime.now()));
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { cursor, setCursor } = useCursor(inputRef, date);

  useClickOutside(containerRef, setActive);

  const handleSelectClick = useCallback((item: any) => {
    setActive(false);
    setDate(item);
    handleSelect(item);
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const event: any = e.nativeEvent;
      if (!inputRef.current?.selectionStart || !event.data) return;
      const data = event.data;
      const cursor = inputRef.current?.selectionStart - 1;
      const prevValue = e.target.defaultValue;

      const isCursorInsideYear = cursor >= 0 && cursor <= 3;
      if (isCursorInsideYear) {
        setDate((prev) => {
          const newDate = _.cloneDeep(prev);
          const newYear = replaceAt(prevValue, cursor, data).slice(0, 4);
          newDate.set({ year: +newYear });
          return newDate;
        });
        setCursor(cursor === 3 ? 5 : cursor + 1);
      }

      const isCursorInsideMonth = cursor >= 5 && cursor <= 6;
      if (isCursorInsideMonth) {
        if (cursor === 5 && +data > 1) {
          setDate((prev) => {
            const newDate = _.cloneDeep(prev);
            const newMonth = replaceAt(prevValue, cursor + 1, data).slice(5, 7);
            newDate.set({ month: +newMonth % 10 });
            return newDate;
          });
          setCursor(8);
        } else {
          setDate((prev) => {
            const newDate = _.cloneDeep(prev);
            const newMonth = replaceAt(prevValue, cursor, data).slice(5, 7);
            newDate.set({ month: +newMonth > 12 ? 12 : +newMonth });
            return newDate;
          });
          setCursor(cursor === 6 ? 8 : cursor + 1);
        }
      }

      const isCursorInsideDay = cursor >= 8 && cursor <= 9;
      if (isCursorInsideDay) {
        if (cursor === 8 && +data > quotient(date.getLastDay(), 10)) {
          setDate((prev) => {
            const newDate = _.cloneDeep(prev);
            const newMonth = replaceAt(prevValue, cursor + 1, data).slice(8);
            newDate.set({ day: +newMonth % 10 });
            return newDate;
          });
          setCursor(0);
        } else {
          setDate((prev) => {
            const newDate = _.cloneDeep(prev);
            const newDay = replaceAt(prevValue, cursor, data).slice(8);
            newDate.set({
              day:
                +newDay > newDate.getLastDay() ? newDate.getLastDay() : +newDay,
            });
            return newDate;
          });
          setCursor(cursor === 9 ? 0 : cursor + 1);
        }
      }
    },
    [date]
  );

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement, Element>) => {
      setActive(true);
      // props.onFocus && props.onFocus(e);
    },
    []
  );

  const WEEK_DAYS = _.cloneDeep(WEEK_DAY_ABBR);
  if (!isMondayFirst) {
    const LAST = WEEK_DAYS.pop();
    LAST && WEEK_DAYS.unshift(LAST);
  }

  const style: React.CSSProperties = {
    ...getSizeProps(props),
    ...props.style,
  };

  return (
    <Style.Container ref={containerRef} active={active} style={style}>
      <Style.Input
        ref={inputRef}
        value={date.getFullString({ DateFormat: DATE_FORMAT.DASH })}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <ArrowButton
        handleOpenClick={handleActive}
        isOpen={active}
        direction={active ? "Up" : "Down"}
      />
      {active && (
        <Style.ListContainer style={listContainerStyle}>
          <Style.YearMonth>
            <ArrowButton
              handleOpenClick={() =>
                setDate((date) => {
                  const newDate = _.cloneDeep(date);
                  newDate.plus({ month: -1 });
                  return newDate;
                })
              }
              isOpen={active}
              direction="Left"
            />
            {date.getYearMonthString({ DateFormat: DATE_FORMAT.DASH })}
            <ArrowButton
              handleOpenClick={() =>
                setDate((date) => {
                  const newDate = _.cloneDeep(date);
                  newDate.plus({ month: 1 });
                  return newDate;
                })
              }
              isOpen={active}
              direction="Right"
            />
          </Style.YearMonth>
          <Style.WeekdayList>
            {WEEK_DAYS.map((item, index) => {
              const isSaturday = isMondayFirst ? index === 5 : index === 6;
              const isSunday = isMondayFirst ? index === 6 : index === 0;
              let weekendColor = theme.defaultColor ?? "gray";
              if (isSaturday) weekendColor = "rgba(0, 0, 255, 0.5)";
              if (isSunday) weekendColor = "rgba(255, 0, 0, 0.5)";
              return (
                <Style.WeekdayItem
                  key={index}
                  style={{
                    color: isWeekendColor
                      ? weekendColor
                      : theme.defaultColor ?? "gray",
                  }}
                >
                  {item}
                </Style.WeekdayItem>
              );
            })}
          </Style.WeekdayList>
          <Style.DateList style={listStyle}>
            {getCalendarDate({
              dateTime: date.getDateTime(),
              isMondayFirst,
            }).map((item, index) => (
              <Style.DateItem
                key={index}
                active={date.isEqualDate(item)}
                onClick={() => handleSelectClick(item)}
                style={itemStyle}
              >
                {item.getDay()}
              </Style.DateItem>
            ))}
          </Style.DateList>
        </Style.ListContainer>
      )}
    </Style.Container>
  );
};

export default DatePicker;
