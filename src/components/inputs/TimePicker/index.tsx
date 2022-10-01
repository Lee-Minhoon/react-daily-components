import * as Style from "./style";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Time, TIME_TYPE } from "../../../types/time";
import useClickOutside from "../../../hooks/useClickOutside";
import useSetScrollPosition from "../../../hooks/useSetScrollPosition";
import useCursor from "../../../hooks/useCursor";
import { SizeProps } from "../../../types/props";
import TimeType from "./TimeType";
import Hour from "./Hour";
import Min from "./Min";
import Seconds from "./Seconds";
import ArrowButton from "../../common/ArrowButton";
import { getSizeProps } from "../../../utilities/props";
import useActive from "../../../hooks/useActive";
import { quotient } from "../../../utilities/number";

interface TimePickerProps extends SizeProps {
  value: string;
  onChange: (value: any) => void;
  show24Hour?: boolean;
  showSeconds?: boolean;
  showItemCount?: number;
  style?: React.CSSProperties;
  listStyle?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
}

const TimePicker = (props: TimePickerProps) => {
  const {
    value,
    onChange,
    show24Hour = false,
    showSeconds = false,
    showItemCount = 8,
    listStyle,
    itemStyle,
  } = props;
  const { active, setActive, handleActive } = useActive();
  const [time, setTime] = useState<Time>(Time.string("" + value));
  const [timeType, setTimeType] = useState<TIME_TYPE>(time.getTimeType());
  const [hour, setHour] = useState<number>(time.getHour() % 12);
  const [min, setMin] = useState<number>(time.getMin());
  const [seconds, setSeconds] = useState<number>(time.getSeconds());

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timeTypeRef = useRef<HTMLUListElement>(null);
  const hourRef = useRef<HTMLUListElement>(null);
  const minRef = useRef<HTMLUListElement>(null);
  const secondsRef = useRef<HTMLUListElement>(null);

  useClickOutside(containerRef, setActive);
  useSetScrollPosition(
    hourRef,
    show24Hour
      ? hour * (hourRef.current?.clientHeight ?? 0)
      : (hour % 12) * (hourRef.current?.clientHeight ?? 0),
    active
  );
  useSetScrollPosition(
    minRef,
    min * (minRef.current?.clientHeight ?? 0),
    active
  );
  useSetScrollPosition(
    secondsRef,
    seconds * (secondsRef.current?.clientHeight ?? 0),
    active
  );

  useEffect(() => {
    const newTime = new Time({
      hour: hour + (timeType === TIME_TYPE.PM ? 12 : 0),
      min,
      seconds,
    });
    setTime(newTime);
  }, [timeType, hour, min, seconds]);

  useEffect(() => {
    handleDispatchChange(time.getString({ show24Hour: true, showSeconds }));
  }, [time]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  }, []);

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement, Element>) => {
      setActive(true);
      // props.onFocus && props.onFocus(e);
    },
    []
  );

  const handleDispatchChange = useCallback((value: string) => {
    const input: any = containerRef.current?.getElementsByTagName("input")[0];
    if (input) {
      const lastValue = input.value;
      input.value = value;
      const event = new Event("input", { bubbles: true });
      const tracker = input._valueTracker;
      if (tracker) {
        tracker.setValue(lastValue);
      }
      input.dispatchEvent(event);
    }
  }, []);

  const style: React.CSSProperties = {
    ...getSizeProps(props),
    ...props.style,
  };

  return (
    <Style.Container ref={containerRef} active={active} style={style}>
      <Style.Input
        ref={inputRef}
        value={Time.string("" + value).getString({ show24Hour, showSeconds })}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <ArrowButton
        handleOpenClick={handleActive}
        isOpen={active}
        direction={active ? "Up" : "Down"}
      />
      {active && (
        <Style.ListContainer
          itemHeight={itemStyle?.height ?? "35px"}
          showItemCount={showItemCount}
          style={listStyle}
        >
          <TimeType
            timeTypeRef={timeTypeRef}
            timeType={timeType}
            setTimeType={setTimeType}
            itemStyle={itemStyle}
          />
          <Hour
            hourRef={hourRef}
            hour={hour}
            setHour={setHour}
            itemStyle={itemStyle}
          />
          <Min
            minRef={minRef}
            min={min}
            setMin={setMin}
            itemStyle={itemStyle}
          />
          {showSeconds && (
            <Seconds
              secondsRef={secondsRef}
              seconds={seconds}
              setSeconds={setSeconds}
              itemStyle={itemStyle}
            />
          )}
        </Style.ListContainer>
      )}
    </Style.Container>
  );
};

export default TimePicker;

const handleChangeHour = (
  firstDigit: boolean,
  data: number,
  dispatchData: React.Dispatch<React.SetStateAction<number>>
) => {
  if (firstDigit) {
    if (0 <= data && data < 2) {
      dispatchData(data * 10);
    } else {
      dispatchData(data);
    }
  } else {
    if (0 <= data && data < 3) {
      dispatchData((prev) => quotient(prev, 10) * 10 + data);
    } else {
      dispatchData(data);
    }
  }
};

const handleChangeMin = (
  firstDigit: boolean,
  data: number,
  dispatchData: React.Dispatch<React.SetStateAction<number>>
) => {
  if (firstDigit) {
    if (0 <= data && data <= 5) {
      dispatchData(data * 10);
    } else {
      dispatchData(data);
    }
  } else {
    dispatchData((prev) => quotient(prev, 10) * 10 + data);
  }
};

const handleChangeSeconds = (
  firstDigit: boolean,
  data: number,
  dispatchData: React.Dispatch<React.SetStateAction<number>>
) => {
  if (firstDigit) {
    if (0 <= data && data <= 5) {
      dispatchData(data * 10);
    } else {
      dispatchData(data);
    }
  } else {
    dispatchData((prev) => quotient(prev, 10) * 10 + data);
  }
};
