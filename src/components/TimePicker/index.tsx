import * as Style from "./style";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useInput from "../../hooks/useInput";
import { HOURS, Time, TIME_TYPE } from "../../types/time";

interface SelectListProps {
  handleSelect: (value: any) => void;
  is24Hour?: boolean;
  isSelectHour?: boolean;
  isSelectMin?: boolean;
  isSelectSeconds?: boolean;
  maxItemCount?: number;
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

const TimePicker = ({
  handleSelect,
  is24Hour = false,
  isSelectHour = true,
  isSelectMin = true,
  isSelectSeconds = false,
  maxItemCount = 6,
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
}: SelectListProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [time, setTime] = useState<Time>(
    new Time({ hour: 0, min: 0, seconds: 0 })
  );
  const [timeType, setTimeType] = useState<TIME_TYPE>(TIME_TYPE.AM);
  const [hour, setHour] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
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

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.selectionStart = cursor;
    inputRef.current.selectionEnd = cursor;
    // inputRef.current.value = time.getString();
  }, [time]);

  useEffect(() => {
    const newTime = new Time({
      hour:
        timeType === TIME_TYPE.PM
          ? hour + 12 === 24
            ? 12
            : hour + 12
          : hour === 12
          ? 0
          : hour,
      min,
    });
    setTime(newTime);
    handleSelect(newTime);
  }, [timeType, hour, min]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const cursor = inputRef.current?.selectionStart - 1;
    const data = +e.nativeEvent.data;
    if (!cursor || !data) return;

    let cursorPosition;
    if (is24Hour) {
      cursorPosition = [1];
    }

    const isCursorInsideTimeType = cursor >= 0 && cursor <= 1;
    if (isCursorInsideTimeType) {
      setTimeType(data === 1 ? TIME_TYPE.AM : TIME_TYPE.PM);
      setCursor(2);
    }

    const isCursorInsideHourFirstDigit =
      (cursor >= 2 && cursor <= 3) || cursor === 8;
    if (isCursorInsideHourFirstDigit) {
      if (data >= 0 && data <= 1) {
        setHour(data * 10);
        setCursor(4);
      } else {
        setHour(data);
        setCursor(6);
      }
    }

    const isCursorInsideHourSecondDigit = cursor === 4;
    if (isCursorInsideHourSecondDigit) {
      if (data >= 0 && data <= 2) {
        setHour((prev) => Math.floor(prev / 10) * 10 + data);
      } else {
        setHour(data);
      }
      setCursor(6);
    }

    const isCursorInsideMinFirstDigit = cursor >= 5 && cursor <= 6;
    if (isCursorInsideMinFirstDigit) {
      if (data >= 0 && data <= 5) {
        setMin(data * 10);
        setCursor(7);
      } else {
        setMin(data);
        setCursor(8);
      }
    }

    const isCursorInsideMinSecondDigit = cursor === 7;
    if (isCursorInsideMinSecondDigit) {
      setMin((prev) => Math.floor(prev / 10) * 10 + data);
      setCursor(8);
    }
  }, []);

  return (
    <Style.SelectList
      ref={containerRef}
      isOpen={isOpen}
      maxItemCount={maxItemCount}
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
          value={
            !is24Hour
              ? time.getString({
                  isPrintTimeType: true,
                  isPrintHour: isSelectHour,
                  isPrintMin: isSelectMin,
                  isPrintSeconds: isSelectSeconds,
                })
              : time.getString24Hour({
                  isPrintHour: isSelectHour,
                  isPrintMin: isSelectMin,
                  isPrintSeconds: isSelectSeconds,
                })
          }
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
          maxItemCount={maxItemCount}
          height={height}
          fontSize={fontSize}
          textColor={textColor}
          borderRadius={borderRadius}
          outlineColor={outlineColor}
          style={listContainerStyle}
        >
          {!is24Hour && (
            <Style.List style={listStyle}>
              {Object.values(TIME_TYPE).map((item, index) => (
                <Style.Item
                  key={index}
                  height={height}
                  onClick={() => setTimeType(item)}
                  style={itemStyle}
                >
                  {item}
                </Style.Item>
              ))}
            </Style.List>
          )}
          {isSelectHour && (
            <Style.List style={listStyle}>
              {(is24Hour ? Array.from(new Array(24)) : HOURS).map(
                (item, index) => (
                  <Style.Item
                    key={index}
                    height={height}
                    onClick={() => setHour(is24Hour ? index : item)}
                    style={itemStyle}
                  >
                    {is24Hour ? index : item}
                  </Style.Item>
                )
              )}
            </Style.List>
          )}
          {isSelectMin && (
            <Style.List style={listStyle}>
              {Array.from(new Array(60)).map((item, index) => (
                <Style.Item
                  key={index}
                  height={height}
                  onClick={() => setMin(index)}
                  style={itemStyle}
                >
                  {index}
                </Style.Item>
              ))}
            </Style.List>
          )}
          {isSelectSeconds && (
            <Style.List style={listStyle}>
              {Array.from(new Array(60)).map((item, index) => (
                <Style.Item
                  key={index}
                  height={height}
                  onClick={() => setSeconds(index)}
                  style={itemStyle}
                >
                  {index}
                </Style.Item>
              ))}
            </Style.List>
          )}
        </Style.ListContainer>
      )}
    </Style.SelectList>
  );
};

export default TimePicker;
