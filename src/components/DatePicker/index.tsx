import * as Style from "./style";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { HOURS, Time, TIME_TYPE } from "../../types/time";
import { Date, DATE_FORMAT, getCalendarDate } from "../../types/date";
import { DateTime } from "luxon";
import _ from "lodash-es";
import { replaceAt } from "../../utilities/string";
import { quotient } from "../../utilities/math";

interface DatePickerProps {
  handleSelect: (value: any) => void;
  width?: number;
  height?: number;
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
  width = 200,
  height = 30,
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date(DateTime.now()));
  const [cursor, setCursor] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOpenClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (isOpen && !containerRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen]);

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

  return (
    <Style.SelectList
      ref={containerRef}
      isOpen={isOpen}
      width={width}
      height={height}
      borderRadius={borderRadius}
      outlineWidth={outlineWidth}
      outlineColor={outlineColor}
      style={isOpen ? selectListActiveStyle : selectListInactiveStyle}
    >
      <Style.SelectWrapper
        isOpen={isOpen}
        height={height}
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
          height={height}
          fontSize={fontSize}
          textColor={textColor}
          borderRadius={borderRadius}
          outlineWidth={outlineWidth}
          outlineColor={outlineColor}
          style={listContainerStyle}
        >
          <Style.YearMonth height={height} fontSize={fontSize}>
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
          <Style.List style={listStyle}>
            {getCalendarDate(date.getDateTime()).map((item, index) => (
              <Style.Item
                key={index}
                isSelected={date.isEqualDate(item)}
                onClick={() => handleSelectClick(item)}
                height={height}
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
