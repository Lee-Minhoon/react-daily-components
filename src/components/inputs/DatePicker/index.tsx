import * as Styled from "./style";
import React, { forwardRef, useCallback, useRef, useState } from "react";
import { Date, getCalendarDate } from "../../../types/date";
import _ from "lodash";
import { replaceAt } from "../../../utilities/string";
import useClickOutside from "../../../hooks/useClickOutside";
import useCursor from "../../../hooks/useCursor";
import { InputOnchangeProperty, SizeProps } from "../../../types/props";
import ArrowButton from "../../common/ArrowButton";
import { getSizeProps } from "../../../utilities/props";
import useActive from "../../../hooks/useActive";
import Month from "./Month";
import Weekdays from "./Weekdays";
import Days from "./Days";
import {
  InputChangeEvent,
  InputFocusEvent,
  InputForwardedRef,
  InputOnFoucsProperty,
} from "../../../types/props/tags/input";
import { dispatchChange } from "../../../utilities/event";
import {
  ListItemMouseEvent,
  ListItemOnClickProperty,
} from "../../../types/props/tags/listItem";

interface DatePickerProps extends SizeProps {
  weekdays?: Array<string>;
  mondayFirst?: boolean;
  weekendColor?: boolean;

  value: string;
  onChange: InputOnchangeProperty;
  onClick?: ListItemOnClickProperty;
  onFocus?: InputOnFoucsProperty;
  onSearch?: InputOnchangeProperty;

  style?: React.CSSProperties;
  listContainerStyle?: React.CSSProperties;
  listStyle?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
}

const DatePicker = forwardRef(
  (props: DatePickerProps, forwardedRef: InputForwardedRef) => {
    const {
      weekdays,
      mondayFirst = true,
      weekendColor = true,

      value,
      onChange,
      onClick = () => {},
      onFocus = () => {},
      onSearch = () => {},

      listContainerStyle,
      listStyle,
      itemStyle,
    } = props;

    const { active, setActive, handleActive } = useActive();
    const [date, setDate] = useState<Date>(Date.string(value));
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const { setCursor } = useCursor(inputRef, date);

    useClickOutside(containerRef, setActive);

    /**
     * Click handler
     */
    const handleClick = useCallback((e: ListItemMouseEvent, item: Date) => {
      onClick(e);
      setDate(item);
      handleDispatchChange(item.getString());
      setActive(false);
    }, []);

    /**
     * Change Handler
     */
    const handleChange = useCallback((e: InputChangeEvent) => {
      const event: any = e.nativeEvent;
      const target = e.target;
      const cursor = target?.selectionStart;
      const data = event.data;
      if (!cursor || !data) return;
      // only numbers are allowed
      if (isNaN(+data)) return;
      // cursor positioned char is dash, replaced
      if (target.value.charAt(cursor) === "-") {
        target.value = replaceAt(target.value, cursor - 1, "");
        target.value = replaceAt(target.value, cursor, data);
        setCursor(cursor + 1);
      } else {
        target.value = replaceAt(target.value, cursor, "");
        setCursor(cursor);
      }
      setDate(Date.string(target.value));
      onSearch(e);
    }, []);

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
          value={date.getString()}
          onChange={handleChange}
          onFocus={handleFocus}
        />
        <ArrowButton
          onClick={handleActive}
          direction={active ? "Up" : "Down"}
        />
        <Styled.ListContainer active={active} style={listContainerStyle}>
          <Month date={date} setDate={setDate} />
          <Weekdays
            weekdays={weekdays}
            mondayFirst={mondayFirst}
            weekendColor={weekendColor}
          />
          <Days
            calendar={getCalendarDate({ date, mondayFirst })}
            date={date}
            onClick={handleClick}
            listStyle={listStyle}
            itemStyle={itemStyle}
          />
        </Styled.ListContainer>
      </Styled.Container>
    );
  }
);

export default DatePicker;
