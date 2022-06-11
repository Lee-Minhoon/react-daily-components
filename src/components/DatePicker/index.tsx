import * as Style from "./style";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { HOURS, Time, TIME_TYPE } from "../../types/time";
import {
  Date,
  DATE_FORMAT,
  getCalendarDate,
  WEEK_DAY_ABBR,
} from "../../types/date";
import { DateTime } from "luxon";
import _ from "lodash-es";
import { replaceAt } from "../../utilities/string";
import { quotient } from "../../utilities/math";
import useClickOutside from "../../hooks/useClickOutside";
import useModal from "../../hooks/useModal";

interface DatePickerProps {
  handleSelect: (value: any) => void;
  isMondayFirst?: boolean;
  isWeekendColor?: boolean;
  containerWidth?: number;
  containerHeight?: number;
  itemWidth?: number;
  itemHeight?: number;
  fontSize?: number;
  textColor?: string;
  borderRadius?: number;
  outlineWidth?: number;
  outlineColor?: string;
  selectListActiveStyle?: React.CSSProperties;
  selectListInactiveStyle?: React.CSSProperties;
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
  containerWidth = 200,
  containerHeight = 30,
  itemWidth = 40,
  itemHeight = 30,
  fontSize = 16,
  textColor = "gray",
  borderRadius = 5,
  outlineWidth = 1,
  outlineColor = "gray",
  selectListActiveStyle,
  selectListInactiveStyle,
  selectWrapperActiveStyle,
  selectWrapperInactiveStyle,
  listContainerStyle,
  listStyle,
  itemStyle,
}: DatePickerProps) => {
  const { isOpen, setIsOpen, handleOpenClick } = useModal();
  const [date, setDate] = useState<Date>(new Date(DateTime.now()));
  const [cursor, setCursor] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useClickOutside(containerRef, setIsOpen);

  const handleSelectClick = useCallback((item: any) => {
    setIsOpen(false);
    setDate(item);
    handleSelect(item);
  }, []);

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.selectionStart = cursor;
    inputRef.current.selectionEnd = cursor;
    // inputRef.current.value = time.getString();
  }, [date, cursor]);

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
    <Style.SelectList
      ref={containerRef}
      isOpen={isOpen}
      width={containerWidth}
      height={containerHeight}
      borderRadius={borderRadius}
      outlineWidth={outlineWidth}
      outlineColor={outlineColor}
      style={isOpen ? selectListActiveStyle : selectListInactiveStyle}
    >
      <Style.SelectWrapper
        isOpen={isOpen}
        height={containerHeight}
        borderRadius={borderRadius}
        outlineWidth={outlineWidth}
        outlineColor={outlineColor}
        style={isOpen ? selectWrapperActiveStyle : selectWrapperInactiveStyle}
      >
        <Style.Input
          ref={inputRef}
          value={date.getFullString({ DateFormat: DATE_FORMAT.DASH })}
          fontSize={fontSize}
          textColor={textColor}
          onChange={(e) => handleChange(e)}
        />
        <Style.Button onClick={handleOpenClick}>
          <Style.Svg
            viewBox="0 0 20 20"
            isOpen={isOpen}
            outlineColor={outlineColor}
            outlineWidth={outlineWidth}
          >
            <polyline points="2 6 10 14 18 6 10 14" />
          </Style.Svg>
        </Style.Button>
      </Style.SelectWrapper>
      {isOpen && (
        <Style.ListContainer
          isOpen={isOpen}
          fontSize={fontSize}
          textColor={textColor}
          borderRadius={borderRadius}
          outlineWidth={outlineWidth}
          outlineColor={outlineColor}
          style={listContainerStyle}
        >
          <Style.YearMonth height={itemHeight} fontSize={fontSize}>
            <Style.ArrowButton
              fontSize={fontSize}
              onClick={() =>
                setDate((date) => {
                  const newDate = _.cloneDeep(date);
                  newDate.plus({ month: -1 });
                  return newDate;
                })
              }
            >
              <Style.Svg
                viewBox="0 0 20 20"
                isOpen={isOpen}
                outlineColor={outlineColor}
                outlineWidth={outlineWidth}
              >
                <polyline points="14 2 6 10 14 18 6 10" />
              </Style.Svg>
            </Style.ArrowButton>
            {date.getYearMonthString({ DateFormat: DATE_FORMAT.DASH })}
            <Style.ArrowButton
              fontSize={fontSize}
              onClick={() =>
                setDate((date) => {
                  const newDate = _.cloneDeep(date);
                  newDate.plus({ month: 1 });
                  return newDate;
                })
              }
            >
              <Style.Svg
                viewBox="0 0 20 20"
                isOpen={isOpen}
                outlineColor={outlineColor}
                outlineWidth={outlineWidth}
              >
                <polyline points="6 2 14 10 6 18 14 10" />
              </Style.Svg>
            </Style.ArrowButton>
          </Style.YearMonth>
          <Style.WeekdayList>
            {WEEK_DAYS.map((item, index) => {
              const isSaturday = isMondayFirst ? index === 5 : index === 6;
              const isSunday = isMondayFirst ? index === 6 : index === 0;
              let weekendColor = textColor;
              if (isSaturday) weekendColor = "rgba(0, 0, 255, 0.5)";
              if (isSunday) weekendColor = "rgba(255, 0, 0, 0.5)";
              return (
                <Style.WeekdayItem
                  key={index}
                  width={itemWidth}
                  height={itemHeight}
                  fontSize={fontSize}
                  style={{ color: isWeekendColor ? weekendColor : textColor }}
                >
                  {item}
                </Style.WeekdayItem>
              );
            })}
          </Style.WeekdayList>
          <Style.List borderRadius={borderRadius} style={listStyle}>
            {getCalendarDate({
              dateTime: date.getDateTime(),
              isMondayFirst,
            }).map((item, index) => (
              <Style.Item
                key={index}
                isSelected={date.isEqualDate(item)}
                onClick={() => handleSelectClick(item)}
                width={itemWidth}
                height={itemHeight}
                fontSize={fontSize}
                borderRadius={borderRadius}
                style={itemStyle}
              >
                {item.getDay()}
              </Style.Item>
            ))}
          </Style.List>
        </Style.ListContainer>
      )}
    </Style.SelectList>
  );
};

export default DatePicker;
