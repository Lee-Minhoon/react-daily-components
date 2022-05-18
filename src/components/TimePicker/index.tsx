import * as Style from "./style";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useInput from "../../hooks/useInput";
import { HOURS, Time, TIME_TYPE } from "../../types/time";

interface SelectListProps {
  handleSelect: (value: any) => void;
  is24Hour?: boolean;
  isHourSelect?: boolean;
  isMinSelect?: boolean;
  isSecondsSelect?: boolean;
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
  isHourSelect = true,
  isMinSelect = true,
  isSecondsSelect = false,
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
  const [timeType, setTimeType] = useState<TIME_TYPE>(TIME_TYPE.AM);
  const [hour, setHour] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  const handleOpenClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    handleSelect(e.target.value);
  }, []);

  // const handleSecondsSelectClick = useCallback(
  //   (seconds: number) => {
  //     setSeconds(seconds);
  //     handleSelect(new Time({ hour: hour, min: min, seconds: seconds }));
  //   },
  //   [hour, min]
  // );

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
          value={new Time({ hour, min, seconds }).getString()}
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
          {isHourSelect && (
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
          {isMinSelect && (
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
          {isSecondsSelect && (
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
