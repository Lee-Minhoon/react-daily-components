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
import { ContainerPropsDeprecated } from "../../../types/props";
import ArrowButton from "../../common/ArrowButton";
import { useTheme } from "@emotion/react";

interface DatePickerProps extends ContainerPropsDeprecated {
  handleSelect: (value: any) => void;
  isMondayFirst?: boolean;
  isWeekendColor?: boolean;
  itemWidth?: number;
  itemHeight?: number;
  containerStyle?: React.CSSProperties;
  selectWrapperActiveStyle?: React.CSSProperties;
  selectWrapperInactiveStyle?: React.CSSProperties;
  listContainerStyle?: React.CSSProperties;
  listStyle?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
}

const DatePicker = ({
  handleSelect,
  isMondayFirst = true,
  isWeekendColor = true,
  width = 200,
  height = 35,
  itemWidth = 40,
  itemHeight = 30,
  containerStyle: containerActiveStyle,
  selectWrapperActiveStyle,
  selectWrapperInactiveStyle,
  listContainerStyle,
  listStyle,
  itemStyle,
}: DatePickerProps) => {
  const theme = useTheme();
  const { isOpen, setIsOpen, handleOpenClick } = useModal();
  const [date, setDate] = useState<Date>(new Date(DateTime.now()));
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { cursor, setCursor } = useCursor(inputRef, date);

  useClickOutside(containerRef, setIsOpen);

  const handleSelectClick = useCallback((item: any) => {
    setIsOpen(false);
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

  const WEEK_DAYS = _.cloneDeep(WEEK_DAY_ABBR);
  if (!isMondayFirst) {
    const LAST = WEEK_DAYS.pop();
    LAST && WEEK_DAYS.unshift(LAST);
  }

  return (
    <Style.Container
      ref={containerRef}
      width={width}
      style={containerActiveStyle}
    >
      <Style.SelectWrapper
        isActive={isOpen}
        height={height}
        style={isOpen ? selectWrapperActiveStyle : selectWrapperInactiveStyle}
      >
        <Style.Input
          ref={inputRef}
          value={date.getFullString({ DateFormat: DATE_FORMAT.DASH })}
          onChange={(e) => handleChange(e)}
        />
        <ArrowButton
          handleOpenClick={handleOpenClick}
          isOpen={isOpen}
          direction={isOpen ? "Up" : "Down"}
        />
      </Style.SelectWrapper>
      {isOpen && (
        <Style.ListContainer isOpen={isOpen} style={listContainerStyle}>
          <Style.YearMonth height={itemHeight}>
            <ArrowButton
              handleOpenClick={() =>
                setDate((date) => {
                  const newDate = _.cloneDeep(date);
                  newDate.plus({ month: -1 });
                  return newDate;
                })
              }
              isOpen={isOpen}
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
              isOpen={isOpen}
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
                  width={itemWidth}
                  height={itemHeight}
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
                isSelected={date.isEqualDate(item)}
                onClick={() => handleSelectClick(item)}
                width={itemWidth}
                height={itemHeight}
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
