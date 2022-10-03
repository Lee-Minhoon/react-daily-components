import * as Styled from "./style";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Time, TIMES_OF_DAY, UNIT } from "../../../types/time";
import useClickOutside from "../../../hooks/useClickOutside";
import useSetScrollPosition from "../../../hooks/useSetScrollPosition";
import { InputOnchangeProperty, SizeProps } from "../../../types/props";
import TimeType from "./TimeType";
import Hour from "./Hour";
import Min from "./Min";
import Seconds from "./Seconds";
import ArrowButton from "../../common/ArrowButton";
import { getSizeProps } from "../../../utilities/props";
import useActive from "../../../hooks/useActive";
import { dispatchChange } from "../../../utilities/event";
import {
  InputChangeEvent,
  InputFocusEvent,
  InputForwardedRef,
  InputOnFoucsProperty,
} from "../../../types/props/tags/input";
import { replaceAt } from "../../../utilities/string";
import _ from "lodash";
import { ListItemMouseEvent } from "../../../types/props/tags/listItem";
import useCursor from "../../../hooks/useCursor";

interface TimePickerProps extends SizeProps {
  show24Hour?: boolean;
  showSeconds?: boolean;
  showItemCount?: number;

  value: string;
  onChange: InputOnchangeProperty;
  onFocus?: InputOnFoucsProperty;
  onSearch?: InputOnchangeProperty;

  style?: React.CSSProperties;
  listStyle?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
}

const TimePicker = forwardRef(
  (props: TimePickerProps, forwardedRef: InputForwardedRef) => {
    const {
      show24Hour = false,
      showSeconds = false,
      showItemCount = 8,
      value,
      onChange,
      onFocus = () => {},
      onSearch = () => {},
      listStyle,
      itemStyle,
    } = props;
    const { active, setActive, handleActive } = useActive();
    const [time, setTime] = useState<Time>(Time.string("" + value));
    const [timesOfDay, setTimesOfDay] = useState<TIMES_OF_DAY>(
      time.getTimesOfDay()
    );
    const [hour, setHour] = useState<number>(time.getHour() % 12);
    const [min, setMin] = useState<number>(time.getMin());
    const [seconds, setSeconds] = useState<number>(time.getSeconds());
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const hourRef = useRef<HTMLUListElement>(null);
    const minRef = useRef<HTMLUListElement>(null);
    const secondsRef = useRef<HTMLUListElement>(null);
    const { setCursor } = useCursor(inputRef, time);

    const itemHeight =
      containerRef.current?.getElementsByTagName("li")[0].clientHeight ?? 0;

    useClickOutside(containerRef, setActive);
    useSetScrollPosition(hourRef, hour * itemHeight, active);
    useSetScrollPosition(minRef, min * itemHeight, active);
    useSetScrollPosition(secondsRef, seconds * itemHeight, active);

    useEffect(() => {
      handleDispatchChange(time.getString({ show24Hour: true, showSeconds }));
      setTimesOfDay(time.getTimesOfDay());
      setHour(time.getHour() % 12);
      setMin(time.getMin());
      setSeconds(time.getSeconds());
    }, [time]);

    /**
     * Click handler
     */
    const handleClick = useCallback(
      (e: ListItemMouseEvent, value: number, type: UNIT) => {
        const newTime = _.cloneDeep(time);
        switch (type) {
          case UNIT.TIMES_OF_DAY:
            newTime.setHour(hour, value ? TIMES_OF_DAY.PM : TIMES_OF_DAY.AM);
            break;
          case UNIT.HOUR:
            newTime.setHour(value, time.getTimesOfDay());
            break;
          case UNIT.MIN:
            newTime.setMin(value);
            break;
          case UNIT.SECONDS:
            newTime.setSeconds(value);
            break;
        }
        setTime(newTime);
      },
      [time, hour]
    );

    /**
     * Change Handler
     */
    const handleChange = useCallback(
      (e: InputChangeEvent) => {
        const event: any = e.nativeEvent;
        const target = e.target;
        const cursor = target?.selectionStart;
        if (!cursor || !event.data) return;
        const data = event.data.toUpperCase();
        setCursor(cursor);
        // in show24Hour, only numbers are allowed
        if (show24Hour && isNaN(+data)) return;
        // in show12Hour, optionally allowed
        if (!show24Hour) {
          if (cursor === 1 && !(data === "A" || data === "P")) return;
          if (cursor === 2 && data !== "M") return;
          if (3 <= cursor && isNaN(+data)) return;
        }
        // cursor positioned char is colon or space, replaced
        if (
          target.value.charAt(cursor) === ":" ||
          target.value.charAt(cursor) === " "
        ) {
          target.value = replaceAt(target.value, cursor - 1, "");
          target.value = replaceAt(target.value, cursor, data);
          setCursor(cursor + 1);
        } else {
          target.value = replaceAt(target.value, cursor, "");
          setCursor(cursor);
        }
        setTime(Time.string(target.value));
        onSearch(e);
      },
      [show24Hour]
    );

    /**
     * Focus handler
     */
    const handleFocus = useCallback((e: InputFocusEvent) => {
      setActive(true);
      onFocus(e);
    }, []);

    /**
     * Dispatch change
     */
    const handleDispatchChange = useCallback((value: string) => {
      dispatchChange(containerRef, value);
    }, []);

    const style: React.CSSProperties = {
      ...getSizeProps(props),
      ...props.style,
    };

    return (
      <Styled.Container ref={containerRef} active={active} style={style}>
        <input
          ref={forwardedRef}
          value={value}
          onChange={onChange}
          readOnly
          hidden
        />
        <Styled.Input
          ref={inputRef}
          value={time.getString({ show24Hour, showSeconds })}
          onChange={handleChange}
          onFocus={handleFocus}
        />
        <ArrowButton
          onClick={handleActive}
          direction={active ? "Up" : "Down"}
        />
        <Styled.ListContainer
          active={active}
          itemHeight={itemStyle?.height ?? "35px"}
          showItemCount={showItemCount}
          style={listStyle}
        >
          <TimeType
            timeType={timesOfDay}
            onClick={handleClick}
            itemStyle={itemStyle}
          />
          <Hour
            hourRef={hourRef}
            hour={hour}
            onClick={handleClick}
            itemStyle={itemStyle}
          />
          <Min
            minRef={minRef}
            min={min}
            onClick={handleClick}
            itemStyle={itemStyle}
          />
          {showSeconds && (
            <Seconds
              secondsRef={secondsRef}
              seconds={seconds}
              onClick={handleClick}
              itemStyle={itemStyle}
            />
          )}
        </Styled.ListContainer>
      </Styled.Container>
    );
  }
);

export default TimePicker;
