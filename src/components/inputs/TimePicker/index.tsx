import * as Style from "./style";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { HOURS, Time, TIME_TYPE } from "../../../types/time";
import useClickOutside from "../../../hooks/useClickOutside";
import useSetScrollPosition from "../../../hooks/useSetScrollPosition";
import useModal from "../../../hooks/useModal";
import useCursor from "../../../hooks/useCursor";
import { SizePropsDeprecated } from "../../../types/props";
import TimeType from "./TimeType";
import Hour from "./Hour";
import Min from "./Min";
import Seconds from "./Seconds";
import ArrowButton from "../../common/ArrowButton";

interface TimePickerProps extends SizePropsDeprecated {
  handleSelect: (value: any) => void;
  is24Hour?: boolean;
  isSelectHour?: boolean;
  isSelectMin?: boolean;
  isSelectSeconds?: boolean;
  maxItemCount?: number;
  containerActiveStyle?: React.CSSProperties;
  containerInactiveStyle?: React.CSSProperties;
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
  height = 35,
  containerActiveStyle,
  containerInactiveStyle,
  selectWrapperActiveStyle,
  selectWrapperInactiveStyle,
  listContainerStyle,
  listStyle,
  itemStyle,
}: TimePickerProps) => {
  const { isOpen, setIsOpen, handleOpenClick } = useModal();
  const [time, setTime] = useState<Time>(
    new Time({ hour: 0, min: 0, seconds: 0 })
  );
  const [timeType, setTimeType] = useState<TIME_TYPE>(TIME_TYPE.AM);
  const [hour, setHour] = useState<number>(12);
  const [min, setMin] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timeTypeRef = useRef<HTMLUListElement>(null);
  const hourRef = useRef<HTMLUListElement>(null);
  const minRef = useRef<HTMLUListElement>(null);
  const secondsRef = useRef<HTMLUListElement>(null);
  const { cursor, setCursor } = useCursor(inputRef, time);

  useClickOutside(containerRef, setIsOpen);
  useSetScrollPosition(
    hourRef,
    is24Hour ? hour * height : (hour % 12) * height,
    isOpen
  );
  useSetScrollPosition(minRef, min * height, isOpen);
  useSetScrollPosition(secondsRef, seconds * height, isOpen);

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
    <Style.Container
      ref={containerRef}
      isActive={isOpen}
      maxItemCount={maxItemCount}
      width={width}
      height={height}
      style={isOpen ? containerActiveStyle : containerInactiveStyle}
    >
      <Style.SelectWrapper
        isOpen={isOpen}
        height={height}
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
          onChange={(e) => handleChange(e)}
        />
        <ArrowButton
          handleOpenClick={handleOpenClick}
          isOpen={isOpen}
          direction={isOpen ? "Up" : "Down"}
        />
      </Style.SelectWrapper>
      {isOpen && (
        <Style.ListContainer
          maxItemCount={maxItemCount}
          height={height}
          style={listContainerStyle}
        >
          {!is24Hour && (
            <TimeType
              timeTypeRef={timeTypeRef}
              timeType={timeType}
              setTimeType={setTimeType}
              height={height}
              listStyle={listStyle}
              itemStyle={itemStyle}
            />
          )}
          {isSelectHour && (
            <Hour
              hourRef={hourRef}
              hour={hour}
              setHour={setHour}
              is24Hour={is24Hour}
              height={height}
              listStyle={listStyle}
              itemStyle={itemStyle}
            />
          )}
          {isSelectMin && (
            <Min
              minRef={minRef}
              min={min}
              setMin={setMin}
              height={height}
              listStyle={listStyle}
              itemStyle={itemStyle}
            />
          )}
          {isSelectSeconds && (
            <Seconds
              secondsRef={secondsRef}
              seconds={seconds}
              setSeconds={setSeconds}
              height={height}
              listStyle={listStyle}
              itemStyle={itemStyle}
            />
          )}
        </Style.ListContainer>
      )}
    </Style.Container>
  );
};

export default TimePicker;
