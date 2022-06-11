import * as Style from "./style";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { HOURS, Time, TIME_TYPE } from "../../types/time";

interface TimePickerProps {
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
}: TimePickerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [time, setTime] = useState<Time>(
    new Time({ hour: 0, min: 0, seconds: 0 })
  );
  const [timeType, setTimeType] = useState<TIME_TYPE>(TIME_TYPE.AM);
  const [hour, setHour] = useState<number>(12);
  const [min, setMin] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [cursor, setCursor] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timeTypeRef = useRef<HTMLUListElement>(null);
  const hourRef = useRef<HTMLUListElement>(null);
  const minRef = useRef<HTMLUListElement>(null);
  const secondsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (timeTypeRef.current)
      timeTypeRef.current.scrollTop = timeType === TIME_TYPE.AM ? 0 : height;
    if (hourRef.current)
      hourRef.current.scrollTop = is24Hour
        ? hour * height
        : (hour % 12) * height;
    if (minRef.current) minRef.current.scrollTop = min * height;
    if (secondsRef.current) secondsRef.current.scrollTop = seconds * height;
  }, [isOpen]);

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
  }, [time, cursor]);

  useEffect(() => {
    const newTime = new Time({
      hour: !is24Hour
        ? timeType === TIME_TYPE.PM
          ? hour + 12 === 24
            ? 12
            : hour + 12
          : hour === 12
          ? 0
          : hour
        : hour,
      min,
      seconds,
    });
    setTime(newTime);
    handleSelect(newTime);
  }, [timeType, hour, min, seconds]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const event: any = e.nativeEvent;
      if (!inputRef.current?.selectionStart || !event.data) return;
      const data = +event.data;
      const cursor = inputRef.current?.selectionStart - 1;

      let standardPoint = 0;
      if (!is24Hour) {
        const isCursorInsideTimeType =
          cursor >= standardPoint && cursor <= standardPoint + 1;
        if (isCursorInsideTimeType) {
          setTimeType(data === 1 ? TIME_TYPE.AM : TIME_TYPE.PM);
          setCursor(standardPoint + 2);
        }
        standardPoint += 2;
      } else {
        standardPoint -= 1;
      }

      if (isSelectHour) {
        const isCursorInsideHourFirstDigit =
          cursor >= standardPoint && cursor <= standardPoint + 1;
        if (isCursorInsideHourFirstDigit) {
          if (data >= 0 && data <= 1) {
            setHour(data * 10);
            setCursor(standardPoint + 2);
          } else {
            setHour(data);
            setCursor(standardPoint + 4);
          }
        }

        const isCursorInsideHourSecondDigit = cursor === standardPoint + 2;
        if (isCursorInsideHourSecondDigit) {
          if (data >= 0 && data <= 2) {
            setHour((prev) => Math.floor(prev / 10) * 10 + data);
          } else {
            setHour(data);
          }
          setCursor(standardPoint + 4);
        }
        standardPoint += 3;
      }

      if (isSelectMin) {
        const isCursorInsideMinFirstDigit =
          cursor >= standardPoint && cursor <= standardPoint + 1;
        if (isCursorInsideMinFirstDigit) {
          if (data >= 0 && data <= 5) {
            setMin(data * 10);
            setCursor(standardPoint + 2);
          } else {
            setMin(data);
            setCursor(standardPoint + 4);
          }
        }

        const isCursorInsideMinSecondDigit = cursor === standardPoint + 2;
        if (isCursorInsideMinSecondDigit) {
          setMin((prev) => Math.floor(prev / 10) * 10 + data);
          setCursor(standardPoint + 4);
        }
        standardPoint += 3;
      }

      if (isSelectSeconds) {
        const isCursorInsideSecondsFirstDigit =
          cursor >= standardPoint && cursor <= standardPoint + 1;
        if (isCursorInsideSecondsFirstDigit) {
          if (data >= 0 && data <= 5) {
            setSeconds(data * 10);
            setCursor(standardPoint + 2);
          } else {
            setSeconds(data);
            setCursor(standardPoint + 3);
          }
        }

        const isCursorInsideSecondsSecondDigit = cursor === standardPoint + 2;
        if (isCursorInsideSecondsSecondDigit) {
          setSeconds((prev) => Math.floor(prev / 10) * 10 + data);
          setCursor(standardPoint + 3);
        }
        standardPoint += 2;
      }

      if (cursor === standardPoint) {
        setCursor(0);
      }
    },
    [is24Hour, isSelectHour, isSelectMin, isSelectSeconds]
  );

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
          outlineWidth={outlineWidth}
          style={listContainerStyle}
        >
          {!is24Hour && (
            <Style.List ref={timeTypeRef} style={listStyle}>
              {Object.values(TIME_TYPE).map((item, index) => (
                <Style.Item
                  key={index}
                  isSelected={timeType === item}
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
            <Style.List ref={hourRef} style={listStyle}>
              {(is24Hour ? Array.from(new Array(24)) : HOURS).map(
                (item, index) => (
                  <Style.Item
                    key={index}
                    isSelected={is24Hour ? hour === index : hour === item}
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
            <Style.List ref={minRef} style={listStyle}>
              {Array.from(new Array(60)).map((item, index) => (
                <Style.Item
                  key={index}
                  isSelected={min === index}
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
            <Style.List ref={secondsRef} style={listStyle}>
              {Array.from(new Array(60)).map((item, index) => (
                <Style.Item
                  key={index}
                  isSelected={seconds === index}
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
